"use client";
import Image from "next/image";
import Header from "@/app/components/header";
import { useEffect, useState } from "react";
import Link from "next/link";
import Skeleton from "./Skeleton";
import { useTheme } from "next-themes";
import projects from "../../components/projects";

export default function Projects() {
  const [search, setSearch] = useState("");
  const { theme } = useTheme();
  const themeClass = (dark: string, light: string) => (theme === "dark" ? dark : light);


  // Filtre les projets selon la recherche (insensible à la casse)
  const filterProjects = projects.filter((project: any) => {
    const searchTerm = search.trim().toLowerCase();
    if (!searchTerm) return true; // si recherche vide, tout afficher

    // Cherche dans chaque propriété string du projet si la recherche est contenue
    return Object.values(project).some((value) =>
      typeof value === "string" && value.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div>
      <div>
        <div>
          <textarea
            name="search-textarea"
            placeholder="Rechercher"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`rounded-2xl hover:scale-105 shadow-[-1px_4px_14px_7px_rgba(0,_0,_0,_0.1)] text-[#00ABE4] transition duration-300 cursor-pointer pt-5 mt-5 flex m-auto text-center font-semibold resize-none w-[70%] ${themeClass('bg-gray-700', 'bg-white')}`}
          />
        </div>
        <section className="m-auto w-[95%] pt-10">
          <h1 className="pl-1 text-[30px] m-auto border-b-4 border-gray-300 text-[#00ABE4] font-bold uppercase">
            {filterProjects.length} projet{filterProjects.length > 1 ? "s" : ""}
          </h1>

          {projects.length === 0 ? (
            <Skeleton />
          ) : filterProjects.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              Aucun projet ne correspond à la recherche.
            </p>
          ) : (
            <div className="w-full h-full p-6 flex flex-wrap gap-6 justify-center">
              {filterProjects.map((project: any) => (
                <Link
                  href={project.link}
                  key={project.id}
                  className="w-[320px] bg-white rounded-xl shadow-[-1px_4px_14px_7px_rgba(0,_0,_0,_0.1)] overflow-hidden transition-transform hover:scale-105"
                >
                  <div className="h-[180px] w-full bg-gray-200 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={`Project ${project.title}`}
                      className="object-cover w-full h-full"
                      property="Lucas Bourdon"
                      priority
                    />
                  </div>
                  <div className={`p-2 h-full ${themeClass('bg-gray-800 text-white', 'bg-gray-50')} transition duration-300`}>
                    <h3 className="font-bold text-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm">{project.description}</p>
                    <p className={`text-ms transition duration-300 ${themeClass('text-gray-300', 'text-gray-500')} mt-2`}>{project.language}</p>
                    <p className={`text-xs transition duration-300 ${themeClass('text-gray-300', 'text-gray-500')} mt-2`}>{project.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
