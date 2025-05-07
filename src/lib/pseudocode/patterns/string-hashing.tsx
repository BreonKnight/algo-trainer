import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const StringHashingPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        String Hashing
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Fast string comparison and pattern
      matching
    </div>

    <PseudocodeDisplay
      code={`// Rolling hash function
ROLLING-HASH(s, base, mod):
  hash = 0
  power = 1
  for i = 0 to len(s)-1:
    hash = (hash + (s[i] - 'a' + 1) * power) % mod
    power = (power * base) % mod
  return hash

// Substring hash
SUBSTRING-HASH(s, start, length, base, mod):
  hash = 0
  power = 1
  for i = start to start+length-1:
    hash = (hash + (s[i] - 'a' + 1) * power) % mod
    power = (power * base) % mod
  return hash

// Example usage
s = "hello"
base = 31
mod = 10^9 + 7
hash = ROLLING-HASH(s, base, mod)
sub_hash = SUBSTRING-HASH(s, 1, 3, base, mod)  // Hash of "ell"`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Choose:</span> Prime base and large modulus
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compute:</span> Hash using polynomial rolling
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compare:</span> Use hashes for fast string
        matching
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: "hello"</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`String: "hello"
Base: 31
Mod: 10^9 + 7

Hash computation:
h = (8 * 31^0) % mod
e = (5 * 31^1) % mod
l = (12 * 31^2) % mod
l = (12 * 31^3) % mod
o = (15 * 31^4) % mod

Final hash = sum of all values % mod`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Key Properties</span>
      <div className="mt-2">
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>O(1) comparison of strings</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Low collision probability with good parameters</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Useful for Rabin-Karp and other string algorithms</span>
        </div>
      </div>
    </div>
  </div>
);
