import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Language from "./language"; // Ton tableau d'objets langages

const CATEGORIES = [
    { key: "frontend", label: "FrontEnd" },
    { key: "css", label: "CSS" },
    { key: "mobile", label: "mobile" },
    { key: "backend", label: "BackEnd" },
    { key: "database", label: "DataBase" },
];

export default function LanguageSection() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const themeClass = (dark: string, light: string) => (theme === "dark" ? dark : light);

    return (
        <section>
            {CATEGORIES.map(({ key, label }) => {
                const filteredLanguages = Language.filter((lang) => lang.type === key);
                if (filteredLanguages.length === 0) return null;

                return (
                    <div key={key} className="mb-10">
                        <h2
                            className={`text-[30px] text-center w-64 m-auto font-semibold mt-5 uppercase drop-shadow-2xl ${themeClass(
                                "bg-gray-700",
                                "bg-gray-50"
                            )}`}
                        >
                            {label}
                        </h2>
                        <div
                            className={`grid gap-5 max-sm:grid-cols-3 grid-flow-cols grid-cols-5 p-3 m-auto mt-2 rounded-2xl drop-shadow-2xl max-lg:grid-cols-3 ${themeClass(
                                "bg-gray-700 border-gray-700",
                                "bg-gray-50"
                            )}`}
                        >
                            {filteredLanguages.map((language) => (
                                <div key={language.id}>
                                    <div
                                        className={`group hover:cursor-pointer w-fit h-full p-2 m-auto rounded-[5px] duration-300 hover:scale-105 relative ${themeClass(
                                            "bg-gray-600 hover:bg-gray-500",
                                            "bg-gray-100 hover:bg-gray-300"
                                        )}`}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Link
                                                target="_blank"
                                                href={language.link || "/"}
                                                className="opacity-0 duration-300 group-hover:opacity-75 text-center bg-gray-700 text-white p-1 rounded"
                                            >
                                                {language.alt}
                                            </Link>
                                        </div>
                                        <Image
                                            className="m-auto w-24"
                                            src={language.src}
                                            alt={language.alt}
                                            width={language.width}
                                            height={language.height}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
