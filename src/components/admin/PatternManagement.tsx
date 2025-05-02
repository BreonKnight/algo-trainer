import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Pattern,
  PatternFormData,
  TestCase,
} from "../../lib/types/pattern-management";
import { patternManagementService } from "../../lib/services/pattern-management";
import { toast } from "react-hot-toast";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided,
  DraggableProvided,
} from "react-beautiful-dnd";
import { patternNameMapping } from "../../lib/pseudocode/utils/pattern-mapping";
import {
  findDuplicatePatterns,
  findIncompletePatterns,
  validatePatternNames,
  validatePatternCategories,
  validateComponentOrder,
} from "./pattern-management/PatternValidation";

type FormStep =
  | "basic"
  | "details"
  | "implementation"
  | "test-cases"
  | "preview";

type SortField = "name" | "category" | "timeComplexity" | "spaceComplexity";
type SortOrder = "asc" | "desc";

// Add new types for advanced filtering
type FilterOption = {
  field: keyof Pattern;
  value: string;
  operator: "equals" | "contains" | "startsWith" | "endsWith";
};

// Fix the debug info type
interface DebugInfo {
  patternKeys: string[];
  patternMapping: Record<string, string>;
  patternCategories: Record<string, number>;
  validationResults: {
    duplicates: Array<{
      pattern1: string;
      pattern2: string;
      similarity: number;
    }>;
    incompletePatterns: string[];
    namingIssues: Array<{ pattern: string; issue: string }>;
    categoryIssues: Array<{ pattern: string; issue: string }>;
    orderIssues: Array<{ pattern: string; issue: string }>;
  };
}

const PatternManagement: React.FC = () => {
  // Removed unused useTheme destructure
  const [patterns, setPatterns] = useState<Pattern[]>([]);
  const [originalOrder, setOriginalOrder] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<"form" | "list">("form");
  const [debugMode, setDebugMode] = useState(false);
  const [debugInfo, setDebugInfo] = useState<DebugInfo>({
    patternKeys: [],
    patternMapping: {},
    patternCategories: {},
    validationResults: {
      duplicates: [],
      incompletePatterns: [],
      namingIssues: [],
      categoryIssues: [],
      orderIssues: [],
    },
  });
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
  const [activeStep, setActiveStep] = useState<FormStep>("basic");
  const [expandedPatterns, setExpandedPatterns] = useState<Set<string>>(
    new Set()
  );
  const [sortBy, setSortBy] = useState<SortField>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedPatterns, setSelectedPatterns] = useState<Set<string>>(
    new Set()
  );
  const [activeFilters, setActiveFilters] = useState<FilterOption[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    field: SortField;
    order: SortOrder;
  }>({ field: "name", order: "asc" });
  const [savedViews, setSavedViews] = useState<
    {
      name: string;
      filters: FilterOption[];
      sortConfig: { field: SortField; order: SortOrder };
    }[]
  >([]);

  // Load existing patterns on component mount
  useEffect(() => {
    const loadPatterns = async () => {
      try {
        setIsLoading(true);
        const existingPatterns = await patternManagementService.getPatterns();
        setPatterns(existingPatterns);
        // Store the original order of components
        setOriginalOrder(existingPatterns.map((p) => p.id));
      } catch (error) {
        toast.error("Failed to load patterns");
      } finally {
        setIsLoading(false);
      }
    };
    loadPatterns();
  }, []);

  // Validation helper functions
  const editDistance = (s1: string, s2: string): number => {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
        if (i === 0) costs[j] = j;
        else if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  };

  const calculateStringSimilarity = useCallback(
    (str1: string, str2: string): number => {
      if (!str1 || !str2) return 0;
      const longer = str1.length > str2.length ? str1 : str2;
      const shorter = str1.length > str2.length ? str2 : str1;
      const longerLength = longer.length;
      if (longerLength === 0) return 1.0;
      return (longerLength - editDistance(longer, shorter)) / longerLength;
    },
    []
  );

  const findDuplicatePatterns = useCallback(
    (patterns: Pattern[]) => {
      const duplicates: Array<{
        pattern1: string;
        pattern2: string;
        similarity: number;
      }> = [];

      for (let i = 0; i < patterns.length; i++) {
        for (let j = i + 1; j < patterns.length; j++) {
          const nameSimilarity = calculateStringSimilarity(
            patterns[i].name,
            patterns[j].name
          );
          const descSimilarity = calculateStringSimilarity(
            patterns[i].description,
            patterns[j].description
          );

          const similarity = nameSimilarity * 0.6 + descSimilarity * 0.4;

          if (similarity > 0.7) {
            duplicates.push({
              pattern1: patterns[i].name,
              pattern2: patterns[j].name,
              similarity: Math.round(similarity * 100),
            });
          }
        }
      }

      return duplicates.sort((a, b) => b.similarity - a.similarity);
    },
    [calculateStringSimilarity]
  );

  const validatePatternCategories = (
    patterns: Pattern[],
    patternCategories: Record<string, number>
  ) => {
    const validCategories = Object.keys(patternCategories);
    return patterns
      .filter(
        (pattern) =>
          !validCategories.some((category) => pattern.category === category)
      )
      .map((pattern) => ({
        pattern: pattern.name,
        issue: `Invalid category: ${pattern.category}`,
      }));
  };

  const findIncompletePatterns = (patterns: Pattern[]): string[] => {
    return patterns
      .filter(
        (pattern) =>
          !pattern.name ||
          !pattern.category ||
          !pattern.description ||
          !pattern.implementation ||
          pattern.testCases.length === 0
      )
      .map((pattern) => pattern.name);
  };

  const validatePatternNames = (
    patterns: Pattern[]
  ): Array<{ pattern: string; issue: string }> => {
    const issues: Array<{ pattern: string; issue: string }> = [];

    patterns.forEach((pattern) => {
      if (!pattern.name) {
        issues.push({
          pattern: "Unnamed Pattern",
          issue: "Pattern has no name",
        });
        return;
      }

      if (!/^[A-Z][a-zA-Z\s]*$/.test(pattern.name)) {
        issues.push({
          pattern: pattern.name,
          issue:
            "Name should start with capital letter and contain only letters and spaces",
        });
      }

      if (pattern.name.length > 50) {
        issues.push({
          pattern: pattern.name,
          issue: "Name is too long (max 50 characters)",
        });
      }
    });

    return issues;
  };

  // Add debug information update effect
  useEffect(() => {
    if (debugMode) {
      // Get all pattern keys from the patterns array
      const patternKeys = patterns.map((p) => p.name);

      // Get pattern categories and their counts
      const categories = {
        "Sorting Algorithms": patternKeys.filter((key) => key.includes("Sort"))
          .length,
        "Searching Algorithms": patternKeys.filter((key) =>
          key.includes("Search")
        ).length,
        "Graph Algorithms": patternKeys.filter(
          (key) =>
            key.includes("Graph") ||
            key === "BFS" ||
            key === "DFS" ||
            key === "Kruskal" ||
            key === "Prim" ||
            key === "Bellman-Ford" ||
            key === "Floyd-Warshall" ||
            key === "A* Search" ||
            key === "Network Flow" ||
            key === "Maximum Bipartite Matching" ||
            key === "Topological Sort" ||
            key === "Articulation Points"
        ).length,
        "Dynamic Programming": patternKeys.filter(
          (key) =>
            key.includes("DP") ||
            key === "Kadane's Algorithm" ||
            key.includes("Matrix Chain") ||
            key.includes("Matrix Exponentiation")
        ).length,
        "Matrix Algorithms": patternKeys.filter(
          (key) =>
            key.includes("Matrix") ||
            key === "Grid Traversal" ||
            key === "Rotate Matrix"
        ).length,
        "Number Theory": patternKeys.filter(
          (key) =>
            key === "Extended Euclidean" ||
            key === "Chinese Remainder Theorem" ||
            key === "Sieve of Eratosthenes" ||
            key === "Prime Factorization" ||
            key === "Miller-Rabin Primality Test"
        ).length,
        Techniques: patternKeys.filter(
          (key) =>
            key === "Greedy" ||
            key.includes("Greedy") ||
            key === "Backtracking" ||
            key === "Divide and Conquer" ||
            key === "Recursion" ||
            key === "Bit Manipulation" ||
            key === "Prefix Sum"
        ).length,
        "Data Structures": patternKeys.filter(
          (key) =>
            key.includes("Tree") ||
            key.includes("Stack") ||
            key.includes("Queue") ||
            key.includes("List") ||
            key.includes("Heap") ||
            key.includes("Hash")
        ).length,
        "String Algorithms": patternKeys.filter(
          (key) =>
            key.includes("String") ||
            key === "Suffix Tree" ||
            key === "Suffix Array" ||
            key.includes("KMP") ||
            key.includes("Rabin-Karp")
        ).length,
      };

      // Run validation checks
      const validationResults = {
        duplicates: findDuplicatePatterns(patterns),
        incompletePatterns: findIncompletePatterns(patterns),
        namingIssues: validatePatternNames(patterns),
        categoryIssues: validatePatternCategories(patterns, categories),
        orderIssues: validateComponentOrder(patterns, originalOrder),
      };

      setDebugInfo({
        patternKeys,
        patternMapping: patternNameMapping,
        patternCategories: categories,
        validationResults,
      });
    }
  }, [debugMode, patterns, findDuplicatePatterns, originalOrder]);

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = "Pattern name is required";
    if (!formData.category.trim()) errors.category = "Category is required";
    if (!formData.timeComplexity.trim())
      errors.timeComplexity = "Time complexity is required";
    if (!formData.spaceComplexity.trim())
      errors.spaceComplexity = "Space complexity is required";
    if (!formData.description.trim())
      errors.description = "Description is required";
    if (!formData.monsterHunterContext.trim())
      errors.monsterHunterContext = "Monster Hunter context is required";
    if (!formData.example.trim()) errors.example = "Example is required";
    if (!formData.implementation.trim())
      errors.implementation = "Implementation is required";
    if (formData.process.some((step) => !step.trim()))
      errors.process = "All process steps must be filled";
    if (
      formData.testCases.some(
        (testCase) =>
          !testCase.name.trim() ||
          !testCase.input.trim() ||
          !testCase.expectedOutput.trim() ||
          !testCase.monsterHunterTip.trim()
      )
    )
      errors.testCases = "All test case fields must be filled";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleProcessChange = (index: number, value: string) => {
    const newProcess = [...formData.process];
    newProcess[index] = value;
    setFormData((prev) => ({ ...prev, process: newProcess }));
    // Clear process error when user starts typing
    if (formErrors.process) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.process;
        return newErrors;
      });
    }
  };

  const handleTestCaseChange = (
    index: number,
    field: keyof TestCase,
    value: string
  ) => {
    const newTestCases = [...formData.testCases];
    newTestCases[index] = { ...newTestCases[index], [field]: value };
    setFormData((prev) => ({ ...prev, testCases: newTestCases }));
    // Clear test case error when user starts typing
    if (formErrors.testCases) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.testCases;
        return newErrors;
      });
    }
  };

  const addProcessStep = () => {
    setFormData((prev) => ({ ...prev, process: [...prev.process, ""] }));
  };

  const removeProcessStep = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      process: prev.process.filter((_, i) => i !== index),
    }));
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

  const removeTestCase = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      testCases: prev.testCases.filter((_, i) => i !== index),
    }));
  };

  const clearForm = () => {
    if (
      window.confirm(
        "Are you sure you want to clear the form? All unsaved changes will be lost."
      )
    ) {
      setFormData({
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
      setFormErrors({});
    }
  };

  const validatePattern = (pattern: Pattern): string[] => {
    const errors: string[] = [];

    // Debug log for pattern mapping
    console.log("Pattern Mapping Debug:", {
      patternName: pattern.name,
      patternMapping: debugInfo.patternMapping[pattern.name],
      patternCategories: debugInfo.patternCategories,
      allPatterns: patterns.map((p) => p.name),
    });

    // Check if pattern name exists in pattern types
    const categoryKeys = Object.keys(debugInfo.patternCategories);
    const patternExists = categoryKeys.some(
      (category) =>
        debugInfo.patternCategories[category] > 0 &&
        patterns.some((p) => p.name === pattern.name)
    );

    if (!patternExists) {
      errors.push(`Pattern name "${pattern.name}" is not a valid pattern type`);
    }

    // Check if pattern name exists in pattern mapping
    if (!debugInfo.patternMapping[pattern.name]) {
      errors.push(
        `Pattern name "${pattern.name}" is not mapped in pattern-mapping.ts`
      );
    }

    // Check for duplicate pattern names
    const duplicateCount = patterns.filter(
      (p) => p.name === pattern.name
    ).length;
    if (duplicateCount > 1) {
      errors.push(
        `Pattern name "${pattern.name}" appears ${duplicateCount} times in the patterns array`
      );
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the form errors before submitting");
      return;
    }

    try {
      setIsLoading(true);

      const newPattern: Pattern = {
        id: Date.now().toString(),
        ...formData,
      };

      // Validate pattern
      const validationErrors = validatePattern(newPattern);
      if (validationErrors.length > 0) {
        toast.error(
          <div>
            <p className="font-bold">Pattern validation failed:</p>
            <ul className="list-disc pl-4">
              {validationErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>,
          { duration: 5000 }
        );
        return;
      }

      // Check for duplicates before saving
      const { exactMatches, similarMatches } =
        await patternManagementService.checkForDuplicates(newPattern, patterns);

      if (exactMatches.length > 0) {
        toast.error("An exact duplicate of this pattern already exists!");
        return;
      }

      if (similarMatches.length > 0) {
        const proceed = window.confirm(
          "Similar patterns found. Are you sure you want to proceed?"
        );
        if (!proceed) return;
      }

      // Save to backend
      await patternManagementService.savePattern(newPattern);
      setPatterns((prev) => [...prev, newPattern]);
      toast.success("Pattern saved successfully!");
      clearForm();
    } catch (error) {
      toast.error("Failed to save pattern");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeletePattern = async (patternId: string): Promise<void> => {
    if (window.confirm("Are you sure you want to delete this pattern?")) {
      try {
        setIsLoading(true);
        await patternManagementService.deletePattern(patternId);
        setPatterns((prev) => prev.filter((p) => p.id !== patternId));
        toast.success("Pattern deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete pattern");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleEditPattern = (pattern: Pattern): void => {
    if (
      window.confirm(
        "Are you sure you want to edit this pattern? Current form data will be lost."
      )
    ) {
      setFormData(pattern);
      setActiveTab("form");
      window.scrollTo(0, 0);
    }
  };

  const handleCopyPattern = (pattern: Pattern): void => {
    setFormData({
      ...pattern,
      name: `${pattern.name} (Copy)`,
    });
    setActiveTab("form");
    window.scrollTo(0, 0);
  };

  const getThemeClasses = () => {
    const baseClasses = {
      container: "p-6 max-w-7xl mx-auto",
      heading:
        "text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",
      form: "space-y-6",
      input:
        "w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500",
      textarea:
        "w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500",
      button: {
        primary:
          "px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        secondary:
          "px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        danger:
          "px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
      },
      card: "p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
      list: "space-y-4",
      label:
        "block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300",
      section: "mb-6",
      grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
      warning:
        "mb-6 p-4 rounded-2xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/20",
      listItem: "text-sm text-gray-600 dark:text-gray-400",
      heading2:
        "text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",
      heading3:
        "text-lg font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",
      flex: "flex justify-between items-center",
      nav: "sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
      navContainer: "container mx-auto px-4 py-3",
      navContent: "flex items-center justify-between",
      navTitle:
        "text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",
      navButton: "px-4 py-2 rounded-xl transition-all duration-300",
      stepNav:
        "flex justify-between mb-6 p-3 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900",
      stepButton: "px-4 py-2 rounded-xl transition-all duration-300",
      activeStep: "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
      inactiveStep:
        "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600",
      checkbox:
        "w-4 h-4 rounded-lg border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 transition-all duration-300",
      dragHandle:
        "cursor-move text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300",
      loadingSkeleton:
        "animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl",
      error: "text-sm text-red-500 mt-1",
      codeBlock:
        "rounded-xl overflow-hidden my-4 border border-gray-200 dark:border-gray-700",
      codeBlockHeader:
        "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 text-sm font-mono",
      codeBlockContent: "p-4",
      testCaseCard:
        "bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 p-4 rounded-xl hover:shadow-md transition-all duration-300",
      processStep:
        "flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-300",
      processStepBullet: "text-blue-500 dark:text-blue-400",
      actionButtons: "flex gap-2",
      searchBar: "flex flex-col md:flex-row gap-3 mb-4",
      filterControls: "flex flex-wrap gap-3",
      patternCard: "space-y-4",
      patternHeader: "flex items-center gap-4",
      patternTitle:
        "text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",
      patternMeta: "text-sm text-gray-600 dark:text-gray-400",
      patternActions: "flex gap-2",
      patternContent: "space-y-4 mt-4",
      patternSection: "space-y-2",
      patternSubsection: "space-y-1",
      emptyState: "text-center py-8",
      emptyStateTitle:
        "text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2",
      emptyStateText: "text-gray-500 dark:text-gray-400",
      tabButton:
        "px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105",
      activeTab: "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
      inactiveTab:
        "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600",
      formStep:
        "p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900",
      formGroup: "space-y-2",
      formLabel: "text-sm font-medium text-gray-700 dark:text-gray-300",
      formInput:
        "w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500",
      formError: "text-sm text-red-500 mt-1",
      patternList: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
      patternListItem:
        "p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1",
      patternListTitle:
        "text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400",
      patternListMeta: "text-sm text-gray-600 dark:text-gray-400",
      patternListActions: "flex gap-2 mt-4",
    };

    return baseClasses;
  };

  const themeClasses = getThemeClasses();

  // Get unique categories
  const categories = Array.from(new Set(patterns.map((p) => p.category)));

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    if (result.source.index === result.destination.index) return;

    let newPatterns;
    if (result.type === "process") {
      const items = Array.from(formData.process);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setFormData((prev) => ({ ...prev, process: items }));
    } else if (result.type === "testCases") {
      const items = Array.from(formData.testCases);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setFormData((prev) => ({ ...prev, testCases: items }));
    } else {
      // Handle pattern reordering
      newPatterns = Array.from(patterns);
      const [reorderedItem] = newPatterns.splice(result.source.index, 1);
      newPatterns.splice(result.destination.index, 0, reorderedItem);
      setPatterns(newPatterns);

      // Validate the new order
      const orderIssues = validateComponentOrder(newPatterns, originalOrder);
      if (orderIssues.length > 0) {
        toast.error("Component order validation failed. Reverting changes.");
        setPatterns(patterns); // Revert changes
      }
    }
  };

  const togglePatternExpansion = (patternId: string): void => {
    setExpandedPatterns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(patternId)) {
        newSet.delete(patternId);
      } else {
        newSet.add(patternId);
      }
      return newSet;
    });
  };

  const togglePatternSelection = (patternId: string): void => {
    setSelectedPatterns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(patternId)) {
        newSet.delete(patternId);
      } else {
        newSet.add(patternId);
      }
      return newSet;
    });
  };

  const handleBulkDelete = async (): Promise<void> => {
    if (selectedPatterns.size === 0) return;

    if (
      window.confirm(
        `Are you sure you want to delete ${selectedPatterns.size} patterns?`
      )
    ) {
      try {
        setIsLoading(true);
        await Promise.all(
          Array.from(selectedPatterns).map((id) =>
            patternManagementService.deletePattern(id)
          )
        );
        setPatterns((prev) => prev.filter((p) => !selectedPatterns.has(p.id)));
        setSelectedPatterns(new Set());
        toast.success(
          `${selectedPatterns.size} patterns deleted successfully!`
        );
      } catch (error) {
        toast.error("Failed to delete patterns");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleExportPatterns = (): void => {
    const patternsToExport = patterns.filter((p) => selectedPatterns.has(p.id));
    const dataStr = JSON.stringify(patternsToExport, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(
      dataStr
    )}`;
    const exportFileDefaultName = "patterns.json";

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const handleImportPatterns = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const result = e.target?.result;
        if (typeof result !== "string") {
          toast.error("Invalid file format");
          return;
        }

        const importedPatterns = JSON.parse(result) as Pattern[];
        const validatedPatterns = importedPatterns.filter((p) => {
          const errors = patternManagementService.validatePattern(p);
          return errors.length === 0;
        });

        if (validatedPatterns.length === 0) {
          toast.error("No valid patterns found in the file");
          return;
        }

        setIsLoading(true);
        await Promise.all(
          validatedPatterns.map((p) => patternManagementService.savePattern(p))
        );
        setPatterns((prev) => [...prev, ...validatedPatterns]);
        toast.success(
          `${validatedPatterns.length} patterns imported successfully!`
        );
      } catch (error) {
        toast.error("Failed to import patterns");
      } finally {
        setIsLoading(false);
      }
    };
    reader.readAsText(file);
  };

  // Add new functions for filtering and sorting
  const addFilter = (filter: FilterOption): void => {
    setActiveFilters((prev) => [...prev, filter]);
  };

  const removeFilter = (index: number): void => {
    setActiveFilters((prev) => prev.filter((_, i) => i !== index));
  };

  const saveCurrentView = (name: string): void => {
    setSavedViews((prev) => [
      ...prev,
      {
        name,
        filters: [...activeFilters],
        sortConfig: { ...sortConfig },
      },
    ]);
  };

  const loadSavedView = (index: number): void => {
    const view = savedViews[index];
    setActiveFilters(view.filters);
    setSortConfig(view.sortConfig);
  };

  // Update the sortedAndFilteredPatterns calculation
  const sortedAndFilteredPatterns = useMemo(() => {
    const applyFilters = (patterns: Pattern[]) => {
      return patterns.filter((pattern) => {
        return activeFilters.every((filter) => {
          const value = pattern[filter.field]?.toString().toLowerCase() || "";
          const filterValue = filter.value.toLowerCase();

          switch (filter.operator) {
            case "equals":
              return value === filterValue;
            case "contains":
              return value.includes(filterValue);
            case "startsWith":
              return value.startsWith(filterValue);
            case "endsWith":
              return value.endsWith(filterValue);
            default:
              return true;
          }
        });
      });
    };

    let filtered = applyFilters(patterns);

    return filtered.sort((a, b) => {
      const aValue = a[sortConfig.field];
      const bValue = b[sortConfig.field];
      const modifier = sortConfig.order === "asc" ? 1 : -1;

      if (typeof aValue === "string" && typeof bValue === "string") {
        return aValue.localeCompare(bValue) * modifier;
      }
      return 0;
    });
  }, [patterns, activeFilters, sortConfig]);

  const PatternListItem: React.FC<{ pattern: Pattern }> = ({ pattern }) => {
    const validationErrors = validatePattern(pattern);
    const hasErrors = validationErrors.length > 0;

    return (
      <div className={themeClasses.patternListItem}>
        <div className={themeClasses.patternCard}>
          <div className={themeClasses.patternHeader}>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={selectedPatterns.has(pattern.id)}
                onChange={() => togglePatternSelection(pattern.id)}
                className={themeClasses.checkbox}
              />
              <div>
                <h3
                  className={`${themeClasses.patternListTitle} ${
                    hasErrors ? "text-red-500" : ""
                  }`}
                >
                  {pattern.name}
                </h3>
                {hasErrors && (
                  <div className="mt-1 text-sm text-red-500">
                    <ul className="list-disc pl-4">
                      {validationErrors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className={themeClasses.patternListMeta}>
                  Category: {pattern.category}
                </p>
                <p className={themeClasses.patternListMeta}>
                  Time: {pattern.timeComplexity} | Space:{" "}
                  {pattern.spaceComplexity}
                </p>
              </div>
            </div>
          </div>
          <div className={themeClasses.patternListActions}>
            <button
              onClick={() => handleCopyPattern(pattern)}
              className={themeClasses.button.secondary}
            >
              Copy
            </button>
            <button
              onClick={() => handleEditPattern(pattern)}
              className={themeClasses.button.primary}
            >
              Edit
            </button>
            <button
              onClick={() => handleDeletePattern(pattern.id)}
              className={themeClasses.button.danger}
            >
              Delete
            </button>
            <button
              onClick={() => togglePatternExpansion(pattern.id)}
              className={themeClasses.button.secondary}
            >
              {expandedPatterns.has(pattern.id) ? "Collapse" : "Expand"}
            </button>
          </div>
          {expandedPatterns.has(pattern.id) && (
            <div className={themeClasses.patternContent}>
              <p className="text-gray-700 dark:text-gray-300">
                {pattern.description}
              </p>
              <div className={themeClasses.grid}>
                <div className={themeClasses.patternSection}>
                  <h4 className={themeClasses.heading3}>Process Steps</h4>
                  <ul className="space-y-2">
                    {pattern.process.map((step, index) => (
                      <li key={index} className={themeClasses.processStep}>
                        <span className={themeClasses.processStepBullet}>
                          •
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={themeClasses.patternSection}>
                  <h4 className={themeClasses.heading3}>Test Cases</h4>
                  <ul className="space-y-3">
                    {pattern.testCases.map((testCase, index) => (
                      <li key={index} className={themeClasses.testCaseCard}>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {testCase.name}
                        </p>
                        <div className={themeClasses.patternSubsection}>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Input: {testCase.input}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Expected Output: {testCase.expectedOutput}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Tip: {testCase.monsterHunterTip}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={themeClasses.patternSection}>
                <h4 className={themeClasses.heading3}>Implementation</h4>
                <div className={themeClasses.codeBlock}>
                  <SyntaxHighlighter
                    language="typescript"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      borderRadius: "0.5rem",
                      padding: "1rem",
                    }}
                  >
                    {pattern.implementation}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Add this function to handle file writing
  const writePatternsToFile = async (patterns: Pattern[]) => {
    try {
      // Create a blob with the patterns data
      const blob = new Blob([JSON.stringify(patterns, null, 2)], {
        type: "application/json",
      });

      // Create a download link
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "patterns.json";

      // Trigger the download
      document.body.appendChild(a);
      a.click();

      // Cleanup
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success("Patterns exported successfully!");
    } catch (error) {
      console.error("Error writing patterns to file:", error);
      toast.error("Failed to export patterns");
    }
  };

  // Add function to fix pattern mappings
  const fixPatternMappings = async () => {
    try {
      // Get current patterns
      const currentPatterns = patterns.map((p) => p.name);

      // Create new mapping object
      const newMapping: Record<string, string> = {};

      // Add existing mappings
      Object.entries(patternNameMapping).forEach(([key, value]) => {
        if (currentPatterns.includes(key)) {
          newMapping[key] = value;
        }
      });

      // Add missing patterns with default mapping
      currentPatterns.forEach((pattern) => {
        if (!newMapping[pattern]) {
          newMapping[pattern] = pattern;
        }
      });

      // Write to file
      const fileContent = `export const patternNameMapping: Record<string, string> = ${JSON.stringify(
        newMapping,
        null,
        2
      )};`;

      // Create a blob with the file content
      const blob = new Blob([fileContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      // Create a download link
      const a = document.createElement("a");
      a.href = url;
      a.download = "pattern-mapping.ts";

      // Trigger the download
      document.body.appendChild(a);
      a.click();

      // Cleanup
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success("Pattern mappings updated successfully!");
    } catch (error) {
      console.error("Error updating pattern mappings:", error);
      toast.error("Failed to update pattern mappings");
    }
  };

  return (
    <div className={themeClasses.container}>
      <div className="flex justify-between items-center mb-6">
        <h1 className={themeClasses.heading}>Pattern Management</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setDebugMode(!debugMode)}
            className={`${themeClasses.button.secondary} ${
              debugMode ? "bg-yellow-500" : ""
            }`}
          >
            {debugMode ? "Debug Mode: ON" : "Debug Mode: OFF"}
          </button>
          {debugMode && (
            <button
              onClick={fixPatternMappings}
              className={`${themeClasses.button.secondary} ${
                debugMode ? "bg-green-500" : ""
              }`}
            >
              {debugMode ? "Fix Pattern Mappings" : "Fix Pattern Mappings"}
            </button>
          )}
          <div className={themeClasses.actionButtons}>
            <button
              onClick={() => setActiveTab("form")}
              className={`${themeClasses.tabButton} ${
                activeTab === "form"
                  ? themeClasses.activeTab
                  : themeClasses.inactiveTab
              }`}
            >
              Add/Edit Pattern
            </button>
            <button
              onClick={() => setActiveTab("list")}
              className={`${themeClasses.tabButton} ${
                activeTab === "list"
                  ? themeClasses.activeTab
                  : themeClasses.inactiveTab
              }`}
            >
              View Patterns
            </button>
          </div>
        </div>
      </div>

      {debugMode && (
        <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Debug Information
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => writePatternsToFile(patterns)}
                className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
              >
                Export Patterns
              </button>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Debug Mode
              </span>
              <button
                onClick={() => setDebugMode(false)}
                className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM8.03 8l-1 4h2.938l1-4H8.031z" />
                </svg>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Pattern Keys
                </h4>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600 overflow-auto max-h-48">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Pattern Keys
                </div>
                <div className="space-y-1">
                  {debugInfo.patternKeys.map((key, index) => (
                    <div
                      key={index}
                      className="text-sm font-mono px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded text-blue-600 dark:text-blue-400"
                    >
                      {key}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Pattern Mapping
                </h4>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600 overflow-auto max-h-48">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Pattern Key
                  </div>
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Mapped Name
                  </div>
                </div>
                <div className="mt-2 space-y-1">
                  {Object.entries(debugInfo.patternMapping).map(
                    ([key, value], index) => (
                      <div
                        key={index}
                        className="grid grid-cols-2 gap-2 text-sm font-mono px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded"
                      >
                        <div className="text-blue-600 dark:text-blue-400 font-medium">
                          {key}
                        </div>
                        <div className="text-gray-700 dark:text-gray-300">
                          {value}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Pattern Categories
                </h4>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600 overflow-auto max-h-48">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Pattern Categories
                </div>
                <div className="space-y-1">
                  {Object.entries(debugInfo.patternCategories).map(
                    ([category, count], index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center text-sm font-mono px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded"
                      >
                        <span className="text-gray-700 dark:text-gray-300">
                          {category}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                          {count}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Pattern Validation Tools
                </h4>
              </div>

              {/* Duplicate Patterns */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600 mb-4">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Duplicate Patterns (
                  {debugInfo.validationResults.duplicates.length})
                </div>
                <div className="space-y-2">
                  {debugInfo.validationResults.duplicates.map(
                    (duplicate, index) => (
                      <div
                        key={index}
                        className="text-sm font-mono px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 dark:text-gray-300">
                            {duplicate.pattern1} ↔ {duplicate.pattern2}
                          </span>
                          <span
                            className={`${
                              duplicate.similarity > 80
                                ? "text-red-500"
                                : "text-yellow-500"
                            } font-medium`}
                          >
                            {duplicate.similarity}% similar
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Incomplete Patterns */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600 mb-4">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Incomplete Patterns (
                  {debugInfo.validationResults.incompletePatterns.length})
                </div>
                <div className="space-y-1">
                  {debugInfo.validationResults.incompletePatterns.map(
                    (pattern, index) => (
                      <div
                        key={index}
                        className="text-sm font-mono px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded text-red-500 dark:text-red-400"
                      >
                        {pattern}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Naming Issues */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600 mb-4">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Naming Issues (
                  {debugInfo.validationResults.namingIssues.length})
                </div>
                <div className="space-y-2">
                  {debugInfo.validationResults.namingIssues.map(
                    (issue, index) => (
                      <div
                        key={index}
                        className="text-sm font-mono px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded"
                      >
                        <div className="text-gray-700 dark:text-gray-300">
                          {issue.pattern}
                        </div>
                        <div className="text-red-500 dark:text-red-400 text-xs mt-1">
                          {issue.issue}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Category Issues */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Category Issues (
                  {debugInfo.validationResults.categoryIssues.length})
                </div>
                <div className="space-y-2">
                  {debugInfo.validationResults.categoryIssues.map(
                    (issue, index) => (
                      <div
                        key={index}
                        className="text-sm font-mono px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded"
                      >
                        <div className="text-gray-700 dark:text-gray-300">
                          {issue.pattern}
                        </div>
                        <div className="text-red-500 dark:text-red-400 text-xs mt-1">
                          {issue.issue}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Order Issues */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Order Issues ({debugInfo.validationResults.orderIssues.length}
                  )
                </div>
                <div className="space-y-2">
                  {debugInfo.validationResults.orderIssues.map(
                    (issue, index) => (
                      <div
                        key={index}
                        className="text-sm font-mono px-2 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded"
                      >
                        <div className="text-gray-700 dark:text-gray-300">
                          {issue.pattern}
                        </div>
                        <div className="text-red-500 dark:text-red-400 text-xs mt-1">
                          {issue.issue}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Debug information is updated in real-time as patterns change
              </span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "form" ? (
        <>
          {/* Step Navigation */}
          <div className={themeClasses.stepNav}>
            {(
              [
                "basic",
                "details",
                "implementation",
                "test-cases",
                "preview",
              ] as FormStep[]
            ).map((step) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`${themeClasses.stepButton} ${
                  activeStep === step
                    ? themeClasses.activeStep
                    : themeClasses.inactiveStep
                }`}
              >
                {step.charAt(0).toUpperCase() + step.slice(1).replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Form Steps */}
          <form onSubmit={handleSubmit} className={themeClasses.form}>
            <div className={themeClasses.formStep}>
              {activeStep === "basic" && (
                <div className="space-y-4">
                  <div className={themeClasses.grid}>
                    <div>
                      <label className={themeClasses.label}>Pattern Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`${themeClasses.input} ${
                          formErrors.name ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {formErrors.name && (
                        <p className={themeClasses.error}>{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className={themeClasses.label}>Category</label>
                      <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className={`${themeClasses.input} ${
                          formErrors.category ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {formErrors.category && (
                        <p className={themeClasses.error}>
                          {formErrors.category}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className={themeClasses.grid}>
                    <div>
                      <label className={themeClasses.label}>
                        Time Complexity
                      </label>
                      <input
                        type="text"
                        name="timeComplexity"
                        value={formData.timeComplexity}
                        onChange={handleInputChange}
                        className={`${themeClasses.input} ${
                          formErrors.timeComplexity ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {formErrors.timeComplexity && (
                        <p className={themeClasses.error}>
                          {formErrors.timeComplexity}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className={themeClasses.label}>
                        Space Complexity
                      </label>
                      <input
                        type="text"
                        name="spaceComplexity"
                        value={formData.spaceComplexity}
                        onChange={handleInputChange}
                        className={`${themeClasses.input} ${
                          formErrors.spaceComplexity ? "border-red-500" : ""
                        }`}
                        required
                      />
                      {formErrors.spaceComplexity && (
                        <p className={themeClasses.error}>
                          {formErrors.spaceComplexity}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeStep === "details" && (
                <div className="space-y-4">
                  <div>
                    <label className={themeClasses.label}>Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className={`${themeClasses.textarea} ${
                        formErrors.description ? "border-red-500" : ""
                      }`}
                      rows={3}
                      required
                    />
                    {formErrors.description && (
                      <p className={themeClasses.error}>
                        {formErrors.description}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={themeClasses.label}>
                      Monster Hunter Context
                    </label>
                    <textarea
                      name="monsterHunterContext"
                      value={formData.monsterHunterContext}
                      onChange={handleInputChange}
                      className={`${themeClasses.textarea} ${
                        formErrors.monsterHunterContext ? "border-red-500" : ""
                      }`}
                      rows={3}
                      required
                    />
                    {formErrors.monsterHunterContext && (
                      <p className={themeClasses.error}>
                        {formErrors.monsterHunterContext}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={themeClasses.label}>Example</label>
                    <textarea
                      name="example"
                      value={formData.example}
                      onChange={handleInputChange}
                      className={`${themeClasses.textarea} ${
                        formErrors.example ? "border-red-500" : ""
                      }`}
                      rows={3}
                      required
                    />
                    {formErrors.example && (
                      <p className={themeClasses.error}>{formErrors.example}</p>
                    )}
                  </div>
                </div>
              )}

              {activeStep === "implementation" && (
                <div className="space-y-4">
                  <div>
                    <label className={themeClasses.label}>Implementation</label>
                    <SyntaxHighlighter
                      language="typescript"
                      style={vscDarkPlus}
                      customStyle={{
                        margin: 0,
                        borderRadius: "0.375rem",
                        padding: "1rem",
                      }}
                    >
                      {formData.implementation}
                    </SyntaxHighlighter>
                    <textarea
                      name="implementation"
                      value={formData.implementation}
                      onChange={handleInputChange}
                      className={`${themeClasses.textarea} ${
                        formErrors.implementation ? "border-red-500" : ""
                      }`}
                      rows={10}
                      required
                    />
                    {formErrors.implementation && (
                      <p className={themeClasses.error}>
                        {formErrors.implementation}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={themeClasses.label}>Process Steps</label>
                    <DragDropContext onDragEnd={handleDragEnd}>
                      <Droppable droppableId="process" type="process">
                        {(provided: DroppableProvided) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {formData.process.map((step, index) => (
                              <Draggable
                                key={index}
                                draggableId={`process-${index}`}
                                index={index}
                              >
                                {(provided: DraggableProvided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={themeClasses.processStep}
                                  >
                                    <span
                                      className={themeClasses.processStepBullet}
                                    >
                                      •
                                    </span>
                                    <input
                                      type="text"
                                      value={step}
                                      onChange={(e) =>
                                        handleProcessChange(
                                          index,
                                          e.target.value
                                        )
                                      }
                                      className={`${themeClasses.input} ${
                                        formErrors.process
                                          ? "border-red-500"
                                          : ""
                                      }`}
                                      required
                                    />
                                    <button
                                      type="button"
                                      onClick={() => removeProcessStep(index)}
                                      className={themeClasses.button.danger}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>
                    <button
                      type="button"
                      onClick={addProcessStep}
                      className={`${themeClasses.button.secondary} ${
                        formErrors.process ? "bg-red-500" : ""
                      }`}
                    >
                      Add Process Step
                    </button>
                  </div>
                </div>
              )}

              {activeStep === "test-cases" && (
                <div className="space-y-4">
                  <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="testCases" type="testCases">
                      {(provided: DroppableProvided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {formData.testCases.map((testCase, index) => (
                            <Draggable
                              key={index}
                              draggableId={`testCase-${index}`}
                              index={index}
                            >
                              {(provided: DraggableProvided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={themeClasses.testCaseCard}
                                >
                                  <div className={themeClasses.flex}>
                                    <button
                                      type="button"
                                      onClick={() => removeTestCase(index)}
                                      className={themeClasses.button.danger}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                  <div className={themeClasses.grid}>
                                    <div>
                                      <label className={themeClasses.label}>
                                        Name
                                      </label>
                                      <input
                                        type="text"
                                        value={testCase.name}
                                        onChange={(e) =>
                                          handleTestCaseChange(
                                            index,
                                            "name",
                                            e.target.value
                                          )
                                        }
                                        className={`${themeClasses.input} ${
                                          formErrors.testCases
                                            ? "border-red-500"
                                            : ""
                                        }`}
                                        required
                                      />
                                    </div>
                                    <div>
                                      <label className={themeClasses.label}>
                                        Input
                                      </label>
                                      <input
                                        type="text"
                                        value={testCase.input}
                                        onChange={(e) =>
                                          handleTestCaseChange(
                                            index,
                                            "input",
                                            e.target.value
                                          )
                                        }
                                        className={`${themeClasses.input} ${
                                          formErrors.testCases
                                            ? "border-red-500"
                                            : ""
                                        }`}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className={themeClasses.grid}>
                                    <div>
                                      <label className={themeClasses.label}>
                                        Expected Output
                                      </label>
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
                                        className={`${themeClasses.input} ${
                                          formErrors.testCases
                                            ? "border-red-500"
                                            : ""
                                        }`}
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
                                        className={`${themeClasses.input} ${
                                          formErrors.testCases
                                            ? "border-red-500"
                                            : ""
                                        }`}
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                  <button
                    type="button"
                    onClick={addTestCase}
                    className={`${themeClasses.button.secondary} ${
                      formErrors.testCases ? "bg-red-500" : ""
                    }`}
                  >
                    Add Test Case
                  </button>
                </div>
              )}

              {activeStep === "preview" && (
                <div className="space-y-4">
                  <div className={themeClasses.card}>
                    <h2 className={themeClasses.heading2}>{formData.name}</h2>
                    <p className={themeClasses.listItem}>
                      Category: {formData.category}
                    </p>
                    <p className={themeClasses.listItem}>
                      Time: {formData.timeComplexity} | Space:{" "}
                      {formData.spaceComplexity}
                    </p>
                    <p className="mt-4">{formData.description}</p>
                    <div className="mt-4">
                      <h3 className={themeClasses.heading3}>Implementation</h3>
                      <SyntaxHighlighter
                        language="typescript"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          borderRadius: "0.375rem",
                          padding: "1rem",
                        }}
                      >
                        {formData.implementation}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-6">
                <div className="flex gap-2">
                  {activeStep !== "basic" && (
                    <button
                      type="button"
                      onClick={() => {
                        const steps: FormStep[] = [
                          "basic",
                          "details",
                          "implementation",
                          "test-cases",
                          "preview",
                        ];
                        const currentIndex = steps.indexOf(activeStep);
                        setActiveStep(steps[currentIndex - 1]);
                      }}
                      className={themeClasses.button.secondary}
                    >
                      Previous
                    </button>
                  )}
                  {activeStep !== "preview" && (
                    <button
                      type="button"
                      onClick={() => {
                        const steps: FormStep[] = [
                          "basic",
                          "details",
                          "implementation",
                          "test-cases",
                          "preview",
                        ];
                        const currentIndex = steps.indexOf(activeStep);
                        setActiveStep(steps[currentIndex + 1]);
                      }}
                      className={themeClasses.button.primary}
                    >
                      Next
                    </button>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={clearForm}
                    className={themeClasses.button.secondary}
                    disabled={isLoading}
                  >
                    Clear Form
                  </button>
                  {activeStep === "preview" && (
                    <button
                      type="submit"
                      className={themeClasses.button.primary}
                      disabled={isLoading}
                    >
                      {isLoading ? "Saving..." : "Save Pattern"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          {/* Search and Filter Section */}
          <div className={themeClasses.card}>
            <div className={themeClasses.searchBar}>
              <input
                type="text"
                placeholder="Search patterns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onPaste={(e) => {
                  const pastedText = e.clipboardData.getData("text");
                  setSearchQuery(pastedText);
                }}
                className={`${themeClasses.input} flex-1`}
              />
              <div className={themeClasses.filterControls}>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={themeClasses.input}
                >
                  <option key="all" value="all">
                    All Categories
                  </option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortField)}
                  className={themeClasses.input}
                >
                  <option key="name" value="name">
                    Sort by Name
                  </option>
                  <option key="category" value="category">
                    Sort by Category
                  </option>
                  <option key="timeComplexity" value="timeComplexity">
                    Sort by Time Complexity
                  </option>
                  <option key="spaceComplexity" value="spaceComplexity">
                    Sort by Space Complexity
                  </option>
                </select>
                <button
                  onClick={() =>
                    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
                  }
                  className={themeClasses.button.secondary}
                >
                  {sortOrder === "asc" ? "↑" : "↓"}
                </button>
              </div>
            </div>
            <div className={themeClasses.actionButtons}>
              <button
                onClick={handleBulkDelete}
                disabled={selectedPatterns.size === 0}
                className={themeClasses.button.danger}
              >
                Delete Selected ({selectedPatterns.size})
              </button>
              <button
                onClick={handleExportPatterns}
                disabled={selectedPatterns.size === 0}
                className={themeClasses.button.secondary}
              >
                Export Selected
              </button>
              <input
                type="file"
                accept=".json"
                onChange={handleImportPatterns}
                className="hidden"
                id="import-patterns"
              />
              <label
                htmlFor="import-patterns"
                className={themeClasses.button.secondary}
              >
                Import Patterns
              </label>
            </div>
          </div>

          {/* Add Filter Controls */}
          <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Advanced Filters
              </h3>
              <button
                onClick={() => setActiveFilters([])}
                className="px-3 py-1 text-sm text-red-500 hover:text-red-600"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-4">
              {activeFilters.map((filter, index) => (
                <div key={index} className="flex items-center gap-2">
                  <select
                    value={filter.field}
                    onChange={(e) => {
                      const newFilters = [...activeFilters];
                      newFilters[index].field = e.target.value as keyof Pattern;
                      setActiveFilters(newFilters);
                    }}
                    className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600"
                  >
                    <option key="name" value="name">
                      Name
                    </option>
                    <option key="category" value="category">
                      Category
                    </option>
                    <option key="timeComplexity" value="timeComplexity">
                      Time Complexity
                    </option>
                    <option key="spaceComplexity" value="spaceComplexity">
                      Space Complexity
                    </option>
                    <option key="description" value="description">
                      Description
                    </option>
                    <option
                      key="monsterHunterContext"
                      value="monsterHunterContext"
                    >
                      Monster Hunter Context
                    </option>
                    <option key="example" value="example">
                      Example
                    </option>
                    <option key="implementation" value="implementation">
                      Implementation
                    </option>
                  </select>

                  <select
                    value={filter.operator}
                    onChange={(e) => {
                      const newFilters = [...activeFilters];
                      newFilters[index].operator = e.target
                        .value as FilterOption["operator"];
                      setActiveFilters(newFilters);
                    }}
                    className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600"
                  >
                    <option key="equals" value="equals">
                      Equals
                    </option>
                    <option key="contains" value="contains">
                      Contains
                    </option>
                    <option key="startsWith" value="startsWith">
                      Starts With
                    </option>
                    <option key="endsWith" value="endsWith">
                      Ends With
                    </option>
                  </select>

                  <input
                    type="text"
                    value={filter.value}
                    onChange={(e) => {
                      const newFilters = [...activeFilters];
                      newFilters[index].value = e.target.value;
                      setActiveFilters(newFilters);
                    }}
                    className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 flex-1"
                    placeholder="Enter value..."
                  />

                  <button
                    onClick={() => removeFilter(index)}
                    className="p-1 text-red-500 hover:text-red-600"
                  >
                    ×
                  </button>
                </div>
              ))}

              <button
                onClick={() =>
                  addFilter({ field: "name", value: "", operator: "contains" })
                }
                className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
              >
                Add Filter
              </button>
            </div>
          </div>

          {/* Add Sort Controls */}
          <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Sort Configuration
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={sortConfig.field}
                onChange={(e) =>
                  setSortConfig((prev) => ({
                    ...prev,
                    field: e.target.value as SortField,
                  }))
                }
                className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600"
              >
                <option key="name" value="name">
                  Name
                </option>
                <option key="category" value="category">
                  Category
                </option>
                <option key="timeComplexity" value="timeComplexity">
                  Time Complexity
                </option>
                <option key="spaceComplexity" value="spaceComplexity">
                  Space Complexity
                </option>
              </select>

              <select
                value={sortConfig.order}
                onChange={(e) =>
                  setSortConfig((prev) => ({
                    ...prev,
                    order: e.target.value as SortOrder,
                  }))
                }
                className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600"
              >
                <option key="asc" value="asc">
                  Ascending
                </option>
                <option key="desc" value="desc">
                  Descending
                </option>
              </select>
            </div>
          </div>

          {/* Add Saved Views */}
          <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Saved Views
              </h3>
            </div>

            <div className="space-y-2">
              {savedViews.map((view, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-gray-700 dark:text-gray-300">
                    {view.name}
                  </span>
                  <button
                    onClick={() => loadSavedView(index)}
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Load
                  </button>
                  <button
                    onClick={() => {
                      setSavedViews((prev) =>
                        prev.filter((_, i) => i !== index)
                      );
                    }}
                    className="p-1 text-red-500 hover:text-red-600"
                  >
                    ×
                  </button>
                </div>
              ))}

              <div className="flex items-center gap-2 mt-4">
                <input
                  type="text"
                  id="viewName"
                  placeholder="View name..."
                  className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600"
                />
                <button
                  onClick={() => {
                    const input = document.getElementById(
                      "viewName"
                    ) as HTMLInputElement;
                    if (input.value) {
                      saveCurrentView(input.value);
                      input.value = "";
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600"
                >
                  Save Current View
                </button>
              </div>
            </div>
          </div>

          {/* Patterns List Section */}
          <div className={themeClasses.patternList + " mt-8"}>
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`${themeClasses.card} ${themeClasses.loadingSkeleton}`}
                  >
                    <div className="h-6 w-1/4 mb-3"></div>
                    <div className="h-4 w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : sortedAndFilteredPatterns.length === 0 ? (
              <div
                className={`${themeClasses.card} ${themeClasses.emptyState}`}
              >
                <h3 className={themeClasses.emptyStateTitle}>
                  No patterns found
                </h3>
                <p className={themeClasses.emptyStateText}>
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              sortedAndFilteredPatterns.map((pattern) => (
                <PatternListItem key={pattern.id} pattern={pattern} />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PatternManagement;
