import React from "react";
import { Pattern } from "@/lib/types/pattern-management";

interface PatternListProps {
  patterns: Pattern[];
  onEdit: (pattern: Pattern) => void;
  onDelete: (patternId: string) => void;
}

export const PatternList: React.FC<PatternListProps> = ({ patterns, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {patterns.map((pattern) => (
        <div key={pattern.id} className="bg-white shadow rounded-lg p-4 space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{pattern.name}</h3>
              <p className="text-sm text-gray-500">{pattern.category}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(pattern)}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(pattern.id)}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Time Complexity</p>
              <p className="text-sm font-medium text-gray-900">{pattern.timeComplexity}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Space Complexity</p>
              <p className="text-sm font-medium text-gray-900">{pattern.spaceComplexity}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">Description</p>
            <p className="text-sm text-gray-900">{pattern.description}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Monster Hunter Context</p>
            <p className="text-sm text-gray-900">{pattern.monsterHunterContext}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Example</p>
            <pre className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{pattern.example}</pre>
          </div>
          <div>
            <p className="text-sm text-gray-500">Implementation</p>
            <pre className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
              {pattern.implementation}
            </pre>
          </div>
          <div>
            <p className="text-sm text-gray-500">Process Steps</p>
            <ul className="list-disc list-inside text-sm text-gray-900">
              {pattern.process.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm text-gray-500">Test Cases</p>
            <div className="space-y-2">
              {pattern.testCases.map((testCase, index) => (
                <div key={index} className="bg-gray-50 p-2 rounded space-y-1">
                  <p className="text-sm font-medium text-gray-900">{testCase.name}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-gray-500">Input</p>
                      <p className="text-sm text-gray-900">{testCase.input}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Expected Output</p>
                      <p className="text-sm text-gray-900">{testCase.expectedOutput}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Monster Hunter Tip</p>
                    <p className="text-sm text-gray-900">{testCase.monsterHunterTip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
