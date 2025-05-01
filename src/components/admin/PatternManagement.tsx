import React, { useState, useEffect } from "react";
import {
  Pattern,
  PatternFormData,
  TestCase,
} from "../../lib/types/pattern-management";
import { patternManagementService } from "../../lib/services/pattern-management";
import { useTheme } from "../../components/theme-context";

const PatternManagement: React.FC = () => {
  const { theme } = useTheme();
  const [patterns, setPatterns] = useState<Pattern[]>([]);
  const [duplicates, setDuplicates] = useState<{
    exactMatches: Pattern[];
    similarMatches: Pattern[];
  }>({ exactMatches: [], similarMatches: [] });
  const [showDuplicates, setShowDuplicates] = useState(false);
  const [formData, setFormData] = useState<PatternFormData>({
    name: "",
    category: "",
    timeComplexity: "",
    spaceComplexity: "",
    description: "",
    monsterHunterContext: "",
    example: "",
    process: [""],
    implementation: "",
    testCases: [
      {
        name: "",
        input: "",
        expectedOutput: "",
        monsterHunterTip: "",
      },
    ],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Load existing patterns on component mount
  useEffect(() => {
    const loadPatterns = async () => {
      const existingPatterns = await patternManagementService.getPatterns();
      setPatterns(existingPatterns);
    };
    loadPatterns();
  }, []);

  // Check for duplicates when form data changes
  useEffect(() => {
    const checkDuplicates = async () => {
      const result = await patternManagementService.checkForDuplicates(
        { id: "", ...formData },
        patterns
      );
      setDuplicates(result);
      if (result.exactMatches.length > 0 || result.similarMatches.length > 0) {
        setShowDuplicates(true);
      }
    };
    checkDuplicates();
  }, [formData, patterns]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProcessChange = (index: number, value: string) => {
    const newProcess = [...formData.process];
    newProcess[index] = value;
    setFormData((prev) => ({ ...prev, process: newProcess }));
  };

  const handleTestCaseChange = (
    index: number,
    field: keyof TestCase,
    value: string
  ) => {
    const newTestCases = [...formData.testCases];
    newTestCases[index] = { ...newTestCases[index], [field]: value };
    setFormData((prev) => ({ ...prev, testCases: newTestCases }));
  };

  const addProcessStep = () => {
    setFormData((prev) => ({ ...prev, process: [...prev.process, ""] }));
  };

  const addTestCase = () => {
    setFormData((prev) => ({
      ...prev,
      testCases: [
        ...prev.testCases,
        { name: "", input: "", expectedOutput: "", monsterHunterTip: "" },
      ],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check for duplicates before saving
    const { exactMatches, similarMatches } =
      await patternManagementService.checkForDuplicates(
        { id: "", ...formData },
        patterns
      );

    if (exactMatches.length > 0) {
      alert("An exact duplicate of this pattern already exists!");
      return;
    }

    if (similarMatches.length > 0) {
      const proceed = window.confirm(
        "Similar patterns found. Are you sure you want to proceed?"
      );
      if (!proceed) return;
    }

    const newPattern: Pattern = {
      id: Date.now().toString(),
      ...formData,
    };
    setPatterns((prev) => [...prev, newPattern]);
    // Here you would typically save to your backend
  };

  const getThemeClasses = () => {
    const baseClasses = {
      container: "p-6 max-w-4xl mx-auto",
      heading: "text-2xl font-bold mb-6",
      form: "space-y-6",
      input: "w-full p-2 rounded transition-colors duration-200",
      textarea: "w-full p-2 rounded transition-colors duration-200",
      button: "px-4 py-2 rounded transition-colors duration-200",
      card: "p-4 rounded-lg transition-colors duration-200",
      list: "space-y-4",
      label: "block text-sm font-medium mb-1",
      section: "mb-6",
      grid: "grid grid-cols-2 gap-4",
      warning: "mb-6",
      listItem: "text-sm",
      heading2: "text-xl font-bold mb-4",
      heading3: "font-medium mb-2",
      flex: "flex justify-between items-center",
      nav: "sticky top-0 z-50 w-full border-b backdrop-blur-sm",
      navContainer: "container mx-auto px-4 py-3",
      navContent: "flex items-center justify-between",
      navTitle: "text-lg font-semibold",
      navButton: "px-3 py-1.5 rounded-md transition-colors duration-200",
    };

    const isDarkTheme =
      theme === "dracula" ||
      theme === "solarized" ||
      theme === "nord" ||
      theme === "snes" ||
      theme === "ps2" ||
      theme === "re2" ||
      theme === "mh" ||
      theme === "kingdom-hearts";

    if (isDarkTheme) {
      return {
        ...baseClasses,
        container: `${baseClasses.container} bg-background/95 text-main`,
        heading: `${baseClasses.heading} text-main`,
        heading2: `${baseClasses.heading2} text-main`,
        heading3: `${baseClasses.heading3} text-main/90`,
        label: `${baseClasses.label} text-main/90`,
        input: `${baseClasses.input} bg-background/30 border-secondary/20 text-main focus:border-accent2/40 focus:ring-1 focus:ring-accent2/40 placeholder:text-main/50`,
        textarea: `${baseClasses.textarea} bg-background/30 border-secondary/20 text-main focus:border-accent2/40 focus:ring-1 focus:ring-accent2/40 placeholder:text-main/50`,
        button: {
          primary: `${baseClasses.button} bg-accent2/20 text-accent2 hover:bg-accent2/30`,
          secondary: `${baseClasses.button} bg-background/30 text-main hover:bg-background/40`,
          danger: `${baseClasses.button} bg-red-600/20 text-red-400 hover:bg-red-600/30`,
        },
        card: `${baseClasses.card} bg-background/30 border border-secondary/20 text-main`,
        warning: `${baseClasses.warning} bg-yellow-900/20 border-yellow-800/20 text-yellow-100`,
        listItem: `${baseClasses.listItem} text-main/80`,
        exactMatch: "text-red-400",
        similarMatch: "text-orange-400",
        nav: `${baseClasses.nav} bg-background/80 border-secondary/20 text-main`,
        navContainer: `${baseClasses.navContainer}`,
        navContent: `${baseClasses.navContent}`,
        navTitle: `${baseClasses.navTitle} text-main`,
        navButton: `${baseClasses.navButton} bg-background/30 text-main hover:bg-background/40`,
      };
    } else {
      return {
        ...baseClasses,
        container: `${baseClasses.container} bg-background/95 text-accent-foreground`,
        heading: `${baseClasses.heading} text-accent-foreground`,
        heading2: `${baseClasses.heading2} text-accent-foreground`,
        heading3: `${baseClasses.heading3} text-accent-foreground/90`,
        label: `${baseClasses.label} text-accent-foreground/90`,
        input: `${baseClasses.input} bg-background/30 border-accent/10 text-accent-foreground focus:border-accent/40 focus:ring-1 focus:ring-accent/40 placeholder:text-accent-foreground/50`,
        textarea: `${baseClasses.textarea} bg-background/30 border-accent/10 text-accent-foreground focus:border-accent/40 focus:ring-1 focus:ring-accent/40 placeholder:text-accent-foreground/50`,
        button: {
          primary: `${baseClasses.button} bg-accent/10 text-accent hover:bg-accent/20`,
          secondary: `${baseClasses.button} bg-background/30 text-accent-foreground hover:bg-background/40`,
          danger: `${baseClasses.button} bg-red-500/10 text-red-500 hover:bg-red-500/20`,
        },
        card: `${baseClasses.card} bg-background/30 border border-accent/10 text-accent-foreground`,
        warning: `${baseClasses.warning} bg-yellow-50 border-yellow-200 text-yellow-800`,
        listItem: `${baseClasses.listItem} text-accent-foreground/80`,
        exactMatch: "text-red-600",
        similarMatch: "text-orange-600",
        nav: `${baseClasses.nav} bg-background/80 border-accent/10 text-accent-foreground`,
        navContainer: `${baseClasses.navContainer}`,
        navContent: `${baseClasses.navContent}`,
        navTitle: `${baseClasses.navTitle} text-accent-foreground`,
        navButton: `${baseClasses.navButton} bg-background/30 text-accent-foreground hover:bg-background/40`,
      };
    }
  };

  const themeClasses = getThemeClasses();

  // Filter patterns based on search query and category
  const filteredPatterns = patterns.filter((pattern) => {
    const matchesSearch =
      pattern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pattern.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pattern.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || pattern.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = Array.from(new Set(patterns.map((p) => p.category)));

  return (
    <div className={themeClasses.container}>
      <h1 className={themeClasses.heading}>Pattern Management</h1>

      {/* Search and Filter Section */}
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Search patterns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`${themeClasses.input} flex-1`}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={themeClasses.input}
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Duplicate Warning Section */}
      {(duplicates.exactMatches.length > 0 ||
        duplicates.similarMatches.length > 0) && (
        <div className={`${themeClasses.card} ${themeClasses.warning}`}>
          <h2 className={themeClasses.heading2}>Potential Duplicates Found</h2>

          {duplicates.exactMatches.length > 0 && (
            <div className={themeClasses.section}>
              <h3
                className={`${themeClasses.heading3} ${themeClasses.exactMatch}`}
              >
                Exact Matches:
              </h3>
              <ul className="list-disc pl-5">
                {duplicates.exactMatches.map((match) => (
                  <li key={match.id} className={themeClasses.listItem}>
                    {match.name} (Category: {match.category})
                  </li>
                ))}
              </ul>
            </div>
          )}

          {duplicates.similarMatches.length > 0 && (
            <div className={themeClasses.section}>
              <h3
                className={`${themeClasses.heading3} ${themeClasses.similarMatch}`}
              >
                Similar Matches:
              </h3>
              <ul className="list-disc pl-5">
                {duplicates.similarMatches.map((match) => (
                  <li key={match.id} className={themeClasses.listItem}>
                    {match.name} (Category: {match.category})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className={themeClasses.form}>
        <div className={themeClasses.grid}>
          <div>
            <label className={themeClasses.label}>Pattern Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={themeClasses.input}
              required
            />
          </div>

          <div>
            <label className={themeClasses.label}>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className={themeClasses.input}
              required
            />
          </div>
        </div>

        <div className={themeClasses.grid}>
          <div>
            <label className={themeClasses.label}>Time Complexity</label>
            <input
              type="text"
              name="timeComplexity"
              value={formData.timeComplexity}
              onChange={handleInputChange}
              className={themeClasses.input}
              required
            />
          </div>

          <div>
            <label className={themeClasses.label}>Space Complexity</label>
            <input
              type="text"
              name="spaceComplexity"
              value={formData.spaceComplexity}
              onChange={handleInputChange}
              className={themeClasses.input}
              required
            />
          </div>
        </div>

        <div>
          <label className={themeClasses.label}>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={themeClasses.textarea}
            rows={3}
            required
          />
        </div>

        <div>
          <label className={themeClasses.label}>Monster Hunter Context</label>
          <textarea
            name="monsterHunterContext"
            value={formData.monsterHunterContext}
            onChange={handleInputChange}
            className={themeClasses.textarea}
            rows={3}
            required
          />
        </div>

        <div>
          <label className={themeClasses.label}>Example</label>
          <textarea
            name="example"
            value={formData.example}
            onChange={handleInputChange}
            className={themeClasses.textarea}
            rows={3}
            required
          />
        </div>

        <div>
          <label className={themeClasses.label}>Process Steps</label>
          {formData.process.map((step, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={step}
                onChange={(e) => handleProcessChange(index, e.target.value)}
                className={themeClasses.input}
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addProcessStep}
            className={themeClasses.button.secondary}
          >
            Add Process Step
          </button>
        </div>

        <div>
          <label className={themeClasses.label}>Implementation</label>
          <textarea
            name="implementation"
            value={formData.implementation}
            onChange={handleInputChange}
            className={`${themeClasses.textarea} font-mono`}
            rows={10}
            required
          />
        </div>

        <div>
          <label className={themeClasses.label}>Test Cases</label>
          {formData.testCases.map((testCase, index) => (
            <div key={index} className={`${themeClasses.card} mb-4`}>
              <div className={themeClasses.grid}>
                <div>
                  <label className={themeClasses.label}>Name</label>
                  <input
                    type="text"
                    value={testCase.name}
                    onChange={(e) =>
                      handleTestCaseChange(index, "name", e.target.value)
                    }
                    className={themeClasses.input}
                    required
                  />
                </div>
                <div>
                  <label className={themeClasses.label}>Input</label>
                  <input
                    type="text"
                    value={testCase.input}
                    onChange={(e) =>
                      handleTestCaseChange(index, "input", e.target.value)
                    }
                    className={themeClasses.input}
                    required
                  />
                </div>
              </div>
              <div className={themeClasses.grid}>
                <div>
                  <label className={themeClasses.label}>Expected Output</label>
                  <input
                    type="text"
                    value={testCase.expectedOutput}
                    onChange={(e) =>
                      handleTestCaseChange(
                        index,
                        "expectedOutput",
                        e.target.value
                      )
                    }
                    className={themeClasses.input}
                    required
                  />
                </div>
                <div>
                  <label className={themeClasses.label}>
                    Monster Hunter Tip
                  </label>
                  <input
                    type="text"
                    value={testCase.monsterHunterTip}
                    onChange={(e) =>
                      handleTestCaseChange(
                        index,
                        "monsterHunterTip",
                        e.target.value
                      )
                    }
                    className={themeClasses.input}
                    required
                  />
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addTestCase}
            className={themeClasses.button.secondary}
          >
            Add Test Case
          </button>
        </div>

        <button type="submit" className={themeClasses.button.primary}>
          Save Pattern
        </button>
      </form>

      {/* Patterns List Section */}
      <div className="mt-8">
        <div className={themeClasses.flex}>
          <h2 className={themeClasses.heading2}>
            All Patterns ({filteredPatterns.length})
          </h2>
        </div>

        <div className={themeClasses.list}>
          {filteredPatterns.map((pattern) => (
            <div key={pattern.id} className={themeClasses.card}>
              <div className="space-y-4">
                <div className={themeClasses.flex}>
                  <div>
                    <h3 className="font-bold">{pattern.name}</h3>
                    <p className={themeClasses.listItem}>
                      Category: {pattern.category}
                    </p>
                    <p className={themeClasses.listItem}>
                      Time: {pattern.timeComplexity} | Space:{" "}
                      {pattern.spaceComplexity}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        patternManagementService
                          .checkForDuplicates(pattern, patterns)
                          .then((result) => {
                            if (
                              result.exactMatches.length > 0 ||
                              result.similarMatches.length > 0
                            ) {
                              setDuplicates(result);
                              setShowDuplicates(true);
                            }
                          });
                      }}
                      className={themeClasses.button.secondary}
                    >
                      Check Duplicates
                    </button>
                    <button
                      onClick={() => {
                        const { id, ...patternData } = pattern;
                        setFormData(patternData);
                      }}
                      className={themeClasses.button.primary}
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-2">{pattern.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-1">Process Steps:</h4>
                      <ul className="list-disc pl-5 text-sm">
                        {pattern.process.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Test Cases:</h4>
                      <ul className="list-disc pl-5 text-sm">
                        {pattern.testCases.map((testCase, index) => (
                          <li key={index}>
                            {testCase.name}: {testCase.input} →{" "}
                            {testCase.expectedOutput}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatternManagement;
