import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const stringOperationsPattern: AlgorithmPattern = {
  title: "String Operations",
  category: "String",
  description:
    "Common string manipulation operations including concatenation, substring, and character manipulation.",
  timeComplexity: "O(n) for most operations",
  spaceComplexity: "O(n) for operations that create new strings",
  pseudocode: `
Common String Operations:
1. Concatenation: Combine two strings
2. Substring: Extract a portion of a string
3. Character Access: Access individual characters
4. Length: Get string length
5. Comparison: Compare strings
6. Search: Find substring position
7. Replace: Replace substring
8. Split: Split string into array
9. Join: Join array into string
10. Trim: Remove whitespace
11. Case Conversion: Convert case
`,
  example: `Input: "Hello World"

1. Concatenation: "Hello" + " " + "World" = "Hello World"
2. Substring: "Hello World".substring(0, 5) = "Hello"
3. Character Access: "Hello World"[0] = "H"
4. Length: "Hello World".length = 11
5. Comparison: "Hello" === "World" = false
6. Search: "Hello World".indexOf("World") = 6
7. Replace: "Hello World".replace("World", "Universe") = "Hello Universe"
8. Split: "Hello World".split(" ") = ["Hello", "World"]
9. Join: ["Hello", "World"].join("-") = "Hello-World"
10. Trim: "  Hello  ".trim() = "Hello"
11. Case: "Hello World".toUpperCase() = "HELLO WORLD"`,
  implementation: `# Common string operations
def string_operations():
    # Concatenation
    str1 = "Hello"
    str2 = "World"
    concatenated = str1 + " " + str2  # "Hello World"
    
    # Substring (slicing)
    str = "Hello World"
    substring = str[0:5]  # "Hello"
    
    # Character access
    char = str[0]  # "H"
    
    # String length
    length = len(str)  # 11
    
    # String comparison
    is_equal = str1 == str2  # False
    
    # String search
    index = str.find("World")  # 6
    
    # String replace
    replaced = str.replace("World", "Universe")  # "Hello Universe"
    
    # String split
    parts = str.split(" ")  # ["Hello", "World"]
    
    # String join
    joined = "-".join(parts)  # "Hello-World"
    
    # String strip (trim)
    trimmed = "  Hello  ".strip()  # "Hello"
    
    # String case conversion
    upper = str.upper()  # "HELLO WORLD"
    lower = str.lower()  # "hello world"`,
  keySteps: [
    "Understand basic string operations",
    "Learn string manipulation methods",
    "Practice common string operations",
    "Apply string operations in algorithms",
  ],
};
