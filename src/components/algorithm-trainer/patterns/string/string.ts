import { AlgorithmPattern } from "../../types";

export const stringPattern: AlgorithmPattern = {
  title: "String",
  description:
    "A collection of algorithms for solving problems involving strings, which are sequences of characters.",
  timeComplexity:
    "Varies by algorithm, typically O(n) for simple string operations where n is the length of the string",
  spaceComplexity:
    "Varies by algorithm, typically O(1) to O(n) for string manipulation algorithms",
  pseudocode: `1. Identify the string problem type:\n   a. String matching (finding a substring)\n   b. String manipulation (reversing, concatenating, etc.)\n   c. String parsing (tokenizing, splitting, etc.)\n   d. String transformation (case conversion, encoding, etc.)\n2. Choose the appropriate string algorithm based on the problem\n3. Implement the chosen algorithm\n4. Analyze the time and space complexity of the algorithm`,
  example: `String: "Hello, World!"\n\n1. String Length:\n   - Length: 13 characters\n\n2. String Reversal:\n   - Original: "Hello, World!"\n   - Reversed: "!dlroW ,olleH"\n\n3. String Concatenation:\n   - String 1: "Hello"\n   - String 2: "World"\n   - Concatenated: "HelloWorld"\n\n4. String Splitting:\n   - Original: "Hello, World!"\n   - Split by comma: ["Hello", " World!"]\n\n5. String Case Conversion:\n   - Original: "Hello, World!"\n   - Uppercase: "HELLO, WORLD!"\n   - Lowercase: "hello, world!"`,
  implementation: `# String length\ndef string_length(s):\n    return len(s)\n\n# String reversal\ndef reverse_string(s):\n    return s[::-1]\n\n# String concatenation\ndef concatenate_strings(s1, s2):\n    return s1 + s2\n\n# String splitting\ndef split_string(s, delimiter):\n    return s.split(delimiter)\n\n# String case conversion\ndef to_uppercase(s):\n    return s.upper()\n\ndef to_lowercase(s):\n    return s.lower()\n\n# Example usage\ns = "Hello, World!"\n\nprint("Original string:", s)\nprint("Length:", string_length(s))\nprint("Reversed:", reverse_string(s))\nprint("Concatenated:", concatenate_strings("Hello", "World"))\nprint("Split by comma:", split_string(s, ","))\nprint("Uppercase:", to_uppercase(s))\nprint("Lowercase:", to_lowercase(s))\n`,
  category: "String",
};
