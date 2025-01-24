"use client";
import Image from "next/image";
import Link from "next/link.js";
import Header from "@/app/components/header";
import Language from "../../components/language.js";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function About() {
  const setTheme = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-[70%] m-auto h-full ">
      <Header />
      <section className="text-justify pt-5">
        <p>
          Après des études en systèmes numériques, j&apos;ai suivi une formation
          pour obtenir un{" "}
          <strong className="text-purple-600">
            diplôme de développeur web et web mobile de niveau 5 (équivalent à
            un bac +2)
          </strong>
          . Au cours de cette formation, j&apos;ai acquis une solide maîtrise de
          plusieurs langages les plus connus tels que HTML (langage de
          balisage), CSS, et JavaScript, ainsi que des langages plus
          &ldquo;modernes&ldquo; comme Symfony et React{" "}
          <a className="text-purple-600" href="#language_id">
            {" "}
            (détails ci-dessous)
          </a>
          .<br /> <br /> J&apos;ai également appris à utiliser Next.js,(React
          Framework avec laquelle j&apos;ai développé ce site web), lors
          d&apos;un stage de 2 mois. Passionné par l&apos;apprentissage en
          autodidacte, je suis constamment à la recherche de nouvelles
          connaissances et compétences.
          <br />
          <br />
          Aujourd&apos;huit, j&apos;étudie toujours dans la même formation pour
          obtenir un{" "}
          <strong className="text-purple-600">
            Bac+3 concepteur développeur d&apos;application (CDA).
          </strong>
          <br />
          <br /> Je vous invite à aller voir mon CV crée en React sur lequelle
          je donne plus d&apos;information sur mon parcours scolaire ainsi que
          professionel.
        </p>
      </section>
      <section>
        <h1
          id="language_id"
          className="border-b-2 border-purple-600 pt-5 text-[30px] font-semibold uppercase"
        >
          Langage :{" "}
        </h1>
        <h2
          className={`text-[30px] text-center w-64 m-auto font-semibold mt-5 uppercase ${
            setTheme.theme === "dark" ? "bg-gray-700" : "bg-gray-50"
          }`}
        >
          FrontEnd
        </h2>
        <div
          className={`grid gap-5 grid-flow-cols grid-cols-5 p-3 m-auto mt-2 border max-lg:grid-cols-3 max-sm:grid-cols-1 ${
            setTheme.theme === "dark"
              ? "bg-gray-700 border-gray-700"
              : "bg-gray-50"
          }`}
        >
          {Language.map((language) => {
            if (language.type == "frontend") {
              return (
                <div key={language.id} className="">
                  <div
                    className={`group hover:cursor-pointer w-[130px] p-2 m-auto rounded-[5px] hover:scale-105 relative ${
                      setTheme.theme === "dark"
                        ? "bg-gray-600 hover:bg-gray-500"
                        : "bg-gray-100 hover:bg-gray-300"
                    } `}
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
                      className="m-auto"
                      src={language.src}
                      alt={language.alt}
                      width={language.width}
                      height={language.height}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
        <h2
          className={`text-[30px] text-center w-64 m-auto font-semibold mt-5 uppercase  ${
            setTheme.theme === "dark" ? "bg-gray-700" : "bg-gray-50"
          }`}
        >
          css
        </h2>
        <div
          className={`grid gap-5 grid-flow-cols grid-cols-5 p-3 m-auto mt-2 border max-lg:grid-cols-3 max-sm:grid-cols-1 ${
            setTheme.theme === "dark"
              ? "bg-gray-700 border-gray-700"
              : "bg-gray-50"
          }`}
        >
          {Language.map((language) => {
            if (language.type == "css") {
              return (
                <div key={language.id} className="">
                  <div
                    className={`group hover:cursor-pointer w-[130px] p-2 m-auto rounded-[5px] hover:scale-105 relative ${
                      setTheme.theme === "dark"
                        ? "bg-gray-600 hover:bg-gray-500"
                        : "bg-gray-100 hover:bg-gray-300"
                    } `}
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
                      className="m-auto"
                      src={language.src}
                      alt={language.alt}
                      width={language.width}
                      height={language.height}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
        <h2
          className={`text-[30px] text-center w-64 m-auto font-semibold mt-5 uppercase  ${
            setTheme.theme === "dark" ? "bg-gray-700" : "bg-gray-50"
          }`}
        >
          Backend
        </h2>
        <div
          className={`grid gap-5 grid-flow-cols grid-cols-5 p-3 m-auto mt-2 border max-lg:grid-cols-3 max-sm:grid-cols-1 ${
            setTheme.theme === "dark"
              ? "bg-gray-700 border-gray-700"
              : "bg-gray-50"
          }`}
        >
          {Language.map((language) => {
            if (language.type == "backend") {
              return (
                <div key={language.id}>
                  <div
                    className={`group hover:cursor-pointer w-[130px] p-2 m-auto rounded-[5px] hover:scale-105 relative ${
                      setTheme.theme === "dark"
                        ? "bg-gray-600 hover:bg-gray-500"
                        : "bg-gray-100 hover:bg-gray-300"
                    } `}
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
                      className="m-auto"
                      src={language.src}
                      alt={language.alt}
                      width={language.width}
                      height={language.height}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
        <h2
          className={`text-[30px] text-center w-64 m-auto font-semibold mt-5 uppercase  ${
            setTheme.theme === "dark" ? "bg-gray-700" : "bg-gray-50"
          }`}
        >
          DataBase
        </h2>
        <div
          className={`grid gap-5 grid-flow-cols grid-cols-5 p-3 m-auto mt-2 border max-lg:grid-cols-3 max-sm:grid-cols-1 ${
            setTheme.theme === "dark"
              ? "bg-gray-700 border-gray-700"
              : "bg-gray-50"
          }`}
        >
          {Language.map((language) => {
            if (language.type == "database") {
              return (
                <div key={language.id}>
                  <div
                    className={`group hover:cursor-pointer w-[130px] p-2 m-auto rounded-[5px] hover:scale-105 relative ${
                      setTheme.theme === "dark"
                        ? "bg-gray-600 hover:bg-gray-500"
                        : "bg-gray-100 hover:bg-gray-300"
                    } `}
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
                      className="m-auto"
                      src={language.src}
                      alt={language.alt}
                      width={language.width}
                      height={language.height}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
}
