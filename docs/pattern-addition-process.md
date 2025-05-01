# Pattern Addition Process

This document outlines the step-by-step process for adding a new algorithm pattern to the Monster Hunter-themed algorithm trainer.

## Overview

When adding a new pattern, we need to ensure consistency across several components:

1. Pattern Definition
2. Pseudocode Implementation
3. Pattern Mapping
4. Monster Hunter Guide
5. Monster Hunter Implementation
6. Test Data

## 1. Pattern Definition

First, ensure the pattern is defined in the appropriate category in `src/lib/pseudocode/utils/pattern-mapping.ts`:

```typescript
export const patternNameMapping: Record<string, string> = {
  // ... existing patterns ...
  "New Pattern": "New Pattern",
};
```

## 2. Pseudocode Implementation

Create or update the pseudocode implementation in `src/lib/pseudocode/patterns/`:

```typescript
// src/lib/pseudocode/patterns/new-pattern.tsx
export const NewPattern = () => {
  return <div className="pseudocode">{/* Pseudocode implementation */}</div>;
};
```

## 3. Pattern Mapping

Ensure the pattern is properly mapped in `src/lib/pseudocode/index.tsx`:

```typescript
import { NewPattern } from "./patterns/new-pattern";

export const pseudocodePatterns = {
  // ... existing patterns ...
  "New Pattern": NewPattern,
};
```

## 4. Monster Hunter Guide

Add the pattern to the appropriate Monster Hunter guide file:

```typescript
// src/components/algorithm-trainer/monsterHunterPatternsExtendedX.ts
export const monsterHunterPatternsExtendedX = new Map<PatternKey, string>([
  [
    "New Pattern" as PatternKey,
    `def monster_hunter_new_pattern(input):
    """
    Time: O(...)
    Space: O(...)
    
    Monster Hunter Context:
    - Like [Monster Hunter analogy]
    - [Additional context]
    - [More details]
    
    Example:
    [Example input and output]
    
    Process:
    1. [Step 1]
    2. [Step 2]
    3. [Step 3]
    """
    # Implementation
    `,
  ],
]);
```

## 5. Monster Hunter Implementation

Create a Monster Hunter-themed implementation that:

- Uses Monster Hunter terminology
- Provides clear time and space complexity
- Includes a detailed example
- Explains the process step by step
- Maintains consistent formatting

Example structure:

```python
def monster_hunter_new_pattern(input):
    """
    Time: O(...)
    Space: O(...)

    Monster Hunter Context:
    - Like [Monster Hunter analogy]
    - [Additional context]
    - [More details]

    Example:
    [Example input and output]

    Process:
    1. [Step 1]
    2. [Step 2]
    3. [Step 3]
    """
    # Implementation
```

## 6. Test Data

Add test cases to `src/components/algorithm-trainer/monsterHunterTestData.ts`:

```typescript
[
  "New Pattern" as PatternKey,
  `# Monster Hunter New Pattern Challenge
# [Challenge description]

# Test Case 1: [Test case name]
Input: [input data]
Expected Output: [expected output]

# Monster Hunter Tip:
# [Monster Hunter themed tip]`,
],
```

## 7. Update Combined Patterns

Update `src/components/algorithm-trainer/monsterHunterPatternsCombined.ts`:

```typescript
// Import the new patterns file
import { monsterHunterPatternsExtendedX } from "./monsterHunterPatternsExtendedX";

// Add to combined patterns
const allPatterns = new Map<PatternKey, string>([
  // ... existing patterns ...
  ...monsterHunterPatternsExtendedX,
]);

// Add to appropriate category
export const monsterHunterPatternsByCategory = {
  // ... existing categories ...
  "Category Name": [
    // ... existing patterns ...
    "New Pattern",
  ],
};
```

## Best Practices

1. **Consistency**

   - Maintain consistent naming conventions
   - Use consistent formatting across all files
   - Keep Monster Hunter theme consistent

2. **Documentation**

   - Include time and space complexity
   - Provide clear examples
   - Explain the process step by step
   - Add Monster Hunter context

3. **Testing**

   - Include multiple test cases
   - Cover edge cases
   - Provide Monster Hunter-themed tips

4. **Organization**
   - Place patterns in appropriate categories
   - Keep related patterns together
   - Maintain clear file structure

## Example: Adding a New Pattern

Let's walk through adding a new pattern called "Binary Search on Answer":

1. **Pattern Definition**

   ```typescript
   // pattern-mapping.ts
   "Binary Search on Answer": "Binary Search on Answer",
   ```

2. **Pseudocode Implementation**

   ```typescript
   // patterns/binary-search-answer.tsx
   export const BinarySearchAnswerPattern = () => {
     return (
       <div className="pseudocode">
         {/* Binary search on answer implementation */}
       </div>
     );
   };
   ```

3. **Pattern Mapping**

   ```typescript
   // index.tsx
   import { BinarySearchAnswerPattern } from "./patterns/binary-search-answer";

   export const pseudocodePatterns = {
     "Binary Search on Answer": BinarySearchAnswerPattern,
   };
   ```

4. **Monster Hunter Implementation**

   ```python
   def monster_hunter_binary_search_answer(min_rarity, max_rarity, target_value):
       """
       Find the minimum rarity level needed to craft an item.
       Time: O(log n)
       Space: O(1)

       Monster Hunter Context:
       - Like finding the minimum rarity level needed to craft a weapon
       - Each check determines if current rarity is sufficient
       - Binary search helps find the optimal rarity level

       Example:
       min_rarity = 1  # Common materials
       max_rarity = 10  # Rare materials
       target_value = 7  # Required crafting value

       Process:
       1. Check middle rarity (5)
       2. If insufficient, search higher rarities
       3. If sufficient, try lower rarities
       """
       # Implementation
   ```

5. **Test Data**

   ```typescript
   [
     "Binary Search on Answer" as PatternKey,
     `# Monster Hunter Binary Search on Answer Challenge
     # You are trying to find the minimum rarity level needed to craft a weapon!

     # Test Case 1: Basic Search
     Input: min_rarity = 1, max_rarity = 10, target_value = 7
     Expected Output: 7

     # Monster Hunter Tip:
     # Like finding the minimum rarity level needed for a craft!`,
   ],
   ```

6. **Update Combined Patterns**
   ```typescript
   // Add to appropriate category
   export const monsterHunterPatternsByCategory = {
     Searching: [
       // ... existing patterns ...
       "Binary Search on Answer",
     ],
   };
   ```

## Verification Checklist

Before considering a pattern addition complete, verify:

- [ ] Pattern is defined in `pattern-mapping.ts`
- [ ] Pseudocode implementation exists and works
- [ ] Pattern is properly mapped in `pseudocodePatterns`
- [ ] Monster Hunter implementation is complete and themed
- [ ] Test cases are comprehensive and themed
- [ ] Pattern is included in combined patterns
- [ ] Pattern is in the correct category
- [ ] Documentation is complete and consistent
- [ ] Time and space complexity are documented
- [ ] Examples are clear and relevant
- [ ] Monster Hunter context is appropriate
