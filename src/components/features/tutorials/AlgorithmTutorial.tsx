import { Video, Code, FileText, Book, Check, Clock, Play, Lock, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "@/components/theme/use-theme";
import { Background } from "@/components/ui/background";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { useUpdateGamificationProgress } from "@/hooks/useUpdateGamificationProgress";
import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

import type { PatternKey } from "@algo-trainer/shared/types/algorithm-types";
import { cn } from "@algo-trainer/shared/utils/common";

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

// Theme-aware gradient map for headings
const headingGradients: Record<string, string> = {
  snes: "linear-gradient(90deg, #3498db 0%, #e67e22 100%)",
  dracula: "linear-gradient(90deg, #ff79c6 0%, #8be9fd 100%)",
  nord: "linear-gradient(90deg, #5e81ac 0%, #a3be8c 100%)",
  light: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)",
  solarized: "linear-gradient(90deg, #b58900 0%, #268bd2 100%)",
  ps2: "linear-gradient(90deg, #003087 0%, #00a4e4 100%)",
  re2: "linear-gradient(90deg, #8b0000 0%, #ffd700 100%)",
  mh: "linear-gradient(90deg, #2c3e50 0%, #e67e22 100%)",
  "kingdom-hearts": "linear-gradient(90deg, #1e90ff 0%, #ffd700 100%)",
  fortnite: "linear-gradient(90deg, #ffd700 0%, #00bfff 100%)",
};

// Style variables for tabs and progress
const tabBase =
  "px-5 py-2 rounded-full font-semibold text-base transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent2/60";
const tabActive = "bg-accent2/90 text-white shadow-md scale-105";
const tabInactive = "bg-secondary/10 text-accent2 hover:bg-accent2/10";
const mainTabBase =
  "px-6 py-2 rounded-full font-bold text-base transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent2/60";
const mainTabActive = "bg-accent3/90 text-white shadow-lg scale-105";
const mainTabInactive = "bg-secondary/10 text-accent3 hover:bg-accent3/10";
const progressBarClass =
  "w-32 h-2 rounded-full bg-secondary/30 [&>div]:rounded-full [&>div]:bg-accent2/90";

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

export function AlgorithmTutorial({ algorithm, tutorials }: AlgorithmTutorialProps) {
  const { theme } = useTheme();
  const { trackTutorialCompletion } = useUpdateGamificationProgress();
  console.log("AlgorithmTutorial props:", { algorithm, tutorials });

  const [activeTab, setActiveTab] = useState("video");
  const [currentTutorial] = useState<Tutorial | null>(() => {
    const firstAvailable = tutorials.find((t) => isTutorialAvailable(t).available);
    return firstAvailable || null;
  });
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

  // Get theme-specific card styles

  // Force all quiz text to be black for maximum readability
  const quizTextColor = "text-black";

  // Get theme-aware gradient for headings
  const headingGradient =
    headingGradients[theme] || "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)";

  const handleQuizComplete = async () => {
    if (currentTutorial) {
      // Calculate quiz score
      const totalQuestions = currentTutorial.quiz.length;
      const correctAnswers = currentTutorial.quiz.filter(
        (q) => quizAnswers[q.id] === q.correctAnswer
      ).length;
      const score = (correctAnswers / totalQuestions) * 100;

      // Track tutorial completion with gamification
      await trackTutorialCompletion(currentTutorial.id, score);

      // Mark tutorial as completed in localStorage
      localStorage.setItem(`tutorial-${currentTutorial.id}`, "completed");
    }
  };

  if (!tutorials || tutorials.length === 0) {
    return (
      <TooltipProvider>
        <Background>
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
        </Background>
      </TooltipProvider>
    );
  }

  const availability = currentTutorial
    ? isTutorialAvailable(currentTutorial)
    : { available: false, unmetPrerequisites: [] };
  const isAvailable = availability.available;

  return (
    <TooltipProvider>
      <Background>
        <div className="flex flex-col gap-10 max-w-6xl mx-auto px-4 py-8">
          <div className="mb-6">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/tutorials" tabIndex={-1}>
                  <Button
                    variant="outline"
                    className="gap-2 text-base px-6 py-3 rounded-full font-semibold shadow-lg bg-gradient-to-r from-accent2/20 to-accent3/20 border-0 hover:from-accent2/40 hover:to-accent3/40 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 focus:ring-2 focus:ring-accent2/40"
                    style={{ color: "var(--accent2)" }}
                  >
                    <ArrowLeft className="h-5 w-5" />
                    <span className="tracking-wide">Back to Tutorials</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom">Back to all tutorials</TooltipContent>
            </Tooltip>
          </div>
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
                  <TabsList className="bg-secondary/20 p-1 rounded-full shadow-sm flex gap-2">
                    <TabsTrigger
                      value="python"
                      className={cn(
                        tabBase,
                        selectedLanguage === "python" ? tabActive : tabInactive
                      )}
                    >
                      Python
                    </TabsTrigger>
                    <TabsTrigger
                      value="javascript"
                      className={cn(
                        tabBase,
                        selectedLanguage === "javascript" ? tabActive : tabInactive
                      )}
                    >
                      JavaScript
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                <div className="flex items-center gap-4 bg-secondary/20 px-4 py-2 rounded-xl backdrop-blur-sm mt-2">
                  <span className="text-sm font-semibold text-accent2 tracking-wide">Progress</span>
                  <Progress value={calculateProgress()} className={progressBarClass} />
                  <span className="text-sm font-semibold text-accent3 tracking-wide">
                    {Math.round(calculateProgress())}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {!isAvailable ? (
            <Card className="bg-background/95 backdrop-blur-sm border border-accent2/20 p-8">
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
              <Button variant="outline" onClick={() => window.history.back()}>
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
              <TabsList className="w-full justify-start gap-3 bg-secondary/20 p-2 rounded-full shadow-sm flex">
                <TabsTrigger
                  value="video"
                  className={cn(
                    mainTabBase,
                    activeTab === "video" ? mainTabActive : mainTabInactive
                  )}
                >
                  <Video className="h-4 w-4 mr-1" />
                  Video
                </TabsTrigger>
                <TabsTrigger
                  value="implementation"
                  className={cn(
                    mainTabBase,
                    activeTab === "implementation" ? mainTabActive : mainTabInactive
                  )}
                >
                  <Code className="h-4 w-4 mr-1" />
                  Implementation
                </TabsTrigger>
                <TabsTrigger
                  value="quiz"
                  className={cn(
                    mainTabBase,
                    activeTab === "quiz" ? mainTabActive : mainTabInactive
                  )}
                >
                  <FileText className="h-4 w-4 mr-1" />
                  Quiz
                </TabsTrigger>
                <TabsTrigger
                  value="resources"
                  className={cn(
                    mainTabBase,
                    activeTab === "resources" ? mainTabActive : mainTabInactive
                  )}
                >
                  <Book className="h-4 w-4 mr-1" />
                  Resources
                </TabsTrigger>
              </TabsList>

              <TabsContent value="video" className="mt-8">
                <Card className="bg-background/95 backdrop-blur-sm border border-accent2/20 p-8">
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
                      }}
                      variant="default"
                    >
                      <Check className="h-4 w-4" />
                      Complete Tutorial
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="implementation" className="mt-8">
                <Card className="bg-background/95 backdrop-blur-sm border border-accent2/20 p-8">
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
                      }}
                      variant="default"
                    >
                      <Check className="h-4 w-4" />
                      Complete Tutorial
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="quiz" className="mt-8">
                <Card className="bg-background/95 backdrop-blur-sm border border-accent2/20 p-8">
                  <div className="flex flex-col gap-8">
                    <h3
                      className="text-3xl font-bold bg-clip-text text-transparent tracking-tight"
                      style={{ backgroundImage: headingGradient }}
                    >
                      Vibe Check
                    </h3>
                    {/* Progress Indicator */}
                    {currentTutorial && currentTutorial.quiz && currentTutorial.quiz.length > 1 && (
                      <div className="flex items-center gap-4 mb-4">
                        <Progress
                          value={
                            (Object.keys(quizAnswers).length / currentTutorial.quiz.length) * 100
                          }
                          className="w-40 h-2"
                        />
                        <span
                          className="inline-block rounded-full bg-accent3/90 text-accent2 font-extrabold px-4 py-1 text-base shadow-xl drop-shadow-lg border-2 border-accent2 tracking-widest uppercase transition-transform duration-150 hover:scale-105 cursor-pointer"
                          style={{ textShadow: "0 2px 6px rgba(0,0,0,0.18)" }}
                        >
                          {Object.keys(quizAnswers).length} / {currentTutorial.quiz.length} answered
                        </span>
                      </div>
                    )}
                    <div className="space-y-10">
                      {currentTutorial &&
                        currentTutorial.quiz &&
                        currentTutorial.quiz.map((question, qIdx) => (
                          <div
                            key={question.id}
                            className="space-y-6 rounded-2xl border border-[var(--card-border)] shadow-lg bg-white/80 dark:bg-background/80 p-6 transition-all duration-300"
                          >
                            <p
                              className={cn(
                                "font-semibold text-lg text-main leading-relaxed mb-2 flex items-center gap-2",
                                quizTextColor
                              )}
                            >
                              <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent2)] to-[var(--accent3)] text-white flex items-center justify-center font-bold mr-2">
                                {qIdx + 1}
                              </span>
                              {question.question}
                            </p>
                            <div className="space-y-3">
                              {question.options.map((option, index) => {
                                const isSelected = quizAnswers[question.id] === index;
                                const isCorrect = showResults && index === question.correctAnswer;
                                const isIncorrect =
                                  showResults && isSelected && index !== question.correctAnswer;
                                return (
                                  <label
                                    key={index}
                                    className={cn(
                                      "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 text-base group",
                                      quizTextColor,
                                      isSelected &&
                                        !showResults &&
                                        "border-accent2 bg-accent2/10 shadow-md scale-[1.03]",
                                      isCorrect &&
                                        "border-green-500 bg-green-100/80 dark:bg-green-500/10 scale-[1.03]",
                                      isIncorrect &&
                                        "border-red-500 bg-red-100/80 dark:bg-red-500/10 scale-[1.03]",
                                      !isSelected &&
                                        !isCorrect &&
                                        !isIncorrect &&
                                        "border-[var(--card-border)] hover:bg-secondary/10"
                                    )}
                                    style={{
                                      transition: "transform 0.15s cubic-bezier(.4,2,.6,1)",
                                    }}
                                  >
                                    <input
                                      type="radio"
                                      name={`quiz-${question.id}`}
                                      checked={isSelected}
                                      disabled={showResults}
                                      onChange={() => {
                                        if (!showResults) {
                                          setQuizAnswers({
                                            ...quizAnswers,
                                            [question.id]: index,
                                          });
                                        }
                                      }}
                                      className="form-radio h-5 w-5 text-accent2 border-accent2 focus:ring-accent2 transition-all duration-150"
                                    />
                                    <span className={cn("flex-1", quizTextColor)}>{option}</span>
                                    {showResults && isCorrect && (
                                      <span className="ml-2 text-green-400 font-semibold">
                                        Correct
                                      </span>
                                    )}
                                    {showResults && isIncorrect && (
                                      <span className="ml-2 text-red-400 font-semibold">
                                        Your Answer
                                      </span>
                                    )}
                                  </label>
                                );
                              })}
                            </div>
                            {showResults && (
                              <div className="mt-4 p-4 rounded-lg bg-secondary/10 border border-secondary/20 animate-fade-in">
                                <p
                                  className={cn(
                                    "text-base text-main leading-relaxed",
                                    quizTextColor
                                  )}
                                >
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
                        variant="secondary"
                        className="mt-4"
                        onClick={() => {
                          setShowResults(true);
                          handleQuizComplete();
                        }}
                        disabled={
                          !currentTutorial ||
                          !currentTutorial.quiz ||
                          Object.keys(quizAnswers).length !== currentTutorial.quiz.length
                        }
                      >
                        Submit Quiz
                      </Button>
                    ) : (
                      <>
                        <Button
                          variant="default"
                          className="mt-4"
                          onClick={() => {
                            if (currentTutorial) {
                              localStorage.setItem(`tutorial-${currentTutorial.id}`, "completed");
                            }
                          }}
                        >
                          <Check className="h-4 w-4" />
                          Complete Tutorial
                        </Button>
                        <Button
                          variant="secondary"
                          className="mt-2 ml-2"
                          onClick={() => {
                            setQuizAnswers({});
                            setShowResults(false);
                          }}
                        >
                          Retry Quiz
                        </Button>
                      </>
                    )}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="mt-8">
                <Card className="bg-background/95 backdrop-blur-sm border border-accent2/20 p-8">
                  <div className="flex flex-col gap-8">
                    <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)] tracking-tight">
                      Additional Resources
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex items-start gap-4 p-6 rounded-lg bg-secondary/10 border border-secondary/20">
                        <Book className="h-6 w-6 mt-1 text-accent2" />
                        <div>
                          <h4 className="font-semibold text-xl mb-4 tracking-tight">
                            Further Reading
                          </h4>
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
                          <h4 className="font-semibold text-xl mb-4 tracking-tight">
                            Related Videos
                          </h4>
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
      </Background>
    </TooltipProvider>
  );
}
