"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ReactLogo from "../../public/logos/react.svg";
import NextJs from "../../public/logos/nextjs1.svg";
import Redux from "../../public/logos/redux.svg";
import APIlogo from "../../public/logos/rest-api.svg";
import JsLogo from "../../public/logos/js.svg";
import TsLogo from "../../public/logos/typescript.svg";
import MaterialUI from "../../public/logos/material.svg";
import Bootstrap from "../../public/logos/bootstrap.svg";
import Tailwind from "../../public/logos/tailwind.svg";

const logos = [
  { src: ReactLogo, name: "React" },
  { src: NextJs, name: "Next.js" },
  { src: APIlogo, name: "REST API" },
  { src: Redux, name: "Redux" },
  { src: JsLogo, name: "JavaScript" },
  { src: TsLogo, name: "TypeScript" },
  { src: MaterialUI, name: "Material UI" },
  { src: Tailwind, name: "Tailwind" },
  { src: Bootstrap, name: "Bootstrap" },
];

export default function TechCarousel() {
  return (
    <div className="relative overflow-hidden w-full py-10">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="
              w-32
              flex
              items-center
              justify-center
              opacity-70
              hover:opacity-100
              transition
            "
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={48}
              height={48}
              //   className="object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
