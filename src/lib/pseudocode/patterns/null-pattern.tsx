import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const NullPattern = () => (
  <div className="flex flex-col items-center">
    <div className="flex items-center">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Null Pattern
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Design Pattern)</span>
    </div>
    <div className="mt-4 text-sm text-secondary">
      <p>A design pattern that provides a default behavior for null objects</p>
      <p>Time: O(1) for null checks and property access</p>
      <p>Space: O(1) for storing null object reference</p>
      <p>Use: Handle null/undefined values gracefully, prevent null pointer exceptions</p>
    </div>
    <div className="mt-4 w-full">
      <PseudocodeDisplay
        code={`# Null Pattern: Handle null/undefined values gracefully
# Input: Object that may be null
# Output: Safe access to object properties

Algorithm NULL-PATTERN(object)
    if object = null then
        return null
    end if
    
    # Safe access to properties
    result ← object.property
    
    # Safe method calls
    if object.method ≠ null then
        result ← object.method()
    end if
    
    return result

# Example:
# Input: object = null
# Output: null
#
# Input: object = { property: "value", method: () => "result" }
# Output: "result"`}
      />
    </div>
    <div className="mt-4 w-full">
      <h3 className="text-lg font-semibold mb-2">Key Steps:</h3>
      <div className="space-y-2">
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Check if the object is null before accessing properties</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Provide default behavior for null objects</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Implement safe method calls with null checks</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Return appropriate default values when object is null</span>
        </div>
      </div>
    </div>
  </div>
);
