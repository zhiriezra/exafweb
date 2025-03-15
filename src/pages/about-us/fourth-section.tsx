"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SustainableFarmingSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-2xl">
              <Image
                src="/african-farmers.avif"
                alt="Sustainable Farming"
                width={1200}
                height={900}
                className="object-cover rounded-lg shadow-xl"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                It all started with a passion to make farming a sustainable & inclusive business
            </h2>
            <p className="text-lg text-gray-600">
            This creates a paradigm shift towards Agribusiness Extension through an activity-based service delivery that ensures agents earn higher as the size of their farmers and services offered to these farmers increases.
            </p>
            <p className="text-lg text-gray-600">
            We call our extension agents “Farmer Business Associates” for a reason! Our associates are selected from the farming communities, are tech-driven, trained on the best agronomic and business practices, and have a deep understanding of the local context.
            </p>

            <p className="text-lg text-gray-600">
                Today, we are known with a reliable extension system in the industry.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
