import { useState, useEffect } from "react";
import { Lightbulb, Info, RefreshCw } from "lucide-react";

const TIPS = [
  "Use two pointers for many array problems.",
  "Binary search only works on sorted arrays.",
  "Greedy algorithms don't always give the optimal solution.",
  "Divide and conquer is a powerful technique for sorting and searching.",
  "Hash maps are great for quick lookups.",
];

const FACTS = [
  "The word 'algorithm' comes from the Persian mathematician Al-Khwarizmi.",
  "Dijkstra's algorithm was invented in 1956 and is still widely used today.",
  "The first computer bug was an actual moth found in a relay.",
  "The Big-O notation describes the upper bound of an algorithm's running time.",
  "Merge sort was invented by John von Neumann in 1945.",
];

export function CenterInformaticsWidget() {
  const [showTip, setShowTip] = useState(true);
  const [tipIdx, setTipIdx] = useState(0);
  const [factIdx, setFactIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTip((prev) => !prev);
      if (showTip) {
        setFactIdx((i) => (i + 1) % FACTS.length);
      } else {
        setTipIdx((i) => (i + 1) % TIPS.length);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [showTip]);

  const handleNext = () => {
    setShowTip((prev) => !prev);
    if (showTip) {
      setFactIdx((i) => (i + 1) % FACTS.length);
    } else {
      setTipIdx((i) => (i + 1) % TIPS.length);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center gap-2 sm:gap-4 px-2 sm:px-4 py-2 rounded-lg bg-background/90 border-2 border-accent/30 shadow-lg w-full transition-transform duration-200 hover:scale-[1.025] group cursor-pointer">
        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 shadow animate-pulse-slow">
          {showTip ? (
            <Lightbulb className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 drop-shadow" />
          ) : (
            <Info className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400 drop-shadow" />
          )}
        </div>
        <div className="h-8 sm:h-10 w-px bg-accent/10 rounded-full mx-1 sm:mx-2" />
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm sm:text-base text-accent mb-0.5 sm:mb-1 tracking-wide">
            {showTip ? "Tip of the Day" : "Fun Informatics"}
          </div>
          <div
            className="text-xs sm:text-sm text-main/90 leading-snug line-clamp-2"
            title={showTip ? TIPS[tipIdx] : FACTS[factIdx]}
          >
            {showTip ? TIPS[tipIdx] : FACTS[factIdx]}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="ml-2 p-1.5 sm:p-2 rounded-full hover:bg-accent/20 transition-colors shadow border border-accent/10"
          title="Next tip or fact"
        >
          <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
