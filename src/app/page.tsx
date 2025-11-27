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
            <header className="sticky top-0 z-50 w-full backdrop-blur px-4 md:px-6 [&_*]:no-underline">
            <NavigationMenu className={""}>
                <NavigationMenuList className="p-2">

                        {navigationItems.map((item) => {
                            return (
                                <NavigationMenuItem key={item.key}>
                                     <Button
                                        onClick={() => item.section && scrollToSection(item.section)}
                                        className={"hover:bg-zinc-100 hover:cursor-pointer bg-transparent hover:text-black rounded p-2 m-2"}
                                    >
                                        {item.title} {item.icon}
                                    </Button>
                                </NavigationMenuItem>
                                )
                        })}


                        {socialsArray.map((item) => {
                                return (<NavigationMenuItem key={item.key}>
                                            {item.title ?
                                                (<Button
                                                    className={"hover:bg-zinc-100 hover:cursor-pointer bg-transparent hover:text-black rounded p-2 m-2"}>
                                                    {item.link ? <Link href={item.link ?? ""} target="_blank">{item.title}</Link> : item.title} {item.icon}
                                                </Button>) :
                                                (<Button className={"hover:bg-zinc-100 hover:cursor-pointer bg-transparent hover:text-black rounded p-2 m-2"}>
                                                    {item.link && <Link href={item.link ?? ""} target="_blank">{item.icon}</Link>}
                                                </Button>)
                                            }
                                        </NavigationMenuItem>)
                            })
                        }

                </NavigationMenuList>
            </NavigationMenu>
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
