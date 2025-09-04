'use client';

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useEffect } from "react";

// Import dynamique, ssr désactivé
const ThemeSpline = dynamic(() => import("./ThemeSpline"), { ssr: false });

export default function ThemeSplineClient() {
    const { theme } = useTheme();

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.add("bg-[#f4fbff]");
        } else {
            document.body.classList.remove("bg-[#f4fbff]");
        }
    }, [theme]);
    return <ThemeSpline />;
}
