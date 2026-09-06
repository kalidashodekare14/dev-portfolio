"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const socialLinks = [
  { icon: <FaLinkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://linkedin.com/in/kalidash", color: "#0A66C2" },
  { icon: <SiGithub className="w-5 h-5" />, label: "GitHub", url: "https://github.com/kalidash", color: "currentColor" },
  { icon: <FaWhatsapp className="w-5 h-5" />, label: "WhatsApp", url: "https://wa.me/+8801728659562", color: "#25D366" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", url: "mailto:kalidashodekare14@gmail.com", color: "#EA4335" },
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <div className="min-w-0">
                  <span className="text-foreground/60 text-xs">Phone</span>
                  <p className="text-foreground text-sm font-medium truncate">+8801776046270</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <div className="min-w-0">
                  <span className="text-foreground/60 text-xs">Email</span>
                  <p className="text-foreground text-sm font-medium truncate">kalidashodekare14@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <div>
                <span className="text-foreground/60 text-xs">Location</span>
                <p className="text-foreground text-sm font-medium">Dinajpur, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="sr sr-delay-3 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-card border border-border hover:border-primary/50 hover:-translate-y-0.5 transition-all text-foreground/70 hover:text-foreground"
                style={{ color: link.color === "currentColor" ? undefined : link.color }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="sr sr-right sr-scale flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-primary/15 blur-xl"></div>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-primary/30 bg-card">
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
