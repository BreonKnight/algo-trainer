import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const ActivitySelectionPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Activity Selection
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Selecting maximum number of
      non-overlapping activities
    </div>

    <PseudocodeDisplay
      code={`// Standard Activity Selection
def activity_selection(activities):
    # Sort activities by finish time
    activities.sort(key=lambda x: x[1])

    selected = []
    last_finish = 0

    for activity in activities:
        start, finish = activity
        if start >= last_finish:
            selected.append(activity)
            last_finish = finish

    return selected

// Activity Selection with Weights
def activity_selection_weights(activities):
    # Sort activities by finish time
    activities.sort(key=lambda x: x[1])

    n = len(activities)
    dp = [0] * n
    dp[0] = activities[0][2]  # weight

    for i in range(1, n):
        # Find last non-conflicting activity
        last_non_conflict = -1
        for j in range(i-1, -1, -1):
            if activities[j][1] <= activities[i][0]:
                last_non_conflict = j
                break

        # Include current activity
        include = activities[i][2]
        if last_non_conflict != -1:
            include += dp[last_non_conflict]

        # Store maximum of including or excluding
        dp[i] = max(include, dp[i-1])

    return dp[n-1]

// Activity Selection with Resource Constraints
def activity_selection_resources(activities, resources):
    # Sort activities by finish time
    activities.sort(key=lambda x: x[1])

    selected = []
    resource_available = [0] * resources

    for activity in activities:
        start, finish, resource = activity
        if start >= resource_available[resource]:
            selected.append(activity)
            resource_available[resource] = finish

    return selected

# Examples:

# Standard Activity Selection
# Input:
# activities = [
#     (1, 4),  # (start, finish)
#     (3, 5),
#     (0, 6),
#     (5, 7),
#     (3, 8),
#     (5, 9),
#     (6, 10),
#     (8, 11),
#     (8, 12),
#     (2, 13),
#     (12, 14)
# ]
# Output:
# selected = [(1, 4), (5, 7), (8, 11), (12, 14)]
# Total activities: 4

# Activity Selection with Weights
# Input:
# activities = [
#     (1, 4, 2),  # (start, finish, weight)
#     (3, 5, 4),
#     (0, 6, 4),
#     (5, 7, 7),
#     (3, 8, 2),
#     (5, 9, 1)
# ]
# Output:
# max_weight = 8  # (1,4,2) + (5,7,7)

# Activity Selection with Resource Constraints
# Input:
# activities = [
#     (1, 4, 0),  # (start, finish, resource)
#     (3, 5, 1),
#     (0, 6, 0),
#     (5, 7, 1),
#     (3, 8, 0),
#     (5, 9, 1)
# ]
# Output:
# selected = [(1, 4, 0), (3, 5, 1), (5, 7, 1)]
# Total activities: 3`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Sort: Activities by finish time</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Select: First activity and subsequent non-overlapping activities</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update: Track last finish time or resource availability</span>
      </div>
    </div>
  </div>
);
