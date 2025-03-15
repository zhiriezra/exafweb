"use client";

import CustomAOS from "@/components/aos";
import Image from "next/image";

export default function SecondSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <CustomAOS variant="fadeInUp" duration={0.7}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                Welcome to the future of extension services in africa!
              </h1>
            </CustomAOS>

            <CustomAOS variant="fadeInUp" duration={0.7} delay={0.2}>
              <p className="text-lg text-gray-600 max-w-xl">
                At Extension Africa, we are dedicated to building a dependable
                agribusiness extension system that empowers African farmers and
                global agribusinesses.
              </p>
            </CustomAOS>

            <CustomAOS variant="fadeInUp" duration={0.7} delay={0.4}>
              <p className="text-lg text-gray-600 max-w-xl">
                We are building a world where farm agents, anywhere in Africa
                are just a click away.
              </p>
            </CustomAOS>
          </div>

          {/* Image */}
          <CustomAOS
            variant="slideInRight"
            duration={0.8}
            delay={0.3}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full transition-transform duration-300 hover:scale-110">
              <Image
                src="/laptop.png"
                alt="Extension Africa Platform"
                width={1200}
                height={800}
                className="object-contain"
                priority
              />
            </div>
          </CustomAOS>
        </div>
      </div>
    </section>
  );
}
