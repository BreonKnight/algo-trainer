import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const recursionPattern: AlgorithmPattern = {
  title: "Recursion",
  description:
    "A problem-solving approach where a function calls itself to solve a smaller instance of the same problem. Recursion is based on the principle of mathematical induction and is particularly useful for problems that can be broken down into similar subproblems.",
  timeComplexity:
    "Varies by algorithm, depends on the number of recursive calls and work done in each call",
  spaceComplexity: "O(n) for the recursion call stack, where n is the depth of recursion",
  pseudocode: `1. Define the base case(s) - the simplest instance(s) of the problem that can be solved directly\n2. Define the recursive case(s) - break down the problem into smaller subproblems\n3. Ensure that each recursive call moves closer to a base case to prevent infinite recursion\n\nExample structure:\nif base_case_condition:\n    return base_case_solution\nelse:\n    return recursive_function(smaller_problem)`,
  example: `Problem: Factorial Calculation\n\nGiven: n = 5\n\nRecursive calls:\nfactorial(5) = 5 * factorial(4)\nfactorial(4) = 4 * factorial(3)\nfactorial(3) = 3 * factorial(2)\nfactorial(2) = 2 * factorial(1)\nfactorial(1) = 1 * factorial(0)\nfactorial(0) = 1 (base case)\n\nResult: 5 * 4 * 3 * 2 * 1 * 1 = 120`,
  implementation: `def factorial(n):\n    # Base case: factorial of 0 or 1 is 1\n    if n <= 1:\n        return 1\n    \n    # Recursive case: n! = n * (n-1)!\n    return n * factorial(n - 1)\n\n# Example usage\nn = 5\nresult = factorial(n)\nprint(f"{n}! = {result}")`,
  category: "Recursion",
};
