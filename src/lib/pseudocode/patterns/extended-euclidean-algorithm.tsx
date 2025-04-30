import { ChevronRight } from "lucide-react";

export const ExtendedEuclideanAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Extended Euclidean Template</span>
      <span className="ml-2 text-xs text-secondary">(Number Theory)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log min(a,b)) - recursive division &nbsp;|&nbsp; Space: O(log
      min(a,b)) - recursion stack &nbsp;|&nbsp; Use: Finding modular inverses
      and solving linear Diophantine equations
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Base case:</span> Return
        (a,1,0) when b=0
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Recursive call:</span>{" "}
        Compute (d,x1,y1) for (b,a%b)
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update coefficients:</span>{" "}
        x = y1, y = x1 - (a/b)*y1
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return result:</span>{" "}
        (d,x,y) where d = gcd(a,b)
      </span>
    </div>
  </div>
);
