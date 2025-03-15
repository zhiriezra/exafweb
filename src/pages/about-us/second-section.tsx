"use client";

import CustomAOS from "@/components/aos";

export default function SecondSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <CustomAOS variant="fadeInUp" duration={0.7}>
          <div className="py-16 text-center space-y-8">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-[#008000] max-w-5xl mx-auto leading-tight">
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                We Are A People Business,
              </span>
              <br />
              <span className="text-[#008000]">Connecting Farmers.</span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Extension Africa is on a mission to create a reliable agribusiness extension system for African farmers. 
              We believe in empowering communities through sustainable agricultural practices.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <div className="px-6 py-4 bg-white rounded-lg shadow-md">
                <h3 className="font-bold text-2xl text-green-700">1000+</h3>
                <p className="text-gray-600">Farmers Connected</p>
              </div>
              <div className="px-6 py-4 bg-white rounded-lg shadow-md">
                <h3 className="font-bold text-2xl text-green-700">20+</h3>
                <p className="text-gray-600">African Countries</p>
              </div>
              <div className="px-6 py-4 bg-white rounded-lg shadow-md">
                <h3 className="font-bold text-2xl text-green-700">95%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </CustomAOS>
      </div>
    </section>
  );
}
