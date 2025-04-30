import React, { useState, useEffect } from "react";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Code,
  Play,
  Book,
  Video,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "../ThemeProvider";

// Tutorial data structure
interface TutorialStep {
  id: string;
  title: string;
  content: string;
  type: "text" | "code" | "video" | "quiz";
  code?: string;
  videoUrl?: string;
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
}

interface Tutorial {
  id: string;
  title: string;
  description: string;
  steps: TutorialStep[];
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  algorithm: string;
}

// Sample tutorial data
const sampleTutorials: Tutorial[] = [
  {
    id: "bubble-sort-intro",
    title: "Introduction to Bubble Sort",
    description: "Learn the basics of bubble sort algorithm and how it works.",
    steps: [
      {
        id: "step1",
        title: "What is Bubble Sort?",
        content:
          "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
        type: "text",
      },
      {
        id: "step2",
        title: "How Bubble Sort Works",
        content:
          'The algorithm gets its name because smaller elements "bubble" to the top of the list. The pass through the list is repeated until no swaps are needed, which means the list is sorted.',
        type: "text",
      },
      {
        id: "step3",
        title: "Bubble Sort Implementation",
        content:
          "Here's a simple implementation of the bubble sort algorithm in JavaScript:",
        type: "code",
        code: `function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}`,
      },
      {
        id: "step4",
        title: "Time Complexity",
        content:
          "The time complexity of bubble sort is O(n²) in the worst and average cases, and O(n) in the best case (when the array is already sorted).",
        type: "text",
      },
      {
        id: "step5",
        title: "Quiz: Bubble Sort",
        content: "Test your understanding of bubble sort with this quiz:",
        type: "quiz",
        quiz: {
          question:
            "What is the time complexity of bubble sort in the worst case?",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
          correctAnswer: 2,
          explanation:
            "Bubble sort has a time complexity of O(n²) in the worst case because it requires two nested loops to sort the array.",
        },
      },
    ],
    difficulty: "beginner",
    estimatedTime: "10 minutes",
    algorithm: "Bubble Sort",
  },
  {
    id: "quick-sort-intro",
    title: "Understanding Quick Sort",
    description: "Master the quick sort algorithm and its implementation.",
    steps: [
      {
        id: "step1",
        title: "What is Quick Sort?",
        content:
          'Quick Sort is a divide-and-conquer algorithm that works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.',
        type: "text",
      },
      {
        id: "step2",
        title: "Quick Sort Visualization",
        content: "Watch this video to see how quick sort works:",
        type: "video",
        videoUrl: "https://www.youtube.com/embed/7h1s2SojIRw",
      },
      {
        id: "step3",
        title: "Quick Sort Implementation",
        content: "Here's an implementation of the quick sort algorithm:",
        type: "code",
        code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const middle = [];
  const right = [];
  
  for (let val of arr) {
    if (val < pivot) {
      left.push(val);
    } else if (val > pivot) {
      right.push(val);
    } else {
      middle.push(val);
    }
  }
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}`,
      },
      {
        id: "step4",
        title: "Time Complexity",
        content:
          "The average time complexity of quick sort is O(n log n), but in the worst case, it can be O(n²) if the pivot is consistently chosen poorly.",
        type: "text",
      },
      {
        id: "step5",
        title: "Quiz: Quick Sort",
        content: "Test your understanding of quick sort:",
        type: "quiz",
        quiz: {
          question: "What is the average time complexity of quick sort?",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
          correctAnswer: 1,
          explanation:
            "Quick sort has an average time complexity of O(n log n) because it divides the problem into smaller subproblems and combines the results.",
        },
      },
    ],
    difficulty: "intermediate",
    estimatedTime: "15 minutes",
    algorithm: "Quick Sort",
  },
];

export function TutorialView() {
  const [tutorials, setTutorials] = useState<Tutorial[]>(sampleTutorials);
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(
    null
  );
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [showCode, setShowCode] = useState(false);
  const { theme } = useTheme();

  // Calculate progress percentage
  const progressPercentage = selectedTutorial
    ? (completedSteps.length / selectedTutorial.steps.length) * 100
    : 0;

  // Handle tutorial selection
  const handleSelectTutorial = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial);
    setCurrentStepIndex(0);
    setQuizAnswer(null);
    setShowQuizResult(false);
    setCompletedSteps([]);
    setShowCode(false);
  };

  // Handle next step
  const handleNextStep = () => {
    if (
      selectedTutorial &&
      currentStepIndex < selectedTutorial.steps.length - 1
    ) {
      setCurrentStepIndex(currentStepIndex + 1);
      setQuizAnswer(null);
      setShowQuizResult(false);
      setShowCode(false);
    }
  };

  // Handle previous step
  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      setQuizAnswer(null);
      setShowQuizResult(false);
      setShowCode(false);
    }
  };

  // Handle quiz submission
  const handleQuizSubmit = () => {
    if (quizAnswer !== null) {
      setShowQuizResult(true);
      if (
        quizAnswer ===
        selectedTutorial?.steps[currentStepIndex].quiz?.correctAnswer
      ) {
        setCompletedSteps([
          ...completedSteps,
          selectedTutorial.steps[currentStepIndex].id,
        ]);
      }
    }
  };

  // Handle step completion
  const handleCompleteStep = () => {
    if (
      selectedTutorial &&
      !completedSteps.includes(selectedTutorial.steps[currentStepIndex].id)
    ) {
      setCompletedSteps([
        ...completedSteps,
        selectedTutorial.steps[currentStepIndex].id,
      ]);
    }
  };

  // Get current step
  const currentStep = selectedTutorial?.steps[currentStepIndex];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Link to="/">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "mr-2",
              theme === "nord" ? "text-white hover:bg-white/10" : ""
            )}
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
        </Link>
        <h1
          className={cn(
            "text-3xl font-bold",
            theme === "nord" ? "text-white" : "text-foreground"
          )}
        >
          Interactive Tutorials
        </h1>
      </div>

      {!selectedTutorial ? (
        // Tutorial selection view
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Card
              key={tutorial.id}
              className={cn(
                "hover:shadow-lg transition-shadow",
                theme === "nord" ? "bg-nord-1 border-nord-4" : ""
              )}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className={theme === "nord" ? "text-white" : ""}>
                    {tutorial.title}
                  </CardTitle>
                  <span
                    className={cn(
                      "text-xs px-2 py-1 rounded",
                      tutorial.difficulty === "beginner"
                        ? "bg-green-500/20 text-green-500"
                        : tutorial.difficulty === "intermediate"
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "bg-red-500/20 text-red-500"
                    )}
                  >
                    {tutorial.difficulty}
                  </span>
                </div>
                <CardDescription
                  className={theme === "nord" ? "text-nord-4" : ""}
                >
                  {tutorial.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Book className="h-4 w-4 mr-1" />
                  <span>{tutorial.algorithm}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Play className="h-4 w-4 mr-1" />
                  <span>{tutorial.estimatedTime}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => handleSelectTutorial(tutorial)}
                >
                  Start Tutorial
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        // Tutorial content view
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2
              className={cn(
                "text-2xl font-bold",
                theme === "nord" ? "text-white" : "text-foreground"
              )}
            >
              {selectedTutorial.title}
            </h2>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "text-sm",
                  theme === "nord" ? "text-nord-4" : "text-muted-foreground"
                )}
              >
                {currentStepIndex + 1} / {selectedTutorial.steps.length}
              </span>
              <Progress value={progressPercentage} className="w-32" />
            </div>
          </div>

          <Card className={theme === "nord" ? "bg-nord-1 border-nord-4" : ""}>
            <CardHeader>
              <CardTitle className={theme === "nord" ? "text-white" : ""}>
                {currentStep?.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Text content */}
              {currentStep?.type === "text" && (
                <div
                  className={cn(
                    "prose dark:prose-invert max-w-none",
                    theme === "nord" ? "text-nord-4" : ""
                  )}
                >
                  {currentStep.content}
                </div>
              )}

              {/* Code content */}
              {currentStep?.type === "code" && (
                <div className="space-y-2">
                  <div
                    className={cn(
                      "prose dark:prose-invert max-w-none",
                      theme === "nord" ? "text-nord-4" : ""
                    )}
                  >
                    {currentStep.content}
                  </div>
                  <div className="relative">
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => setShowCode(!showCode)}
                    >
                      {showCode ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>
                    <div
                      className={cn(
                        "bg-muted p-4 rounded-md overflow-x-auto transition-all duration-300",
                        showCode ? "max-h-[500px]" : "max-h-0 overflow-hidden"
                      )}
                    >
                      <pre className="text-sm">
                        <code>{currentStep.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Video content */}
              {currentStep?.type === "video" && currentStep.videoUrl && (
                <div className="space-y-2">
                  <div
                    className={cn(
                      "prose dark:prose-invert max-w-none",
                      theme === "nord" ? "text-nord-4" : ""
                    )}
                  >
                    {currentStep.content}
                  </div>
                  <div className="aspect-video">
                    <iframe
                      src={currentStep.videoUrl}
                      className="w-full h-full rounded-md"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Quiz content */}
              {currentStep?.type === "quiz" && currentStep.quiz && (
                <div className="space-y-4">
                  <div
                    className={cn(
                      "prose dark:prose-invert max-w-none",
                      theme === "nord" ? "text-nord-4" : ""
                    )}
                  >
                    {currentStep.content}
                  </div>
                  <div
                    className={cn(
                      "p-4 border rounded-md",
                      theme === "nord" ? "border-nord-4" : ""
                    )}
                  >
                    <h3
                      className={cn(
                        "font-medium mb-3",
                        theme === "nord" ? "text-white" : ""
                      )}
                    >
                      {currentStep.quiz.question}
                    </h3>
                    <div className="space-y-2">
                      {currentStep.quiz.options.map((option, index) => (
                        <div
                          key={index}
                          className={cn(
                            "p-3 rounded-md cursor-pointer transition-colors",
                            quizAnswer === index
                              ? "bg-primary/20 border border-primary"
                              : "hover:bg-muted border border-transparent",
                            showQuizResult &&
                              index === currentStep.quiz?.correctAnswer
                              ? "bg-green-500/20 border-green-500"
                              : showQuizResult &&
                                quizAnswer === index &&
                                quizAnswer !== currentStep.quiz?.correctAnswer
                              ? "bg-red-500/20 border-red-500"
                              : ""
                          )}
                          onClick={() =>
                            !showQuizResult && setQuizAnswer(index)
                          }
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                    {showQuizResult && (
                      <div
                        className={cn(
                          "mt-4 p-3 rounded-md bg-muted",
                          theme === "nord" ? "bg-nord-2" : ""
                        )}
                      >
                        <p
                          className={cn(
                            "font-medium",
                            theme === "nord" ? "text-white" : ""
                          )}
                        >
                          {quizAnswer === currentStep.quiz?.correctAnswer
                            ? "Correct!"
                            : "Incorrect. Try again!"}
                        </p>
                        <p
                          className={cn(
                            "text-sm mt-1",
                            theme === "nord" ? "text-nord-4" : ""
                          )}
                        >
                          {currentStep.quiz.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevStep}
                disabled={currentStepIndex === 0}
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>

              {currentStep?.type === "quiz" ? (
                <Button
                  onClick={showQuizResult ? handleNextStep : handleQuizSubmit}
                  disabled={quizAnswer === null && !showQuizResult}
                >
                  {showQuizResult ? (
                    <>
                      Next
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </>
                  ) : (
                    "Submit Answer"
                  )}
                </Button>
              ) : (
                <Button
                  onClick={handleNextStep}
                  disabled={
                    currentStepIndex === selectedTutorial.steps.length - 1
                  }
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              )}
            </CardFooter>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setSelectedTutorial(null)}>
              Back to Tutorials
            </Button>
            <Button
              onClick={handleCompleteStep}
              disabled={completedSteps.includes(currentStep?.id || "")}
            >
              <Check className="h-4 w-4 mr-1" />
              Mark as Complete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
