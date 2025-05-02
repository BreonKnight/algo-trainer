import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./pseudocode.css";

interface PseudocodeDisplayProps {
  code: string;
}

export const PseudocodeDisplay = ({ code }: PseudocodeDisplayProps) => {
  return (
    <div className="mb-4">
      <SyntaxHighlighter
        language="python"
        style={vscDarkPlus}
        customStyle={{
          backgroundColor: "var(--background-color)",
          color: "var(--text-color)",
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
          margin: 0,
        }}
        showLineNumbers={false}
        codeTagProps={{
          style: {
            fontFamily: "monospace",
            color: "var(--text-color)",
          },
        }}
        useInlineStyles={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
