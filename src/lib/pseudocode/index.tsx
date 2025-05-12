import { ComponentType } from "react";

import { PatternKey, PATTERN_KEYS } from "@/components/algorithm-trainer/types";

import { DynamicPattern } from "./patterns/DynamicPattern";
import { getAllPatterns } from "./patterns/utils";

// Get all patterns from JSON
const jsonPatterns = getAllPatterns();

// Create dynamic pattern components for all JSON patterns
export const pseudocodePatterns: Partial<Record<PatternKey, ComponentType>> = Object.entries(
  jsonPatterns
).reduce(
  (acc, [, pattern]) => {
    // Use the pattern.name as the PatternKey for accurate mapping
    const patternKey = pattern.name as PatternKey;

    // Only add if it's a valid PatternKey
    if (PATTERN_KEYS.includes(patternKey)) {
      acc[patternKey] = (props) => (
        <DynamicPattern patternKey={patternKey} patternName={pattern.name} {...props} />
      );
    }
    return acc;
  },
  {} as Partial<Record<PatternKey, ComponentType>>
);

// Helper function to get pattern component
export function getPatternComponent(name: string): ComponentType | undefined {
  const patternKey = name as PatternKey;
  if (!PATTERN_KEYS.includes(patternKey)) {
    return undefined;
  }
  return pseudocodePatterns[patternKey];
}

// Helper function to check if pattern exists
export function hasPattern(name: string): boolean {
  const patternKey = name as PatternKey;
  return PATTERN_KEYS.includes(patternKey) && patternKey in pseudocodePatterns;
}

// Helper function to get all available patterns
export function getAvailablePatterns(): PatternKey[] {
  return PATTERN_KEYS.filter((key) => hasPattern(key));
}

// Helper function to get patterns by category
export function getPatternsByCategory(): Record<string, PatternKey[]> {
  const patternsByCategory: Record<string, PatternKey[]> = {};

  Object.entries(jsonPatterns).forEach(([, pattern]) => {
    // Use the pattern.name as the PatternKey for accurate mapping
    const patternKey = pattern.name as PatternKey;

    if (PATTERN_KEYS.includes(patternKey)) {
      const category = pattern.type;
      if (!patternsByCategory[category]) {
        patternsByCategory[category] = [];
      }
      patternsByCategory[category].push(patternKey);
    }
  });

  return patternsByCategory;
}

// Function to verify pattern consistency
export function verifyPseudocodePatterns() {
  // Get all pattern names
  const patternNames = Object.keys(pseudocodePatterns);

  // Check for duplicate patterns
  const duplicates = patternNames.filter((name, index) => patternNames.indexOf(name) !== index);

  // Check for patterns with similar names (case-insensitive)
  const normalizeName = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const normalizedNames = new Map(patternNames.map((name) => [normalizeName(name), name]));
  const similarNames = new Set<string>();

  patternNames.forEach((name) => {
    const normalized = normalizeName(name);
    const existing = normalizedNames.get(normalized);
    if (existing && existing !== name) {
      similarNames.add(`${name} vs ${existing}`);
    }
  });

  // Check for patterns that might be in wrong categories
  const categoryPatterns = new Map<string, string[]>();
  patternNames.forEach((name) => {
    const patternKey = name as PatternKey;
    const PatternComponent = pseudocodePatterns[patternKey];
    if (PatternComponent) {
      const pattern = <PatternComponent />;
      const category = pattern.props.category;
      if (!categoryPatterns.has(category)) {
        categoryPatterns.set(category, []);
      }
      categoryPatterns.get(category)?.push(name);
    }
  });

  // Log results
  console.log("\nPseudocode Pattern Verification Results:");
  console.log("--------------------------------------");

  if (duplicates.length > 0) {
    console.log("\nDuplicate patterns found:");
    duplicates.forEach((p) => console.log(`- ${p}`));
  }

  if (similarNames.size > 0) {
    console.log("\nPatterns with similar names:");
    Array.from(similarNames).forEach((p) => console.log(`- ${p}`));
  }

  // Log patterns by category
  console.log("\nPatterns by category:");
  console.log("-------------------");
  for (const [category, patterns] of categoryPatterns) {
    console.log(`\n${category}:`);
    patterns.forEach((p) => console.log(`- ${p}`));
  }

  // Summary statistics
  console.log("\nSummary:");
  console.log("--------");
  console.log(`Total patterns: ${patternNames.length}`);
  console.log(`Total categories: ${categoryPatterns.size}`);
  console.log(`Duplicate patterns: ${duplicates.length}`);
  console.log(`Similar names: ${similarNames.size}`);

  return {
    totalPatterns: patternNames.length,
    duplicates,
    similarNames: Array.from(similarNames),
    categories: Object.fromEntries(categoryPatterns),
    stats: {
      categoryCount: categoryPatterns.size,
      duplicateCount: duplicates.length,
      similarNameCount: similarNames.size,
    },
  };
}

// Function to verify patterns against pattern files
export function verifyPatternFiles() {
  // Get all pattern names from pseudocodePatterns
  const pseudocodeNames = Object.keys(pseudocodePatterns);

  // Get all pattern names from the patterns directory
  const patternFiles = new Map<string, string[]>();
  const patternCategories = new Map<string, string[]>();
  const missingImplementations = new Map<string, { pattern: string; expectedPaths: string[] }[]>();
  const implementationDetails = new Map<
    string,
    { category: string; filePath: string; exists: boolean }
  >();

  // Check each pattern's implementation
  pseudocodeNames.forEach((name) => {
    const patternKey = name as PatternKey;
    const PatternComponent = pseudocodePatterns[patternKey];
    if (PatternComponent) {
      const pattern = <PatternComponent />;
      const category = pattern.props.category;

      // Add to category map
      if (!patternCategories.has(category)) {
        patternCategories.set(category, []);
      }
      patternCategories.get(category)?.push(name);

      // Check if pattern file exists
      const normalizedName = name?.toLowerCase().replace(/[^a-z0-9]/g, "-") || "";
      const possiblePaths = [
        `patterns/${category?.toLowerCase() || ""}/${normalizedName}.ts`,
        `patterns/${category?.toLowerCase() || ""}/${normalizedName}.tsx`,
        `patterns/${category?.toLowerCase() || ""}/index.ts`,
        `patterns/${category?.toLowerCase() || ""}/index.tsx`,
      ];

      const foundPaths: string[] = [];
      const exists = possiblePaths.some((path) => {
        try {
          require.resolve(`../../components/algorithm-trainer/${path}`);
          foundPaths.push(path);
          patternFiles.set(name, foundPaths);
          return true;
        } catch {
          return false;
        }
      });

      // Store implementation details
      implementationDetails.set(name, {
        category,
        filePath: foundPaths[0] || possiblePaths[0],
        exists,
      });

      if (!exists) {
        if (!missingImplementations.has(category)) {
          missingImplementations.set(category, []);
        }
        missingImplementations.get(category)?.push({
          pattern: name,
          expectedPaths: possiblePaths,
        });
      }
    }
  });

  // Check for patterns in files but not in pseudocodePatterns
  const allPatternFiles = new Map<string, { name: string; file: string }[]>();
  const categoryDirs = [
    "array",
    "backtracking",
    "data-structures",
    "divide-and-conquer",
    "dynamic-programming",
    "greedy",
    "tree",
    "string",
    "searching",
    "sorting",
    "number-theory",
    "matrix",
    "graph",
    "recursion",
  ];

  categoryDirs.forEach((dir) => {
    try {
      const files = require(`../../components/algorithm-trainer/patterns/${dir}`);
      Object.keys(files).forEach((key) => {
        if (key.endsWith("Patterns")) {
          const patterns = files[key];
          Object.keys(patterns).forEach((patternName) => {
            if (!allPatternFiles.has(dir)) {
              allPatternFiles.set(dir, []);
            }
            allPatternFiles.get(dir)?.push({
              name: patternName,
              file: key,
            });
          });
        }
      });
    } catch (e) {
      console.warn(`Warning: Could not load patterns from ${dir} directory`);
    }
  });

  // Find patterns in files but not in pseudocodePatterns
  const missingInPseudocode = new Map<string, { name: string; file: string }[]>();
  for (const [dir, patterns] of allPatternFiles) {
    const missing = patterns.filter(({ name }) => !pseudocodeNames.includes(name));
    if (missing.length > 0) {
      missingInPseudocode.set(dir, missing);
    }
  }

  // Log results
  console.log("\nPattern File Verification Results:");
  console.log("=================================");

  // Implementation Status
  console.log("\nImplementation Status:");
  console.log("---------------------");
  for (const [category, patterns] of patternCategories) {
    console.log(`\n${category}:`);
    patterns.forEach((name) => {
      const details = implementationDetails.get(name);
      if (details) {
        console.log(`- ${name}`);
        console.log(`  File: ${details.filePath}`);
        console.log(`  Status: ${details.exists ? "✓ Implemented" : "✗ Missing"}`);
      }
    });
  }

  if (missingImplementations.size > 0) {
    console.log("\nPatterns Missing Implementation Files:");
    console.log("-----------------------------------");
    for (const [category, patterns] of missingImplementations) {
      console.log(`\n${category}:`);
      patterns.forEach(({ pattern, expectedPaths }) => {
        console.log(`- ${pattern}`);
        console.log(`  Expected in one of:`);
        expectedPaths.forEach((path) => console.log(`    ${path}`));
      });
    }
  }

  if (missingInPseudocode.size > 0) {
    console.log("\nPatterns in Files but Missing in pseudocodePatterns:");
    console.log("------------------------------------------------");
    for (const [dir, patterns] of missingInPseudocode) {
      console.log(`\n${dir}:`);
      patterns.forEach(({ name, file }) => {
        console.log(`- ${name}`);
        console.log(`  Found in: ${file}`);
      });
    }
  }

  // Category Analysis
  console.log("\nCategory Analysis:");
  console.log("----------------");
  for (const [category, patterns] of patternCategories) {
    const implemented = patterns.filter((name) => implementationDetails.get(name)?.exists);
    const missing = patterns.filter((name) => !implementationDetails.get(name)?.exists);
    console.log(`\n${category}:`);
    console.log(`  Total Patterns: ${patterns.length}`);
    console.log(`  Implemented: ${implemented.length}`);
    console.log(`  Missing: ${missing.length}`);
    if (missing.length > 0) {
      console.log(`  Missing Patterns:`);
      missing.forEach((p) => console.log(`    - ${p}`));
    }
  }

  // Summary statistics
  console.log("\nSummary Statistics:");
  console.log("-----------------");
  console.log(`Total patterns in pseudocodePatterns: ${pseudocodeNames.length}`);
  console.log(`Total patterns in files: ${Array.from(allPatternFiles.values()).flat().length}`);
  console.log(
    `Patterns missing implementation files: ${Array.from(missingImplementations.values()).flat().length}`
  );
  console.log(
    `Patterns missing in pseudocodePatterns: ${Array.from(missingInPseudocode.values()).flat().length}`
  );
  console.log(`Total categories: ${patternCategories.size}`);

  // Implementation coverage
  const totalImplemented = Array.from(implementationDetails.values()).filter(
    (d) => d.exists
  ).length;
  const coverage = ((totalImplemented / pseudocodeNames.length) * 100).toFixed(1);
  console.log(`\nImplementation Coverage: ${coverage}%`);

  return {
    totalPseudocodePatterns: pseudocodeNames.length,
    totalFilePatterns: Array.from(allPatternFiles.values()).flat().length,
    missingImplementations: Object.fromEntries(missingImplementations),
    missingInPseudocode: Object.fromEntries(missingInPseudocode),
    categories: Object.fromEntries(patternCategories),
    implementationDetails: Object.fromEntries(implementationDetails),
    stats: {
      categoryCount: patternCategories.size,
      missingImplementationCount: Array.from(missingImplementations.values()).flat().length,
      missingInPseudocodeCount: Array.from(missingInPseudocode.values()).flat().length,
      coverage: parseFloat(coverage),
    },
  };
}

//Run both verifications
//verifyPseudocodePatterns();
//verifyPatternFiles();
