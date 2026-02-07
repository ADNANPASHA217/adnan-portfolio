"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import adnanProfile from "../../public/profile.jpeg";
import TechCarousel from "@/components/TechCarousel";
import LiquidEther from "@/components/LiquidEther";
import insta from "../../public/logos/instagram.svg";
import linkedin from "../../public/logos/linkedin.svg";
import gmail from "../../public/logos/gmail.svg";

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

          <p className="relative text-gray-400 text-lg leading-relaxed">
            <span className="absolute -left-6 -top-4 text-6xl text-white/20 font-serif">
              “
            </span>
            <span className="relative">
              Frontend Developer with 3+ years of hands-on experience in React,
              Next.js, and React Native, building scalable, maintainable, and
              performance-driven applications.
            </span>
          </p>

          <p className="text-gray-400 text-base leading-relaxed">
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Experience
          </h2>

          {/* Wrapper WITHOUT space-y */}
          <div className="relative">
            {/* ================= ZYPTR ================= */}
            <div className="relative rounded-xl border border-white/15 p-8 ">
              <h3 className="font-semibold text-xl mb-6">Zyptr · Full-time</h3>

              {/* Inner timeline */}
              <div className="relative pl-12">
                {/* Vertical line */}
                <div className="absolute left-3 top-0 bottom-0 w-px bg-white/20" />

                <div className="relative">
                  {/* Dot aligned with line */}
                  <span
                    style={{ left: "-41.5px" }}
                    className="absolute  top-2 w-3 h-3 bg-white rounded-full"
                  />

                  <h4 className="font-semibold">Software Engineer – 2</h4>
                  <p className="text-gray-400 text-sm">
                    Apr 2025 – Present · Bellary, India · On-site
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                    <li>Built modern UI using React, TypeScript & Next.js</li>
                    <li>Optimized performance and reusable components</li>
                    <li>Collaborated with cross-functional teams</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ===== CONNECTING FLOW LINE (OVERLAPPED) ===== */}
            <div className="relative h-10">
              <div
                className="absolute left-[27px] top-0 bottom-0 w-px"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, rgba(255,255,255,0.6), transparent)",
                  backgroundSize: "100% 200%",
                  animation: "flowDown 3s linear infinite",
                }}
              />
            </div>

            {/* ================= TERRALOGIC ================= */}
            <div className="relative rounded-xl border border-white/15 p-8 ">
              <h3 className="font-semibold text-xl mb-6">
                Terralogic · Full-time
              </h3>

              {/* Inner timeline */}
              <div className="relative pl-12">
                {/* Vertical line */}
                <div className="absolute left-3 top-0 bottom-0 w-px bg-white/20" />

                {/* SE-2 */}
                <div className="relative mb-8">
                  <span
                    style={{ left: "-41.5px" }}
                    className="absolute left-[11px] top-2 w-3 h-3 bg-white rounded-full"
                  />
                  <h4 className="font-semibold">Software Engineer – 2</h4>
                  <p className="text-gray-400 text-sm">
                    Jul 2024 – Apr 2025 · Bellary, India
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                    <li>Led feature development for web applications</li>
                    <li>Worked on enterprise & healthcare platforms</li>
                    <li>Improved UX and code quality</li>
                  </ul>
                </div>

                {/* SE-1 */}
                <div className="relative mb-8">
                  <span
                    style={{ left: "-41.5px" }}
                    className="absolute left-[11px] top-2 w-3 h-3 bg-white/70 rounded-full"
                  />
                  <h4 className="font-semibold">Software Engineer – 1</h4>
                  <p className="text-gray-400 text-sm">Dec 2023 – Jul 2024</p>
                  <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                    <li>Developed reusable component architecture</li>
                    <li>Integrated APIs and async flows</li>
                  </ul>
                </div>

                {/* Trainee */}
                <div className="relative">
                  <span
                    style={{ left: "-41.5px" }}
                    className="absolute left-[11px] top-2 w-3 h-3 bg-white/50 rounded-full"
                  />
                  <h4 className="font-semibold">Trainee Software Engineer</h4>
                  <p className="text-gray-400 text-sm">Dec 2022 – Dec 2023</p>
                  <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                    <li>Built foundational UI using React & JavaScript</li>
                    <li>Learned Git workflows and agile practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Manjushree India */}
            <div className="rounded-xl border border-white/15 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Manjushree India</h3>
              <p className="text-gray-400 text-sm">
                Developed a responsive corporate website with clean UI and
                cross-browser compatibility.
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-300">Domain:</span>{" "}
                Corporate Website
              </p>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border border-white/20 text-gray-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Prescinto */}
            <div className="rounded-xl border border-white/15 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Prescinto</h3>
              <p className="text-gray-400 text-sm">
                Built an interactive analytics dashboard focused on data
                visualization and performance.
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-300">Domain:</span>{" "}
                Energy Analytics Platform
              </p>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border border-white/20 text-gray-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* NH Care Plus */}
            <div className="rounded-xl border border-white/15 p-6 space-y-4">
              <h3 className="text-lg font-semibold">
                NH Care Plus (OneHealth)
              </h3>
              <p className="text-gray-400 text-sm">
                Developed a comprehensive healthcare web platform with
                responsive design and modular UI.
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-300">Domain:</span>{" "}
                Healthcare Platform
              </p>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border border-white/20 text-gray-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* TATA MAVIC */}
            <div className="rounded-xl border border-white/15 p-6 space-y-4">
              <h3 className="text-lg font-semibold">TCPL – TATA MAVIC</h3>
              <p className="text-gray-400 text-sm">
                Built an enterprise-grade mobile application with scalable
                architecture and reusable components.
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-300">Domain:</span>{" "}
                Enterprise Mobile Application
              </p>
              <div className="flex flex-wrap gap-2">
                {["React Native", "TypeScript", "React Native Elements"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border border-white/20 text-gray-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Contour Education */}
            <div className="rounded-xl border border-white/15 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Contour Education</h3>
              <p className="text-gray-400 text-sm">
                Created an EdTech web platform with reusable components and
                modern UI patterns.
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-300">Domain:</span>{" "}
                EdTech Platform – Web App
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Material UI"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full border border-white/20 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Economic Times */}
            <div className="rounded-xl border border-white/15 p-6 space-y-4">
              <h3 className="text-lg font-semibold">Economic Times</h3>
              <p className="text-gray-400 text-sm">
                Developed a scalable, SEO-optimized media platform with
                server-side rendering.
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-300">Domain:</span> Media
                & Publishing Platform
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "SEO", "SSR"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full border border-white/20 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
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
          className="max-w-4xl mx-auto space-y-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Education
          </h2>

          <div className="relative rounded-xl border border-white/10 p-8">
            <h3 className="flex items-center gap-2 font-semibold text-lg">
              🎓 Bachelor of Engineering – Mechanical Engineering
            </h3>

            <p className="text-gray-400 mt-1">RYMEC, Ballari · 2018 – 2022</p>

            <p className="text-gray-300 mt-2">
              Percentage: <span className="text-white font-medium">82.04%</span>
            </p>

            {/* Optional highlight */}
            <p className="mt-2 text-sm text-gray-400">
              Awarded 2nd Rank in Mechanical Engineering Department
            </p>
          </div>
        </motion.div>
      </section>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center space-y-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">Let’s Connect</h2>

        <p className="text-gray-400 max-w-md mx-auto">
          Feel free to reach out for opportunities, collaborations, or just a
          friendly hello.
        </p>

        {/* Contact Cards */}
        <div className="flex justify-center gap-6 flex-wrap">
          {/* Email */}
          <a
            href="mailto:adnan.mech.rymec@gmail.com"
            className="group w-28 h-28 rounded-xl border border-white/15 
                 flex flex-col items-center justify-center gap-3
                 hover:border-white/40 hover:bg-white/5 transition"
          >
            <Image
              src={gmail}
              alt="Email"
              width={32}
              height={32}
              className="opacity-80 group-hover:opacity-100 transition"
            />
            <span className="text-sm text-gray-300 group-hover:text-white">
              Email
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/md-adnan-pasha217"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-28 h-28 rounded-xl border border-white/15 
                 flex flex-col items-center justify-center gap-3
                 hover:border-white/40 hover:bg-white/5 transition"
          >
            <Image
              src={linkedin}
              alt="LinkedIn"
              width={32}
              height={32}
              className="opacity-80 group-hover:opacity-100 transition"
            />
            <span className="text-sm text-gray-300 group-hover:text-white">
              LinkedIn
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/journeywithpasha.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-28 h-28 rounded-xl border border-white/15 
                 flex flex-col items-center justify-center gap-3
                 hover:border-white/40 hover:bg-white/5 transition"
          >
            <Image
              src={insta}
              alt="Instagram"
              width={32}
              height={32}
              className="opacity-80 group-hover:opacity-100 transition"
            />
            <span className="text-sm text-gray-300 group-hover:text-white">
              Instagram
            </span>
          </a>
        </div>

        {/* Email text */}
        <p className="text-gray-500 text-sm">adnan.mech.rymec@gmail.com</p>
      </motion.div>
    </main>
  );
}
