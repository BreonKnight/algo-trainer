import { useState } from "react";
import { CODE_EXECUTION_ENDPOINTS, API_CONFIG } from "@/lib/config/api";

interface CodeExecutionRequest {
  code: string;
  language: string;
  input?: string;
}

interface CodeExecutionResponse {
  output: string;
  error?: string;
  executionTime: number;
}

interface CodeExecutionError {
  message: string;
  status: number;
}

export const useCodeExecution = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<CodeExecutionError | null>(null);

  const executeCode = async (request: CodeExecutionRequest) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(CODE_EXECUTION_ENDPOINTS.EXECUTE, {
        ...API_CONFIG,
        method: "POST",
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error("Code execution failed");
      }

      const data: CodeExecutionResponse = await response.json();
      return data;
    } catch (err) {
      setError(err as CodeExecutionError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    executeCode,
    loading,
    error,
  };
};
