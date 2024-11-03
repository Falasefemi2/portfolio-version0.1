/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'


export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold">Falase Femi</h1>
          </motion.div>
          <div className="hidden md:flex space-x-4">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/95 backdrop-blur-sm"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h2>
            <p className="text-xl md:text-2xl mb-8">I'm a web developer passionate about creating amazing experiences.</p>
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </section>

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
              I'm a passionate web developer with experience in React, Next.js, and modern web technologies. I love creating responsive and user-friendly websites that solve real-world problems.
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

        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              My Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <motion.div
                  key={project}
                  className="bg-card rounded-lg shadow-lg overflow-hidden"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <img
                    src={`/placeholder.svg?height=200&width=400`}
                    alt={`Project ${project}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                    <p className="text-muted-foreground mb-4">
                      A brief description of project {project} and its key features.
                    </p>
                    <Button variant="outline" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
          <p className="text-muted-foreground mb-4 md:mb-0">&copy; 2024 Your Name. All rights reserved.</p>
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