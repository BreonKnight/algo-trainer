import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";

const PATTERN_KEYS = [
  "Dynamic Programming",
  "Greedy",
  "Binary Search on Answer",
  "Bit Manipulation",
  "Sliding Window",
  "DFS (Depth-First Search)",
  "BFS (Breadth-First Search)",
  "Linked List (Full CRUD Functions)",
] as const;

type PatternKey = (typeof PATTERN_KEYS)[number];

const patterns = new Map<PatternKey, string>([
  ["Dynamic Programming", `# Top-down DP with memoization`],
  ["Greedy", `# Greedy algorithm template`],
  ["Binary Search on Answer", `# Binary search on answer space`],
  ["Bit Manipulation", `# Bit manipulation techniques`],
  ["Sliding Window", `# Sliding window pattern`],
  ["DFS (Depth-First Search)", `# DFS implementation`],
  ["BFS (Breadth-First Search)", `# BFS implementation`],
  ["Linked List (Full CRUD Functions)", `# Linked list operations`],
]);

export function AlgorithmTrainer() {
  const [currentPattern, setCurrentPattern] = useState<PatternKey | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userCode, setUserCode] = useState("");

  const nextPattern = () => {
    const randomIndex = Math.floor(Math.random() * PATTERN_KEYS.length);
    setCurrentPattern(PATTERN_KEYS[randomIndex]);
    setShowAnswer(false);
    setUserCode("");
  };

  return (
    <div className="container mx-auto p-4">
      <Button onClick={nextPattern} className="mb-4">
        {currentPattern ? "Next Pattern" : "Start Training"}
      </Button>

      {currentPattern && (
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-2">{currentPattern}</h2>
          <Textarea
            className="h-60 font-mono"
            placeholder="Write your code here..."
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
          />
          <div className="flex justify-between mt-4">
            <Button onClick={() => setShowAnswer(!showAnswer)}>
              {showAnswer ? "Hide Answer" : "Show Answer"}
            </Button>
            <Button onClick={nextPattern}>Next Pattern</Button>
          </div>
          {showAnswer && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Answer:</h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{patterns.get(currentPattern)}</code>
              </pre>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}

export default AlgorithmTrainer;
