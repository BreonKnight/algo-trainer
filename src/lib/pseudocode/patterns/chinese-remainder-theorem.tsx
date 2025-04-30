import { ChevronRight } from "lucide-react";

export const ChineseRemainderTheoremPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Chinese Remainder Theorem Template
      </span>
      <span className="ml-2 text-xs text-secondary">(Number Theory)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - where n is number of congruences &nbsp;|&nbsp; Space: O(1) -
      constant space &nbsp;|&nbsp; Use: Solving systems of congruences
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set up
        congruences and moduli
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Calculate product:</span>{" "}
        Compute product of all moduli
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Find inverses:</span>{" "}
        Calculate modular inverses
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compute solution:</span>{" "}
        Combine results using CRT formula
      </span>
    </div>
  </div>
);
