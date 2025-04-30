import { ChevronRight } from "lucide-react";

export const TrieOperationsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Trie Operations Template</span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(L) - where L is length of word &nbsp;|&nbsp; Space: O(N * L) -
      where N is number of words &nbsp;|&nbsp; Use: Efficient string storage and
      prefix matching
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Insert:</span> Add word
        character by character, creating nodes as needed
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Search:</span> Traverse trie
        following word characters, check end marker
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Prefix search:</span> Check
        if prefix exists in trie
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Delete:</span> Remove word
        by marking nodes as non-end and cleaning up unused nodes
      </span>
    </div>
  </div>
);
