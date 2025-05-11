import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

interface AlgorithmPatternProps {
  name: string;
  type: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  useCase: string;
  pseudocode: string;
  keySteps: string[];
}

export const AlgorithmPattern = ({
  name,
  type,
  description,
  timeComplexity,
  spaceComplexity,
  useCase,
  pseudocode,
  keySteps,
}: AlgorithmPatternProps) => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        {name}
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">{timeComplexity}</div>
    <div className="mb-4 text-sm text-secondary">{description}</div>

    <PseudocodeDisplay code={pseudocode} />

    {keySteps && keySteps.length > 0 && (
      <div className="mt-4">
        {keySteps.map((step, index) => (
          <div key={index} className="flex items-start mb-1">
            <span className="font-bold text-main mr-2">{index + 1}.</span>
            <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
            <span>{step}</span>
          </div>
        ))}
      </div>
    )}

    <div className="mt-4">
      <span className="font-semibold text-accent">Type:</span>
      <span className="ml-2 text-sm">{type}</span>
    </div>
    <div className="mt-2">
      <span className="font-semibold text-accent">Use Case:</span>
      <span className="ml-2 text-sm">{useCase}</span>
    </div>
    <div className="mt-2">
      <span className="font-semibold text-accent">Space Complexity:</span>
      <span className="ml-2 text-sm">{spaceComplexity}</span>
    </div>
  </div>
);
