import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useInteractions,
} from "@floating-ui/react";
import { ChevronDown, Search, Star } from "lucide-react";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { createPortal } from "react-dom";

import { monsterHunterPatternsByCategory } from "@/components/algorithm-trainer/monsterHunterPatternsCombined";
import { PatternKey } from "@/components/algorithm-trainer/types";

// Group patterns by their category
const getPatternCategories = () => {
  // Use the predefined categories from monsterHunterPatternsByCategory
  return monsterHunterPatternsByCategory;
};

interface AlgorithmSelectorProps {
  currentPattern: PatternKey;
  onPatternChange: (pattern: PatternKey) => void;
  forcePortal?: boolean;
}

export function AlgorithmSelector({ currentPattern, onPatternChange }: AlgorithmSelectorProps) {
  const algorithmCategories = getPatternCategories();
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [, setDropdownRef] = useState<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // floating-ui v2
  const { refs, floatingStyles, update, context } = useFloating({
    placement: "bottom-start",
    middleware: [offset(4), flip(), shift()],
    whileElementsMounted: autoUpdate,
    open: isDropdownOpen,
    onOpenChange: setIsDropdownOpen,
  });

  // useDismiss for click outside and Escape
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("algorithmFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("algorithmFavorites", JSON.stringify(favorites));
  }, [favorites]);

  // Handle keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "/" && !isDropdownOpen) {
        event.preventDefault();
        setIsDropdownOpen(true);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isDropdownOpen]);

  // Attach refs
  useEffect(() => {
    if (update) update();
  }, [update, isDropdownOpen]);

  // Filter algorithms based on search query
  const filteredCategories = Object.entries(algorithmCategories).reduce(
    (acc, [category, algorithms]) => {
      const filteredAlgorithms = algorithms.filter((algo) =>
        algo.toLowerCase().includes(searchQuery.toLowerCase())
      );
      acc[category] = filteredAlgorithms;
      return acc;
    },
    {} as Record<string, string[]>
  );

  // Handle search input changes with debounce
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setSearchQuery(e.target.value);
    setTimeout(() => setIsLoading(false), 300);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isDropdownOpen) return;

    const items = Object.values(filteredCategories).flat();
    const currentIndex = activeIndex;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "Enter":
        if (currentIndex >= 0 && items[currentIndex]) {
          handleAlgorithmSelect(items[currentIndex]);
        }
        break;
      case "Escape":
        setIsDropdownOpen(false);
        break;
    }
  };

  // Handle algorithm selection
  const handleAlgorithmSelect = (algorithm: string) => {
    console.log("Selecting algorithm:", algorithm);

    // Get all patterns from all categories
    const allPatterns = Object.values(algorithmCategories).flat();
    console.log("Available patterns:", allPatterns);

    // Try exact match first
    if (allPatterns.includes(algorithm)) {
      console.log("Found exact match");
      onPatternChange(algorithm as PatternKey);
      setIsDropdownOpen(false);
      setActiveIndex(-1);
      return;
    }

    // Try case-insensitive match
    const normalizedAlgorithm = algorithm.toLowerCase();
    const matchingPattern = allPatterns.find((p) => p.toLowerCase() === normalizedAlgorithm);

    if (matchingPattern) {
      console.log("Found case-insensitive match:", matchingPattern);
      onPatternChange(matchingPattern as PatternKey);
      setIsDropdownOpen(false);
      setActiveIndex(-1);
      return;
    }

    console.log("No match found for:", algorithm);
    onPatternChange(algorithm as PatternKey);
    setIsDropdownOpen(false);
    setActiveIndex(-1);
  };

  // Toggle favorite status
  const toggleFavorite = (algorithm: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(algorithm) ? prev.filter((a) => a !== algorithm) : [...prev, algorithm]
    );
  };

  // Highlight matching text in search results
  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return (
      <span>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <span key={i} className="bg-secondary/30 text-accent2 font-medium">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  // Prevent background scroll when dropdown is open
  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDropdownOpen]);

  return (
    <div
      className="w-full relative"
      ref={refs.setReference}
      onKeyDown={handleKeyDown}
      role="combobox"
      aria-expanded={isDropdownOpen}
      aria-haspopup="listbox"
      aria-controls="algorithm-list"
      {...getReferenceProps()}
    >
      <div
        className="w-full bg-main border border-secondary text-main hover:bg-main/80 rounded-md shadow-md transition-all duration-200 flex items-center justify-between p-2 cursor-pointer group"
        onClick={(e) => {
          e.stopPropagation();
          setIsDropdownOpen(!isDropdownOpen);
        }}
        role="button"
        tabIndex={0}
        aria-label="Select algorithm"
      >
        <div className="flex items-center gap-2">
          {currentPattern ? (
            <span className="truncate max-w-[200px] sm:max-w-[300px]" title={currentPattern}>
              {currentPattern}
            </span>
          ) : (
            <span className="text-secondary">Select an algorithm</span>
          )}
        </div>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isDropdownOpen &&
        createPortal(
          <div
            ref={(el) => {
              setDropdownRef(el);
              refs.setFloating(el);
            }}
            className="algorithm-selector-dropdown z-[9999] w-[calc(100vw-2rem)] sm:w-full mt-1 bg-main border border-secondary text-main max-h-[60vh] sm:max-h-[400px] overflow-y-auto min-w-[300px] p-2 rounded-md shadow-lg animate-fadeIn"
            style={{
              ...floatingStyles,
              width:
                refs.reference.current && "offsetWidth" in refs.reference.current
                  ? (refs.reference.current as HTMLElement).offsetWidth
                  : undefined,
            }}
            role="listbox"
            id="algorithm-list"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            onKeyUp={(e) => e.stopPropagation()}
            {...getFloatingProps()}
          >
            <div className="sticky top-0 bg-main z-20 pb-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search algorithms... (Press '/' to focus)"
                  className="w-full bg-secondary text-main rounded-md py-1.5 pl-8 pr-8 text-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-accent2"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  role="searchbox"
                  aria-label="Search algorithms"
                />
              </div>
            </div>
            {isLoading ? (
              <div className="flex items-center justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent2"></div>
              </div>
            ) : Object.entries(filteredCategories).length === 0 ? (
              <div className="text-secondary text-center py-4">
                <p>No algorithms found</p>
                <p className="text-sm mt-1">Try a different search term</p>
              </div>
            ) : (
              Object.entries(filteredCategories).map(([category, algorithms]) => (
                <div key={category} className="px-1 py-1">
                  <div className="text-accent sticky top-12 bg-main/90 backdrop-blur-sm py-2 z-10 px-2 font-medium border-b border-secondary/30">
                    {category}
                  </div>
                  {algorithms.length > 0 ? (
                    algorithms.sort().map((algorithm, index) => (
                      <div
                        key={algorithm}
                        ref={(el) => (itemRefs.current[index] = el)}
                        className={`text-main hover:bg-[color:var(--accent3)]/20 focus:bg-[color:var(--accent3)]/20 hover:text-[color:var(--text-selected-dark)] focus:text-[color:var(--text-selected-dark)] data-[state=selected]:bg-[color:var(--accent3)]/40 data-[state=selected]:text-[color:var(--text-selected-dark)] data-[state=selected]:font-bold data-[state=selected]:border-l-4 data-[state=selected]:border-accent2 data-[state=selected]:pl-1.5 px-2 py-1.5 rounded-sm cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-[1.02] flex items-center justify-between ${
                          activeIndex === index ? "bg-[color:var(--accent3)]/20" : ""
                        }`}
                        onClick={() => handleAlgorithmSelect(algorithm)}
                        role="option"
                        aria-selected={algorithm === currentPattern}
                        tabIndex={0}
                      >
                        <span
                          className="block overflow-hidden text-ellipsis whitespace-nowrap max-w-[80%]"
                          title={algorithm}
                        >
                          {highlightMatch(algorithm, searchQuery)}
                        </span>
                        <button
                          onClick={(e) => toggleFavorite(algorithm, e)}
                          className={`ml-2 p-1 rounded-full transition-colors ${
                            favorites.includes(algorithm)
                              ? "text-yellow-500 hover:text-yellow-600"
                              : "text-secondary hover:text-main"
                          }`}
                          aria-label={
                            favorites.includes(algorithm)
                              ? "Remove from favorites"
                              : "Add to favorites"
                          }
                        >
                          <Star
                            className="h-3.5 w-3.5"
                            fill={favorites.includes(algorithm) ? "currentColor" : "none"}
                          />
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="text-secondary italic px-2 py-1.5 text-sm">
                      No matches found
                    </div>
                  )}
                </div>
              ))
            )}
          </div>,
          document.body
        )}
    </div>
  );
}
