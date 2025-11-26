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

export default function Home() {

    const navigationItems = [
        {
            title : "Home",
            icon: <HomeIcon />,
        },
        {
            title : "Skills",
            icon: <InfoIcon />,
        },
        {
            title : "Experience",
            icon: <ContactIcon />,
        },
        {
            title : "Contacts",
        },
        {
            title: "Projects",
            icon: <InfoIcon />,
        },
        {
            title : "Github",
            icon: <CodeIcon />,
            link: "https://github.com/Caesar-final"
        }
    ]

    return (
        <div className="home h-screen bg-zinc-950 text-white">
            <header className="sticky top-0 z-50 w-full backdrop-blur px-4 md:px-6 [&_*]:no-underline">
            <NavigationMenu>
                <NavigationMenuList className="p-2">
                    {navigationItems.map((item) => {
                        return (
                            <NavigationMenuItem key={item.title}>
                                <button
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
                <Skills></Skills>
            </main>
        </div>
    );



}
