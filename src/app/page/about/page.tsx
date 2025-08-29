"use client";
import Image from "next/image";
import Link from "next/link.js";
import Header from "@/app/components/header";
import Language from "../../components/language.js";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LanguageSection from "../../components/LanguageSection";

export default function About() {
  const setTheme = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="px-2 m-auto max-w-9/12 max-md:max-w-full">
      <section className="text-justify relative">
        <div className="absolute w-full h-full -z-5 bg-white shadow-2xl rounded-2xl"></div>
        <div className="p-3">
          <p className='text-black'>
            Après des études en systèmes numériques, j&apos;ai suivi une formation
            pour obtenir un{" "}
            <strong className="text-[#00ABE4]">
              diplôme de développeur web et web mobile de niveau 5 (équivalent à
              un bac +2)
            </strong>
            . Au cours de cette formation, j&apos;ai acquis une solide maîtrise de
            plusieurs langages les plus connus tels que HTML (langage de
            balisage), CSS, et JavaScript, ainsi que des langages / frameworks plus
            &ldquo;modernes&ldquo; comme Symfony et React{" "}
            <a className="text-[#00ABE4]" href="#language_id">
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
            <strong className="text-[#00ABE4]">
              Bac+3 concepteur développeur d&apos;application (CDA).
            </strong>
            <br />
            <br /> Je vous invite à aller voir mon CV crée en React sur lequelle
            je donne plus d&apos;information sur mon parcours scolaire ainsi que
            professionel.
          </p>
        </div>
      </section>
      <LanguageSection />
    </div>
  );
}
