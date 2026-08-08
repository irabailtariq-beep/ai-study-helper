"use client";
import { useEffect, useRef } from "react";
// react-markdown 9 ships @types/react@18 internally which clashes with React 19 — cast to any.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import ReactMarkdownRaw from "react-markdown";
const ReactMarkdown = ReactMarkdownRaw as unknown as (props: any) => any;
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

/**
 * Convert simple chemistry equation text to nice Unicode.
 *   "H2O" -> "H₂O", "Ca2+" -> "Ca²⁺", "->" -> "→", "<->" -> "⇌"
 * For use inside ```chem fenced blocks AND for inline cleanup of common ions
 * the AI sometimes writes the lazy way.
 */
const SUB = "₀₁₂₃₄₅₆₇₈₉";
const SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹";
function chemPretty(src: string): string {
  let s = src;
  // Arrows
  s = s.replace(/<->|<=>|<==>/g, "⇌").replace(/->/g, "→").replace(/=>/g, "⇒");
  // Charges: H+, Ca2+, Cl-, SO42-
  s = s.replace(/([A-Za-z\)\]])(\d*)([+-])/g, (_, atom: string, n: string, sign: string) => {
    const num = (n || "").split("").map((d) => SUP[Number(d)] ?? d).join("");
    const s2 = sign === "+" ? "⁺" : "⁻";
    return atom + num + s2;
  });
  // Subscripts: H2O, CO2, Fe3O4 — convert digits that follow letters
  s = s.replace(/([A-Za-z\)\]])(\d+)/g, (_, atom: string, n: string) => {
    const sub = n.split("").map((d) => SUB[Number(d)] ?? d).join("");
    return atom + sub;
  });
  // Bullets / midline
  s = s.replace(/\s\.\s/g, " · ");
  return s;
}

/** Render a single line of markdown WITHOUT block wrappers — for use inside <li>. */
export function InlineRich({ children }: { children: string }) {
  if (!children?.trim()) return null;
  return (
    <span className="rich-output rich-inline">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[[rehypeKatex, { strict: false, output: "html" }]]}
        components={{
          // Strip block wrappers so this renders inline inside an <li>
          p: ({ children }: any) => <>{children}</>,
          ul: ({ children }: any) => <ul className="rich-ul">{children}</ul>,
          li: ({ children }: any) => <li className="rich-li">{children}</li>,
          a: ({ children, href }: any) => <a className="rich-link" href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
          code: ({ className, children, ...props }: any) => {
            const m = /language-(\w+)/.exec(className ?? "");
            if (m?.[1] === "chem") return <span className="rich-chem">{chemPretty(String(children).trim())}</span>;
            return <code className="rich-inline-code" {...props}>{children}</code>;
          },
        }}
      >{children}</ReactMarkdown>
    </span>
  );
}

/**
 * Renders AI output as rich content:
 *  - Markdown (headings, bold, lists, tables, links)
 *  - LaTeX math: $inline$ and $$display$$ — rendered via KaTeX
 *  - Mermaid diagrams in ```mermaid code blocks
 *  - Chemistry equations in ```chem code blocks (Unicode pretty-printed)
 */
/**
 * Preprocess markdown so inline triple-backtick fences become block fences.
 * AI models sometimes write "explanation: ```chem HCl -> ... ```" all on one line
 * which markdown won't recognise as a code block. We split it onto its own lines.
 */
function normalizeMarkdown(src: string): string {
  let s = src;
  // Insert newlines around ``` markers if they're inline with prose
  // Opening: any non-newline char immediately before ```lang or ```
  s = s.replace(/([^\n])(\s*)(```[a-zA-Z]*)/g, "$1\n\n$3");
  // Closing: ``` not preceded by newline (and not immediately after another fence)
  s = s.replace(/(```[a-zA-Z]*\n[\s\S]*?)(?<!\n)(\s*)(```)(?!\n)/g, "$1\n$3\n");
  // Also: if a fence opens but the body is on the same line, push body to next line
  s = s.replace(/(```[a-zA-Z]+) +([^\n].*?)(```)/g, "$1\n$2\n$3");
  // Normalize alternate LaTeX delimiters the model sometimes emits despite the prompt:
  //   \[ … \] -> $$ … $$  (display — do first)   and   \( … \) -> $ … $  (inline)
  s = s.replace(/\\\[([\s\S]*?)\\\]/g, (_m, inner) => `\n\n$$${inner}$$\n\n`);
  s = s.replace(/\\\(([\s\S]*?)\\\)/g, (_m, inner) => `$${inner}$`);
  s = escapeCurrency(s);
  return s;
}

/**
 * Stop money being parsed as maths.
 *
 * remark-math treats the text between two dollar signs as inline LaTeX, so
 * "A pen costs $5 and a book costs $12" renders as italic garbage — which hits
 * every economics, business and word-problem answer. Escaping the dollar sign
 * makes it render literally.
 *
 * Applied line by line, and only when the line has no LaTeX command and no
 * display-math fence, so real maths is never touched.
 */
function escapeCurrency(src: string): string {
  return src
    .split("\n")
    .map((line) => {
      if (line.includes("$$") || /\\[a-zA-Z]+/.test(line)) return line; // real maths — leave alone
      const dollars = (line.match(/(?<!\\)\$/g) ?? []).length;
      const currencyLike = (line.match(/(?<!\\)\$\s?\d/g) ?? []).length;
      if (currencyLike < 1) return line;
      // A single balanced $…$ that merely starts with a digit is real maths
      // ("Solve $5x + 3 = 0$"), so only treat it as money when there are two or
      // more amounts, or when the dollars are unbalanced and cannot be a span.
      const isMoney = currencyLike >= 2 || dollars % 2 === 1;
      if (!isMoney) return line;
      return line.replace(/(?<!\\)\$(?=\s?\d)/g, "\\$");
    })
    .join("\n");
}

export function RichOutput({ children, className = "" }: { children: string; className?: string }) {
  if (!children?.trim()) return null;
  const md = normalizeMarkdown(children);
  return (
    <div className={`rich-output ${className}`}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[[rehypeKatex, { strict: false, output: "html" }]]}
        components={{
          code({ className, children, ...props }: any) {
            const m = /language-(\w+)/.exec(className ?? "");
            const lang = m?.[1];
            if (lang === "mermaid") return <MermaidBlock chart={String(children).trim()} />;
            if (lang === "chem") {
              return (
                <div className="rich-chem-block">
                  {String(children).trim().split("\n").map((line, i) => (
                    <div key={i}>{chemPretty(line)}</div>
                  ))}
                </div>
              );
            }
            const isInline = !className;
            if (isInline) return <code className="rich-inline-code" {...props}>{children}</code>;
            return (
              <pre className="rich-code-block">
                <code className={className} {...props}>{children}</code>
              </pre>
            );
          },
          h1: ({ children }: any) => <h2 className="rich-h2">{children}</h2>,
          h2: ({ children }: any) => <h3 className="rich-h3">{children}</h3>,
          h3: ({ children }: any) => <h4 className="rich-h4">{children}</h4>,
          p:  ({ children }: any) => <p className="rich-p">{children}</p>,
          ul: ({ children }: any) => <ul className="rich-ul">{children}</ul>,
          ol: ({ children }: any) => <ol className="rich-ol">{children}</ol>,
          li: ({ children }: any) => <li className="rich-li">{children}</li>,
          a:  ({ children, href }: any) => <a className="rich-link" href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
          blockquote: ({ children }: any) => <blockquote className="rich-quote">{children}</blockquote>,
          table: ({ children }: any) => <div className="rich-table-wrap"><table className="rich-table">{children}</table></div>,
        }}
      >{md}</ReactMarkdown>

      {/* Scoped styles — easier than wrangling Tailwind for prose */}
      <style>{`
        .rich-output { font-size: 16px; line-height: 1.7; color: var(--ash-text); }
        .rich-output > :first-child { margin-top: 0; }
        .rich-h2 { font-size: 1.4em; font-weight: 700; margin: 1.6em 0 0.5em; line-height: 1.25; }
        .rich-h3 { font-size: 1.18em; font-weight: 600; margin: 1.3em 0 0.4em; line-height: 1.3; }
        .rich-h4 { font-size: 1.05em; font-weight: 600; margin: 1.1em 0 0.3em; }
        .rich-p { margin: 0.65em 0; }
        .rich-ul, .rich-ol { margin: 0.7em 0 0.7em 1.4em; }
        .rich-li { margin: 0.35em 0; }
        .rich-li > p { margin: 0.2em 0; }
        .rich-link { color: var(--ash-primary); text-decoration: underline; }
        .rich-quote { margin: 0.9em 0; padding: 0.6em 1em; border-left: 4px solid var(--ash-primary); background: rgba(14,159,142,0.06); border-radius: 6px; color: var(--ash-text); }
        .rich-inline-code { background: rgba(15,23,42,0.07); padding: 1px 6px; border-radius: 4px; font-size: 0.92em; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
        .rich-code-block { background: rgba(15,23,42,0.05); padding: 12px 14px; border-radius: 10px; overflow-x: auto; margin: 0.8em 0; font-size: 0.92em; }
        .rich-code-block code { background: transparent; padding: 0; }
        .rich-table-wrap { overflow-x: auto; margin: 0.9em 0; }
        .rich-table { border-collapse: collapse; width: 100%; }
        .rich-table th, .rich-table td { border: 1px solid var(--ash-border); padding: 6px 10px; text-align: left; font-size: 0.95em; }
        .rich-table th { background: rgba(14,159,142,0.06); font-weight: 600; }
        /* Make KaTeX a touch larger and inline-aligned */
        .katex { font-size: 1.05em; }
        .katex-display { margin: 0.7em 0; padding: 0.4em 0; overflow-x: auto; overflow-y: hidden; }
        .rich-mermaid { display: flex; justify-content: center; padding: 12px; background: rgba(255,255,255,0.7); border-radius: 12px; border: 1px solid var(--ash-border); margin: 0.9em 0; }
        .rich-chem-block { background: linear-gradient(135deg, rgba(14,159,142,0.06), rgba(20,184,166,0.05)); border: 1px solid var(--ash-border); border-radius: 12px; padding: 14px 18px; margin: 0.9em 0; font-size: 1.15em; font-weight: 600; letter-spacing: 0.02em; line-height: 1.7; text-align: center; color: var(--ash-text); }
        .rich-chem-block > div { padding: 2px 0; }
        .rich-chem { font-weight: 600; }
        .rich-inline { display: inline; }
        .rich-inline > .rich-output { display: inline; }
      `}</style>
    </div>
  );
}

function MermaidBlock({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: "default" });
        const id = "mer_" + Math.random().toString(36).slice(2, 9);
        const { svg } = await mermaid.render(id, chart);
        if (!cancelled && ref.current) ref.current.innerHTML = svg;
      } catch (e: any) {
        if (!cancelled && ref.current) {
          ref.current.innerHTML = `<pre style="color:#dc2626;font-size:13px">Diagram failed to render: ${String(e.message || e).replace(/</g,"&lt;")}</pre>`;
        }
      }
    })();
    return () => { cancelled = true; };
  }, [chart]);
  return <div ref={ref} className="rich-mermaid" aria-label="diagram" />;
}
