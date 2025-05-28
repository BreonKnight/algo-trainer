import {
  Play,
  Pause,
  RotateCcw,
  BarChart2,
  Timer,
  RefreshCw,
  Info,
  ChevronRight,
} from "lucide-react";
import { useState, useMemo, useCallback, memo } from "react";

import { sortingPatterns } from "@/components/features/algorithm-trainer/patterns/sorting";
import { useTheme } from "@/components/theme/use-theme";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { AlgorithmVisualizer } from "@algo-trainer/shared/components/visualization/AlgorithmVisualizer";
import { PatternKey } from "@algo-trainer/shared/types/algorithm-types";
import { cn } from "@algo-trainer/shared/utils/common";

interface AlgorithmComparisonProps {
  algorithms?: PatternKey[];
}

interface PerformanceMetrics {
  comparisons: number;
  swaps: number;
  time: number;
}

const sortingCategories = {
  "Comparison Sorts": [
    "Bubble Sort",
    "Insertion Sort",
    "Selection Sort",
    "Quick Sort",
    "Merge Sort",
    "Heap Sort",
  ],
  "Non-Comparison Sorts": ["Radix Sort", "Counting Sort", "Bucket Sort"],
  "Other Sorts": ["Stack Sort"],
};

const AlgorithmVisualizerMemo = memo(AlgorithmVisualizer);

export default function AlgorithmComparison({
  algorithms = Object.keys(sortingPatterns) as PatternKey[],
}: AlgorithmComparisonProps) {
  const { theme } = useTheme();
  const [selectedAlgorithms, setSelectedAlgorithms] = useState<[PatternKey, PatternKey]>([
    algorithms[0],
    algorithms[1],
  ]);
  const [data, setData] = useState<number[]>([5, 2, 8, 1, 9, 3, 7, 4, 6]);
  const [arraySize, setArraySize] = useState(10);
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(100);
  const [isRacing, setIsRacing] = useState(false);
  const [metrics, setMetrics] = useState<[PerformanceMetrics, PerformanceMetrics]>([
    { comparisons: 0, swaps: 0, time: 0 },
    { comparisons: 0, swaps: 0, time: 0 },
  ]);

  const generateRandomArray = useCallback(() => {
    const newArray = Array.from(
      { length: arraySize },
      () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
    );
    setData(newArray);
  }, [arraySize, maxValue, minValue]);

  const generatePresetPattern = useCallback(
    (pattern: "random" | "nearly-sorted" | "reverse-sorted") => {
      let newArray = Array.from(
        { length: arraySize },
        () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
      );

      if (pattern === "nearly-sorted") {
        newArray.sort((a, b) => a - b);
        // Randomly swap a few elements
        for (let i = 0; i < arraySize / 10; i++) {
          const idx1 = Math.floor(Math.random() * arraySize);
          const idx2 = Math.floor(Math.random() * arraySize);
          [newArray[idx1], newArray[idx2]] = [newArray[idx2], newArray[idx1]];
        }
      } else if (pattern === "reverse-sorted") {
        newArray.sort((a, b) => b - a);
      }

      setData(newArray);
    },
    [arraySize, maxValue, minValue]
  );

  const handleCustomInput = useCallback((input: string) => {
    try {
      const newArray = input
        .split(",")
        .map((num) => parseInt(num.trim()))
        .filter((num) => !isNaN(num));
      if (newArray.length > 0) {
        setData(newArray);
        setArraySize(newArray.length);
      }
    } catch (error) {
      console.error("Invalid input format " + error);
    }
  }, []);

  const startRace = useCallback(() => {
    setIsRacing(true);
    // Reset metrics
    setMetrics([
      { comparisons: 0, swaps: 0, time: 0 },
      { comparisons: 0, swaps: 0, time: 0 },
    ]);
  }, []);

  const stopRace = useCallback(() => {
    setIsRacing(false);
  }, []);

  const handleRaceComplete = useCallback((index: number, finalMetrics: PerformanceMetrics) => {
    setMetrics((prev) => {
      const newMetrics = [...prev];
      newMetrics[index] = finalMetrics;
      return newMetrics as [PerformanceMetrics, PerformanceMetrics];
    });
  }, []);

  const isDarkTheme = useMemo(
    () =>
      theme === "dracula" ||
      theme === "solarized" ||
      theme === "nord" ||
      theme === "snes" ||
      theme === "ps2" ||
      theme === "re2" ||
      theme === "mh" ||
      theme === "kingdom-hearts",
    [theme]
  );

  const cardClasses = useMemo(
    () =>
      cn(
        "p-6 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl",
        isDarkTheme
          ? "bg-background/80 backdrop-blur-sm border border-border/50"
          : "bg-card border border-border"
      ),
    [isDarkTheme]
  );

  const textClasses = useMemo(
    () => cn("transition-colors duration-200", isDarkTheme ? "text-foreground" : "text-foreground"),
    [isDarkTheme]
  );

  const mutedTextClasses = useMemo(
    () =>
      cn(
        "transition-colors duration-200",
        isDarkTheme ? "text-muted-foreground" : "text-muted-foreground"
      ),
    [isDarkTheme]
  );

  const buttonClasses = useMemo(
    () =>
      cn(
        "transition-all duration-200 rounded-lg",
        isDarkTheme ? "hover:bg-accent/20 border-border/50" : "hover:bg-accent/10 border-border",
        theme === "light" ? "hover:text-green-600" : ""
      ),
    [isDarkTheme, theme]
  );

  const iconContainerClasses = useMemo(
    () =>
      cn(
        "p-2 rounded-lg transition-colors duration-200",
        isDarkTheme ? "bg-accent/10" : "bg-accent/5",
        theme === "light" ? "hover:text-green-600" : ""
      ),
    [isDarkTheme, theme]
  );

  const metricCardClasses = useMemo(
    () =>
      cn(
        "p-4 rounded-lg transition-colors duration-200",
        isDarkTheme ? "bg-accent/10" : "bg-accent/5",
        theme === "light" ? "hover:text-green-600" : ""
      ),
    [isDarkTheme, theme]
  );

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="flex flex-col items-center justify-center mt-6 mb-2 relative w-full">
        <h1
          className="text-2xl font-extrabold text-transparent bg-clip-text text-center animate-gradient-x drop-shadow-lg tracking-tight select-none"
          style={{
            backgroundImage: "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
          }}
        >
          Algorithm Comparison
        </h1>
      </div>
      <div className={cn("flex flex-col gap-8 w-full max-w-7xl px-6 py-12", textClasses)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card
                className={cn(cardClasses, "hover:scale-[1.02] transition-transform duration-200")}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={iconContainerClasses}>
                        <BarChart2 className={cn("w-5 h-5", textClasses)} />
                      </div>
                      <h3 className={cn("text-xl font-semibold", textClasses)}>
                        Algorithm Selection
                      </h3>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className={iconContainerClasses}>
                            <Info className={cn("w-4 h-4", mutedTextClasses)} />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Choose algorithms to compare</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label className={cn("text-sm font-medium", mutedTextClasses)}>
                        Algorithm 1
                      </Label>
                      <Select
                        value={selectedAlgorithms[0]}
                        onValueChange={(value) =>
                          setSelectedAlgorithms([value as PatternKey, selectedAlgorithms[1]])
                        }
                      >
                        <SelectTrigger className={cn("w-full h-12", buttonClasses)}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(sortingCategories).map(([category, algorithms]) => (
                            <SelectGroup key={category}>
                              <SelectLabel className={cn("text-sm font-medium", mutedTextClasses)}>
                                {category}
                              </SelectLabel>
                              {algorithms.map((algo) => (
                                <SelectItem key={algo} value={algo}>
                                  {algo}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label className={cn("text-sm font-medium", mutedTextClasses)}>
                        Algorithm 2
                      </Label>
                      <Select
                        value={selectedAlgorithms[1]}
                        onValueChange={(value) =>
                          setSelectedAlgorithms([selectedAlgorithms[0], value as PatternKey])
                        }
                      >
                        <SelectTrigger className={cn("w-full h-12", buttonClasses)}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(sortingCategories).map(([category, algorithms]) => (
                            <SelectGroup key={category}>
                              <SelectLabel className={cn("text-sm font-medium", mutedTextClasses)}>
                                {category}
                              </SelectLabel>
                              {algorithms.map((algo) => (
                                <SelectItem key={algo} value={algo}>
                                  {algo}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </Card>

              <Card
                className={cn(cardClasses, "hover:scale-[1.02] transition-transform duration-200")}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={iconContainerClasses}>
                        <RotateCcw className={cn("w-5 h-5", textClasses)} />
                      </div>
                      <h3 className={cn("text-xl font-semibold", textClasses)}>
                        Array Configuration
                      </h3>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className={iconContainerClasses}>
                            <Info className={cn("w-4 h-4", mutedTextClasses)} />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Configure the input array for the algorithms</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-3">
                        <Label className={cn("text-sm font-medium", mutedTextClasses)}>
                          Array Size
                        </Label>
                        <div className="flex items-center gap-3">
                          <Slider
                            value={[arraySize]}
                            min={5}
                            max={50}
                            step={1}
                            onValueChange={(value) => setArraySize(value[0])}
                            className={cn(
                              isDarkTheme
                                ? "[&_[role=slider]]:bg-primary"
                                : "[&_[role=slider]]:bg-primary"
                            )}
                          />
                          <span
                            className={cn(
                              "text-sm font-medium min-w-[2rem] px-2 py-1 rounded-lg",
                              metricCardClasses,
                              textClasses
                            )}
                          >
                            {arraySize}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Label className={cn("text-sm font-medium", mutedTextClasses)}>
                          Value Range
                        </Label>
                        <div className="flex gap-3 items-center">
                          <Input
                            type="number"
                            value={minValue}
                            onChange={(e) => setMinValue(parseInt(e.target.value))}
                            className={cn("w-20 h-10", buttonClasses)}
                          />
                          <ChevronRight className={cn("w-4 h-4", mutedTextClasses)} />
                          <Input
                            type="number"
                            value={maxValue}
                            onChange={(e) => setMaxValue(parseInt(e.target.value))}
                            className={cn("w-20 h-10", buttonClasses)}
                          />
                        </div>
                      </div>
                    </div>

                    <Separator className={cn(isDarkTheme ? "bg-border/50" : "bg-border")} />

                    <div className="space-y-3">
                      <Label className={cn("text-sm font-medium", mutedTextClasses)}>
                        Array Generation
                      </Label>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          onClick={generateRandomArray}
                          className={cn("h-10 flex-1", buttonClasses)}
                          variant="outline"
                        >
                          <RefreshCw className={cn("w-4 h-4 mr-2", textClasses)} />
                          Random Array
                        </Button>
                        <Select onValueChange={generatePresetPattern}>
                          <SelectTrigger className={cn("h-10 w-[180px]", buttonClasses)}>
                            <SelectValue placeholder="Select Pattern" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="random">Random</SelectItem>
                            <SelectItem value="nearly-sorted">Nearly Sorted</SelectItem>
                            <SelectItem value="reverse-sorted">Reverse Sorted</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Input
                        placeholder="Custom input (comma-separated numbers)"
                        onChange={(e) => handleCustomInput(e.target.value)}
                        className={cn("h-10 flex-1", buttonClasses)}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <AlgorithmVisualizerMemo
                algorithm={selectedAlgorithms[0]}
                data={data}
                visualizationType="sorting"
                isRacing={isRacing}
                onComplete={(metrics) => handleRaceComplete(0, metrics)}
                onMetricsUpdate={(metrics) => {
                  setMetrics((prev) => {
                    const newMetrics = [...prev];
                    newMetrics[0] = metrics;
                    return newMetrics as [PerformanceMetrics, PerformanceMetrics];
                  });
                }}
              />
              <AlgorithmVisualizerMemo
                algorithm={selectedAlgorithms[1]}
                data={data}
                visualizationType="sorting"
                isRacing={isRacing}
                onComplete={(metrics) => handleRaceComplete(1, metrics)}
                onMetricsUpdate={(metrics) => {
                  setMetrics((prev) => {
                    const newMetrics = [...prev];
                    newMetrics[1] = metrics;
                    return newMetrics as [PerformanceMetrics, PerformanceMetrics];
                  });
                }}
              />
            </div>

            <Card
              className={cn(cardClasses, "hover:scale-[1.02] transition-transform duration-200")}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={iconContainerClasses}>
                      <Timer className={cn("w-5 h-5", textClasses)} />
                    </div>
                    <h3 className={cn("text-xl font-semibold", textClasses)}>
                      Performance Metrics
                    </h3>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className={iconContainerClasses}>
                          <Info className={cn("w-4 h-4", mutedTextClasses)} />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Track and compare algorithm performance metrics</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className={cn("font-medium text-sm", mutedTextClasses)}>
                      {selectedAlgorithms[0]}
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className={metricCardClasses}>
                        <p className={cn("text-sm", mutedTextClasses)}>Comparisons</p>
                        <p className={cn("text-xl font-semibold mt-1", textClasses)}>
                          {metrics[0].comparisons}
                        </p>
                      </div>
                      <div className={metricCardClasses}>
                        <p className={cn("text-sm", mutedTextClasses)}>Swaps</p>
                        <p className={cn("text-xl font-semibold mt-1", textClasses)}>
                          {metrics[0].swaps}
                        </p>
                      </div>
                      <div className={metricCardClasses}>
                        <p className={cn("text-sm", mutedTextClasses)}>Time</p>
                        <p className={cn("text-xl font-semibold mt-1", textClasses)}>
                          {metrics[0].time.toFixed(1)}ms
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator className={cn(isDarkTheme ? "bg-border/50" : "bg-border")} />

                  <div className="space-y-4">
                    <h4 className={cn("font-medium text-sm", mutedTextClasses)}>
                      {selectedAlgorithms[1]}
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className={metricCardClasses}>
                        <p className={cn("text-sm", mutedTextClasses)}>Comparisons</p>
                        <p className={cn("text-xl font-semibold mt-1", textClasses)}>
                          {metrics[1].comparisons}
                        </p>
                      </div>
                      <div className={metricCardClasses}>
                        <p className={cn("text-sm", mutedTextClasses)}>Swaps</p>
                        <p className={cn("text-xl font-semibold mt-1", textClasses)}>
                          {metrics[1].swaps}
                        </p>
                      </div>
                      <div className={metricCardClasses}>
                        <p className={cn("text-sm", mutedTextClasses)}>Time</p>
                        <p className={cn("text-xl font-semibold mt-1", textClasses)}>
                          {metrics[1].time.toFixed(1)}ms
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={isRacing ? stopRace : startRace}
                      disabled={isRacing}
                      className={cn(
                        "w-full h-12 text-base",
                        buttonClasses,
                        isRacing ? "opacity-50" : "",
                        theme === "light" ? "hover:text-green-600" : ""
                      )}
                      variant={isRacing ? "outline" : "default"}
                    >
                      {isRacing ? (
                        <>
                          <Pause className={cn("w-5 h-5 mr-2", textClasses)} />
                          Stop Race
                        </>
                      ) : (
                        <>
                          <Play className={cn("w-5 h-5 mr-2", textClasses)} />
                          Start Race
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
