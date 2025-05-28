import { Switch } from "@headlessui/react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, GraduationCap, ChevronRight, X } from "lucide-react";
import { PawPrint } from "lucide-react";
import React, { useState, useMemo, useCallback } from "react";

import { useTheme } from "@/components/theme/use-theme";
import { AnimatedHeader } from "@/components/ui/AnimatedHeader";
import { Background } from "@/components/ui/background";

import { cn } from "@algo-trainer/shared/utils/common";

import { chapters, mhChapters } from "./chapters";

interface Chapter {
  id: number;
  title: string;
  theme: string;
  keyConcepts: string[];
  mainTakeaways: string[];
  notableTerms: string[];
  examples: string[];
  prerequisites: string[];
  difficulty: string;
  readingTime: string;
  keyDiagrams: string[];
  realWorldApplications: string[];
  commonPitfalls: string[];
  bestPractices: string[];
}

interface SystemsDesignProps {
  chapters?: Chapter[];
  mhChapters?: Chapter[];
}

const SystemsDesign: React.FC<SystemsDesignProps> = ({
  chapters: propChapters = chapters,
  mhChapters: propMhChapters = mhChapters,
}) => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [monsterHunterMode, setMonsterHunterMode] = useState(false);
  const { theme } = useTheme();

  // Memoize theme check
  const isDarkTheme = useMemo(
    () => ["dracula", "nord", "snes", "ps2", "re2", "kingdom-hearts", "fortnite"].includes(theme),
    [theme]
  );

  // Memoize current chapters
  const currentChapters = useMemo(
    () => (monsterHunterMode ? propMhChapters : propChapters),
    [monsterHunterMode, propMhChapters, propChapters]
  );

  // Memoize chapter click handler
  const handleChapterClick = useCallback((chapter: Chapter) => {
    setSelectedChapter(chapter);
    setShowDetailedView(true);
  }, []);

  // Memoize close handler
  const handleClose = useCallback(() => {
    setShowDetailedView(false);
  }, []);

  // Create a parent ref for virtualization
  const parentRef = React.useRef<HTMLDivElement>(null);

  // Set up virtualizer with optimized settings
  const rowVirtualizer = useVirtualizer({
    count: currentChapters.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 200, // Estimated height of each chapter card
    overscan: 3, // Reduced overscan for better performance
    initialOffset: 0,
    scrollPaddingStart: 0,
    scrollPaddingEnd: 0,
    scrollToFn: (offset, canSmooth) => {
      if (parentRef.current) {
        parentRef.current.scrollTo({
          top: offset,
          behavior: canSmooth ? "smooth" : "auto",
        });
      }
    },
  });

  // Add passive scroll listener
  React.useEffect(() => {
    const scrollElement = parentRef.current;
    if (!scrollElement) return;

    const handleScroll = () => {
      // Let the virtualizer handle the scroll
      rowVirtualizer.measure();
    };

    scrollElement.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [rowVirtualizer]);

  // Add scroll lock effect
  React.useEffect(() => {
    if (showDetailedView) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showDetailedView]);

  // Memoize chapter card render function
  const renderChapterCard = useCallback(
    (chapter: Chapter) => (
      <motion.div
        key={chapter.id}
        layoutId={`chapter-${chapter.id}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{
          scale: 1.02,
          y: -5,
          boxShadow: "0 10px 30px -10px var(--shadow-color)",
        }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "rounded-xl p-6 cursor-pointer transition-all duration-200 group",
          "hover:shadow-lg backdrop-blur-sm",
          theme === "snes" ? "bg-[var(--snes-cream)]" : "bg-card hover:bg-card/90",
          "border border-border",
          "shadow-[0_0_15px_var(--shadow-color)]",
          "relative overflow-hidden",
          "before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black/5 before:opacity-0 before:transition-opacity before:duration-200",
          "hover:before:opacity-100"
        )}
        onClick={() => handleChapterClick(chapter)}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-2">
            <h2
              className={cn(
                "text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors duration-200 tracking-tight",
                "text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]"
              )}
            >
              {chapter.title}
            </h2>
            <span
              className={cn(
                "text-xs sm:text-sm px-3 py-1 rounded-full font-bold inline-block border shadow-sm transition-colors duration-200",
                chapter.difficulty === "Beginner"
                  ? "bg-green-500/10 text-green-500 border-green-500/20"
                  : chapter.difficulty === "Intermediate"
                    ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                    : "bg-red-500/10 text-red-500 border-red-500/20"
              )}
            >
              {chapter.difficulty}
            </span>
          </div>
          <ChevronRight
            className={cn(
              "w-5 h-5 transition-transform duration-200 group-hover:translate-x-1",
              "text-muted-foreground group-hover:text-primary"
            )}
          />
        </div>

        <p className={cn("text-base mb-4 line-clamp-2 leading-relaxed", "text-muted-foreground")}>
          {chapter.theme}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {chapter.notableTerms.slice(0, 3).map((term, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200",
                "bg-muted/50 text-muted-foreground hover:bg-muted/80",
                "border border-border/50"
              )}
            >
              {term}
            </motion.span>
          ))}
          {chapter.notableTerms.length > 3 && (
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className={cn(
                "px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200",
                "bg-muted/50 text-muted-foreground hover:bg-muted/80",
                "border border-border/50"
              )}
            >
              +{chapter.notableTerms.length - 3} more
            </motion.span>
          )}
        </div>

        <div className={cn("flex items-center gap-4 text-xs sm:text-sm", "text-muted-foreground")}>
          <div className="flex items-center gap-1">
            <Clock className={cn("w-4 h-4", "text-primary")} />
            <span>{chapter.readingTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <GraduationCap className={cn("w-4 h-4", "text-primary")} />
            <span>{chapter.prerequisites.length} prerequisites</span>
          </div>
        </div>
      </motion.div>
    ),
    [handleChapterClick, theme]
  );

  return (
    <Background className="min-h-screen">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <AnimatedHeader
            title="Designing Data-Intensive Applications"
            subtitle="A comprehensive guide to building reliable, scalable, and maintainable systems"
          />
        </div>

        <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
          <div className="text-xs text-muted-foreground italic mb-4">
            Portions of this content are adapted from Martin Kleppmann's "Designing Data-Intensive
            Applications" and other sources. See footnotes for details.
          </div>
          {monsterHunterMode && (
            <div className="text-xs text-muted-foreground italic mb-4">
              This project is an unofficial fan work inspired by Capcom's Monster Hunter series. All
              Monster Hunter names, terms, and concepts are the property of Capcom. This project is
              not affiliated with or endorsed by Capcom, and no original Monster Hunter assets are
              used.
            </div>
          )}
          <div className="flex justify-end max-w-7xl mx-auto mb-8">
            <Switch.Group>
              <div className="flex items-center gap-5">
                <Switch.Label
                  className={cn(
                    "font-semibold text-base select-none transition-colors duration-200 cursor-pointer",
                    isDarkTheme ? "text-foreground" : "text-foreground",
                    "hover:text-primary/80"
                  )}
                >
                  Hunter Mode
                </Switch.Label>
                <span className="text-xs text-muted-foreground italic ml-2">
                  Unofficial fan content. Not affiliated with Capcom.
                </span>
                <Switch
                  checked={monsterHunterMode}
                  onChange={setMonsterHunterMode}
                  aria-label="Toggle Monster Hunter Mode"
                  className={cn(
                    "relative inline-flex h-7 w-14 items-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden",
                    "hover:shadow-md active:scale-95",
                    monsterHunterMode
                      ? "bg-primary shadow-lg shadow-primary/20"
                      : "bg-muted shadow-sm",
                    "border border-border/50"
                  )}
                >
                  <span
                    className={cn(
                      "inline-block h-5 w-5 transform rounded-full transition-all duration-300 ease-in-out flex items-center justify-center",
                      monsterHunterMode
                        ? "translate-x-[1.75rem] scale-110 bg-white"
                        : "translate-x-1 bg-white",
                      "absolute left-0 top-1/2 -translate-y-1/2",
                      "shadow-md"
                    )}
                  >
                    {monsterHunterMode && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="flex items-center justify-center"
                      >
                        <PawPrint className="w-3 h-3 text-primary" aria-hidden="true" />
                      </motion.div>
                    )}
                  </span>
                </Switch>
              </div>
            </Switch.Group>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <div
              ref={parentRef}
              className="h-[calc(100vh-200px)] overflow-auto"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollBehavior: "smooth",
              }}
            >
              <div
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  width: "100%",
                  position: "relative",
                  willChange: "transform",
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => (
                  <div
                    key={virtualRow.index}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${virtualRow.start}px)`,
                      willChange: "transform",
                    }}
                  >
                    {renderChapterCard(currentChapters[virtualRow.index])}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {showDetailedView && selectedChapter && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                onClick={handleClose}
              >
                <motion.div
                  layoutId={`chapter-${selectedChapter.id}`}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className={cn(
                    "rounded-2xl p-6 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto",
                    "shadow-2xl border backdrop-blur-sm",
                    theme === "light" || theme === "solarized"
                      ? "bg-white/95"
                      : theme === "nord"
                        ? "bg-[#2E3440]/95"
                        : theme === "snes"
                          ? "bg-[#fffbe6]/95"
                          : "bg-[#282A36]/95",
                    "border-border"
                  )}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className={cn("w-6 h-6", "text-primary")} />
                        <h2
                          className={cn(
                            "text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent",
                            "text-card-foreground"
                          )}
                        >
                          {selectedChapter.title}
                        </h2>
                      </div>
                      <div className="flex items-center gap-4">
                        <span
                          className={cn(
                            "text-xs sm:text-sm px-3 py-1 rounded-full font-bold border shadow-sm transition-colors duration-200",
                            selectedChapter.difficulty === "Beginner"
                              ? "bg-green-500 text-white border-green-600"
                              : selectedChapter.difficulty === "Intermediate"
                                ? "bg-yellow-500 text-white border-yellow-600"
                                : "bg-red-500 text-white border-red-600"
                          )}
                        >
                          {selectedChapter.difficulty}
                        </span>
                        <span
                          className={cn(
                            "text-xs sm:text-sm flex items-center gap-1",
                            "text-muted-foreground"
                          )}
                        >
                          <Clock className="w-4 h-4" />
                          {selectedChapter.readingTime}
                        </span>
                      </div>
                    </div>
                    <button
                      className={cn(
                        "p-2 rounded-full transition-all duration-300 ease-in-out",
                        "hover:scale-110 active:scale-95",
                        "flex items-center justify-center",
                        theme === "light" && "text-white"
                      )}
                      onClick={handleClose}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="space-y-8">
                    {Object.entries({
                      Theme: selectedChapter.theme,
                      Prerequisites: selectedChapter.prerequisites,
                      "Key Concepts": selectedChapter.keyConcepts,
                      "Main Takeaways": selectedChapter.mainTakeaways,
                      "Notable Terms": selectedChapter.notableTerms,
                      Examples: selectedChapter.examples,
                      "Key Diagrams": selectedChapter.keyDiagrams,
                      "Real World Applications": selectedChapter.realWorldApplications,
                      "Common Pitfalls": selectedChapter.commonPitfalls,
                      "Best Practices": selectedChapter.bestPractices,
                    }).map(([title, content]) => (
                      <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        <div className="space-y-2">
                          <h3
                            className={cn(
                              "text-xl sm:text-2xl font-semibold tracking-tight flex items-center gap-2 pb-2 border-b",
                              theme === "light" || theme === "solarized"
                                ? "border-accent/20"
                                : theme === "nord"
                                  ? "border-white/20"
                                  : "border-accent/20",
                              "text-card-foreground"
                            )}
                          >
                            {title}
                          </h3>
                        </div>
                        {Array.isArray(content) ? (
                          title === "Notable Terms" ? (
                            <div className="flex flex-wrap gap-2">
                              {content.map((item, index) => (
                                <motion.span
                                  key={index}
                                  whileHover={{ scale: 1.05 }}
                                  className={cn(
                                    "px-3 py-1.5 rounded-full text-sm font-medium tracking-wide",
                                    "transition-transform",
                                    "text-muted-foreground"
                                  )}
                                >
                                  {item}
                                </motion.span>
                              ))}
                            </div>
                          ) : (
                            <ul className="space-y-3">
                              {content.map((item, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                  className={cn(
                                    "flex items-start gap-3 group text-base leading-relaxed",
                                    "text-muted-foreground"
                                  )}
                                >
                                  <span
                                    className={cn(
                                      "mt-2 h-1.5 w-1.5 rounded-full shrink-0",
                                      "transition-colors duration-200",
                                      "text-primary group-hover:bg-primary/80"
                                    )}
                                  />
                                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                                    {item}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          )
                        ) : (
                          <p
                            className={cn(
                              "leading-relaxed text-base sm:text-lg",
                              "text-muted-foreground"
                            )}
                          >
                            {content}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="mt-8 text-xs text-muted-foreground">
            <div className="font-semibold mb-2">Footnotes & Sources:</div>
            <div className="italic mb-1">
              Martin Kleppmann, <i>Designing Data-Intensive Applications</i>, O'Reilly Media, 2017.
            </div>
            <div className="italic mb-1">
              <a
                href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors"
              >
                Buy the book from O'Reilly
              </a>
            </div>
            <div className="italic mb-1">
              <a
                href="https://www.monsterhunter.com/wilds/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary transition-colors"
              >
                Buy Monster Hunter Wilds (official site)
              </a>
            </div>
            <div className="italic">Additional explanations and analogies by AlgoTrainer team.</div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default React.memo(SystemsDesign);
