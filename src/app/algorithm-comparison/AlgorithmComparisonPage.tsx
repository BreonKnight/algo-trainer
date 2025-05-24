import AlgorithmComparison from "@/components/features/algorithm-trainer/components/core/AlgorithmComparison";
import { PatternKey } from "@/components/features/algorithm-trainer/types/types";

const algorithms: PatternKey[] = [
  "Bubble Sort",
  "Quick Sort",
  // Add more algorithms as needed
];

export default function AlgorithmComparisonPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4">
        <AlgorithmComparison algorithms={algorithms} />
      </div>
    </div>
  );
}
