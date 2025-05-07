import { Sigma, Calculator, LineChart, Binary, Network, Infinity } from "lucide-react";
import { Link } from "react-router-dom";

import { useTheme } from "@/components/theme/use-theme";
import { cn } from "@/lib/utils";

const HomePage = () => {
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
      title: "1. Mathematical Foundations",
      description:
        "Start with the basics of discrete mathematics, set theory, and mathematical induction. Build a strong foundation for understanding algorithms.",
    },
    {
      title: "2. Complexity Analysis",
      description:
        "Learn to analyze algorithms mathematically, understanding time and space complexity, and how to optimize for different scenarios.",
    },
    {
      title: "3. Algorithm Design",
      description:
        "Apply mathematical principles to design efficient algorithms, understanding the trade-offs and mathematical patterns in different approaches.",
    },
    {
      title: "4. Advanced Topics",
      description:
        "Explore advanced mathematical concepts and their applications in algorithm design, from graph theory to dynamic programming.",
    },
  ];

  // Helper functions for Nord theme
  const getTagColor = (theme: string, type: string) => {
    if (theme === "nord") {
      if (type === "focus") return "bg-[#A3BE8C]/90 text-gray-900"; // Nord green
      if (type === "music") return "bg-[#B48EAD]/90 text-gray-900"; // Nord purple
      if (type === "facts") return "bg-[#EBCB8B]/90 text-gray-900"; // Nord yellow
    }
    if (type === "focus") return "bg-blue-100 text-blue-800";
    if (type === "music") return "bg-purple-100 text-purple-800";
    if (type === "facts") return "bg-yellow-100 text-yellow-800";
    return "";
  };

  const getTextColor = (theme: string) => {
    if (theme === "nord") return "text-gray-900";
    if (theme === "dracula") return "text-white";
    return "text-gray-900";
  };

  const getCardStyle = (theme: string) => {
    if (theme === "dracula") {
      return "bg-gray-800/50 border-gray-700/50 backdrop-blur-xl";
    }
    if (theme === "nord") {
      return "bg-white/90 border-[#D8DEE9]/70 backdrop-blur-xl";
    }
    return "bg-white/50 border-gray-200/50 backdrop-blur-xl";
  };

  const getCardHoverStyle = (theme: string) => {
    if (theme === "dracula") {
      return "hover:bg-gray-800/70 hover:border-gray-600/50";
    }
    if (theme === "nord") {
      return "hover:bg-white/95 hover:border-[#A3BE8C]/50";
    }
    return "hover:bg-white/70 hover:border-blue-200/50";
  };

  const getCardTextStyle = (theme: string) => {
    if (theme === "dracula") {
      return "text-white";
    }
    if (theme === "nord") {
      return "text-gray-900";
    }
    return "text-gray-900";
  };

  return (
    <div className="container mx-auto px-4 py-12 pb-24">
      {/* Hero Section */}
      <div className="text-center mb-12 pb-4 overflow-visible">
        <h1
          className={cn(
            "text-4xl md:text-5xl font-bold mb-6 leading-[1.3] pb-2 text-transparent bg-clip-text gradient-text",
            `gradient-text-${theme}`
          )}
        >
          Master Algorithms, Don't be Afraid :)
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-2">
          Go beyond coding to understand the mathematical principles that make algorithms work.
        </p>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Learn to think mathematically about problem-solving and algorithm design.
        </p>
      </div>

      {/* How It Works Stepper */}
      <div className="max-w-3x2 mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">How AlgoTrainer Works</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
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
                "flex flex-col items-center text-center flex-1 p-4 rounded-xl shadow-md",
                theme === "dracula"
                  ? "bg-gray-800/60 border border-gray-700/50"
                  : "bg-white/60 border border-gray-200/50"
              )}
            >
              <span className="text-3xl mb-2">{step.emoji}</span>
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <p className="text-sm text-foreground/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Informatics Bar Explanation */}
      <div
        className={cn(
          "max-w-4xl mx-auto mb-16 p-8 rounded-3xl border shadow-lg backdrop-blur-xl",
          theme === "dracula"
            ? "bg-white/10 border-blue-400/30"
            : theme === "nord"
              ? "bg-white/60 border-[#A3BE8C]/40"
              : "bg-white/70 border-blue-300/30"
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
            theme === "dracula"
              ? "text-white/90 drop-shadow"
              : theme === "nord"
                ? "text-gray-900/90 drop-shadow"
                : "text-gray-800/90 drop-shadow"
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
                getCardStyle(theme),
                getCardHoverStyle(theme)
              )}
            >
              <span className="text-3xl mb-2">{tool.emoji}</span>
              <h3 className={cn("font-semibold mb-1", getCardTextStyle(theme))}>{tool.title}</h3>
              <p className={cn("text-sm mb-2", getCardTextStyle(theme))}>{tool.description}</p>
              <div
                className={cn("text-xs rounded px-2 py-1 mb-1", getTagColor(theme, tool.tag.type))}
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
            theme === "nord" ? "text-gray-800/90" : "text-foreground/90"
          )}
        >
          <span
            className={cn(
              "px-2 py-1 rounded",
              theme === "dracula"
                ? "bg-blue-900/50 text-blue-200"
                : theme === "nord"
                  ? "bg-[#A3BE8C]/90 text-gray-900"
                  : "bg-blue-200 text-blue-900"
            )}
          >
            Tip:
          </span>{" "}
          Use the timer to break your study into 25-minute sessions, then take a 5-minute break.
          You'll learn faster, remember more, and enjoy the process!
        </p>
      </div>

      {/* Learning Path */}
      <div className="mb-16">
        <h2 className={cn("text-2xl font-bold mb-8 text-center", getCardTextStyle(theme))}>
          Your Mathematical Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPath.map((step, index) => (
            <div
              key={index}
              className={cn(
                "p-6 rounded-xl border transition-all duration-300",
                "hover:shadow-lg hover:scale-[1.02]",
                getCardStyle(theme),
                getCardHoverStyle(theme)
              )}
            >
              <h3 className={cn("text-lg font-semibold mb-3", getCardTextStyle(theme))}>
                {step.title}
              </h3>
              <p className={cn("text-foreground/80", getCardTextStyle(theme))}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {sections.map((section, index) => (
          <div
            key={index}
            className={cn(
              "p-6 rounded-xl border transition-all duration-300",
              "hover:shadow-lg hover:scale-[1.02]",
              getCardStyle(theme),
              getCardHoverStyle(theme)
            )}
          >
            <div className="mb-4 text-primary">{section.icon}</div>
            <h3 className={cn("text-xl font-semibold mb-3", getCardTextStyle(theme))}>
              {section.title}
            </h3>
            <p className={cn("text-foreground/80", getCardTextStyle(theme))}>
              {section.description}
            </p>
          </div>
        ))}
      </div>

      {/* Getting Started Guide */}
      <div
        className={cn(
          "max-w-4xl mx-auto mb-16 p-8 rounded-xl border",
          getCardStyle(theme),
          getCardHoverStyle(theme)
        )}
      >
        <h2 className={cn("text-2xl font-bold mb-6 text-center", getCardTextStyle(theme))}>
          Getting Started with Algorithm Learning
        </h2>

        <div className="space-y-6">
          <div>
            <h3
              className={cn("text-xl font-semibold mb-3", theme === "nord" ? "text-gray-900" : "")}
            >
              What You'll Find
            </h3>
            <p className={cn(theme === "nord" ? "text-gray-800/90" : "text-foreground/70", "mb-4")}>
              The{" "}
              <Link to="/algorithm-learning" className="text-primary hover:underline">
                Algorithm Learning
              </Link>{" "}
              page is your gateway to understanding the mathematical foundations of algorithms.
              You'll find interactive lessons, visualizations, and practice problems that help you
              grasp complex concepts through step-by-step explanations and real-world examples.
            </p>
          </div>

          <div>
            <h3
              className={cn("text-xl font-semibold mb-3", theme === "nord" ? "text-gray-900" : "")}
            >
              How to Use the App
            </h3>
            <ol
              className={cn(
                "list-decimal list-inside space-y-3",
                theme === "nord" ? "text-gray-800/90" : "text-foreground/70"
              )}
            >
              <li>
                <span className="font-medium">Start with the Basics:</span> Begin with the
                mathematical foundations section to build your theoretical understanding.
              </li>
              <li>
                <span className="font-medium">Follow the Learning Path:</span> Progress through
                topics in the recommended order, as each concept builds upon previous knowledge.
              </li>
              <li>
                <span className="font-medium">Practice with Examples:</span> Use the interactive
                code editor to implement algorithms and see how mathematical concepts translate into
                code.
              </li>
              <li>
                <span className="font-medium">Track Your Progress:</span> Monitor your understanding
                through quizzes and challenges at the end of each section.
              </li>
              <li>
                <span className="font-medium">Use the Resources:</span> Access additional materials,
                visualizations, and reference guides to deepen your understanding.
              </li>
            </ol>
          </div>

          <div>
            <h3
              className={cn("text-xl font-semibold mb-3", theme === "nord" ? "text-gray-900" : "")}
            >
              Learning Path Integration
            </h3>
            <div
              className={cn(
                "space-y-4",
                theme === "nord" ? "text-gray-800/90" : "text-foreground/70"
              )}
            >
              <p>
                Our platform offers three interconnected learning paths that work together to build
                your algorithm skills:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "1. Algorithm Learning",
                    description: "Master the mathematical foundations and theoretical concepts.",
                    link: "/algorithm-learning",
                  },
                  {
                    title: "2. Python Learning",
                    description: "Learn Python programming fundamentals and syntax.",
                    link: "/python-techniques",
                  },
                  {
                    title: "3. Algorithm Trainer",
                    description: "Practice implementing algorithms with interactive challenges.",
                    link: "/algorithm-trainer",
                  },
                ].map((path, index) => (
                  <div
                    key={index}
                    className={cn(
                      "p-4 rounded-lg border",
                      theme === "dracula"
                        ? "bg-gray-800/30 border-gray-700/50"
                        : theme === "nord"
                          ? "bg-white/90 border-[#D8DEE9]/70"
                          : "bg-white/30 border-gray-200/50"
                    )}
                  >
                    <h4
                      className={cn("font-semibold mb-2", theme === "nord" ? "text-gray-900" : "")}
                    >
                      {path.title}
                    </h4>
                    <p className={cn("text-sm mb-2", theme === "nord" ? "text-gray-800/90" : "")}>
                      {path.description}
                    </p>
                    <Link to={path.link} className="text-primary hover:underline text-sm">
                      Start Learning →
                    </Link>
                  </div>
                ))}
              </div>
              <p className={cn("mt-4", theme === "nord" ? "text-gray-800/90" : "")}>
                We recommend starting with the{" "}
                <Link to="/algorithm-learning" className="text-primary hover:underline">
                  Algorithm Learning
                </Link>{" "}
                section to build your theoretical foundation, then moving to{" "}
                <Link to="/python-techniques" className="text-primary hover:underline">
                  Python Learning
                </Link>{" "}
                to master the programming language, and finally using the{" "}
                <Link to="/algorithm-trainer" className="text-primary hover:underline">
                  Algorithm Trainer
                </Link>{" "}
                to practice implementing what you've learned.
              </p>
            </div>
          </div>

          <div>
            <h3
              className={cn("text-xl font-semibold mb-3", theme === "nord" ? "text-gray-900" : "")}
            >
              Tips for Success
            </h3>
            <ul
              className={cn(
                "list-disc list-inside space-y-2",
                theme === "nord" ? "text-gray-800/90" : "text-foreground/70"
              )}
            >
              <li>Take time to understand the mathematical proofs and derivations</li>
              <li>Practice implementing algorithms from scratch</li>
              <li>Use the visualization tools to see how algorithms work</li>
              <li>Review complexity analysis for each algorithm</li>
              <li>Connect mathematical concepts to real-world applications</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Link
          to="/cs-math"
          className={cn(
            "inline-flex items-center px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300",
            "hover:scale-105 hover:shadow-lg",
            theme === "dracula"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              : theme === "nord"
                ? "bg-gradient-to-r from-[#A3BE8C] to-[#B48EAD] text-gray-900"
                : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
          )}
        >
          Begin Your Mathematical Journey
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
