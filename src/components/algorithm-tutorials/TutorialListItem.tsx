import { memo } from "react";
import { Link } from "react-router-dom";

interface RawTutorial {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  difficulty: string;
  duration: number;
  prerequisites: string[];
  implementations: {
    python: string;
    javascript: string;
  };
  quiz: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}

export const TutorialListItem = memo(({ tutorial }: { tutorial: RawTutorial }) => {
  return (
    <Link
      key={tutorial.id}
      to={`/tutorials/${tutorial.id}`}
      className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
    >
      <h3 className="font-medium">{tutorial.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{tutorial.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
          {tutorial.difficulty}
        </span>
        <span className="text-blue-600">View Tutorial</span>
      </div>
    </Link>
  );
});
