"use client";

import { Palette, Server, Database, Plug, Cloud, Rocket } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  "🎨": <Palette className="w-8 h-8 text-primary" />,
  "⚙️": <Server className="w-8 h-8 text-primary" />,
  "🗄️": <Database className="w-8 h-8 text-primary" />,
  "🔌": <Plug className="w-8 h-8 text-primary" />,
  "☁️": <Cloud className="w-8 h-8 text-primary" />,
  "🚀": <Rocket className="w-8 h-8 text-primary" />,
};
;

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="sr text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            I offer a comprehensive range of development services to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group relative p-6 rounded-2xl bg-card border border-border overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-24 h-1 bg-linear-to-r from-transparent via-primary to-transparent transition-all duration-300 ease-out"></div>
              <div className="relative z-10">
                <span className={`mb-4 block origin-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] "group-hover:scale-110"}`}>
                  {iconMap[service.icon] || <span className="text-4xl">{service.icon}</span>}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
