"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import adnanProfile from "../../public/profile.jpeg";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto w-40 h-40 rounded-full overflow-hidden ring-2 ring-white/20"
          >
            <Image
              src={adnanProfile}
              alt="Mohammed Adnan Pasha"
              width={160}
              height={160}
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Mohammed Adnan Pasha 🚀
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Frontend Developer | React • Next.js • React Native • UI Engineering
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center gap-4 pt-4"
          >
            <a
              href="https://www.linkedin.com/in/md-adnan-pasha217"
              target="_blank"
              className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:adnan.mech.rymec@gmail.com"
              className="px-6 py-2 bg-white text-black rounded-lg hover:opacity-80 transition"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SECOND SECTION (ON SCROLL) ================= */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl text-center space-y-6"
        >
          <h2 className="text-4xl font-bold">About Me</h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            I’m a frontend developer focused on building clean, scalable, and
            high-performance web applications. I enjoy turning complex problems
            into intuitive user experiences using React, Next.js, and modern UI
            patterns.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I care deeply about code quality, animations that feel natural, and
            interfaces that users actually enjoy using.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
