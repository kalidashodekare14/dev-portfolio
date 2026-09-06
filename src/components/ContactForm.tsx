"use client";

import { useState, type FormEvent } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const contactInfo = [
  { icon: <Mail className="w-5 h-5 text-primary" />, label: "Email", value: "kalidashodekare14@gmail.com" },
  { icon: <Phone className="w-5 h-5 text-primary" />, label: "Phone", value: "+8801776046270" },
  { icon: <MapPin className="w-5 h-5 text-primary" />, label: "Location", value: "Dinajpur, Bangladesh" },
];

const socialLinks = [
  { icon: <FaLinkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://linkedin.com/in/kalidash", color: "#0A66C2" },
  { icon: <SiGithub className="w-5 h-5" />, label: "GitHub", url: "https://github.com/kalidash", color: "currentColor" },
  { icon: <FaWhatsapp className="w-5 h-5" />, label: "WhatsApp", url: "https://wa.me/+8801728659562", color: "#25D366" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", url: "mailto:kalidashodekare14@gmail.com", color: "#EA4335" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="sr text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Contact Me</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">Have a project in mind? Let&apos;s work together.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="sr sr-left flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <div className="flex flex-col gap-4">
                {contactInfo.map((item, i) => (
                  <div key={item.label} className={`sr sr-left sr-delay-${i + 1} flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 hover:translate-x-2 transition-all cursor-default`}>
                    {item.icon}
                    <div>
                       <span className="text-foreground/60 text-sm">{item.label}</span>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sr sr-delay-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Follow Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-full bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all text-foreground/70 hover:text-foreground" style={{ color: link.color === "currentColor" ? undefined : link.color }}>
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="sr sr-right">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8 rounded-2xl bg-card border border-border">
              <div>
                <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all" />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all" />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea placeholder="Your Message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-5 py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none" />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>
              <button type="submit" disabled={status === "sending"} className="flex items-center justify-center gap-2 w-full px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]">
                <Send className="w-4 h-4" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="flex items-center gap-2 text-green-400 text-sm text-center justify-center">
                  <CheckCircle className="w-4 h-4" /> Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-red-400 text-sm text-center justify-center">
                  <AlertCircle className="w-4 h-4" /> Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
