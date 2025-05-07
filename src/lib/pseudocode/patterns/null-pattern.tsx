import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const NullPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Null Pattern
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Design Pattern)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(1) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Handle null/undefined values
      gracefully
    </div>

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
);
