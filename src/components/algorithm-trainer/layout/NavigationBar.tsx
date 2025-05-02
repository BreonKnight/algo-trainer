import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "../../theme/theme-context";

interface NavigationBarProps {
  className?: string;
}

export function NavigationBar({ className }: NavigationBarProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const theme = useTheme().theme;

  return (
    <div
      className={cn("absolute left-0 top-1/2 -translate-y-1/2 z-50", className)}
    >
      <Button
        ref={buttonRef}
        variant="ghost"
        size="icon"
        onClick={() => setIsNavOpen(!isNavOpen)}
        className={cn(
          "h-10 w-10 rounded-full transition-colors",
          theme === "nord"
            ? "bg-white/10 hover:bg-white/20 text-white"
            : "bg-secondary/20 hover:bg-secondary/40 text-main"
        )}
      >
        <FaBars className="h-5 w-5" />
      </Button>

      {isNavOpen && (
        <div
          ref={navRef}
          className={cn(
            "absolute left-0 mt-2 w-48 rounded-md shadow-lg border z-50 glassy-gradient-bg backdrop-blur-md",
            theme === "nord" ? "border-white/30" : "border-secondary/40"
          )}
        >
          <div
            style={{
              content: "''",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "var(--pseudocode-gradient-overlay)",
              zIndex: 0,
              pointerEvents: "none",
              opacity: 0.7,
              borderRadius: "0.375rem",
            }}
          />
          <div className="py-1 relative z-10">
            <Link
              to="/progress"
              className={cn(
                "block px-4 py-2 text-sm transition-colors font-medium",
                theme === "nord"
                  ? "text-white/90 hover:text-white hover:bg-white/10"
                  : "text-main hover:bg-secondary/20"
              )}
              onClick={() => setIsNavOpen(false)}
            >
              Progress
            </Link>
            <Link
              to="/tutorials"
              className={cn(
                "block px-4 py-2 text-sm transition-colors font-medium",
                theme === "nord"
                  ? "text-white/90 hover:text-white hover:bg-white/10"
                  : "text-main hover:bg-secondary/20"
              )}
              onClick={() => setIsNavOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              to="/python-techniques"
              className={cn(
                "block px-4 py-2 text-sm transition-colors font-medium",
                theme === "nord"
                  ? "text-white/90 hover:text-white hover:bg-white/10"
                  : "text-main hover:bg-secondary/20"
              )}
              onClick={() => setIsNavOpen(false)}
            >
              Python Techniques
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
