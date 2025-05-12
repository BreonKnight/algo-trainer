import { ChevronRight } from "lucide-react";

import { useTheme } from "@/components/theme/use-theme";
import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

interface AlgorithmPatternProps {
  name: string;
  type: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  useCase: string;
  pseudocode: string;
  keySteps: string[];
}

export const AlgorithmPattern = ({
  name,
  description,
  timeComplexity,
  pseudocode,
  keySteps,
}: AlgorithmPatternProps) => {
  const { theme } = useTheme();
  return (
    <div className={theme === "snes" ? "text-[#f5f3e7]" : "text-foreground"}>
      <div className="mb-2">
        <span
          className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide break-words"
          style={
            theme === "snes"
              ? { color: "#4040e0", background: "none", backgroundColor: "green" }
              : {
                  backgroundImage:
                    "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }
          }
        >
          {name}
        </span>
      </div>
      <div
        className={
          theme === "snes"
            ? "h-1 rounded my-2 w-full max-w-[4rem] mx-auto"
            : "h-1 bg-primary rounded my-2 w-full max-w-[4rem] mx-auto"
        }
        style={theme === "snes" ? { background: "#4040e0" } : {}}
      />
      <div
        className={
          theme === "snes"
            ? "mb-3 text-sm font-mono tracking-wide font-medium text-[#f5f3e7]"
            : "mb-3 text-sm font-mono tracking-wide font-medium text-muted-foreground"
        }
      >
        {timeComplexity}
      </div>
      <div
        className={
          theme === "snes"
            ? "mb-6 text-base leading-relaxed text-[#f5f3e7]"
            : "mb-6 text-base leading-relaxed text-muted-foreground"
        }
      >
        {description}
      </div>

      <PseudocodeDisplay code={pseudocode} />

      {keySteps && keySteps.length > 0 && (
        <div className="mt-4">
          {keySteps.map((step, index) => (
            <div key={index} className="flex items-start mb-1">
              <span
                className={
                  theme === "snes"
                    ? "font-bold mr-2 text-[#4040e0]"
                    : "font-bold text-foreground mr-2"
                }
              >
                {index + 1}.
              </span>
              <ChevronRight
                className={
                  theme === "snes"
                    ? "w-4 h-4 text-[#4040e0] mt-1 mr-1"
                    : "w-4 h-4 text-primary mt-1 mr-1"
                }
              />
              <span className={theme === "snes" ? "text-[#f5f3e7]" : "text-foreground"}>
                {step}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
