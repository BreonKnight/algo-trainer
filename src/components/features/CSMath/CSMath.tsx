import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
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

import { additionalConcepts } from "@/components/features/CSMath/concepts";
import { useTheme } from "@/components/theme/use-theme";
import { Background } from "@/components/ui/background";
import {
  ThemedDialog,
  ThemedDialogBody,
  ThemedDialogDescription,
  ThemedDialogHeader,
  ThemedDialogTitle,
} from "@/components/ui/themed-dialog";
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
      "In CLRS, set union (A ∪ B) represents all elements that are in either set A or set B. This is fundamental for understanding data structures like disjoint sets, which are used in algorithms like Kruskal's Algorithm's minimum spanning tree. The union operation helps us efficiently combine different sets of data while maintaining their relationships.",
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
      "In CLRS, graphs are fundamental for representing relationships between objects. Nodes (vertices) represent entities, and edges represent relationships between them. This structure is crucial for algorithms like Dijkstra's Algorithm shortest path and depth-first search, which help us solve problems like finding the most efficient route between locations or detecting cycles in monster movement patterns.",
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
  {
    symbol: "⌊x⌋",
    name: "Floor function",
    description: "Rounds down to the nearest integer",
    example: "⌊3.7⌋ = 3",
  },
  {
    symbol: "⌈x⌉",
    name: "Ceiling function",
    description: "Rounds up to the nearest integer",
    example: "⌈3.2⌉ = 4",
  },
  {
    symbol: "lg",
    name: "Binary logarithm",
    description: "Logarithm with base 2",
    example: "lg(8) = 3",
  },
  {
    symbol: "ln",
    name: "Natural logarithm",
    description: "Logarithm with base e",
    example: "ln(e) = 1",
  },
  {
    symbol: "∏",
    name: "Product",
    description: "Represents the product of a sequence of terms",
    example: "∏(i=1 to n) i means 'the product of all integers from 1 to n'",
  },
  {
    symbol: "∞",
    name: "Infinity",
    description: "Represents an unbounded limit",
    example: "lim(x→∞) means 'as x approaches infinity'",
  },
  {
    symbol: "≠",
    name: "Not equal to",
    description: "Indicates inequality between two values",
    example: "a ≠ b means 'a is not equal to b'",
  },
  {
    symbol: "≤",
    name: "Less than or equal to",
    description: "Indicates that one value is less than or equal to another",
    example: "a ≤ b means 'a is less than or equal to b'",
  },
  {
    symbol: "≥",
    name: "Greater than or equal to",
    description: "Indicates that one value is greater than or equal to another",
    example: "a ≥ b means 'a is greater than or equal to b'",
  },
  {
    symbol: "⊂",
    name: "Proper subset",
    description: "Indicates that one set is a subset of another but not equal",
    example: "A ⊂ B means 'A is a proper subset of B'",
  },
  {
    symbol: "⊃",
    name: "Proper superset",
    description: "Indicates that one set contains another but is not equal",
    example: "A ⊃ B means 'A is a proper superset of B'",
  },
  {
    symbol: "⊕",
    name: "Exclusive or",
    description: "Logical operation that is true when exactly one operand is true",
    example: "a ⊕ b means 'a exclusive or b'",
  },
  {
    symbol: "∧",
    name: "Logical and",
    description: "Logical operation that is true when both operands are true",
    example: "a ∧ b means 'a and b'",
  },
  {
    symbol: "∨",
    name: "Logical or",
    description: "Logical operation that is true when at least one operand is true",
    example: "a ∨ b means 'a or b'",
  },
  {
    symbol: "¬",
    name: "Logical not",
    description: "Logical operation that inverts the truth value",
    example: "¬a means 'not a'",
  },
];

interface BaseSymbol {
  symbol: string;
  name: string;
  description: string;
  example: string;
}

interface EnhancedSymbol extends BaseSymbol {
  applications: string[];
  relatedConcepts: string[];
}

interface SymbolModalProps {
  symbol: EnhancedSymbol;
  isOpen: boolean;
  onClose: () => void;
}

const SymbolModal: React.FC<SymbolModalProps> = ({ symbol, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ThemedDialog isOpen={isOpen} onClose={onClose} maxWidth="2xl">
      <ThemedDialogHeader>
        <div className="flex items-start gap-4">
          <span className="text-4xl font-mono text-[var(--accent2)]">{symbol.symbol}</span>
          <div className="flex-1">
            <ThemedDialogTitle>{symbol.name}</ThemedDialogTitle>
            <ThemedDialogDescription>{symbol.description}</ThemedDialogDescription>
          </div>
        </div>
      </ThemedDialogHeader>
      <ThemedDialogBody>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]">
            <h3 className="text-lg font-mono tracking-wide mb-3 text-[var(--accent)]">
              Example Usage
            </h3>
            <p className="font-mono text-[var(--text-main)] leading-relaxed">{symbol.example}</p>
          </div>

          <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]">
            <h3 className="text-lg font-mono tracking-wide mb-3 text-[var(--accent)]">
              Common Applications
            </h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--text-main)] font-sans">
              {symbol.applications?.map((app, index) => (
                <li key={index} className="leading-relaxed">
                  {app}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]">
            <h3 className="text-lg font-mono tracking-wide mb-3 text-[var(--accent)]">
              Related Concepts
            </h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--text-main)] font-sans">
              {symbol.relatedConcepts?.map((concept, index) => (
                <li key={index} className="leading-relaxed">
                  {concept}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ThemedDialogBody>
    </ThemedDialog>
  );
};

const CSMath: React.FC = () => {
  const { theme } = useTheme();
  const [currentConcept, setCurrentConcept] = useState<number>(0);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showQuestBoard, setShowQuestBoard] = useState<boolean>(false);
  const [showSymbols, setShowSymbols] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSymbol, setSelectedSymbol] = useState<EnhancedSymbol | null>(null);

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

  // Update the CLRS_SYMBOLS array to include more detailed information
  const enhancedCLRS_SYMBOLS: EnhancedSymbol[] = CLRS_SYMBOLS.map((symbol) => ({
    ...symbol,
    applications: [
      "Used in algorithm analysis to describe time and space complexity",
      "Essential for understanding asymptotic behavior of algorithms",
      "Helps in comparing different algorithmic approaches",
      "Used in mathematical proofs and formal reasoning",
    ],
    relatedConcepts: [
      "Asymptotic Analysis",
      "Algorithm Complexity",
      "Mathematical Induction",
      "Recurrence Relations",
    ],
  }));

  return (
    <Background>
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold mb-6 leading-[1.15] pb-2 text-[var(--card-text)] text-center"
        >
          AlgoTrainer: Computer Science Math Academy
        </motion.h1>
        <div className="mx-auto mb-10 w-32 h-2 rounded-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)] opacity-80 animate-gradient-x"></div>

        {/* Control Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowQuestBoard(!showQuestBoard)}
            className={cn(
              "px-6 py-3 rounded-lg transition-colors font-medium tracking-wide flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent",
              theme === "light" || theme === "solarized"
                ? "bg-white text-accent border border-accent shadow-sm hover:bg-accent/10 hover:text-accent"
                : theme === "nord"
                  ? "bg-nord7/20 hover:bg-nord7/40 text-nord10 border border-nord7 shadow-sm"
                  : theme === "snes"
                    ? "bg-[#4040e0] text-[#fffbe6] border-2 border-[#3498db] shadow hover:bg-[#e40058] hover:text-[#fffbe6]"
                    : "bg-accent/20 hover:bg-accent/30 text-accent border border-accent/30"
            )}
            aria-label={showQuestBoard ? "Close Quest Board" : "Open Quest Board"}
          >
            <FaScroll className={cn("h-5 w-5", theme === "snes" ? "text-[#4040e0]" : "")} />
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
              "px-6 py-3 rounded-lg transition-colors font-medium tracking-wide flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent",
              theme === "light" || theme === "solarized"
                ? "bg-white text-accent border border-accent shadow-sm hover:bg-accent/10 hover:text-accent"
                : theme === "nord"
                  ? "bg-nord7/20 hover:bg-nord7/40 text-nord10 border border-nord7 shadow-sm"
                  : theme === "snes"
                    ? "bg-[#4040e0] text-[#fffbe6] border-2 border-[#3498db] shadow hover:bg-[#e40058] hover:text-[#fffbe6]"
                    : "bg-accent/20 hover:bg-accent/30 text-accent border border-accent/30"
            )}
            aria-label="Toggle CLRS Symbols"
          >
            <FaCalculator className={cn("h-5 w-5", theme === "snes" ? "text-[#4040e0]" : "")} />
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
                  : theme === "nord"
                    ? "bg-nord6/90 backdrop-blur-sm border-nord7"
                    : theme === "snes"
                      ? "bg-[#4040e0]/10 backdrop-blur-sm border-2 border-[#3498db]"
                      : "bg-background/95 backdrop-blur-sm border-accent2/20"
              )}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2
                  className={cn(
                    "text-2xl font-semibold font-display tracking-wide",
                    theme === "light" || theme === "solarized"
                      ? "text-accent"
                      : theme === "nord"
                        ? "text-nord10"
                        : theme === "snes"
                          ? "text-[#4040e0]"
                          : "text-accent2"
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
                        ? "bg-white text-accent border border-accent shadow-sm placeholder-accent/60 focus:ring-accent"
                        : theme === "nord"
                          ? "bg-nord6/90 text-nord3 border-nord7 placeholder-nord3/60 focus:ring-nord7"
                          : theme === "snes"
                            ? "bg-[#fffbe6] text-[#4040e0] border-2 border-[#3498db] placeholder-[#4040e0]/60 focus:ring-[#3498db]"
                            : "bg-background/50 border-accent2/20 text-foreground placeholder-foreground/50 focus:ring-accent2"
                    )}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {enhancedCLRS_SYMBOLS
                  .filter(
                    (symbol) =>
                      symbol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      symbol.description.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((symbol, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setSelectedSymbol(symbol)}
                      className={cn(
                        "p-4 rounded-lg border cursor-pointer transition-colors",
                        theme === "light" || theme === "solarized"
                          ? "bg-white text-accent border border-accent shadow-sm hover:bg-accent/10 hover:shadow-lg"
                          : theme === "nord"
                            ? "bg-nord6/90 border-nord7 hover:bg-nord7/20"
                            : theme === "snes"
                              ? "bg-[#fffbe6] border-2 border-[#3498db] hover:bg-[#e40058]/10 hover:shadow-lg text-[#4040e0]"
                              : "bg-background/50 border-accent2/10 hover:bg-accent2/10 hover:shadow-lg"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={cn(
                            "text-2xl font-mono mt-1",
                            theme === "light" || theme === "solarized"
                              ? "text-accent"
                              : theme === "nord"
                                ? "text-nord10"
                                : theme === "snes"
                                  ? "text-[#e40058]"
                                  : "text-accent2"
                          )}
                        >
                          {symbol.symbol}
                        </span>
                        <div className="flex-1">
                          <h3
                            className={cn(
                              "font-mono tracking-wide pb-2 border-b-2 mb-2",
                              theme === "light" || theme === "solarized"
                                ? "text-accent border-accent/30"
                                : theme === "nord"
                                  ? "text-nord10 border-nord7/30"
                                  : theme === "snes"
                                    ? "text-[#4040e0] border-[#3498db]/30"
                                    : "text-accent2 border-accent2/30"
                            )}
                          >
                            {symbol.name}
                          </h3>
                          <p
                            className={cn(
                              "text-sm mt-1 font-sans leading-relaxed",
                              theme === "light" || theme === "solarized"
                                ? "text-foreground/90"
                                : theme === "nord"
                                  ? "text-nord3"
                                  : theme === "snes"
                                    ? "text-[#4040e0]/90"
                                    : "text-foreground/90"
                            )}
                          >
                            {symbol.description}
                          </p>
                          <p
                            className={cn(
                              "text-sm mt-2 font-mono leading-relaxed",
                              theme === "light" || theme === "solarized"
                                ? "text-foreground/80"
                                : theme === "nord"
                                  ? "text-nord3/80"
                                  : theme === "snes"
                                    ? "text-[#4040e0]/80"
                                    : "text-foreground/80"
                            )}
                          >
                            {symbol.example}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Symbol Modal */}
        <AnimatePresence>
          {selectedSymbol && (
            <SymbolModal
              symbol={selectedSymbol}
              isOpen={!!selectedSymbol}
              onClose={() => setSelectedSymbol(null)}
            />
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
                  : theme === "nord"
                    ? "bg-nord6/90 backdrop-blur-sm border-nord7"
                    : theme === "snes"
                      ? "bg-[#4040e0]/10 backdrop-blur-sm border-2 border-[#3498db]"
                      : "bg-background/95 backdrop-blur-sm border-accent2/20"
              )}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2
                  className={cn(
                    "text-2xl font-semibold font-display tracking-wide",
                    theme === "light" || theme === "solarized"
                      ? "text-accent"
                      : theme === "nord"
                        ? "text-nord10"
                        : theme === "snes"
                          ? "text-[#4040e0]"
                          : "text-accent2"
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
                          ? "bg-white text-accent border border-accent shadow-sm placeholder-accent/60 focus:ring-accent"
                          : theme === "nord"
                            ? "bg-nord6/90 text-nord3 border-nord7 placeholder-nord3/60 focus:ring-nord7"
                            : theme === "snes"
                              ? "bg-[#fffbe6] text-[#4040e0] border-2 border-[#3498db] placeholder-[#4040e0]/60 focus:ring-[#3498db]"
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
                        ? "bg-white text-accent border border-accent shadow-sm focus:ring-accent"
                        : theme === "nord"
                          ? "bg-nord6/90 text-nord3 border-nord7 focus:ring-nord7"
                          : theme === "snes"
                            ? "bg-[#fffbe6] text-[#4040e0] border-2 border-[#3498db] focus:ring-[#3498db]"
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
                      theme === "light" || theme === "solarized"
                        ? currentConcept === concept.id - 1
                          ? "bg-white text-accent border border-accent shadow-sm hover:bg-accent/10"
                          : "bg-white text-accent border border-accent shadow-sm hover:bg-accent/10"
                        : theme === "nord"
                          ? currentConcept === concept.id - 1
                            ? "bg-nord6/90 text-nord10 border border-nord7 hover:bg-nord7/20"
                            : "bg-nord6/90 text-nord3 border border-nord7 hover:bg-nord7/20"
                          : theme === "snes"
                            ? currentConcept === concept.id - 1
                              ? "bg-[#4040e0] text-[#fffbe6] border-2 border-[#3498db] hover:bg-[#e40058] hover:text-[#fffbe6]"
                              : "bg-[#fffbe6] text-[#4040e0] border-2 border-[#3498db] hover:bg-[#e40058] hover:text-[#fffbe6]"
                            : currentConcept === concept.id - 1
                              ? "bg-accent/20 hover:bg-accent/30 text-accent"
                              : "bg-background/50 hover:bg-background/70"
                    )}
                  >
                    <div
                      className={cn(
                        "mt-1",
                        theme === "light" || theme === "solarized"
                          ? "text-accent drop-shadow-[0_0_2px_#fff]"
                          : theme === "nord"
                            ? "text-nord10 drop-shadow-[0_0_2px_#2e3440]"
                            : theme === "snes"
                              ? currentConcept === concept.id - 1
                                ? "text-[#fffbe6] drop-shadow-[0_0_2px_#4040e0]"
                                : "text-[#4040e0] drop-shadow-[0_0_2px_#00ff00]"
                              : "text-accent2 drop-shadow-[0_0_2px_#000]"
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
                            : theme === "nord"
                              ? "text-nord10"
                              : theme === "snes"
                                ? currentConcept === concept.id - 1
                                  ? "text-[#fffbe6]"
                                  : "text-[#4040e0]"
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
                            : theme === "nord"
                              ? "text-nord3/80"
                              : theme === "snes"
                                ? currentConcept === concept.id - 1
                                  ? "text-[#fffbe6]/80"
                                  : "text-[#4040e0]/80"
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
              : theme === "nord"
                ? "bg-nord6/90 backdrop-blur-sm border-nord7"
                : theme === "snes"
                  ? "bg-[#4040e0]/10 backdrop-blur-sm border-2 border-[#3498db]"
                  : "bg-background/95 backdrop-blur-sm border-accent2/20"
          )}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(
              "text-3xl font-semibold mb-6 font-display tracking-wide text-left",
              theme === "light" || theme === "solarized"
                ? "text-accent"
                : theme === "nord"
                  ? "text-nord10"
                  : theme === "snes"
                    ? "text-[#4040e0]"
                    : "text-accent2"
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
                  ? "bg-white text-accent border border-accent shadow-sm hover:bg-accent/10"
                  : "bg-accent/20 hover:bg-accent/30 text-accent"
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
                  ? "bg-white text-accent border border-accent shadow-sm hover:bg-accent/10"
                  : "bg-accent/20 hover:bg-accent/30 text-accent"
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
                  ? "bg-white text-accent border border-accent shadow-sm hover:bg-accent/10"
                  : "bg-accent/20 hover:bg-accent/30 text-accent"
              )}
            >
              Next
            </motion.button>
          </div>
        </motion.div>
      </div>
    </Background>
  );
};

export default CSMath;
