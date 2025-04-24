import { PatternKey } from "./types";

export const monsterHunterPatterns = new Map<PatternKey, string>([
  [
    "Quick Sort" as PatternKey,
    `def monster_hunter_quick_sort(materials):
    """
    Sort monster materials using the Quick Sort strategy.
    Time Complexity: O(n log n) average case, O(n²) worst case
    Space Complexity: O(log n) due to recursion stack
    
    Monster Hunter Context:
    - Think of this as organizing your material box efficiently
    - The pivot is like a reference material you use to organize others
    - Materials are arranged so weaker ones are on the left, stronger on the right
    
    Example:
    materials = ["Rathalos Scale", "Kirin Horn", "Nergigante Gem", "Diablos Horn"]
    
    Step 1: Choose "Diablos Horn" as pivot
    ["Rathalos Scale", "Kirin Horn", "Nergigante Gem", "Diablos Horn"]
    
    Step 2: Partition around pivot
    - "Rathalos Scale" < "Diablos Horn": stays left
    - "Kirin Horn" < "Diablos Horn": stays left
    - "Nergigante Gem" > "Diablos Horn": moves right
    
    Result after partition:
    ["Rathalos Scale", "Kirin Horn", "Diablos Horn", "Nergigante Gem"]
    
    Step 3: Recursively sort subarrays
    Left: ["Rathalos Scale", "Kirin Horn"]
    Right: ["Nergigante Gem"]
    """
    if len(materials) <= 1:
        return materials
    
    pivot = materials[-1]  # Choose last material as pivot
    left = []  # Materials weaker than pivot
    right = []  # Materials stronger than pivot
    
    # Organize materials around the pivot
    for material in materials[:-1]:
        if material <= pivot:
            left.append(material)
        else:
            right.append(material)
    
    # Recursively sort and combine
    return monster_hunter_quick_sort(left) + [pivot] + monster_hunter_quick_sort(right)`,
  ],
  [
    "Merge Sort",
    `def monster_hunter_merge_sort(materials):
    """
    Sort monster materials using the Merge Sort strategy.
    Time Complexity: O(n log n)
    Space Complexity: O(n)
    
    Monster Hunter Context:
    - Like combining and organizing different material sets
    - Each split is like separating materials into smaller boxes
    - Merging is like combining organized sets while maintaining order
    
    Example:
    materials = ["Rathalos Ruby", "Kirin Horn", "Teostra Gem", "Kushala Gem"]
    
    Step 1: Split into smaller sets
    Left: ["Rathalos Ruby", "Kirin Horn"]
    Right: ["Teostra Gem", "Kushala Gem"]
    
    Step 2: Further split
    ["Rathalos Ruby"] | ["Kirin Horn"] | ["Teostra Gem"] | ["Kushala Gem"]
    
    Step 3: Merge in order
    Merge 1: ["Kirin Horn", "Rathalos Ruby"] | ["Kushala Gem", "Teostra Gem"]
    Final: ["Kirin Horn", "Kushala Gem", "Rathalos Ruby", "Teostra Gem"]
    """
    if len(materials) <= 1:
        return materials
    
    # Split materials into two boxes
    mid = len(materials) // 2
    left_box = monster_hunter_merge_sort(materials[:mid])
    right_box = monster_hunter_merge_sort(materials[mid:])
    
    # Merge the organized boxes
    merged = []
    left_idx = right_idx = 0
    
    while left_idx < len(left_box) and right_idx < len(right_box):
        if left_box[left_idx] <= right_box[right_idx]:
            merged.append(left_box[left_idx])
            left_idx += 1
        else:
            merged.append(right_box[right_idx])
            right_idx += 1
    
    # Add remaining materials
    merged.extend(left_box[left_idx:])
    merged.extend(right_box[right_idx:])
    return merged`,
  ],
  [
    "Stack Sort",
    `def monster_hunter_stack_sort(materials):
    """
    Sort monster materials using the Stack Sort strategy.
    Time Complexity: O(n²)
    Space Complexity: O(n)
    
    Monster Hunter Context:
    - Like stacking materials in order of rarity
    - Each comparison is like checking which material is more valuable
    - The temporary stack is like a sorting box
    
    Example:
    materials = ["Rathalos Scale", "Rathalos Ruby", "Rathalos Wing", "Rathalos Plate"]
    
    Step 1: Start with empty stack
    Stack: []
    
    Step 2: Process "Rathalos Scale"
    Stack: ["Rathalos Scale"]
    
    Step 3: Process "Rathalos Ruby" (more valuable)
    Stack: ["Rathalos Ruby", "Rathalos Scale"]
    
    Step 4: Continue with remaining materials...
    """
    if not materials:
        return []
        
    temp_stack = []
    for material in materials:
        # While stack has materials and top is more valuable
        while temp_stack and temp_stack[-1] > material:
            materials.append(temp_stack.pop())
        temp_stack.append(material)
    
    # Return materials in sorted order
    return temp_stack`,
  ],
  [
    "Heap Sort",
    `def monster_hunter_heap_sort(materials):
    """
    Sort monster materials using the Heap Sort strategy.
    Time Complexity: O(n log n)
    Space Complexity: O(1)
    
    Monster Hunter Context:
    - Like organizing materials in a priority queue
    - The heap is like a material hierarchy tree
    - Each level represents materials of similar value
    
    Example:
    materials = ["Rathalos Scale", "Rathalos Ruby", "Rathalos Wing", "Rathalos Plate"]
    
    Step 1: Build max heap (most valuable at root)
           Rathalos Ruby
          /            \\
    Rathalos Plate    Rathalos Wing
         /
    Rathalos Scale
    
    Step 2: Extract max and rebuild heap
    Step 3: Continue until sorted
    """
    def heapify(arr, n, i):
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2
        
        if left < n and arr[left] > arr[largest]:
            largest = left
        if right < n and arr[right] > arr[largest]:
            largest = right
            
        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]
            heapify(arr, n, largest)
    
    # Build max heap
    n = len(materials)
    for i in range(n // 2 - 1, -1, -1):
        heapify(materials, n, i)
    
    # Extract elements from heap
    for i in range(n - 1, 0, -1):
        materials[0], materials[i] = materials[i], materials[0]
        heapify(materials, i, 0)
    
    return materials`,
  ],
  [
    "Bubble Sort",
    `def monster_hunter_bubble_sort(materials):
    """
    Sort monster materials using the Bubble Sort strategy.
    Time Complexity: O(n²)
    Space Complexity: O(1)
    
    Monster Hunter Context:
    - Like arranging materials by letting valuable ones "bubble up"
    - Each pass is like a wave moving through your material box
    - Swaps are like exchanging positions of adjacent materials
    
    Example:
    materials = ["Rathalos Scale", "Rathalos Ruby", "Rathalos Wing", "Rathalos Plate"]
    
    Pass 1: Compare adjacent materials
    ["Rathalos Ruby", "Rathalos Scale", "Rathalos Wing", "Rathalos Plate"]
    
    Continue until no more swaps needed
    """
    n = len(materials)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            # If current material is more valuable than next
            if materials[j] > materials[j + 1]:
                # Swap them
                materials[j], materials[j + 1] = materials[j + 1], materials[j]
                swapped = True
        # If no swapping occurred, array is sorted
        if not swapped:
            break
    
    return materials`,
  ],
  [
    "Selection Sort",
    `def monster_hunter_selection_sort(materials):
    """
    Sort monster materials using the Selection Sort strategy.
    Time Complexity: O(n²)
    Space Complexity: O(1)
    
    Monster Hunter Context:
    - Like selecting the most valuable material repeatedly
    - Each pass finds the next best material
    - Building sorted collection from best to worst
    
    Example:
    materials = ["Rathalos Scale", "Rathalos Ruby", "Rathalos Wing", "Rathalos Plate"]
    
    Pass 1: Find most valuable
    Selected: "Rathalos Ruby"
    Remaining: ["Rathalos Scale", "Rathalos Wing", "Rathalos Plate"]
    
    Continue until all materials are sorted
    """
    n = len(materials)
    for i in range(n):
        # Find the most valuable material in remaining unsorted part
        max_idx = i
        for j in range(i + 1, n):
            if materials[j] > materials[max_idx]:
                max_idx = j
        
        # Place it at the beginning of unsorted section
        materials[i], materials[max_idx] = materials[max_idx], materials[i]
    
    return materials`,
  ],
  [
    "Insertion Sort",
    `def monster_hunter_insertion_sort(materials):
    """
    Sort monster materials using the Insertion Sort strategy.
    Time Complexity: O(n²)
    Space Complexity: O(1)
    
    Monster Hunter Context:
    - Like organizing materials one at a time in your item box
    - Each new material is placed in its correct position
    - Similar to how you might sort new materials as you collect them
    
    Example:
    materials = ["Rathalos Scale", "Rathalos Ruby", "Rathalos Wing", "Rathalos Plate"]
    
    Step 1: Start with first material
    Sorted: ["Rathalos Scale"]
    
    Step 2: Insert "Rathalos Ruby"
    Sorted: ["Rathalos Ruby", "Rathalos Scale"]
    
    Continue until all materials are sorted
    """
    for i in range(1, len(materials)):
        key = materials[i]
        j = i - 1
        # Move elements that are more valuable than key
        # to one position ahead
        while j >= 0 and materials[j] > key:
            materials[j + 1] = materials[j]
            j -= 1
        materials[j + 1] = key
    
    return materials`,
  ],
]);
