'use client'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
    ContactIcon,
    HomeIcon,
    InfoIcon,
} from "lucide-react";
import Skills from "@/components/Skills";
import Welcome from "@/components/Welcome";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import {Button} from "@/components/ui/button";
import {FiGithub, FiLinkedin} from "react-icons/fi";

export default function Home() {

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const navigationItems = [
        {
            title : "Home",
            key : "home-key",
            icon: <HomeIcon />,
            section : "home"
        },
        {
            title : "Skills",
            key : "skills-key",
            icon: <InfoIcon />,
            section: "skills"
        },
        {
            title : "Experience",
            key : "experience-key",
            icon: <ContactIcon />,
            section: "experience"
        },
        {
            title: "Projects",
            key : "projects-key",
            icon: <InfoIcon />,
            section: "projects"
        }
    ]

    const socialsArray = [
        {
            title : "",
            key : "github-key",
            icon: <FiGithub />,
            link: "https://github.com/Caesar-final"
        },
        {
            title : "",
            key : "linkedin-key",
            icon: <FiLinkedin />,
            link: "https://www.linkedin.com/in/joao-victor-cesa"
        }
    ]

    return (
        <div className="home h-full bg-zinc-950 text-white">
        <header className="sticky top-0 z-50 w-full border-b border-zinc-800 backdrop-blur bg-zinc-950/80">
            <div className="container mx-auto px-4 py-4">
                <NavigationMenu>
                <NavigationMenuList className="flex flex-wrap justify-center gap-2 md:gap-4">
                    {navigationItems.map((item) => (
                    <NavigationMenuItem key={item.key}>
                        <Button
                        variant="ghost"
                        onClick={() => scrollToSection(item.section)}
                        className="text-white  hover:text-black hover:bg-white hover:cursor-pointer flex items-center
                         gap-2 px-3 py-2 text-sm md:text-base"
                        >
                        {item.icon}
                        <span className="hidden sm:inline">{item.title}</span>
                        </Button>
                    </NavigationMenuItem>
                    ))}
                    {socialsArray.map((item) => (
                    <NavigationMenuItem key={item.key}>
                        <Button variant="ghost" asChild className="text-white hover:text-black hover:bg-white">
                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.icon}
                        </Link>
                        </Button>
                    </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
            <main>
                <section id="home" className={"min-h-screen py-20"}>
                    <Welcome></Welcome>
                </section>
                <section id="skills" className={"min-h-screen py-20"}>
                    <Skills></Skills>
                </section>
                <section id="experience" className={"min-h-screen py-20"}>
                    <Experience></Experience>
                </section>
                <section id="projects" className={"min-h-screen py-20"}>
                    <Projects></Projects>
                </section>
            </main>
        </div>
    );



}
