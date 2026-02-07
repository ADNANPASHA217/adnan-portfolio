"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import linkedin from "../../public/logos/linkedin.svg";
import insta from "../../public/logos/instagram.svg";
import gmail from "../../public/logos/gmail.svg";
import menu from "../../public/icons/menu-alt-1-svgrepo-com.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          fixed top-0 left-0 w-full z-50
          bg-black/60 backdrop-blur-md
          border-b border-white/10
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* LOGO + SOCIALS */}
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="bg-white text-black px-3 py-1 rounded-md font-semibold">
              ADNAN<span className="font-bold">.</span>
            </div>

            {/* Social Icons (VISIBLE ON MOBILE TOO) */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/md-adnan-pasha217"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition"
              >
                <Image src={linkedin} alt="LinkedIn" width={18} height={18} />
              </a>

              <a
                href="https://www.instagram.com/journeywithpasha.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition"
              >
                <Image src={insta} alt="Instagram" width={18} height={18} />
              </a>

              <a
                href="mailto:adnan.mech.rymec@gmail.com"
                className="opacity-70 hover:opacity-100 transition"
              >
                <Image src={gmail} alt="Email" width={18} height={18} />
              </a>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden sm:flex gap-6 text-sm text-gray-300">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Certifications", "#certifications"],
              ["Experience", "#experience"],
              ["Awards", "#awards"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, link]) => (
              <a
                key={label}
                href={link}
                className="hover:text-white transition"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* HAMBURGER (MOBILE ONLY) */}
          <button
            className="sm:hidden opacity-80 hover:opacity-100"
            onClick={() => setOpen(true)}
          >
            <Image src={menu} alt="Menu" width={24} height={24} />
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="
                fixed top-0 left-0 h-full w-64 z-50
                bg-black text-white
                border-r border-white/10
                px-6 py-8
              "
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="space-y-6">
                <div className="text-xl font-bold">
                  ADNAN<span className="text-gray-400">.</span>
                </div>

                <nav className="flex flex-col gap-4 text-gray-300">
                  {[
                    ["Home", "#home"],
                    ["About", "#about"],
                    ["Skills", "#skills"],
                    ["Certifications", "#certifications"],
                    ["Experience", "#experience"],
                    ["Awards", "#awards"],
                    ["Projects", "#projects"],
                    ["Contact", "#contact"],
                  ].map(([label, link]) => (
                    <a
                      key={label}
                      href={link}
                      onClick={() => setOpen(false)}
                      className="hover:text-white transition"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
