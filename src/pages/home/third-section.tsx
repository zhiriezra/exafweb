"use client";
import CustomAOS from "@/components/aos";
import { Check } from "lucide-react";
import Image from "next/image";
import type React from "react";

export default function ThirdSection() {
  const developmentServices = [
    { text: "Sustainable Production" },
    { text: "Farmers Marketplace" },
    { text: "Agents Empowerment" },
    { text: "Gender Inclusion" },
  ];

  const enterpriseServices = [
    { text: "Effective Rural Marketing" },
    { text: "Last-Mile Reach" },
    { text: "Last-Mile Visibility" },
    { text: "Market Insights" },
  ];

  const governmentServices = [
    { text: "Out-grower Support" },
    { text: "Intervention Monitoring" },
    { text: "Policy Alignment" },
    { text: "Strengthening" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-200 z-0" />

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Africa Network Visualization */}
            <CustomAOS variant="zoomIn" className="flex justify-center">
              <div className="relative w-full max-w-[500px]">
                <Image
                  src="/africa-logo.gif"
                  alt="Extension Africa Platform"
                  width={800}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
            </CustomAOS>

            {/* Right Column - Text Content */}
            <div className="space-y-6">
              <CustomAOS variant="fadeInUp">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                  We combine people & technology
                </h1>
              </CustomAOS>

              <CustomAOS variant="fadeInUp" delay={0.2}>
                <p className="text-gray-600 text-lg">
                  Connecting with a reliable network of trained field agents can
                  greatly enhance your market reach and brand loyalty.
                </p>
              </CustomAOS>

              <CustomAOS variant="fadeInUp" delay={0.4}>
                <p className="text-gray-600 text-lg">
                  Achieve explosive growth with our proprietary technology and a
                  network of over 3,000 trained field agents and 600,000+
                  farmers. We are dedicated to expanding your rural reach and
                  maximizing your investment.
                </p>
              </CustomAOS>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center max-md:flex-col gap-10">
            <ServiceCard
              title="For Development"
              items={developmentServices}
              delay={0}
            />

            <ServiceCard
              title="For Enterprise"
              items={enterpriseServices}
              delay={0.2}
            />

            <ServiceCard
              title="For Government"
              items={governmentServices}
              delay={0.4}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

interface ServiceItem {
  text: string;
}

interface ServiceCardProps {
  title: string;
  items: ServiceItem[];
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, items, delay }) => {
  return (
    <CustomAOS
      variant="fadeInUp"
      delay={delay}
      className="bg-white rounded-2xl shadow-lg p-8 w-fit max-sm:w-full flex flex-col h-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl border border-gray-100"
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-100 pb-4">{title}</h3>

      <div className="space-y-4 flex-grow">
        {items.map((item, index) => (
          <div key={index} className="flex items-start group">
            <div className="bg-green-100 rounded-full p-1.5 mr-3 flex-shrink-0 group-hover:bg-green-200 transition-colors duration-200">
              <Check className="h-5 w-5 text-green-600 group-hover:text-green-700" />
            </div>
            <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <a
          href="#"
          className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group"
        >
          Learn more
          <svg 
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </CustomAOS>
  );
};
