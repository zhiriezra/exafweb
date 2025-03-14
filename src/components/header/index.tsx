"use client";

import { routes } from "@/routes";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// Animation variants
const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
      delay: 0.15,
    },
  },
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const LINKS = [
    {
      id: 1,
      href: routes.home,
      label: "HOME",
    },
    {
      id: 2,
      href: routes.aboutUs,
      label: "ABOUT US",
    },
    {
      id: 3,
      href: routes.contactUs,
      label: "CONTACT US",
    },
    {
      id: 4,
      href: routes.findAgents,
      label: "FIND AGENT",
    },
  ];
  return (
    <div className="bg-dark py-6 relative">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <motion.div
            className="flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image alt="" height={50} width={50} src={"/logo.avif"} />
            {/* <div className="">
              <h1 className="text-2xl font-bold tracking-wider font-gildaDisplay logo-text">
                Areis Real Estate
              </h1>
            </div> */}
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <AllRoutes />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-4 md:hidden">
          <motion.button
            className="md:hidden text-black p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-50 flex flex-col "
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex justify-between items-center p-4 border-b bg-white border-gray-700">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Image alt="" height={50} width={50} src={"/logo.avif"} />

                    {/* <div className="">
                      <h1 className="text-xl font-bold tracking-wider font-gildaDisplay logo-text">
                        Areis Real Estate
                      </h1>
                    </div> */}
                  </motion.div>
                </Link>
                <div className="flex items-center gap-4">
                  <motion.button
                    className="text-black p-2"
                    onClick={() => setMenuOpen(false)}
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTimes size={24} />
                  </motion.button>
                </div>
              </div>

              <motion.div
                initial="closed"
                animate="open"
                transition={{ staggerChildren: 0.1 }}
                className={`flex items-center text-black flex-col gap-4 py-5 font-barlowCondensed`}
              >
                {LINKS.map(({ href, id, label }) => (
                  <Link
                    key={id}
                    href={href}
                    className="hover:text-gold hover:underline text-sm hover:bg-medium px-4 py-2"
                  >
                    {label}
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function AllRoutes({ className }: { className?: string }) {
  const LINKS = [
    {
      id: 1,
      href: routes.home,
      label: "HOME",
    },
    {
      id: 2,
      href: routes.aboutUs,
      label: "ABOUT US",
    },
    {
      id: 6,
      href: routes.contactUs,
      label: "CONTACT US",
    },
  ];
  return (
    <div
      className={`flex items-center space-x-6 text-white max-sm:flex-col ${className}`}
    >
      {LINKS.map(({ href, id, label }) => (
        <Link
          key={id}
          href={href}
          className="hover:text-gold hover:underline font-barlow text-sm"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
