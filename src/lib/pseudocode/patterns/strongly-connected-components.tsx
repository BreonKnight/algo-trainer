import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const StronglyConnectedComponentsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Monster Territory Clusters</span>
      <span className="ml-2 text-xs text-secondary">(Graph)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Find groups of territories where
      monsters can freely move between any two areas
    </div>

    <PseudocodeDisplay
      code={`# Monster Territory Clusters: Find groups of interconnected monster territories
# Input: G = (V, E) - directed graph of monster territories and migration paths
# Output: List of territory clusters where monsters can freely move between any two areas

Algorithm FIND-TERRITORY-CLUSTERS(territory_graph)
    # First DFS pass to get exploration times
    for each territory t ∈ territory_graph
        t.explored ← false
        t.parent ← NIL
    time ← 0
    exploration_stack ← []
    for each territory t ∈ territory_graph
        if not t.explored
            EXPLORE-TERRITORY(territory_graph, t, exploration_stack)

    # Compute reverse migration paths
    reverse_graph ← REVERSE-MIGRATION-PATHS(territory_graph)

    # Second DFS pass in reverse order of exploration
    for each territory t ∈ territory_graph
        t.explored ← false
        t.parent ← NIL
    territory_clusters ← []
    while exploration_stack is not empty
        t ← exploration_stack.pop()
        if not t.explored
            cluster ← []
            EXPLORE-TERRITORY(reverse_graph, t, cluster)
            territory_clusters.append(cluster)

    return territory_clusters

Algorithm EXPLORE-TERRITORY(graph, territory, result)
    territory.explored ← true
    for each connected_territory ∈ graph[territory]
        if not connected_territory.explored
            connected_territory.parent ← territory
            EXPLORE-TERRITORY(graph, connected_territory, result)
    result.append(territory)

Algorithm REVERSE-MIGRATION-PATHS(graph)
    reverse_graph ← new Graph
    for each territory t ∈ graph
        reverse_graph[t] ← []
    for each territory t ∈ graph
        for each connected_territory ∈ graph[t]
            reverse_graph[connected_territory].append(t)
    return reverse_graph

# Example:
# Input: Territory Graph where
# V = {Ancient Forest, Wildspire Waste, Coral Highlands, Elder's Recess, Rotten Vale}
# E = {
#   Ancient Forest → Wildspire Waste,
#   Wildspire Waste → Coral Highlands,
#   Coral Highlands → Ancient Forest,
#   Coral Highlands → Elder's Recess,
#   Elder's Recess → Rotten Vale,
#   Rotten Vale → Wildspire Waste
# }
#
# First DFS pass:
# Ancient Forest: explored first
# Wildspire Waste: explored second
# Coral Highlands: explored third
# Elder's Recess: explored fourth
# Rotten Vale: explored last
#
# Second DFS pass on reverse graph:
# Cluster 1: {Ancient Forest, Wildspire Waste, Coral Highlands}
# Cluster 2: {Elder's Recess}
# Cluster 3: {Rotten Vale}
#
# Output: [
#   ["Ancient Forest", "Wildspire Waste", "Coral Highlands"],
#   ["Elder's Recess"],
#   ["Rotten Vale"]
# ]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Hunter's Strategy:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Explore territories to understand migration patterns</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Map reverse migration paths between territories</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Identify clusters where monsters can freely move between territories</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Use clusters to plan efficient hunting routes and predict monster movements</span>
      </div>
    </div>
  </div>
);
