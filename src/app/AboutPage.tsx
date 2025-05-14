import { Sigma, Calculator, LineChart, Binary, Network, Infinity } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

import { Background } from "@/components/ui/background";
import { useTheme } from "@/components/theme/use-theme";
import { cn } from "@/lib/utils";

import snesController from "/snes-controller.svg";
import gamecubeController from "/gamecube-controller.svg";

const AboutPage = () => {
  const { theme } = useTheme();

  const sections = [
    {
      icon: <Sigma className="h-8 w-8" />,
      title: "Mathematical Foundations",
      description:
        "Master the mathematical principles that underpin algorithms. From asymptotic analysis to recurrence relations, understand why algorithms work and how to analyze their performance mathematically.",
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Complexity Analysis",
      description:
        "Learn to analyze time and space complexity using Big O notation. Understand how to evaluate algorithm efficiency and make informed decisions about algorithm selection.",
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Algorithmic Patterns",
      description:
        "Discover the mathematical patterns that connect different algorithms. Learn how similar mathematical principles appear across seemingly different problems and solutions.",
    },
    {
      icon: <Binary className="h-8 w-8" />,
      title: "Data Structure Mathematics",
      description:
        "Understand the mathematical properties of data structures. Learn how mathematical concepts like trees, graphs, and hash functions form the foundation of efficient data organization.",
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Graph Theory",
      description:
        "Explore the mathematical theory behind graph algorithms. From Euler paths to network flows, master the mathematical concepts that power modern algorithms.",
    },
    {
      icon: <Infinity className="h-8 w-8" />,
      title: "Advanced Mathematical Concepts",
      description:
        "Dive into advanced topics like dynamic programming, probability theory, and number theory. Understand how these mathematical concepts drive algorithm design and optimization.",
    },
  ];

  const learningPath = [
    {
      icon: <Sigma className="h-7 w-7 md:h-9 md:w-9" />,
      title: "1. Mathematical Foundations",
      description:
        "Start with the basics of discrete mathematics, set theory, and mathematical induction. Build a strong foundation for understanding algorithms.",
    },
    {
      icon: <Calculator className="h-7 w-7 md:h-9 md:w-9" />,
      title: "2. Complexity Analysis",
      description:
        "Learn to analyze algorithms mathematically, understanding time and space complexity, and how to optimize for different scenarios.",
    },
    {
      icon: <LineChart className="h-7 w-7 md:h-9 md:w-9" />,
      title: "3. Algorithm Design",
      description:
        "Apply mathematical principles to design efficient algorithms, understanding the trade-offs and mathematical patterns in different approaches.",
    },
    {
      icon: <Infinity className="h-7 w-7 md:h-9 md:w-9" />,
      title: "4. Advanced Topics",
      description:
        "Explore advanced mathematical concepts and their applications in algorithm design, from graph theory to dynamic programming.",
    },
  ];

  const sectionLinks = [
    { id: "hero", label: "Welcome" },
    { id: "how-it-works", label: "How It Works" },
    { id: "productivity-tools", label: "Productivity Tools" },
    { id: "learning-path", label: "Learning Path" },
    { id: "getting-started", label: "Getting Started" },
    { id: "tips", label: "Tips for Success" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Helper functions for SNES theme
  const getTagColor = (theme: string, type: string) => {
    if (theme === "snes") {
      if (type === "focus") return "bg-[#3498db]/90 text-[#1a237e]"; // SNES blue
      if (type === "music") return "bg-[#B48EAD]/90 text-[#1a237e]"; // Nord purple
      if (type === "facts") return "bg-[#EBCB8B]/90 text-[#1a237e]"; // Nord yellow
    }
    if (theme === "nord") {
      if (type === "focus") return "bg-[#6A4BB6]/90 text-[#1a237e]";
      if (type === "music") return "bg-[#B48EAD]/90 text-[#1a237e]";
      if (type === "facts") return "bg-[#EBCB8B]/90 text-[#1a237e]";
    }
    if (theme === "dracula") {
      if (type === "focus") return "bg-[#ff79c6]/90 text-[#1a237e]";
      if (type === "music") return "bg-[#bd93f9]/90 text-[#1a237e]";
      if (type === "facts") return "bg-[#f1fa8c]/90 text-[#1a237e]";
    }
    if (type === "focus") return "bg-accent/90 text-[#1a237e]";
    if (type === "music") return "bg-accent2/90 text-[#1a237e]";
    if (type === "facts") return "bg-accent3/90 text-[#1a237e]";
    return "bg-main/90 border-border/70 backdrop-blur-xl";
  };

  const getTextColor = (theme: string) => {
    if (theme === "snes") return "text-[#1a237e]";
    if (theme === "dracula") return "text-[#1a237e]";
    if (theme === "nord") return "text-[#1a237e]";
    return "text-main";
  };

  const getCardStyle = (theme: string) => {
    if (theme === "snes") {
      return "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e] shadow-[0_4px_24px_rgba(52,152,219,0.08)]";
    }
    if (theme === "dracula") {
      return "bg-gray-800/50 border-gray-700/50 backdrop-blur-xl";
    }
    if (theme === "nord") {
      return "bg-white/90 border-[#D8DEE9]/70 backdrop-blur-xl";
    }
    return "bg-main/90 border-border/70 backdrop-blur-xl";
  };

  const getCardHoverStyle = (theme: string) => {
    if (theme === "snes") {
      return "hover:border-[#3498db]";
    }
    if (theme === "dracula") {
      return "hover:bg-gray-800/70 hover:border-gray-600/50";
    }
    if (theme === "nord") {
      return "hover:bg-white/95 hover:border-[#A3BE8C]/50";
    }
    return "hover:bg-main/95 hover:border-accent/50";
  };

  const getCardTextStyle = (theme: string) => {
    if (theme === "snes") {
      return "text-[#1a237e]";
    }
    if (theme === "dracula") {
      return "text-[#1a237e]";
    }
    if (theme === "nord") {
      return "text-[#1a237e]";
    }
    return "text-main";
  };

  return (
    <Background>
      {/* Section Navigation */}
      <div
        className={cn(
          "w-full flex justify-center gap-2 md:gap-6 py-4 px-2 md:px-0 mb-8",
          theme === "nord" ? "bg-[#6A4BB6]/10" : ""
        )}
      >
        {sectionLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={cn(
              "text-sm md:text-base font-semibold px-4 py-2 rounded-full transition-all",
              theme === "nord"
                ? "bg-[#6A4BB6]/20 text-white hover:bg-[#6A4BB6]/40 hover:scale-105"
                : theme === "snes"
                  ? "bg-[#3498db]/20 text-[#1a237e] hover:bg-[#3498db]/40 hover:scale-105"
                  : "bg-accent/20 text-main hover:bg-accent/40 hover:scale-105"
            )}
            aria-label={`Jump to ${link.label}`}
          >
            {link.label}
          </button>
        ))}
      </div>
      <div
        className={cn("container mx-auto px-4 py-12 pb-24", theme === "snes" && "relative")}
        style={
          theme === "snes"
            ? {
                backgroundImage: "url('/snes-pixel-bg.png')",
                backgroundSize: "cover",
                backgroundRepeat: "repeat",
                zIndex: 0,
              }
            : {}
        }
      >
        {/* Hero Section */}
        <div
          id="hero"
          className={cn(
            "text-center mb-12 pb-4 overflow-visible max-w-4xl mx-auto p-8 rounded-3xl",
            theme === "nord"
              ? "border border-white/20 text-white"
              : theme === "snes"
                ? "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e]"
                : "bg-main/60 border-accent/40"
          )}
        >
          {theme === "snes" && (
            <img src={snesController} alt="SNES Controller" className="w-10 h-10 mx-auto mb-2" />
          )}
          <h1
            className={cn(
              "text-4xl md:text-5xl font-bold mb-6 leading-[1.3] pb-2 text-transparent bg-clip-text gradient-text",
              `gradient-text-${theme}`,
              theme === "snes" && "snes-font"
            )}
          >
            Master Algorithms, Don't be Afraid :)
          </h1>
          <p
            className={cn(
              "text-xl md:text-2xl max-w-3xl mx-auto mb-2",
              theme === "nord" ? "text-[#1a237e] drop-shadow" : "text-foreground/80"
            )}
          >
            Go beyond coding to understand the mathematical principles that make algorithms work.
          </p>
          <p
            className={cn(
              "text-lg max-w-2xl mx-auto",
              theme === "nord" ? "text-[#1a237e]/90" : "text-foreground/70"
            )}
          >
            Learn to think mathematically about problem-solving and algorithm design.
          </p>
        </div>

        {/* How It Works Stepper */}
        <div
          id="how-it-works"
          className={cn(
            "max-w-4xl mx-auto mb-12 p-8 rounded-3xl",
            theme === "nord"
              ? "border border-white/20 text-white"
              : theme === "snes"
                ? "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e]"
                : "bg-main/60 border-accent/40"
          )}
        >
          <h2
            className={cn(
              "text-2xl font-bold mb-8 text-center",
              theme === "nord" ? "text-white drop-shadow-lg" : getCardTextStyle(theme)
            )}
          >
            How AlgoTrainer Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "🧑‍🎓",
                title: "1. Start with the Basics",
                description:
                  "Build your foundation in math and algorithms with step-by-step lessons. It's a good idea to have a basic understanding of Python before you start.",
              },
              {
                emoji: "⏲️",
                title: "2. Use Productivity Tools",
                description:
                  "Stay focused with the timer, enjoy music, and get inspired by algorithm facts. Focusing is key to learning. Music can help you stay in the flow.",
              },
              {
                emoji: "🏆",
                title: "3. Practice & Progress",
                description:
                  "Apply what you learn, track your progress, and master algorithms! It makes perfect sense to practice in Python.",
              },
              {
                emoji: "🐍",
                title: "4. Why in Python?",
                description:
                  "Python is the best language for algorithm learning. Its simple and has builtins like lists, dictionaries, and tuples that make it easy to implement algorithms.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={cn(
                  "p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                  theme === "nord"
                    ? "border border-white/20 text-white hover:bg-white/5"
                    : theme === "snes"
                      ? "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e] hover:border-[#3498db] snes-glow"
                      : "bg-main/60 border-accent/40"
                )}
              >
                <span
                  className={cn(
                    "text-3xl mb-4 block",
                    theme === "snes"
                      ? "animate-bounce"
                      : theme === "nord"
                        ? "animate-bounce-slow"
                        : ""
                  )}
                >
                  {step.emoji}
                </span>
                <h3
                  className={cn(
                    "font-semibold mb-2 text-lg",
                    theme === "nord" ? "text-[#1a237e] drop-shadow" : getCardTextStyle(theme)
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "text-sm",
                    theme === "nord" ? "text-[#1a237e]/90" : "text-foreground/70"
                  )}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Informatics Bar Explanation */}
        <div
          id="productivity-tools"
          className={cn(
            "max-w-4xl mx-auto mb-16 p-8 rounded-3xl border shadow-lg backdrop-blur-xl",
            theme === "snes"
              ? "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e] backdrop-blur-xl"
              : theme === "dracula"
                ? "bg-white/10 border-blue-400/30"
                : theme === "nord"
                  ? "bg-white/60 border-[#A3BE8C]/40"
                  : "bg-main/60 border-accent/40"
          )}
        >
          <h2
            className={cn(
              "text-2xl font-bold mb-2 text-center flex items-center justify-center gap-2",
              getTextColor(theme)
            )}
          >
            <span>⏲️</span> <span>🎵</span> <span>💡</span> <span>Your Productivity Tools</span>
          </h2>
          <p
            className={cn(
              "mb-4 text-lg text-center font-medium",
              theme === "snes"
                ? "text-[#1a237e]/90 drop-shadow"
                : theme === "dracula"
                  ? "text-white/90 drop-shadow"
                  : theme === "nord"
                    ? "text-gray-900/90 drop-shadow"
                    : "text-main/90 drop-shadow"
            )}
          >
            The Informatics Bar at the top of AlgoTrainer gives you everything you need to stay
            focused, motivated, and learning efficiently.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              {
                emoji: "⏲️",
                title: "Focus Timer",
                description: "Break your study into focused sessions for better results.",
                tag: { text: "Science-backed!", type: "focus" },
                items: [
                  "Boosts focus and retention (Konz & Wilkins, 1967)",
                  "Improves memory (Cepeda et al., 2006)",
                  "Prevents burnout",
                ],
              },
              {
                emoji: "🎵",
                title: "Background Music",
                description: "Set the mood and reduce stress while you learn.",
                tag: { text: "Stay in the flow!", type: "music" },
                items: ["Enhances mood and focus", "Reduces anxiety"],
              },
              {
                emoji: "💡",
                title: "Facts & Tips",
                description: "Learn something new every session with rotating facts and tips.",
                tag: { text: "Micro-learning!", type: "facts" },
                items: ["Stay inspired", "Discover new ideas"],
              },
            ].map((tool, index) => (
              <div
                key={index}
                className={cn(
                  "rounded-lg p-4 flex flex-col items-center shadow border",
                  theme === "snes"
                    ? "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e] shadow-[0_4px_24px_rgba(52,152,219,0.08)] snes-glow"
                    : getCardStyle(theme),
                  theme === "snes" ? "hover:border-[#3498db]" : getCardHoverStyle(theme)
                )}
              >
                <span className={cn("text-3xl mb-2", theme === "snes" && "animate-bounce")}>
                  {tool.emoji}
                </span>
                <h3 className={cn("font-semibold mb-1", getCardTextStyle(theme))}>{tool.title}</h3>
                <p className={cn("text-sm mb-2", getCardTextStyle(theme))}>{tool.description}</p>
                <div
                  className={cn(
                    "text-xs rounded px-2 py-1 mb-1",
                    getTagColor(theme, tool.tag.type)
                  )}
                >
                  {tool.tag.text}
                </div>
                <ul
                  className={cn("text-xs text-left list-disc list-inside", getCardTextStyle(theme))}
                >
                  {tool.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p
            className={cn(
              "mt-2 font-medium text-center",
              theme === "snes"
                ? "text-[#1a237e]/90"
                : theme === "dracula"
                  ? "text-blue-200"
                  : theme === "nord"
                    ? "text-gray-800/90"
                    : "text-foreground/90"
            )}
          >
            <span
              className={cn(
                "px-2 py-1 rounded",
                theme === "snes"
                  ? "bg-[#3498db]/50 text-[#1a237e]"
                  : theme === "dracula"
                    ? "bg-blue-900/50 text-blue-200"
                    : theme === "nord"
                      ? "bg-[#A3BE8C]/90 text-gray-900"
                      : "bg-accent/90 text-main"
              )}
            >
              Tip:
            </span>{" "}
            Use the timer to break your study into 25-minute sessions, then take a 5-minute break.
            You'll learn faster, remember more, and enjoy the process!
          </p>
        </div>

        {/* Learning Path */}
        <div
          id="learning-path"
          className={cn(
            "max-w-4xl mx-auto mb-16 p-8 rounded-3xl",
            theme === "nord"
              ? "border border-white/20 text-white"
              : theme === "snes"
                ? "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e]"
                : "bg-main/60 border-accent/40"
          )}
        >
          <h2
            className={cn(
              "text-2xl font-bold mb-8 text-center",
              theme === "nord" ? "text-white drop-shadow-lg" : getCardTextStyle(theme)
            )}
          >
            Your Mathematical Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPath.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                  theme === "nord"
                    ? "border border-white/20 text-white hover:bg-white/5"
                    : theme === "snes"
                      ? "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e] hover:border-[#3498db] snes-glow"
                      : "bg-main/60 border-accent/40"
                )}
              >
                <div className={cn("mb-4 text-primary", theme === "nord" ? "text-white" : "")}>
                  {step.icon}
                </div>
                <h3
                  className={cn(
                    "text-lg font-semibold mb-3",
                    theme === "nord" ? "text-[#1a237e] drop-shadow" : getCardTextStyle(theme)
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "text-foreground/80",
                    theme === "nord" ? "text-[#1a237e]/90" : getCardTextStyle(theme)
                  )}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div
          className={cn(
            "max-w-4xl mx-auto mb-16 p-8 rounded-3xl",
            theme === "nord"
              ? "border border-white/20 text-white"
              : theme === "snes"
                ? "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e]"
                : "bg-main/60 border-accent/40"
          )}
        >
          <h2
            className={cn(
              "text-2xl font-bold mb-8 text-center",
              theme === "nord" ? "text-white drop-shadow-lg" : getCardTextStyle(theme)
            )}
          >
            Core Learning Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className={cn(
                  "p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                  theme === "nord"
                    ? "border border-white/20 text-white hover:bg-white/5"
                    : theme === "snes"
                      ? "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e] hover:border-[#3498db] snes-glow"
                      : "bg-main/60 border-accent/40"
                )}
              >
                <div className={cn("mb-4 text-primary", theme === "nord" ? "text-white" : "")}>
                  {section.icon}
                </div>
                <h3
                  className={cn(
                    "text-xl font-semibold mb-3",
                    theme === "nord" ? "text-[#1a237e] drop-shadow" : getCardTextStyle(theme)
                  )}
                >
                  {section.title}
                </h3>
                <p
                  className={cn(
                    "text-foreground/80",
                    theme === "nord" ? "text-[#1a237e]/90" : getCardTextStyle(theme)
                  )}
                >
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started Guide */}
        <div
          id="getting-started"
          className={cn(
            "max-w-4xl mx-auto mb-16 p-8 rounded-3xl border shadow-lg backdrop-blur-xl animate-fadein relative overflow-hidden",
            theme === "snes"
              ? "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e] backdrop-blur-xl"
              : theme === "dracula"
                ? "bg-white/10 border-blue-400/30"
                : theme === "nord"
                  ? "bg-gradient-to-br from-[#3b206a] to-[#5a3fa0] border border-white/30 text-white"
                  : "bg-main/60 border-accent/40"
          )}
        >
          {/* GameCube controller accent for Nord */}
          {theme === "nord" && (
            <img
              src={gamecubeController}
              alt="GameCube Controller"
              className="absolute top-4 right-6 w-12 h-12 opacity-30 animate-bounce-slow pointer-events-none"
              style={{ zIndex: 1 }}
            />
          )}
          <div className="flex flex-col items-center mb-2 relative z-10">
            <span
              className={cn(
                "text-4xl md:text-5xl mb-2",
                theme === "nord" && "animate-bounce-slow drop-shadow-lg"
              )}
            >
              🚀
            </span>
            <h2
              className={cn(
                "text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-1",
                getTextColor(theme),
                theme === "nord" && "drop-shadow-lg"
              )}
            >
              Getting Started with Algorithm Learning
            </h2>
          </div>
          <div
            className={cn(
              "mb-6 text-lg text-center font-medium",
              theme === "snes"
                ? "text-[#1a237e]/90 drop-shadow"
                : theme === "dracula"
                  ? "text-white/90 drop-shadow"
                  : theme === "nord"
                    ? "text-white/90 drop-shadow"
                    : "text-main/90 drop-shadow"
            )}
          >
            The{" "}
            <Link
              to="/cs-math"
              className="text-primary font-semibold hover:underline transition-colors"
            >
              Computer Science Math Theory!
            </Link>{" "}
            page is your gateway to understanding the mathematical foundations of algorithms. You'll
            find interactive lessons, visualizations, and practice problems that help you grasp
            complex concepts through step-by-step explanations and real-world examples.
          </div>
          <div className="border-t border-accent/30 my-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
            <div>
              <h3
                className={cn(
                  "text-xl font-semibold mb-3 flex items-center gap-2",
                  getTextColor(theme),
                  theme === "nord" && "drop-shadow-md"
                )}
              >
                📝 How to Use the App
              </h3>
              <ol
                className={cn(
                  "list-decimal list-inside space-y-3 text-base",
                  theme === "snes"
                    ? "text-[#1a237e]/90"
                    : theme === "nord"
                      ? "text-white/80"
                      : "text-foreground/70"
                )}
              >
                <li>
                  <span className="font-bold text-accent">📚 Start with the Basics:</span> Begin
                  with the mathematical foundations section to build your theoretical understanding.
                </li>
                <li>
                  <span className="font-bold text-accent2">🧭 Follow the Learning Path:</span>{" "}
                  Progress through topics in the recommended order, as each concept builds upon
                  previous knowledge.
                </li>
                <li>
                  <span className="font-bold text-accent3">🧑‍💻 Practice with Examples:</span> Use the
                  interactive code editor to implement algorithms and see how mathematical concepts
                  translate into code.
                </li>
                <li>
                  <span className="font-bold text-accent">📝 Track Your Progress:</span> Monitor
                  your understanding through quizzes and challenges at the end of each section.
                </li>
                <li>
                  <span className="font-bold text-accent2">📖 Use the Resources:</span> Access
                  additional materials, visualizations, and reference guides to deepen your
                  understanding.
                </li>
              </ol>
            </div>
            <div>
              <h3
                className={cn(
                  "text-xl font-semibold mb-3 flex items-center gap-2",
                  getTextColor(theme),
                  theme === "nord" && "drop-shadow-md"
                )}
              >
                🎮 Learning Path Integration
              </h3>
              <div
                className={cn(
                  "space-y-4 text-base",
                  theme === "snes"
                    ? "text-[#1a237e]/90"
                    : theme === "nord"
                      ? "text-white/80"
                      : "text-foreground/70"
                )}
              >
                <p>
                  Our platform offers three interconnected learning paths that work together to
                  build your algorithm skills:
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      title: "1. Algorithm Learning",
                      description: "Master the mathematical foundations and theoretical concepts.",
                      link: "/algorithm-learning",
                      accent:
                        theme === "nord"
                          ? "bg-gradient-to-br from-[#3b206a]/90 to-[#5a3fa0]/90 border border-white/30 text-white rounded-2xl shadow-lg"
                          : "bg-accent/20 border-accent/60",
                    },
                    {
                      title: "2. Python Learning",
                      description: "Learn Python programming fundamentals and syntax.",
                      link: "/python-techniques",
                      accent:
                        theme === "nord"
                          ? "bg-gradient-to-br from-[#3b206a]/90 to-[#5a3fa0]/90 border border-white/30 text-white rounded-2xl shadow-lg"
                          : "bg-accent2/20 border-accent2/60",
                    },
                    {
                      title: "3. Algorithm Trainer",
                      description: "Practice implementing algorithms with interactive challenges.",
                      link: "/algorithm-trainer",
                      accent:
                        theme === "nord"
                          ? "bg-gradient-to-br from-[#3b206a]/90 to-[#5a3fa0]/90 border border-white/30 text-white rounded-2xl shadow-lg"
                          : "bg-accent3/20 border-accent3/60",
                    },
                  ].map((path, index) => (
                    <div
                      key={index}
                      className={cn(
                        "p-5 rounded-xl border shadow-sm transition-transform hover:scale-[1.035] hover:shadow-xl cursor-pointer group relative overflow-hidden",
                        path.accent,
                        theme === "snes" ? "hover:border-[#3498db]" : ""
                      )}
                    >
                      {theme === "nord" && (
                        <span className="absolute top-2 right-3 text-2xl opacity-20 pointer-events-none">
                          🎮
                        </span>
                      )}
                      <h4
                        className={cn(
                          "font-semibold mb-2 text-lg group-hover:underline",
                          theme === "snes" ? "text-[#1a237e]" : ""
                        )}
                      >
                        {path.title}
                      </h4>
                      <p
                        className={cn("text-sm mb-2", theme === "snes" ? "text-[#1a237e]/90" : "")}
                      >
                        {path.description}
                      </p>
                      <Link
                        to={path.link}
                        className="text-primary font-semibold hover:underline text-sm transition-colors"
                      >
                        Start Learning →
                      </Link>
                    </div>
                  ))}
                </div>
                <p
                  className={cn(
                    "mt-4",
                    theme === "snes" ? "text-[#1a237e]/90" : theme === "nord" ? "text-white/80" : ""
                  )}
                >
                  We recommend starting with the{" "}
                  <Link to="/algo-guide" className="text-primary font-semibold hover:underline">
                    Algorithm Learning
                  </Link>{" "}
                  section to build your theoretical foundation, then moving to{" "}
                  <Link
                    to="/python-techniques"
                    className="text-primary font-semibold hover:underline"
                  >
                    Python Learning
                  </Link>{" "}
                  to master the programming language, and finally using the{" "}
                  <Link
                    to="/algorithm-trainer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Algorithm Trainer
                  </Link>{" "}
                  to practice implementing what you've learned.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-accent/30 my-6" />
          <div>
            <h3
              className={cn(
                "text-xl font-semibold mb-3 flex items-center gap-2",
                getTextColor(theme),
                theme === "nord" && "drop-shadow-md"
              )}
            >
              💡 Tips for Success
            </h3>
            <ul
              className={cn(
                "list-disc list-inside space-y-2 text-base",
                theme === "snes"
                  ? "text-[#1a237e]/90"
                  : theme === "nord"
                    ? "text-white/80"
                    : "text-foreground/70"
              )}
            >
              <li>Take time to understand the mathematical proofs and derivations</li>
              <li>Practice implementing algorithms from scratch</li>
              <li>Use the visualization tools to see how algorithms work</li>
              <li>Review complexity analysis for each algorithm</li>
              <li>Connect mathematical concepts to real-world applications</li>
            </ul>
          </div>
          <div className="flex justify-center mt-10">
            <Link
              to="/algorithm-learning"
              className={cn(
                "px-8 py-4 rounded-2xl font-bold text-lg shadow-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:from-purple-500 hover:to-pink-500 transition-all border-2 border-white/40 animate-glow",
                theme === "snes"
                  ? "bg-[#3498db] text-[#fffbe6] border-[#1a237e] hover:bg-[#1a237e] hover:text-[#fffbe6]"
                  : ""
              )}
            >
              Start Learning Now
            </Link>
          </div>
          {/* Animations */}
          <style>{`
            @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
            .animate-bounce-slow { animation: bounce-slow 2.5s infinite; }
            .animate-glow { box-shadow: 0 0 16px 4px #a78bfa, 0 0 32px 8px #7c3aed33; }
          `}</style>
        </div>
      </div>
    </Background>
  );
};

export default AboutPage;
