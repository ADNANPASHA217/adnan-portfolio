"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import adnanProfile from "../../public/profile.jpeg";
import TechCarousel from "@/components/TechCarousel";
import LiquidEther from "@/components/LiquidEther";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <Header />

      {/* ================= HERO ================= */}
      <section id="home" className="min-h-screen relative">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={12}
          cursorSize={90}
          isViscous
          viscous={18}
          iterationsViscous={18}
          iterationsPoisson={20}
          resolution={0.35}
          autoDemo
          autoSpeed={0.4}
          autoIntensity={1.6}
          takeoverDuration={0.25}
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center w-full max-w-4xl space-y-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          px-4 
          sm:px-6
           pt-16 
          "
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto w-32 h-32 rounded-full overflow-hidden ring-2 ring-white/20"
          >
            <Image src={adnanProfile} alt="Adnan" className="object-cover" />
          </motion.div>

          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
            Mohammed Adnan Pasha 🚀
          </h1>

          <p className="text-gray-400 text-base sm:text-lg">
            Frontend Developer | React • Next.js • React Native • UI Engineering
            • Freelancer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/md-adnan-pasha217"
              target="_blank"
              className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:adnan.mech.rymec@gmail.com"
              className="px-6 py-3 bg-white text-black rounded-lg hover:opacity-80 transition"
            >
              Contact
            </a>
          </div>
          {/* Tech Stack Carousel */}
          <div>
            <TechCarousel />
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <p className="text-gray-400">
            Frontend Developer with 3+ years of hands-on experience in React,
            Next.js, and React Native, building scalable, maintainable, and
            performance-driven applications.
          </p>

          <p className="text-gray-400">
            I specialize in creating clean UI, reusable component systems, and
            SEO-optimized interfaces. I focus on delivering fast, accessible,
            and user-centric digital experiences.
          </p>
        </motion.div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Skills</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left auto-rows-fr">
            {[
              {
                title: "Frontend Development",
                items: [
                  "React.js, Next.js, React Native",
                  "Component-based architecture",
                  "Reusable & scalable UI components",
                ],
              },
              {
                title: "Languages & State",
                items: [
                  "JavaScript, TypeScript",
                  "Redux, Context API",
                  "Async data handling & state management",
                ],
              },
              {
                title: "UI & Styling",
                items: [
                  "Material UI (MUI)",
                  "Tailwind CSS, Bootstrap",
                  "SCSS, Responsive & mobile-first design",
                  "UI/UX implementation from Figma",
                ],
              },
              {
                title: "API & Integration",
                items: [
                  "RESTful API integration",
                  "Axios, Fetch",
                  "Loading & error handling",
                ],
              },
              {
                title: "Performance & Quality",
                items: [
                  "Performance optimization",
                  "Clean, maintainable code",
                  "Debugging & issue resolution",
                ],
              },
              {
                title: "Tools & Practices",
                items: [
                  "Git, GitHub, GitLab",
                  "NPM, Yarn",
                  "Agile / Scrum",
                  "Code reviews & documentation",
                ],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="relative rounded-xl p-[2px] overflow-hidden group h-full flex"
              >
                {/* ROTATING BORDER */}
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background:
                      "conic-gradient( from 0deg, transparent 60%, rgba(255,255,255,0.15), rgba(255,255,255,0.6), rgba(255,255,255,0.15), transparent)",
                    animation:
                      "rotateBorder 6s cubic-bezier(0.4, 0.0, 0.2, 1) infinite",
                  }}
                />

                {/* INNER CARD */}
                <div
                  className="
        relative z-10 rounded-xl bg-black p-6 space-y-3
        border border-white/10
        h-full w-full
        flex flex-col
        group-hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]
        transition-all duration-300
      "
                >
                  <h3 className="font-semibold text-lg">{card.title}</h3>
                  <ul className="text-gray-300 space-y-1">
                    {card.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Experience
          </h2>

          <div className="space-y-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold">Software Engineer – Zyptr</h3>
              <p className="text-gray-400">Apr 2025 – Present</p>
              <ul className="list-disc list-inside mt-3 text-gray-300">
                <li>Built UI using React, TypeScript, Tailwind & MUI</li>
                <li>Integrated APIs and optimized performance</li>
                <li>Collaborated with cross-functional teams</li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold">Software Engineer – Terralogic</h3>
              <p className="text-gray-400">Dec 2022 – Apr 2025</p>
              <ul className="list-disc list-inside mt-3 text-gray-300">
                <li>Developed reusable component architecture</li>
                <li>Worked on enterprise & healthcare platforms</li>
                <li>Improved UX and code quality</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-12 ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto space-y-10 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Economic Times – Media Platform (Next.js)",
              "TATA MAVIC – Mobile App (React Native)",
              "NH Care Plus – Healthcare Platform",
              "Contour Education – EdTech Platform",
            ].map((project) => (
              <div
                key={project}
                className="border border-white/10 rounded-lg p-6 text-gray-300"
              >
                {project}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="py-24 px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Education
          </h2>

          <div className="border border-white/10 rounded-lg p-6">
            <h3 className="font-semibold">B.E. Mechanical Engineering</h3>
            <p className="text-gray-400">
              RYMEC, Ballari · 2018 – 2022 · 82.04%
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Let’s Connect</h2>
          <p className="text-gray-400">adnan.mech.rymec@gmail.com</p>
        </motion.div>
      </section>
    </main>
  );
}
