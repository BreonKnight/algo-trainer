import { Book, Sword, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { MonsterHunterGuide } from "@/components/features/algorithm-trainer/components/core/MonsterHunterGuide";
import { monsterHunterPatternsByCategory } from "@/components/features/algorithm-trainer/data/monster-hunter/monsterHunterPatternsCombined";
import { useTheme } from "@/components/theme/use-theme";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { categoryColors } from "@/lib/patterns";
import { pseudocodePatterns } from "@/lib/pseudocode";
import styles from "@/styles/pseudocode.module.css";

import { AlgorithmSelector } from "@algo-trainer/shared/components/algorithm-trainer/AlgorithmSelector";
import { PatternKey } from "@algo-trainer/shared/types/algorithm-types";
import { cn } from "@algo-trainer/shared/utils/common";
import { patternMapping } from "@algo-trainer/shared/utils/pattern-mapping";

// Define the type for pseudocodePatterns
type PseudocodePatterns = Record<string, () => JSX.Element>;
// Get category for a pattern
const getPatternCategory = (pattern: PatternKey): string => {
  // Find the category that contains this pattern
  for (const [category, patterns] of Object.entries(monsterHunterPatternsByCategory)) {
    if (patterns.includes(pattern)) {
      return category;
    }
  }
  return "Unknown"; // Fallback category if pattern not found
};

// Helper to normalize and fuzzy match category names for color coding
function normalizeCategoryName(category: string): string {
  return category
    .replace(/ algorithms?$/i, "")
    .replace(/ techniques?$/i, "")
    .replace(/[\-_]/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}

function getCategoryColor(category: string): string {
  // Try direct match first
  if (categoryColors[category as keyof typeof categoryColors]) {
    return categoryColors[category as keyof typeof categoryColors];
  }
  // Fuzzy match: normalize both key and input
  const normalized = normalizeCategoryName(category);
  for (const key of Object.keys(categoryColors)) {
    if (normalizeCategoryName(key) === normalized) {
      return categoryColors[key as keyof typeof categoryColors];
    }
  }
  return "text-secondary/80";
}

interface PatternCardProps {
  currentPattern: PatternKey;
  onPatternChange: (pattern: PatternKey) => void;
  patternNumber?: number;
}

export function PatternCard({ currentPattern, onPatternChange, patternNumber }: PatternCardProps) {
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

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isExpanded]);

  const getPseudocodePattern = (patternName: PatternKey) => {
    const typedPseudocodePatterns = pseudocodePatterns as PseudocodePatterns;

    // First try direct lookup
    const pattern = typedPseudocodePatterns[patternName];
    if (pattern) {
      return pattern;
    }

    // If not found, try to map the name
    const mappedName = patternMapping[patternName as keyof typeof patternMapping];
    if (mappedName) {
      return typedPseudocodePatterns[mappedName];
    }

    // If pattern is not found, return the Test Data pattern as a fallback
    console.warn(`Pattern lookup failed for: ${patternName}. Using Test Data pattern as fallback.`);
    return typedPseudocodePatterns["Test Data"];
  };

  const pseudo = getPseudocodePattern(currentPattern);

  // Add touch event handling for resize
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isDesktop) return;
    const touch = e.touches[0];
    const startY = touch.clientY;
    const startHeight = descRef.current?.offsetHeight || 0;
    const maxHeight = 800;

    const handleTouchMove = (moveEvent: TouchEvent) => {
      const touch = moveEvent.touches[0];
      const delta = touch.clientY - startY;
      const newHeight = Math.max(300, Math.min(startHeight + delta, maxHeight));
      setDescHeight(newHeight);
    };

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  return isExpanded ? (
    createPortal(
      [
        // Backdrop overlay
        <div
          key="backdrop"
          className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
          aria-hidden="true"
          onClick={() => setIsExpanded(false)}
        />,
        // Modal dialog
        <Card
          key="modal"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          className={cn(
            theme === "snes"
              ? "relative p-4 bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e] rounded-xl shadow-[0_4px_24px_rgba(52,152,219,0.08)] w-fit mx-auto h-auto max-h-[90vh] flex flex-col overflow-visible transition-all duration-300 hover:shadow-lg hover:border-[#3498db] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[90] animate-modalIn"
              : "relative p-4 bg-secondary border-text-secondary w-fit mx-auto h-auto max-h-[90vh] flex flex-col overflow-visible transition-all duration-300 hover:shadow-lg hover:border-secondary/30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[90] animate-modalIn"
          )}
          ref={(el) => {
            if (el && isExpanded) {
              el.focus();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Tab") {
              // Trap focus within modal
              const focusable = (el: HTMLElement) =>
                el &&
                el.querySelectorAll(
                  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
              const modal = e.currentTarget as HTMLElement;
              const nodes = focusable(modal);
              if (!nodes.length) return;
              const first = nodes[0] as HTMLElement;
              const last = nodes[nodes.length - 1] as HTMLElement;
              if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
              } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
              }
            }
          }}
          onClick={(e) => {
            // Prevent modal click from closing
            e.stopPropagation();
          }}
        >
          {/* X Button in top right */}
          <div className="absolute top-2 right-2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsExpanded(false)}
              className="text-main hover:text-accent hover:bg-secondary/20 p-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          {/* Sword/Book icon toggle at the top */}
          <div className="flex items-center gap-2 mb-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setShowMonsterGuide((v) => !v);
              }}
              className="ml-2 p-0 flex items-center justify-center aspect-square"
              title={showMonsterGuide ? "Show Pseudocode" : "Show Monster Guide"}
            >
              {showMonsterGuide ? (
                <Book
                  className={cn(
                    "w-6 h-6 scale-100",
                    theme === "snes" ? "text-[#1a237e]" : "text-accent"
                  )}
                  strokeWidth={3}
                />
              ) : (
                <Sword
                  className={cn(
                    "w-6 h-6 scale-100",
                    theme === "snes" ? "text-[#1a237e]" : "text-accent"
                  )}
                  strokeWidth={3}
                />
              )}
            </Button>
          </div>
          <div ref={contentRef} className="flex-1 flex flex-col max-w-7xl mx-auto w-full">
            <div className="flex-none flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0 text-center">
                  <h2
                    className={cn(
                      "text-main font-bold leading-relaxed transition-all duration-300 hover:scale-[1.02] text-left mb-4",
                      isExpanded
                        ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                        : "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl",
                      theme === "nord" ? " text-white" : " text-transparent bg-clip-text"
                    )}
                    style={
                      theme === "snes"
                        ? { backgroundImage: "var(--gradient-snes)" }
                        : theme === "nord"
                          ? undefined
                          : {
                              backgroundImage:
                                "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                            }
                    }
                  >
                    <div className="inline-block text-left">
                      <span
                        className="text-4xl font-extrabold uppercase tracking-wide bg-clip-text text-transparent"
                        style={
                          theme === "snes"
                            ? {
                                color: "#4040e0",
                                background: "none",
                                backgroundColor: "transparent",
                              }
                            : {
                                backgroundImage:
                                  "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                              }
                        }
                      >
                        {currentPattern}
                      </span>
                      <div
                        className="h-1 rounded mt-2 w-12"
                        style={
                          theme === "snes"
                            ? { backgroundColor: "#4040e0" }
                            : {
                                background:
                                  "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                              }
                        }
                      />
                    </div>
                  </h2>
                  <span
                    className={cn(
                      getCategoryColor(category),
                      "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-left"
                    )}
                  >
                    {category} {patternNumber !== undefined && `#${patternNumber}`}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="w-full sm:w-auto ">
                  <AlgorithmSelector
                    currentPattern={currentPattern}
                    onPatternChange={onPatternChange}
                    forcePortal={isExpanded}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              {showMonsterGuide ? (
                <div className="h-full overflow-auto rounded-xl bg-secondary border border-secondary/20 mt-3 p-6 text-lg leading-relaxed">
                  <MonsterHunterGuide currentPattern={currentPattern} />
                </div>
              ) : (
                <div className="flex flex-col">
                  <div
                    ref={descRef}
                    className={`${styles.pseudocodeContainer} w-fit mx-auto bg-secondary rounded-xl border border-secondary/20 transition-all duration-300 mt-3 overflow-y-auto`}
                    style={{
                      maxHeight: "60vh",
                      minHeight: isDesktop ? "0" : "300px",
                    }}
                  >
                    <div className="w-full custom-scrollbar">
                      <div
                        className={`${styles.pseudocodeContent} w-full text-main leading-relaxed p-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}
                      >
                        {(() => {
                          if (typeof pseudo === "function") {
                            return pseudo();
                          } else {
                            return (
                              <div className="pseudocode">
                                <div className="inline-block text-center">
                                  <span className="text-4xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
                                    {currentPattern}
                                  </span>
                                  <div className="h-1 bg-accent rounded mt-2 w-12 mx-auto"></div>
                                </div>
                                <span className="algorithm-type font-bold">{category}</span>
                                <span className="algorithm-meta">
                                  Time: O(n) | Space: O(n) | Use: Algorithm implementation
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
                </div>
              )}
            </div>
          </div>
        </Card>,
      ],
      document.body
    )
  ) : (
    <Card
      className={cn(
        theme === "snes"
          ? "p-4 bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e] rounded-xl shadow-[0_4px_24px_rgba(52,152,219,0.08)] w-full min-h-[180px] max-h-[549px] flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#3498db]"
          : "p-4 bg-secondary border-text-secondary w-full min-h-[180px] max-h-[549px] flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-secondary/30"
      )}
      onClick={() => setIsExpanded(true)}
    >
      {/* Sword/Book icon toggle at the top */}
      <div className="flex items-center gap-2 mb-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            setShowMonsterGuide((v) => !v);
          }}
          className="ml-2 p-0 flex items-center justify-center aspect-square"
          title={showMonsterGuide ? "Show Pseudocode" : "Show Monster Guide"}
        >
          {showMonsterGuide ? (
            <Book
              className={cn(
                "w-6 h-6 scale-100",
                theme === "snes" ? "text-[#1a237e]" : "text-accent"
              )}
              strokeWidth={3}
            />
          ) : (
            <Sword
              className={cn(
                "w-6 h-6 scale-100",
                theme === "snes" ? "text-[#1a237e]" : "text-accent"
              )}
              strokeWidth={3}
            />
          )}
        </Button>
      </div>
      {/* Pattern Title and Category */}
      <div className="mb-4">
        <h2
          className={cn(
            "text-main font-bold leading-relaxed transition-all duration-300 hover:scale-[1.02] text-left mb-2",
            theme === "nord" ? " text-white" : " text-transparent bg-clip-text"
          )}
          style={
            theme === "snes"
              ? { backgroundImage: "var(--gradient-snes)" }
              : theme === "nord"
                ? undefined
                : {
                    backgroundImage:
                      "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                  }
          }
        >
          <span
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide",
              theme === "nord" ? "text-white" : "bg-clip-text text-transparent"
            )}
            style={
              theme === "snes"
                ? { backgroundImage: "var(--gradient-snes)" }
                : theme === "nord"
                  ? undefined
                  : {
                      backgroundImage:
                        "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                    }
            }
          >
            {currentPattern}
          </span>
        </h2>
        <span
          className={cn(
            getCategoryColor(category),
            "block text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-left mb-2"
          )}
        >
          {category} {patternNumber !== undefined && `#${patternNumber}`}
        </span>
        {/* Dropdown Selector, always visible and spaced below title/category */}
        <div className="w-full sm:w-auto relative mt-2">
          <AlgorithmSelector
            currentPattern={currentPattern}
            onPatternChange={onPatternChange}
            forcePortal={isExpanded}
          />
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto">
        {showMonsterGuide ? (
          <div className="h-full overflow-hidden rounded-xl bg-secondary border border-secondary/20 mt-3">
            <MonsterHunterGuide currentPattern={currentPattern} />
          </div>
        ) : (
          <div className="h-full flex flex-col">
            <div
              ref={descRef}
              className={`${styles.pseudocodeContainer} flex-1 w-fit mx-auto bg-secondary rounded-xl border border-secondary/20 transition-all duration-300 mt-3 overflow-y-auto`}
              style={{
                height: isDesktop ? descHeight : "300px",
                minHeight: isDesktop ? "0" : "300px",
              }}
            >
              <div className="h-full w-full overflow-y-auto custom-scrollbar">
                <div
                  className={`${styles.pseudocodeContent} w-full text-main leading-relaxed p-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}
                >
                  {(() => {
                    if (typeof pseudo === "function") {
                      return pseudo();
                    } else {
                      return (
                        <div className="pseudocode">
                          <div className="inline-block text-center">
                            <span className="text-4xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
                              {currentPattern}
                            </span>
                            <div className="h-1 bg-accent rounded mt-2 w-12 mx-auto"></div>
                          </div>
                          <span className="algorithm-type font-bold">{category}</span>
                          <span className="algorithm-meta">
                            Time: O(n) | Space: O(n) | Use: Algorithm implementation
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
              style={{ userSelect: "none", touchAction: "none" }}
              onMouseDown={(e) => {
                if (!isDesktop) return;
                const startY = e.clientY;
                const startHeight = descRef.current?.offsetHeight || 0;
                const maxHeight = 800;
                const onMove = (moveEvent: MouseEvent) => {
                  const delta = moveEvent.clientY - startY;
                  const newHeight = Math.max(300, Math.min(startHeight + delta, maxHeight));
                  setDescHeight(newHeight);
                };
                const onUp = () => {
                  window.removeEventListener("mousemove", onMove);
                  window.removeEventListener("mouseup", onUp);
                };
                window.addEventListener("mousemove", onMove);
                window.addEventListener("mouseup", onUp);
              }}
              onTouchStart={handleTouchStart}
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
