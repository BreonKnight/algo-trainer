import { ChevronRight } from "lucide-react";

export const CircularLinkedListPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Circular Linked List Template
      </span>
      <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) - for traversal &nbsp;|&nbsp; Space: O(n) - for n nodes
      &nbsp;|&nbsp; Use: Circular data storage
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Node structure:</span>{" "}
        Define node with data and next pointer
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Insert operations:</span>{" "}
        Handle head and tail insertions
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Delete operations:</span>{" "}
        Handle head and tail deletions
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Traversal:</span> Iterate
        through list using next pointers
      </span>
    </div>
  </div>
);
