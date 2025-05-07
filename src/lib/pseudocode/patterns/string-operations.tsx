import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const StringOperationsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">String Operations</span>
      <span className="ml-2 text-xs text-secondary">(Basic String Manipulation)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: String manipulation
    </div>

    <PseudocodeDisplay
      code={`// Common String Operations
CONCATENATE(s1, s2):
  return s1 + s2

SUBSTRING(s, start, end):
  return s[start..end]

CHAR_AT(s, index):
  return s[index]

LENGTH(s):
  return s.length

COMPARE(s1, s2):
  return s1 == s2

FIND(s, pattern):
  return s.indexOf(pattern)

REPLACE(s, old, new):
  return s.replace(old, new)

SPLIT(s, delimiter):
  return s.split(delimiter)

JOIN(arr, delimiter):
  return arr.join(delimiter)

TRIM(s):
  return s.trim()

TO_UPPER(s):
  return s.toUpperCase()

TO_LOWER(s):
  return s.toLowerCase()`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Concatenation:</span> Combine strings
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Substring:</span> Extract portion
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Search:</span> Find patterns
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: String Operations</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: "Hello World"

Concatenation: "Hello" + " " + "World" = "Hello World"
Substring: "Hello World".substring(0, 5) = "Hello"
Search: "Hello World".indexOf("World") = 6
Replace: "Hello World".replace("World", "Universe") = "Hello Universe"
Split: "Hello World".split(" ") = ["Hello", "World"]
Join: ["Hello", "World"].join("-") = "Hello-World"
Trim: "  Hello  ".trim() = "Hello"
Case: "Hello World".toUpperCase() = "HELLO WORLD"`}
      </pre>
    </div>
  </div>
);
