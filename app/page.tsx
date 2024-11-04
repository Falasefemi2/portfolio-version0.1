/* eslint-disable react/no-unescaped-entities */
'use client'
import { Github, Linkedin, Mail } from 'lucide-react'
import PorfolioHeader from '@/components/Portfolio-Header'
import PortfolioContemt from '@/components/Portfolio-Content'
import PortfolioAboutMe from '@/components/Portfolio-AboutMe'
import PortfolioProject from '@/components/Portfolio-Project'
import PortfolioContact from '@/components/Portfolio-Contact'



export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <PorfolioHeader />

      {/* Main Content */}
      <main className="pt-20">
        <PortfolioContemt />
        <PortfolioAboutMe />
        <PortfolioProject />
        <PortfolioContact />
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