export interface Notation {
  symbol: string;
  name: string;
  description: string;
  examples?: string[];
  latex?: string;
}

export const notationData: Record<string, Notation> = {
  elementOf: {
    symbol: "∈",
    name: "Element of",
    description:
      "Indicates that an element belongs to a set. If x ∈ A, then x is an element of set A.",
    examples: ["If A = {1, 2, 3}, then 2 ∈ A", "If B is the set of even numbers, then 4 ∈ B"],
    latex: "\\in",
  },
  notElementOf: {
    symbol: "∉",
    name: "Not an element of",
    description:
      "Indicates that an element does not belong to a set. If x ∉ A, then x is not an element of set A.",
    examples: ["If A = {1, 2, 3}, then 4 ∉ A", "If B is the set of even numbers, then 3 ∉ B"],
    latex: "\\notin",
  },
  subset: {
    symbol: "⊂",
    name: "Subset",
    description:
      "Indicates that one set is a subset of another. If A ⊂ B, then every element of A is also in B.",
    examples: [
      "If A = {1, 2} and B = {1, 2, 3}, then A ⊂ B",
      "The set of even numbers is a subset of the set of integers",
    ],
    latex: "\\subset",
  },
  union: {
    symbol: "∪",
    name: "Union",
    description: "The union of two sets A and B is the set of all elements that are in A or in B.",
    examples: [
      "If A = {1, 2} and B = {2, 3}, then A ∪ B = {1, 2, 3}",
      "The union of even and odd numbers is the set of all integers",
    ],
    latex: "\\cup",
  },
  intersection: {
    symbol: "∩",
    name: "Intersection",
    description:
      "The intersection of two sets A and B is the set of all elements that are in both A and B.",
    examples: [
      "If A = {1, 2, 3} and B = {2, 3, 4}, then A ∩ B = {2, 3}",
      "The intersection of even numbers and multiples of 3 is the set of multiples of 6",
    ],
    latex: "\\cap",
  },
  emptySet: {
    symbol: "∅",
    name: "Empty Set",
    description: "Represents a set that contains no elements.",
    examples: [
      "The set of all real numbers x such that x² < 0 is ∅",
      "The intersection of the set of even numbers and odd numbers is ∅",
    ],
    latex: "\\emptyset",
  },
  forAll: {
    symbol: "∀",
    name: "For all",
    description:
      "Universal quantifier. Indicates that a statement holds for all elements in a set.",
    examples: [
      "∀x ∈ ℝ, x² ≥ 0 (For all real numbers x, x squared is greater than or equal to 0)",
      "∀n ∈ ℕ, n ≥ 0 (For all natural numbers n, n is greater than or equal to 0)",
    ],
    latex: "\\forall",
  },
  exists: {
    symbol: "∃",
    name: "There exists",
    description:
      "Existential quantifier. Indicates that there exists at least one element in a set for which a statement holds.",
    examples: [
      "∃x ∈ ℝ such that x² = 2 (There exists a real number x such that x squared equals 2)",
      "∃n ∈ ℕ such that n is prime (There exists a natural number n that is prime)",
    ],
    latex: "\\exists",
  },
};
