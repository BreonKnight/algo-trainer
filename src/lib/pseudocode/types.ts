import { JSX } from "react";

export type PatternComponent = () => JSX.Element;
export type PatternMap = Record<string, PatternComponent>;
