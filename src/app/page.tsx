"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import adnanProfile from "../../public/profile.jpeg";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center w-full max-w-4xl space-y-6 sm:space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="
              mx-auto 
              w-28 h-28 
              sm:w-36 sm:h-36 
              md:w-40 md:h-40 
              rounded-full 
              overflow-hidden 
              ring-2 ring-white/20
            "
          >
            <Image
              src={adnanProfile}
              alt="Mohammed Adnan Pasha"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="
              font-bold tracking-tight
              text-3xl 
              sm:text-4xl 
              md:text-5xl 
              lg:text-6xl
            "
          >
            Mohammed Adnan Pasha 🚀
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="
              text-sm 
              sm:text-base 
              md:text-lg 
              lg:text-xl
              text-gray-400 
              max-w-2xl 
              mx-auto
            "
          >
            Frontend Developer | React • Next.js • React Native • UI Engineering
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="
              flex 
              flex-col 
              sm:flex-row 
              gap-3 
              sm:gap-4 
              justify-center 
              pt-4
            "
          >
            <a
              href="https://www.linkedin.com/in/md-adnan-pasha217"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 
                border border-white 
                rounded-lg 
                text-sm sm:text-base
                hover:bg-white hover:text-black 
                transition-all duration-300
              "
            >
              LinkedIn
            </a>

            <a
              href="mailto:adnan.mech.rymec@gmail.com"
              className="
                px-6 py-3 
                bg-white text-black 
                rounded-lg 
                text-sm sm:text-base
                hover:opacity-80 
                transition-all duration-300
              "
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-3xl text-center space-y-5 sm:space-y-6"
        >
          <h2
            className="
              font-bold 
              text-2xl 
              sm:text-3xl 
              md:text-4xl
            "
          >
            About Me
          </h2>

          <p
            className="
              text-gray-400 
              text-sm 
              sm:text-base 
              md:text-lg 
              leading-relaxed
            "
          >
            I’m a frontend developer focused on building clean, scalable, and
            high-performance web applications. I enjoy turning complex problems
            into intuitive user experiences using React, Next.js, and modern UI
            patterns.
          </p>

          <p
            className="
              text-gray-400 
              text-sm 
              sm:text-base 
              md:text-lg 
              leading-relaxed
            "
          >
            I care deeply about code quality, animations that feel natural, and
            interfaces that users actually enjoy using.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
