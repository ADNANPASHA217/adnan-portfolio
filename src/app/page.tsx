"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import adnanProfile from "../../public/profile.jpeg";
import TechCarousel from "@/components/TechCarousel";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-16"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center w-full max-w-4xl space-y-8"
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
            Frontend developer with 3+ years of experience building scalable,
            high-performance web applications using React, Next.js, and modern
            UI frameworks.
          </p>
          <p className="text-gray-400">
            Passionate about clean code, smooth animations, and intuitive user
            experiences.
          </p>
        </motion.div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-12 bg-black">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-10 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "React.js / Next.js / React Native",
              "TypeScript / JavaScript",
              "Material UI / Tailwind CSS / Bootstrap",
              "Redux / Context API",
              "REST APIs / Axios / Fetch",
              "Git / GitHub / GitLab",
            ].map((skill) => (
              <div
                key={skill}
                className="border border-white/10 rounded-lg p-5 text-gray-300"
              >
                {skill}
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
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-12 bg-black">
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
