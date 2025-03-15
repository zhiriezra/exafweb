"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Teams() {

    return (
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-6">
                        Meet Our Team
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Dedicated professionals working together to transform agricultural extension services across Africa
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {[
                        {
                            name: "Tajudeen Yahaya",
                            position: "Chief Executive Officer",
                            image: "/team/taj.avif"
                        },
                        {
                            name: "Abdulsamad Yahaya",
                            position: "Chief Operations Officer",
                            image: "/team/samad.avif"
                        },
                        ,
                        {
                            name: "Fatima Isah",
                            position: "Human Resource",
                            image: "/team/fatima.avif"
                        },
                        {
                            name: "Nura Lawal",
                            position: "Finance Lead",
                            image: "/team/nura.avif"
                        },
                        {
                            name: "Darma Nasiru",
                            position: "Operations Lead",
                            image: "/team/darma.avif"
                        },
                        {
                            name: "Kolo Ezra",
                            position: "Technology Lead",
                            image: "/team/ezra.avif"
                        },
                        {
                            name: "Hadiza Bala",
                            position: "Field Operations Lead",
                            image: "/team/hadiza.avif"
                        },
                        {
                            name: "Nazeer Ahmad",
                            position: "Rural Structure Lead",
                            image: "/team/nazeer.avif"
                        },
                        {
                            name: "Alex Ochigbo",
                            position: "Research Lead",
                            image: "/team/alex1.avif"
                        },
                        {
                            name: "Ifeoma Okoro",
                            position: "Business Development Officer",
                            image: "/team/ify.avif"
                        },
                        {
                            name: "Taofiqah Ajetunmobi",
                            position: "Academy Officer",
                            image: "/team/taofiqah.avif"
                        },
                        // {
                        //     name: "Mubarakah Mohammed",
                        //     position: "Marketing Director",
                        //     image: "/team/mubarakah.avif"
                        // }
                    ].map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-green-100">
                                    <Image
                                        src={member?.image || ""}
                                        alt={member?.name || ""}
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                {member?.name}
                            </h3>
                            <p className="text-green-600 text-sm">
                                {member?.position}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    ) 
}
