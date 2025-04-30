import { ChevronRight } from "lucide-react";

export const RabinKarpPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Rabin-Karp Template</span>
      <span className="ml-2 text-xs text-secondary">(String Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n + m) - average case, O(nm) - worst case &nbsp;|&nbsp; Space:
      O(1) - constant space &nbsp;|&nbsp; Use: Pattern matching in strings
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Calculate
        pattern hash
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process:</span> Slide window
        and update rolling hash
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check:</span> Compare actual
        strings on hash match
      </span>
    </div>
  </div>
);
