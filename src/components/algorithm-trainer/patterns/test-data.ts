import { PatternKey } from "../types";

export const testDataPatternPatternPatternPattern = {
  title: "Test Data",
  description: "Generate and manage test cases for algorithm verification",
  timeComplexity: "O(n) for generation, O(1) for access",
  spaceComplexity: "O(n) for storage",
  pseudocode: `
    # Test Data Generation
    function generate_test_cases(algorithm_type, num_cases):
        cases = []
        for i in range(num_cases):
            case = generate_case(algorithm_type)
            cases.append(case)
        return cases

    # Test Case Verification
    function verify_test_case(algorithm, test_case):
        expected = test_case.expected
        actual = algorithm(test_case.input)
        return expected == actual
  `,
  example: `
    # Example Test Cases for Binary Search
    test_cases = [
        {
            "input": {
                "array": [1, 3, 5, 7, 9],
                "target": 5
            },
            "expected": 2
        },
        {
            "input": {
                "array": [1, 3, 5, 7, 9],
                "target": 4
            },
            "expected": -1
        }
    ]
  `,
  implementation: `
    class TestDataGenerator:
        def __init__(self):
            self.test_cases = {}
        
        def generate_binary_search_cases(self, num_cases=5):
            cases = []
            for _ in range(num_cases):
                size = random.randint(5, 20)
                array = sorted([random.randint(1, 100) for _ in range(size)])
                target = random.choice(array) if random.random() > 0.3 else random.randint(1, 100)
                expected = array.index(target) if target in array else -1
                cases.append({
                    "input": {"array": array, "target": target},
                    "expected": expected
                })
            return cases

        def generate_fibonacci_search_cases(self, num_cases=5):
            cases = []
            # Basic test case with known values
            cases.append({
                "input": {
                    "array": [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100],
                    "target": 85
                },
                "expected": 8
            })
            
            # Generate random test cases
            for _ in range(num_cases - 1):
                size = random.randint(5, 20)
                array = sorted([random.randint(1, 100) for _ in range(size)])
                target = random.choice(array) if random.random() > 0.3 else random.randint(1, 100)
                expected = array.index(target) if target in array else -1
                cases.append({
                    "input": {"array": array, "target": target},
                    "expected": expected
                })
            return cases
        
        def generate_sorting_cases(self, num_cases=5):
            cases = []
            for _ in range(num_cases):
                size = random.randint(5, 20)
                array = [random.randint(1, 100) for _ in range(size)]
                cases.append({
                    "input": {"array": array},
                    "expected": sorted(array)
                })
            return cases
        
        def generate_dp_cases(self, num_cases=5):
            cases = []
            for _ in range(num_cases):
                size = random.randint(5, 10)
                weights = [random.randint(1, 10) for _ in range(size)]
                values = [random.randint(1, 20) for _ in range(size)]
                capacity = random.randint(10, 30)
                cases.append({
                    "input": {
                        "weights": weights,
                        "values": values,
                        "capacity": capacity
                    },
                    "expected": self._calculate_expected_dp(weights, values, capacity)
                })
            return cases
        
        def _calculate_expected_dp(self, weights, values, capacity):
            n = len(weights)
            dp = [[0] * (capacity + 1) for _ in range(n + 1)]
            
            for i in range(1, n + 1):
                for w in range(capacity + 1):
                    if weights[i-1] <= w:
                        dp[i][w] = max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w])
                    else:
                        dp[i][w] = dp[i-1][w]
            
            return dp[n][capacity]
        
        def generate_graph_cases(self, num_cases=5):
            cases = []
            for _ in range(num_cases):
                num_nodes = random.randint(4, 8)
                edges = []
                for i in range(num_nodes):
                    for j in range(i+1, num_nodes):
                        if random.random() > 0.5:
                            weight = random.randint(1, 10)
                            edges.append((i, j, weight))
                cases.append({
                    "input": {
                        "num_nodes": num_nodes,
                        "edges": edges
                    },
                    "expected": self._calculate_expected_mst(num_nodes, edges)
                })
            return cases
        
        def _calculate_expected_mst(self, num_nodes, edges):
            parent = [i for i in range(num_nodes)]
            
            def find(u):
                while parent[u] != u:
                    parent[u] = parent[parent[u]]
                    u = parent[u]
                return u
            
            def union(u, v):
                u_root = find(u)
                v_root = find(v)
                if u_root != v_root:
                    parent[v_root] = u_root
            
            edges.sort(key=lambda x: x[2])
            mst_weight = 0
            
            for u, v, weight in edges:
                if find(u) != find(v):
                    union(u, v)
                    mst_weight += weight
            
            return mst_weight
        
        def verify_algorithm(self, algorithm, test_cases):
            results = []
            for case in test_cases:
                actual = algorithm(**case["input"])
                expected = case["expected"]
                results.append({
                    "input": case["input"],
                    "expected": expected,
                    "actual": actual,
                    "passed": actual == expected
                })
            return results
  `,
  category: "Testing",
  keySteps: [
    "Generate test cases for different algorithm types",
    "Include edge cases and normal cases",
    "Calculate expected results",
    "Verify algorithm implementations",
    "Report test results",
  ],
};

export const testDataPatternsPatternPatternPattern = new Map<PatternKey, string>([
  [
    "Test Data" as PatternKey,
    `class TestDataGenerator:
    """
    Generate and manage test cases for algorithm verification.
    Time: O(n) for generation, O(1) for access
    Space: O(n) for storage
    
    Monster Hunter Context:
    - Like preparing different hunting scenarios
    - Each test case represents a different situation
    - Verify hunting strategies work correctly
    
    Example:
    test_cases = [
        {
            "input": {
                "territory": "Ancient Forest",
                "monster": "Rathalos",
                "equipment": ["Fireproof Mantle", "Flash Pods"]
            },
            "expected": "Success"
        }
    ]
    """
    def __init__(self):
        self.test_cases = {}
    
    def generate_binary_search_cases(self, num_cases=5):
        cases = []
        for _ in range(num_cases):
            size = random.randint(5, 20)
            array = sorted([random.randint(1, 100) for _ in range(size)])
            target = random.choice(array) if random.random() > 0.3 else random.randint(1, 100)
            expected = array.index(target) if target in array else -1
            cases.append({
                "input": {"array": array, "target": target},
                "expected": expected
            })
        return cases

    def generate_fibonacci_search_cases(self, num_cases=5):
        cases = []
        # Basic test case with known values
        cases.append({
            "input": {
                "array": [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100],
                "target": 85
            },
            "expected": 8
        })
        
        # Generate random test cases
        for _ in range(num_cases - 1):
            size = random.randint(5, 20)
            array = sorted([random.randint(1, 100) for _ in range(size)])
            target = random.choice(array) if random.random() > 0.3 else random.randint(1, 100)
            expected = array.index(target) if target in array else -1
            cases.append({
                "input": {"array": array, "target": target},
                "expected": expected
            })
        return cases`,
  ],
]);
