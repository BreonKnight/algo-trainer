import { AlgorithmPattern } from "../../types";

export const greedy_huffman_codingPattern: AlgorithmPattern = {
  title: "Greedy Huffman Coding Algorithm",
  description:
    "A greedy algorithm used for data compression, which builds a Huffman tree to assign variable-length codes to characters based on their frequencies.",
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  category: "Greedy Algorithms",
  pseudocode: `1. Create a leaf node for each unique character and build a min heap\n2. While the heap has more than one node:\n   a. Extract two nodes with minimum frequencies\n   b. Create a new internal node with frequency equal to the sum of the two nodes\n   c. Make the first extracted node as left child and the second as right child\n   d. Add the new node to the heap\n3. The remaining node is the root of the Huffman tree\n4. Traverse the tree to assign codes to characters`,
  example: `Characters: {a:5, b:9, c:12, d:13, e:16, f:45}\n\nStep 1: Create leaf nodes and heap\nStep 2: Combine nodes\n   - Combine a(5) and b(9) -> 14\n   - Combine c(12) and d(13) -> 25\n   - Combine 14 and e(16) -> 30\n   - Combine 25 and 30 -> 55\n   - Combine 55 and f(45) -> 100\n\nHuffman Tree:\n     100\n    /   \\\n   55    f(45)\n  /   \\\n30    25\n/ \\   / \\\n14  e c  d\n/ \\\na  b\n\nCodes:\na: 0000\nb: 0001\ne: 001\nc: 010\nd: 011\nf: 1`,
  implementation: `class HuffmanNode:\n    def __init__(self, char, freq):\n        self.char = char\n        self.freq = freq\n        self.left = None\n        self.right = None\n\ndef build_huffman_tree(char_freq):\n    heap = []\n    for char, freq in char_freq.items():\n        heapq.heappush(heap, (freq, HuffmanNode(char, freq)))\n    \n    while len(heap) > 1:\n        freq1, node1 = heapq.heappop(heap)\n        freq2, node2 = heapq.heappop(heap)\n        internal = HuffmanNode(None, freq1 + freq2)\n        internal.left = node1\n        internal.right = node2\n        heapq.heappush(heap, (freq1 + freq2, internal))\n    \n    return heap[0][1]\n\ndef assign_codes(node, code='', codes=None):\n    if codes is None:\n        codes = {}\n    if node is not None:\n        if node.char is not None:\n            codes[node.char] = code\n        assign_codes(node.left, code + '0', codes)\n        assign_codes(node.right, code + '1', codes)\n    return codes`,
};
