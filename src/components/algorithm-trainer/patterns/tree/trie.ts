import { AlgorithmPattern } from "../../types/pattern-types";

export const triePattern: AlgorithmPattern = {
  title: "Trie",
  description:
    "A pattern for implementing and using a trie (prefix tree) data structure. Tries are efficient for storing and searching strings.",
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
const triePatternPatternPattern = new Trie();

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
  implementation: `class TrieNode:
    """
    Node in a trie data structure.
    """
    def __init__(self):
        self.children = {}  # Dictionary to store child nodes
        self.is_end_of_word = False

class Trie:
    """
    Trie data structure for efficient string storage and retrieval.
    """
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word: str) -> None:
        """
        Insert a word into the trie.
        
        Args:
            word: Word to insert
        """
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True
    
    def search(self, word: str) -> bool:
        """
        Search for a word in the trie.
        
        Args:
            word: Word to search for
        
        Returns:
            True if the word exists, False otherwise
        """
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word
    
    def starts_with(self, prefix: str) -> bool:
        """
        Check if any word in the trie starts with the given prefix.
        
        Args:
            prefix: Prefix to check
        
        Returns:
            True if any word starts with the prefix, False otherwise
        """
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True
    
    def delete(self, word: str) -> bool:
        """
        Delete a word from the trie.
        
        Args:
            word: Word to delete
        
        Returns:
            True if the word was deleted, False if it didn't exist
        """
        return self._delete_helper(self.root, word, 0)
    
    def _delete_helper(self, node: TrieNode, word: str, depth: int) -> bool:
        """
        Helper function for deleting a word from the trie.
        
        Args:
            node: Current node
            word: Word to delete
            depth: Current depth in the trie
        
        Returns:
            True if the current node should be deleted
        """
        if depth == len(word):
            if not node.is_end_of_word:
                return False
            node.is_end_of_word = False
            return len(node.children) == 0
        
        char = word[depth]
        if char not in node.children:
            return False
        
        should_delete_current_node = self._delete_helper(
            node.children[char], word, depth + 1
        )
        
        if should_delete_current_node:
            del node.children[char]
            return len(node.children) == 0 and not node.is_end_of_word
        
        return False
    
    def get_all_words_with_prefix(self, prefix: str) -> list[str]:
        """
        Get all words in the trie that start with the given prefix.
        
        Args:
            prefix: Prefix to search for
        
        Returns:
            List of words starting with the prefix
        """
        words = []
        node = self.root
        
        # Navigate to the prefix node
        for char in prefix:
            if char not in node.children:
                return words
            node = node.children[char]
        
        # Collect all words with the prefix
        self._collect_words(node, prefix, words)
        return words
    
    def _collect_words(self, node: TrieNode, prefix: str, words: list[str]) -> None:
        """
        Helper function to collect all words with a given prefix.
        
        Args:
            node: Current node
            prefix: Current prefix
            words: List to store found words
        """
        if node.is_end_of_word:
            words.append(prefix)
        
        for char, child in node.children.items():
            self._collect_words(child, prefix + char, words)

# Example usage
trie = Trie()
words = ["apple", "app", "application", "banana", "ball"]
for word in words:
    trie.insert(word)

print(f"Search 'app': {trie.search('app')}")  # True
print(f"Search 'apps': {trie.search('apps')}")  # False
print(f"Starts with 'app': {trie.starts_with('app')}")  # True
print(f"Words with prefix 'app': {trie.get_all_words_with_prefix('app')}")  # ['app', 'apple', 'application']

trie.delete('app')
print(f"After deleting 'app': {trie.search('app')}")  # False
print(f"Words with prefix 'app': {trie.get_all_words_with_prefix('app')}")  # ['apple', 'application']`,
  category: "Data Structure",
};
