import { AlgorithmPattern } from "../../types";

export const testDataPattern: AlgorithmPattern = {
  title: "Test Data",
  description:
    "A comprehensive collection of test data generation techniques and test cases for algorithm verification and performance testing. Includes various data structures, edge cases, and performance benchmarks.",
  timeComplexity: "Varies by test case and data structure",
  spaceComplexity: "Varies by test case and data structure",
  pseudocode: `1. Define test case structure
2. Generate edge cases
3. Generate random test cases
4. Generate performance test cases
5. Validate algorithm output
6. Measure performance metrics
7. Document test coverage`,
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
import time
from typing import List, Dict, Any, Callable

class TestDataGenerator:
    def __init__(self):
        self.test_cases = {}
    
    def generate_sorting_cases(self) -> Dict[str, List[int]]:
        return {
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
    
    def generate_searching_cases(self) -> Dict[str, Any]:
        return {
            'basic': [
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 3, 5, 7, 9, 11, 13, 15],
                [2, 4, 6, 8, 10, 12, 14, 16]
            ],
            'large': [
                list(range(1, 1001)),
                list(range(1, 1001, 2)),
                list(range(2, 1001, 2))
            ],
            'edge': [
                [],
                [1],
                [1, 1, 1, 1, 1],
                [1, 2, 3, 4, 5, 5, 5, 6, 7, 8]
            ],
            'targets': {
                'exists': [5, 500, 1, 8],
                'not_exists': [0, 1001, -1, 10],
                'edge': [1, 1000, 5, 8]
            }
        }
    
    def generate_graph_cases(self) -> Dict[str, Any]:
        return {
            'basic': [
                {
                    'num_nodes': 4,
                    'edges': [(0, 1, 1), (1, 2, 2), (2, 3, 3), (0, 3, 4)]
                },
                {
                    'num_nodes': 5,
                    'edges': [(0, 1, 1), (1, 2, 2), (2, 3, 3), (3, 4, 4), (0, 4, 5)]
                }
            ],
            'large': [
                {
                    'num_nodes': 100,
                    'edges': [(i, j, random.randint(1, 100)) 
                             for i in range(100) 
                             for j in range(i+1, 100) 
                             if random.random() > 0.7]
                }
            ],
            'edge': [
                {'num_nodes': 1, 'edges': []},
                {'num_nodes': 2, 'edges': [(0, 1, 1)]},
                {'num_nodes': 3, 'edges': [(0, 1, 1), (1, 2, 1), (0, 2, 1)]}
            ]
        }
    
    def measure_performance(self, algorithm: Callable, test_cases: Dict[str, Any]) -> Dict[str, float]:
        results = {}
        for name, test_case in test_cases.items():
            start_time = time.time()
            algorithm(test_case)
            end_time = time.time()
            results[name] = end_time - start_time
        return results
    
    def validate_algorithm(self, algorithm: Callable, test_cases: Dict[str, Any], 
                         expected_results: Dict[str, Any]) -> Dict[str, bool]:
        results = {}
        for name, test_case in test_cases.items():
            actual = algorithm(test_case)
            expected = expected_results[name]
            results[name] = actual == expected
        return results`,
  category: "Testing",
  keySteps: [
    "Define test case structure and requirements",
    "Generate edge cases and corner cases",
    "Create random test data generators",
    "Implement performance test cases",
    "Develop validation functions",
    "Document test case coverage",
    "Measure and analyze performance metrics",
    "Generate comprehensive test reports",
  ],
};
