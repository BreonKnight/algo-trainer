import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const DEFAULT_CODE = `// Write your JavaScript code here\nfunction greet(name) {\n  return 'Hello, ' + name + '!';\n}\n\nconsole.log(greet('World'));
`;

const Practice: React.FC = () => {
  const [code, setCode] = useState<string>(DEFAULT_CODE);
  const [output, setOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    let result = "";
    const log = (...args: unknown[]) => {
      result += args.map(String).join(" ") + "\n";
    };
    try {
      // eslint-disable-next-line no-new-func
      const fn = new Function("console", code);
      fn({ log });
      setOutput(result || "(No output)");
    } catch (err: unknown) {
      setOutput("Error: " + (err instanceof Error ? err.message : String(err)));
    }
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-2 flex flex-col items-center">
      <Card className="w-full max-w-3xl mb-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Practice Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Editor
              height="300px"
              defaultLanguage="python"
              value={code}
              onChange={(value) => setCode(value || "")}
              theme="vs-dark"
              options={{ fontSize: 16, minimap: { enabled: false } }}
            />
          </div>
          <Button onClick={runCode} disabled={isRunning} className="mt-2">
            {isRunning ? "Running..." : "Run"}
          </Button>
        </CardContent>
      </Card>
      <Card className="w-full max-w-3xl shadow-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">REPL Output</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className={cn("bg-background/80 rounded p-4 text-sm overflow-x-auto min-h-[80px]")}>
            {output}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default Practice;
