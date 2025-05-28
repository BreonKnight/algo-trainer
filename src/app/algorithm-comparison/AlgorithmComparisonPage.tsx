import AlgorithmComparison from "@algo-trainer/shared/components/algorithm-trainer/AlgorithmComparison";
import { PatternKey } from "@algo-trainer/shared/types/algorithm-types";

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
