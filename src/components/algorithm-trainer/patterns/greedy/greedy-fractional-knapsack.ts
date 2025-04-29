import { AlgorithmPattern } from "../../types";

export const greedy_fractional_knapsackPattern: AlgorithmPattern = {
  category: "Greedy Algorithms",
  title: "Greedy Fractional Knapsack",
  description:
    "A greedy approach to the knapsack problem where items can be broken into smaller pieces, always choosing the item with the highest value per unit weight.",
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(1)",
  pseudocode: `1. Calculate value/weight ratio for each item\n2. Sort items by ratio in descending order\n3. For each item:\n   a. If can take whole item:\n      - Take it completely\n   b. Else:\n      - Take fraction that fits\n4. Return total value`,
  example: `Items: [(60,10), (100,20), (120,30)]
Ratios: [6, 5, 4]
Capacity: 50

Take:
1. 10kg of item 1: value = 60
2. 20kg of item 2: value = 100
3. 20kg of item 3: value = 80

Total value: 240`,
  implementation: `def fractional_knapsack(values, weights, capacity):
    # Calculate value/weight ratios
    ratios = [(v/w, v, w) for v, w in zip(values, weights)]
    ratios.sort(reverse=True)
    
    total_value = 0
    remaining = capacity
    
    for ratio, value, weight in ratios:
        if remaining >= weight:
            # Take whole item
            total_value += value
            remaining -= weight
        else:
            # Take fraction
            total_value += ratio * remaining
            break
    
    return total_value`,
};
