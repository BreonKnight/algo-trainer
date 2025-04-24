import React from "react";
import styles from "@/styles/pseudocode.module.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { PatternKey, PATTERN_KEYS } from "./types";

interface MonsterHunterGuideProps {
  currentPattern: PatternKey;
}

// Monster hunter themed explanations for different algorithms
const monsterHunterExplanations: Record<
  PatternKey,
  {
    title: string;
    description: string;
    example: string;
    tips: string[];
  }
> = {
  "Quick Sort": {
    title: "Rathalos Territory Division",
    description:
      "Like dividing a Rathalos's territory into smaller hunting grounds, Quick Sort partitions an array around a pivot element.",
    example:
      "Imagine you're organizing a hunt for different monster types. You pick a Rathalos as your pivot and divide other monsters into two groups: those weaker than a Rathalos and those stronger.",
    tips: [
      "Choose your pivot wisely - like picking the right monster to base your territory division on",
      "Recursively divide smaller territories - just like breaking down a large hunting ground into manageable zones",
      "Merge the sorted territories - similar to coordinating multiple hunting parties",
    ],
  },
  "Merge Sort": {
    title: "Monster Pack Organization",
    description:
      "Similar to organizing a pack of different monsters by size, Merge Sort divides and conquers.",
    example:
      "Think of organizing a mixed pack of Jagras, Kulu-Ya-Ku, and Tzitzi-Ya-Ku by size. You split them into smaller groups, sort each group, then merge them back together in order.",
    tips: [
      "Divide the pack into smaller groups - like separating monsters into different hunting parties",
      "Sort each small group - organizing monsters by size within each party",
      "Merge the sorted groups - combining hunting parties while maintaining size order",
    ],
  },
  "Stack Sort": {
    title: "Monster Material Stacking",
    description:
      "Like organizing monster materials by stacking them in order of rarity, Stack Sort uses a temporary stack to sort elements.",
    example:
      "Imagine you're organizing your material box by stacking materials. You pick up each material and place it in the correct position in your sorted stack.",
    tips: [
      "Use a temporary stack to maintain order - like having a sorting box",
      "Compare with top of stack - similar to comparing material rarities",
      "Move items between stacks - like reorganizing your material box",
    ],
  },
  "Heap Sort": {
    title: "Monster Material Hierarchy",
    description:
      "Like organizing monster materials in a hierarchical tree where more valuable materials are at the top, Heap Sort builds and maintains a heap structure.",
    example:
      "Think of creating a material hierarchy where the rarest materials (like gems) are at the top, and common materials (like scales) are at the bottom.",
    tips: [
      "Build the initial heap - like creating your material hierarchy",
      "Extract the maximum - similar to taking the rarest material first",
      "Maintain the hierarchy - ensure valuable materials stay at the top",
    ],
  },
  "Bubble Sort": {
    title: "Material Value Bubbling",
    description:
      "Like watching valuable materials naturally rise to the top of your item box, Bubble Sort repeatedly compares adjacent items and swaps them if needed.",
    example:
      "Imagine your materials are in a box, and the more valuable ones naturally float to the top as you compare and swap adjacent materials.",
    tips: [
      "Compare adjacent materials - like checking which is more valuable",
      "Swap if out of order - similar to exchanging positions",
      "Repeat until sorted - continue until all materials are in order",
    ],
  },
  "Selection Sort": {
    title: "Material Selection Process",
    description:
      "Like selecting the most valuable material from your unsorted pile and placing it in your organized collection, Selection Sort builds the sorted array one element at a time.",
    example:
      "Think of organizing your materials by repeatedly finding the most valuable item in your unsorted pile and moving it to your sorted collection.",
    tips: [
      "Find the most valuable - like identifying the rarest material",
      "Place it in position - similar to moving it to your sorted pile",
      "Continue with remaining - repeat until all materials are sorted",
    ],
  },
  "Insertion Sort": {
    title: "Material Box Organization",
    description:
      "Like organizing your material box by inserting each new material in its proper place, Insertion Sort builds the sorted array by placing each element in its correct position.",
    example:
      "Imagine organizing your material box as you collect new items. Each time you get a new material, you find the right spot for it among your already sorted materials.",
    tips: [
      "Take one material at a time - like processing new materials as you find them",
      "Find its correct position - similar to finding where it belongs in your sorted box",
      "Shift other materials - make space for the new material in your collection",
    ],
  },
  "Binary Search": {
    title: "Monster Tracking",
    description:
      "Like tracking a specific monster through different regions, Binary Search efficiently finds a target in a sorted array.",
    example:
      "Imagine you're tracking a specific Anjanath through different regions. You check the middle region first, then eliminate half the search area based on tracks found.",
    tips: [
      "Always start in the middle - like checking the most likely monster territory first",
      "Eliminate half the search area - similar to determining which direction the monster went",
      "Repeat until found - continuing the hunt until you locate your target",
    ],
  },
  "Binary Search on Answer": {
    title: "Monster Territory Mapping",
    description:
      "Like mapping out a monster's territory to find the optimal hunting ground, Binary Search on Answer finds the optimal value in a search space.",
    example:
      "Imagine mapping out a monster's territory to find the optimal hunting ground. You test different areas and narrow down to the best location.",
    tips: [
      "Define search space - like determining the monster's possible territory range",
      "Test middle value - similar to checking if a territory is suitable",
      "Adjust search range - narrowing down to the optimal territory",
    ],
  },
  "Linear Search": {
    title: "Monster Territory Sweep",
    description:
      "Like systematically sweeping through a monster's territory to find something specific, Linear Search checks each element in sequence.",
    example:
      "Imagine sweeping through a monster's territory inch by inch, checking each area for signs of your target.",
    tips: [
      "Check each location - like examining every part of the territory",
      "Continue until found - similar to not giving up until you find what you're looking for",
      "Return position when found - like marking the exact location on your map",
    ],
  },
  "Two Sum": {
    title: "Monster Pair Hunting",
    description:
      "Like finding a pair of monsters that together match a specific criteria, Two Sum finds pairs of numbers that sum to a target.",
    example:
      "Imagine you need to find two monsters whose combined strength equals a specific value. You track monsters you've seen and look for complements.",
    tips: [
      "Track seen monsters - like keeping a log of monsters you've encountered",
      "Look for complement - similar to finding a monster that pairs with your current one",
      "Return pair when found - like identifying the perfect monster duo",
    ],
  },
  "Two Sum Two Pointers": {
    title: "Monster Pincer Attack",
    description:
      "Like coordinating a pincer attack on a monster from two directions, Two Sum Two Pointers uses two pointers moving from different ends.",
    example:
      "Imagine surrounding a monster with two hunting parties. One approaches from the left while another approaches from the right, trapping the monster.",
    tips: [
      "Start pointers at ends - like positioning hunting parties at opposite sides",
      "Move toward center - similar to closing the trap",
      "Adjust based on sum - like repositioning based on the monster's strength",
    ],
  },
  "Dynamic Programming": {
    title: "Hunting Strategy Optimization",
    description:
      "Like developing the most efficient hunting strategy by learning from previous hunts, Dynamic Programming solves complex problems by breaking them down.",
    example:
      "Imagine optimizing your hunting route to maximize monster materials collected. You remember the best paths from previous hunts and build upon that knowledge.",
    tips: [
      "Break down the problem - like planning a hunt step by step",
      "Store intermediate results - similar to keeping a hunting journal of successful strategies",
      "Build up to the solution - gradually improving your hunting efficiency",
    ],
  },
  "Dynamic Programming Fibonacci": {
    title: "Monster Population Growth",
    description:
      "Like tracking the growth of a monster population where each generation depends on previous ones, Fibonacci DP calculates numbers in the Fibonacci sequence.",
    example:
      "Imagine tracking a monster species where each generation's population depends on the previous two generations, just like the Fibonacci sequence.",
    tips: [
      "Start with base cases - like beginning with initial monster population",
      "Build up from previous values - similar to watching the population grow",
      "Store intermediate results - like keeping track of population at each stage",
    ],
  },
  "Dynamic Programming Iterative": {
    title: "Monster Territory Expansion",
    description:
      "Like expanding your hunting territory step by step, Iterative DP builds solutions from smaller subproblems.",
    example:
      "Imagine expanding your hunting territory one area at a time, using knowledge from previously explored areas to optimize your expansion.",
    tips: [
      "Start with smallest subproblems - like beginning with a small territory",
      "Build up iteratively - similar to gradually expanding your hunting grounds",
      "Use previous results - like applying lessons from explored areas",
    ],
  },
  "Dynamic Programming Coin Change": {
    title: "Monster Material Collection",
    description:
      "Like collecting the minimum number of monster materials needed for crafting, Coin Change DP finds the minimum number of coins needed for an amount.",
    example:
      "Imagine you need to collect monster materials to craft an item. You want to use the minimum number of different material types to reach your goal.",
    tips: [
      "Track minimum materials needed - like keeping a record of the fewest materials required",
      "Try each material type - similar to testing different monster parts",
      "Update minimum when better solution found - like discovering a more efficient crafting recipe",
    ],
  },
  Greedy: {
    title: "Opportunistic Hunting",
    description:
      "Like taking the best immediate opportunity during a hunt, Greedy algorithms make locally optimal choices at each step.",
    example:
      "Imagine you're gathering resources during a hunt. Instead of planning the entire route, you always grab the most valuable item you can see right now.",
    tips: [
      "Take the best immediate option - like always targeting the most vulnerable monster first",
      "Don't worry about future consequences - similar to focusing on the current hunt rather than future hunts",
      "Hope for a global optimum - trusting that your immediate choices lead to the best overall outcome",
    ],
  },
  "Greedy Activity Selection": {
    title: "Monster Hunt Scheduling",
    description:
      "Like scheduling the maximum number of monster hunts that don't overlap in time, Activity Selection finds the maximum number of non-overlapping activities.",
    example:
      "Imagine you need to schedule as many monster hunts as possible in a day, but each hunt takes a specific time slot and you can't be in two places at once.",
    tips: [
      "Sort by finish time - like organizing hunts by when they end",
      "Select earliest finishing hunt - similar to choosing the quickest hunt first",
      "Continue with compatible hunts - like scheduling as many hunts as possible",
    ],
  },
  "Greedy Fractional Knapsack": {
    title: "Monster Material Packing",
    description:
      "Like packing your inventory with monster materials to maximize value while respecting weight limits, Fractional Knapsack allows taking fractions of items.",
    example:
      "Imagine you have a limited carrying capacity and need to collect monster materials. You can take parts of materials if needed to maximize the total value.",
    tips: [
      "Sort by value per unit - like prioritizing the most valuable materials per weight",
      "Take whole items when possible - similar to collecting complete monster parts",
      "Take fractions if needed - like cutting larger materials to fit your capacity",
    ],
  },
  "Greedy Job Scheduling": {
    title: "Monster Hunt Assignment",
    description:
      "Like assigning hunters to monster hunts to maximize profit, Job Scheduling assigns jobs to maximize the total profit.",
    example:
      "Imagine you need to assign hunters to different monster hunts. Each hunt has a deadline and a reward, and you want to maximize the total rewards.",
    tips: [
      "Sort by deadline or profit - like organizing hunts by urgency or reward",
      "Assign most profitable hunts first - similar to prioritizing valuable targets",
      "Handle conflicts appropriately - like rescheduling when deadlines overlap",
    ],
  },
  "Greedy Huffman Coding": {
    title: "Monster Communication System",
    description:
      "Like creating an efficient communication system for different monster types, Huffman Coding creates optimal prefix codes for data compression.",
    example:
      "Imagine creating a communication system for different monster types. You want to use shorter signals for common monsters and longer ones for rare types.",
    tips: [
      "Build frequency table - like recording how often each monster type appears",
      "Create binary tree - similar to organizing a monster communication hierarchy",
      "Generate optimal codes - like creating efficient signals for each monster type",
    ],
  },
  "Greedy Dijkstra": {
    title: "Monster Territory Navigation",
    description:
      "Like finding the shortest path through monster territory, Dijkstra's algorithm finds the shortest path between nodes in a graph.",
    example:
      "Imagine navigating through monster territory to reach a specific location. You want to find the shortest path while avoiding the most dangerous areas.",
    tips: [
      "Track distances - like keeping a map of travel times to different locations",
      "Visit closest unvisited location - similar to always moving toward your goal",
      "Update distances when shorter path found - like discovering a faster route",
    ],
  },
  Backtracking: {
    title: "Monster Territory Exploration",
    description:
      "Like exploring a monster's territory and backtracking when you hit a dead end, Backtracking tries solutions and undoes them when they don't work.",
    example:
      "Imagine exploring a monster's territory. You try different paths, and when you hit a dead end, you backtrack and try a different route.",
    tips: [
      "Try a solution - like taking a path through monster territory",
      "If solution invalid, backtrack - similar to turning back when you hit a dead end",
      "Try next possibility - like exploring a different path",
    ],
  },
  "Sliding Window": {
    title: "Moving Hunting Ground",
    description:
      "Like maintaining a moving view of a monster's territory, Sliding Window maintains a subset of elements that slides through an array.",
    example:
      "Imagine tracking a migrating monster herd. You maintain a view of a fixed number of monsters as they move through different areas.",
    tips: [
      "Maintain a fixed-size window - like keeping track of a specific number of monsters",
      "Slide the window by one element - similar to following the herd as it moves",
      "Update the window's properties - like recalculating the average size of monsters in view",
    ],
  },
  "Bit Manipulation": {
    title: "Monster Power Tracking",
    description:
      "Like tracking monster powers using binary flags, Bit Manipulation uses binary operations to optimize space and time.",
    example:
      "Imagine tracking which monster abilities you've unlocked using a binary system, where each bit represents a different ability.",
    tips: [
      "Use bitwise operations - like toggling monster abilities on and off",
      "Check specific bits - similar to checking if you have a particular ability",
      "Combine bits efficiently - like activating multiple abilities at once",
    ],
  },
  "Topological Sort": {
    title: "Monster Food Chain",
    description:
      "Like organizing monsters in a food chain where some must come before others, Topological Sort orders nodes in a directed acyclic graph.",
    example:
      "Imagine organizing monsters in a food chain. Some monsters must be hunted before others can appear, creating a dependency order.",
    tips: [
      "Identify dependencies - like understanding which monsters depend on others",
      "Start with independent monsters - similar to beginning with the base of the food chain",
      "Add dependent monsters when ready - like introducing predators after their prey",
    ],
  },
  DFS: {
    title: "Monster Tunneling",
    description:
      "Like following a monster's tunnel system as far as possible before backtracking, DFS explores a graph by going as deep as possible along each branch.",
    example:
      "Imagine following a Diablos's tunnel system. You go as far as possible down one tunnel before backtracking to explore other branches.",
    tips: [
      "Go as deep as possible - like following a tunnel to its end",
      "Backtrack when stuck - similar to returning to a tunnel junction when you hit a dead end",
      "Use recursion or a stack - like keeping track of which tunnels you've explored",
    ],
  },
  "DFS Linked List": {
    title: "Monster Trail Following",
    description:
      "Like following a monster's trail through a linked list, DFS Linked List traverses a linked list recursively.",
    example:
      "Imagine following a monster's trail that connects different locations. You follow each connection as far as possible before backtracking.",
    tips: [
      "Follow each link - like tracking the monster's path from location to location",
      "Process current node - similar to examining each location the monster visited",
      "Recurse on next node - like continuing to follow the trail",
    ],
  },
  "DFS Binary Tree": {
    title: "Monster Family Tree Exploration",
    description:
      "Like exploring a family tree of monsters, DFS Binary Tree traverses a binary tree by going as deep as possible along each branch.",
    example:
      "Imagine exploring a family tree of monsters. You follow each bloodline as far as possible before backtracking to explore other branches.",
    tips: [
      "Visit root first - like starting with the patriarch/matriarch of the monster family",
      "Explore left subtree - similar to following the left bloodline",
      "Explore right subtree - like following the right bloodline",
    ],
  },
  BFS: {
    title: "Territory Exploration",
    description:
      "Like systematically exploring a monster's territory level by level, BFS explores a graph level by level.",
    example:
      "Imagine exploring a new monster territory. You check all adjacent areas before moving further out, like mapping out a Rathalos's nest and surrounding areas.",
    tips: [
      "Explore all neighbors first - like checking all nearby areas before moving further",
      "Use a queue to track areas to explore - similar to keeping a list of territories to investigate",
      "Mark visited areas - like noting which territories you've already mapped",
    ],
  },
  "BFS Linked List": {
    title: "Monster Trail Mapping",
    description:
      "Like mapping a monster's trail through a linked list level by level, BFS Linked List traverses a linked list in breadth-first order.",
    example:
      "Imagine mapping a monster's trail that connects different locations. You visit each location in order, ensuring you don't miss any connections.",
    tips: [
      "Use a queue - like keeping a list of locations to visit",
      "Process nodes in order - similar to visiting each location in sequence",
      "Add neighbors to queue - like noting which locations to visit next",
    ],
  },
  "Stack Implementation": {
    title: "Monster Nest Building",
    description:
      "Like building a nest where monsters can only enter and exit from the top, a Stack is a LIFO (Last In, First Out) data structure.",
    example:
      "Imagine building a nest for monsters where they can only enter and exit from the top. The last monster to enter is the first one to leave.",
    tips: [
      "Push to top - like adding a monster to the top of the nest",
      "Pop from top - similar to removing the top monster from the nest",
      "Peek at top - like checking which monster is at the top without removing it",
    ],
  },
  "Queue Implementation": {
    title: "Monster Line Formation",
    description:
      "Like forming a line of monsters where the first to arrive is the first to be served, a Queue is a FIFO (First In, First Out) data structure.",
    example:
      "Imagine forming a line of monsters waiting to be processed. The first monster to arrive is the first one to be handled.",
    tips: [
      "Enqueue at rear - like adding a monster to the back of the line",
      "Dequeue from front - similar to processing the monster at the front of the line",
      "Peek at front - like checking which monster is next without removing it",
    ],
  },
  "Linked List": {
    title: "Monster Chain",
    description:
      "Like creating a chain of connected monsters, a Linked List is a linear data structure where elements are linked using pointers.",
    example:
      "Imagine creating a chain of monsters where each one knows where to find the next one in the sequence.",
    tips: [
      "Each node points to next - like each monster knowing which one comes next",
      "Traverse by following links - similar to following the chain of monsters",
      "Insert/delete by updating links - like adding or removing monsters from the chain",
    ],
  },
  "Circular Linked List": {
    title: "Monster Circle Formation",
    description:
      "Like forming a circle of monsters where the last one connects back to the first, a Circular Linked List forms a loop.",
    example:
      "Imagine forming a circle of monsters for a ritual. The last monster in the circle connects back to the first, creating a continuous loop.",
    tips: [
      "Last node points to first - like the last monster connecting back to the first",
      "Traverse in a loop - similar to moving around the circle of monsters",
      "No need for null check - like always having a next monster to follow",
    ],
  },
  "Hash Table": {
    title: "Monster Registry",
    description:
      "Like creating a registry of monsters where you can quickly look up information by name, a Hash Table provides fast access to data.",
    example:
      "Imagine creating a registry of monsters where you can quickly find information about any monster by its name.",
    tips: [
      "Hash function maps keys to indices - like assigning each monster a unique registry number",
      "Handle collisions - similar to dealing with monsters that have the same registry number",
      "Fast lookup/insertion - like quickly finding or adding monster information",
    ],
  },
  Graph: {
    title: "Monster Territory Map",
    description:
      "Like mapping the connections between different monster territories, a Graph represents relationships between entities.",
    example:
      "Imagine creating a map of monster territories showing how they connect to each other. Some territories might be isolated, while others have many connections.",
    tips: [
      "Vertices represent locations - like marking each monster territory on the map",
      "Edges represent connections - similar to drawing paths between connected territories",
      "Directed/undirected edges - like one-way or two-way connections between territories",
    ],
  },
  Tree: {
    title: "Monster Family Hierarchy",
    description:
      "Like organizing monsters in a family hierarchy, a Tree is a hierarchical data structure with a root and branches.",
    example:
      "Imagine organizing monsters in a family tree where each monster (except the root) has one parent and can have multiple children.",
    tips: [
      "Root at top - like the patriarch/matriarch of the monster family",
      "Nodes have parent-child relationships - similar to family connections between monsters",
      "Leaf nodes have no children - like monsters at the bottom of the family tree",
    ],
  },
  "Binary Search Tree": {
    title: "Monster Ecosystem",
    description:
      "Like organizing a monster ecosystem where each species has its place in the food chain, a BST organizes data in a hierarchical structure.",
    example:
      "Imagine organizing monsters by threat level. A Rajang might be at the top, with weaker monsters like Jagras at the bottom, and medium threats like Rathalos in between.",
    tips: [
      "Each node has at most two children - like a monster having at most two direct predators/prey",
      "Left subtree contains smaller values - similar to weaker monsters being lower in the food chain",
      "Right subtree contains larger values - like stronger monsters being higher in the food chain",
    ],
  },
  "Heap Implementation": {
    title: "Monster Power Ranking",
    description:
      "Like ranking monsters by power level, a Heap maintains a specific ordering property (min or max) at the root.",
    example:
      "Imagine creating a power ranking of monsters where the strongest monster is always at the top, and you can quickly add or remove monsters while maintaining the ranking.",
    tips: [
      "Maintain heap property - like ensuring the strongest monster is always at the top",
      "Insert at bottom and bubble up - similar to adding a new monster and letting it challenge its way up",
      "Remove root and bubble down - like removing the strongest monster and letting others compete for the top spot",
    ],
  },
  Trie: {
    title: "Monster Name Directory",
    description:
      "Like creating a directory of monster names for quick lookup, a Trie is a tree-like data structure for storing strings.",
    example:
      "Imagine creating a directory of monster names where you can quickly find any monster by typing the beginning of its name.",
    tips: [
      "Each node represents a character - like each letter in a monster's name",
      "Common prefixes share nodes - similar to monsters with similar names sharing parts of their path",
      "Efficient prefix searches - like quickly finding all monsters whose names start with 'Rath'",
    ],
  },
  "Monotonic Stack": {
    title: "Monster Power Tower",
    description:
      "Like building a tower of monsters where each level is stronger than the one below, a Monotonic Stack maintains a specific ordering property.",
    example:
      "Imagine building a tower of monsters where each monster is stronger than the one below it. As new monsters arrive, weaker ones are pushed down.",
    tips: [
      "Maintain ordering property - like ensuring each monster is stronger than the one below",
      "Remove elements that violate property - similar to pushing weaker monsters down the tower",
      "Process elements in order - like handling monsters as they arrive",
    ],
  },
  "Monotonic Queue": {
    title: "Monster Power Line",
    description:
      "Like forming a line of monsters where each one is stronger than the one behind it, a Monotonic Queue maintains a specific ordering property.",
    example:
      "Imagine forming a line of monsters where each one is stronger than the one behind it. As new monsters arrive, weaker ones are removed from the back.",
    tips: [
      "Maintain ordering property - like ensuring each monster is stronger than the one behind it",
      "Remove elements that violate property - similar to removing weaker monsters from the back of the line",
      "Process elements in order - like handling monsters as they arrive",
    ],
  },
  "Two Pointers": {
    title: "Pincer Attack",
    description:
      "Like coordinating a pincer attack on a monster, Two Pointers uses two pointers moving from different directions to solve problems.",
    example:
      "Imagine surrounding a monster with two hunting parties. One party approaches from the left while another approaches from the right, trapping the monster.",
    tips: [
      "Move pointers toward each other - like coordinating the pincer attack",
      "Adjust pointers based on conditions - similar to repositioning based on the monster's movements",
      "Continue until pointers meet - like closing the trap when both parties reach the monster",
    ],
  },
  "Prefix Sum": {
    title: "Monster Territory Resources",
    description:
      "Like tracking accumulated resources across monster territories, Prefix Sum precomputes cumulative sums for efficient range queries.",
    example:
      "Imagine mapping out monster territories and tracking the accumulated resources in each area. You want to quickly know the total resources in any region.",
    tips: [
      "Precompute cumulative sums - like calculating total resources up to each territory",
      "Query ranges efficiently - similar to quickly finding resources in any region",
      "Update values carefully - like adjusting resource counts when territories change",
    ],
  },
  "Kadane's Algorithm": {
    title: "Monster Territory Value",
    description:
      "Like finding the most valuable continuous region in monster territory, Kadane's Algorithm finds the maximum subarray sum.",
    example:
      "Imagine mapping monster territories and assigning a value to each region. You want to find the continuous region with the highest total value.",
    tips: [
      "Track current sum - like keeping a running total of territory value",
      "Reset when sum becomes negative - similar to starting fresh when entering unprofitable territory",
      "Update maximum when needed - like recording the most valuable region found so far",
    ],
  },
  "Floyd Cycle Detection": {
    title: "Monster Territory Loop",
    description:
      "Like detecting a loop in a monster's territory, Floyd Cycle Detection finds cycles in linked lists or arrays.",
    example:
      "Imagine tracking a monster's movement pattern and detecting when it starts repeating the same path, forming a loop.",
    tips: [
      "Use fast and slow pointers - like having two trackers following the monster at different speeds",
      "Detect when pointers meet - similar to realizing the monster has returned to a previous location",
      "Find cycle length and start - like determining how long the loop is and where it begins",
    ],
  },
  "Rabin-Karp": {
    title: "Monster Pattern Matching",
    description:
      "Like searching for a specific monster pattern in a larger territory, Rabin-Karp efficiently finds pattern matches in text.",
    example:
      "Imagine searching for a specific arrangement of monster tracks in a larger area. You want to quickly find where this pattern appears.",
    tips: [
      "Use rolling hash - like efficiently updating your pattern recognition as you move",
      "Compare hashes first - similar to quickly checking if a pattern might match",
      "Verify matches when needed - like confirming a pattern match when hashes are equal",
    ],
  },
  "Knuth-Morris-Pratt": {
    title: "Monster Track Following",
    description:
      "Like efficiently following monster tracks without backtracking, KMP finds pattern matches in text using a failure function.",
    example:
      "Imagine following monster tracks and using your knowledge of previous patterns to avoid backtracking when a mismatch occurs.",
    tips: [
      "Build failure function - like creating a map of where to resume when tracks don't match",
      "Use failure function to skip - similar to knowing where to continue when tracks diverge",
      "Process text in one pass - like following tracks efficiently without going back",
    ],
  },
  "Manacher's Algorithm": {
    title: "Monster Territory Symmetry",
    description:
      "Like finding symmetrical regions in monster territory, Manacher's Algorithm finds the longest palindromic substring.",
    example:
      "Imagine mapping monster territories and looking for regions that are symmetrical, like a mirror image on either side of a center point.",
    tips: [
      "Expand around centers - like checking symmetry from each possible center point",
      "Use previous results - similar to applying knowledge from smaller symmetrical regions",
      "Handle even and odd lengths - like checking both types of symmetry",
    ],
  },
  "Z-Algorithm": {
    title: "Monster Territory Matching",
    description:
      "Like matching patterns across monster territories, the Z-Algorithm finds all occurrences of a pattern in a string.",
    example:
      "Imagine searching for a specific monster pattern across different territories and quickly finding all places where it appears.",
    tips: [
      "Build Z-array - like creating a map of pattern matches at each position",
      "Use previous results - similar to applying knowledge from previous matches",
      "Find all occurrences - like locating every instance of the pattern",
    ],
  },
  "Matrix Traversal": {
    title: "Monster Territory Grid",
    description:
      "Like navigating a grid of monster territories, Matrix Traversal visits each cell in a specific order.",
    example:
      "Imagine mapping monster territories in a grid pattern and systematically exploring each cell to gather information.",
    tips: [
      "Use nested loops - like systematically checking each territory in the grid",
      "Track visited cells - similar to marking territories you've already explored",
      "Handle boundaries - like knowing when you've reached the edge of the map",
    ],
  },
  "Matrix Traversal Recursive": {
    title: "Monster Territory Recursive Exploration",
    description:
      "Like recursively exploring a grid of monster territories, Matrix Traversal Recursive uses recursion to visit each cell.",
    example:
      "Imagine exploring a grid of monster territories by recursively moving to adjacent cells, similar to a monster exploring its surroundings.",
    tips: [
      "Define base cases - like knowing when to stop exploring",
      "Recurse on adjacent cells - similar to exploring neighboring territories",
      "Track visited cells - like marking territories you've already explored",
    ],
  },
  "Matrix Spiral Traversal": {
    title: "Monster Territory Spiral",
    description:
      "Like exploring monster territory in a spiral pattern from the outside in, Matrix Spiral Traversal visits cells in a spiral order.",
    example:
      "Imagine exploring a grid of monster territories by starting at the outer edge and moving inward in a spiral pattern.",
    tips: [
      "Track boundaries - like knowing the current limits of your spiral",
      "Move in four directions - similar to following the spiral pattern",
      "Update boundaries after each layer - like moving inward after completing an outer ring",
    ],
  },
  "Matrix Spiral Recursive": {
    title: "Monster Territory Recursive Spiral",
    description:
      "Like recursively exploring monster territory in a spiral pattern, Matrix Spiral Recursive uses recursion to traverse in a spiral.",
    example:
      "Imagine exploring a grid of monster territories by recursively moving in a spiral pattern from the outside in.",
    tips: [
      "Define base cases - like knowing when to stop the spiral",
      "Recurse on inner matrix - similar to continuing the spiral in the center",
      "Process outer layer first - like exploring the perimeter before moving inward",
    ],
  },
};

export function MonsterHunterGuide({
  currentPattern,
}: MonsterHunterGuideProps) {
  const explanation = monsterHunterExplanations[currentPattern] || {
    title: "Monster Hunter Guide",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  };

  return (
    <div className={`${styles.pseudocodeContainer} w-full`}>
      <div
        className={`${styles.pseudocodeContent} text-sm sm:text-base w-full`}
      >
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-amber-700">
              {explanation.title}
            </h3>
            <p className="mt-1 text-[#f8f8f2]">{explanation.description}</p>
          </div>

          <div>
            <h4 className="text-md font-medium text-amber-600">
              Hunting Example:
            </h4>
            <p className="mt-1 italic text-[#f8f8f2]">{explanation.example}</p>
          </div>

          <div>
            <h4 className="text-md font-medium text-amber-600">
              Hunter's Tips:
            </h4>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {explanation.tips.map((tip, index) => (
                <li key={index} className="text-[#f8f8f2]">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
