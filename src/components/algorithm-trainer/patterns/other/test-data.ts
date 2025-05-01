import { AlgorithmPattern } from "../../types";

export const testDataPattern: AlgorithmPattern = {
  title: "Test Data",
  description:
    "A collection of test cases and data generation techniques for algorithm verification and performance testing.",
  timeComplexity: "Varies by test case",
  spaceComplexity: "Varies by test case",
  pseudocode: `1. Define test case structure
2. Generate edge cases
3. Generate random test cases
4. Generate performance test cases
5. Validate algorithm output`,
  example: `Test Cases for Sorting Algorithm:
1. Empty array: []
2. Single element: [1]
3. Two elements: [2, 1]
4. Already sorted: [1, 2, 3, 4, 5]
5. Reverse sorted: [5, 4, 3, 2, 1]
6. Random array: [3, 1, 4, 1, 5, 9, 2, 6]
7. Large array: [1000 random elements]
8. Duplicate elements: [1, 1, 1, 1, 1]
9. Negative numbers: [-5, -3, -1, -4, -2]
10. Mixed numbers: [-2, 0, 2, -1, 1]`,
  implementation: `import random

def generate_test_cases():
    test_cases = {
        'empty': [],
        'single': [1],
        'two_elements': [2, 1],
        'sorted': [1, 2, 3, 4, 5],
        'reverse_sorted': [5, 4, 3, 2, 1],
        'random': [3, 1, 4, 1, 5, 9, 2, 6],
        'large': [random.randint(1, 1000) for _ in range(1000)],
        'duplicates': [1] * 5,
        'negative': [-5, -3, -1, -4, -2],
        'mixed': [-2, 0, 2, -1, 1]
    }
    return test_cases

def validate_sorting_algorithm(algorithm):
    test_cases = generate_test_cases()
    for name, test_case in test_cases.items():
        original = test_case.copy()
        result = algorithm(test_case)
        assert sorted(original) == result, f"Test case {name} failed"
        print(f"Test case {name} passed")

def generate_performance_test(size):
    return [random.randint(1, size) for _ in range(size)]

def measure_performance(algorithm, sizes):
    import time
    results = {}
    for size in sizes:
        test_data = generate_performance_test(size)
        start_time = time.time()
        algorithm(test_data)
        end_time = time.time()
        results[size] = end_time - start_time
    return results`,
  category: "Other",
  keySteps: [
    "Define test case structure and requirements",
    "Generate edge cases and corner cases",
    "Create random test data generators",
    "Implement performance test cases",
    "Develop validation functions",
    "Document test case coverage",
  ],
};
