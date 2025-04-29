import { useState, useEffect } from "react";
import { Trophy, BarChart } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import GamificationService, { UserProgress } from "../lib/gamification";
import { useTheme } from "./ThemeProvider";
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
    dialog:
      "bg-background/95 backdrop-blur-sm border border-accent/10 shadow-xl",
    header: "border-b border-accent/10",
    title: "text-accent font-bold",
    card: "bg-background/30 shadow-sm backdrop-blur-sm border border-accent/10",
    text: {
      primary: "text-accent-foreground/90",
      secondary: "text-accent-foreground/70",
      muted: "text-accent-foreground/50",
    },
    badge: {
      unlocked:
        "bg-background/30 border border-accent/30 shadow-sm backdrop-blur-sm",
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
    dialog:
      "bg-background/95 backdrop-blur-sm border border-accent/20 shadow-xl",
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
  const styles =
    themeStyles[theme as keyof typeof themeStyles] || themeStyles.dracula;

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
        className={`fixed bottom-4 right-4 group overflow-hidden ${styles.button} 
          rounded-full w-14 h-14 flex items-center justify-center transition-all duration-300 
          hover:scale-110 hover:shadow-xl hover:shadow-accent2/20 
          active:scale-95 transform-gpu z-50
          animate-in slide-in-from-bottom-8`}
        style={{
          background:
            "linear-gradient(135deg, var(--accent2) 0%, var(--accent3) 100%)",
          boxShadow: "0 8px 24px -8px rgba(var(--accent2), 0.3)",
        }}
        aria-label="View Progress"
      >
        <Trophy className="w-6 h-6 text-background transition-transform duration-300 group-hover:rotate-12 relative z-10" />
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 
          group-hover:rotate-180 duration-700 transition-transform ease-out"
        />
      </Button>

      {/* Gamification Panel */}
      <Dialog open={showPanel} onOpenChange={setShowPanel}>
        <DialogContent
          className={`max-w-2xl max-h-[80vh] !bg-transparent ${styles.dialog}`}
          style={{
            background: "var(--background)",
            backdropFilter: "blur(12px)",
          }}
        >
          <DialogHeader className={`${styles.header} pb-4`}>
            <DialogTitle className={`text-xl font-bold ${styles.title}`}>
              Your Progress
            </DialogTitle>
          </DialogHeader>

          <div className="overflow-y-auto max-h-[calc(80vh-8rem)] pr-2">
            {/* User Stats Section */}
            <div className="mb-6">
              <h3
                className={`text-lg font-semibold mb-2 ${styles.text.primary}`}
              >
                Your Stats
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {["Level", "Points", "Streak"].map((stat) => (
                  <div key={stat} className={`p-3 rounded-lg ${styles.card}`}>
                    <div className={`text-sm ${styles.text.secondary}`}>
                      {stat}
                    </div>
                    <div
                      className={`text-2xl font-bold ${styles.text.primary}`}
                    >
                      {stat === "Level" && userProgress.level}
                      {stat === "Points" && userProgress.points}
                      {stat === "Streak" && `${userProgress.streak} days`}
                    </div>
                    {stat === "Level" && (
                      <div className={`text-xs mt-1 ${styles.text.muted}`}>
                        {userProgress.experience} / 1000 XP
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mb-6">
              <h3
                className={`text-lg font-semibold mb-2 ${styles.text.primary}`}
              >
                Achievements
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {userProgress.badges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`p-3 rounded-lg text-center ${
                      badge.unlocked
                        ? styles.badge.unlocked
                        : styles.badge.locked
                    }`}
                  >
                    <div
                      className={`text-2xl mb-1 ${
                        badge.unlocked
                          ? styles.badge.icon
                          : styles.text.secondary
                      }`}
                    >
                      {badge.icon}
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        badge.unlocked
                          ? styles.text.primary
                          : styles.text.secondary
                      }`}
                    >
                      {badge.name}
                    </div>
                    {!badge.unlocked && (
                      <div className={`text-xs mt-1 ${styles.text.muted}`}>
                        {badge.progress}/{badge.maxProgress}
                      </div>
                    )}
                    {badge.unlocked && badge.dateEarned && (
                      <div className={`text-xs mt-1 ${styles.text.muted}`}>
                        {new Date(badge.dateEarned).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Algorithm Progress Section */}
            <div className="mb-6">
              <h3
                className={`text-lg font-semibold mb-2 ${styles.text.primary}`}
              >
                Algorithm Progress
              </h3>
              <div className="space-y-2">
                {userProgress.algorithmProgress.map((algorithm) => (
                  <div key={algorithm.id} className="flex items-center">
                    <div className={`w-24 text-sm ${styles.text.primary}`}>
                      {algorithm.name}
                    </div>
                    <div
                      className={`flex-1 h-2 ${styles.progress.bg} rounded-full overflow-hidden`}
                    >
                      <div
                        className={`h-full ${styles.progress.bar} rounded-full`}
                        style={{
                          width: `${
                            (algorithm.progress / algorithm.maxProgress) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div
                      className={`w-12 text-right text-sm ${styles.text.secondary}`}
                    >
                      {algorithm.progress}/{algorithm.maxProgress}
                    </div>
                  </div>
                ))}
                {userProgress.algorithmProgress.length === 0 && (
                  <div className={`text-center py-4 ${styles.text.muted}`}>
                    Try some algorithms to track your progress!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Progress Component Link */}
          <div className="mt-4 pt-4 border-t border-secondary/20">
            <Link to="/progress" onClick={() => setShowPanel(false)}>
              <Button
                variant="outline"
                className={`w-full flex items-center justify-center gap-2 ${styles.button}`}
              >
                <BarChart className="h-4 w-4" />
                <span>View Progress Component Examples</span>
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
