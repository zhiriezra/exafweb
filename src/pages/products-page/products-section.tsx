"use client";

import { useState } from "react";

import CustomAOS from "@/components/aos";
import Image from "next/image";

export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      title: "FarmEx Mobile & SaaS Platform",
      description: "A comprehensive mobile and web platform that connects farmers with extension agents, providing real-time agricultural advisory services and data-driven insights.",
      features: [
        "Real-time communication with agents",
        "Farm management tools",
        "Weather forecasting",
        "Market price information",
        "Crop disease detection"
      ],
      image: "/laptop.avif"
    },
    {
      title: "African Extension Academy", 
      description: "An interactive learning platform designed to educate farmers and extension agents through structured courses, videos, and assessments.",
      features: [
        "Video-based learning",
        "Interactive assessments",
        "Progress tracking",
        "Certification programs",
        "Offline access"
      ],
      image: "/afrexaa.avif"
    },
    {
      title: "Abokin Noma AI Chatbot",
      description: "An intelligent chatbot that provides 24/7 support to farmers, answering questions about farming practices, pest control, and crop management.",
      features: [
        "24/7 instant support",
        "Multi-language support",
        "Smart recommendations",
        "Voice interaction",
        "Integration with main platform"
      ],
      image: "/chatbot.avif"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CustomAOS variant="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Digital Solutions
          </h2>
        </CustomAOS>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <CustomAOS key={index} variant="fade-up" delay={index * 0.2}>
              <div 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                onMouseEnter={() => setActiveProduct(index)}
              >
                <div className="h-48 relative mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <div className={`space-y-2 ${activeProduct === index ? 'block' : 'hidden'}`}>
                  <p className="font-medium text-gray-900 mb-2">Key Features:</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CustomAOS>
          ))}
        </div>
      </div>
    </section>
  );
}
