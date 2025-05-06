import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus, vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./pseudocode.css";
import { useTheme } from "@/components/theme/use-theme";

interface PseudocodeDisplayProps {
  code: string;
}

export const PseudocodeDisplay = ({ code }: PseudocodeDisplayProps) => {
  const { theme } = useTheme();
  const isDark = ["dracula", "nord"].includes(theme);
  const backgroundColor = isDark ? "#23272e" : "#f8fafc";
  const textColor = isDark ? "#e5e7eb" : "#23272e";
  const syntaxStyle = isDark ? vscDarkPlus : vs;

  return (
    <div
      className="mb-4"
      style={
        {
          "--pseudocode-bg": backgroundColor,
        } as React.CSSProperties
      }
    >
      <SyntaxHighlighter
        language="python"
        style={syntaxStyle}
        customStyle={{
          backgroundColor: "var(--pseudocode-bg)",
          color: textColor,
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
          margin: 0,
          fontFamily: "JetBrains Mono, Fira Mono, Menlo, Monaco, Consolas, monospace",
          textAlign: "left",
          whiteSpace: "pre",
        }}
        showLineNumbers={true}
        codeTagProps={{
          style: {
            fontFamily: "JetBrains Mono, Fira Mono, Menlo, Monaco, Consolas, monospace",
            color: textColor,
            textAlign: "left",
            whiteSpace: "pre",
          },
          className: "pseudocode-mono",
        }}
        useInlineStyles={true}
        className="pseudocode-mono"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
