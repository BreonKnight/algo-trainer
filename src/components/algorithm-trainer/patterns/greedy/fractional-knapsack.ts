import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const fractionalKnapsackPattern: AlgorithmPattern = {
  title: "Fractional Knapsack",
  description:
    "A greedy algorithm that solves the fractional knapsack problem by selecting items based on their value-to-weight ratio. It allows taking fractions of items to maximize the total value while staying within the weight capacity.",
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(1)",
  category: "Greedy",
  pseudocode: `
1. Calculate value-to-weight ratio for each item
2. Sort items in decreasing order of value-to-weight ratio
3. Initialize total_value = 0 and remaining_capacity = capacity
4. For each item in sorted order:
   a. If item weight <= remaining_capacity:
      - Take the whole item
      - Add item value to total_value
      - Subtract item weight from remaining_capacity
   b. Else:
      - Take fraction of item that fits
      - Add fraction of item value to total_value
      - Set remaining_capacity to 0
      - Break the loop
5. Return total_value
  `,
  example: `Input:
Items = [
  {value: 60, weight: 10},
  {value: 100, weight: 20},
  {value: 120, weight: 30}
]
Capacity = 50

Step 1: Calculate value-to-weight ratios
Item 1: 60/10 = 6.0
Item 2: 100/20 = 5.0
Item 3: 120/30 = 4.0

Step 2: Sort items by ratio (already sorted)
[Item 1, Item 2, Item 3]

Step 3: Take items
- Take all of Item 1 (10kg, value: 60)
- Take all of Item 2 (20kg, value: 100)
- Take 20/30 of Item 3 (20kg, value: 80)

Total value = 60 + 100 + 80 = 240`,
  implementation: `class Item:
    def __init__(self, value, weight):
        self.value = value
        self.weight = weight
        self.ratio = value / weight

def fractional_knapsack(items, capacity):
    # Sort items by value-to-weight ratio in descending order
    items.sort(key=lambda x: x.ratio, reverse=True)
    
    total_value = 0
    remaining_capacity = capacity
    
    for item in items:
        if remaining_capacity >= item.weight:
            # Take the whole item
            total_value += item.value
            remaining_capacity -= item.weight
        else:
            # Take a fraction of the item
            fraction = remaining_capacity / item.weight
            total_value += item.value * fraction
            break
    
    return total_value

# Example usage
items = [
    Item(60, 10),
    Item(100, 20),
    Item(120, 30)
]
capacity = 50
max_value = fractional_knapsack(items, capacity)
print(f"Maximum value in knapsack: {max_value}")  # Output: 240.0`,
  keySteps: [
    "Calculate value-to-weight ratio for each item",
    "Sort items in decreasing order of value-to-weight ratio",
    "Take items in order of highest ratio first",
    "Take whole items if possible, otherwise take fractions",
    "Return the maximum total value achievable",
  ],
};
