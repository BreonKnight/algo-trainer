import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { cn } from '@algo-trainer/shared/utils/common';

const TIPS = [
  "Use two pointers for many array problems.",
  "Binary search only works on sorted arrays.",
  "Greedy algorithms don't always give the optimal solution.",
  "Divide and conquer is a powerful technique for sorting and searching.",
  "Hash maps are great for quick lookups.",
  "Dynamic programming is a powerful technique for solving problems with overlapping subproblems.",
  "Graphs are a powerful way to represent relationships between objects.",
  "Trees are a type of graph that are acyclic and connected.",
  "Binary trees are a type of tree where each node has at most two children.",
  "Binary search trees are a type of binary tree where the left child is less than the parent and the right child is greater than the parent.",
  "Heaps are a type of binary tree where the parent is greater than the children.",
  "Graphs are a powerful way to represent relationships between objects.",
  "String matching algorithms are a powerful way to find patterns in strings.",
  "Two Sums is a common interview question.",
  "Sliding windows are a powerful technique for finding patterns in arrays.",
  "Breadth-first search is a powerful technique for searching graphs.",
  "Depth-first search is a powerful technique for searching graphs.",
  "Topological sorting is a powerful technique for sorting graphs.",
  "Minimum spanning trees are a powerful technique for finding the minimum cost way to connect all the nodes in a graph.",
];

const FACTS = [
  "The word 'algorithm' comes from the Persian mathematician Al-Khwarizmi.",
  "Dijkstra's Algorithm was invented in 1956 and is still widely used today.",
  "The first computer bug was an actual moth found in a relay.",
  "The Big-O notation describes the upper bound of an algorithm's running time.",
  "Merge sort was invented by John von Neumann in 1945.",
  "The word 'algorithm' comes from the Persian mathematician Al-Khwarizmi.",
  "Algorithms were invested by a woman named Hypatia of Alexandria in 420 AD.",
  "Africas mathamtician Al-Khwarizmi is the root of the word 'algorithm'.",
  "Pythagoras is credited with the first algorithm.",
  "You learn from repetition, not from success.",
];

export function CenterInformaticsWidget() {
  const [showTip, setShowTip] = useState(true);
  const [tipIdx, setTipIdx] = useState(0);
  const [factIdx, setFactIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showFade, setShowFade] = useState(false);
  const [theme] = useState("light");

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setShowTip((prev) => !prev);
        if (showTip) {
          setFactIdx((i) => (i + 1) % FACTS.length);
        } else {
          setTipIdx((i) => (i + 1) % TIPS.length);
        }
      }, 8000);
      return () => clearInterval(interval);
    }
    // Check scrollability on mount and when tip/fact changes
    const checkScroll = () => {
      const el = scrollRef.current;
      if (el) {
        setShowFade(
          el.scrollHeight > el.clientHeight && el.scrollTop + el.clientHeight < el.scrollHeight - 1
        );
      }
    };
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", checkScroll);
      }
    };
  }, [showTip, isHovered]);

  const handleNext = () => {
    setShowTip((prev) => !prev);
    if (showTip) {
      setFactIdx((i) => (i + 1) % FACTS.length);
    } else {
      setTipIdx((i) => (i + 1) % TIPS.length);
    }
  };

  const handlePrevious = () => {
    setShowTip((prev) => !prev);
    if (showTip) {
      setFactIdx((i) => (i - 1 + FACTS.length) % FACTS.length);
    } else {
      setTipIdx((i) => (i - 1 + TIPS.length) % TIPS.length);
    }
  };

  return (
    <div
      className="flex items-center justify-center w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative flex items-center gap-3 px-4 py-3 w-full"
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-primary/30 flex items-center justify-center shadow-inner">
            {showTip ? (
              <Lightbulb className="w-5 h-5 text-primary-foreground" />
            ) : (
              <Info className="w-5 h-5 text-primary-foreground" />
            )}
          </div>
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-base font-bold text-foreground">
              {showTip ? "Algorithm Tip" : "Fun Fact"}
            </span>
            <span className="text-xs text-muted-foreground">
              {showTip ? `${tipIdx + 1}/${TIPS.length}` : `${factIdx + 1}/${FACTS.length}`}
            </span>
          </div>
          <div
            ref={scrollRef}
            className="relative max-h-20 min-h-[2.5rem] overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent pr-1 group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={showTip ? `tip-${tipIdx}` : `fact-${factIdx}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-foreground leading-snug whitespace-pre-line break-words"
              >
                {showTip ? TIPS[tipIdx] : FACTS[factIdx]}
              </motion.div>
            </AnimatePresence>
            {showFade && (
              <div
                className="pointer-events-none absolute left-0 right-0 bottom-0 h-3 bg-gradient-to-t from-card/40 to-transparent"
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 ml-2">
          <button
            onClick={handlePrevious}
            className={cn(
              "p-1.5 rounded-full transition-colors border",
              theme === "light" || theme === "solarized"
                ? "bg-white border-accent text-accent shadow"
                : "hover:bg-muted/50 border-border text-muted-foreground"
            )}
            title="Previous"
            style={{ width: 28, height: 28 }}
          >
            <ChevronLeft
              className={cn(
                "w-4 h-4",
                theme === "light" || theme === "solarized" ? "text-accent" : "text-muted-foreground"
              )}
            />
          </button>
          <button
            onClick={handleNext}
            className={cn(
              "p-1.5 rounded-full transition-colors border",
              theme === "light" || theme === "solarized"
                ? "bg-white border-accent text-accent shadow"
                : "hover:bg-muted/50 border-border text-muted-foreground"
            )}
            title="Next"
            style={{ width: 28, height: 28 }}
          >
            <ChevronRight
              className={cn(
                "w-4 h-4",
                theme === "light" || theme === "solarized" ? "text-accent" : "text-muted-foreground"
              )}
            />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
