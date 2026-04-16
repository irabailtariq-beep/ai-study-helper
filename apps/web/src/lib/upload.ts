export async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
}

export const MAX_FILE_BYTES = 20 * 1024 * 1024;

export function checkFile(file: File): string | null {
  if (file.size > MAX_FILE_BYTES) return "File too big (max 20 MB).";
  const okTypes = [
    "image/png", "image/jpeg", "image/jpg", "image/webp", "image/heic",
    "application/pdf",
  ];
  if (!okTypes.includes(file.type)) return "Unsupported file type. Use PNG, JPG, or PDF.";
  return null;
}
