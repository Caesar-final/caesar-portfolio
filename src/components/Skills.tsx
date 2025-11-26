import React from "react";
import {SiAngular, SiDotnet, SiReact, SiSpringboot} from "react-icons/si";

const Skills: React.FC<{}> = () => {

    const skills = [
        {
            title: "Spring Boot",
            description: "Spring Boot is a framework for creating stand-alone, production-grade Spring-based applications with minimal configuration. It provides auto-configuration for Spring and third-party libraries, embedded servers like Tomcat, Jetty, or Undertow, opinionated starter dependencies, and production-ready features such as metrics, health checks, and externalized configuration, without requiring code generation or XML. While I'm always learning, I believe this is something special and I want to work professionally with.",
            icon: SiSpringboot,
            hover : "bg-green-700"
        },
        {
            title: "React",
            description: "React is a JavaScript library for building user interfaces using components, which are reusable pieces of UI with their own logic and appearance. It enables state management through hooks like useState to update and share data between components, and renders UI changes efficiently by re-running component functions when state or props change. I've worked with many React frontends in my previous jobs.",
            icon: SiReact,
            hover : "bg-blue-400"
        },
        {
            title: "Angular",
            description: "Angular is a platform for building web applications using TypeScript, featuring a component-based architecture where applications are composed of reusable components with templates, metadata, and logic. It supports dependency injection for services, data binding for syncing UI with data models, and modular organization through NgModules to manage application structure and features. I've worked with complex Angular applications from scratch all the way to deployment",
            icon: SiAngular,
            hover : "bg-red-700"
        },
        {
            title: ".NET",
            description: ".NET is a free, open-source, cross-platform framework for building modern applications and cloud services, supporting development on macOS, Windows, and Linux with multiple programming languages. It includes a runtime for executing applications and a comprehensive library of components to facilitate web, mobile, desktop, and cloud-native app development. I've worked with ASP NET Core during a big project I was responsible for in my previous job.",
            icon: SiDotnet,
            hover : "bg-purple-700"
        }
    ];

    return (
        <div className="p-10 py-40">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Technologies I Work With
                </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 p-1">
                {skills.map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-center p-4 border border-white rounded ${skill.hover}`}
                        >
                            <Icon className="w-12 h-12 mb-3" />
                            <span className="text-sm font-medium">{skill.title}</span>
                            <p className="text-sm font-medium">{skill.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Skills;