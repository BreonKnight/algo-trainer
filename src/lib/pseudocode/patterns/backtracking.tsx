import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const BacktrackingPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Backtracking
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n!) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Exhaustive search with pruning
    </div>

    <PseudocodeDisplay
      code={`// N-Queens
N-QUEENS(n):
  board = [0] * n
  return SOLVE-N-QUEENS(board, 0)

SOLVE-N-QUEENS(board, row):
  if row == n:
    return true
  for col from 0 to n-1:
    if IS-SAFE(board, row, col):
      board[row] = col
      if SOLVE-N-QUEENS(board, row+1):
        return true
      board[row] = 0
  return false

// Sudoku
SUDOKU(board):
  return SOLVE-SUDOKU(board)

SOLVE-SUDOKU(board):
  find empty cell (i, j)
  if no empty cell:
    return true
  for num from 1 to 9:
    if IS-VALID(board, i, j, num):
      board[i][j] = num
      if SOLVE-SUDOKU(board):
        return true
      board[i][j] = 0
  return false

// Subset Sum
SUBSET-SUM(S, target):
  return SOLVE-SUBSET-SUM(S, 0, target)

SOLVE-SUBSET-SUM(S, i, target):
  if target == 0:
    return true
  if i == length(S) or target < 0:
    return false
  if SOLVE-SUBSET-SUM(S, i+1, target-S[i]):
    return true
  return SOLVE-SUBSET-SUM(S, i+1, target)`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Choose:</span> Make a choice at current state
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Explore:</span> Recursively try next choices
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Backtrack:</span> Undo choice if it leads to
        dead end
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: N-Queens</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`n = 4
Board:
[1, 3, 0, 2]
[2, 0, 3, 1]
Q . . .
. . Q .
. Q . .
. . . Q`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Sudoku</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input:
5 3 . . 7 . . . .
6 . . 1 9 5 . . .
. 9 8 . . . . 6 .
8 . . . 6 . . . 3
4 . . 8 . 3 . . 1
7 . . . 2 . . . 6
. 6 . . . . 2 8 .
. . . 4 1 9 . . 5
. . . . 8 . . 7 9

Solution:
5 3 4 6 7 8 9 1 2
6 7 2 1 9 5 3 4 8
1 9 8 3 4 2 5 6 7
8 5 9 7 6 1 4 2 3
4 2 6 8 5 3 7 9 1
7 1 3 9 2 4 8 5 6
9 6 1 5 3 7 2 8 4
2 8 7 4 1 9 6 3 5
3 4 5 2 8 6 1 7 9`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Subset Sum</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`S = [3, 1, 4, 2]
target = 6
Subsets:
[3, 1, 2]
[4, 2]
Total subsets: 2`}
      </pre>
    </div>
  </div>
);
