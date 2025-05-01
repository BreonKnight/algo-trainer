import { useTheme } from "@/components/useTheme";
import { cn } from "../../lib/utils";
import { Highlight, type PrismTheme } from "prism-react-renderer";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { useState, useRef, useEffect } from "react";

const CodeBlock = ({ code }: { code: string }) => {
  const { theme: appTheme } = useTheme();

  // Theme-specific styling for code blocks
  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case "nord":
        return {
          plain: {
            color: "#e7e7e7",
            backgroundColor: "transparent",
          },
          styles: [
            {
              types: ["comment", "prolog", "doctype", "cdata"],
              style: { color: "#b4b4b4", fontStyle: "italic" as const },
            },
            {
              types: ["string", "attr-value"],
              style: { color: "#43c458" },
            },
            {
              types: ["function", "deleted", "tag"],
              style: { color: "#ff3333" },
            },
            {
              types: ["keyword", "operator"],
              style: { color: "#ffcf40" },
            },
            {
              types: ["punctuation"],
              style: { color: "#e7e7e7" },
            },
            {
              types: ["constant", "number", "boolean"],
              style: { color: "#43c458" },
            },
            {
              types: ["class-name"],
              style: { color: "#7d7d7d" },
            },
            {
              types: ["variable"],
              style: { color: "#e7e7e7" },
            },
          ],
        };
      case "dracula":
        return {
          plain: {
            color: "var(--text-main)",
            backgroundColor: "transparent",
          },
          styles: [
            {
              types: ["comment", "prolog", "doctype", "cdata"],
              style: {
                color: "var(--text-secondary)",
                fontStyle: "italic" as const,
              },
            },
            {
              types: ["string", "attr-value"],
              style: { color: "var(--accent3)" },
            },
            {
              types: ["function", "deleted", "tag"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["keyword", "operator"],
              style: { color: "var(--accent2)" },
            },
            {
              types: ["punctuation"],
              style: { color: "var(--text-main)" },
            },
            {
              types: ["constant", "number", "boolean"],
              style: { color: "var(--accent3)" },
            },
            {
              types: ["class-name"],
              style: { color: "var(--accent2)" },
            },
            {
              types: ["variable"],
              style: { color: "var(--text-main)" },
            },
          ],
        };
      case "solarized":
        return {
          plain: {
            color: "var(--text-main)",
            backgroundColor: "transparent",
          },
          styles: [
            {
              types: ["comment", "prolog", "doctype", "cdata"],
              style: {
                color: "var(--text-secondary)",
                fontStyle: "italic" as const,
              },
            },
            {
              types: ["string", "attr-value"],
              style: { color: "var(--accent3)" },
            },
            {
              types: ["function", "deleted", "tag"],
              style: { color: "var(--accent2)" },
            },
            {
              types: ["keyword", "operator"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["punctuation"],
              style: { color: "var(--text-main)" },
            },
            {
              types: ["constant", "number", "boolean"],
              style: { color: "var(--accent2)" },
            },
            {
              types: ["class-name"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["variable"],
              style: { color: "var(--text-main)" },
            },
          ],
        };
      case "light":
        return {
          plain: {
            color: "var(--text-main)",
            backgroundColor: "transparent",
          },
          styles: [
            {
              types: ["comment", "prolog", "doctype", "cdata"],
              style: {
                color: "var(--text-secondary)",
                fontStyle: "italic" as const,
              },
            },
            {
              types: ["string", "attr-value"],
              style: { color: "var(--accent3)" },
            },
            {
              types: ["function", "deleted", "tag"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["keyword", "operator"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["punctuation"],
              style: { color: "var(--text-main)" },
            },
            {
              types: ["constant", "number", "boolean"],
              style: { color: "var(--accent2)" },
            },
            {
              types: ["class-name"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["variable"],
              style: { color: "var(--text-main)" },
            },
          ],
        };
      case "snes":
        return {
          plain: {
            color: "var(--text-main)",
            backgroundColor: "transparent",
          },
          styles: [
            {
              types: ["comment", "prolog", "doctype", "cdata"],
              style: {
                color: "var(--text-secondary)",
                fontStyle: "italic" as const,
              },
            },
            {
              types: ["string", "attr-value"],
              style: { color: "var(--accent3)" },
            },
            {
              types: ["function", "deleted", "tag"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["keyword", "operator"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["punctuation"],
              style: { color: "var(--text-main)" },
            },
            {
              types: ["constant", "number", "boolean"],
              style: { color: "var(--accent4)" },
            },
            {
              types: ["class-name"],
              style: { color: "var(--accent2)" },
            },
            {
              types: ["variable"],
              style: { color: "var(--text-main)" },
            },
          ],
        };
      case "ps2":
        return {
          plain: {
            color: "var(--text-main)",
            backgroundColor: "transparent",
          },
          styles: [
            {
              types: ["comment", "prolog", "doctype", "cdata"],
              style: {
                color: "var(--text-secondary)",
                fontStyle: "italic" as const,
              },
            },
            {
              types: ["string", "attr-value"],
              style: { color: "var(--accent2)" },
            },
            {
              types: ["function", "deleted", "tag"],
              style: { color: "var(--accent2)" },
            },
            {
              types: ["keyword", "operator"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["punctuation"],
              style: { color: "var(--text-main)" },
            },
            {
              types: ["constant", "number", "boolean"],
              style: { color: "var(--accent3)" },
            },
            {
              types: ["class-name"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["variable"],
              style: { color: "var(--text-main)" },
            },
          ],
        };
      case "re2":
        return {
          plain: {
            color: "var(--text-main)",
            backgroundColor: "transparent",
          },
          styles: [
            {
              types: ["comment", "prolog", "doctype", "cdata"],
              style: {
                color: "var(--text-secondary)",
                fontStyle: "italic" as const,
              },
            },
            {
              types: ["string", "attr-value"],
              style: { color: "var(--accent3)" },
            },
            {
              types: ["function", "deleted", "tag"],
              style: { color: "var(--text-main)" },
            },
            {
              types: ["keyword", "operator"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["punctuation"],
              style: { color: "var(--text-main)" },
            },
            {
              types: ["constant", "number", "boolean"],
              style: { color: "var(--accent3)" },
            },
            {
              types: ["class-name"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["variable"],
              style: { color: "var(--text-main)" },
            },
          ],
        };
      case "mh":
        return {
          plain: {
            color: "var(--text-main)",
            backgroundColor: "transparent",
          },
          styles: [
            {
              types: ["comment", "prolog", "doctype", "cdata"],
              style: {
                color: "var(--text-secondary)",
                fontStyle: "italic" as const,
              },
            },
            {
              types: ["string", "attr-value"],
              style: { color: "var(--accent3)" },
            },
            {
              types: ["function", "deleted", "tag"],
              style: { color: "var(--accent2)" },
            },
            {
              types: ["keyword", "operator"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["punctuation"],
              style: { color: "var(--text-main)" },
            },
            {
              types: ["constant", "number", "boolean"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["class-name"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["variable"],
              style: { color: "var(--text-main)" },
            },
          ],
        };
      default:
        // Default fallback for any theme not explicitly defined
        return {
          plain: {
            color: "var(--text-main)",
            backgroundColor: "transparent",
          },
          styles: [
            {
              types: ["comment", "prolog", "doctype", "cdata"],
              style: {
                color: "var(--text-secondary)",
                fontStyle: "italic" as const,
              },
            },
            {
              types: ["string", "attr-value"],
              style: { color: "var(--accent3)" },
            },
            {
              types: ["function", "deleted", "tag"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["keyword", "operator"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["punctuation"],
              style: { color: "var(--text-main)" },
            },
            {
              types: ["constant", "number", "boolean"],
              style: { color: "var(--accent2)" },
            },
            {
              types: ["class-name"],
              style: { color: "var(--accent)" },
            },
            {
              types: ["variable"],
              style: { color: "var(--text-main)" },
            },
          ],
        };
    }
  };

  // Get theme-specific styles
  const baseTheme: PrismTheme = getThemeStyles(appTheme);

  // Get theme-specific container styles
  const getContainerStyles = (theme: string) => {
    switch (theme) {
      case "nord":
        return {
          containerClass:
            "bg-[#3c3c9c]/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]",
          gradientOverlay:
            "linear-gradient(to bottom, rgba(80, 80, 160, 0.5), transparent)",
          textClass: "text-[#e7e7e7]",
        };
      case "dracula":
        return {
          containerClass:
            "bg-[#282a36]/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
          gradientOverlay:
            "linear-gradient(to bottom, rgba(68, 71, 90, 0.5), transparent)",
          textClass: "text-[#f8f8f2]",
        };
      case "solarized":
        return {
          containerClass:
            "bg-[#fdf6e3]/95 shadow-[inset_0_1px_0_0_rgba(0,0,0,0.1)]",
          gradientOverlay:
            "linear-gradient(to bottom, rgba(238, 232, 213, 0.5), transparent)",
          textClass: "text-[#657b83]",
        };
      case "light":
        return {
          containerClass:
            "bg-[#f8fafc]/95 shadow-[inset_0_1px_0_0_rgba(0,0,0,0.1)]",
          gradientOverlay:
            "linear-gradient(to bottom, rgba(226, 232, 240, 0.5), transparent)",
          textClass: "text-[#22223b]",
        };
      case "snes":
        return {
          containerClass:
            "bg-[#a0a0a0]/95 shadow-[inset_0_1px_0_0_rgba(0,0,0,0.1)]",
          gradientOverlay:
            "linear-gradient(to bottom, rgba(128, 128, 128, 0.5), transparent)",
          textClass: "text-[#333333]",
        };
      case "ps2":
        return {
          containerClass:
            "bg-[#001b4d]/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
          gradientOverlay:
            "linear-gradient(to bottom, rgba(0, 43, 117, 0.5), transparent)",
          textClass: "text-[#b4c7ff]",
        };
      case "re2":
        return {
          containerClass:
            "bg-[#0a0a0a]/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
          gradientOverlay:
            "linear-gradient(to bottom, rgba(26, 24, 22, 0.5), transparent)",
          textClass: "text-[#e6e0d6]",
        };
      case "mh":
        return {
          containerClass:
            "bg-[#1c2320]/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
          gradientOverlay:
            "linear-gradient(to bottom, rgba(42, 51, 45, 0.5), transparent)",
          textClass: "text-[#e8d5a9]",
        };
      default:
        return {
          containerClass:
            "bg-zinc-950/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
          gradientOverlay:
            "linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)",
          textClass: "text-zinc-200",
        };
    }
  };

  const containerStyles = getContainerStyles(appTheme);

  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden",
        containerStyles.containerClass
      )}
    >
      {/* Add subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: containerStyles.gradientOverlay,
        }}
      />

      <Highlight theme={baseTheme} code={code} language="python">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(
              className,
              "relative z-10 p-4 text-sm overflow-auto leading-relaxed",
              containerStyles.textClass
            )}
            style={{
              ...style,
              backgroundColor: "transparent",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="leading-7">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export const PythonTechniques = () => {
  const { theme } = useTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        buttonRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsNavOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sections = [
    {
      title: "Sets",
      description:
        "Sets are unordered collections of unique elements, perfect for tracking unique items or quick lookups.",
      code: `# Unique monster parts from quests
monster_parts = {'Rathalos Scale+', 'Rathalos Wing', 'Rathalos Plate'}
rare_parts = {'Rathalos Plate', 'Rathalos Ruby'}

# Set operations
common_parts = monster_parts & rare_parts  # Intersection
all_parts = monster_parts | rare_parts     # Union
unique_to_quest = monster_parts - rare_parts  # Difference

# Adding and removing
monster_parts.add('Rathalos Tail')
monster_parts.remove('Rathalos Wing')`,
    },
    {
      title: "Dictionaries",
      description:
        "Dictionaries store key-value pairs, ideal for mapping relationships and quick lookups.",
      code: `# Monster weakness mapping
monster_weaknesses = {
    'Rathalos': {'dragon': 3, 'flash': 'weak'},
    'Nargacuga': {'thunder': 2, 'pitfall': 'weak'},
    'Zinogre': {'ice': 3, 'shock': 'immune'}
}

# Dictionary comprehension
element_effectiveness = {
    monster: data['dragon']
    for monster, data in monster_weaknesses.items()
    if 'dragon' in data
}

# Get with default
zinogre_water = monster_weaknesses.get('Zinogre', {}).get('water', 0)`,
    },
    {
      title: "List Slicing",
      description:
        "List slicing provides powerful ways to extract and manipulate sequences.",
      code: `# Quest rewards list
rewards = ['Plate', 'Scale+', 'Wing', 'Ruby', 'Tail', 'Gem']

# Basic slicing
first_three = rewards[:3]      # ['Plate', 'Scale+', 'Wing']
last_two = rewards[-2:]        # ['Tail', 'Gem']
middle = rewards[2:4]          # ['Wing', 'Ruby']

# Step slicing
every_other = rewards[::2]     # ['Plate', 'Wing', 'Tail']
reversed_list = rewards[::-1]  # ['Gem', 'Tail', 'Ruby', 'Wing', 'Scale+', 'Plate']

# Copy list
rewards_backup = rewards[:]`,
    },
    {
      title: "Collections Module",
      description:
        "The collections module provides specialized container datatypes as alternatives to Python's built-in containers.",
      code: `from collections import deque, Counter, defaultdict

# Deque for efficient queue operations
quest_queue = deque(['Hunt Rathalos', 'Capture Nargacuga', 'Slay Zinogre'])
quest_queue.append('Hunt Rajang')      # Add to right
quest_queue.appendleft('Hunt Magnamalo')  # Add to left
next_quest = quest_queue.popleft()     # Remove from left

# Counter for counting occurrences
monster_parts = ['Scale+', 'Wing', 'Scale+', 'Plate', 'Scale+', 'Ruby']
part_counts = Counter(monster_parts)
most_common = part_counts.most_common(2)  # [('Scale+', 3), ('Wing', 1)]

# DefaultDict for automatic default values
monster_locations = defaultdict(list)
monster_locations['Ancient Forest'].append('Rathalos')
monster_locations['Coral Highlands'].append('Legiana')
# No KeyError if key doesn't exist
print(monster_locations['Hoarfrost Reach'])  # []`,
    },
    {
      title: "Heap Queue (heapq)",
      description:
        "The heapq module provides implementation of the heap queue algorithm, useful for priority queues.",
      code: `import heapq

# Priority queue for quest rewards
quest_rewards = []
heapq.heappush(quest_rewards, (1, 'Scale+'))     # Common
heapq.heappush(quest_rewards, (4, 'Ruby'))       # Very Rare
heapq.heappush(quest_rewards, (3, 'Plate'))      # Rare
heapq.heappush(quest_rewards, (2, 'Wing'))       # Uncommon

# Get rarest items first
rarest_item = heapq.heappop(quest_rewards)  # (1, 'Scale+')

# Find n smallest/largest
monsters = [(4, 'Rathalos'), (2, 'Jagras'), (5, 'Fatalis'), 
           (3, 'Nargacuga'), (1, 'Kelbi')]
weakest = heapq.nsmallest(2, monsters)  # First 2 weakest
strongest = heapq.nlargest(2, monsters)  # First 2 strongest`,
    },
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[100rem] px-6">
        <TooltipProvider>
          {/* Title and Navigation */}
          <div className="flex flex-col items-center justify-center mt-6 mb-2 relative w-full">
            <Link
              to="/"
              className="text-2xl font-extrabold text-transparent bg-clip-text text-center animate-gradient-x drop-shadow-lg tracking-tight select-none mb-2"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
              }}
            >
              Algorithm Trainer
            </Link>
            <h1 className="text-xl font-semibold text-accent2">
              Python Techniques
            </h1>

            {/* Navigation Hamburger */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-50">
              <Tooltip>
                <TooltipTrigger asChild>
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
                </TooltipTrigger>
                <TooltipContent>Navigation Menu</TooltipContent>
              </Tooltip>

              {/* Navigation Dropdown */}
              {isNavOpen && (
                <div
                  ref={navRef}
                  className={cn(
                    "absolute left-0 mt-2 w-48 rounded-md shadow-lg border z-50 glassy-gradient-bg backdrop-blur-md",
                    theme === "nord" ? "border-white/30" : "border-secondary/40"
                  )}
                >
                  {/* Glass overlay for extra effect */}
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
                      to="/"
                      className={cn(
                        "block px-4 py-2 text-sm transition-colors font-medium",
                        theme === "nord"
                          ? "text-white/90 hover:text-white hover:bg-white/10"
                          : "text-main hover:bg-secondary/20"
                      )}
                      onClick={() => setIsNavOpen(false)}
                    >
                      Home
                    </Link>
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
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full mb-6 rounded-xl shadow-lg p-4 glassy-gradient-bg relative">
            {/* Glass overlay */}
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
                borderRadius: "0.75rem",
              }}
            />
            <div className="relative z-10 space-y-6">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={cn(
                    "rounded-lg p-6 backdrop-blur-sm border",
                    theme === "nord"
                      ? "bg-nord-1/95 border-white/20"
                      : "bg-zinc-900/95 border-zinc-700/30"
                  )}
                >
                  <h2
                    className={cn(
                      "text-xl font-semibold mb-4",
                      theme === "nord" ? "text-nord-8" : "text-zinc-200"
                    )}
                  >
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    <p
                      className={cn(
                        "text-sm",
                        theme === "nord" ? "text-nord-4" : "text-zinc-400"
                      )}
                    >
                      {section.description}
                    </p>
                    <CodeBlock code={section.code} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
};
