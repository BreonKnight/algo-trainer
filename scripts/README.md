# Algo Trainer Scripts

This directory contains utility scripts for the Algo Trainer project.

## Extract Patterns Script

The `extract-patterns.js` script extracts all algorithm patterns from the main `patterns.ts` file into individual files organized by category.

### How to Run

```bash
# From the project root
npm run extract-patterns

# Or from the scripts directory
cd scripts
npm run extract-patterns
```

### What the Script Does

1. Reads the `patterns.ts` file and extracts all algorithm patterns
2. Creates individual files for each pattern in the appropriate directory
3. Updates the index.ts files to import and export these patterns
4. Creates a main index.ts file that combines all patterns

### Directory Structure

The script organizes patterns into the following directories:

- `array/` - Array manipulation patterns
- `data-structures/` - Data structure implementations
- `dynamic-programming/` - Dynamic programming patterns
- `graph/` - Graph algorithms
- `searching/` - Searching algorithms
- `sorting/` - Sorting algorithms
- `string/` - String manipulation algorithms
- `tree/` - Tree algorithms

### Adding New Patterns

To add a new pattern:

1. Add it to the `patternDirectories` object in `extract-patterns.js` with the appropriate directory
2. Run the script to extract it into its own file
