import React from "react";
import { Pattern } from "../../../lib/types/pattern-management";
import {
  findDuplicatePatterns,
  findIncompletePatterns,
  validatePatternNames,
  validatePatternCategories,
} from "./PatternValidation";

interface PatternDebugProps {
  patterns: Pattern[];
  patternCategories: Record<string, number>;
}

export const PatternDebug: React.FC<PatternDebugProps> = ({
  patterns,
  patternCategories,
}) => {
  const duplicates = findDuplicatePatterns(patterns);
  const incompletePatterns = findIncompletePatterns(patterns);
  const nameIssues = validatePatternNames(patterns);
  const categoryIssues = validatePatternCategories(patterns, patternCategories);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">
          Duplicate Patterns
        </h3>
        {duplicates.length > 0 ? (
          <div className="mt-2 space-y-2">
            {duplicates.map((duplicate, index) => (
              <div
                key={index}
                className="bg-red-50 p-3 rounded-md text-sm text-red-700"
              >
                <p>
                  {duplicate.pattern1} and {duplicate.pattern2} are{" "}
                  {duplicate.similarity}% similar
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm text-gray-500">No duplicates found</p>
        )}
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">
          Incomplete Patterns
        </h3>
        {incompletePatterns.length > 0 ? (
          <div className="mt-2 space-y-2">
            {incompletePatterns.map((pattern, index) => (
              <div
                key={index}
                className="bg-yellow-50 p-3 rounded-md text-sm text-yellow-700"
              >
                <p>{pattern} is missing required fields</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm text-gray-500">
            No incomplete patterns found
          </p>
        )}
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Name Issues</h3>
        {nameIssues.length > 0 ? (
          <div className="mt-2 space-y-2">
            {nameIssues.map((issue, index) => (
              <div
                key={index}
                className="bg-yellow-50 p-3 rounded-md text-sm text-yellow-700"
              >
                <p>
                  {issue.pattern}: {issue.issue}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm text-gray-500">No name issues found</p>
        )}
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">Category Issues</h3>
        {categoryIssues.length > 0 ? (
          <div className="mt-2 space-y-2">
            {categoryIssues.map((issue, index) => (
              <div
                key={index}
                className="bg-yellow-50 p-3 rounded-md text-sm text-yellow-700"
              >
                <p>
                  {issue.pattern}: {issue.issue}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm text-gray-500">No category issues found</p>
        )}
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">
          Pattern Statistics
        </h3>
        <div className="mt-2 grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-md">
            <p className="text-sm text-gray-500">Total Patterns</p>
            <p className="text-lg font-medium text-gray-900">
              {patterns.length}
            </p>
          </div>
          <div className="bg-gray-50 p-3 rounded-md">
            <p className="text-sm text-gray-500">Categories</p>
            <p className="text-lg font-medium text-gray-900">
              {Object.keys(patternCategories).length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
