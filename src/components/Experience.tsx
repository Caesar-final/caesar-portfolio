import Image from "next/image";
import Logo from "../../public/job_1.jpg"
import React from "react";
// app/components/Experience.tsx
const Experience = () => {
  return (
    <div className="container mx-auto px-6 py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My Professional Journey
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Real-world experience shipping production systems that people rely on
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          <div className="md:col-span-1 flex justify-center md:justify-end">
            <Image
              src={Logo}
              alt="Unimed Anápolis"
              width={400}
              height={400}
              className="rounded-2xl object-cover shadow-2xl border border-zinc-800"
            />
          </div>

          <div className="md:col-span-3 space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">Systems Developer</h3>
              <p className="text-xl  mt-2">
                Unimed Anápolis • Anápolis, GO, Brazil
              </p>
              <p className="text-zinc-400">Mar 2023 – Nov 2025</p>
            </div>

            <ul className="space-y-4 text-zinc-300">
              {[
                "Designed complex business reports with advanced SQL & performance tuning",
                "Built internal web apps using React, Angular, TypeScript, and C#/.NET",
                "Wrote end-to-end tests with Cypress for mission-critical tools",
                "Collaborated with stakeholders to deliver high-impact features"
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className=" mt-1">▹</span>
                  <span className="text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience