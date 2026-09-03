"use client";

import { User, Mail, Phone, MapPin, Link2, GitFork } from "lucide-react";

const infoItems = [
  { icon: <User className="w-5 h-5" />, label: "Position", value: "Full Stack Developer" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "kalidash@example.com" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 98765 43210" },
  { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "India" },
];

const socialLinks = [
  { icon: <Link2 className="w-4 h-4" />, label: "LinkedIn", url: "https://linkedin.com/in/kalidash" },
  { icon: <GitFork className="w-4 h-4" />, label: "GitHub", url: "https://github.com/kalidash" },
];

export default function AboutMe() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="sr sr-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">About Me</span>
            </h2>
            <p className="text-foreground/60 leading-relaxed">
              I am a dedicated Full Stack Developer with a passion for creating efficient,
              scalable, and user-friendly web applications.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {infoItems.map((item, i) => (
              <div
                key={item.label}
                className={`sr sr-left sr-delay-${i + 1} flex items-center gap-4 p-3 rounded-xl bg-card/50 border border-border hover:border-primary/30 hover:translate-x-2 transition-all cursor-default`}
              >
                <span className="text-primary">{item.icon}</span>
                <div>
                  <span className="text-foreground/50 text-sm">{item.label}</span>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="sr sr-delay-5 flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-foreground/70 hover:text-foreground hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all text-sm"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="sr sr-right sr-scale flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-primary opacity-30 blur-lg group-hover:opacity-50 transition-opacity"></div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-primary opacity-50 blur"></div>
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/50 bg-card">
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-24 h-24 text-foreground/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
