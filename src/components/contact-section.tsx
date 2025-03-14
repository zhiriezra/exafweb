"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import CustomAOS from "./aos";

export default function ContactSection() {
  return (
    <div className=" w-full bg-yellow-400 py-20 overflow-hidden">
      {/* Background Pattern */}

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Section */}
          <CustomAOS variant="slideInLeft" delay={0.2}>
            <div className="flex items-center gap-4">
              <div className="bg-[#1F6306]/90 p-4 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone No:</h3>
                <p className="text-gray-700">+234 903 565 5539</p>
                <p className="text-sm text-gray-600">
                  Mon - Fri : 09.00 to 05.00
                </p>
              </div>
            </div>
          </CustomAOS>

          {/* Email Section */}
          <CustomAOS variant="fadeInUp" delay={0.4}>
            <div className="flex items-center gap-4">
              <div className="bg-[#1F6306]/90 p-4 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Address:</h3>
                <p className="text-gray-700">info@extensionafrica.com</p>
              </div>
            </div>
          </CustomAOS>

          {/* Location Section */}
          <CustomAOS variant="slideInRight" delay={0.6}>
            <div className="flex items-center gap-4">
              <div className="bg-[#1F6306]/90 p-4 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Location:</h3>
                <p className="text-gray-700">
                  No: 3A, Ishaya Shekari Crescent Gwarinpa, Abuja.
                </p>
              </div>
            </div>
          </CustomAOS>
        </div>
      </div>
    </div>
  );
}
