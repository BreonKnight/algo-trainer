import { Video, Code, FileText, Book, Check, Clock, Play, Lock, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import type { PatternKey } from "@/components/tutorials/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";
import { cn } from "@/lib/utils";

type Language = "python" | "javascript";

export interface Tutorial {
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
  pseudocode?: string;
  quiz: QuizQuestion[];
}

export interface QuizQuestion {
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

export function AlgorithmTutorial({ algorithm, tutorials }: AlgorithmTutorialProps) {
  console.log("AlgorithmTutorial props:", { algorithm, tutorials });

  const [activeTab, setActiveTab] = useState("video");
  const [currentTutorial, setCurrentTutorial] = useState<Tutorial | null>(tutorials[0] || null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("python");

  // Calculate progress through tutorials
  const calculateProgress = () => {
    if (!tutorials?.length) return 0;
    const completed = tutorials.filter(
      (t) => localStorage.getItem(`tutorial-${t.id}`) === "completed"
    ).length;
    return (completed / tutorials.length) * 100;
  };

  // Check if tutorial is available (prerequisites met)
  const isTutorialAvailable = (
    tutorial: Tutorial
  ): { available: boolean; unmetPrerequisites: string[] } => {
    if (tutorial.prerequisites.length === 0) {
      return { available: true, unmetPrerequisites: [] };
    }

    const unmetPrerequisites = tutorial.prerequisites.filter(
      (prereq) => localStorage.getItem(`tutorial-${prereq}`) !== "completed"
    );

    return {
      available: unmetPrerequisites.length === 0,
      unmetPrerequisites,
    };
  };

  if (!tutorials || tutorials.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] tracking-tight">
          No Tutorial Available
        </h2>
        <p className="text-secondary mb-8 text-lg leading-relaxed max-w-md">
          There are no tutorial available for {algorithm} at this time.
        </p>
        <Button
          variant="outline"
          onClick={() => window.history.back()}
          className="bg-secondary/10 hover:bg-secondary/20 gap-2 text-base"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </Button>
      </div>
    );
  }

  const availability = isTutorialAvailable(currentTutorial!);
  const isAvailable = availability.available;

  return (
    <div className="flex flex-col gap-10 max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] tracking-tight">
            {currentTutorial?.title || algorithm} Tutorial
          </h2>
          <div className="flex items-center gap-6">
            <Tabs
              defaultValue="python"
              onValueChange={(value) => setSelectedLanguage(value as Language)}
            >
              <TabsList className="bg-secondary/20 p-1 rounded-lg">
                <TabsTrigger
                  value="python"
                  className={cn(
                    "data-[state=active]:bg-accent2/20 text-sm font-medium",
                    selectedLanguage === "python" && "bg-accent2/20"
                  )}
                >
                  Python
                </TabsTrigger>
                <TabsTrigger
                  value="javascript"
                  className={cn(
                    "data-[state=active]:bg-accent2/20 text-sm font-medium",
                    selectedLanguage === "javascript" && "bg-accent2/20"
                  )}
                >
                  JavaScript
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex items-center gap-4 bg-secondary/20 px-4 py-2 rounded-xl backdrop-blur-sm">
              <span className="text-sm font-medium text-secondary tracking-wide">Progress</span>
              <Progress value={calculateProgress()} className="w-32 h-2" />
              <span className="text-sm font-medium text-main tracking-wide">
                {Math.round(calculateProgress())}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {!isAvailable ? (
        <Card className="p-8 bg-secondary/10 border-secondary/20 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-6">
            <Lock className="h-8 w-8 text-accent2" />
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)] tracking-tight">
              Tutorial Locked
            </h3>
          </div>
          <p className="mb-8 text-secondary text-lg leading-relaxed">
            Complete these prerequisites to unlock this tutorial:
          </p>
          <ul className="space-y-4 mb-8">
            {availability.unmetPrerequisites.map((prereq) => (
              <li key={prereq} className="flex items-center gap-3 text-secondary text-base">
                <div className="h-2 w-2 rounded-full bg-accent2" />
                <Link to={`/tutorials/${prereq}`}>
                  {tutorials.find((t) => t.id === prereq)?.title ||
                    prereq
                      .replace(/-/g, " ")
                      .split(/\s+/)
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                      .join(" ")}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="bg-secondary/10 hover:bg-secondary/20 gap-2 text-base"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </Card>
      ) : (
        <Tabs
          defaultValue="video"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="w-full justify-start gap-2 bg-secondary/20 p-1 rounded-xl">
            <TabsTrigger
              value="video"
              className="data-[state=active]:bg-accent2/20 gap-2 text-sm font-medium"
            >
              <Video className="h-4 w-4" />
              Video
            </TabsTrigger>
            <TabsTrigger
              value="implementation"
              className="data-[state=active]:bg-accent2/20 gap-2 text-sm font-medium"
            >
              <Code className="h-4 w-4" />
              Implementation
            </TabsTrigger>
            <TabsTrigger
              value="quiz"
              className="data-[state=active]:bg-accent2/20 gap-2 text-sm font-medium"
            >
              <FileText className="h-4 w-4" />
              Quiz
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className="data-[state=active]:bg-accent2/20 gap-2 text-sm font-medium"
            >
              <Book className="h-4 w-4" />
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="video" className="mt-8">
            <Card className="p-8 bg-secondary/10 border-secondary/20 backdrop-blur-sm">
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)] tracking-tight">
                    {currentTutorial?.title}
                  </h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-secondary text-sm font-medium tracking-wide">
                      <Clock className="h-4 w-4" />
                      <span>{currentTutorial?.duration} min</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-accent2/20 text-accent2 text-sm font-medium tracking-wide">
                      {currentTutorial?.difficulty}
                    </div>
                  </div>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src={currentTutorial?.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-secondary leading-relaxed text-lg">
                  {currentTutorial?.description}
                </p>
                <Button
                  onClick={() => {
                    localStorage.setItem(`tutorial-${currentTutorial?.id}`, "completed");
                    setCurrentTutorial(null);
                    setActiveTab("overview");
                  }}
                  className="bg-accent2 hover:bg-accent2/90 text-background gap-2 text-base"
                >
                  <Check className="h-4 w-4" />
                  Complete Tutorial
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="implementation" className="mt-8">
            <Card className="p-8 bg-secondary/10 border-secondary/20 backdrop-blur-sm">
              <div className="flex flex-col gap-8">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)] tracking-tight">
                  {currentTutorial?.title} Implementation
                </h3>
                {currentTutorial?.pseudocode && (
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-main mb-4">Pseudocode</h4>
                    <PseudocodeDisplay code={currentTutorial.pseudocode} />
                  </div>
                )}
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <pre className="language-{selectedLanguage} rounded-lg p-6 bg-secondary/20">
                    <code className="text-sm font-mono leading-relaxed">
                      {currentTutorial?.implementations[selectedLanguage]}
                    </code>
                  </pre>
                </div>
                <Button
                  onClick={() => {
                    localStorage.setItem(`tutorial-${currentTutorial?.id}`, "completed");
                    setCurrentTutorial(null);
                    setActiveTab("overview");
                  }}
                  className="bg-accent2 hover:bg-accent2/90 text-background gap-2 text-base"
                >
                  <Check className="h-4 w-4" />
                  Complete Tutorial
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="mt-8">
            <Card className="p-8 bg-secondary/10 border-secondary/20 backdrop-blur-sm">
              <div className="flex flex-col gap-8">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)] tracking-tight">
                  Knowledge Check
                </h3>
                <div className="space-y-10">
                  {currentTutorial?.quiz.map((question) => (
                    <div key={question.id} className="space-y-6">
                      <p className="font-medium text-xl text-main leading-relaxed">
                        {question.question}
                      </p>
                      <div className="space-y-4">
                        {question.options.map((option, index) => (
                          <div
                            key={index}
                            className={cn(
                              "p-4 rounded-lg cursor-pointer transition-all duration-200 text-base",
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
                          <p className="text-base text-main leading-relaxed">
                            <span className="font-semibold text-accent2">Explanation:</span>{" "}
                            {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {!showResults ? (
                  <Button
                    className="bg-accent2 hover:bg-accent2/90 text-background text-base"
                    onClick={() => setShowResults(true)}
                  >
                    Submit Quiz
                  </Button>
                ) : (
                  <Button
                    className="bg-accent3 hover:bg-accent3/90 text-background gap-2 text-base"
                    onClick={() => {
                      localStorage.setItem(`tutorial-${currentTutorial?.id}`, "completed");
                      setCurrentTutorial(null);
                      setActiveTab("overview");
                    }}
                  >
                    <Check className="h-4 w-4" />
                    Complete Tutorial
                  </Button>
                )}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="mt-8">
            <Card className="p-8 bg-secondary/10 border-secondary/20 backdrop-blur-sm">
              <div className="flex flex-col gap-8">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)] tracking-tight">
                  Additional Resources
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4 p-6 rounded-lg bg-secondary/10 border border-secondary/20">
                    <Book className="h-6 w-6 mt-1 text-accent2" />
                    <div>
                      <h4 className="font-semibold text-xl mb-4 tracking-tight">Further Reading</h4>
                      <ul className="space-y-4 text-secondary">
                        <li className="flex items-center gap-3 text-base">
                          <div className="h-2 w-2 rounded-full bg-accent2" />
                          Introduction to Algorithms by CLRS
                        </li>
                        <li className="flex items-center gap-3 text-base">
                          <div className="h-2 w-2 rounded-full bg-accent2" />
                          Algorithm Design Manual by Steven Skiena
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-lg bg-secondary/10 border border-secondary/20">
                    <Play className="h-6 w-6 mt-1 text-accent3" />
                    <div>
                      <h4 className="font-semibold text-xl mb-4 tracking-tight">Related Videos</h4>
                      <ul className="space-y-4 text-secondary">
                        <li className="flex items-center gap-3 text-base">
                          <div className="h-2 w-2 rounded-full bg-accent3" />
                          Advanced {currentTutorial?.title} Techniques
                        </li>
                        <li className="flex items-center gap-3 text-base">
                          <div className="h-2 w-2 rounded-full bg-accent3" />
                          {currentTutorial?.title} Optimization Strategies
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
