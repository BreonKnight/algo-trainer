import React from "react";

import { Pattern } from "@/lib/types/pattern-management";

interface FilterOption {
  field: keyof Pattern;
  operator: "contains" | "equals" | "startsWith" | "endsWith";
  value: string;
}

interface PatternFiltersProps {
  filters: FilterOption[];
  onAddFilter: () => void;
  onRemoveFilter: (index: number) => void;
  onUpdateFilter: (index: number, filter: FilterOption) => void;
  patternCategories: Record<string, number>;
}

export const PatternFilters: React.FC<PatternFiltersProps> = ({
  filters,
  onAddFilter,
  onRemoveFilter,
  onUpdateFilter,
  patternCategories,
}) => {
  const fieldOptions: Array<{ value: keyof Pattern; label: string }> = [
    { value: "name", label: "Name" },
    { value: "category", label: "Category" },
    { value: "timeComplexity", label: "Time Complexity" },
    { value: "spaceComplexity", label: "Space Complexity" },
    { value: "description", label: "Description" },
    { value: "monsterHunterContext", label: "Monster Hunter Context" },
    { value: "example", label: "Example" },
    { value: "implementation", label: "Implementation" },
  ];

  const operatorOptions = [
    { value: "contains", label: "Contains" },
    { value: "equals", label: "Equals" },
    { value: "startsWith", label: "Starts With" },
    { value: "endsWith", label: "Ends With" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
        <button
          onClick={onAddFilter}
          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Filter
        </button>
      </div>
      <div className="space-y-2">
        {filters.map((filter, index) => (
          <div key={index} className="flex space-x-2 items-center">
            <select
              value={filter.field}
              onChange={(e) =>
                onUpdateFilter(index, {
                  ...filter,
                  field: e.target.value as keyof Pattern,
                })
              }
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              {fieldOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <select
              value={filter.operator}
              onChange={(e) =>
                onUpdateFilter(index, {
                  ...filter,
                  operator: e.target.value as FilterOption["operator"],
                })
              }
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              {operatorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {filter.field === "category" ? (
              <select
                value={filter.value}
                onChange={(e) => onUpdateFilter(index, { ...filter, value: e.target.value })}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select a category</option>
                {Object.keys(patternCategories).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                value={filter.value}
                onChange={(e) => onUpdateFilter(index, { ...filter, value: e.target.value })}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter value..."
              />
            )}
            <button
              onClick={() => onRemoveFilter(index)}
              className="inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
