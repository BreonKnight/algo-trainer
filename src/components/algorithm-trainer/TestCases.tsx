import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
import { ChangeEvent } from "react";

interface TestCase {
  input: string;
  output: string;
}

interface TestCasesProps {
  testCases: TestCase[];
  onTestCasesChange: (testCases: TestCase[]) => void;
}

export function TestCases({ testCases, onTestCasesChange }: TestCasesProps) {
  const addTestCase = () => {
    onTestCasesChange([...testCases, { input: "", output: "" }]);
  };

  const removeTestCase = (index: number) => {
    const newTestCases = testCases.filter((_, i) => i !== index);
    onTestCasesChange(newTestCases);
  };

  const updateTestCase = (
    index: number,
    field: keyof TestCase,
    value: string
  ) => {
    const newTestCases = testCases.map((testCase, i) =>
      i === index ? { ...testCase, [field]: value } : testCase
    );
    onTestCasesChange(newTestCases);
  };

  return (
    <Card className="p-4 bg-[#44475a] border-[#6272a4] w-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-[#50fa7b]">
          Test Cases
        </h2>
        <Button
          onClick={addTestCase}
          className="bg-[#50fa7b] hover:bg-[#50fa7b]/90 text-[#282a36] h-8 px-3 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Test Case
        </Button>
      </div>
      <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
        {testCases.map((testCase, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#f8f8f2] mb-1">
                Input
              </label>
              <Input
                value={testCase.input}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateTestCase(index, "input", e.target.value)
                }
                className="bg-[#282a36] border-[#6272a4] text-[#f8f8f2]"
                placeholder="Enter input..."
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#f8f8f2] mb-1">
                Expected Output
              </label>
              <Input
                value={testCase.output}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateTestCase(index, "output", e.target.value)
                }
                className="bg-[#282a36] border-[#6272a4] text-[#f8f8f2]"
                placeholder="Enter expected output..."
              />
            </div>
            <Button
              onClick={() => removeTestCase(index)}
              variant="destructive"
              size="icon"
              className="mt-6"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
