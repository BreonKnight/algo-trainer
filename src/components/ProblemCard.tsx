import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import {
  PlayArrow,
  Refresh,
  Check,
  NavigateNext,
  Lightbulb,
  Code,
} from "@mui/icons-material";

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
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
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
            color={
              getDifficultyColor(difficulty) as
                | "success"
                | "warning"
                | "error"
                | "default"
            }
            size="small"
          />
        </Box>
        how do we
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
              variant="contained"
              startIcon={<PlayArrow />}
              onClick={() => {
                setIsActive(true);
                onStart();
              }}
              sx={{ mr: 1 }}
            >
              Start
            </Button>
            <Button
              variant="outlined"
              startIcon={<Refresh />}
              onClick={() => {
                setIsActive(false);
                setTimeElapsed(0);
                onReset();
              }}
              sx={{ mr: 1 }}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Check />}
              onClick={onSubmit}
              sx={{ mr: 1 }}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<NavigateNext />}
              onClick={onNext}
            >
              Next
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
          <Button variant="outlined" startIcon={<Lightbulb />} onClick={onHint}>
            Hint
          </Button>
          <Button variant="outlined" startIcon={<Code />} onClick={onSolution}>
            Solution
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProblemCard;
