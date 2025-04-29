import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Play, Pause, SkipBack, SkipForward, RotateCcw } from "lucide-react";
import { Card } from "../ui/card";
import { PatternKey } from "./types";

interface AlgorithmVisualizerProps {
  algorithm: PatternKey;
  data?: number[];
  visualizationType: "sorting" | "graph" | "tree" | "array";
}

// Helper function to generate visualization steps based on algorithm
const generateVisualizationSteps = (
  algorithm: string,
  data: number[]
): any[] => {
  // This is a simplified implementation - in a real app, this would be much more complex
  // and would generate actual steps based on the algorithm's execution

  if (algorithm.includes("Sort")) {
    // For sorting algorithms, generate steps showing the sorting process
    const steps = [];
    const arr = [...data];

    if (algorithm === "Bubble Sort") {
      // Simple bubble sort visualization
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          steps.push({
            array: [...arr],
            highlightedIndices: [j, j + 1],
            description: `Comparing elements at positions ${j} and ${j + 1}`,
          });

          if (arr[j] > arr[j + 1]) {
            // Swap elements
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            steps.push({
              array: [...arr],
              highlightedIndices: [j, j + 1],
              description: `Swapped elements at positions ${j} and ${j + 1}`,
            });
          }
        }
      }
    } else if (algorithm === "Quick Sort") {
      // Simplified quick sort visualization
      const quickSort = (arr: number[], low: number, high: number) => {
        if (low < high) {
          const pivotIndex = partition(arr, low, high);
          quickSort(arr, low, pivotIndex - 1);
          quickSort(arr, pivotIndex + 1, high);
        }
      };

      const partition = (arr: number[], low: number, high: number) => {
        const pivot = arr[high];
        let i = low - 1;

        steps.push({
          array: [...arr],
          highlightedIndices: [high],
          description: `Selected pivot: ${pivot}`,
        });

        for (let j = low; j < high; j++) {
          steps.push({
            array: [...arr],
            highlightedIndices: [j, high],
            description: `Comparing ${arr[j]} with pivot ${pivot}`,
          });

          if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            steps.push({
              array: [...arr],
              highlightedIndices: [i, j],
              description: `Swapped elements at positions ${i} and ${j}`,
            });
          }
        }

        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        steps.push({
          array: [...arr],
          highlightedIndices: [i + 1, high],
          description: `Placed pivot in its final position`,
        });

        return i + 1;
      };

      quickSort(arr, 0, arr.length - 1);
    } else {
      // For other sorting algorithms, just show the initial and final state
      steps.push({
        array: [...data],
        highlightedIndices: [],
        description: "Initial array",
      });

      // Sort the array (using built-in sort for simplicity)
      arr.sort((a, b) => a - b);

      steps.push({
        array: [...arr],
        highlightedIndices: [],
        description: "Sorted array",
      });
    }

    return steps;
  } else {
    // For non-sorting algorithms, just show the initial and final state
    return [
      {
        array: [...data],
        highlightedIndices: [],
        description: "Initial state",
      },
      {
        array: [...data],
        highlightedIndices: [],
        description: "Final state",
      },
    ];
  }
};

// Helper function to render a step on the canvas
const renderStep = (
  ctx: CanvasRenderingContext2D,
  step: any,
  visualizationType: string
) => {
  const { width, height } = ctx.canvas;
  ctx.clearRect(0, 0, width, height);

  if (visualizationType === "sorting" || visualizationType === "array") {
    const { array, highlightedIndices } = step;
    const barWidth = width / array.length;
    const maxValue = Math.max(...array);
    const scale = height / maxValue;

    // Draw bars
    array.forEach((value: number, index: number) => {
      const barHeight = value * scale;
      const x = index * barWidth;
      const y = height - barHeight;

      // Set color based on whether the index is highlighted
      if (highlightedIndices.includes(index)) {
        ctx.fillStyle = "#f59e0b"; // Highlight color
      } else {
        ctx.fillStyle = "#3b82f6"; // Default color
      }

      ctx.fillRect(x, y, barWidth - 1, barHeight);

      // Draw value on top of bar if there's enough space
      if (barHeight > 20) {
        ctx.fillStyle = "#ffffff";
        ctx.font = "12px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(value.toString(), x + barWidth / 2, y + 15);
      }
    });

    // Draw description
    ctx.fillStyle = "#000000";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(step.description, width / 2, 20);
  } else {
    // Placeholder for other visualization types
    ctx.fillStyle = "#000000";
    ctx.font = "16px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(
      `${visualizationType} visualization coming soon`,
      width / 2,
      height / 2
    );
  }
};

export function AlgorithmVisualizer({
  algorithm,
  data = [5, 2, 8, 1, 9, 3, 7, 4, 6],
  visualizationType,
}: AlgorithmVisualizerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [steps, setSteps] = useState<any[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate visualization steps based on algorithm
  useEffect(() => {
    const newSteps = generateVisualizationSteps(algorithm, data);
    setSteps(newSteps);
    setCurrentStep(0);
  }, [algorithm, data]);

  // Animation loop
  useEffect(() => {
    if (!isPlaying || currentStep >= steps.length - 1) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [isPlaying, currentStep, steps.length, speed]);

  // Render current step
  useEffect(() => {
    if (!canvasRef.current || steps.length === 0) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    renderStep(ctx, steps[currentStep], visualizationType);
  }, [currentStep, steps, visualizationType]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx && steps.length > 0) {
          renderStep(ctx, steps[currentStep], visualizationType);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentStep, steps, visualizationType]);

  return (
    <Card className="p-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{algorithm} Visualization</h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentStep(0)}
              disabled={currentStep === 0}
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <canvas
            ref={canvasRef}
            width={600}
            height={400}
            className="border rounded-lg bg-white"
          />
        </div>

        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentStep(0)}
            disabled={currentStep === 0}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
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
            onClick={() =>
              setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))
            }
            disabled={currentStep === steps.length - 1}
          >
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm">Speed:</span>
          <Slider
            value={[speed]}
            min={0.25}
            max={4}
            step={0.25}
            onValueChange={(value: number[]) => setSpeed(value[0])}
            className="w-32"
          />
          <span className="text-sm">{speed}x</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm">Step:</span>
          <Slider
            value={[currentStep]}
            min={0}
            max={Math.max(0, steps.length - 1)}
            step={1}
            onValueChange={(value: number[]) => setCurrentStep(value[0])}
            className="flex-1"
          />
          <span className="text-sm">
            {currentStep + 1} / {steps.length}
          </span>
        </div>

        {steps.length > 0 && (
          <div className="text-sm text-center mt-2">
            {steps[currentStep].description}
          </div>
        )}
      </div>
    </Card>
  );
}
