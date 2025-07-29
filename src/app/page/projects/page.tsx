"use client";
import Image from "next/image";
import Header from "@/app/components/header";
import { useEffect, useState } from "react";
import Link from "next/link";
import Skeleton from "./Skeleton";
import { useTheme } from "next-themes";
import projects from "../../components/projects"
import { div } from "motion/react-client";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const isTheme = useTheme();

  const filterProjects = projects.filter((project: any) => {
    return (
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.date.includes(search)
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
            className={`text-black pt-5 mt-5 flex  m-auto text-center font-semibold resize-none w-[70%] ${isTheme.theme === "dark"
              ? "bg-gray-700 text-white"
              : "bg-gray-100 "
              }`}
          />
        </div>
        <section className="m-auto w-[95%] pt-10">
          <h1 className="pl-1 text-[30px] m-auto border-b-4 border-gray-300 text-purple-500 font-bold uppercase">
            {projects.length} projets
          </h1>

          {!projects ? (
            <Skeleton />
          ) : (
            <div className="w-full h-full bg-blue-300 p-2">
              {filterProjects.map((project: any) => (
                <div key={project.id} className="w-85 h-100 bg-red-300">
                  <div className="w-full h-full bg-red-800">
                    <Image
                      src={project.image}
                      style={{ objectFit: "cover" }}
                      className=""
                      alt="Project image"
                      property="Lucas Bourdon"
                      priority
                    />

                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
