/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from 'framer-motion'


export default function PortfolioAboutMe() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    }
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    About Me
                </motion.h2>
                <motion.p
                    className="text-lg mb-6"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    I'm a dedicated frontend engineer with expertise in React, Next.js, and the latest web technologies. I’m passionate about building responsive, user-centered websites and applications that tackle real-world challenges. With a focus on clean code and seamless user experiences, I strive to create digital solutions that are both intuitive and impactful.
                </motion.p>
                <motion.p
                    className="text-lg"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book.
                </motion.p>
            </div>
        </section>

    )
}