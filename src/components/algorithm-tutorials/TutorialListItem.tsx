import { memo } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "@/components/theme/use-theme";

interface RawTutorial {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  difficulty: string;
  duration: number;
  prerequisites: string[];
  implementations: {
    python: string;
    javascript: string;
  };
  quiz: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}

const getThemeListItemClass = (theme: string) =>
  [
    "block p-4 rounded-2xl border shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1",
    theme === "dracula"
      ? "bg-background/90 border-accent2/20 text-main"
      : theme === "nord"
        ? "bg-[#3b4252] border-[#D8DEE9]/70 text-[#eceff4]"
        : theme === "light"
          ? "bg-white border-accent/20 text-gray-900"
          : theme === "solarized"
            ? "bg-[#fdf6e3]/95 border-[#93a1a1]/20 text-gray-900"
            : theme === "ps2"
              ? "bg-[#000000]/95 border-[#1a1a1a]/20 text-white"
              : theme === "re2"
                ? "bg-[#8b0000]/95 border-[#a52a2a]/20 text-white"
                : theme === "mh"
                  ? "bg-[#2c3e50]/95 border-[#34495e]/20 text-white"
                  : theme === "kingdom-hearts"
                    ? "bg-[#1e90ff]/95 border-[#4169e1]/20 text-white"
                    : theme === "fornite"
                      ? "bg-[#ffd700]/95 border-[#ffa500]/20 text-black"
                      : "bg-background/95 border-accent2/20 text-main",
  ].join(" ");

export const TutorialListItem = memo(({ tutorial }: { tutorial: RawTutorial }) => {
  const { theme } = useTheme();
  const listItemClass = getThemeListItemClass(theme);
  return (
    <Link key={tutorial.id} to={`/tutorials/${tutorial.id}`} className={listItemClass}>
      <h3 className="font-medium text-lg mb-2 text-[var(--card-text)]">{tutorial.title}</h3>
      <p className="text-sm mb-4 text-[var(--card-text)]">{tutorial.description}</p>
      <div className="flex justify-between items-center">
        <span
          className="text-xs px-2 py-1 rounded-full bg-[var(--accent)] text-white"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          {tutorial.difficulty}
        </span>
        <span className="font-semibold text-[var(--accent)] hover:underline">View Tutorial</span>
      </div>
    </Link>
  );
});
