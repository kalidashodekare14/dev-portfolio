"use client";

import { Check, MapPin } from "lucide-react";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="sr text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">My professional journey and work history.</p>
        </div>

        <div className="flex flex-col gap-6">
          {experience.map((entry) => (
            <div
              key={entry.title}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 ease-out relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 ease-out"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
                {/* Left Column */}
                <div className="lg:col-span-4 space-y-4 lg:border-r lg:border-border lg:pr-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{entry.title}</h3>
                    <p className="text-primary font-medium text-sm mt-1">{entry.company}</p>
                  </div>
                  <div className="space-y-1.5 text-xs text-foreground/60">
                    {entry.location && (
                      <p className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-primary/60" />
                        {entry.location}
                      </p>
                    )}
                    <p className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 flex items-center justify-center text-primary/60 text-xs">📅</span>
                      {entry.period}
                    </p>
                  </div>
                  {entry.tags && entry.tags.length > 0 && (
                    <div className="pt-2">
                      <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 rounded-md bg-background border border-border text-xs text-foreground/70">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="lg:col-span-8">
                  {Array.isArray(entry.description) ? (
                    <ul className="space-y-3 text-sm text-foreground/70 leading-relaxed">
                      {entry.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-foreground/70 leading-relaxed">{entry.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
