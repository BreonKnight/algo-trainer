import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/use-theme";
import { Sigma, Calculator, LineChart, Binary, Network, Infinity } from "lucide-react";

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

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Master the Mathematics of Algorithms
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
          Go beyond coding to understand the mathematical principles that make algorithms work.
          Learn to think mathematically about problem-solving and algorithm design.
        </p>
      </div>

      {/* Learning Path */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Your Mathematical Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPath.map((step, index) => (
            <div
              key={index}
              className={cn(
                "p-6 rounded-xl border transition-all duration-300",
                "hover:shadow-lg hover:scale-[1.02]",
                theme === "dracula"
                  ? "bg-gray-800/50 border-gray-700/50"
                  : "bg-white/50 border-gray-200/50 backdrop-blur-sm"
              )}
            >
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
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
              theme === "dracula"
                ? "bg-gray-800/50 border-gray-700/50"
                : "bg-white/50 border-gray-200/50 backdrop-blur-sm"
            )}
          >
            <div className="mb-4 text-primary">{section.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
            <p className="text-foreground/70">{section.description}</p>
          </div>
        ))}
      </div>

      {/* Getting Started Guide */}
      <div
        className={cn(
          "max-w-4xl mx-auto mb-16 p-8 rounded-xl border",
          theme === "dracula"
            ? "bg-gray-800/50 border-gray-700/50"
            : "bg-white/50 border-gray-200/50 backdrop-blur-sm"
        )}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Getting Started with Algorithm Learning
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">What You'll Find</h3>
            <p className="text-foreground/70 mb-4">
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
            <h3 className="text-xl font-semibold mb-3">How to Use the App</h3>
            <ol className="list-decimal list-inside space-y-3 text-foreground/70">
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
            <h3 className="text-xl font-semibold mb-3">Learning Path Integration</h3>
            <div className="space-y-4 text-foreground/70">
              <p>
                Our platform offers three interconnected learning paths that work together to build
                your algorithm skills:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  className={cn(
                    "p-4 rounded-lg border",
                    theme === "dracula"
                      ? "bg-gray-800/30 border-gray-700/50"
                      : "bg-white/30 border-gray-200/50"
                  )}
                >
                  <h4 className="font-semibold mb-2">1. Algorithm Learning</h4>
                  <p className="text-sm mb-2">
                    Master the mathematical foundations and theoretical concepts.
                  </p>
                  <Link to="/algorithm-learning" className="text-primary hover:underline text-sm">
                    Start Learning →
                  </Link>
                </div>
                <div
                  className={cn(
                    "p-4 rounded-lg border",
                    theme === "dracula"
                      ? "bg-gray-800/30 border-gray-700/50"
                      : "bg-white/30 border-gray-200/50"
                  )}
                >
                  <h4 className="font-semibold mb-2">2. Python Learning</h4>
                  <p className="text-sm mb-2">Learn Python programming fundamentals and syntax.</p>
                  <Link to="/python-techniques" className="text-primary hover:underline text-sm">
                    Start Learning →
                  </Link>
                </div>
                <div
                  className={cn(
                    "p-4 rounded-lg border",
                    theme === "dracula"
                      ? "bg-gray-800/30 border-gray-700/50"
                      : "bg-white/30 border-gray-200/50"
                  )}
                >
                  <h4 className="font-semibold mb-2">3. Algorithm Trainer</h4>
                  <p className="text-sm mb-2">
                    Practice implementing algorithms with interactive challenges.
                  </p>
                  <Link to="/algorithm-trainer" className="text-primary hover:underline text-sm">
                    Start Training →
                  </Link>
                </div>
              </div>
              <p className="mt-4">
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
            <h3 className="text-xl font-semibold mb-3">Tips for Success</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground/70">
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
          to="/algorithm-learning"
          className={cn(
            "inline-flex items-center px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300",
            "hover:scale-105 hover:shadow-lg",
            theme === "dracula"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
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
