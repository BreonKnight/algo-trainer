import AlgorithmTrainer from "./components/algorithm-trainer/AlgorithmTrainer";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="w-screen h-screen overflow-x-hidden">
        <Toaster position="top-center" richColors theme="dark" />
        <AlgorithmTrainer />
      </div>
    </ThemeProvider>
  );
}
