import { Link } from "react-router-dom";
import { FaChartLine, FaBook, FaPython, FaCode, FaGraduationCap } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useTheme } from "../../theme/theme-context";

interface NavigationBarProps {
  className?: string;
}

export function NavigationBar({ className }: NavigationBarProps) {
  const theme = useTheme().theme;

  return (
    <nav
      className={cn(
        "flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mt-4 w-full px-4",
        className
      )}
    >
      <Link
        to="/progress"
        className={cn(
          "flex items-center gap-2 px-4 py-3 sm:py-2 rounded-lg transition-colors w-full sm:w-auto justify-center",
          theme === "nord"
            ? "text-white/90 hover:text-white hover:bg-white/10"
            : "text-main hover:bg-secondary/20"
        )}
      >
        <FaChartLine className="h-4 w-4" />
        <span className="text-sm font-medium">Progress</span>
      </Link>
      <Link
        to="/tutorials"
        className={cn(
          "flex items-center gap-2 px-4 py-3 sm:py-2 rounded-lg transition-colors w-full sm:w-auto justify-center",
          theme === "nord"
            ? "text-white/90 hover:text-white hover:bg-white/10"
            : "text-main hover:bg-secondary/20"
        )}
      >
        <FaBook className="h-4 w-4" />
        <span className="text-sm font-medium">Tutorials</span>
      </Link>
      <Link
        to="/python-techniques"
        className={cn(
          "flex items-center gap-2 px-4 py-3 sm:py-2 rounded-lg transition-colors w-full sm:w-auto justify-center",
          theme === "nord"
            ? "text-white/90 hover:text-white hover:bg-white/10"
            : "text-main hover:bg-secondary/20"
        )}
      >
        <FaPython className="h-4 w-4" />
        <span className="text-sm font-medium">Python</span>
      </Link>
      <Link
        to="/visualizer"
        className={cn(
          "flex items-center gap-2 px-4 py-3 sm:py-2 rounded-lg transition-colors w-full sm:w-auto justify-center",
          theme === "nord"
            ? "text-white/90 hover:text-white hover:bg-white/10"
            : "text-main hover:bg-secondary/20"
        )}
      >
        <FaCode className="h-4 w-4" />
        <span className="text-sm font-medium">Visualizer</span>
      </Link>
      <Link
        to="/algorithm-learning"
        className={cn(
          "flex items-center gap-2 px-4 py-3 sm:py-2 rounded-lg transition-colors w-full sm:w-auto justify-center",
          theme === "nord"
            ? "text-white/90 hover:text-white hover:bg-white/10"
            : "text-main hover:bg-secondary/20"
        )}
      >
        <FaGraduationCap className="h-4 w-4" />
        <span className="text-sm font-medium">Algorithms</span>
      </Link>
    </nav>
  );
}
