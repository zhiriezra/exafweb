"use client";
import CustomAOS from "@/components/aos";
import Link from "next/link";

export default function DemoSection() {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <CustomAOS variant="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Agricultural Extension Services?
            </h2>
          </CustomAOS>

          <CustomAOS variant="fade-up" delay={0.2}>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience how our digital solutions can revolutionize your
              agricultural extension services. Schedule a personalized demo
              today.
            </p>
          </CustomAOS>

          <CustomAOS variant="fade-up" delay={0.4}>
            <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.extensionafrica.com/zhiri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#1F6306] cursor-pointer hover:bg-[#1F6306]/90 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
                  Request Demo
                </button>
              </Link>
              <Link
                href={"https://youtu.be/OwfFvauzwjE"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border-2 border-[#1F6306] cursor-pointer text-[#1F6306] hover:bg-[#1F6306] hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                  Watch Video
                </button>
              </Link>
            </div>
          </CustomAOS>
        </div>
      </div>
    </section>
  );
}
