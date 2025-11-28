import React from "react";
import {SiAngular, SiDotnet, SiReact, SiSpringboot} from "react-icons/si";

const Skills: React.FC = () => {

    const skills = [
        {
            title: "Spring Boot",
            description: "Build production-ready Java apps fast with auto-configuration, embedded servers, and zero XML hassle. Love it and want to go deeper professionally.",
            icon: SiSpringboot,
            hover: "bg-green-700"
        },
        {
            title: "React",
            description: "Component-based UI library with hooks for state & efficient rendering. Built tons of React frontends in production.",
            icon: SiReact,
            hover: "bg-blue-400"
        },
        {
            title: "Angular",
            description: "Full-featured TypeScript framework with dependency injection, two-way binding & modules. Took complex apps from scratch to deployment.",
            icon: SiAngular,
            hover: "bg-red-700"
        },
        {
            title: "Dotnet",
            description: "Cross-platform powerhouse for web, cloud & desktop apps. Led a major ASP.NET Core project end-to-end.",
            icon: SiDotnet,
            hover: "bg-purple-700"
        }
    ];

    return (
        <div className="p-10 py-40">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Technologies I Work With
                </h2>
            </div>
            <div className="flex  justify-center gap-4">
                {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-center  p-4 border border-white rounded ${skill.hover} w-1/2`}
                        >
                            <Icon className="w-12 h-12 mb-3" />
                            <span className="text-sm font-medium">{skill.title}</span>
                            <p className="text-sm font-medium py-5">{skill.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Skills;