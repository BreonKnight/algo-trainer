import { Play, Pause, SkipBack, SkipForward, RotateCcw } from "lucide-react";
import { useState, useEffect, useRef, useMemo, useCallback, memo } from "react";

import { PatternKey } from '@algo-trainer/shared/types/algorithm-types';
import { useTheme } from "@/components/theme/use-theme";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { cn } from '@algo-trainer/shared/utils/common';

interface AlgorithmVisualizerProps {
  algorithm: PatternKey;
  data: number[];
  visualizationType: "sorting" | "graph" | "tree" | "array";
  isRacing?: boolean;
  onComplete?: (metrics: PerformanceMetrics) => void;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

interface PerformanceMetrics {
  comparisons: number;
  swaps: number;
  time: number;
}

interface VisualizationStep {
  array: number[];
  highlightedIndices: number[];
  sortedIndices?: number[];
  comparingIndices?: number[];
  metrics: PerformanceMetrics;
  description: string;
}

function renderStep(
  ctx: CanvasRenderingContext2D,
  step: VisualizationStep,
  visualizationType: "sorting" | "graph" | "tree" | "array",
  theme: string
) {
  const { width, height } = ctx.canvas;
  ctx.clearRect(0, 0, width, height);

  // Set background color based on theme
  ctx.fillStyle = theme === "nord" ? "#2E3440" : "#f8fafc";
  ctx.fillRect(0, 0, width, height);

  switch (visualizationType) {
    case "sorting":
    case "array":
      const maxValue = Math.max(...step.array);
      const barWidth = width / step.array.length;

      step.array.forEach((value, index) => {
        const isActive = step.highlightedIndices.includes(index);
        const isSorted = step.sortedIndices?.includes(index) ?? false;
        const isComparing = step.comparingIndices?.includes(index) ?? false;

        // Use Bar component's color logic
        let barColor;
        if (isSorted) {
          barColor = "#10B981"; // green
        } else if (isComparing) {
          barColor = "#F59E0B"; // yellow
        } else if (isActive) {
          barColor = theme === "nord" ? "#88C0D0" : "#3B82F6"; // nord blue or regular blue
        } else {
          barColor = theme === "nord" ? "#4C566A" : "#94A3B8"; // nord gray or regular gray
        }

        const barHeight = (value / maxValue) * height;
        const x = index * barWidth;
        const y = height - barHeight;

        // Draw bar
        ctx.fillStyle = barColor;
        ctx.fillRect(x, y, barWidth - 1, barHeight);

        // Draw value text
        ctx.fillStyle = theme === "nord" ? "#ECEFF4" : "#1E293B";
        ctx.font = "12px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(value.toString(), x + barWidth / 2, height + 15);
      });
      break;
    case "graph":
      // TODO: Implement graph visualization
      break;
    case "tree":
      // TODO: Implement tree visualization
      break;
  }
}

const Bar = memo(
  ({
    value,
    maxValue,
    isActive,
    isSorted,
    isComparing,
  }: {
    value: number;
    maxValue: number;
    isActive: boolean;
    isSorted: boolean;
    isComparing: boolean;
  }) => {
    const height = (value / maxValue) * 100;
    const { theme } = useTheme();

    const barClasses = useMemo(
      () =>
        cn(
          "w-full transition-all duration-200 ease-in-out",
          isSorted && (theme === "nord" ? "bg-nord-14" : "bg-green-500"), // green
          isComparing && (theme === "nord" ? "bg-nord-13" : "bg-yellow-500"), // yellow
          isActive && (theme === "nord" ? "bg-nord-10" : "bg-blue-500"), // blue
          !isActive &&
            !isSorted &&
            !isComparing &&
            (theme === "nord" ? "bg-nord-3" : "bg-slate-300") // default
        ),
      [isActive, isSorted, isComparing, theme]
    );

    return (
      <div className="flex flex-col items-center gap-1">
        <div
          className={barClasses}
          style={{
            height: `${height}%`,
            minHeight: "4px",
          }}
        />
        <span className={cn("text-xs", theme === "nord" ? "text-nord-4" : "text-slate-600")}>
          {value}
        </span>
      </div>
    );
  }
);

const MetricsDisplay = memo(({ metrics }: { metrics: PerformanceMetrics }) => {
  return (
    <div className="flex justify-between text-sm text-muted-foreground mt-2">
      <span>Comparisons: {metrics.comparisons}</span>
      <span>Swaps: {metrics.swaps}</span>
      <span>Time: {metrics.time.toFixed(1)}ms</span>
    </div>
  );
});

function generateVisualizationSteps(data: number[]): VisualizationStep[] {
  const steps: VisualizationStep[] = [];
  const n = data.length;
  const arr = [...data];
  let comparisons = 0;
  let swaps = 0;
  const startTime = performance.now();

  // Initial state
  steps.push({
    array: [...arr],
    highlightedIndices: [],
    sortedIndices: [],
    comparingIndices: [],
    metrics: { comparisons, swaps, time: 0 },
    description: "Initial array",
  });

  // Bubble sort implementation for demonstration
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      steps.push({
        array: [...arr],
        highlightedIndices: [j, j + 1],
        sortedIndices: Array.from({ length: n - i }, (_, k) => n - k - 1),
        comparingIndices: [j, j + 1],
        metrics: { comparisons, swaps, time: performance.now() - startTime },
        description: `Comparing ${arr[j]} and ${arr[j + 1]}`,
      });

      if (arr[j] > arr[j + 1]) {
        swaps++;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({
          array: [...arr],
          highlightedIndices: [j, j + 1],
          sortedIndices: Array.from({ length: n - i }, (_, k) => n - k - 1),
          comparingIndices: [],
          metrics: { comparisons, swaps, time: performance.now() - startTime },
          description: `Swapped ${arr[j]} and ${arr[j + 1]}`,
        });
      }
    }
  }

  // Final state
  steps.push({
    array: [...arr],
    highlightedIndices: [],
    sortedIndices: Array.from({ length: n }, (_, i) => i),
    comparingIndices: [],
    metrics: { comparisons, swaps, time: performance.now() - startTime },
    description: "Array sorted",
  });

  return steps;
}

export function AlgorithmVisualizer({
  algorithm,
  data,
  visualizationType,
  isRacing = false,
  onComplete,
  onMetricsUpdate,
}: AlgorithmVisualizerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [steps, setSteps] = useState<VisualizationStep[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number>(0);
  const lastUpdateTimeRef = useRef<number>(0);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({ comparisons: 0, swaps: 0, time: 0 });
  const [currentState, setCurrentState] = useState<number[]>(data);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [comparingIndices, setComparingIndices] = useState<number[]>([]);
  const animationFrameRef = useRef<number>();
  const { theme } = useTheme();

  // Memoize maxValue calculation
  const maxValue = useMemo(() => Math.max(...currentState), [currentState]);

  // Memoize steps generation
  const generatedSteps = useMemo(() => generateVisualizationSteps(data), [data]);

  // Update steps when data changes
  useEffect(() => {
    setSteps(generatedSteps);
    setCurrentStep(0);
    setIsPlaying(false);
    startTimeRef.current = 0;
    lastUpdateTimeRef.current = 0;
  }, [generatedSteps]);

  // Batch state updates
  useEffect(() => {
    if (steps[currentStep]) {
      const step = steps[currentStep];
      requestAnimationFrame(() => {
        setCurrentState(step.array);
        setActiveIndices(step.highlightedIndices);
        setSortedIndices(step.sortedIndices || []);
        setComparingIndices(step.comparingIndices || []);
        setMetrics(step.metrics);
      });
    }
  }, [currentStep, steps]);

  // Optimize canvas rendering
  const renderCanvas = useCallback(() => {
    if (!canvasRef.current || !steps[currentStep]) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    requestAnimationFrame(() => {
      renderStep(ctx, steps[currentStep], visualizationType, theme);
    });
  }, [currentStep, steps, visualizationType, theme]);

  // Use ResizeObserver for canvas resizing
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (canvasRef.current && containerRef.current) {
        canvasRef.current.width = containerRef.current.clientWidth;
        canvasRef.current.height = containerRef.current.clientHeight;
        renderCanvas();
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [renderCanvas]);

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
      if (currentStep === steps.length - 1 && onComplete && steps.length > 0) {
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
        const elapsedTime = Number((currentTime - startTimeRef.current).toFixed(1));

        if (onMetricsUpdate && steps[nextStep]?.metrics) {
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

  const handlePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setCurrentStep(0);
    setIsPlaying(false);
    setCurrentState(data);
    setActiveIndices([]);
    setSortedIndices([]);
    setComparingIndices([]);
    setMetrics({ comparisons: 0, swaps: 0, time: 0 });
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, [data]);

  const updateVisualization = useCallback(
    (step: number) => {
      if (step >= steps.length) {
        setIsPlaying(false);
        if (onComplete) {
          onComplete(metrics);
        }
        return;
      }

      const currentStepData = steps[step];
      setCurrentState(currentStepData.array);
      setActiveIndices(currentStepData.highlightedIndices || []);
      setSortedIndices(currentStepData.sortedIndices || []);
      setComparingIndices(currentStepData.comparingIndices || []);
      setMetrics(currentStepData.metrics);
      if (onMetricsUpdate) {
        onMetricsUpdate(currentStepData.metrics);
      }

      setCurrentStep(step + 1);
    },
    [steps, metrics, onComplete, onMetricsUpdate]
  );

  useEffect(() => {
    if (isRacing) {
      setIsPlaying(true);
      startTimeRef.current = performance.now();
    }
  }, [isRacing]);

  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        if (startTimeRef.current) {
          const elapsed = performance.now() - startTimeRef.current;
          const step = Math.floor(elapsed / 100); // Adjust speed here
          if (step < steps.length) {
            updateVisualization(step);
          } else {
            setIsPlaying(false);
            if (onComplete) {
              onComplete(metrics);
            }
            return;
          }
        }
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, steps, updateVisualization, metrics, onComplete]);

  const containerClasses = useMemo(
    () =>
      cn(
        "p-4 rounded-lg border",
        theme === "nord" ? "bg-nord-1 border-nord-4" : "bg-card border-border"
      ),
    [theme]
  );

  return (
    <Card className={containerClasses}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3
            className={cn(
              "text-lg font-semibold transition-colors duration-200",
              theme === "nord" ? "text-nord-4" : "text-slate-900"
            )}
          >
            {algorithm} Visualization
          </h3>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              disabled={currentStep === 0}
              className={cn(
                "transition-colors duration-200",
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

        <div className="flex-1 h-[500px]" ref={containerRef}>
          <canvas
            ref={canvasRef}
            className={cn(
              "w-full h-full border rounded-lg transition-colors duration-200",
              theme === "nord" ? "border-nord-3" : "border-slate-200"
            )}
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(20px,1fr))] gap-1 h-full">
            {currentState.map((value, index) => (
              <Bar
                key={index}
                value={value}
                maxValue={maxValue}
                isActive={activeIndices.includes(index)}
                isSorted={sortedIndices.includes(index)}
                isComparing={comparingIndices.includes(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handleReset}
              disabled={currentStep === 0}
              className={cn(
                "transition-colors duration-200",
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
                "transition-colors duration-200",
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
              onClick={handlePlayPause}
              className={cn(
                "transition-colors duration-200",
                theme === "nord"
                  ? "text-nord-4 hover:bg-nord-1 border-nord-3"
                  : "text-slate-900 hover:bg-slate-100 border-slate-200"
              )}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={currentStep === steps.length - 1}
              className={cn(
                "transition-colors duration-200",
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
                "text-sm transition-colors duration-200",
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
                "text-sm transition-colors duration-200",
                theme === "nord" ? "text-nord-4" : "text-slate-900"
              )}
            >
              {speed}x
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={cn(
                "text-sm transition-colors duration-200",
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
                "text-sm transition-colors duration-200",
                theme === "nord" ? "text-nord-4" : "text-slate-900"
              )}
            >
              {currentStep + 1} / {steps.length}
            </span>
          </div>

          {steps.length > 0 && (
            <div
              className={cn(
                "text-sm text-center p-2 rounded-md transition-colors duration-200",
                theme === "nord" ? "bg-nord-1 text-nord-4" : "bg-slate-100 text-slate-900"
              )}
            >
              {steps[currentStep].description}
            </div>
          )}
        </div>

        <MetricsDisplay metrics={metrics} />
      </div>
    </Card>
  );
}
