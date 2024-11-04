/* eslint-disable react/no-unescaped-entities */
'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from 'lucide-react'
import PorfolioHeader from '@/components/Portfolio-Header'
import PortfolioContemt from '@/components/Portfolio-Content'
import PortfolioAboutMe from '@/components/Portfolio-AboutMe'
import PortfolioProject from '@/components/Portfolio-Project'



export default function PortfolioPage() {




  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }




  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <PorfolioHeader />

      {/* Main Content */}
      <main className="pt-20">
        <PortfolioContemt />
        <PortfolioAboutMe />
        <PortfolioProject />
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
            <motion.form
              className="max-w-md mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="mb-4">
                <Input type="text" placeholder="Your Name" required />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Your Email" required />
              </div>
              <div className="mb-4">
                <Textarea placeholder="Your Message" rows={4} required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">&copy; 2024 Falase Femi. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}