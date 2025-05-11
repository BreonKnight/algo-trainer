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
  description,
  timeComplexity,
  pseudocode,
  keySteps,
}: AlgorithmPatternProps) => (
  <div className="text-foreground">
    <div className="mb-2">
      <span className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent break-words">
        {name}
      </span>
    </div>
    <div className="h-1 bg-primary rounded mt-1 w-8 mx-auto" />
    <div className="mb-3 text-sm font-mono tracking-wide font-medium text-muted-foreground">
      {timeComplexity}
    </div>
    <div className="mb-6 text-base leading-relaxed text-muted-foreground">{description}</div>

    <PseudocodeDisplay code={pseudocode} />

    {keySteps && keySteps.length > 0 && (
      <div className="mt-4">
        {keySteps.map((step, index) => (
          <div key={index} className="flex items-start mb-1">
            <span className="font-bold text-foreground mr-2">{index + 1}.</span>
            <ChevronRight className="w-4 h-4 text-primary mt-1 mr-1" />
            <span className="text-foreground">{step}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);
