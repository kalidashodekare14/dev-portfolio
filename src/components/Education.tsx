"use client";

import { GraduationCap, Calendar } from "lucide-react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="sr text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">My academic journey and qualifications.</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50"></div>

          <div className="flex flex-col gap-12">
            {education.map((entry, index) => (
              <div
                key={entry.degree}
                className={`sr sr-delay-${index + 1} relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center gap-6 md:gap-12`}
              >
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shadow-lg shadow-primary/50 hover:scale-125 transition-transform"></div>

                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 inline-block text-left relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-primary text-sm font-medium">{entry.year}</span>
                      </div>
                      <div className={`flex items-center gap-2 mb-1 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{entry.degree}</h3>
                      </div>
                      <p className="text-foreground/50 text-sm mb-3">{entry.institution}</p>
                      <p className="text-foreground/60 text-sm leading-relaxed">{entry.description}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
