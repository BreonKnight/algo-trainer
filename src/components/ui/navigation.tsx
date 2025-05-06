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
  background-image: linear-gradient(to right, #2ecc71, #3498db, #9b59b6, #f1c40f);
}
`;

export function Navigation() {
  const { theme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navGroups = [
    {
      label: "Learn",
      items: [
        { path: "/algo-guide", label: "Algo Guide", icon: GraduationCap },
        { path: "/algorithm-trainer", label: "Algorithm Trainer", icon: Code },
        { path: "/cs-math", label: "CS Math", icon: GraduationCap },
        { path: "/algorithm-practice", label: "Practice", icon: ListChecks },
      ],
    },
    {
      label: "Resources",
      items: [
        { path: "/tutorials", label: "Tutorials", icon: Book },
        { path: "/python-techniques", label: "Python", icon: Code2 },
        //{ path: "/visualizer", label: "Visualizer", icon: Brain },
      ],
    },
    {
      label: "Progress",
      items: [
        { path: "/progress", label: "Progress", icon: BarChart },
        { path: "/systems-design", label: "Systems Design", icon: Network },
      ],
    },
    {
      label: "General",
      items: [{ path: "/", label: "Home", icon: Home }],
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  const lightThemes = ["light", "solarized"];
  const blueThemes = ["nord", "ps2"];

  const fortniteTheme = theme === "fornite";

  return (
    <>
      <style>{styles}</style>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center" onClick={scrollToTop}>
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
              <div className="flex items-center">
                {navGroups.map((group, groupIdx) => (
                  <div key={group.label} className="flex items-center space-x-1">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={scrollToTop}
                          className={cn(
                            "flex items-center px-2.5 py-2 rounded-md text-sm font-medium transition-colors",
                            isActive(item.path)
                              ? `bg-accent ${
                                  fortniteTheme
                                    ? "text-black"
                                    : lightThemes.includes(theme)
                                      ? "text-gray-900"
                                      : blueThemes.includes(theme)
                                        ? "text-white"
                                        : "text-accent-foreground"
                                } ring-1 ring-accent-foreground/40 ring-offset-1 ring-offset-background`
                              : "text-foreground/80 hover:text-foreground hover:bg-accent/20"
                          )}
                        >
                          <Icon className="h-4 w-4 mr-2" />
                          {item.label}
                        </Link>
                      );
                    })}
                    {/* Divider between groups except last */}
                    {groupIdx < navGroups.length - 1 && (
                      <span className="mx-2 h-5 w-px bg-border/60" />
                    )}
                  </div>
                ))}
              </div>
              <div className="ml-2 flex items-center space-x-1.5">
                <GamificationButton />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <GamificationButton />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-8 w-8 text-foreground hover:bg-accent/20 hover:text-accent-foreground"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-3 pb-4 space-y-3">
              {navGroups.map((group) => (
                <div key={group.label} className="space-y-1.5">
                  <span className="text-xs font-semibold text-foreground/70 px-2 pb-1 uppercase tracking-wide">
                    {group.label}
                  </span>
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => {
                          scrollToTop();
                          setIsMobileMenuOpen(false);
                        }}
                        className={cn(
                          "flex items-center px-3 py-2.5 rounded-md text-base font-medium transition-colors",
                          isActive(item.path)
                            ? `bg-accent ${
                                fortniteTheme
                                  ? "text-black"
                                  : lightThemes.includes(theme)
                                    ? "text-gray-900"
                                    : blueThemes.includes(theme)
                                      ? "text-white"
                                      : "text-accent-foreground"
                              } ring-1 ring-accent-foreground/40 ring-offset-1 ring-offset-background`
                            : "text-foreground/80 hover:text-foreground hover:bg-accent/20"
                        )}
                      >
                        <Icon className="h-5 w-5 mr-3" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
