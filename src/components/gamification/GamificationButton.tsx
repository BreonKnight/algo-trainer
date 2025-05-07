import { useState, useEffect } from "react";
import { Trophy, BarChart } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import GamificationService, {
  UserProgress,
  Badge,
  AlgorithmProgress,
} from "../../lib/gamification";
import { useTheme } from "@/components/theme/use-theme";
import { Link } from "react-router-dom";

const themeStyles = {
  dracula: {
    button: "bg-accent2/20 hover:bg-accent2/30 text-accent2",
    dialog: "bg-background/95 backdrop-blur-sm border border-accent2/20",
    header: "border-b border-accent2/20",
    title: "text-accent2 font-bold",
    card: "bg-background/30 backdrop-blur-sm border border-accent2/10",
    text: {
      primary: "text-main/90",
      secondary: "text-main/70",
      muted: "text-main/50",
    },
    badge: {
      unlocked: "bg-background/30 border border-accent2/40 backdrop-blur-sm",
      locked: "bg-background/20 border border-secondary/40 backdrop-blur-sm",
      icon: "text-accent2",
    },
    progress: {
      bg: "bg-background/30",
      bar: "bg-accent2",
    },
  },
  light: {
    button: "bg-accent/10 hover:bg-accent/20 text-accent",
    dialog: "bg-background/95 backdrop-blur-sm border border-accent/10 shadow-xl",
    header: "border-b border-accent/10",
    title: "text-accent font-bold",
    card: "bg-background/30 shadow-sm backdrop-blur-sm border border-accent/10",
    text: {
      primary: "text-accent-foreground/90",
      secondary: "text-accent-foreground/70",
      muted: "text-accent-foreground/50",
    },
    badge: {
      unlocked: "bg-background/30 border border-accent/30 shadow-sm backdrop-blur-sm",
      locked: "bg-background/20 border border-accent/10 backdrop-blur-sm",
      icon: "text-accent",
    },
    progress: {
      bg: "bg-background/30",
      bar: "bg-accent",
    },
  },
  dark: {
    button: "bg-accent2/20 hover:bg-accent2/30 text-main",
    dialog: "bg-background/95 backdrop-blur-sm border border-secondary/20",
    header: "border-b border-secondary/20",
    title: "text-accent2 font-bold",
    card: "bg-background/30 backdrop-blur-sm border border-accent2/10",
    text: {
      primary: "text-main/90",
      secondary: "text-main/70",
      muted: "text-main/50",
    },
    badge: {
      unlocked: "bg-background/30 border border-accent2/40 backdrop-blur-sm",
      locked: "bg-background/20 border border-secondary/40 backdrop-blur-sm",
      icon: "text-accent2",
    },
    progress: {
      bg: "bg-background/30",
      bar: "bg-accent2",
    },
  },
  solarized: {
    button: "bg-accent/10 hover:bg-accent/20 text-accent",
    dialog: "bg-background/95 backdrop-blur-sm border border-accent/10",
    header: "border-b border-accent/10",
    title: "text-accent font-bold",
    card: "bg-background/30 backdrop-blur-sm border border-accent/10",
    text: {
      primary: "text-accent-foreground/90",
      secondary: "text-accent-foreground/70",
      muted: "text-accent-foreground/50",
    },
    badge: {
      unlocked: "bg-background/30 border border-accent/30 backdrop-blur-sm",
      locked: "bg-background/20 border border-accent/10 backdrop-blur-sm",
      icon: "text-accent",
    },
    progress: {
      bg: "bg-background/30",
      bar: "bg-accent",
    },
  },
  nord: {
    button: "bg-accent/20 hover:bg-accent/30 text-accent",
    dialog: "bg-background/95 backdrop-blur-sm border border-accent/20",
    header: "border-b border-accent/20",
    title: "text-accent font-bold",
    card: "bg-background/30 backdrop-blur-sm border border-accent/10",
    text: {
      primary: "text-main/90",
      secondary: "text-main/70",
      muted: "text-main/50",
    },
    badge: {
      unlocked: "bg-background/30 border border-accent/40 backdrop-blur-sm",
      locked: "bg-background/20 border border-secondary/40 backdrop-blur-sm",
      icon: "text-accent",
    },
    progress: {
      bg: "bg-background/30",
      bar: "bg-accent",
    },
  },
  snes: {
    button: "bg-accent/20 hover:bg-accent/30 text-accent",
    dialog: "bg-background/95 backdrop-blur-sm border border-accent/20 shadow-xl",
    header: "border-b border-accent/20",
    title: "text-accent font-bold",
    card: "bg-background/30 shadow-sm backdrop-blur-sm border border-accent/10",
    text: {
      primary: "text-accent-foreground/90",
      secondary: "text-accent-foreground/70",
      muted: "text-accent-foreground/50",
    },
    badge: {
      unlocked: "bg-background/30 border border-accent/40 backdrop-blur-sm",
      locked: "bg-background/20 border border-accent/10 backdrop-blur-sm",
      icon: "text-accent",
    },
    progress: {
      bg: "bg-background/30",
      bar: "bg-accent",
    },
  },
  ps2: {
    button: "bg-accent2/20 hover:bg-accent2/30 text-accent2",
    dialog: "bg-background/95 backdrop-blur-sm border border-accent2/20",
    header: "border-b border-accent2/20",
    title: "text-accent2 font-bold",
    card: "bg-background/30 backdrop-blur-sm border border-accent2/10",
    text: {
      primary: "text-main/90",
      secondary: "text-main/70",
      muted: "text-main/50",
    },
    badge: {
      unlocked: "bg-background/30 border border-accent2/40 backdrop-blur-sm",
      locked: "bg-background/20 border border-secondary/40 backdrop-blur-sm",
      icon: "text-accent2",
    },
    progress: {
      bg: "bg-background/30",
      bar: "bg-accent2",
    },
  },
  re2: {
    button: "bg-accent2/20 hover:bg-accent2/30 text-accent2",
    dialog: "bg-background/95 backdrop-blur-sm border border-accent2/20",
    header: "border-b border-accent2/20",
    title: "text-accent2 font-bold",
    card: "bg-background/30 backdrop-blur-sm border border-accent2/10",
    text: {
      primary: "text-main/90",
      secondary: "text-main/70",
      muted: "text-main/50",
    },
    badge: {
      unlocked: "bg-background/30 border border-accent2/40 backdrop-blur-sm",
      locked: "bg-background/20 border border-secondary/40 backdrop-blur-sm",
      icon: "text-accent2",
    },
    progress: {
      bg: "bg-background/30",
      bar: "bg-accent2",
    },
  },
  mh: {
    button: "bg-accent2/20 hover:bg-accent2/30 text-accent2",
    dialog: "bg-background/95 backdrop-blur-sm border border-accent2/20",
    header: "border-b border-accent2/20",
    title: "text-accent2 font-bold",
    card: "bg-background/30 backdrop-blur-sm border border-accent2/10",
    text: {
      primary: "text-main/90",
      secondary: "text-main/70",
      muted: "text-main/50",
    },
    badge: {
      unlocked: "bg-background/30 border border-accent2/40 backdrop-blur-sm",
      locked: "bg-background/20 border border-secondary/40 backdrop-blur-sm",
      icon: "text-accent2",
    },
    progress: {
      bg: "bg-background/30",
      bar: "bg-accent2",
    },
  },
};

export function GamificationButton() {
  const [showPanel, setShowPanel] = useState(false);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const { theme } = useTheme();

  // Default to dracula theme if current theme is not in themeStyles
  const styles = themeStyles[theme as keyof typeof themeStyles] || themeStyles.dracula;

  useEffect(() => {
    // Get initial progress
    const gamificationService = GamificationService.getInstance();
    setUserProgress(gamificationService.getUserProgress());

    // Add listener for progress updates
    const handleProgressUpdate = (progress: UserProgress) => {
      setUserProgress(progress);
    };

    gamificationService.addListener(handleProgressUpdate);

    // Clean up listener on unmount
    return () => {
      gamificationService.removeListener(handleProgressUpdate);
    };
  }, []);

  if (!userProgress) return null;

  return (
    <>
      {/* Floating button in the corner */}
      <Button
        onClick={() => setShowPanel(true)}
        className={`group overflow-hidden rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200
          bg-white/5 border border-accent/30 hover:bg-accent/10 hover:scale-105 focus:outline-none focus:ring-0 shadow-none z-[9999]`}
        style={{
          backdropFilter: "blur(8px)",
        }}
        aria-label="View Progress"
      >
        <Trophy
          className={
            `w-8 h-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)] transition-colors duration-200 ` +
            (theme === "dracula" || theme === "ps2" || theme === "re2" || theme === "mh"
              ? "text-accent2 group-hover:text-accent"
              : "text-yellow-200 group-hover:text-yellow-300")
          }
        />
      </Button>

      {/* Gamification Panel */}
      <Dialog open={showPanel} onOpenChange={setShowPanel}>
        <DialogContent
          className={`max-w-2xl max-h-[80vh] ${styles.dialog}`}
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px)",
            animation: "modalSlideIn 0.3s ease-out",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
          }}
          aria-describedby="gamification-dialog-description"
        >
          <DialogHeader className={`${styles.header} pb-4`}>
            <DialogTitle className={`text-2xl font-bold ${styles.title} tracking-tight`}>
              Your Progress
            </DialogTitle>
            <p id="gamification-dialog-description" className="sr-only">
              View your learning progress, achievements, and algorithm mastery
            </p>
          </DialogHeader>

          <div className="overflow-y-auto max-h-[calc(80vh-8rem)] pr-2 custom-scrollbar">
            {/* User Stats Section */}
            <div className="mb-8">
              <h3 className={`text-lg font-semibold mb-3 ${styles.text.primary} tracking-wide`}>
                Your Stats
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {["Level", "Points", "Streak"].map((stat) => (
                  <div
                    key={stat}
                    className={`p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10
                      transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-white/10`}
                    style={{
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className={`text-sm font-medium ${styles.text.secondary} tracking-wide`}>
                      {stat}
                    </div>
                    <div className={`text-3xl font-bold ${styles.text.primary} mt-1`}>
                      {stat === "Level" && userProgress.level}
                      {stat === "Points" && userProgress.points}
                      {stat === "Streak" && `${userProgress.streak} days`}
                    </div>
                    {stat === "Level" && (
                      <div className={`text-xs mt-2 ${styles.text.muted} tracking-wide`}>
                        {userProgress.experience} / 1000 XP
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mb-8">
              <h3 className={`text-lg font-semibold mb-3 ${styles.text.primary} tracking-wide`}>
                Achievements
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {userProgress.badges.map((badge: Badge) => (
                  <div
                    key={badge.id}
                    className={`p-4 rounded-xl text-center backdrop-blur-md bg-white/5 border border-white/10
                      transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-white/10
                      ${badge.unlocked ? "border-accent2/40" : "border-secondary/40"}`}
                    style={{
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      className={`text-3xl mb-2 transition-transform duration-300 hover:scale-110
                        ${badge.unlocked ? styles.badge.icon : styles.text.secondary}`}
                    >
                      {badge.icon}
                    </div>
                    <div className={`text-sm font-medium ${styles.text.primary} tracking-wide`}>
                      {badge.name}
                    </div>
                    {!badge.unlocked && (
                      <div className={`text-xs mt-2 ${styles.text.muted} tracking-wide`}>
                        {badge.progress}/{badge.maxProgress}
                      </div>
                    )}
                    {badge.unlocked && badge.dateEarned && (
                      <div className={`text-xs mt-2 ${styles.text.muted} tracking-wide`}>
                        {new Date(badge.dateEarned).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Algorithm Progress Section */}
            <div className="mb-6">
              <h3 className={`text-lg font-semibold mb-3 ${styles.text.primary} tracking-wide`}>
                Algorithm Progress
              </h3>
              <div className="space-y-3">
                {userProgress.algorithmProgress.map((algorithm: AlgorithmProgress) => (
                  <div key={algorithm.id} className="flex items-center gap-4">
                    <div className={`w-24 text-sm ${styles.text.primary} tracking-wide`}>
                      {algorithm.name}
                    </div>
                    <div
                      className={`flex-1 h-2.5 backdrop-blur-md bg-white/5 rounded-full overflow-hidden border border-white/10`}
                      style={{
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div
                        className={`h-full ${styles.progress.bar} rounded-full transition-all duration-500`}
                        style={{
                          width: `${(algorithm.progress / algorithm.maxProgress) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <div
                      className={`w-12 text-right text-sm ${styles.text.secondary} tracking-wide`}
                    >
                      {algorithm.progress}/{algorithm.maxProgress}
                    </div>
                  </div>
                ))}
                {userProgress.algorithmProgress.length === 0 && (
                  <div className={`text-center py-6 ${styles.text.muted} tracking-wide`}>
                    Try some algorithms to track your progress!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Progress Component Link */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <Link to="/progress" onClick={() => setShowPanel(false)}>
              <Button
                variant="outline"
                className={`w-full flex items-center justify-center gap-2 backdrop-blur-md bg-white/5 border border-white/10
                  transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-white/10`}
                style={{
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                <BarChart className="h-4 w-4" />
                <span className="tracking-wide">View Progress Component Examples</span>
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
