/**
 * Vercel caps a Route Handler request body at ~4.5MB, and base64 inflates a
 * file by ~37%. A normal phone photo is 3-5MB, so uploading one raw would 413
 * and the JSON parse of the HTML error page would surface as a cryptic
 * "Unexpected token '<'". So we downscale images in the browser first, which
 * keeps the "snap a photo" flow working instead of just rejecting big files.
 */
const MAX_IMAGE_EDGE = 1600; // px — plenty for the AI to read a textbook page
const JPEG_QUALITY = 0.85;

/** Hard ceiling on what we send to the API, after any downscaling. */
export const MAX_UPLOAD_BYTES = 3 * 1024 * 1024;
/** What the user may pick. Images above this are shrunk; PDFs are rejected. */
export const MAX_FILE_BYTES = 20 * 1024 * 1024;

const IMAGE_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/heic"];

function readAsDataUrl(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
}

/** Downscale an image with canvas. Returns null if the browser can't decode it. */
async function downscaleImage(file: File): Promise<string | null> {
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_IMAGE_EDGE / Math.max(bitmap.width, bitmap.height));
    // Small enough already and comfortably under the cap — send as-is.
    if (scale === 1 && file.size <= MAX_UPLOAD_BYTES) {
      bitmap.close?.();
      return null;
    }
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    const ctx = canvas.getContext("2d");
    if (!ctx) { bitmap.close?.(); return null; }
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close?.();
    return canvas.toDataURL("image/jpeg", JPEG_QUALITY);
  } catch {
    return null; // e.g. HEIC the browser can't decode — fall back to raw
  }
}

/**
 * Convert a file to a base64 data URL, shrinking images so the request stays
 * under the platform's body limit.
 */
export async function fileToBase64(file: File): Promise<string> {
  if (IMAGE_TYPES.includes(file.type)) {
    const shrunk = await downscaleImage(file);
    if (shrunk) return shrunk;
  }
  return readAsDataUrl(file);
}

export function checkFile(file: File): string | null {
  const okTypes = [...IMAGE_TYPES, "application/pdf"];
  if (!okTypes.includes(file.type)) return "Unsupported file type. Use PNG, JPG, or PDF.";
  // PDFs can't be downscaled in the browser, so they must already be small enough.
  if (file.type === "application/pdf" && file.size > MAX_UPLOAD_BYTES) {
    return "PDF too big (max 3 MB). Try uploading just the page you need, or a photo of it.";
  }
  if (file.size > MAX_FILE_BYTES) return "File too big (max 20 MB).";
  return null;
}
