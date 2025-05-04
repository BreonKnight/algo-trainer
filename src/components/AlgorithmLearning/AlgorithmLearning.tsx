import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { additionalConcepts } from "./concepts";
import { NavigationBar } from "../algorithm-trainer/layout/NavigationBar";
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
    example:
      "{x | x > 0} means 'the set of all x such that x is greater than 0'",
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
    setCurrentConcept(
      (prev) => (prev - 1 + allConcepts.length) % allConcepts.length
    );
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

  const categories = [
    "All",
    ...new Set(allConcepts.map((concept) => concept.category)),
  ];
  const filteredConcepts = allConcepts.filter((concept) => {
    const matchesSearch =
      concept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concept.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || concept.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-8 text-center text-yellow-400 font-display tracking-tight"
        >
          Monster Hunter Algorithm Academy
        </motion.h1>

        <NavigationBar />

        {/* Control Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowQuestBoard(!showQuestBoard)}
            className="px-6 py-3 bg-yellow-600/80 rounded-lg hover:bg-yellow-600 transition-colors font-medium tracking-wide flex items-center justify-center gap-2"
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
            className="px-6 py-3 bg-blue-600/80 rounded-lg hover:bg-blue-600 transition-colors font-medium tracking-wide flex items-center justify-center gap-2"
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
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-gray-700/50 mb-8"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-2xl font-semibold text-blue-300 font-display tracking-wide">
                  CLRS Mathematical Notation
                </h2>
                <div className="relative w-full sm:w-64">
                  <input
                    type="text"
                    placeholder="Search symbols..."
                    className="w-full px-4 py-2 bg-gray-700/50 rounded-lg border border-gray-600/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CLRS_SYMBOLS.filter(
                  (symbol) =>
                    symbol.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()) ||
                    symbol.description
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                ).map((symbol, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30 hover:bg-gray-700/70 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-mono text-blue-300 mt-1">
                        {symbol.symbol}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-medium text-blue-200">
                          {symbol.name}
                        </h3>
                        <p className="text-sm text-gray-300 mt-1">
                          {symbol.description}
                        </p>
                        <p className="text-sm text-gray-400 mt-1 font-mono">
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
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-gray-700/50 mb-8"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-2xl font-semibold text-yellow-300 font-display tracking-wide">
                  Available Quests
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <div className="relative w-full sm:w-64">
                    <input
                      type="text"
                      placeholder="Search quests..."
                      className="w-full px-4 py-2 bg-gray-700/50 rounded-lg border border-gray-600/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <select
                    className="px-4 py-2 bg-gray-700/50 rounded-lg border border-gray-600/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                    className={`p-4 rounded-lg transition-colors flex items-start gap-3 ${
                      currentConcept === concept.id - 1
                        ? "bg-yellow-600/80 hover:bg-yellow-600"
                        : "bg-gray-700/50 hover:bg-gray-700"
                    }`}
                  >
                    <div className="text-yellow-300 mt-1">
                      {getCategoryIcon(concept.category)}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-medium text-yellow-200">
                        {concept.title}
                      </h3>
                      <p className="text-sm text-gray-300 mt-1">
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
          className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-700/50"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-semibold mb-6 text-yellow-300 font-display tracking-wide text-left"
          >
            {allConcepts[currentConcept].title}
          </motion.h2>

          <div className="mb-6 text-left">
            <span className="inline-block bg-blue-600/80 text-sm px-4 py-2 rounded-full font-medium tracking-wide">
              {allConcepts[currentConcept].category}
            </span>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/30">
              <h3 className="text-xl font-medium text-yellow-200 mb-3 font-display tracking-wide text-left">
                Monster Hunter Example
              </h3>
              <p className="text-gray-100 leading-relaxed font-sans text-left">
                {allConcepts[currentConcept].monsterHunterExample}
              </p>
            </div>

            {showDetails && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/30"
                >
                  <h3 className="text-xl font-medium text-yellow-200 mb-3 font-display tracking-wide text-left">
                    CLRS Explanation
                  </h3>
                  <p className="text-gray-100 leading-relaxed font-sans text-left">
                    {allConcepts[currentConcept].clrsExplanation}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/30"
                >
                  <h3 className="text-xl font-medium text-yellow-200 mb-3 font-display tracking-wide text-left">
                    Mathematical Notation
                  </h3>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600/20">
                    <p className="font-mono text-gray-100 leading-relaxed whitespace-pre-wrap text-left">
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
              className="w-full sm:w-auto px-6 py-3 bg-blue-600/80 rounded-lg hover:bg-blue-600 transition-colors font-medium tracking-wide"
            >
              Previous
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDetails(!showDetails)}
              className="w-full sm:w-auto px-6 py-3 bg-green-600/80 rounded-lg hover:bg-green-600 transition-colors font-medium tracking-wide"
            >
              {showDetails ? "Hide Details" : "Show Details"}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextConcept}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600/80 rounded-lg hover:bg-blue-600 transition-colors font-medium tracking-wide"
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
