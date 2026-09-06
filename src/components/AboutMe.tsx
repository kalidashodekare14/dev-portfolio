"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Link2, GitFork } from "lucide-react";

const socialLinks = [
  { icon: <Link2 className="w-4 h-4" />, label: "LinkedIn", url: "https://linkedin.com/in/kalidash" },
  { icon: <GitFork className="w-4 h-4" />, label: "GitHub", url: "https://github.com/kalidash" },
];

export default function AboutMe() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="sr sr-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">About Me</h2>
            <p className="text-primary font-semibold text-lg">Full Stack Developer</p>
          </div>

          <p className="sr sr-delay-1 text-foreground/60 leading-relaxed">
            I am a dedicated Full Stack Developer with a passion for creating efficient,
            scalable, and user-friendly web applications. I bring ideas to life from concept to deployment.
          </p>

          <div className="sr sr-delay-2 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border flex-1">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <span className="text-foreground/60 text-xs">Phone</span>
                  <p className="text-foreground text-sm font-medium">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border flex-1">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <span className="text-foreground/60 text-xs">Email</span>
                  <p className="text-foreground text-sm font-medium">kalidash@example.com</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <div>
                <span className="text-foreground/60 text-xs">Location</span>
                <p className="text-foreground text-sm font-medium">India</p>
              </div>
            </div>
          </div>

          <div className="sr sr-delay-3 flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-foreground/70 hover:text-foreground hover:border-primary/50 hover:-translate-y-0.5 transition-all text-sm"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="sr sr-right sr-scale flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-primary/15 blur-xl"></div>
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-primary/30 bg-card">
              <Image
                src="/my_photo.jpg"
                alt="My Photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
