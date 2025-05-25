import { AlgorithmPattern } from '@algo-trainer/shared/types/algorithm-types';

export const greedyPattern: AlgorithmPattern = {
  title: "Greedy Algorithm",
  description:
    "A problem-solving approach that makes the locally optimal choice at each step, hoping that these choices will lead to a globally optimal solution.",
  timeComplexity: "Varies by algorithm, typically O(n log n) for sorting-based greedy algorithms",
  spaceComplexity: "Varies by algorithm, typically O(1) to O(n)",
  pseudocode: `1. Identify if the problem can be solved using a greedy approach:\n   a. The problem has optimal substructure (optimal solution contains optimal solutions to subproblems)\n   b. The problem has the greedy choice property (locally optimal choice leads to globally optimal solution)\n2. Determine the criteria for making the greedy choice\n3. Sort the input if necessary (often required for greedy algorithms)\n4. Iterate through the sorted input, making the greedy choice at each step\n5. Return the solution\n6. Prove the correctness of the algorithm (if possible)`,
  example: `Problem: Fractional Knapsack\n\nGiven:\n- A set of items, each with a weight and value\n- A knapsack with a maximum weight capacity\n- Items can be broken into smaller pieces\n\nGreedy Approach:\n1. Calculate the value per unit weight for each item\n2. Sort items by value per unit weight in descending order\n3. Take as much of each item as possible, starting with the highest value per unit weight\n\nExample:\nItems: [(10, 60), (20, 100), (30, 120)]  # (weight, value)\nCapacity: 50\n\nValue per unit weight:\nItem 1: 60/10 = 6\nItem 2: 100/20 = 5\nItem 3: 120/30 = 4\n\nSorted order: Item 1, Item 2, Item 3\n\nSolution:\nTake all of Item 1 (10 units)\nTake all of Item 2 (20 units)\nTake 2/3 of Item 3 (20 units)\n\nTotal value = 60 + 100 + (2/3 * 120) = 240`,
  implementation: `# Generic greedy algorithm template
def greedy_algorithm(input_data):
    # 1. Sort the input data based on the greedy criteria
    sorted_data = sorted(input_data, key=lambda x: x.criteria)
    
    # 2. Initialize solution variables
    solution = []
    current_state = initial_state
    
    # 3. Iterate through sorted data making greedy choices
    for item in sorted_data:
        # Check if we can make the greedy choice
        if is_valid_choice(item, current_state):
            # Make the greedy choice
            solution.append(item)
            current_state = update_state(current_state, item)
    
    # 4. Return the solution
    return solution

# Example usage with activity selection
def activity_selection(activities):
    # Sort activities by end time
    sorted_activities = sorted(activities, key=lambda x: x[1])
    
    selected = []
    last_end_time = 0
    
    for start, end in sorted_activities:
        if start >= last_end_time:
            selected.append((start, end))
            last_end_time = end
    
    return selected

# Example usage
activities = [(1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9)]
result = activity_selection(activities)
print(f"Selected activities: {result}")
`,
  category: "Greedy",
};
