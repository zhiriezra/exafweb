"use client";

import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


import CustomAOS from "@/components/aos";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Saratu Johnson",
    role: "Operations Manager",
    company: "Premier Tropicana",
    image: "/testimonials/1.avif",
    quote: "Extension Africa has transformed how we manage our agricultural operations. The platform's efficiency and reach have significantly improved our productivity."
  },
  {
    id: 2, 
    name: "Samson Gambo",
    role: "Extension Agent",
    company: "Extension Africa",
    image: "/testimonials/2.avif",
    quote: "The digital solutions provided by Extension Africa have made it easier to connect with and support farmers across multiple regions."
  },
  {
    id: 3,
    name: "Hon. Usman Bawa",
    role: "Community Leader",
    company: "Rural Farmers Association",
    image: "/testimonials/3.avif",
    quote: "Thanks to Extension Africa, our farming community now has access to vital agricultural information and market opportunities we never had before."
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CustomAOS variant="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Partners Say
          </h2>
        </CustomAOS>

        <div className="relative">
          <CustomAOS variant="fade-up" delay={0.2}>
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-6">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              <div className="max-w-3xl text-center">
                <FaQuoteLeft className="inline-block text-green-600 mb-4" size={24} />
                <p className="text-xl text-gray-600 mb-6">
                  {testimonials[currentTestimonial].quote}
                </p>
                <FaQuoteRight className="inline-block text-green-600 mb-6" size={24} />

                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
                >
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors"
                >
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </CustomAOS>
        </div>
      </div>
    </section>
  );
}

