'use client'
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
    CodeIcon,
    ContactIcon,
    HomeIcon,
    InfoIcon
} from "lucide-react";
import Skills from "@/components/Skills";
import Welcome from "@/components/Welcome";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

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
            icon: <HomeIcon />,
            section : "home"
        },
        {
            title : "Skills",
            icon: <InfoIcon />,
            section: "skills"
        },
        {
            title : "Experience",
            icon: <ContactIcon />,
            section: "experience"
        },
        {
            title: "Projects",
            icon: <InfoIcon />,
            section: "projects"
        },
        {
            title : "Contacts",
            section: "contacts"
        },
        {
            title : "Github",
            icon: <CodeIcon />,
            link: "https://github.com/Caesar-final"
        }
    ]

    return (
        <div className="home h-full bg-zinc-950 text-white">
            <header className="sticky top-0 z-50 w-full backdrop-blur px-4 md:px-6 [&_*]:no-underline">
            <NavigationMenu>
                <NavigationMenuList className="p-2">
                    {navigationItems.map((item) => {
                        return (
                            <NavigationMenuItem key={item.title}>
                                <button
                                    onClick={() => item.section && scrollToSection(item.section)}
                                    className={"hover:bg-zinc-100 hover:cursor-pointer hover:text-black rounded p-2 m-2"}
                                >
                                    {item.link ? <Link href={item.link ?? ""} target="_blank">{item.title}</Link> : item.title}
                                </button>
                            </NavigationMenuItem>
                            )
                    })}
                </NavigationMenuList>

            </NavigationMenu>
            </header>
            <main>
                <section id={"home"} className={"min-h-screen py-20"}>
                    <Welcome></Welcome>
                </section>
                <section id={"skills"} className={"min-h-screen py-20"}>
                    <Skills></Skills>
                </section>
                <section id={"experience"} className={"min-h-screen py-20"}>
                    <Experience></Experience>
                </section>
                <section id={"projects"} className={"min-h-screen py-20"}>
                    <Projects></Projects>
                </section>
            </main>
        </div>
    );



}
