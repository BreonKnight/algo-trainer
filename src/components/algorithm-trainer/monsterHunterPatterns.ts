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
]);
