import React, { useState } from "react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Slider } from "./ui/slider";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function ProgressView() {
  const [progressValue, setProgressValue] = useState(50);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Link to="/">
          <Button variant="ghost" size="sm" className="mr-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Progress Component Examples</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic Progress</CardTitle>
            <CardDescription>
              A simple progress bar with a fixed value
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={33} className="w-full" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Progress</CardTitle>
            <CardDescription>
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
              <span className="min-w-[3rem] text-right">{progressValue}%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Small Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={75} className="w-full h-1" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Medium Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={60} className="w-full h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Large Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={45} className="w-full h-4" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
