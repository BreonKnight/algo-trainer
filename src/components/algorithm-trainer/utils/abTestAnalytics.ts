import { TEST_IDS, TestGroup } from "../hooks/useABTest";

// Define the analytics events
export type ABTestEvent =
  | "pattern_selected"
  | "pattern_viewed"
  | "implementation_viewed"
  | "next_pattern_clicked"
  | "previous_pattern_clicked";

// Define the analytics data structure
export interface ABTestAnalyticsData {
  testId: keyof typeof TEST_IDS;
  testGroup: TestGroup;
  event: ABTestEvent;
  patternKey?: string;
  timestamp: number;
}

/**
 * Track an A/B test event
 * @param data The analytics data to track
 */
export function trackABTestEvent(
  data: Omit<ABTestAnalyticsData, "timestamp">
): void {
  // In a real application, you would send this data to your analytics service
  // For now, we'll just log it to the console and store it in localStorage

  const analyticsData: ABTestAnalyticsData = {
    ...data,
    timestamp: Date.now(),
  };

  // Log the event
  console.log("A/B Test Event:", analyticsData);

  // Store the event in localStorage
  const storedEvents = JSON.parse(
    localStorage.getItem("ab-test-events") || "[]"
  );
  storedEvents.push(analyticsData);
  localStorage.setItem("ab-test-events", JSON.stringify(storedEvents));
}

/**
 * Get all tracked A/B test events
 * @returns An array of all tracked A/B test events
 */
export function getABTestEvents(): ABTestAnalyticsData[] {
  return JSON.parse(localStorage.getItem("ab-test-events") || "[]");
}

/**
 * Clear all tracked A/B test events
 */
export function clearABTestEvents(): void {
  localStorage.removeItem("ab-test-events");
}

/**
 * Get analytics summary for a specific test
 * @param testId The ID of the test to get analytics for
 * @returns An object containing analytics summary data
 */
export function getABTestAnalytics(testId: keyof typeof TEST_IDS) {
  const events = getABTestEvents();
  const testEvents = events.filter((event) => event.testId === testId);

  const groupAEvents = testEvents.filter((event) => event.testGroup === "A");
  const groupBEvents = testEvents.filter((event) => event.testGroup === "B");

  return {
    totalEvents: testEvents.length,
    groupAEvents: groupAEvents.length,
    groupBEvents: groupBEvents.length,
    eventsByType: testEvents.reduce((acc, event) => {
      acc[event.event] = (acc[event.event] || 0) + 1;
      return acc;
    }, {} as Record<ABTestEvent, number>),
    eventsByPattern: testEvents.reduce((acc, event) => {
      if (event.patternKey) {
        acc[event.patternKey] = (acc[event.patternKey] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>),
  };
}
