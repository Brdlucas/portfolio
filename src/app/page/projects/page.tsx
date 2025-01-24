"use client";
import Image from "next/image";
import Header from "@/app/components/header";
import { useEffect, useState } from "react";
import Link from "next/link";
import Skeleton from "./Skeleton";
import { useTheme } from "next-themes";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const isTheme = useTheme();

  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const projects = await res.json();
    console.log(projects);
    return projects;
  };

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then((projects) => {
      setProjects(projects);
      setLoading(false);
    });
  }, []);

  const filterProjects = projects.filter((project: any) => {
    return (
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.date.includes(search)
    );
  });

  return (
    <div>
      <Header />
      <div>
        <div>
          <textarea
            name="search-textarea"
            placeholder="Rechercher"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`text-black pt-5 mt-5 flex  m-auto text-center font-semibold resize-none w-[70%] ${
              isTheme.theme === "dark"
                ? "bg-gray-700 text-white"
                : "bg-gray-100 "
            }`}
          />
        </div>
        <section className="m-auto w-[95%] pt-10">
          <h1 className="pl-1 text-[30px] m-auto border-b-4 border-gray-300 text-purple-500 font-bold uppercase">
            {projects.length} projets
          </h1>

          {loading ? (
            <Skeleton />
          ) : (
            <div className="md:pl-[50px] mt-5 max-md:pt-10 grid grid-cols-3 gap-20 max-md:gap-10 max-lg:grid-cols-1 max-md:text-center mb-5 max-2xl:grid-cols-2 min-h-96">
              {filterProjects.map((project: any) => (
                <div
                  key={project._id}
                  className={`block m-auto drop-shadow-2xl shd w-[400px] max-md:w-[300px] h-full rounded-[25px] hover:rounded-[15px] hover:scale-110 duration-400 transition ease-in-out delay-150 ${
                    isTheme.theme === "dark" ? "bg-gray-700 " : "bg-gray-100"
                  }`}
                >
                  <div className="relative h-[230px] border-b-4 border-gray-800">
                    <Image
                      src={project.image}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-t-[20px]"
                      alt="Project image"
                      property="Lucas Bourdon"
                      sizes="5x5"
                      priority
                    />
                  </div>
                  <div className="md:pl-5 pt-2">
                    <p
                      className={`font-semibold text-[20px] ${
                        isTheme.theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {project.title}
                    </p>
                    <p
                      className={`pt-2 h-[full] min-h-[90px]  ${
                        isTheme.theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {project.description}
                    </p>
                    <strong
                      className={`pt-2  ${
                        isTheme.theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      année : {project.date}
                    </strong>
                    <Link
                      target="_blank"
                      href={project.link}
                      className="m-auto mb-3 mt-3 block w-[70%] text-center font-semibold text-[15px] text-white rounded-[20px] p-5 bg-purple-500 hover:bg-indigo-500 "
                    >
                      Voir {project.title}
                    </Link>
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
