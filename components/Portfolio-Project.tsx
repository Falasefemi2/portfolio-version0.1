'use client'

import { motion, Variant } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import aiplanner from "../public/aiplanner.png"
import eazetrades from "../public/eazetrades.png"
import fitness from "../public/fitness.png"
import game from "../public/gamehive.png"
import homes from "../public/homes.png"
import uploadmusic from "../public/uploadmusic.png"


interface Project {
    id: number;
    image: StaticImageData;
    title: string;
    description: string;
    links: string;
}

const fadeInUp: Record<string, Variant> = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
}

export default function PortfolioProject() {


    const projects: Project[] = [
        { id: 1, image: aiplanner, title: "AI Planner", description: "A brief description of AI Planner.", links: " https://ai-social-planner-9wbo-do7c38dwk-falase-femis-projects.vercel.app/sign-in?redirect_url=https%3A%2F%2Fai-social-planner-9wbo-do7c38dwk-falase-femis-projects.vercel.app%2F" },
        { id: 2, image: eazetrades, title: "Eaze Trades", description: "A brief description of Eaze Trades.", links: "https://eazetrades.vercel.app/" },
        { id: 3, image: fitness, title: "Fitness Planner", description: "A brief description of Fitness Planner.", links: "https://fitness-planner-pi.vercel.app/" },
        { id: 4, image: game, title: "Game Hive", description: "A brief description of Game Hive.", links: "https://gamehive-sooty.vercel.app/" },
        { id: 5, image: homes, title: "Homes", description: "A brief description of Homes.", links: "https://homes-silk.vercel.app/" },
        { id: 6, image: uploadmusic, title: "Upload Music", description: "A brief description of Upload Music.", links: "https://uploadmusic.vercel.app/" },
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-8 text-center"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    My Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <CardDemo key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>


    )
}

interface CardDemoProps {
    project: Project;
}

function CardDemo({ project }: CardDemoProps) {
    return (
        <motion.div
            className="w-full group/card"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
        >
            <div
                className={cn(
                    "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
                    "bg-cover bg-center bg-no-repeat"
                )}
                style={{ backgroundImage: `url(${project.image.src})` }}

            >
                <div className="absolute inset-0 bg-black bg-opacity-30 transition duration-300 group-hover/card:bg-opacity-50"></div>
                <div className="flex flex-row items-center space-x-4 z-10">
                    <div className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                        <Image
                            height={40}
                            width={40}
                            alt="Project Icon"
                            src={project.image}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-normal text-base text-white relative z-10">
                            {project.title}
                        </p>

                    </div>
                </div>
                <div className="text content z-10 text-shadow">
                    <h1 className="font-bold text-xl md:text-2xl text-white mb-2">
                        {project.title}
                    </h1>
                    <p className="font-normal text-sm text-gray-200 mb-4">
                        {project.description}
                    </p>
                    <Button
                        variant="outline"
                        asChild
                        className="bg-white bg-opacity-20 hover:bg-opacity-40 text-white border-white  transition-all duration-300"
                    >
                        <Link href={project.links}>View Project</Link>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
