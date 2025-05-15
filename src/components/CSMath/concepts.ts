import { Concept } from "./types";

export const additionalConcepts: Concept[] = [
  {
    id: 4,
    title: "Probability: Monster Drop Rates",
    category: "Probability",
    monsterHunterExample:
      "When hunting a Rathalos, the chance of getting a Rathalos Plate (1%) is like a Bernoulli trial - each carve is an independent event with a small probability of success. Think of it like rolling a 100-sided die where only one side gives you the rare drop.",
    clrsExplanation:
      "In CLRS, probability theory is essential for analyzing randomized algorithms. The expected value and probability distributions help us understand average-case performance. For example, when analyzing quicksort's average case, we use probability to show that random pivot selection leads to balanced partitions most of the time, resulting in O(n log n) average time complexity.",
    mathematicalNotation:
      "E[X] = Σ x·P(X=x) for discrete random variables\n\nThis notation means:\n- E[X] is the expected value (average outcome)\n- Σ means 'sum of'\n- x represents each possible outcome\n- P(X=x) is the probability of that outcome\n\nFor example, if a monster has three possible drops with probabilities:\n- Common drop (80%): worth 1 point\n- Rare drop (15%): worth 10 points\n- Ultra rare drop (5%): worth 100 points\n\nThe expected value would be:\nE[X] = (1 × 0.8) + (10 × 0.15) + (100 × 0.05) = 7.3 points per hunt",
  },
  {
    id: 5,
    title: "Number Theory: Monster Health and Damage",
    category: "Number Theory",
    monsterHunterExample:
      "When calculating damage reduction from armor, we use modular arithmetic. If a monster deals 100 damage and you have 30% reduction, the actual damage taken is 70 (100 mod 30). This is similar to how a monster's health bar wraps around when it reaches certain thresholds, like how a clock wraps around after 12 hours.",
    clrsExplanation:
      "In CLRS, number theory concepts like modular arithmetic and greatest common divisors are crucial for cryptographic algorithms and hashing functions. For instance, the RSA encryption algorithm relies heavily on modular arithmetic to create secure public-key cryptography. Understanding how numbers wrap around in modular systems helps us design efficient algorithms for data security and integrity checks.",
    mathematicalNotation:
      "a ≡ b (mod n) means n divides (a - b)\n\nBreaking this down:\n- ≡ means 'is congruent to'\n- mod n means 'modulo n' (the remainder after division by n)\n- The statement 'a ≡ b (mod n)' is read as 'a is congruent to b modulo n'\n\nExample with monster health:\nIf a monster has 1000 health and takes 300 damage:\n1000 ≡ 700 (mod 300) because 300 divides (1000 - 700)\nThis is like saying both 1000 and 700 leave the same remainder when divided by 300",
  },
  {
    id: 6,
    title: "Linear Algebra: Monster Movement Vectors",
    category: "Linear Algebra",
    monsterHunterExample:
      "When a Kushala Daora creates a tornado, its movement can be represented as a vector in 3D space. The wind pressure affecting hunters is a scalar multiple of this vector. Think of it like tracking a monster's position in the Ancient Forest - you need three numbers to pinpoint its exact location: how far east/west, north/south, and up/down it is from the camp.",
    clrsExplanation:
      "In CLRS, linear algebra is used in advanced algorithms like singular value decomposition and principal component analysis for dimensionality reduction. These techniques help us process and analyze complex data efficiently. For example, when implementing a recommendation system for monster weaknesses, we might use matrix operations to find patterns in damage data across different weapon types and monster resistances.",
    mathematicalNotation:
      "v = [x, y, z] where x, y, z ∈ ℝ\n\nThis notation represents:\n- v is a vector (a quantity with both magnitude and direction)\n- [x, y, z] shows the vector's components in 3D space\n- x, y, z are real numbers (∈ ℝ means 'is an element of the set of real numbers')\n\nExample with monster movement:\nIf a monster moves 5 units east, 3 units north, and 2 units up:\nv = [5, 3, 2]\nThe magnitude (total distance moved) would be √(5² + 3² + 2²) = √38 ≈ 6.16 units",
  },
  {
    id: 7,
    title: "Recurrence Relations: Monster Attack Patterns",
    category: "Algorithm Analysis",
    monsterHunterExample:
      "A Teostra's supernova attack follows a pattern: every 100 seconds, it charges up (T(n) = T(n-1) + 100). This is similar to how merge sort's time complexity can be expressed recursively. Think of it like predicting when a monster will enrage - if it enrages every 5 minutes, and the last enrage was at 10:00, you know the next one will be at 10:05.",
    clrsExplanation:
      "In CLRS, recurrence relations help us analyze recursive algorithms by expressing their running time in terms of smaller inputs. This is crucial for understanding how algorithms like merge sort and quicksort work. The recurrence relation T(n) = 2T(n/2) + O(n) tells us that to sort n elements, we need to sort two halves of size n/2 and then combine them in linear time.",
    mathematicalNotation:
      "T(n) = 2T(n/2) + O(n) for merge sort\n\nBreaking this down:\n- T(n) represents the time to sort n elements\n- 2T(n/2) means we sort two halves of size n/2\n- O(n) represents the linear time to merge the sorted halves\n\nExample with monster patterns:\nIf a monster has a pattern that repeats every 100 seconds:\nT(n) = T(n-1) + 100\nWhere:\n- T(n) is the time of the nth occurrence\n- T(n-1) is the time of the previous occurrence\n- 100 is the fixed interval between occurrences",
  },
  {
    id: 8,
    title: "Set Theory: Monster Weaknesses",
    category: "Set Theory",
    monsterHunterExample:
      "A monster's elemental weaknesses form a set of vulnerabilities. When using a weapon with multiple elements, we're effectively taking the intersection of these weakness sets. For example, if a monster is weak to both fire and water, and your weapon deals both types of damage, you're hitting the intersection of its weaknesses.",
    clrsExplanation:
      "In CLRS, set operations like intersection and difference are fundamental for algorithms involving multiple data sets or conditions. For instance, when implementing a graph algorithm, we often need to find the intersection of two sets of vertices or edges. Set theory helps us reason about the relationships between different parts of our data structures and algorithms.",
    mathematicalNotation:
      "A ∩ B = {x | x ∈ A and x ∈ B}\n\nBreaking this down:\n- A ∩ B means 'A intersection B' (elements common to both sets)\n- {x | ...} means 'the set of all x such that...'\n- x ∈ A means 'x is an element of set A'\n\nExample with monster weaknesses:\nIf:\nA = {fire, water, thunder} (monster's weaknesses)\nB = {fire, ice, dragon} (your weapon's elements)\nThen:\nA ∩ B = {fire} (the common element that will be most effective)",
  },
  {
    id: 9,
    title: "Graph Theory: Monster Territory Mapping",
    category: "Graph Theory",
    monsterHunterExample:
      "Mapping a monster's territory is like creating a directed graph where nodes are locations and edges are possible movement paths. The adjacency matrix tells us which areas are connected. For example, in the Ancient Forest, if a Rathalos can fly from Area 1 to Area 3, but not directly to Area 5, this creates specific connections in our graph.",
    clrsExplanation:
      "In CLRS, graph representations like adjacency matrices and lists are crucial for implementing graph algorithms efficiently. These data structures help us solve problems like finding the shortest path between two locations or determining if a monster can reach a certain area. Graph theory provides the foundation for many important algorithms in computer science.",
    mathematicalNotation:
      "A[i][j] = 1 if edge (i,j) exists, 0 otherwise\n\nBreaking this down:\n- A is the adjacency matrix\n- i and j are indices representing nodes (locations)\n- A[i][j] = 1 means there's a direct path from node i to node j\n- A[i][j] = 0 means there's no direct path\n\nExample with monster territory:\nIf we have 3 areas:\nA = [\n  [0, 1, 1]  # Area 1 can reach Areas 2 and 3\n  [1, 0, 0]  # Area 2 can only reach Area 1\n  [0, 1, 0]  # Area 3 can only reach Area 2\n]",
  },
  {
    id: 10,
    title: "Probability: Monster Behavior States",
    category: "Probability",
    monsterHunterExample:
      "A monster's state transitions (normal → enraged → exhausted) can be modeled as a Markov chain, where the probability of transitioning depends only on the current state. For example, if a monster is enraged, it has a 70% chance to stay enraged, 20% chance to return to normal, and 10% chance to become exhausted in the next time step.",
    clrsExplanation:
      "In CLRS, Markov chains and probability distributions are used in randomized algorithms and probabilistic analysis. This helps us understand how systems evolve over time when their future state depends only on their current state. This concept is crucial for analyzing algorithms like randomized quicksort, where the choice of pivot affects the algorithm's performance.",
    mathematicalNotation:
      "P(Xₙ₊₁ = x | Xₙ = xₙ, ..., X₁ = x₁) = P(Xₙ₊₁ = x | Xₙ = xₙ)\n\nBreaking this down:\n- P(...) means 'probability of...'\n- Xₙ represents the state at time n\n- | means 'given that'\n- The equation shows that the next state only depends on the current state\n\nExample with monster states:\nTransition probabilities from enraged state:\nP(normal | enraged) = 0.2\nP(enraged | enraged) = 0.7\nP(exhausted | enraged) = 0.1",
  },
  {
    id: 11,
    title: "Floor and Ceiling: Monster Health Thresholds",
    category: "Algorithm Analysis",
    monsterHunterExample:
      "When calculating damage thresholds for breaking monster parts, we use floor and ceiling functions. For example, if a monster's tail requires 1000 damage to sever, and you deal 350 damage per hit, you'll need ⌈1000/350⌉ = 3 hits to break it. The ceiling function ensures we round up to account for partial damage.",
    clrsExplanation:
      "In CLRS, floor and ceiling functions are essential for analyzing algorithms that deal with integer operations or discrete steps. They help us calculate exact bounds for algorithms that can't perform fractional operations. For instance, in binary search, we use floor division to find the middle element, ensuring we always get a valid array index.",
    mathematicalNotation:
      "⌊x⌋ ≤ x < ⌊x⌋ + 1\n⌈x⌉ - 1 < x ≤ ⌈x⌉\n\nBreaking this down:\n- ⌊x⌋ is the greatest integer less than or equal to x\n- ⌈x⌉ is the smallest integer greater than or equal to x\n\nExample with monster damage:\nIf damage required = 1000 and damage per hit = 350:\nNumber of hits needed = ⌈1000/350⌉ = ⌈2.857⌉ = 3\nThis ensures we account for partial damage in the final hit",
  },
  {
    id: 12,
    title: "Logical Operations: Monster Status Effects",
    category: "Algorithm Analysis",
    monsterHunterExample:
      "When a monster is both poisoned (P) and paralyzed (Q), we can represent its status as P ∧ Q. If it's either poisoned or paralyzed, but not both, that's P ⊕ Q. These logical operations help us track and predict monster behavior patterns and status effect interactions.",
    clrsExplanation:
      "In CLRS, logical operations are fundamental for algorithm correctness proofs and boolean logic in computer science. They help us express complex conditions and relationships between different states or conditions in our algorithms. For example, in binary search, we use logical operations to determine which half of the array to search next.",
    mathematicalNotation:
      "P ∧ Q (AND): Both conditions are true\nP ∨ Q (OR): At least one condition is true\nP ⊕ Q (XOR): Exactly one condition is true\n¬P (NOT): The opposite of P\n\nExample with monster status:\nIf:\nP = monster is poisoned\nQ = monster is paralyzed\nThen:\nP ∧ Q = monster is both poisoned and paralyzed\nP ⊕ Q = monster is either poisoned or paralyzed, but not both\n¬P = monster is not poisoned",
  },
  {
    id: 13,
    title: "Product Notation: Monster Drop Combinations",
    category: "Probability",
    monsterHunterExample:
      "When calculating the probability of getting specific combinations of monster drops, we use product notation. For example, if a monster has three possible drop slots, each with different probabilities, the chance of getting a specific combination is the product of the individual probabilities.",
    clrsExplanation:
      "In CLRS, product notation is used in probability theory and combinatorics to calculate the probability of multiple independent events occurring together. This is crucial for analyzing randomized algorithms and understanding the likelihood of different outcomes in complex systems.",
    mathematicalNotation:
      "∏(i=1 to n) P(i) = P(1) × P(2) × ... × P(n)\n\nBreaking this down:\n- ∏ means 'product of'\n- P(i) represents the probability of event i\n- The expression multiplies all probabilities from 1 to n\n\nExample with monster drops:\nIf a monster has three drop slots with probabilities:\n- Slot 1: 10% chance of rare drop\n- Slot 2: 5% chance of rare drop\n- Slot 3: 2% chance of rare drop\nThen:\nP(all rare drops) = ∏(i=1 to 3) P(i) = 0.1 × 0.05 × 0.02 = 0.0001 (0.01%)",
  },
  {
    id: 14,
    title: "Proper Subsets: Monster Territory Hierarchies",
    category: "Set Theory",
    monsterHunterExample:
      "A monster's territory can be represented as a proper subset of the entire map. For example, if Rathalos's territory (A) is a proper subset of the Ancient Forest (B), written as A ⊂ B, it means Rathalos can only appear in certain areas of the forest, but not all of them.",
    clrsExplanation:
      "In CLRS, proper subset relationships are important for understanding hierarchical data structures and containment relationships. This concept is fundamental in algorithms that deal with set operations, such as those used in graph theory and database operations.",
    mathematicalNotation:
      "A ⊂ B means A is a proper subset of B\n\nBreaking this down:\n- A ⊂ B means every element of A is in B\n- But B contains at least one element not in A\n- This is different from A ⊆ B, which allows A to equal B\n\nExample with monster territories:\nIf:\nA = {Area 1, Area 2} (Rathalos's territory)\nB = {Area 1, Area 2, Area 3, Area 4} (Ancient Forest)\nThen:\nA ⊂ B because Rathalos can only appear in Areas 1 and 2,\nbut the forest contains additional areas (3 and 4)",
  },
  {
    id: 15,
    title: "Binary Logarithms: Monster Search Patterns",
    category: "Algorithm Analysis",
    monsterHunterExample:
      "When searching for a monster in a sorted list of possible locations, binary search takes lg(n) steps to find the monster. For example, if there are 1000 possible locations, we need at most lg(1000) ≈ 10 steps to find the monster's exact location.",
    clrsExplanation:
      "In CLRS, binary logarithms are crucial for analyzing divide-and-conquer algorithms like binary search and merge sort. The lg(n) notation specifically refers to logarithms with base 2, which is common in computer science since many algorithms divide problems into two parts at each step.",
    mathematicalNotation:
      "lg(n) = log₂(n)\n\nBreaking this down:\n- lg(n) is the logarithm of n with base 2\n- It answers the question: '2 raised to what power equals n?'\n- This is different from ln(n), which uses base e\n\nExample with monster search:\nIf n = 1000 possible locations:\nlg(1000) ≈ 9.97\nThis means we need at most 10 steps to find the monster\nin a binary search of 1000 sorted locations",
  },
];
