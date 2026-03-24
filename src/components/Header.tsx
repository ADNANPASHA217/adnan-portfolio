"use client";

import {
  AnimatePresence,
  motion,
  type Variants,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import linkedin from "../../public/logos/linkedin.svg";
import insta from "../../public/logos/instagram.svg";
import gmail from "../../public/logos/gmail.svg";
import menu from "../../public/icons/menu-alt-1-svgrepo-com.svg";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Certifications", "#certifications"],
  ["Experience", "#experience"],
  ["Awards", "#awards"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
] as const;

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/md-adnan-pasha217",
    alt: "LinkedIn",
    icon: linkedin,
  },
  {
    href: "https://www.instagram.com/journeywithpasha.tech",
    alt: "Instagram",
    icon: insta,
  },
  {
    href: "mailto:adnan.mech.rymec@gmail.com",
    alt: "Email",
    icon: gmail,
  },
] as const;

const revealEase = [0.16, 1, 0.3, 1] as const;
const exitEase = [0.4, 0, 1, 1] as const;

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: revealEase,
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: revealEase },
  },
};

const drawerContentVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const drawerItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: revealEase },
  },
  exit: {
    opacity: 0,
    x: -12,
    transition: { duration: 0.2, ease: exitEase },
  },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 24,
    mass: 0.35,
  });
  const headerBackground = useTransform(
    smoothScroll,
    [0, 0.18],
    ["rgba(2, 6, 23, 0.62)", "rgba(2, 6, 23, 0.92)"]
  );
  const headerBorder = useTransform(
    smoothScroll,
    [0, 0.18],
    ["rgba(255, 255, 255, 0.10)", "rgba(255, 255, 255, 0.18)"]
  );
  const headerOffset = useTransform(smoothScroll, [0, 0.18], [0, 6]);

  return (
    <>
      <motion.header
        initial="hidden"
        animate="show"
        variants={headerVariants}
        className="fixed inset-x-0 top-0 z-50 px-0 sm:px-4 lg:px-6"
      >
        <motion.div
          style={{
            backgroundColor: headerBackground,
            borderColor: headerBorder,
            y: headerOffset,
          }}
          className="relative overflow-hidden border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:mt-3 sm:rounded-[1.5rem]"
        >
          <div className="pointer-events-none absolute inset-0">
            <motion.span
              className="absolute -left-10 top-0 h-24 w-32 rounded-full bg-cyan-400/20 blur-3xl"
              animate={{
                x: [0, 70, 0],
                y: [-10, 8, -10],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute right-0 top-0 h-24 w-36 rounded-full bg-fuchsia-500/15 blur-3xl"
              animate={{
                x: [0, -60, 0],
                y: [8, -10, 8],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-10%", "180%"] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.2,
              }}
            />
          </div>

          <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">
            <div className="flex items-center gap-3">
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -1 }}
                  transition={{ type: "spring", stiffness: 340, damping: 20 }}
                  className="relative overflow-hidden rounded-md px-3 py-1 font-semibold text-white"
                >
                  <motion.span
                    className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg]"
                    animate={{ x: ["-120%", "290%"] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1.6,
                    }}
                  />
                  <span
                    className="relative z-10"
                    style={{ fontFamily: "fantasy" }}
                  >
                    ADNAN
                  </span>
                </motion.div>
              </motion.div>

              <div className="flex items-center gap-2">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={item.alt}
                    variants={itemVariants}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] opacity-80 transition-opacity hover:opacity-100"
                  >
                    <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <motion.span
                      animate={{ y: [0, -1.5, 0] }}
                      transition={{
                        duration: 3.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.22,
                      }}
                      className="relative z-10 flex"
                    >
                      <Image
                        src={item.icon}
                        alt={item.alt}
                        width={18}
                        height={18}
                      />
                    </motion.span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.nav
              variants={itemVariants}
              className="hidden items-center gap-1 text-sm text-gray-300 sm:flex"
            >
              {navItems.map(([label, link]) => (
                <motion.a
                  key={label}
                  href={link}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  className="group relative overflow-hidden rounded-full px-3 py-2 transition-colors duration-300 hover:text-white"
                >
                  <span className="absolute inset-0 rounded-full bg-white/[0.08] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10">{label}</span>
                  <span className="absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 bg-gradient-to-r from-white via-cyan-300 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                </motion.a>
              ))}
            </motion.nav>

            <motion.button
              variants={itemVariants}
              type="button"
              aria-label="Open menu"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] sm:hidden"
              whileTap={{ scale: 0.92 }}
              onClick={() => setOpen((current) => !current)}
            >
              <motion.span
                className="absolute inset-0 rounded-full bg-white/10"
                animate={{ opacity: [0.16, 0.3, 0.16], scale: [1, 1.06, 1] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative z-10"
              >
                <Image src={menu} alt="Menu" width={24} height={24} />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className="fixed top-0 left-0 z-50 h-full w-72 overflow-hidden border-r border-white/10 bg-slate-950/95 px-6 py-8 text-white shadow-[0_0_60px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              initial={{ x: "-100%", opacity: 0.95 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0.95 }}
              transition={{ type: "spring", stiffness: 240, damping: 28 }}
            >
              <div className="pointer-events-none absolute inset-0">
                <motion.span
                  className="absolute -left-8 top-16 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl"
                  animate={{ x: [0, 28, 0], opacity: [0.18, 0.35, 0.18] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.span
                  className="absolute right-0 top-40 h-32 w-36 rounded-full bg-fuchsia-500/15 blur-3xl"
                  animate={{ x: [0, -24, 0], opacity: [0.14, 0.28, 0.14] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <motion.div
                variants={drawerContentVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="relative space-y-6"
              >
                <motion.div
                  variants={drawerItemVariants}
                  className="text-xl font-bold"
                >
                  ADNAN<span className="text-gray-400">.</span>
                </motion.div>

                <motion.nav className="flex flex-col gap-3 text-gray-300">
                  {navItems.map(([label, link]) => (
                    <motion.a
                      key={label}
                      variants={drawerItemVariants}
                      href={link}
                      onClick={() => setOpen(false)}
                      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.04] px-4 py-3 transition-colors duration-300 hover:text-white"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="relative z-10">{label}</span>
                    </motion.a>
                  ))}
                </motion.nav>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
