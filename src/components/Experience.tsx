import Image from "next/image";
import Logo from "../../public/job_1.jpg"
import React from "react";
const Experience = () => {
    return (
    <div className="p-10 py-40">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                My Previous Work Experience
            </h2>
            <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
                Get in touch, I'm sure I can contribute to your company or product
            </p>
        </div>
        <section className="grid grid-cols-4 gap-8 py-5">
            <div className="col-span-1">
                <Image src={Logo} alt={"Logo here"} className="rounded-2xl" height={400} width={400} />
            </div>
            <div className="col-span-3">
                <div className="text-5xl py-5">
                    Systems Developer
                </div>
                <div className="text-3xl py-4">
                    Unimed Anápolis – Anápolis, GO, Brazil March 2023 – November 2025
                </div>
                <div className="py-5">
                    <ul className="list-disc ml-6">
                        <li className="text-xl/10">
                            Designed and developed complex business reports using advanced SQL queries and database optimization techniques.
                        </li>
                        <li className="text-xl/10">
                            Built and maintained internal web applications with modern front-end stacks: React + TypeScript, Angular, and C#/.NET.
                        </li>
                        <li className="text-xl/10">
                            Wrote and maintained comprehensive automated end-to-end tests using Cypress, ensuring high reliability of critical internal tools.
                        </li>
                        <li className="text-xl/10">
                            Collaborated closely with cross-functional teams to deliver user-focused features and improve system performance.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Experience