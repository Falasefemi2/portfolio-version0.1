"use client"
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { useState } from 'react'
// import emailjs from '@emailjs/browser'
// import { toast } from "sonner";
import MyForm from "./portfolio-contactform";

export default function PortfolioContact() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    }



    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    Get in Touch
                </motion.h2>
                <motion.div
                    className="max-w-md mx-auto"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <MyForm />
                </motion.div>

            </div>
        </section>
    )
}
