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
        <div className="container mx-auto px-6 py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Technologies I Work With
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Full-stack engineer passionate about clean architecture and delightful UX
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className={`group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center hover:border-zinc-600 transition-all duration-300 hover:-translate-y-2 ${skill.hover}/10`}
            >
              <div className={`inline-flex p-4 rounded-2xl ${skill.hover}/20 mb-6`}>
                <Icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
    )
}

export default Skills;