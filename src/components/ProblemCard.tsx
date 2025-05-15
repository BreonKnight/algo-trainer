import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

interface ProblemCardProps {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  onStart: () => void;
  onReset: () => void;
  onSubmit: () => void;
  onNext: () => void;
  onHint: () => void;
  onSolution: () => void;
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  title,
  description,
  difficulty,
  onStart,
  onReset,
  onSubmit,
  onNext,
  onHint,
  onSolution,
}) => {
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && timeElapsed !== 0) {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeElapsed]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "success";
      case "Medium":
        return "warning";
      case "Hard":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Card sx={{ maxWidth: 800, margin: "auto", mt: 4 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Chip
            label={difficulty}
            color={getDifficultyColor(difficulty) as "success" | "warning" | "error" | "default"}
            size="small"
          />
        </Box>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">Time: {formatTime(timeElapsed)}</Typography>
          <Box>
            <Button
              className="mr-2 px-4 py-2 rounded-md font-medium transition-colors bg-accent text-white border border-accent hover:bg-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={() => {
                setIsActive(true);
                onStart();
              }}
            >
              Start
            </Button>
            <Button
              className="mr-2 px-4 py-2 rounded-md font-medium transition-colors bg-background text-accent border border-accent hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={() => {
                setIsActive(false);
                setTimeElapsed(0);
                onReset();
              }}
            >
              Reset
            </Button>
            <Button
              className="mr-2 px-4 py-2 rounded-md font-medium transition-colors bg-accent text-white border border-accent hover:bg-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={onSubmit}
            >
              Submit
            </Button>
            <Button
              className="px-4 py-2 rounded-md font-medium transition-colors bg-accent text-white border border-accent hover:bg-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={onNext}
            >
              Next
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
          <Button
            className="px-4 py-2 rounded-md font-medium transition-colors bg-background text-accent border border-accent hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={onHint}
          >
            Hint
          </Button>
          <Button
            className="px-4 py-2 rounded-md font-medium transition-colors bg-background text-accent border border-accent hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={onSolution}
          >
            Solution
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProblemCard;
