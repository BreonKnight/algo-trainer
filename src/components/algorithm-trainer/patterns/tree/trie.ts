import { AlgorithmPattern } from "../../types";

class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isEndOfWord = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return node.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return true;
  }

  delete(word: string): boolean {
    return this.deleteHelper(this.root, word, 0);
  }

  private deleteHelper(node: TrieNode, word: string, depth: number): boolean {
    if (depth === word.length) {
      if (!node.isEndOfWord) {
        return false;
      }
      node.isEndOfWord = false;
      return node.children.size === 0;
    }

    const char = word[depth];
    if (!node.children.has(char)) {
      return false;
    }

    const shouldDeleteCurrentNode = this.deleteHelper(
      node.children.get(char)!,
      word,
      depth + 1
    );

    if (shouldDeleteCurrentNode) {
      node.children.delete(char);
      return node.children.size === 0 && !node.isEndOfWord;
    }

    return false;
  }

  getAllWordsWithPrefix(prefix: string): string[] {
    const words: string[] = [];
    let node = this.root;

    // Navigate to the prefix node
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return words;
      }
      node = node.children.get(char)!;
    }

    // Collect all words with the prefix
    this.collectWords(node, prefix, words);
    return words;
  }

  private collectWords(node: TrieNode, prefix: string, words: string[]): void {
    if (node.isEndOfWord) {
      words.push(prefix);
    }

    for (const [char, childNode] of node.children) {
      this.collectWords(childNode, prefix + char, words);
    }
  }
}

export const triePattern: AlgorithmPattern = {
  title: "Trie Operations",
  description:
    "A tree-like data structure for efficient string operations and prefix matching",
  timeComplexity: "O(m) for operations where m is the length of the string",
  spaceComplexity: "O(ALPHABET_SIZE * m * n) where n is the number of strings",
  pseudocode: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.isEndOfWord = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.isEndOfWord = True
    
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.isEndOfWord
    
    def startsWith(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True`,
  example: `// Create a new trie
const trie = new Trie();

// Insert words
trie.insert("apple");
trie.insert("app");
trie.insert("banana");

// Search for words
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("ban")); // false

// Check prefixes
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("ban")); // true

// Get all words with prefix
console.log(trie.getAllWordsWithPrefix("app")); // ["app", "apple"]`,
  implementation: `class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isEndOfWord = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return node.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return true;
  }

  delete(word: string): boolean {
    return this.deleteHelper(this.root, word, 0);
  }

  private deleteHelper(node: TrieNode, word: string, depth: number): boolean {
    if (depth === word.length) {
      if (!node.isEndOfWord) {
        return false;
      }
      node.isEndOfWord = false;
      return node.children.size === 0;
    }

    const char = word[depth];
    if (!node.children.has(char)) {
      return false;
    }

    const shouldDeleteCurrentNode = this.deleteHelper(
      node.children.get(char)!,
      word,
      depth + 1
    );

    if (shouldDeleteCurrentNode) {
      node.children.delete(char);
      return node.children.size === 0 && !node.isEndOfWord;
    }

    return false;
  }

  getAllWordsWithPrefix(prefix: string): string[] {
    const words: string[] = [];
    let node = this.root;

    // Navigate to the prefix node
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return words;
      }
      node = node.children.get(char)!;
    }

    // Collect all words with the prefix
    this.collectWords(node, prefix, words);
    return words;
  }

  private collectWords(node: TrieNode, prefix: string, words: string[]): void {
    if (node.isEndOfWord) {
      words.push(prefix);
    }

    for (const [char, childNode] of node.children) {
      this.collectWords(childNode, prefix + char, words);
    }
  }
}`,
  category: "tree",
};
