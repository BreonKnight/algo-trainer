import { BarChart, Book, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useTheme } from "@/components/theme/use-theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        size="icon"
        onClick={toggleMenu}
        className={cn(
          "transition-all duration-200 border",
          theme === "light" || theme === "solarized"
            ? "bg-white border-accent text-accent shadow"
            : theme === "nord"
              ? "text-white hover:bg-white/10 border-none"
              : "text-foreground hover:bg-accent hover:text-accent-foreground border-none"
        )}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div
          className={cn(
            "absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-10",
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
