import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projects: React.FC<{}> = () => {

    const projectList = [
        {
            title : "OpenDesk",
            description : "Help desk system focused on simplicity and user experience",
            technologies : [
                {
                    styles : "px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded-full",
                    title : "Angular"
                },
                {
                    styles: "px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full",
                    title : "Spring Boot"
                },
                {
                    styles: "px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full",
                    title : "PostgreSQL"
                },
            ],
            link : "https://github.com/Caesar-final/OpenDesk"
        }
    ]

    return (
        <div className="p-10">
            <section id="projects" className="py-20 px-6 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Projects I’m Proud Of
                    </h2>
                    <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
                        Real products and tools I’ve built from scratch — focused on performance, clean code, and delightful user experience.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectList.map((project) => {
                            return (
                                <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300">
                                    <div className="aspect-video relative overflow-hidden">
                                        {/*<Image src="/project1-screenshot.jpg" alt="Project" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />*/}
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-zinc-400 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map((technology) => {
                                                return (
                                                    <span key={technology.title} className={technology.styles}>{technology.title}</span>
                                                )
                                            })}
                                        </div>
                                        <div className="flex gap-4">
                                            {/*<Link href="#" className="text-sm font-medium hover:text-cyan-400 transition">Live Demo →</Link>*/}
                                            <Link href={project.link} target="_blank"
                                                  className="text-sm font-medium text-zinc-500 hover:text-white transition">Source Code</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;