import { ChevronRight } from "lucide-react";

export const GreedyPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Greedy Algorithms</span>
      <span className="ml-2 text-xs text-secondary">
        (Optimization Technique)
      </span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Making
      locally optimal choices
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Activity Selection Problem
ACTIVITY-SELECTION(s, f):
    # Sort activities by finish time
    n = length of s
    A = {1}  # First activity always selected
    k = 1
    
    # Select compatible activities
    for m from 2 to n:
        if s[m] ≥ f[k]:
            A = A ∪ {m}
            k = m
    
    return A

// Fractional Knapsack Problem
FRACTIONAL-KNAPSACK(W, w, v):
    # Sort items by value per weight
    n = length of w
    items = new array of (weight, value) pairs
    for i from 1 to n:
        items[i] = (w[i], v[i])
    sort items by v[i]/w[i] in decreasing order
    
    # Fill knapsack
    total_value = 0
    remaining = W
    
    for i from 1 to n:
        if remaining ≥ items[i].weight:
            total_value = total_value + items[i].value
            remaining = remaining - items[i].weight
        else:
            fraction = remaining / items[i].weight
            total_value = total_value + fraction * items[i].value
            break
    
    return total_value`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort:</span> Arrange items
        by optimal criteria
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Select:</span> Choose the
        best available option
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Modify
        remaining resources
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Repeat:</span> Continue
        until solution complete
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Activity Selection
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Activities:
Start: [1, 3, 0, 5, 8, 5]
Finish: [2, 4, 6, 7, 9, 9]

Selected activities: 1, 2, 4, 5
Maximum activities: 4`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Fractional Knapsack
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Items:
Weight: [10, 20, 30]
Value: [60, 100, 120]
Capacity: 50

Selected items:
- Take all of item 1 (value: 60)
- Take all of item 2 (value: 100)
- Take 2/3 of item 3 (value: 80)

Total value: 240`}
      </pre>
    </div>
  </div>
);
