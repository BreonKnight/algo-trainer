import { Card } from "@/components/ui/card";
import { pseudocodePatterns } from "@/lib/pseudocode";
import { patternMapping } from "@/lib/pseudocode/utils/pattern-mapping";
import styles from "@/styles/pseudocode.module.css";
import { MonsterHunterGuide } from "./MonsterHunterGuide";
import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Book, Sword } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { AlgorithmSelector } from "./AlgorithmSelector";
import { useTheme } from "@/components/theme/theme-context";
import { PatternKey } from "./types";
import { monsterHunterPatternsByCategory } from "./monsterHunterPatternsCombined";
import { categoryColors } from "@/lib/patterns";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

// Define the type for pseudocodePatterns
type PseudocodePatterns = Record<string, () => JSX.Element>;
// Get category for a pattern
const getPatternCategory = (pattern: PatternKey): string => {
  // Find the category that contains this pattern
  for (const [category, patterns] of Object.entries(
    monsterHunterPatternsByCategory
  )) {
    if (patterns.includes(pattern)) {
      return category;
    }
  }
  return "Unknown"; // Fallback category if pattern not found
};

interface PatternCardProps {
  currentPattern: PatternKey;
  onPatternChange: (pattern: PatternKey) => void;
  patternNumber?: number;
}

export function PatternCard({
  currentPattern,
  onPatternChange,
  patternNumber,
}: PatternCardProps) {
  const [showMonsterGuide, setShowMonsterGuide] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const category = getPatternCategory(currentPattern);
  const { theme } = useTheme();
  const [descHeight, setDescHeight] = useState(300);
  const descRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Add escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isExpanded) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isExpanded]);

  useEffect(() => {
    setDescHeight(300);
  }, [currentPattern]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getPseudocodePattern = (patternName: PatternKey) => {
    const typedPseudocodePatterns = pseudocodePatterns as PseudocodePatterns;

    // First try direct lookup
    const pattern = typedPseudocodePatterns[patternName];
    if (pattern) {
      return pattern;
    }

    // If not found, try to map the name
    const mappedName =
      patternMapping[patternName as keyof typeof patternMapping];
    if (mappedName) {
      return typedPseudocodePatterns[mappedName];
    }

    console.warn(`Pattern lookup failed for: ${patternName}`);
    console.log("Available patterns:", Object.keys(typedPseudocodePatterns));
    console.log("Pattern name mapping:", patternMapping);

    return null;
  };

  const pseudo = getPseudocodePattern(currentPattern);

  return isExpanded ? (
    createPortal(
      <Card
        className={cn(
          "p-4 bg-secondary/50 backdrop-blur-sm border border-secondary/20 w-full h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-secondary/30 fixed inset-0 z-[90] m-4"
        )}
        onClick={(e) => {
          // Only close if clicking outside the content area
          if (
            contentRef.current &&
            !contentRef.current.contains(e.target as Node)
          ) {
            setIsExpanded(false);
          }
        }}
      >
        <div ref={contentRef} className="flex-1 flex flex-col overflow-y-auto">
          <div className="flex-none flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0 text-left">
                <h2
                  className={cn(
                    "text-main font-bold leading-relaxed transition-all duration-300 hover:scale-[1.02] text-left",
                    isExpanded
                      ? "text-2xl sm:text-3xl md:text-4xl"
                      : "text-base sm:text-lg md:text-xl lg:text-2xl",
                    theme === "nord"
                      ? " text-white"
                      : " text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]"
                  )}
                  style={
                    theme === "nord"
                      ? undefined
                      : {
                          backgroundImage:
                            "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                        }
                  }
                >
                  {currentPattern}
                </h2>
                <span
                  className={cn(
                    categoryColors[category as keyof typeof categoryColors] ||
                      "text-secondary/80",
                    "text-xs sm:text-sm md:text-base font-medium"
                  )}
                >
                  {category}{" "}
                  {patternNumber !== undefined && `#${patternNumber}`}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="default"
                        onClick={() => setShowMonsterGuide(!showMonsterGuide)}
                        className="text-accent hover:text-accent hover:bg-secondary/20 p-2 rounded-full
                              transition-all duration-300 hover:scale-110 hover:shadow-md"
                      >
                        {showMonsterGuide ? (
                          <Book className="w-6 h-6" />
                        ) : (
                          <Sword className="w-6 h-6" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-secondary/90 backdrop-blur-sm border border-secondary/20">
                      {showMonsterGuide
                        ? "Show Pseudocode"
                        : "Show Monster Guide"}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="w-full sm:w-auto">
                <AlgorithmSelector
                  currentPattern={currentPattern}
                  onPatternChange={onPatternChange}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 min-h-0 overflow-hidden">
            {showMonsterGuide ? (
              <div className="h-full overflow-hidden rounded-xl bg-main/80 backdrop-blur-sm border border-secondary/20 mt-3 p-6 text-lg leading-relaxed">
                <MonsterHunterGuide currentPattern={currentPattern} />
              </div>
            ) : (
              <div className="h-full flex flex-col overflow-hidden">
                <div
                  ref={descRef}
                  className={`${styles.pseudocodeContainer} flex-1 w-full bg-main/80 backdrop-blur-sm rounded-xl border border-secondary/20 transition-all duration-300 mt-3 p-6 text-lg leading-relaxed`}
                  style={{
                    height: "100%",
                    minHeight: 0,
                  }}
                >
                  <div className="h-full w-full overflow-y-auto custom-scrollbar">
                    <div
                      className={`${styles.pseudocodeContent} w-full text-main p-0 text-lg leading-relaxed`}
                    >
                      {(() => {
                        if (typeof pseudo === "function") {
                          return pseudo();
                        } else {
                          return (
                            <div className="pseudocode">
                              <span className="algorithm-title">
                                {currentPattern}
                              </span>
                              <span className="algorithm-type">{category}</span>
                              <span className="algorithm-meta">
                                Time: O(n) | Space: O(n) | Use: Algorithm
                                implementation
                              </span>
                              <div className="nested">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      pseudo || "Pseudocode coming soon...",
                                  }}
                                />
                              </div>
                            </div>
                          );
                        }
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>,
      document.body
    )
  ) : (
    <Card
      className={cn(
        "p-4 bg-secondary/50 backdrop-blur-sm border border-secondary/20 w-full h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-secondary/30"
      )}
      onClick={() => setIsExpanded(true)}
    >
      <div className="flex-none flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0 text-left">
            <h2
              className={cn(
                "text-main font-bold leading-relaxed transition-all duration-300 hover:scale-[1.02] text-left",
                isExpanded
                  ? "text-2xl sm:text-3xl md:text-4xl"
                  : "text-base sm:text-lg md:text-xl lg:text-2xl",
                theme === "nord"
                  ? " text-white"
                  : " text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]"
              )}
              style={
                theme === "nord"
                  ? undefined
                  : {
                      backgroundImage:
                        "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                    }
              }
            >
              {currentPattern}
            </h2>
            <span
              className={cn(
                categoryColors[category as keyof typeof categoryColors] ||
                  "text-secondary/80",
                "text-xs sm:text-sm md:text-base font-medium"
              )}
            >
              {category} {patternNumber !== undefined && `#${patternNumber}`}
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="default"
                    onClick={() => setShowMonsterGuide(!showMonsterGuide)}
                    className="text-accent hover:text-accent hover:bg-secondary/20 p-2 rounded-full
                          transition-all duration-300 hover:scale-110 hover:shadow-md"
                  >
                    {showMonsterGuide ? (
                      <Book className="w-6 h-6" />
                    ) : (
                      <Sword className="w-6 h-6" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-secondary/90 backdrop-blur-sm border border-secondary/20">
                  {showMonsterGuide ? "Show Pseudocode" : "Show Monster Guide"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="w-full sm:w-auto">
            <AlgorithmSelector
              currentPattern={currentPattern}
              onPatternChange={onPatternChange}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">
        {showMonsterGuide ? (
          <div className="h-full overflow-hidden rounded-xl bg-main/80 backdrop-blur-sm border border-secondary/20 mt-3">
            <MonsterHunterGuide currentPattern={currentPattern} />
          </div>
        ) : (
          <div className="h-full flex flex-col overflow-hidden">
            <div
              ref={descRef}
              className={`${styles.pseudocodeContainer} flex-1 w-full bg-main/80 backdrop-blur-sm rounded-xl border border-secondary/20
                    transition-all duration-300 mt-3`}
              style={{
                height: isDesktop ? descHeight : "300px",
                minHeight: isDesktop ? "0" : "300px",
              }}
            >
              <div className="h-full w-full overflow-y-auto custom-scrollbar">
                <div
                  className={`${styles.pseudocodeContent} text-sm sm:text-base w-full text-main leading-relaxed p-4`}
                >
                  {(() => {
                    if (typeof pseudo === "function") {
                      return pseudo();
                    } else {
                      return (
                        <div className="pseudocode">
                          <span className="algorithm-title">
                            {currentPattern}
                          </span>
                          <span className="algorithm-type">{category}</span>
                          <span className="algorithm-meta">
                            Time: O(n) | Space: O(n) | Use: Algorithm
                            implementation
                          </span>
                          <div className="nested">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: pseudo || "Pseudocode coming soon...",
                              }}
                            />
                          </div>
                        </div>
                      );
                    }
                  })()}
                </div>
              </div>
            </div>
            {/* Vertical resize handle */}
            <div
              className="flex-none w-full h-4 cursor-row-resize flex items-center justify-center group mt-1"
              style={{ userSelect: "none" }}
              onMouseDown={(e) => {
                if (!isDesktop) return;
                const startY = e.clientY;
                const startHeight = descRef.current?.offsetHeight || 0;
                const maxHeight = 800;
                const onMove = (moveEvent: MouseEvent) => {
                  const delta = moveEvent.clientY - startY;
                  const newHeight = Math.max(
                    300,
                    Math.min(startHeight + delta, maxHeight)
                  );
                  setDescHeight(newHeight);
                };
                const onUp = () => {
                  window.removeEventListener("mousemove", onMove);
                  window.removeEventListener("mouseup", onUp);
                };
                window.addEventListener("mousemove", onMove);
                window.addEventListener("mouseup", onUp);
              }}
            >
              <div
                className="w-16 h-1.5 rounded-full bg-accent2/40 group-hover:bg-accent2/70 
                    transition-all duration-300 group-hover:w-24"
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
