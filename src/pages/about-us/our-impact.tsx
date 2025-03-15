"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurImpact() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-[#1F6306] bg-clip-text text-transparent mb-6">
            Our Impact in Numbers
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Through our innovative agricultural extension services, we&apos;re
            transforming rural farming communities across Africa
          </p>
        </motion.div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              number: "800,000+",
              label: "Farmers Reached",
              description: "Direct impact on farming households",
            },
            {
              number: "35%",
              label: "Average Yield Increase",
              description: "Through improved farming practices",
            },
            {
              number: "4,300+",
              label: "Extension Agents",
              description: "Trained and deployed",
            },
            {
              number: "2+",
              label: "African Countries",
              description: "Growing presence across the continent",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                {stat.number}
              </h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </h4>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Transforming Lives Through Agricultural Innovation
              </h2>
              <p className="text-gray-600 mb-6">
                Our extension services have revolutionized farming practices,
                leading to improved yields, better market access, and increased
                income for farming communities. Through technology and hands-on
                support, we&apos;re building a more sustainable and prosperous
                agricultural sector.
              </p>
              <ul className="space-y-4">
                {[
                  "Sustainable farming practices adoption",
                  "Market linkage improvements",
                  "Technology integration in farming",
                  "Community-based knowledge sharing",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] lg:h-auto">
              <Image
                src="/farmers-tech.avif"
                alt="Impact in African Agriculture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
