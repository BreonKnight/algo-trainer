import { execSync } from "child_process";
import { writeFileSync } from "fs";
import { join } from "path";

// Run the verification script
console.log("Running pattern verification...");
const output = execSync("tsx src/lib/patterns/verify-patterns.ts", {
  encoding: "utf-8",
});

// Write the report to a file
const reportPath = join(process.cwd(), "pattern-verification-report.txt");
writeFileSync(reportPath, output);

console.log(`Verification complete. Report written to ${reportPath}`);
