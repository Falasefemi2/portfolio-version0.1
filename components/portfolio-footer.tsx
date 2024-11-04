import { Github, Linkedin, Mail } from 'lucide-react'

export default function PortfolioFooter() {
    return (
        <footer className="bg-muted py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-muted-foreground mb-4 md:mb-0">&copy; 2024 Falase Femi. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="https://github.com/Falasefemi2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={24} />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/falase-femi-91121b227/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={24} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="femifalase228@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail size={24} />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}