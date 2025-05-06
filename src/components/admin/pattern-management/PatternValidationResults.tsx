import React from "react";

interface ValidationResults {
  similarPatterns: Record<string, string[]>;
  missingInRegular: string[];
  missingInMonsterHunter: string[];
  missingInCategories: string[];
  differentNames: string[];
  extraPatterns: {
    monsterHunter: string[];
    categories: string[];
  };
  stats: {
    totalPatterns: number;
    regularPatternsCount: number;
    monsterHunterPatternsCount: number;
    categoryPatternsCount: number;
  };
}

interface PatternValidationResultsProps {
  results: ValidationResults;
}

const PatternValidationResults: React.FC<PatternValidationResultsProps> = ({ results }) => {
  const {
    similarPatterns,
    missingInRegular,
    missingInMonsterHunter,
    missingInCategories,
    differentNames,
    extraPatterns,
    stats,
  } = results;

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Pattern Validation Results</h2>

      {/* Summary Statistics */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Summary Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-700 p-3 rounded shadow">
            <p className="text-sm text-gray-600 dark:text-gray-300">Total Patterns</p>
            <p className="text-xl font-bold">{stats.totalPatterns}</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded shadow">
            <p className="text-sm text-gray-600 dark:text-gray-300">Regular Patterns</p>
            <p className="text-xl font-bold">{stats.regularPatternsCount}</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded shadow">
            <p className="text-sm text-gray-600 dark:text-gray-300">Monster Hunter Patterns</p>
            <p className="text-xl font-bold">{stats.monsterHunterPatternsCount}</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded shadow">
            <p className="text-sm text-gray-600 dark:text-gray-300">Category Patterns</p>
            <p className="text-xl font-bold">{stats.categoryPatternsCount}</p>
          </div>
        </div>
      </div>

      {/* Similar Patterns */}
      {Object.keys(similarPatterns).length > 0 && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Similar Patterns</h3>
          <div className="space-y-2">
            {Object.entries(similarPatterns).map(([pattern, similar]) => (
              <div key={pattern} className="bg-white dark:bg-gray-700 p-3 rounded shadow">
                <p className="font-medium">{pattern}</p>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-600 dark:text-gray-300">
                  {similar.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Missing Patterns */}
      {(missingInRegular.length > 0 ||
        missingInMonsterHunter.length > 0 ||
        missingInCategories.length > 0) && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Missing Patterns</h3>
          {missingInRegular.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Missing in Regular Implementations</h4>
              <ul className="list-disc list-inside ml-4 text-sm text-gray-600 dark:text-gray-300">
                {missingInRegular.map((pattern) => (
                  <li key={pattern}>{pattern}</li>
                ))}
              </ul>
            </div>
          )}
          {missingInMonsterHunter.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Missing in Monster Hunter Patterns</h4>
              <ul className="list-disc list-inside ml-4 text-sm text-gray-600 dark:text-gray-300">
                {missingInMonsterHunter.map((pattern) => (
                  <li key={pattern}>{pattern}</li>
                ))}
              </ul>
            </div>
          )}
          {missingInCategories.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Missing in Categories</h4>
              <ul className="list-disc list-inside ml-4 text-sm text-gray-600 dark:text-gray-300">
                {missingInCategories.map((pattern) => (
                  <li key={pattern}>{pattern}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Different Names */}
      {differentNames.length > 0 && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Patterns with Different Names</h3>
          <ul className="list-disc list-inside ml-4 text-sm text-gray-600 dark:text-gray-300">
            {differentNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Extra Patterns */}
      {(extraPatterns.monsterHunter.length > 0 || extraPatterns.categories.length > 0) && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Extra Patterns</h3>
          {extraPatterns.monsterHunter.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Extra in Monster Hunter</h4>
              <ul className="list-disc list-inside ml-4 text-sm text-gray-600 dark:text-gray-300">
                {extraPatterns.monsterHunter.map((pattern) => (
                  <li key={pattern}>{pattern}</li>
                ))}
              </ul>
            </div>
          )}
          {extraPatterns.categories.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium mb-2">Extra in Categories</h4>
              <ul className="list-disc list-inside ml-4 text-sm text-gray-600 dark:text-gray-300">
                {extraPatterns.categories.map((pattern) => (
                  <li key={pattern}>{pattern}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PatternValidationResults;
