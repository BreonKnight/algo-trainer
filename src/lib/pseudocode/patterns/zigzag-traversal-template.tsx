import { AlgorithmPattern } from "./AlgorithmPattern";
import { getPattern } from "./utils";

export const ZigzagTraversalTemplatePattern = () => {
  const pattern = getPattern("zigzag-traversal");

  if (!pattern) {
    return <div>Pattern not found</div>;
  }

  return <AlgorithmPattern {...pattern} />;
};
