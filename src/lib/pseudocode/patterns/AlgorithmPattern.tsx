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
      {/* Title and Meta */}
      <div className="mb-2 flex flex-col gap-1">
        <span
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide break-words text-left"
          style={
            theme === "snes"
              ? { color: "#4040e0", background: "none", backgroundColor: "transparent" }
              : {
                  color: "var(--text-main)",
                  background: "var(--pseudocode-gradient)",
                }
          }
        >
          {name}
        </span>
        <div
          className={
            theme === "snes"
              ? "h-1 rounded w-16 my-1 bg-[#4040e0]"
              : "h-1 bg-primary rounded w-16 my-1"
          }
        />
        <div
          className={
            theme === "snes"
              ? "inline-block px-2 py-1 rounded bg-[#4040e0]/10 text-xs font-mono tracking-wide font-medium text-[#4040e0] mb-1 w-fit"
              : "inline-block px-2 py-1 rounded bg-primary/10 text-xs font-mono tracking-wide font-medium text-primary mb-1 w-fit"
          }
        >
          {timeComplexity}
        </div>
      </div>
      {/* Description */}
      <div
        className={
          theme === "snes"
            ? "mb-6 text-base leading-relaxed text-[#f5f3e7] text-left"
            : "mb-6 text-base leading-relaxed text-muted-foreground text-left"
        }
      >
        {description}
      </div>

      {/* Pseudocode */}
      <div className="mb-4">
        <PseudocodeDisplay code={pseudocode} />
      </div>

      {/* Key Steps */}
      {keySteps && keySteps.length > 0 && (
        <div
          className={
            theme === "snes"
              ? "mt-6 bg-[#4040e0]/5 rounded-lg p-4 border border-[#4040e0]/10"
              : "mt-6 bg-primary/5 rounded-lg p-4 border border-primary/10"
          }
        >
          <div
            className={
              theme === "snes"
                ? "font-bold mb-3 text-base text-[#4040e0] flex items-center gap-2"
                : "font-bold mb-3 text-base text-primary flex items-center gap-2"
            }
          >
            <span>Key Steps</span>
            <div
              className={
                theme === "snes" ? "h-px flex-1 bg-[#4040e0]/20" : "h-px flex-1 bg-primary/20"
              }
            />
          </div>
          <div className="space-y-2">
            {keySteps.map((step, index) => (
              <div key={index} className="flex items-start group">
                <div className="flex items-center min-w-[2rem]">
                  <span
                    className={
                      theme === "snes"
                        ? "font-bold text-[#4040e0] text-sm"
                        : "font-bold text-primary text-sm"
                    }
                  >
                    {index + 1}.
                  </span>
                  <ChevronRight
                    className={
                      theme === "snes"
                        ? "w-3 h-3 text-[#4040e0]/60 mt-0.5 ml-1 group-hover:text-[#4040e0] transition-colors"
                        : "w-3 h-3 text-primary/60 mt-0.5 ml-1 group-hover:text-primary transition-colors"
                    }
                  />
                </div>
                <span
                  className={
                    theme === "snes"
                      ? "text-[#f5f3e7] text-sm leading-relaxed"
                      : "text-foreground text-sm leading-relaxed"
                  }
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
