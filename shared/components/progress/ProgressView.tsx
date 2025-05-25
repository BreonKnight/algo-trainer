import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Activity, Target, ChevronRight } from "lucide-react";
import { useState, useCallback, memo } from "react";

import { useTheme } from "@/components/theme/use-theme";
import { AnimatedHeader } from "@/components/ui/AnimatedHeader";
import { Background } from "@/components/ui/background";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { ThemedCard } from "@/components/ui/themed-card";
import { cn } from '@algo-trainer/shared/utils/common';

const ProgressView = memo(function ProgressView() {
  const [progressValue, setProgressValue] = useState(50);
  const { theme } = useTheme();

  const handleProgressChange = useCallback((value: number[]) => {
    setProgressValue(value[0]);
  }, []);

  return (
    <Background>
      <div className="container mx-auto p-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="space-y-2 flex-1">
              <AnimatedHeader
                title="Progress Dashboard"
                subtitle="Track your learning journey and achievements"
                titleClassName="bg-gradient-to-r from-accent to-accent2 mb-0 md:mb-0"
                subtitleClassName="text-base md:text-lg font-semibold text-accent tracking-wide drop-shadow-sm mt-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Level {progressValue}</span>
            </div>
          </div>

          {/* Progress Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <ThemedCard
              className={cn(
                theme !== "snes" ? "hover:scale-105 border-accent/10 hover:border-accent/20" : ""
              )}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Current Level
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{progressValue}</div>
                <Progress value={progressValue} className="mt-2" />
                <div className="text-xs text-muted-foreground mt-1">
                  {100 - progressValue}% to next level
                </div>
              </CardContent>
            </ThemedCard>

            <ThemedCard
              className={cn(
                theme !== "snes" ? "hover:scale-105 border-accent/10 hover:border-accent/20" : ""
              )}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Day Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <div className="text-sm text-muted-foreground mt-1">Keep it up!</div>
                <div className="text-xs text-accent mt-1">🔥 7 days strong</div>
              </CardContent>
            </ThemedCard>

            <ThemedCard
              className={cn(
                theme !== "snes" ? "hover:scale-105 border-accent/10 hover:border-accent/20" : ""
              )}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,250</div>
                <div className="text-sm text-muted-foreground mt-1">Total earned</div>
                <div className="text-xs text-accent mt-1">⭐ 1,250 points collected</div>
              </CardContent>
            </ThemedCard>

            <ThemedCard
              className={cn(
                theme !== "snes" ? "hover:scale-105 border-accent/10 hover:border-accent/20" : ""
              )}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Algorithms Mastered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground mt-1">Out of 24</div>
                <div className="text-xs text-accent mt-1">🏆 50% complete</div>
              </CardContent>
            </ThemedCard>
          </motion.div>

          {/* Interactive Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <ThemedCard className={cn(theme !== "snes" ? "border-accent/10" : "")}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  <CardTitle>Progress Overview</CardTitle>
                </div>
                <CardDescription>Track your learning progress and achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Current Progress</span>
                    <span className="text-sm text-muted-foreground">{progressValue}%</span>
                  </div>
                  <Progress value={progressValue} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Adjust Progress</span>
                    <span className="text-sm text-muted-foreground">{progressValue}%</span>
                  </div>
                  <Slider
                    value={[progressValue]}
                    onValueChange={handleProgressChange}
                    min={0}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </ThemedCard>

            <ThemedCard className={cn(theme !== "snes" ? "border-accent/10" : "")}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <CardTitle>Recent Achievements</CardTitle>
                </div>
                <CardDescription>Your latest milestones and accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "QuickSort Mastered", progress: 100 },
                    { title: "Binary Search Practice", progress: 75 },
                    { title: "Graph Traversals", progress: 50 },
                  ].map((achievement, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{achievement.title}</span>
                        <span className="text-sm text-muted-foreground">
                          {achievement.progress}%
                        </span>
                      </div>
                      <Progress value={achievement.progress} className="h-1" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </ThemedCard>
          </motion.div>

          {/* Progress Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-4xl mx-auto"
          >
            <ThemedCard
              className={cn(
                theme !== "snes" ? "rounded-2xl shadow-lg border-accent/10" : "rounded-2xl"
              )}
            >
              <CardHeader>
                <div className="space-y-1 text-center">
                  <CardTitle className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Progress Tips
                  </CardTitle>
                  <p className="text-muted-foreground text-base md:text-lg">
                    Maximize your learning efficiency with these strategies
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:gap-8">
                  {[
                    {
                      icon: <Target className="h-7 w-7 text-accent" />,
                      title: "Set Daily Goals",
                      desc: "Break down your learning into manageable daily targets",
                      link: "https://todoist.com",
                      linkText: "Try Todoist",
                    },
                    {
                      icon: <Activity className="h-7 w-7 text-accent2" />,
                      title: "Track Progress",
                      desc: "Monitor your advancement and celebrate milestones",
                      link: "https://notion.so",
                      linkText: "Use Notion",
                    },
                    {
                      icon: <ChevronRight className="h-7 w-7 text-accent" />,
                      title: "Stay Consistent",
                      desc: "Maintain a regular practice schedule for optimal results",
                      link: "https://forestapp.cc",
                      linkText: "Try Forest",
                    },
                    {
                      icon: <Activity className="h-7 w-7 text-accent" />,
                      title: "Exercise Regularly",
                      desc: "Keep your mind sharp with regular physical activity",
                      link: "https://www.strava.com",
                      linkText: "Track with Strava",
                    },
                  ].map((tip, index) => (
                    <motion.div
                      key={index}
                      className={cn(
                        "flex items-start gap-4 p-4 rounded-lg border transition-all duration-200",
                        theme === "snes"
                          ? "bg-[var(--card-bg)] border-[var(--card-border)] hover:bg-[var(--card-hover)]"
                          : "bg-background/90 border-accent/10 hover:bg-background/95"
                      )}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div
                        className={cn(
                          "p-2 rounded-lg",
                          theme === "snes" ? "bg-[var(--accent)]/10" : "bg-accent/10"
                        )}
                      >
                        {tip.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1 text-foreground">{tip.title}</h3>
                        <p className="text-sm mb-2 text-muted-foreground">{tip.desc}</p>
                        <a
                          href={tip.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "text-sm transition-colors duration-200 flex items-center gap-1",
                            theme === "snes"
                              ? "text-[var(--accent)] hover:text-[var(--accent2)]"
                              : "text-accent hover:text-accent2"
                          )}
                        >
                          {tip.linkText}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </ThemedCard>
          </motion.div>
        </div>
      </div>
    </Background>
  );
});

export default ProgressView;
