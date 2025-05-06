import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { useTheme } from "../theme/use-theme";
import { cn } from "@/lib/utils";
import {
  Home,
  Book,
  BarChart,
  Menu,
  X,
  Code2,
  GraduationCap,
  Brain,
  Network,
  Code,
  ListChecks,
} from "lucide-react";
import { useState } from "react";
import { GamificationButton } from "../gamification/GamificationButton";

// Add custom styles for the gradient animation
const styles = `
@keyframes gradient-x {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-text {
  background-size: 200% auto;
  animation: gradient-x 8s linear infinite;
}

.gradient-text-light {
  background-image: linear-gradient(to right, #3b82f6, #8b5cf6, #3b82f6);
}

.gradient-text-solarized {
  background-image: linear-gradient(to right, #268bd2, #2aa198, #268bd2);
}

.gradient-text-dracula {
  background-image: linear-gradient(to right, #ff79c6, #bd93f9, #ff79c6);
}

.gradient-text-nord {
  background-image: linear-gradient(to right, #88c0d0, #81a1c1, #88c0d0);
}

.gradient-text-snes {
  background-image: linear-gradient(to right, #ff0000, #ffd700, #ff0000);
}

.gradient-text-ps2 {
  background-image: linear-gradient(to right, #0000ff, #00ff00, #0000ff);
}

.gradient-text-re2 {
  background-image: linear-gradient(to right, #8b0000, #ff0000, #8b0000);
}

.gradient-text-mh {
  background-image: linear-gradient(to right, #ff4500, #ff8c00, #ff4500);
}

.gradient-text-kingdom-hearts {
  background-image: linear-gradient(to right, #ff69b4, #9370db, #ff69b4);
}

.gradient-text-fornite {
  background-image: linear-gradient(to right, #349a3a, #4a5afd, #9652b8, #f7b227);
}
`;

export function Navigation() {
  const { theme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/tutorials", label: "Tutorials", icon: Book },
    { path: "/progress", label: "Progress", icon: BarChart },
    { path: "/python-techniques", label: "Python", icon: Code2 },
    { path: "/algorithm-learning", label: "Learning", icon: GraduationCap },
    { path: "/algorithm-practice", label: "Practice", icon: ListChecks },
    { path: "/visualizer", label: "Visualizer", icon: Brain },
    { path: "/systems-design", label: "Systems Design", icon: Network },
  ];

  const isActive = (path: string) => location.pathname === path;

  const lightThemes = ["light", "solarized"];
  const blueThemes = ["nord", "ps2"];

  return (
    <>
      <style>{styles}</style>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span
                  className={cn(
                    "text-lg font-bold text-transparent bg-clip-text gradient-text",
                    `gradient-text-${theme}`
                  )}
                >
                  AlgoTrainer
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={cn(
                        "flex items-center px-2 py-1.5 rounded-md text-xs font-medium transition-colors",
                        isActive(item.path)
                          ? `bg-accent ${
                              lightThemes.includes(theme)
                                ? "text-gray-900"
                                : blueThemes.includes(theme)
                                  ? "text-white"
                                  : "text-accent-foreground"
                            } ring-1 ring-accent-foreground/40 ring-offset-1 ring-offset-background`
                          : "text-foreground/60 hover:text-foreground hover:bg-accent/10"
                      )}
                    >
                      <Icon className="h-3.5 w-3.5 mr-1.5" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <div className="ml-2 flex items-center space-x-1.5">
                <Link
                  to="/algorithm-trainer"
                  className={cn(
                    "flex items-center px-2 py-1.5 rounded-md text-xs font-medium transition-colors",
                    isActive("/algorithm-trainer")
                      ? `bg-accent ${
                          lightThemes.includes(theme)
                            ? "text-gray-900"
                            : blueThemes.includes(theme)
                              ? "text-white"
                              : "text-accent-foreground"
                        } ring-1 ring-accent-foreground/40 ring-offset-1 ring-offset-background`
                      : "text-foreground/60 hover:text-foreground hover:bg-accent/10"
                  )}
                >
                  <Code className="h-3.5 w-3.5 mr-1.5" />
                  Algorithm Trainer
                </Link>
                <GamificationButton />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Link
                to="/algorithm-trainer"
                className={cn(
                  "flex items-center px-2 py-1.5 rounded-md text-xs font-medium transition-colors",
                  isActive("/algorithm-trainer")
                    ? `bg-accent ${
                        lightThemes.includes(theme)
                          ? "text-gray-900"
                          : blueThemes.includes(theme)
                            ? "text-white"
                            : "text-accent-foreground"
                      } ring-1 ring-accent-foreground/40 ring-offset-1 ring-offset-background`
                    : "text-foreground/60 hover:text-foreground hover:bg-accent/10"
                )}
              >
                <Code className="h-3.5 w-3.5 mr-1.5" />
                Algorithm Trainer
              </Link>
              <GamificationButton />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-7 w-7 text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center px-2 py-1.5 rounded-md text-sm font-medium transition-colors",
                      isActive(item.path)
                        ? `bg-accent ${
                            lightThemes.includes(theme)
                              ? "text-gray-900"
                              : blueThemes.includes(theme)
                                ? "text-white"
                                : "text-accent-foreground"
                          } ring-1 ring-accent-foreground/40 ring-offset-1 ring-offset-background`
                        : "text-foreground/60 hover:text-foreground hover:bg-accent/10"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
