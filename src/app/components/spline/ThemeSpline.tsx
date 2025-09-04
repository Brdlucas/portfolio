// ThemeSpline.tsx
"use client";
import Spline from "@splinetool/react-spline";
import { useTheme } from "next-themes";

export default function ThemeSpline(children: any) {
    const { theme } = useTheme();
    if (theme !== "light") return null;
    return <Spline className="glass-orbit" scene="https://prod.spline.design/doH2kMxdfYzG96yi/scene.splinecode" />;


}
