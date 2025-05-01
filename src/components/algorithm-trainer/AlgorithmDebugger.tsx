import { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw,
  Bug,
} from "lucide-react";
import { PatternKey } from "./types";
import { CodeEditor } from "./CodeEditor";

interface AlgorithmDebuggerProps {
  algorithm: PatternKey;
  initialCode: string;
}

interface VariableValue {
  value:
    | string
    | number
    | boolean
    | null
    | undefined
    | (string | number | boolean | null | undefined)[];
  type: string;
}

interface DebugStep {
  line: number;
  variables: Record<string, VariableValue>;
  callStack: string[];
  description: string;
}

export function AlgorithmDebugger({
  algorithm,
  initialCode,
}: AlgorithmDebuggerProps) {
  const [code, setCode] = useState(initialCode);
  const [currentLine, setCurrentLine] = useState(-1);
  const [variables, setVariables] = useState<Record<string, VariableValue>>({});
  const [callStack, setCallStack] = useState<string[]>([]);
  const [isDebugging, setIsDebugging] = useState(false);
  const [debugSteps, setDebugSteps] = useState<DebugStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed] = useState(1);

  // Parse code and generate debug steps
  const generateDebugSteps = () => {
    // This would be a complex function that parses the code
    // and generates steps with variable states
    // For now, we'll use a simplified example based on the algorithm

    let steps: DebugStep[] = [];

    if (algorithm.includes("Sort")) {
      // Example debug steps for sorting algorithms
      const arr = [5, 2, 8, 1, 9, 3, 7, 4, 6];

      steps = [
        {
          line: 1,
          variables: {
            arr: { value: [...arr], type: "array" },
          },
          callStack: ["main"],
          description: "Initialize array",
        },
        {
          line: 3,
          variables: {
            arr: { value: [...arr], type: "array" },
            i: { value: 0, type: "number" },
          },
          callStack: ["main"],
          description: "Start outer loop",
        },
        {
          line: 5,
          variables: {
            arr: { value: [...arr], type: "array" },
            i: { value: 0, type: "number" },
            j: { value: 0, type: "number" },
          },
          callStack: ["main"],
          description: "Start inner loop",
        },
        {
          line: 7,
          variables: {
            arr: { value: [...arr], type: "array" },
            i: { value: 0, type: "number" },
            j: { value: 0, type: "number" },
          },
          callStack: ["main"],
          description: "Compare elements",
        },
      ];

      // Add a swap step
      const swappedArr = [...arr];
      [swappedArr[0], swappedArr[1]] = [swappedArr[1], swappedArr[0]];

      steps.push({
        line: 9,
        variables: {
          arr: { value: swappedArr, type: "array" },
          i: { value: 0, type: "number" },
          j: { value: 0, type: "number" },
        },
        callStack: ["main"],
        description: "Swap elements",
      });

      // Add more steps...
      steps.push({
        line: 11,
        variables: {
          arr: { value: swappedArr, type: "array" },
          i: { value: 0, type: "number" },
          j: { value: 1, type: "number" },
        },
        callStack: ["main"],
        description: "Continue inner loop",
      });

      // Add final sorted array
      const sortedArr = [...arr].sort((a, b) => a - b);
      steps.push({
        line: 15,
        variables: {
          arr: { value: sortedArr, type: "array" },
          i: { value: arr.length - 1, type: "number" },
          j: { value: arr.length - 1, type: "number" },
        },
        callStack: ["main"],
        description: "Array is now sorted",
      });
    } else if (algorithm.includes("Search")) {
      // Example debug steps for search algorithms
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const target = 7;

      steps = [
        {
          line: 1,
          variables: {
            arr: { value: [...arr], type: "array" },
            target: { value: target, type: "number" },
          },
          callStack: ["main"],
          description: "Initialize search parameters",
        },
        {
          line: 3,
          variables: {
            arr: { value: [...arr], type: "array" },
            target: { value: target, type: "number" },
            left: { value: 0, type: "number" },
            right: { value: arr.length - 1, type: "number" },
          },
          callStack: ["main"],
          description: "Set search boundaries",
        },
        {
          line: 5,
          variables: {
            arr: { value: [...arr], type: "array" },
            target: { value: target, type: "number" },
            left: { value: 0, type: "number" },
            right: { value: arr.length - 1, type: "number" },
            mid: { value: 4, type: "number" },
          },
          callStack: ["main"],
          description: "Calculate middle index",
        },
        {
          line: 7,
          variables: {
            arr: { value: [...arr], type: "array" },
            target: { value: target, type: "number" },
            left: { value: 5, type: "number" },
            right: { value: arr.length - 1, type: "number" },
            mid: { value: 4, type: "number" },
          },
          callStack: ["main"],
          description:
            "Target is greater than middle element, search right half",
        },
        {
          line: 5,
          variables: {
            arr: { value: [...arr], type: "array" },
            target: { value: target, type: "number" },
            left: { value: 5, type: "number" },
            right: { value: arr.length - 1, type: "number" },
            mid: { value: 7, type: "number" },
          },
          callStack: ["main"],
          description: "Calculate new middle index",
        },
        {
          line: 9,
          variables: {
            arr: { value: [...arr], type: "array" },
            target: { value: target, type: "number" },
            left: { value: 5, type: "number" },
            right: { value: arr.length - 1, type: "number" },
            mid: { value: 7, type: "number" },
          },
          callStack: ["main"],
          description: "Target found at index 7",
        },
      ];
    } else {
      // Generic debug steps for other algorithms
      steps = [
        {
          line: 1,
          variables: {
            input: { value: "example", type: "string" },
          },
          callStack: ["main"],
          description: "Initialize algorithm",
        },
        {
          line: 3,
          variables: {
            input: { value: "example", type: "string" },
            result: { value: "processing", type: "string" },
          },
          callStack: ["main"],
          description: "Process input",
        },
        {
          line: 5,
          variables: {
            input: { value: "example", type: "string" },
            result: { value: "final result", type: "string" },
          },
          callStack: ["main"],
          description: "Algorithm completed",
        },
      ];
    }

    setDebugSteps(steps);
    setCurrentStep(0);
  };

  // Start debugging
  const startDebugging = () => {
    generateDebugSteps();
    setIsDebugging(true);
    setCurrentStep(0);
    if (debugSteps.length > 0) {
      setCurrentLine(debugSteps[0].line);
      setVariables(debugSteps[0].variables);
      setCallStack(debugSteps[0].callStack);
    }
  };

  // Step forward
  const stepForward = () => {
    if (currentStep < debugSteps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setCurrentLine(debugSteps[nextStep].line);
      setVariables(debugSteps[nextStep].variables);
      setCallStack(debugSteps[nextStep].callStack);
    }
  };

  // Step backward
  const stepBackward = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      setCurrentLine(debugSteps[prevStep].line);
      setVariables(debugSteps[prevStep].variables);
      setCallStack(debugSteps[prevStep].callStack);
    }
  };

  // Reset debugging
  const resetDebugging = () => {
    setIsDebugging(false);
    setCurrentStep(0);
    setCurrentLine(-1);
    setVariables({});
    setCallStack([]);
  };

  // Animation loop for auto-stepping
  useEffect(() => {
    if (isPlaying && currentStep < debugSteps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1000 / speed);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentStep, debugSteps.length, speed]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Code</h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={startDebugging}
              disabled={isDebugging}
            >
              <Bug className="h-4 w-4 mr-1" />
              Debug
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={resetDebugging}
              disabled={!isDebugging}
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
          </div>
        </div>

        <div className="relative">
          <CodeEditor
            userCode={code}
            setUserCode={setCode}
            errorLine={isDebugging ? currentLine : undefined}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Debug Info</h3>
          {isDebugging && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={stepBackward}
                disabled={currentStep === 0}
              >
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={stepForward}
                disabled={currentStep === debugSteps.length - 1}
              >
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <Card className="p-4">
          <h4 className="text-sm font-medium mb-2">Variables</h4>
          <div className="space-y-1">
            {Object.entries(variables).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-sm font-mono">{key}:</span>
                <span className="text-sm font-mono">
                  {typeof value.value === "object"
                    ? JSON.stringify(value.value)
                    : String(value.value)}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <h4 className="text-sm font-medium mb-2">Call Stack</h4>
          <div className="space-y-1">
            {callStack.map((frame, index) => (
              <div key={index} className="text-sm font-mono">
                {frame}
              </div>
            ))}
          </div>
        </Card>

        {isDebugging && debugSteps.length > 0 && (
          <Card className="p-4">
            <h4 className="text-sm font-medium mb-2">Current Step</h4>
            <div className="text-sm">
              <div className="flex justify-between mb-1">
                <span>Step:</span>
                <span>
                  {currentStep + 1} / {debugSteps.length}
                </span>
              </div>
              <div className="text-muted-foreground">
                {debugSteps[currentStep].description}
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
