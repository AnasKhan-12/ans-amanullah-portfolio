"use client";

import React from "react";
import { motion } from "framer-motion";
import userData from "@/data/users.json";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  LucideIcon,
} from "lucide-react";

const Contact = () => {
  const { contact } = userData;

  const socialIcons: { [key: string]: LucideIcon } = {
    GitHub: Github,
    LinkedIn: Linkedin,
  };

  const activeSocials = contact.socials.filter((s) => s.active);

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    { icon: MapPin, label: "Location", value: contact.location, href: null },
  ];

  return (
    <section id="contact" className="py-10">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-medium uppercase tracking-[0.18em] mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: "var(--text-muted)",
              border: "1px solid rgba(255,255,255,0.09)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Contact Me
          </h2>
          <div
            className="w-10 h-px mx-auto"
            style={{ background: "rgba(255,255,255,0.15)" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Let&apos;s Talk About Your Project
              </h3>
              <p
                className="leading-relaxed text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                I&apos;m always open to discussing web development work or
                partnership opportunities.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon size={16} className="text-white/50" />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider mb-0.5 font-medium"
                      style={{ color: "var(--text-subtle)" }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-white text-sm hover:text-white/70 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div
              className="pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p
                className="text-xs font-medium uppercase tracking-wider mb-4"
                style={{ color: "var(--text-subtle)" }}
              >
                Find Me Online
              </p>
              <div className="flex gap-3">
                {activeSocials.map((social) => {
                  const Icon = socialIcons[social.name];
                  if (!Icon) return null;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/10"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.6)",
                      }}
                      aria-label={social.name}
                    >
                      <Icon size={15} />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl"
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                {["Name", "Email"].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field.toLowerCase()}
                      className="block text-xs font-medium uppercase tracking-wider mb-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {field}
                    </label>
                    <input
                      type={field === "Email" ? "email" : "text"}
                      id={field.toLowerCase()}
                      className="w-full rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-200"
                      placeholder={
                        field === "Email" ? "john@example.com" : "John Doe"
                      }
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.25)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.08)";
                      }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                  placeholder="Project Inquiry"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--foreground)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.25)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition-all duration-200"
                  placeholder="Tell me about your project..."
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--foreground)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.25)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                  }}
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:bg-white/10"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                Send Message
                <Send
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
