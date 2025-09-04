"use client";

import Image from "next/image";
import Header from "./components/header.tsx";
import Profile from "../../public/img/_DSC5091.jpg";
import Link from "next/link";
import { motion } from "motion/react";
import { scale } from "motion";

export default function Home() {
  return (
    <section className="lg:py-5 px-2 gap-x-2  flex flex-row-reverse max-lg:gap-6 justify-center max-lg:flex-col">
      <h1 className="min-lg:hidden text-3xl text-center font-bold mb-3">
        Développeur web et <a className="text-[#00ABE4]">web mobile</a>
      </h1>
      <div className="lg:w-[40%] flex flex-col align-bottom lg:place-items-start">
        <div className="block">
          <div className="select-none	 rounded-full md:h-[500px] md:w-[500px] max-2xl:h-[250px] m-auto max-lg:m-auto max-2xl:w-[250px] relative border-4 border-[#00ABE4] ">
            <Image
              src={Profile}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-full"
              alt="Photo de Profile"
              property="Lucas Bourdon"
              sizes="36x36"
              priority
            />
          </div>
          <p className="text-center text-4xl font-semibold mt-3 w-full">
            Lucas Bourdon
          </p>
        </div>
      </div>
      <div className=" place-items-center lg:w-[60%] max-sm:text-center md:w-[75%] lg:h-100 self-center lg:justify-between flex flex-col max-lg:place-items-center justify-center align-middle max-sm:text-balance lg:text-start">
        <div className="w-10/12 self-end max-lg:w-full max-lg:gap-3 h-full flex flex-col justify-center lg:justify-between ">
          <h1 className="max-lg:hidden text-3xl font-bold max-lg:mb-3">
            développeur <a className="text-[#00ABE4]">full stack (M1/M2)</a>
          </h1>
          <h2 className="lg:text-2xl lg:w-10/12 w-full ">
            Diplomé d&apos;un bac + 3, Je suis actuellement en formation en tant
            que{" "}
            <strong className="text-[#00ABE4]">
              développeur full stack (M1/M2)
            </strong>{" "}
            dans l&apos;école{"  "}
            <strong className="text-[#00ABE4]">
              Sup de Vinci
            </strong>{" "}
            en alternance dans l&apos;entreprise{"  "}
            <strong className="text-[#00ABE4]">
              investir dans l&apos;ancien
            </strong>.
          </h2>
          <Link
            href="/page/projects"
            className="text-center max-lg:m-auto text-white text-2xl w-54 min-md:max-w-72 py-3 bg-gradient-to-r from-violet-500 to-[#00ABE4] lg:p-5 hover:scale-105 hover:rounded-2xl duration-500 transform-all"
          >
            Mes créations
          </Link>
        </div>
      </div>
    </section>
  );
}
