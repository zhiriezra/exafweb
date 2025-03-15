/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { DropdownCustom } from "@/components/dropdown"; // adjust the path as needed
import { routes } from "@/routes";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CustomAOS from "../aos";

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
  const router = useRouter();

  // LINKS array for non-dropdown items.
  // For "Resources" we’ll render a dropdown instead.
  const LINKS = [
    { id: 1, href: routes.home, label: "HOME" },
    { id: 2, href: routes.aboutUs, label: "ABOUT US" },
    { id: 3, href: routes.contactUs, label: "CONTACT US" },
    { id: 4, href: routes.findAgents, label: "FIND AGENT" },
    { id: 5, href: "", label: "Resources" }, // placeholder for dropdown
  ];

  // Items for the Resources dropdown
  const resourceDropdownItems = [
    { label: "Careers", value: "/careers" },
    { label: "Publications", value: "/publications" },
    { label: "Gallery", value: "/gallery" },
  ];

  return (
    <header className="bg-white py-6 w-dvw">
      <div className="w-dvw flex items-center justify-between px-4">
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {LINKS.map(({ id, href, label }) =>
            label === "Resources" ? (
              <DropdownCustom
                key={id}
                items={resourceDropdownItems}
                placeholder="Resources"
                onChange={(value) => router.push(value)}
                buttonClassName="text-sm font-medium text-gray-700 bg-transparent border-none"
                menuClassName="mt-1"
                itemClassName="px-4 py-2"
              />
            ) : (
              <NavLink key={id} href={href} label={label} />
            )
          )}
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
            resourceDropdownItems={resourceDropdownItems}
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

// Updated NavLink with active link detection
function NavLink({ href, label }: any) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`text-base font-semibold ${
        isActive
          ? "text-yellow-400 font-bold"
          : "text-white hover:text-yellow-400"
      }`}
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

// Mobile menu now also renders the Resources dropdown.
function MobileMenu({ links, resourceDropdownItems, onClose, variants }: any) {
  const router = useRouter();

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
        {links.map(({ id, href, label }: any) =>
          label === "Resources" ? (
            <DropdownCustom
              key={id}
              items={resourceDropdownItems}
              placeholder="Resources"
              onChange={(value) => {
                router.push(value);
                onClose();
              }}
              buttonClassName="text-sm font-medium text-gray-700 bg-transparent border-none"
              menuClassName="mt-1"
              itemClassName="px-4 py-2"
            />
          ) : (
            <NavLink key={id} href={href} label={label} />
          )
        )}
      </nav>
    </motion.div>
  );
}

export const MainHeader = () => {
  const router = useRouter();

  // Define the dropdown items for Resources.
  const resourceDropdownItems = [
    { label: "Careers", value: routes.careers },
    { label: "Publications", value: routes.publications },
    { label: "Gallery", value: routes.gallery },
  ];

  return (
    <>
      <div className="sm:hidden">
        <Header />
      </div>
      <div className="absolute top-2 left-0 right-0 w-full px-5 z-50 max-sm:hidden">
        <header className="w-full py-4 max-md:px-4">
          <div className="max-w-[1300px] mx-auto flex items-center justify-between">
            <CustomAOS variant="fadeInDown" duration={0.6}>
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Extension Africa"
                  width={200}
                  height={70}
                  className="h-[60px] w-auto"
                />
              </Link>
            </CustomAOS>

            <CustomAOS variant="fadeInDown" duration={0.6} delay={0.2}>
              <nav className="hidden md:flex items-center space-x-8">
                <NavLink href="/" label="Home" />
                <NavLink href={routes.aboutUs} label="About Us" />
                <NavLink href={routes.products} label="Products" />
                <NavLink href={routes.service} label="Services" />
                <DropdownCustom
                  items={resourceDropdownItems}
                  placeholder="Resources"
                  onChange={(value) => router.push(value)}
                  menuClassName="mt-1"
                  itemClassName="px-4 py-2"
                />
              </nav>
            </CustomAOS>
            <Link href={routes.findAgents}>
              <button className="bg-[#1F6306] flex gap-4 hover:bg-[#1F6306]/90 cursor-pointer text-white rounded-full px-6 py-3">
                Find an Agent{" "}
                <span className="ml-2 bg-yellow-400 text-[#1F6306]/90 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  →
                </span>
              </button>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};
