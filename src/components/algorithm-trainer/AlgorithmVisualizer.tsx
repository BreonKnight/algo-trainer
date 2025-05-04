import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Play, Pause, SkipBack, SkipForward, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PatternKey } from "./types";
import { useTheme } from "@/components/theme/theme-context";
import { cn } from "@/lib/utils";

interface AlgorithmVisualizerProps {
  algorithm: PatternKey;
  data?: number[];
  visualizationType: "sorting" | "graph" | "tree" | "array";
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  isRacing?: boolean;
  onComplete?: (metrics: PerformanceMetrics) => void;
}

interface VisualizationStep {
  array: number[];
  highlightedIndices: number[];
  description: string;
  metrics?: PerformanceMetrics;
}

interface PerformanceMetrics {
  comparisons: number;
  swaps: number;
  time: number;
}

// Helper function to generate visualization steps based on algorithm
const generateVisualizationSteps = (
  algorithm: string,
  data: number[]
): VisualizationStep[] => {
  const steps = [];
  const arr = [...data];
  let metrics: PerformanceMetrics = { comparisons: 0, swaps: 0, time: 0 };

  if (algorithm.includes("Sort")) {
    if (algorithm === "Bubble Sort") {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          metrics.comparisons++;
          steps.push({
            array: [...arr],
            highlightedIndices: [j, j + 1],
            description: `Comparing elements at positions ${j} and ${j + 1}`,
            metrics: { ...metrics },
          });

          if (arr[j] > arr[j + 1]) {
            metrics.swaps++;
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            steps.push({
              array: [...arr],
              highlightedIndices: [j, j + 1],
              description: `Swapped elements at positions ${j} and ${j + 1}`,
              metrics: { ...metrics },
            });
          }
        }
      }
    } else if (algorithm === "Quick Sort") {
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
          metrics: { ...metrics },
        });

        for (let j = low; j < high; j++) {
          metrics.comparisons++;
          steps.push({
            array: [...arr],
            highlightedIndices: [j, high],
            description: `Comparing ${arr[j]} with pivot ${pivot}`,
            metrics: { ...metrics },
          });

          if (arr[j] < pivot) {
            i++;
            metrics.swaps++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            steps.push({
              array: [...arr],
              highlightedIndices: [i, j],
              description: `Swapped elements at positions ${i} and ${j}`,
              metrics: { ...metrics },
            });
          }
        }

        metrics.swaps++;
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        steps.push({
          array: [...arr],
          highlightedIndices: [i + 1, high],
          description: `Placed pivot in its final position`,
          metrics: { ...metrics },
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
        metrics: { ...metrics },
      });

      // Sort the array (using built-in sort for simplicity)
      arr.sort((a, b) => a - b);

      steps.push({
        array: [...arr],
        highlightedIndices: [],
        description: "Sorted array",
        metrics: { ...metrics },
      });
    }
  } else {
    // For non-sorting algorithms, just show the initial and final state
    steps.push({
      array: [...data],
      highlightedIndices: [],
      description: "Initial state",
      metrics: { ...metrics },
    });

    steps.push({
      array: [...data],
      highlightedIndices: [],
      description: "Final state",
      metrics: { ...metrics },
    });
  }

  return steps;
};

// Helper function to render a step on the canvas
const renderStep = (
  ctx: CanvasRenderingContext2D,
  step: VisualizationStep,
  visualizationType: string,
  theme: string
) => {
  const { width, height } = ctx.canvas;
  ctx.clearRect(0, 0, width, height);

  // Set background color based on theme
  ctx.fillStyle = theme === "nord" ? "#2E3440" : "#f8fafc";
  ctx.fillRect(0, 0, width, height);

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

      // Set colors based on theme and highlight state
      if (highlightedIndices.includes(index)) {
        ctx.fillStyle = theme === "nord" ? "#A3BE8C" : "#3b82f6"; // Highlight color
      } else {
        ctx.fillStyle = theme === "nord" ? "#5E81AC" : "#94a3b8"; // Default color
      }

      ctx.fillRect(x, y, barWidth - 1, barHeight);

      // Draw value on top of bar if there's enough space
      if (barHeight > 20) {
        ctx.fillStyle = theme === "nord" ? "#ECEFF4" : "#1e293b";
        ctx.font = "12px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(value.toString(), x + barWidth / 2, y + 15);
      }
    });

    // Draw description
    ctx.fillStyle = theme === "nord" ? "#ECEFF4" : "#1e293b";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(step.description, width / 2, 20);
  } else {
    // Placeholder for other visualization types
    ctx.fillStyle = theme === "nord" ? "#ECEFF4" : "#1e293b";
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
  onMetricsUpdate,
  isRacing = false,
  onComplete,
}: AlgorithmVisualizerProps) {
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [steps, setSteps] = useState<VisualizationStep[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number>(0);
  const lastUpdateTimeRef = useRef<number>(0);

  // Generate visualization steps based on algorithm
  useEffect(() => {
    const newSteps = generateVisualizationSteps(algorithm, data);
    setSteps(newSteps);
    setCurrentStep(0);
    setIsPlaying(false);
    startTimeRef.current = 0;
    lastUpdateTimeRef.current = 0;
  }, [algorithm, data]);

  // Handle race mode
  useEffect(() => {
    if (isRacing) {
      setIsPlaying(true);
      setSpeed(4); // Set maximum speed for race mode
      startTimeRef.current = performance.now();
      lastUpdateTimeRef.current = startTimeRef.current;
    } else {
      setIsPlaying(false);
    }
  }, [isRacing]);

  // Animation loop
  useEffect(() => {
    if (!isPlaying || currentStep >= steps.length - 1) {
      if (currentStep === steps.length - 1 && onComplete) {
        const finalMetrics = {
          ...steps[steps.length - 1].metrics!,
          time: Number((performance.now() - startTimeRef.current).toFixed(1)),
        };
        onComplete(finalMetrics);
      }
      return;
    }

    if (startTimeRef.current === 0) {
      startTimeRef.current = performance.now();
      lastUpdateTimeRef.current = startTimeRef.current;
    }

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = Math.min(prev + 1, steps.length - 1);
        const currentTime = performance.now();
        const elapsedTime = Number(
          (currentTime - startTimeRef.current).toFixed(1)
        );

        // Update metrics for the current step
        if (onMetricsUpdate) {
          const currentMetrics = {
            ...steps[nextStep].metrics!,
            time: elapsedTime,
          };
          onMetricsUpdate(currentMetrics);
        }

        lastUpdateTimeRef.current = currentTime;
        return nextStep;
      });
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [isPlaying, currentStep, steps, speed, onComplete, onMetricsUpdate]);

  // Handle canvas resize
  useEffect(() => {
    const updateCanvasSize = () => {
      if (!canvasRef.current || !containerRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;

      // Set canvas size to container size
      canvasRef.current.width = containerWidth;
      canvasRef.current.height = containerHeight;

      // Re-render current step
      const ctx = canvasRef.current.getContext("2d");
      if (ctx && steps.length > 0) {
        renderStep(ctx, steps[currentStep], visualizationType, theme);
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, [currentStep, steps, visualizationType, theme]);

  // Render current step
  useEffect(() => {
    if (!canvasRef.current || steps.length === 0) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    renderStep(ctx, steps[currentStep], visualizationType, theme);
  }, [currentStep, steps, visualizationType, theme]);

  return (
    <Card
      className={cn(
        "p-4 h-full",
        theme === "nord" ? "bg-nord-0" : "bg-slate-50"
      )}
    >
      <div className="flex flex-col h-full gap-4">
        <div className="flex justify-between items-center">
          <h3
            className={cn(
              "text-lg font-semibold",
              theme === "nord" ? "text-nord-4" : "text-slate-900"
            )}
          >
            {algorithm} Visualization
          </h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setCurrentStep(0);
                setIsPlaying(false);
              }}
              disabled={currentStep === 0}
              className={cn(
                theme === "nord"
                  ? "text-nord-4 hover:bg-nord-1 border-nord-3"
                  : "text-slate-900 hover:bg-slate-100 border-slate-200"
              )}
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
          </div>
        </div>

        <div className="flex-1 min-h-[400px]" ref={containerRef}>
          <canvas
            ref={canvasRef}
            className={cn(
              "w-full h-full border rounded-lg",
              theme === "nord" ? "border-nord-3" : "border-slate-200"
            )}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentStep(0)}
              disabled={currentStep === 0}
              className={cn(
                theme === "nord"
                  ? "text-nord-4 hover:bg-nord-1 border-nord-3"
                  : "text-slate-900 hover:bg-slate-100 border-slate-200"
              )}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className={cn(
                theme === "nord"
                  ? "text-nord-4 hover:bg-nord-1 border-nord-3"
                  : "text-slate-900 hover:bg-slate-100 border-slate-200"
              )}
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
              className={cn(
                theme === "nord"
                  ? "text-nord-4 hover:bg-nord-1 border-nord-3"
                  : "text-slate-900 hover:bg-slate-100 border-slate-200"
              )}
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
              className={cn(
                theme === "nord"
                  ? "text-nord-4 hover:bg-nord-1 border-nord-3"
                  : "text-slate-900 hover:bg-slate-100 border-slate-200"
              )}
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={cn(
                "text-sm",
                theme === "nord" ? "text-nord-4" : "text-slate-900"
              )}
            >
              Speed:
            </span>
            <Slider
              value={[speed]}
              min={0.25}
              max={4}
              step={0.25}
              onValueChange={(value: number[]) => setSpeed(value[0])}
              className="w-32"
            />
            <span
              className={cn(
                "text-sm",
                theme === "nord" ? "text-nord-4" : "text-slate-900"
              )}
            >
              {speed}x
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={cn(
                "text-sm",
                theme === "nord" ? "text-nord-4" : "text-slate-900"
              )}
            >
              Step:
            </span>
            <Slider
              value={[currentStep]}
              min={0}
              max={Math.max(0, steps.length - 1)}
              step={1}
              onValueChange={(value: number[]) => setCurrentStep(value[0])}
              className="flex-1"
            />
            <span
              className={cn(
                "text-sm",
                theme === "nord" ? "text-nord-4" : "text-slate-900"
              )}
            >
              {currentStep + 1} / {steps.length}
            </span>
          </div>

          {steps.length > 0 && (
            <div
              className={cn(
                "text-sm text-center p-2 rounded-md",
                theme === "nord"
                  ? "bg-nord-1 text-nord-4"
                  : "bg-slate-100 text-slate-900"
              )}
            >
              {steps[currentStep].description}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
