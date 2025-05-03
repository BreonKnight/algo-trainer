const { execSync } = require("child_process");

try {
  console.log("Running pattern checks...\n");
  execSync("npx ts-node src/components/algorithm-trainer/check-patterns.ts", {
    stdio: "inherit",
    env: {
      ...process.env,
      TS_NODE_COMPILER_OPTIONS: '{"module":"commonjs"}',
    },
  });
} catch (error) {
  console.error("Error running pattern checks:", error);
  process.exit(1);
}
