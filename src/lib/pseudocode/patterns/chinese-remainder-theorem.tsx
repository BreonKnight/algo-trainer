import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const ChineseRemainderTheoremPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Chinese Remainder Theorem</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Solve system of
      congruences
    </div>

    <PseudocodeDisplay code={`CRT(a, m)
    let n be the length of a
    let M ← 1
    for i ← 1 to n
        do M ← M · m[i]
    
    let x ← 0
    for i ← 1 to n
        do let Mi ← M / m[i]
            let yi ← MODULAR-INVERSE(Mi, m[i])
            x ← x + a[i] · Mi · yi
    
    return x mod M

MODULAR-INVERSE(a, m)
    let g, x, y be the result of EXTENDED-EUCLID(a, m)
    if g ≠ 1
        then return NIL
    return x mod m

EXTENDED-EUCLID(a, b)
    if b = 0
        then return (a, 1, 0)
    let (d', x', y') ← EXTENDED-EUCLID(b, a mod b)
    let d ← d'
    let x ← y'
    let y ← x' - ⌊a/b⌋ · y'
    return (d, x, y)

// Example:
// Input: a = [2, 3, 2], m = [3, 5, 7]
// 
// M = 3·5·7 = 105
// 
// For i = 1:
//   M₁ = 105/3 = 35
//   y₁ = 2 (inverse of 35 mod 3)
// 
// For i = 2:
//   M₂ = 105/5 = 21
//   y₂ = 1 (inverse of 21 mod 5)
// 
// For i = 3:
//   M₃ = 105/7 = 15
//   y₃ = 1 (inverse of 15 mod 7)
// 
// x = 2·35·2 + 3·21·1 + 2·15·1 = 233
// 
// Output: 233 mod 105 = 23`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compute: Product of all moduli</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>
          Calculate: Modular inverses using extended Euclidean algorithm
        </span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Combine: Solutions using CRT formula</span>
      </div>
    </div>
  </div>
);
