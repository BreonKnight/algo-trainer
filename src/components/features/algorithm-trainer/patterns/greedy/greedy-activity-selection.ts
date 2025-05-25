import { AlgorithmPattern } from '@algo-trainer/shared/types/algorithm-types';

export const greedyActivitySelectionPattern: AlgorithmPattern = {
  title: "Greedy Activity Selection",
  description:
    "A greedy algorithm that selects the maximum number of non-overlapping activities that can be performed by a single person.",
  timeComplexity: "O(n log n) for sorting, O(n) after sorting",
  spaceComplexity: "O(n) for storing result",
  category: "Greedy Algorithms",
  pseudocode: `1. Sort activities by finish time\n2. Select first activity\n3. For each remaining activity:\n   a. If start time >= last finish time:\n      - Select activity\n      - Update last finish time\n4. Return selected activities`,
  example: `Activities: [(1,4), (3,5), (0,6), (5,7), (3,8), (5,9), (6,10), (8,11)]
Sorted by finish: [(1,4), (3,5), (0,6), (5,7), (3,8), (5,9), (6,10), (8,11)]

Selected:
1. (1,4)
2. (5,7)
3. (8,11)

Result: 3 activities`,
  implementation: `def activity_selection(activities):
    # Sort activities by finish time
    activities.sort(key=lambda x: x[1])
    
    selected = [activities[0]]
    last_finish = activities[0][1]
    
    for i in range(1, len(activities)):
        if activities[i][0] >= last_finish:
            selected.append(activities[i])
            last_finish = activities[i][1]
    
    return selected`,
};
