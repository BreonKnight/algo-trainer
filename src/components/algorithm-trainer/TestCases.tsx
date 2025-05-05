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

  const updateTestCase = (index: number, field: keyof TestCase, value: string) => {
    const newTestCases = testCases.map((testCase, i) =>
      i === index ? { ...testCase, [field]: value } : testCase
    );
    onTestCasesChange(newTestCases);
  };

  return (
    <Card className="p-4 bg-secondary border-secondary w-full h-full flex flex-col overflow-hidden">
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <h2 className="text-base sm:text-lg font-semibold text-accent3">Test Cases</h2>
        <Button
          onClick={addTestCase}
          className="bg-accent3 hover:bg-accent3/90 text-main h-8 px-3 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Test Case
        </Button>
      </div>
      <div className="space-y-4 overflow-y-auto flex-1 min-h-0 pr-2">
        {testCases.map((testCase, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="flex-1">
              <label className="block text-sm font-medium text-main mb-1">Input</label>
              <Input
                value={testCase.input}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateTestCase(index, "input", e.target.value)
                }
                className="bg-main border-secondary text-main"
                placeholder="Enter input..."
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-main mb-1">Expected Output</label>
              <Input
                value={testCase.output}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateTestCase(index, "output", e.target.value)
                }
                className="bg-main border-secondary text-main"
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
