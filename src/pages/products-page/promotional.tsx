"use client";

import CustomAOS from "@/components/aos";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PromotionalSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-white to-green-50">
            <CustomAOS variant="fadeInUp" duration={0.7}>
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 space-y-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                                    Leverage Our Technology Solutions
                                </span>
                            </h2>
                            <h3 className="text-2xl md:text-3xl text-gray-700">
                                Ignite Your Input Sales & Produce Supply for Unstoppable Growth
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Transform your agricultural business with our cutting-edge technology platform. Connect directly with farmers, optimize your supply chain, and scale your operations across Africa.
                            </p>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, staggerChildren: 0.2 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <h4 className="text-xl font-semibold text-green-600 mb-3">Input Sales Growth</h4>
                                    <p className="text-gray-600">Expand your market reach and boost sales through our network of verified farmers and distributors.</p>
                                </motion.div>
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <h4 className="text-xl font-semibold text-green-600 mb-3">Supply Chain Optimization</h4>
                                    <p className="text-gray-600">Streamline your procurement process and ensure consistent quality produce supply.</p>
                                </motion.div>
                            </motion.div>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                            >
                                Get Started Today
                            </motion.button>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="relative rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src="/image_fx_.jpg"
                                    alt="Agricultural Technology Solutions"
                                    width={600}
                                    height={700}
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </CustomAOS>
        </section>
    );
}

