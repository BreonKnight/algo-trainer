import "./pseudocode.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { useTheme } from "@/components/theme/use-theme";
import {
  prismDracula,
  prismNord,
  prismLight,
  prismSolarized,
  prismSnes,
  prismPs2,
  prismRe2,
  prismMh,
  prismKingdomHearts,
  prismFornite,
} from "./prismThemes";

interface PseudocodeDisplayProps {
  code: string;
}

export const PseudocodeDisplay = ({ code }: PseudocodeDisplayProps) => {
  const { theme } = useTheme();
  const isDark = ["dracula", "nord", "fortnite"].includes(theme);
  const backgroundColor = isDark ? "var(--bg-secondary)" : "var(--bg-main)";
  const textColor = isDark ? "var(--text-secondary)" : "var(--text-main)";
  const themeMap: Record<string, any> = {
    dracula: prismDracula,
    nord: prismNord,
    light: prismLight,
    solarized: prismSolarized,
    snes: prismSnes,
    ps2: prismPs2,
    re2: prismRe2,
    mh: prismMh,
    "kingdom-hearts": prismKingdomHearts,
    fornite: prismFornite,
  };
  const syntaxStyle = themeMap[theme] || prismDracula;

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
        key={theme}
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
