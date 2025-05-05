import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { additionalConcepts } from "./concepts";
import {
  FaScroll,
  FaBook,
  FaGraduationCap,
  FaChartLine,
  FaCalculator,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
} from "react-icons/fa";
import { useTheme } from "../theme/theme-context";
import { cn } from "@/lib/utils";

export interface Concept {
  id: number;
  title: string;
  category: string;
  monsterHunterExample: string;
  clrsExplanation: string;
  mathematicalNotation: string;
}

const initialConcepts: Concept[] = [
  {
    id: 1,
    title: "Set Theory: Union of Monster Territories",
    category: "Set Theory",
    monsterHunterExample:
      "When Rathalos and Rathian share a territory, their combined hunting grounds form a union. Just like how the Ancient Forest and Wildspire Waste can overlap during certain hunts. If Rathalos can be found in areas {1, 2, 3} and Rathian in areas {2, 3, 4}, their combined territory is {1, 2, 3, 4} - all areas where either monster can appear.",
    clrsExplanation:
      "In CLRS, set union (A ∪ B) represents all elements that are in either set A or set B. This is fundamental for understanding data structures like disjoint sets, which are used in algorithms like Kruskal's minimum spanning tree. The union operation helps us efficiently combine different sets of data while maintaining their relationships.",
    mathematicalNotation:
      "A ∪ B = {x | x ∈ A or x ∈ B}\n\nBreaking this down:\n- A ∪ B means 'A union B' (all elements in either set)\n- {x | ...} means 'the set of all x such that...'\n- x ∈ A means 'x is an element of set A'\n\nExample with monster territories:\nIf:\nA = {1, 2, 3} (Rathalos areas)\nB = {2, 3, 4} (Rathian areas)\nThen:\nA ∪ B = {1, 2, 3, 4} (all areas where either monster appears)",
  },
  {
    id: 2,
    title: "Graph Theory: Monster Migration Patterns",
    category: "Graph Theory",
    monsterHunterExample:
      "Think of each monster's nest as a node, and their migration paths as edges. When Nergigante moves between regions, it creates an adjacency list of possible locations. For example, if Nergigante can move from its nest to areas 2, 3, and 5, but not directly to area 4, this creates specific connections in our graph that help us predict its movement patterns.",
    clrsExplanation:
      "In CLRS, graphs are fundamental for representing relationships between objects. Nodes (vertices) represent entities, and edges represent relationships between them. This structure is crucial for algorithms like Dijkstra's shortest path and depth-first search, which help us solve problems like finding the most efficient route between locations or detecting cycles in monster movement patterns.",
    mathematicalNotation:
      "G = (V, E) where V is the set of vertices and E is the set of edges\n\nBreaking this down:\n- G represents the entire graph\n- V is the set of vertices (nodes/locations)\n- E is the set of edges (connections/paths)\n\nExample with monster migration:\nIf a monster can move between 4 areas:\nV = {1, 2, 3, 4} (the areas)\nE = {(1,2), (2,3), (3,4), (1,4)} (possible movements)\nThis means the monster can move:\n1 → 2 → 3 → 4 or 1 → 4 directly",
  },
  {
    id: 3,
    title: "Big-O Analysis: Monster Attack Patterns",
    category: "Algorithm Analysis",
    monsterHunterExample:
      "When facing a Diablos, its charge attack takes O(1) time to initiate, but its burrowing attack takes O(n) time where n is the distance it needs to travel. Think of it like this: the charge is instant (constant time), but the burrow gets longer the farther it needs to go (linear time). This helps us predict and prepare for different attack patterns based on their time complexity.",
    clrsExplanation:
      "Big-O notation describes the upper bound of an algorithm's time complexity. It's crucial for understanding how algorithms scale with input size. For example, a linear search (O(n)) might be fine for small monster databases, but for large ones, we'd want a binary search (O(log n)) instead. This concept helps us choose the most efficient algorithms for different situations.",
    mathematicalNotation:
      "O(f(n)) = {g(n) | ∃c > 0, n₀ > 0 : 0 ≤ g(n) ≤ c·f(n) ∀n ≥ n₀}\n\nBreaking this down:\n- O(f(n)) means 'order of f(n)'\n- ∃ means 'there exists'\n- ∀ means 'for all'\n- The equation says g(n) grows no faster than f(n) times some constant\n\nExample with monster attacks:\n- Charge attack: O(1) (constant time, same duration always)\n- Burrow attack: O(n) (time increases linearly with distance)\n- Area attack: O(n²) (time increases quadratically with area size)",
  },
];

const allConcepts = [...initialConcepts, ...additionalConcepts];

const CLRS_SYMBOLS = [
  {
    symbol: "∈",
    name: "Element of",
    description: "Indicates that an element belongs to a set",
    example: "x ∈ A means 'x is an element of set A'",
  },
  {
    symbol: "∉",
    name: "Not an element of",
    description: "Indicates that an element does not belong to a set",
    example: "x ∉ A means 'x is not an element of set A'",
  },
  {
    symbol: "⊆",
    name: "Subset",
    description: "Indicates that all elements of one set are in another set",
    example: "A ⊆ B means 'A is a subset of B'",
  },
  {
    symbol: "∪",
    name: "Union",
    description: "Combines all elements from two sets",
    example: "A ∪ B means 'the union of sets A and B'",
  },
  {
    symbol: "∩",
    name: "Intersection",
    description: "Contains only elements common to both sets",
    example: "A ∩ B means 'the intersection of sets A and B'",
  },
  {
    symbol: "∅",
    name: "Empty set",
    description: "A set containing no elements",
    example: "∅ represents an empty set",
  },
  {
    symbol: "∀",
    name: "For all",
    description: "Indicates that a statement holds for every element",
    example: "∀x ∈ A means 'for all x in set A'",
  },
  {
    symbol: "∃",
    name: "There exists",
    description: "Indicates that at least one element satisfies a condition",
    example: "∃x ∈ A means 'there exists an x in set A'",
  },
  {
    symbol: "O()",
    name: "Big O notation",
    description: "Describes the upper bound of an algorithm's time complexity",
    example: "O(n) means 'linear time complexity'",
  },
  {
    symbol: "Θ()",
    name: "Theta notation",
    description: "Describes both upper and lower bounds of complexity",
    example: "Θ(n log n) means 'exactly n log n time complexity'",
  },
  {
    symbol: "Ω()",
    name: "Omega notation",
    description: "Describes the lower bound of an algorithm's time complexity",
    example: "Ω(1) means 'at least constant time complexity'",
  },
  {
    symbol: "→",
    name: "Function mapping",
    description: "Indicates a function maps from one set to another",
    example: "f: A → B means 'function f maps from set A to set B'",
  },
  {
    symbol: "|",
    name: "Such that",
    description: "Used in set builder notation to specify conditions",
    example: "{x | x > 0} means 'the set of all x such that x is greater than 0'",
  },
  {
    symbol: "≡",
    name: "Congruent to",
    description: "Indicates equivalence in modular arithmetic",
    example: "a ≡ b (mod n) means 'a is congruent to b modulo n'",
  },
  {
    symbol: "∑",
    name: "Summation",
    description: "Represents the sum of a sequence of terms",
    example: "∑(i=1 to n) i means 'the sum of all integers from 1 to n'",
  },
];

const AlgorithmLearning: React.FC = () => {
  const { theme } = useTheme();
  const [currentConcept, setCurrentConcept] = useState<number>(0);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showQuestBoard, setShowQuestBoard] = useState<boolean>(false);
  const [showSymbols, setShowSymbols] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const nextConcept = () => {
    setCurrentConcept((prev) => (prev + 1) % allConcepts.length);
    setShowDetails(false);
  };

  const prevConcept = () => {
    setCurrentConcept((prev) => (prev - 1 + allConcepts.length) % allConcepts.length);
    setShowDetails(false);
  };

  const selectConcept = (id: number) => {
    setCurrentConcept(id - 1);
    setShowQuestBoard(false);
    setShowDetails(false);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Set Theory":
        return <FaBook className="h-5 w-5" />;
      case "Graph Theory":
        return <FaChartLine className="h-5 w-5" />;
      case "Algorithm Analysis":
        return <FaGraduationCap className="h-5 w-5" />;
      default:
        return <FaScroll className="h-5 w-5" />;
    }
  };

  const categories = ["All", ...new Set(allConcepts.map((concept) => concept.category))];
  const filteredConcepts = allConcepts.filter((concept) => {
    const matchesSearch =
      concept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concept.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || concept.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      className={cn(
        "min-h-screen p-8 font-sans",
        theme === "light" || theme === "solarized"
          ? "bg-gradient-to-b from-background via-background/95 to-background text-foreground"
          : "bg-gradient-to-b from-background via-background/95 to-background text-foreground"
      )}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "text-5xl font-bold mb-8 text-center font-display tracking-tight",
            theme === "light" || theme === "solarized" ? "text-accent" : "text-accent2"
          )}
        >
          Monster Hunter Algorithm Academy
        </motion.h1>

        {/* Control Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowQuestBoard(!showQuestBoard)}
            className={cn(
              "px-6 py-3 rounded-lg transition-colors font-medium tracking-wide flex items-center justify-center gap-2",
              theme === "light" || theme === "solarized"
                ? "bg-accent/20 hover:bg-accent/30 text-accent"
                : "bg-accent2/20 hover:bg-accent2/30 text-accent2"
            )}
          >
            <FaScroll className="h-5 w-5" />
            {showQuestBoard ? "Close Quest Board" : "Open Quest Board"}
            {showQuestBoard ? (
              <FaChevronUp className="h-4 w-4" />
            ) : (
              <FaChevronDown className="h-4 w-4" />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSymbols(!showSymbols)}
            className={cn(
              "px-6 py-3 rounded-lg transition-colors font-medium tracking-wide flex items-center justify-center gap-2",
              theme === "light" || theme === "solarized"
                ? "bg-accent/20 hover:bg-accent/30 text-accent"
                : "bg-accent2/20 hover:bg-accent2/30 text-accent2"
            )}
          >
            <FaCalculator className="h-5 w-5" />
            CLRS Symbols
            {showSymbols ? (
              <FaChevronUp className="h-4 w-4" />
            ) : (
              <FaChevronDown className="h-4 w-4" />
            )}
          </motion.button>
        </div>

        {/* CLRS Symbols Dropdown */}
        <AnimatePresence>
          {showSymbols && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={cn(
                "rounded-xl p-6 shadow-2xl border mb-8",
                theme === "light" || theme === "solarized"
                  ? "bg-background/95 backdrop-blur-sm border-accent/20"
                  : "bg-background/95 backdrop-blur-sm border-accent2/20"
              )}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2
                  className={cn(
                    "text-2xl font-semibold font-display tracking-wide",
                    theme === "light" || theme === "solarized" ? "text-accent" : "text-accent2"
                  )}
                >
                  CLRS Mathematical Notation
                </h2>
                <div className="relative w-full sm:w-64">
                  <input
                    type="text"
                    placeholder="Search symbols..."
                    className={cn(
                      "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2",
                      theme === "light" || theme === "solarized"
                        ? "bg-background/50 border-accent/20 text-foreground placeholder-foreground/50 focus:ring-accent"
                        : "bg-background/50 border-accent2/20 text-foreground placeholder-foreground/50 focus:ring-accent2"
                    )}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CLRS_SYMBOLS.filter(
                  (symbol) =>
                    symbol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    symbol.description.toLowerCase().includes(searchQuery.toLowerCase())
                ).map((symbol, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      "p-4 rounded-lg border hover:transition-colors",
                      theme === "light" || theme === "solarized"
                        ? "bg-background/50 border-accent/10 hover:bg-background/70"
                        : "bg-background/50 border-accent2/10 hover:bg-background/70"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={cn(
                          "text-2xl font-mono mt-1",
                          theme === "light" || theme === "solarized"
                            ? "text-accent"
                            : "text-accent2"
                        )}
                      >
                        {symbol.symbol}
                      </span>
                      <div className="flex-1">
                        <h3
                          className={cn(
                            "font-medium",
                            theme === "light" || theme === "solarized"
                              ? "text-accent"
                              : "text-accent2"
                          )}
                        >
                          {symbol.name}
                        </h3>
                        <p
                          className={cn(
                            "text-sm mt-1",
                            theme === "light" || theme === "solarized"
                              ? "text-foreground/80"
                              : "text-foreground/80"
                          )}
                        >
                          {symbol.description}
                        </p>
                        <p
                          className={cn(
                            "text-sm mt-1 font-mono",
                            theme === "light" || theme === "solarized"
                              ? "text-foreground/60"
                              : "text-foreground/60"
                          )}
                        >
                          {symbol.example}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quest Board */}
        <AnimatePresence>
          {showQuestBoard && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={cn(
                "rounded-xl p-6 shadow-2xl border mb-8",
                theme === "light" || theme === "solarized"
                  ? "bg-background/95 backdrop-blur-sm border-accent/20"
                  : "bg-background/95 backdrop-blur-sm border-accent2/20"
              )}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2
                  className={cn(
                    "text-2xl font-semibold font-display tracking-wide",
                    theme === "light" || theme === "solarized" ? "text-accent" : "text-accent2"
                  )}
                >
                  Available Quests
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <div className="relative w-full sm:w-64">
                    <input
                      type="text"
                      placeholder="Search quests..."
                      className={cn(
                        "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2",
                        theme === "light" || theme === "solarized"
                          ? "bg-background/50 border-accent/20 text-foreground placeholder-foreground/50 focus:ring-accent"
                          : "bg-background/50 border-accent2/20 text-foreground placeholder-foreground/50 focus:ring-accent2"
                      )}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50" />
                  </div>
                  <select
                    className={cn(
                      "px-4 py-2 rounded-lg border focus:outline-none focus:ring-2",
                      theme === "light" || theme === "solarized"
                        ? "bg-background/50 border-accent/20 text-foreground focus:ring-accent"
                        : "bg-background/50 border-accent2/20 text-foreground focus:ring-accent2"
                    )}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredConcepts.map((concept) => (
                  <motion.button
                    key={concept.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => selectConcept(concept.id)}
                    className={cn(
                      "p-4 rounded-lg transition-colors flex items-start gap-3",
                      currentConcept === concept.id - 1
                        ? theme === "light" || theme === "solarized"
                          ? "bg-accent/20 hover:bg-accent/30 text-accent"
                          : "bg-accent2/20 hover:bg-accent2/30 text-accent2"
                        : theme === "light" || theme === "solarized"
                          ? "bg-background/50 hover:bg-background/70"
                          : "bg-background/50 hover:bg-background/70"
                    )}
                  >
                    <div
                      className={cn(
                        "mt-1",
                        theme === "light" || theme === "solarized" ? "text-accent" : "text-accent2"
                      )}
                    >
                      {getCategoryIcon(concept.category)}
                    </div>
                    <div className="flex-1 text-left">
                      <h3
                        className={cn(
                          "font-medium",
                          theme === "light" || theme === "solarized"
                            ? "text-accent"
                            : "text-accent2"
                        )}
                      >
                        {concept.title}
                      </h3>
                      <p
                        className={cn(
                          "text-sm mt-1",
                          theme === "light" || theme === "solarized"
                            ? "text-foreground/80"
                            : "text-foreground/80"
                        )}
                      >
                        {concept.category}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          key={currentConcept}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={cn(
            "rounded-xl p-8 shadow-2xl border",
            theme === "light" || theme === "solarized"
              ? "bg-background/95 backdrop-blur-sm border-accent/20"
              : "bg-background/95 backdrop-blur-sm border-accent2/20"
          )}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(
              "text-3xl font-semibold mb-6 font-display tracking-wide text-left",
              theme === "light" || theme === "solarized" ? "text-accent" : "text-accent2"
            )}
          >
            {allConcepts[currentConcept].title}
          </motion.h2>

          <div className="mb-6 text-left">
            <span
              className={cn(
                "inline-block text-sm px-4 py-2 rounded-full font-medium tracking-wide",
                theme === "light" || theme === "solarized"
                  ? "bg-accent/20 text-accent"
                  : "bg-accent2/20 text-accent2"
              )}
            >
              {allConcepts[currentConcept].category}
            </span>
          </div>

          <div className="space-y-6">
            <div
              className={cn(
                "p-6 rounded-xl border",
                theme === "light" || theme === "solarized"
                  ? "bg-background/50 border-accent/10"
                  : "bg-background/50 border-accent2/10"
              )}
            >
              <h3
                className={cn(
                  "text-xl font-medium mb-3 font-display tracking-wide text-left",
                  theme === "light" || theme === "solarized" ? "text-accent" : "text-accent2"
                )}
              >
                Monster Hunter Example
              </h3>
              <p
                className={cn(
                  "leading-relaxed font-sans text-left",
                  theme === "light" || theme === "solarized"
                    ? "text-foreground/90"
                    : "text-foreground/90"
                )}
              >
                {allConcepts[currentConcept].monsterHunterExample}
              </p>
            </div>

            {showDetails && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "p-6 rounded-xl border",
                    theme === "light" || theme === "solarized"
                      ? "bg-background/50 border-accent/10"
                      : "bg-background/50 border-accent2/10"
                  )}
                >
                  <h3
                    className={cn(
                      "text-xl font-medium mb-3 font-display tracking-wide text-left",
                      theme === "light" || theme === "solarized" ? "text-accent" : "text-accent2"
                    )}
                  >
                    CLRS Explanation
                  </h3>
                  <p
                    className={cn(
                      "leading-relaxed font-sans text-left",
                      theme === "light" || theme === "solarized"
                        ? "text-foreground/90"
                        : "text-foreground/90"
                    )}
                  >
                    {allConcepts[currentConcept].clrsExplanation}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "p-6 rounded-xl border",
                    theme === "light" || theme === "solarized"
                      ? "bg-background/50 border-accent/10"
                      : "bg-background/50 border-accent2/10"
                  )}
                >
                  <h3
                    className={cn(
                      "text-xl font-medium mb-3 font-display tracking-wide text-left",
                      theme === "light" || theme === "solarized" ? "text-accent" : "text-accent2"
                    )}
                  >
                    Mathematical Notation
                  </h3>
                  <div
                    className={cn(
                      "p-4 rounded-lg border",
                      theme === "light" || theme === "solarized"
                        ? "bg-background/70 border-accent/5"
                        : "bg-background/70 border-accent2/5"
                    )}
                  >
                    <p
                      className={cn(
                        "font-mono leading-relaxed whitespace-pre-wrap text-left",
                        theme === "light" || theme === "solarized"
                          ? "text-foreground/90"
                          : "text-foreground/90"
                      )}
                    >
                      {allConcepts[currentConcept].mathematicalNotation}
                    </p>
                  </div>
                </motion.div>
              </>
            )}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevConcept}
              className={cn(
                "w-full sm:w-auto px-6 py-3 rounded-lg transition-colors font-medium tracking-wide",
                theme === "light" || theme === "solarized"
                  ? "bg-accent/20 hover:bg-accent/30 text-accent"
                  : "bg-accent2/20 hover:bg-accent2/30 text-accent2"
              )}
            >
              Previous
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDetails(!showDetails)}
              className={cn(
                "w-full sm:w-auto px-6 py-3 rounded-lg transition-colors font-medium tracking-wide",
                theme === "light" || theme === "solarized"
                  ? "bg-accent/20 hover:bg-accent/30 text-accent"
                  : "bg-accent2/20 hover:bg-accent2/30 text-accent2"
              )}
            >
              {showDetails ? "Hide Details" : "Show Details"}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextConcept}
              className={cn(
                "w-full sm:w-auto px-6 py-3 rounded-lg transition-colors font-medium tracking-wide",
                theme === "light" || theme === "solarized"
                  ? "bg-accent/20 hover:bg-accent/30 text-accent"
                  : "bg-accent2/20 hover:bg-accent2/30 text-accent2"
              )}
            >
              Next
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AlgorithmLearning;
