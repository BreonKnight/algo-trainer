import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Progress } from "../ui/progress";
import { Check, Lock, Play, Book, Video, FileText, Code } from "lucide-react";
import { PatternKey } from "./types";

interface Tutorial {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: number;
  prerequisites: string[];
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
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{algorithm} Tutorials</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm">Progress:</span>
          <Progress value={calculateProgress()} className="w-32" />
          <span className="text-sm">{Math.round(calculateProgress())}%</span>
        </div>
      </div>

      {currentTutorial ? (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="video">Video</TabsTrigger>
            <TabsTrigger value="quiz">Quiz</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="video" className="mt-4">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                {currentTutorial.title}
              </h3>
              <div className="aspect-video mb-4">
                <iframe
                  src={currentTutorial.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mb-4">{currentTutorial.description}</p>
              <Button onClick={completeTutorial}>Complete Tutorial</Button>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="mt-4">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">Quiz</h3>
              <div className="space-y-6">
                {currentTutorial.quiz.map((question) => (
                  <div key={question.id} className="space-y-2">
                    <p className="font-medium">{question.question}</p>
                    <div className="space-y-1">
                      {question.options.map((option, index) => (
                        <div
                          key={index}
                          className={`p-2 rounded cursor-pointer ${
                            quizAnswers[question.id] === index
                              ? "bg-primary/20"
                              : "hover:bg-secondary/20"
                          } ${
                            showResults
                              ? index === question.correctAnswer
                                ? "bg-green-500/20"
                                : quizAnswers[question.id] === index
                                ? "bg-red-500/20"
                                : ""
                              : ""
                          }`}
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
                      <p className="text-sm mt-2">
                        <span className="font-medium">Explanation:</span>{" "}
                        {question.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              {!showResults ? (
                <Button className="mt-4" onClick={submitQuiz}>
                  Submit Quiz
                </Button>
              ) : (
                <Button className="mt-4" onClick={completeTutorial}>
                  Complete Tutorial
                </Button>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="mt-4">
            <Card className="p-4">
              <h3 className="text-lg font-semibold mb-4">
                Additional Resources
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Book className="h-5 w-5 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Further Reading</h4>
                    <ul className="list-disc list-inside text-sm mt-1">
                      <li>Introduction to Algorithms by CLRS</li>
                      <li>Algorithm Design Manual by Steven Skiena</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Play className="h-5 w-5 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Related Videos</h4>
                    <ul className="list-disc list-inside text-sm mt-1">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockTutorials.map((tutorial) => (
            <Card key={tutorial.id} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{tutorial.title}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    tutorial.difficulty === "beginner"
                      ? "bg-green-500/20 text-green-500"
                      : tutorial.difficulty === "intermediate"
                      ? "bg-yellow-500/20 text-yellow-500"
                      : "bg-red-500/20 text-red-500"
                  }`}
                >
                  {tutorial.difficulty}
                </span>
              </div>
              <p className="text-sm mb-4">{tutorial.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs">{tutorial.duration} min</span>
                {isTutorialAvailable(tutorial) ? (
                  <Button size="sm" onClick={() => startTutorial(tutorial)}>
                    Start
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" disabled>
                    <Lock className="h-3 w-3 mr-1" />
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
