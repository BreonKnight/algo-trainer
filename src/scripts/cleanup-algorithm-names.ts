import fs from "fs";
import path from "path";

// Function to clean algorithm type by removing complexity information
function cleanAlgorithmType(type: string): string {
  // Remove time complexity patterns (e.g., "O(n)", "O(log n)", etc.)
  type = type.replace(/\s*O\([^)]*\)\s*/g, "");

  // Remove space complexity patterns
  type = type.replace(/\s*Space:\s*O\([^)]*\)\s*/g, "");

  // Remove use case patterns
  type = type.replace(/\s*Use:\s*[^|]*\s*/g, "");

  // Remove HTML entities and extra spaces
  type = type
    .replace(/&nbsp;/g, "")
    .replace(/\s*\|\s*/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return type;
}

// Function to process a JSON file
function processJsonFile(filePath: string) {
  try {
    // Read the JSON file
    const jsonContent = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(jsonContent);

    // Track if any changes were made
    let changesMade = false;

    // Process each algorithm entry
    Object.keys(data).forEach((key) => {
      const entry = data[key];

      // Clean the type if it exists
      if (entry.type) {
        const cleanedType = cleanAlgorithmType(entry.type);
        if (cleanedType !== entry.type) {
          entry.type = cleanedType;
          changesMade = true;
        }
      }
    });

    // Write back to file if changes were made
    if (changesMade) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log(`Updated ${filePath}`);
    } else {
      console.log(`No changes needed in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Main function to process all JSON files
function main() {
  const jsonFiles = [
    "src/lib/pseudocode/patterns.json",
    // Add other JSON files that need processing
  ];

  jsonFiles.forEach((filePath) => {
    const fullPath = path.resolve(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      processJsonFile(fullPath);
    } else {
      console.error(`File not found: ${fullPath}`);
    }
  });
}

// Run the script
main();
