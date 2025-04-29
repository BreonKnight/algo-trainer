import { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { getABTestAnalytics, clearABTestEvents } from "./utils/abTestAnalytics";

export const TEST_IDS = {
  patternTest: "patternTest",
  implementationTest: "implementationTest",
  ALGORITHM_PATTERN_SOURCE: "ALGORITHM_PATTERN_SOURCE",
};

export function ABTestAdmin() {
  const [analytics, setAnalytics] = useState<any>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    // Get analytics for the algorithm pattern source test
    const data = getABTestAnalytics(
      TEST_IDS.patternTest as "patternTest" | "implementationTest"
    );
    setAnalytics(data);
  }, [refreshKey]);

  const handleClearEvents = () => {
    clearABTestEvents();
    setRefreshKey((prev) => prev + 1);
  };

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-accent">A/B Test Admin</h1>

      <div className="flex gap-4 mb-4">
        <Button
          onClick={handleRefresh}
          className="bg-secondary hover:bg-secondary/90 text-main"
        >
          Refresh Data
        </Button>
        <Button
          onClick={handleClearEvents}
          className="bg-error hover:bg-error/90 text-main"
        >
          Clear All Events
        </Button>
      </div>

      <Card className="p-4 bg-main border-secondary text-main">
        <h2 className="text-xl font-semibold mb-2 text-accent3">
          Algorithm Pattern Source Test
        </h2>

        {analytics ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-secondary p-3 rounded-md">
                <h3 className="text-sm text-secondary">Total Events</h3>
                <p className="text-2xl font-bold">{analytics.totalEvents}</p>
              </div>
              <div className="bg-secondary p-3 rounded-md">
                <h3 className="text-sm text-secondary">Group A Events</h3>
                <p className="text-2xl font-bold text-accent">
                  {analytics.groupAEvents}
                </p>
              </div>
              <div className="bg-secondary p-3 rounded-md">
                <h3 className="text-sm text-secondary">Group B Events</h3>
                <p className="text-2xl font-bold text-accent3">
                  {analytics.groupBEvents}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-accent2">
                Events by Type
              </h3>
              <div className="bg-secondary p-3 rounded-md">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-secondary">
                      <th className="pb-2">Event Type</th>
                      <th className="pb-2">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(analytics.eventsByType).map(
                      ([event, count]) => (
                        <tr
                          key={event}
                          className="border-t border-secondary/30"
                        >
                          <td className="py-2">{event as string}</td>
                          <td className="py-2">{count as number}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-accent2">
                Events by Pattern
              </h3>
              <div className="bg-secondary p-3 rounded-md max-h-60 overflow-y-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-secondary sticky top-0 bg-secondary">
                      <th className="pb-2">Pattern</th>
                      <th className="pb-2">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(analytics.eventsByPattern).map(
                      ([pattern, count]) => (
                        <tr
                          key={pattern}
                          className="border-t border-secondary/30"
                        >
                          <td className="py-2">{pattern as string}</td>
                          <td className="py-2">{count as number}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <p>
            No analytics data available. Try refreshing or interacting with the
            app.
          </p>
        )}
      </Card>
    </div>
  );
}
