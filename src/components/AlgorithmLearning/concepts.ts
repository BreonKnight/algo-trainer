import { Concept } from "./AlgorithmLearning";

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
];
