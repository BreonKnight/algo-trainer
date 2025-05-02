import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const GreedyFractionalKnapsackPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Fractional Knapsack</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Maximizing
      value with weight constraints
    </div>

    <PseudocodeDisplay code={`// Standard Fractional Knapsack
class Item:
    def __init__(self, value, weight):
        self.value = value
        self.weight = weight
        self.ratio = value / weight

def fractional_knapsack(items, capacity):
    # Sort items by value-to-weight ratio
    items.sort(key=lambda x: x.ratio, reverse=True)
    
    total_value = 0
    remaining_capacity = capacity
    
    for item in items:
        if remaining_capacity >= item.weight:
            # Take whole item
            total_value += item.value
            remaining_capacity -= item.weight
        else:
            # Take fraction of item
            fraction = remaining_capacity / item.weight
            total_value += item.value * fraction
            break
    
    return total_value

// Multiple Knapsacks
def multiple_knapsacks(items, capacities):
    # Sort items by value-to-weight ratio
    items.sort(key=lambda x: x.ratio, reverse=True)
    
    total_value = 0
    remaining_capacities = capacities.copy()
    
    for item in items:
        for i in range(len(remaining_capacities)):
            if remaining_capacities[i] >= item.weight:
                total_value += item.value
                remaining_capacities[i] -= item.weight
                break
    
    return total_value

// Constrained Knapsack
def constrained_knapsack(items, capacity, max_items):
    # Sort items by value-to-weight ratio
    items.sort(key=lambda x: x.ratio, reverse=True)
    
    total_value = 0
    remaining_capacity = capacity
    items_taken = 0
    
    for item in items:
        if items_taken >= max_items:
            break
        if remaining_capacity >= item.weight:
            total_value += item.value
            remaining_capacity -= item.weight
            items_taken += 1
        else:
            fraction = remaining_capacity / item.weight
            total_value += item.value * fraction
            break
    
    return total_value`} />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort:</span> Items by
        value-to-weight ratio
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Select:</span> Items in
        order of ratio
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Take:</span> Whole items or
        fractions
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Standard Fractional Knapsack
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input:
Items: [(60, 10), (100, 20), (120, 30)]
Capacity: 50

Sorted Ratios:
Item 1: 6.0 (60/10)
Item 2: 5.0 (100/20)
Item 3: 4.0 (120/30)

Solution:
Take all of Item 1 (60)
Take all of Item 2 (100)
Take 2/3 of Item 3 (80)

Total Value: 240`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Multiple Knapsacks
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input:
Items: [(60, 10), (100, 20), (120, 30)]
Capacities: [20, 30]

Sorted Ratios:
Item 1: 6.0 (60/10)
Item 2: 5.0 (100/20)
Item 3: 4.0 (120/30)

Solution:
Knapsack 1: Item 1 (60)
Knapsack 2: Item 2 (100)

Total Value: 160`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Constrained Knapsack
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input:
Items: [(60, 10), (100, 20), (120, 30)]
Capacity: 50
Max Items: 2

Sorted Ratios:
Item 1: 6.0 (60/10)
Item 2: 5.0 (100/20)
Item 3: 4.0 (120/30)

Solution:
Take Item 1 (60)
Take Item 2 (100)

Total Value: 160`}
      </pre>
    </div>
  </div>
);
