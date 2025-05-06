import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const NetworkFlowPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Network Flow
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(V²E) &nbsp;|&nbsp; Space: O(V²) &nbsp;|&nbsp; Use: Find maximum flow in a network
    </div>

    <PseudocodeDisplay
      code={`FORD-FULKERSON(G, s, t)
1  for each edge (u,v) ∈ G.E
2      (u,v).f = 0
3  while there exists a path p from s to t in residual network Gf
4      cf(p) = min{cf(u,v) : (u,v) is in p}
5      for each edge (u,v) in p
6          if (u,v) ∈ E
7              (u,v).f = (u,v).f + cf(p)
8          else
9              (v,u).f = (v,u).f - cf(p)

EDMONDS-KARP(G, s, t)
1  for each edge (u,v) ∈ G.E
2      (u,v).f = 0
3  while there exists a path p from s to t in residual network Gf
4      cf(p) = min{cf(u,v) : (u,v) is in p}
5      for each edge (u,v) in p
6          if (u,v) ∈ E
7              (u,v).f = (u,v).f + cf(p)
8          else
9              (v,u).f = (v,u).f - cf(p)

DINIC(G, s, t)
1  for each edge (u,v) ∈ G.E
2      (u,v).f = 0
3  while BFS(Gf, s, t) finds a path
4      while DFS(Gf, s, t, ∞) finds a blocking flow
5          for each edge (u,v) in blocking flow
6              if (u,v) ∈ E
7                  (u,v).f = (u,v).f + cf(p)
8              else
9                  (v,u).f = (v,u).f - cf(p)

// Example:
// Input: G = (V, E) where
// V = {s, a, b, c, d, t}
// E = {(s,a,10), (s,b,5), (a,b,2), (a,c,5), (b,c,8), (b,d,4), (c,t,7), (d,t,10)}
//
// Step 1: Initial flow = 0
// Step 2: Find augmenting path s->a->c->t with flow 5
// Step 3: Find augmenting path s->b->d->t with flow 4
// Step 4: Find augmenting path s->a->b->c->t with flow 2
//
// Final flow: 11`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize: Set all flows to 0</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Find: Augmenting path in residual network</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update: Flow along the path</span>
      </div>
    </div>
  </div>
);
