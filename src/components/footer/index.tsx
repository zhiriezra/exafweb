"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CustomAOS from "../aos";

export default function Footer() {
  return (
    <footer className="bg-[#0A2709] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Section */}
          <CustomAOS variant="slideInLeft" className="space-y-6">
            <div className="flex items-center gap-5 mb-6">
              <Image
                src="/logo.avif"
                alt="Extension Africa"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h6 className="text-white text-2xl font-bold hover:text-yellow-500 cursor-pointer">
                Extension Africa
              </h6>
            </div>
            <p className="text-gray-100 max-w-md">
              Expansion Africa (EXAF) is a study-driven agricultural tech
              platform delivering proprietary extension services to participants
              in the value chain.
            </p>
            <p className="text-gray-100 max-w-md">
              Through our robust network of grassroot extension agents, we are
              catalyzing high-impact market-led partnerships that build
              competitive value chains, expand smallholder access to productive
              resources, and create enduring economic opportunities for youths,
              women, and smallholder farmers.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-yellow-500 hover:text-yellow-400">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-yellow-500 hover:text-yellow-400">
                <Twitter size={24} />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/extension-africa"
                className="text-yellow-500 hover:text-yellow-400"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </CustomAOS>

          {/* Middle Section */}
          <CustomAOS variant="fadeInUp" delay={0.2} className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact us</h3>
            <div className="space-y-4">
              <p>Phone: +(234) 903-565-5539</p>
              <p>Email: info@extensionafrica.com</p>
              <div className="space-y-2">
                <p>G24, Abdullahi Bayero Road, Railway</p>
                <p>Quarters, Kano — Nigeria</p>
              </div>
              <div className="space-y-2">
                <p>No 3A, Ishaya Shekari Crescent,</p>
                <p>Gwarinpa, Abuja - Nigeria</p>
              </div>
            </div>
          </CustomAOS>

          {/* Right Section */}
          <CustomAOS variant="slideInRight" delay={0.4} className="space-y-6">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white">
                About Us
              </Link>
              <Link href="/" className="block text-gray-300 hover:text-white">
                Contact Us
              </Link>
              <Link href="/" className="block text-gray-300 hover:text-white">
                Product
              </Link>
              <Link href="/" className="block text-gray-300 hover:text-white">
                Academy
              </Link>
              <Link href="/" className="block text-gray-300 hover:text-white">
                Terms of Use
              </Link>
              <Link href="/" className="block text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
            </nav>
          </CustomAOS>
        </div>

        {/* Bottom Section */}
        <CustomAOS variant="fadeInUp" delay={0.6}>
          <div className="mt-16 pt-8 border-t border-white flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 All Right Reserved by Extension Africa
            </p>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white">
                Terms of Use
              </Link>
            </div>
          </div>
        </CustomAOS>
      </div>
    </footer>
  );
}
