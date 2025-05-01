import React, { useState, useEffect } from "react";
import {
  Pattern,
  PatternFormData,
  TestCase,
} from "../../lib/types/pattern-management";
import { patternManagementService } from "../../lib/services/pattern-management";
import { useTheme } from "../../components/theme-context";
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

type FormStep =
  | "basic"
  | "details"
  | "implementation"
  | "test-cases"
  | "preview";

type SortField = "name" | "category" | "timeComplexity" | "spaceComplexity";

const PatternManagement: React.FC = () => {
  const {} = useTheme();
  const [patterns, setPatterns] = useState<Pattern[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<"form" | "list">("form");
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

  // Load existing patterns on component mount
  useEffect(() => {
    const loadPatterns = async () => {
      try {
        setIsLoading(true);
        const existingPatterns = await patternManagementService.getPatterns();
        setPatterns(existingPatterns);
      } catch (error) {
        toast.error("Failed to load patterns");
      } finally {
        setIsLoading(false);
      }
    };
    loadPatterns();
  }, []);

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
  ) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the form errors before submitting");
      return;
    }

    try {
      setIsLoading(true);

      // Check for duplicates before saving
      const { exactMatches, similarMatches } =
        await patternManagementService.checkForDuplicates(
          { id: "", ...formData },
          patterns
        );

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

      const newPattern: Pattern = {
        id: Date.now().toString(),
        ...formData,
      };

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

  const handleDeletePattern = async (patternId: string) => {
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

  const handleEditPattern = (pattern: Pattern) => {
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

  const handleCopyPattern = (pattern: Pattern) => {
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
    }
  };

  const togglePatternExpansion = (patternId: string) => {
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

  const togglePatternSelection = (patternId: string) => {
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

  const handleBulkDelete = async () => {
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

  const handleExportPatterns = () => {
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

  const handleImportPatterns = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const sortedAndFilteredPatterns = patterns
    .filter((pattern) => {
      const matchesSearch =
        (pattern.name?.toLowerCase() ?? "").includes(
          searchQuery.toLowerCase()
        ) ||
        (pattern.category?.toLowerCase() ?? "").includes(
          searchQuery.toLowerCase()
        ) ||
        (pattern.description?.toLowerCase() ?? "").includes(
          searchQuery.toLowerCase()
        );
      const matchesCategory =
        selectedCategory === "all" || pattern.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      const modifier = sortOrder === "asc" ? 1 : -1;
      return String(aValue).localeCompare(String(bValue)) * modifier;
    });

  return (
    <div className={themeClasses.container}>
      <div className="flex justify-between items-center mb-6">
        <h1 className={themeClasses.heading}>Pattern Management</h1>
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
                  <option value="all">All Categories</option>
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
                  <option value="name">Sort by Name</option>
                  <option value="category">Sort by Category</option>
                  <option value="timeComplexity">
                    Sort by Time Complexity
                  </option>
                  <option value="spaceComplexity">
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
                <div key={pattern.id} className={themeClasses.patternListItem}>
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
                          <h3 className={themeClasses.patternListTitle}>
                            {pattern.name}
                          </h3>
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
                        {expandedPatterns.has(pattern.id)
                          ? "Collapse"
                          : "Expand"}
                      </button>
                    </div>
                    {expandedPatterns.has(pattern.id) && (
                      <div className={themeClasses.patternContent}>
                        <p className="text-gray-700 dark:text-gray-300">
                          {pattern.description}
                        </p>
                        <div className={themeClasses.grid}>
                          <div className={themeClasses.patternSection}>
                            <h4 className={themeClasses.heading3}>
                              Process Steps
                            </h4>
                            <ul className="space-y-2">
                              {pattern.process.map((step, index) => (
                                <li
                                  key={index}
                                  className={themeClasses.processStep}
                                >
                                  <span
                                    className={themeClasses.processStepBullet}
                                  >
                                    •
                                  </span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className={themeClasses.patternSection}>
                            <h4 className={themeClasses.heading3}>
                              Test Cases
                            </h4>
                            <ul className="space-y-3">
                              {pattern.testCases.map((testCase, index) => (
                                <li
                                  key={index}
                                  className={themeClasses.testCaseCard}
                                >
                                  <p className="font-medium text-gray-900 dark:text-white">
                                    {testCase.name}
                                  </p>
                                  <div
                                    className={themeClasses.patternSubsection}
                                  >
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
                          <h4 className={themeClasses.heading3}>
                            Implementation
                          </h4>
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
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PatternManagement;
