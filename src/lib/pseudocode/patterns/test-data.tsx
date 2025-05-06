import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const TestDataPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Test Data
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Verify algorithm correctness
    </div>

    <PseudocodeDisplay
      code={`// Test Data Structure
TEST-CASE:
    input: any
    expected: any
    description: string

// Test Suite
TEST-SUITE:
    test_cases: array of TEST-CASE
    edge_cases: array of TEST-CASE
    boundary_cases: array of TEST-CASE

// Example Test Suite
test_suite = {
    test_cases: [
        {
            input: [1, 2, 3, 4, 5],
            expected: 15,
            description: "Sum of array elements"
        },
        {
            input: [-1, -2, -3],
            expected: -6,
            description: "Sum of negative numbers"
        }
    ],
    edge_cases: [
        {
            input: [],
            expected: 0,
            description: "Empty array"
        },
        {
            input: [1],
            expected: 1,
            description: "Single element"
        }
    ],
    boundary_cases: [
        {
            input: [Number.MAX_SAFE_INTEGER, 1],
            expected: Number.MAX_SAFE_INTEGER + 1,
            description: "Integer overflow"
        }
    ]
}`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Define: Input and expected output</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Include: Edge cases and boundary conditions</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Verify: Algorithm correctness</span>
      </div>
    </div>
  </div>
);
