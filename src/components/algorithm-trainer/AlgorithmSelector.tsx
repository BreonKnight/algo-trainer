import { PatternKey } from "./types";
import { algorithmPatterns } from "./patterns/index";
import { ChevronDown, Search, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Helper function to determine category from pattern key
const getCategoryFromKey = (key: string): string => {
  if (key === "Recursion") return "Recursion";
  if (key === "Divide and Conquer") return "Divide and Conquer";
  if (key.includes("Sort")) return "Sorting Algorithms";
  if (key.includes("Search")) return "Search Algorithms";
  if (key.includes("Dynamic Programming")) return "Dynamic Programming";
  if (key.includes("Greedy")) return "Greedy Algorithms";
  if (key.includes("DFS") || key.includes("BFS") || key.includes("Graph"))
    return "Graph Algorithms";
  if (key.includes("Tree") || key.includes("BST")) return "Tree Algorithms";
  if (
    key.includes("Stack") ||
    key.includes("Queue") ||
    key.includes("List") ||
    key.includes("Hash") ||
    key.includes("Trie")
  )
    return "Data Structures";
  if (
    key.includes("Two Sum") ||
    key.includes("Window") ||
    key.includes("Pointers") ||
    key.includes("Prefix") ||
    key.includes("Kadane")
  )
    return "Array Techniques";
  if (
    key.includes("Rabin") ||
    key.includes("Knuth") ||
    key.includes("Manacher") ||
    key.includes("Z-Algorithm")
  )
    return "String Algorithms";
  if (key.includes("Matrix")) return "Matrix Operations";
  return "Other Algorithms";
};

// Group patterns by their category
const getPatternCategories = () => {
  const categories: Record<string, string[]> = {};

  Object.keys(algorithmPatterns).forEach((key) => {
    const category = getCategoryFromKey(key);
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(key);
  });

  // Sort categories alphabetically
  return Object.fromEntries(
    Object.entries(categories).sort(([a], [b]) => a.localeCompare(b))
  );
};

interface AlgorithmSelectorProps {
  currentPattern: PatternKey;
  onPatternChange: (pattern: PatternKey) => void;
}

export function AlgorithmSelector({
  currentPattern,
  onPatternChange,
}: AlgorithmSelectorProps) {
  const algorithmCategories = getPatternCategories();
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isDropdownOpen]);

  // Filter algorithms based on search query
  const filteredCategories = Object.entries(algorithmCategories).reduce(
    (acc, [category, algorithms]) => {
      const filteredAlgorithms = algorithms.filter((algo) =>
        algo.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // Always include the category, even if empty
      acc[category] = filteredAlgorithms;
      return acc;
    },
    {} as Record<string, string[]>
  );

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
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

  // Handle algorithm selection
  const handleAlgorithmSelect = (algorithm: string) => {
    onPatternChange(algorithm as PatternKey);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full relative" ref={dropdownRef}>
      <div
        className="w-full bg-main border border-secondary text-main hover:bg-main/80 rounded-md shadow-md transition-all duration-200 flex items-center justify-between p-2 cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span>{currentPattern || "Select an algorithm"}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isDropdownOpen && (
        <div className="absolute z-50 w-full mt-1 bg-main border border-secondary text-main max-h-[400px] overflow-y-auto min-w-[300px] p-2 rounded-md shadow-lg">
          <div className="sticky top-0 bg-main z-20 pb-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search algorithms..."
                className="w-full bg-secondary text-main rounded-md py-1.5 pl-8 pr-8 text-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-accent2"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {searchQuery && (
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-secondary hover:text-main bg-gradient-to-r from-accent/20 to-accent2/20 hover:from-accent/40 hover:to-accent2/40 rounded-full p-1 transition-all duration-200 flex items-center justify-center"
                  onClick={() => {
                    setSearchQuery("");
                    if (searchInputRef.current) {
                      searchInputRef.current.focus();
                    }
                  }}
                  aria-label="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {Object.entries(filteredCategories).map(([category, algorithms]) => (
            <div key={category} className="px-1 py-1">
              <div className="text-accent sticky top-12 bg-main/90 backdrop-blur-sm py-2 z-10 px-2 font-medium border-b border-secondary/30">
                {category}
              </div>
              {algorithms.length > 0 ? (
                algorithms.sort().map((algorithm) => (
                  <div
                    key={algorithm}
                    className="text-main hover:bg-[color:var(--accent3)]/20 focus:bg-[color:var(--accent3)]/20 hover:text-[color:var(--text-selected-dark)] focus:text-[color:var(--text-selected-dark)] data-[state=selected]:bg-[color:var(--accent3)]/40 data-[state=selected]:text-[color:var(--text-selected-dark)] data-[state=selected]:font-bold px-2 py-1.5 rounded-sm cursor-pointer transition-colors duration-150"
                    onClick={() => handleAlgorithmSelect(algorithm)}
                  >
                    <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
                      {highlightMatch(algorithm, searchQuery)}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-secondary italic px-2 py-1.5 text-sm">
                  No matches found
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
