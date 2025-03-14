/* eslint-disable @typescript-eslint/no-explicit-any */
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
    { id: 1, href: routes.home, label: "HOME" },
    { id: 2, href: routes.aboutUs, label: "ABOUT US" },
    { id: 3, href: routes.contactUs, label: "CONTACT US" },
    { id: 4, href: routes.findAgents, label: "FIND AGENT" },
  ];

  return (
    <header className="bg-white py-6 w-dvw">
      <div className="w-dvw flex items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex space-x-6">
          {LINKS.map(({ id, href, label }) => (
            <NavLink key={id} href={href} label={label} />
          ))}
        </nav>
        <MobileMenuButton
          isOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            links={LINKS}
            onClose={() => setMenuOpen(false)}
            variants={menuVariants}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/">
      <Image alt="Logo" height={50} width={50} src="/logo.avif" />
    </Link>
  );
}

function NavLink({ href, label }: any) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-gray-700 hover:text-gold"
    >
      {label}
    </Link>
  );
}

function MobileMenuButton({ isOpen, onClick }: any) {
  return (
    <button
      className="md:hidden text-black p-2"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  );
}

function MobileMenu({ links, onClose, variants }: any) {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex flex-col"
      initial="closed"
      animate="open"
      exit="closed"
      variants={variants}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <Logo />
        <button
          className="text-black p-2"
          onClick={onClose}
          aria-label="Close menu"
        >
          <FaTimes size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-4 py-5">
        {links.map(({ id, href, label }: any) => (
          <NavLink key={id} href={href} label={label} />
        ))}
      </nav>
    </motion.div>
  );
}
