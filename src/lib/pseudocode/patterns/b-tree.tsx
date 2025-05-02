import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const BTreePattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">B-Tree</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Disk-based
      balanced search tree
    </div>

    <PseudocodeDisplay code={`B-TREE-INSERT(T, k)
    let r ← T.root
    if r.n = 2t - 1
        then s ← ALLOCATE-NODE()
             T.root ← s
             s.leaf ← false
             s.n ← 0
             s.c₁ ← r
             B-TREE-SPLIT-CHILD(s, 1)
             B-TREE-INSERT-NONFULL(s, k)
        else B-TREE-INSERT-NONFULL(r, k)

B-TREE-INSERT-NONFULL(x, k)
    let i ← x.n
    if x.leaf
        then while i ≥ 1 and k < x.keyᵢ
                do x.keyᵢ₊₁ ← x.keyᵢ
                   i ← i - 1
             x.keyᵢ₊₁ ← k
             x.n ← x.n + 1
        else while i ≥ 1 and k < x.keyᵢ
                do i ← i - 1
             i ← i + 1
             if x.cᵢ.n = 2t - 1
                then B-TREE-SPLIT-CHILD(x, i)
                     if k > x.keyᵢ
                        then i ← i + 1
             B-TREE-INSERT-NONFULL(x.cᵢ, k)

B-TREE-SPLIT-CHILD(x, i)
    let z ← ALLOCATE-NODE()
    let y ← x.cᵢ
    z.leaf ← y.leaf
    z.n ← t - 1
    for j ← 1 to t - 1
        do z.keyⱼ ← y.keyⱼ₊ₜ
    if not y.leaf
        then for j ← 1 to t
                do z.cⱼ ← y.cⱼ₊ₜ
    y.n ← t - 1
    for j ← x.n + 1 downto i + 1
        do x.cⱼ₊₁ ← x.cⱼ
    x.cᵢ₊₁ ← z
    for j ← x.n downto i
        do x.keyⱼ₊₁ ← x.keyⱼ
    x.keyᵢ ← y.keyₜ
    x.n ← x.n + 1

// Example:
// Input: Insert keys [10, 20, 30, 40, 50, 60, 70, 80, 90] with t = 2
// 
// Insert 10, 20:
//   [10, 20]
// 
// Insert 30:
//   [20]
//  /    \
// [10]  [30]
// 
// Insert 40, 50:
//   [20, 40]
//  /   |   \
// [10] [30] [50]
// 
// Insert 60:
//      [40]
//    /     \
// [20]     [60]
// /  \     /  \
// [10][30][50][70]
// 
// Insert 70, 80, 90:
//      [40, 70]
//    /    |    \
// [20]  [60]  [80,90]
// /  \  /  \
// [10][30][50]`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Insert: Find appropriate leaf node for insertion</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Split: Handle node overflow by splitting nodes</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Maintain: Keep tree balanced through proper splitting</span>
      </div>
    </div>
  </div>
);
