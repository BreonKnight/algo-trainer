import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { useTheme } from "../theme/theme-context";
import { cn } from "@/lib/utils";
import {
  Home,
  Book,
  BarChart,
  Settings,
  Menu,
  X,
  Code2,
  GraduationCap,
  Brain,
  Trophy,
} from "lucide-react";
import { useState } from "react";
import { GamificationButton } from "../gamification/GamificationButton";

const themeStyles = {
  dracula: {
    nav: "bg-background/80 backdrop-blur-sm border-b border-accent2/20",
    logo: "text-accent2",
    link: {
      active: "bg-accent2 text-main",
      inactive: "text-main/60 hover:text-main hover:bg-accent2/10",
    },
  },
  light: {
    nav: "bg-background/80 backdrop-blur-sm border-b border-accent/10",
    logo: "text-accent",
    link: {
      active: "bg-accent text-accent-foreground",
      inactive:
        "text-accent-foreground/60 hover:text-accent-foreground hover:bg-accent/10",
    },
  },
  dark: {
    nav: "bg-background/80 backdrop-blur-sm border-b border-secondary/20",
    logo: "text-accent2",
    link: {
      active: "bg-accent2 text-main",
      inactive: "text-main/60 hover:text-main hover:bg-accent2/10",
    },
  },
  solarized: {
    nav: "bg-background/80 backdrop-blur-sm border-b border-accent/10",
    logo: "text-accent",
    link: {
      active: "bg-accent text-accent-foreground",
      inactive:
        "text-accent-foreground/60 hover:text-accent-foreground hover:bg-accent/10",
    },
  },
  nord: {
    nav: "bg-background/80 backdrop-blur-sm border-b border-accent/20",
    logo: "text-accent",
    link: {
      active: "bg-accent text-main",
      inactive: "text-main/60 hover:text-main hover:bg-accent/10",
    },
  },
  snes: {
    nav: "bg-background/80 backdrop-blur-sm border-b border-accent/20",
    logo: "text-accent",
    link: {
      active: "bg-accent text-accent-foreground",
      inactive:
        "text-accent-foreground/60 hover:text-accent-foreground hover:bg-accent/10",
    },
  },
  ps2: {
    nav: "bg-background/80 backdrop-blur-sm border-b border-accent2/20",
    logo: "text-accent2",
    link: {
      active: "bg-accent2 text-main",
      inactive: "text-main/60 hover:text-main hover:bg-accent2/10",
    },
  },
  re2: {
    nav: "bg-background/80 backdrop-blur-sm border-b border-accent2/20",
    logo: "text-accent2",
    link: {
      active: "bg-accent2 text-main",
      inactive: "text-main/60 hover:text-main hover:bg-accent2/10",
    },
  },
  mh: {
    nav: "bg-background/80 backdrop-blur-sm border-b border-accent2/20",
    logo: "text-accent2",
    link: {
      active: "bg-accent2 text-main",
      inactive: "text-main/60 hover:text-main hover:bg-accent2/10",
    },
  },
};

export function Navigation() {
  const { theme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Default to dracula theme if current theme is not in themeStyles
  const styles =
    themeStyles[theme as keyof typeof themeStyles] || themeStyles.dracula;

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/tutorials", label: "Tutorials", icon: Book },
    { path: "/progress", label: "Progress", icon: BarChart },
    { path: "/python-techniques", label: "Python", icon: Code2 },
    { path: "/algorithm-learning", label: "Learning", icon: GraduationCap },
    { path: "/visualizer", label: "Visualizer", icon: Brain },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50", styles.nav)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className={cn("text-xl font-bold", styles.logo)}>
                AlgoTrainer
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive(item.path)
                        ? styles.link.active
                        : styles.link.inactive
                    )}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="ml-4">
              <GamificationButton />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <GamificationButton />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "text-foreground hover:bg-accent hover:text-accent-foreground",
                styles.link.inactive
              )}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors",
                    isActive(item.path)
                      ? styles.link.active
                      : styles.link.inactive
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
