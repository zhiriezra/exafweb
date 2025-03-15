"use client";

import CustomAOS from "@/components/aos";
import Image from "next/image";
export default function ThirdSection() {
    return (
        <CustomAOS variant="fadeInUp" duration={0.7}>
            <section className="max-w-7xl mx-auto p-4 md:p-8">
                <div className="bg-gradient-to-br from-[#f5f8f5] to-green-100 rounded-[40px] p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                        <div className="flex-1 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                                    Our &quot;Why&quot;
                                </h2>
                            </div>
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                                Africa stands at the forefront of a global agricultural revolution, holding the key to feeding not just itself, but the world. Yet, we face a critical challenge: the untapped potential of our rural farmers, hindered by limited access to modern innovations and efficient farming practices.
                            </p>
                            <div className="bg-white/50 p-6 rounded-2xl border border-green-100">
                                <p className="text-green-800 text-xl md:text-2xl font-semibold leading-relaxed italic">
                                    &quot;Building bridges between rural farmers and global markets, we&apos;re creating a future where agricultural innovation reaches every corner of Africa.&quot;
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 md:w-2/5 transform hover:scale-105 transition-transform duration-300">
                            <div className="rounded-3xl overflow-hidden shadow-lg">
                                <Image
                                    src="/woman-farmer.avif"
                                    alt="Happy farmer giving thumbs up"
                                    width={400}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </CustomAOS>
    );
}
