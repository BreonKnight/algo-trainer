import { ChevronRight } from "lucide-react";

export const DynamicProgrammingCoinChangePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Coin Change Template</span>
      <span className="ml-2 text-xs text-secondary">(Dynamic Programming)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n*m) - n is amount, m is coins &nbsp;|&nbsp; Space: O(n) - DP
      array &nbsp;|&nbsp; Use: Finding minimum coins needed for amount
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Create DP
        array with infinity
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Base case:</span> DP[0] = 0
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Fill DP:</span> For each
        amount, try all coins
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return result:</span>{" "}
        DP[amount] or -1 if impossible
      </span>
    </div>
  </div>
);
