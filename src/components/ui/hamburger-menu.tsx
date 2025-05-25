import { BarChart, Book } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "@/components/theme/use-theme";
import { Button } from "@/components/ui/button";
import { cn } from '@algo-trainer/shared/utils/common';

// Add custom gradient hamburger and X icons
const GradientHamburger = ({ size = 28 }) => (
  <svg
    className="w-full h-full"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#hamburger-gradient)"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient
        id="hamburger-gradient"
        x1="0"
        y1="0"
        x2="24"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3b82f6" />
        <stop offset="0.5" stopColor="#f59e42" />
        <stop offset="1" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);

const GradientX = ({ size = 28 }) => (
  <svg
    className="w-full h-full"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#x-gradient)"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <defs>
      <linearGradient id="x-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3b82f6" />
        <stop offset="0.5" stopColor="#f59e42" />
        <stop offset="1" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
);

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={toggleMenu}
        className={cn(
          "transition-all duration-200 border-2 shadow-2xl ring-2 ring-accent focus-visible:ring-4 focus-visible:ring-accent scale-110 w-16 h-16 p-0",
          theme === "light" || theme === "solarized"
            ? "bg-white text-black border-black"
            : "bg-black text-white border-white"
        )}
      >
        {isOpen ? <GradientX size={28} /> : <GradientHamburger size={28} />}
      </Button>

      {isOpen && (
        <div
          className={cn(
            "absolute right-0 mt-2 w-[75px] rounded-md shadow-lg py-1 z-10 p-2",
            theme === "nord" ? "bg-nord-0 text-nord-6" : "bg-background text-foreground"
          )}
        >
          <Link
            to="/tutorials"
            className={cn(
              "block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
              theme === "nord" ? "hover:bg-white/10" : ""
            )}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <Book className="h-4 w-4 mr-2" />
              Tutorials
            </div>
          </Link>
          <Link
            to="/progress"
            className={cn(
              "block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
              theme === "nord" ? "hover:bg-white/10" : ""
            )}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <BarChart className="h-4 w-4 mr-2" />
              Progress
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
