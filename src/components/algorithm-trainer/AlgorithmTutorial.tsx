import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  Video,
  Code,
  FileText,
  Book,
  Check,
  Clock,
  Play,
  Lock,
} from "lucide-react";
import type { PatternKey } from "./types";

type Language = "python" | "javascript";

interface Tutorial {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: number;
  prerequisites: string[];
  implementations: {
    python: string;
    javascript: string;
  };
  quiz: QuizQuestion[];
}

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface AlgorithmTutorialProps {
  algorithm: PatternKey;
  tutorials: Tutorial[];
}

export function AlgorithmTutorial({
  algorithm,
  tutorials,
}: AlgorithmTutorialProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentTutorial, setCurrentTutorial] = useState<Tutorial | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("python");

  // Calculate progress through tutorials
  const calculateProgress = () => {
    if (!tutorials.length) return 0;
    const completed = tutorials.filter(
      (t) => localStorage.getItem(`tutorial-${t.id}`) === "completed"
    ).length;
    return (completed / tutorials.length) * 100;
  };

  // Start a tutorial
  const startTutorial = (tutorial: Tutorial) => {
    setCurrentTutorial(tutorial);
    setActiveTab("video");
  };

  // Mark tutorial as completed
  const completeTutorial = () => {
    if (currentTutorial) {
      localStorage.setItem(`tutorial-${currentTutorial.id}`, "completed");
      setCurrentTutorial(null);
      setActiveTab("overview");
    }
  };

  // Submit quiz
  const submitQuiz = () => {
    setShowResults(true);
  };

  // Check if tutorial is available (prerequisites met)
  const isTutorialAvailable = (tutorial: Tutorial) => {
    if (tutorial.prerequisites.length === 0) return true;

    return tutorial.prerequisites.every(
      (prereq) => localStorage.getItem(`tutorial-${prereq}`) === "completed"
    );
  };

  // Generate mock tutorials if none provided
  const mockTutorials: Tutorial[] =
    tutorials.length > 0
      ? tutorials
      : [
          {
            id: "intro",
            title: "Introduction to " + algorithm,
            description:
              "Learn the basics of " + algorithm + " and its applications.",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            difficulty: "beginner",
            duration: 10,
            prerequisites: [],
            implementations: {
              python: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)`,
              javascript: `const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
};`,
            },
            quiz: [
              {
                id: "q1",
                question: "What is the time complexity of " + algorithm + "?",
                options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
                correctAnswer: 1,
                explanation:
                  "The time complexity of " +
                  algorithm +
                  " is O(n log n) in the average case.",
              },
              {
                id: "q2",
                question:
                  "Which data structure is best suited for " + algorithm + "?",
                options: ["Array", "Linked List", "Tree", "Graph"],
                correctAnswer: 0,
                explanation:
                  "Arrays are the most efficient data structure for " +
                  algorithm +
                  ".",
              },
            ],
          },
          {
            id: "advanced",
            title: "Advanced " + algorithm + " Techniques",
            description:
              "Master advanced techniques and optimizations for " +
              algorithm +
              ".",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            difficulty: "advanced",
            duration: 15,
            prerequisites: ["intro"],
            implementations: {
              python: `def optimized_quick_sort(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    
    def partition(low, high):
        pivot = arr[high]
        i = low - 1
        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1
    
    if low < high:
        pi = partition(low, high)
        optimized_quick_sort(arr, low, pi - 1)
        optimized_quick_sort(arr, pi + 1, high)
    return arr`,
              javascript: `const optimizedQuickSort = (arr, low = 0, high = arr.length - 1) => {
  const partition = (low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  };
  
  if (low < high) {
    const pi = partition(low, high);
    optimizedQuickSort(arr, low, pi - 1);
    optimizedQuickSort(arr, pi + 1, high);
  }
  
  return arr;
};`,
            },
            quiz: [
              {
                id: "q1",
                question:
                  "How can you optimize " + algorithm + " for large datasets?",
                options: [
                  "Use recursion",
                  "Use iteration",
                  "Use parallel processing",
                  "Use a different algorithm",
                ],
                correctAnswer: 2,
                explanation:
                  "Parallel processing can significantly improve performance for large datasets.",
              },
            ],
          },
        ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]">
            {algorithm} Tutorials
          </h2>
          <div className="flex items-center gap-2">
            <TabsList className="bg-secondary/20 p-1 rounded-lg">
              <TabsTrigger
                value="python"
                onClick={() => setSelectedLanguage("python")}
                className={cn(
                  "data-[state=active]:bg-accent2/20",
                  selectedLanguage === "python" && "bg-accent2/20"
                )}
              >
                Python
              </TabsTrigger>
              <TabsTrigger
                value="javascript"
                onClick={() => setSelectedLanguage("javascript")}
                className={cn(
                  "data-[state=active]:bg-accent2/20",
                  selectedLanguage === "javascript" && "bg-accent2/20"
                )}
              >
                JavaScript
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-secondary/20 p-2 rounded-xl backdrop-blur-sm">
          <span className="text-sm font-medium text-secondary">Progress</span>
          <Progress value={calculateProgress()} className="w-32 h-2" />
          <span className="text-sm font-medium text-main">
            {Math.round(calculateProgress())}%
          </span>
        </div>
      </div>

      {currentTutorial ? (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start gap-2 bg-secondary/20 p-1 rounded-xl">
            <TabsTrigger
              value="video"
              className="data-[state=active]:bg-accent2/20"
            >
              <Video className="h-4 w-4 mr-2" />
              Video
            </TabsTrigger>
            <TabsTrigger
              value="implementation"
              className="data-[state=active]:bg-accent2/20"
            >
              <Code className="h-4 w-4 mr-2" />
              Implementation
            </TabsTrigger>
            <TabsTrigger
              value="quiz"
              className="data-[state=active]:bg-accent2/20"
            >
              <FileText className="h-4 w-4 mr-2" />
              Quiz
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className="data-[state=active]:bg-accent2/20"
            >
              <Book className="h-4 w-4 mr-2" />
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="video" className="mt-6">
            <Card className="p-6 bg-secondary/10 border-secondary/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)]">
                {currentTutorial.title}
              </h3>
              <div className="aspect-video mb-6 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={currentTutorial.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mb-6 text-secondary leading-relaxed">
                {currentTutorial.description}
              </p>
              <Button
                onClick={completeTutorial}
                className="bg-accent2 hover:bg-accent2/90 text-background"
              >
                <Check className="h-4 w-4 mr-2" />
                Complete Tutorial
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="implementation" className="mt-6">
            <Card className="p-6 bg-secondary/10 border-secondary/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)]">
                {algorithm} Implementation
              </h3>
              <div className="prose prose-sm dark:prose-invert max-w-none mb-6">
                <pre className="language-{selectedLanguage} rounded-lg p-4 bg-secondary/20">
                  <code>
                    {currentTutorial.implementations[selectedLanguage]}
                  </code>
                </pre>
              </div>
              <Button
                onClick={completeTutorial}
                className="bg-accent2 hover:bg-accent2/90 text-background"
              >
                <Check className="h-4 w-4 mr-2" />
                Complete Tutorial
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <Card className="p-6 bg-secondary/10 border-secondary/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)]">
                Knowledge Check
              </h3>
              <div className="space-y-8">
                {currentTutorial.quiz.map((question) => (
                  <div key={question.id} className="space-y-4">
                    <p className="font-medium text-lg text-main">
                      {question.question}
                    </p>
                    <div className="space-y-2">
                      {question.options.map((option, index) => (
                        <div
                          key={index}
                          className={cn(
                            "p-3 rounded-lg cursor-pointer transition-all duration-200",
                            quizAnswers[question.id] === index
                              ? "bg-accent2/20 border border-accent2/40"
                              : "hover:bg-secondary/20 border border-transparent",
                            showResults &&
                              index === question.correctAnswer &&
                              "bg-green-500/20 border-green-500/40",
                            showResults &&
                              quizAnswers[question.id] === index &&
                              index !== question.correctAnswer &&
                              "bg-red-500/20 border-red-500/40"
                          )}
                          onClick={() =>
                            !showResults &&
                            setQuizAnswers({
                              ...quizAnswers,
                              [question.id]: index,
                            })
                          }
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                    {showResults && (
                      <div className="mt-4 p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                        <p className="text-sm text-main">
                          <span className="font-semibold text-accent2">
                            Explanation:
                          </span>{" "}
                          {question.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {!showResults ? (
                <Button
                  className="mt-8 bg-accent2 hover:bg-accent2/90 text-background"
                  onClick={submitQuiz}
                >
                  Submit Quiz
                </Button>
              ) : (
                <Button
                  className="mt-8 bg-accent3 hover:bg-accent3/90 text-background"
                  onClick={completeTutorial}
                >
                  <Check className="h-4 w-4 mr-2" />
                  Complete Tutorial
                </Button>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="mt-6">
            <Card className="p-6 bg-secondary/10 border-secondary/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)]">
                Additional Resources
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                  <Book className="h-5 w-5 mt-1 text-accent2" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Further Reading
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-secondary">
                      <li>Introduction to Algorithms by CLRS</li>
                      <li>Algorithm Design Manual by Steven Skiena</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                  <Play className="h-5 w-5 mt-1 text-accent3" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Related Videos
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-secondary">
                      <li>Advanced {algorithm} Techniques</li>
                      <li>{algorithm} Optimization Strategies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTutorials.map((tutorial) => (
            <Card
              key={tutorial.id}
              className="p-6 bg-secondary/10 border-secondary/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)]">
                  {tutorial.title}
                </h3>
                <span
                  className={cn(
                    "text-xs px-3 py-1.5 rounded-full font-medium",
                    tutorial.difficulty === "beginner"
                      ? "bg-green-500/20 text-green-500 border border-green-500/20"
                      : tutorial.difficulty === "intermediate"
                      ? "bg-yellow-500/20 text-yellow-500 border border-yellow-500/20"
                      : "bg-red-500/20 text-red-500 border border-red-500/20"
                  )}
                >
                  {tutorial.difficulty}
                </span>
              </div>
              <p className="text-secondary mb-6 leading-relaxed">
                {tutorial.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium flex items-center gap-2 text-secondary">
                  <Clock className="h-4 w-4" />
                  {tutorial.duration} min
                </span>
                {isTutorialAvailable(tutorial) ? (
                  <Button
                    size="sm"
                    onClick={() => startTutorial(tutorial)}
                    className="bg-accent2 hover:bg-accent2/90 text-background group-hover:scale-105 transition-transform"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Start
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    disabled
                    className="border-secondary/40"
                  >
                    <Lock className="h-3 w-3 mr-2" />
                    Locked
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
