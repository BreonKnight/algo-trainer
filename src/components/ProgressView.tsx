import { useState } from "react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Slider } from "./ui/slider";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "./theme-context";
import { cn } from "@/lib/utils";

export function ProgressView() {
  const [progressValue, setProgressValue] = useState(50);
  const { theme } = useTheme();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Link to="/">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "mr-2",
              theme === "nord" ? "text-white hover:bg-white/10" : ""
            )}
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
        </Link>
        <h1
          className={cn(
            "text-3xl font-bold",
            theme === "nord" ? "text-white" : "text-foreground"
          )}
        >
          Progress Component Examples
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className={theme === "nord" ? "bg-nord-1 border-nord-4" : ""}>
          <CardHeader>
            <CardTitle className={theme === "nord" ? "text-white" : ""}>
              Basic Progress
            </CardTitle>
            <CardDescription className={theme === "nord" ? "text-nord-4" : ""}>
              A simple progress bar with a fixed value
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={33} className="w-full" />
          </CardContent>
        </Card>

        <Card className={theme === "nord" ? "bg-nord-1 border-nord-4" : ""}>
          <CardHeader>
            <CardTitle className={theme === "nord" ? "text-white" : ""}>
              Interactive Progress
            </CardTitle>
            <CardDescription className={theme === "nord" ? "text-nord-4" : ""}>
              Adjust the progress value with a slider
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={progressValue} className="w-full" />
            <div className="flex items-center space-x-2">
              <Slider
                value={[progressValue]}
                onValueChange={(value) => setProgressValue(value[0])}
                min={0}
                max={100}
                step={1}
                className="w-full"
              />
              <span
                className={cn(
                  "min-w-[3rem] text-right",
                  theme === "nord" ? "text-white" : "text-foreground"
                )}
              >
                {progressValue}%
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className={theme === "nord" ? "bg-nord-1 border-nord-4" : ""}>
          <CardHeader>
            <CardTitle className={theme === "nord" ? "text-white" : ""}>
              Small Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={75} className="w-full h-1" />
          </CardContent>
        </Card>

        <Card className={theme === "nord" ? "bg-nord-1 border-nord-4" : ""}>
          <CardHeader>
            <CardTitle className={theme === "nord" ? "text-white" : ""}>
              Medium Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={60} className="w-full h-2" />
          </CardContent>
        </Card>

        <Card className={theme === "nord" ? "bg-nord-1 border-nord-4" : ""}>
          <CardHeader>
            <CardTitle className={theme === "nord" ? "text-white" : ""}>
              Large Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={45} className="w-full h-4" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
