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
        {
            id: 1,
            image: aiplanner,
            title: "AI Social Planner",
            description: "An AI-powered tool that helps users customize and schedule personalized social media posts. Perfect for content creators and businesses looking to optimize engagement and streamline their social media strategy.",
            links: " https://ai-social-planner-9wbo-do7c38dwk-falase-femis-projects.vercel.app/sign-in?redirect_url=https%3A%2F%2Fai-social-planner-9wbo-do7c38dwk-falase-femis-projects.vercel.app%2F"
        },
        {
            id: 2,
            image: eazetrades,
            title: "Eaze Trades",
            description: "A marketplace platform where sellers and buyers can connect to trade goods and services seamlessly. Built with Next.js for the frontend and PHP on the backend, Eaze Trades offers a user-friendly interface and a secure environment for online transactions.",
            links: "https://eazetrades.vercel.app/"
        },
        {
            id: 3,
            image: fitness,
            title: "Fitness Planner",
            description: "A personalized fitness tool that generates tailored exercise routines based on user preferences and goals. Built with Next.js and powered by Google Gemini, Fitness Planner helps users stay on track with customized workout plans.",
            links: "https://fitness-planner-pi.vercel.app/"
        },
        {
            id: 4,
            image: game,
            title: "Game Hive",
            description: "A comprehensive gaming platform where users can explore detailed information on a wide variety of games, including game descriptions, genres, and more. Game Hive is the go-to hub for all gaming enthusiasts looking to discover and learn about their favorite titles.",
            links: "https://gamehive-sooty.vercel.app/"
        },
        {
            id: 5,
            image: homes,
            title: "Homes",
            description: "A modern platform for listing and renting homes, providing travelers with unique stays and property owners with a simple way to connect with guests. Discover a variety of accommodations to suit every travel style and need.",
            links: "https://homes-silk.vercel.app/"
        },
        {
            id: 6,
            image: uploadmusic, title: "Upload Music",
            description: "A music-sharing platform that allows users to upload, store, and listen to their favorite tracks. Enjoy a seamless experience as you build a personal collection and stream music from anywhere.",
            links: "https://uploadmusic.vercel.app/"
        },
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
