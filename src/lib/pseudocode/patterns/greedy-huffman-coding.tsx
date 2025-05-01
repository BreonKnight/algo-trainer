import { ChevronRight } from "lucide-react";

export const GreedyHuffmanCodingPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Huffman Coding</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Data
      compression
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Standard Huffman Coding
class Node:
    def __init__(self, symbol=None, freq=0, left=None, right=None):
        self.symbol = symbol
        self.freq = freq
        self.left = left
        self.right = right

def build_huffman_tree(frequencies):
    # Create leaf nodes
    nodes = [Node(symbol, freq) for symbol, freq in frequencies.items()]
    
    # Build tree
    while len(nodes) > 1:
        # Get two nodes with minimum frequency
        nodes.sort(key=lambda x: x.freq)
        left = nodes.pop(0)
        right = nodes.pop(0)
        
        # Create new internal node
        internal = Node(freq=left.freq + right.freq, left=left, right=right)
        nodes.append(internal)
    
    return nodes[0]

def build_codes(node, prefix="", codes={}):
    if node.symbol is not None:
        codes[node.symbol] = prefix
    else:
        build_codes(node.left, prefix + "0", codes)
        build_codes(node.right, prefix + "1", codes)
    return codes

// Adaptive Huffman Coding
class AdaptiveNode:
    def __init__(self, symbol=None, freq=0, left=None, right=None, parent=None):
        self.symbol = symbol
        self.freq = freq
        self.left = left
        self.right = right
        self.parent = parent

def update_tree(node):
    # Update frequencies
    while node is not None:
        node.freq += 1
        node = node.parent

// Canonical Huffman Coding
def build_canonical_codes(lengths):
    # Sort symbols by code length
    symbols = sorted(lengths.items(), key=lambda x: (x[1], x[0]))
    
    # Generate canonical codes
    code = 0
    prev_length = 0
    codes = {}
    
    for symbol, length in symbols:
        if length > prev_length:
            code <<= (length - prev_length)
        codes[symbol] = format(code, f'0{length}b')
        code += 1
        prev_length = length
    
    return codes`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Build:</span> Huffman tree
        from frequencies
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Generate:</span> Codes by
        traversing tree
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Encode:</span> Symbols using
        generated codes
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Standard Huffman
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input:
Symbols: A, B, C, D, E
Frequencies: A(5), B(9), C(12), D(13), E(16)

Tree Structure:
        (55)
       /     \\
    (25)     (30)
   /   \\    /   \\
(12) (13) (14)  (16)
      / \\
    (5) (9)

Codes:
A: 110
B: 111
C: 00
D: 01
E: 10`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Adaptive Huffman
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Stream: A B A C A B A

Initial Tree:
(A:1)

After B:
    (2)
   /   \\
(A:1) (B:1)

After A:
    (3)
   /   \\
(A:2) (B:1)

After C:
      (4)
     /   \\
    (2)  (C:1)
   /   \\
(A:1) (B:1)`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Canonical Huffman
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input:
Symbols: A, B, C, D, E
Code Lengths: A(3), B(3), C(2), D(2), E(2)

Canonical Codes:
A: 000
B: 001
C: 01
D: 10
E: 11`}
      </pre>
    </div>
  </div>
);
