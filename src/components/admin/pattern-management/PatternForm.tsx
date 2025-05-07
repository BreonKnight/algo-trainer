import React, { useState } from "react";

import { Pattern, TestCase } from "@/lib/types/pattern-management";

interface PatternFormProps {
  pattern?: Pattern;
  onSubmit: (pattern: Pattern) => void;
  onCancel: () => void;
  patternCategories: Record<string, number>;
}

export const PatternForm: React.FC<PatternFormProps> = ({
  pattern,
  onSubmit,
  onCancel,
  patternCategories,
}) => {
  const [formData, setFormData] = useState<Pattern>(
    pattern || {
      id: "",
      name: "",
      category: "",
      timeComplexity: "",
      spaceComplexity: "",
      description: "",
      monsterHunterContext: "",
      example: "",
      process: [],
      implementation: "",
      testCases: [],
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTestCaseChange = (index: number, field: keyof TestCase, value: string) => {
    setFormData((prev) => {
      const newTestCases = [...prev.testCases];
      newTestCases[index] = { ...newTestCases[index], [field]: value };
      return { ...prev, testCases: newTestCases };
    });
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        >
          <option value="">Select a category</option>
          {Object.keys(patternCategories).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="timeComplexity" className="block text-sm font-medium text-gray-700">
          Time Complexity
        </label>
        <input
          type="text"
          id="timeComplexity"
          name="timeComplexity"
          value={formData.timeComplexity}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="spaceComplexity" className="block text-sm font-medium text-gray-700">
          Space Complexity
        </label>
        <input
          type="text"
          id="spaceComplexity"
          name="spaceComplexity"
          value={formData.spaceComplexity}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="monsterHunterContext" className="block text-sm font-medium text-gray-700">
          Monster Hunter Context
        </label>
        <textarea
          id="monsterHunterContext"
          name="monsterHunterContext"
          value={formData.monsterHunterContext}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="example" className="block text-sm font-medium text-gray-700">
          Example
        </label>
        <textarea
          id="example"
          name="example"
          value={formData.example}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="implementation" className="block text-sm font-medium text-gray-700">
          Implementation
        </label>
        <textarea
          id="implementation"
          name="implementation"
          value={formData.implementation}
          onChange={handleChange}
          rows={5}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Test Cases</label>
        <div className="mt-2 space-y-2">
          {formData.testCases.map((testCase, index) => (
            <div key={index} className="flex space-x-2">
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  placeholder="Name"
                  value={testCase.name}
                  onChange={(e) => handleTestCaseChange(index, "name", e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Input"
                  value={testCase.input}
                  onChange={(e) => handleTestCaseChange(index, "input", e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Expected Output"
                  value={testCase.expectedOutput}
                  onChange={(e) => handleTestCaseChange(index, "expectedOutput", e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Monster Hunter Tip"
                  value={testCase.monsterHunterTip}
                  onChange={(e) => handleTestCaseChange(index, "monsterHunterTip", e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <button
                type="button"
                onClick={() => removeTestCase(index)}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addTestCase}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Test Case
          </button>
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {pattern ? "Update" : "Create"} Pattern
        </button>
      </div>
    </form>
  );
};
