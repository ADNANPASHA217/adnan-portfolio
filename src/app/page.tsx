"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import adnanProfile from "../../public/profile.jpeg";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-6"
      >
        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto 
          w-40 h-40 rounded-full overflow-hidden ring-2 ring-white/20 shadow-lg"
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

        {/* NAME */}
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Mohammed Adnan Pasha 🚀
        </motion.h1>

        {/* ROLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Frontend Developer | React • Next.js • React Native • UI Engineering
        </motion.p>

        {/* CTA BUTTONS */}
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
    </main>
  );
}
