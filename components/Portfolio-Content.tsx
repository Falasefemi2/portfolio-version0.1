/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function PortfolioContemt() {

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center">
            <motion.div
                className="text-center"
                initial="initial"
                animate="animate"
                variants={fadeInUp}
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h2>
                <p className="text-xl md:text-2xl mb-8">
                    I'm a frontend engineer with a passion for crafting seamless digital experiences. Currently expanding my skill set by exploring the worlds of Python and Golang to deepen my versatility and problem-solving approach.
                </p>
                <Button asChild>
                    <a href="#contact">Get in Touch</a>
                </Button>
            </motion.div>
        </section>

    )
}