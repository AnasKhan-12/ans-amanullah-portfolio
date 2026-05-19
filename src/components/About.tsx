"use client";

import React from "react";
import { motion } from "framer-motion";
import userData from "@/data/users.json";
import { CheckCircle, Download } from "lucide-react";

const About = () => {
  const { about } = userData.profile;

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col py-24 scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className=" mx-auto"
        >
          {/* Content */}
          <div
            className="flex flex-col items-center flex-1 text-center p-6 md:p-10 rounded-3xl border relative overflow-hidden"
            style={{
              background: "var(--surface)",
              borderColor: "rgba(255,255,255,0.05)",
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
            }}
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-50" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-50" />

            {/* Section label */}
            <div className="flex items-center gap-3 mb-6 justify-center">
              <span className="h-px w-8 bg-white/20" />
              <span
                className="text-xs font-medium uppercase tracking-[0.18em]"
                style={{ color: "var(--text-muted)" }}
              >
                About Me
              </span>
              <span className="h-px w-8 bg-white/20" />
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-white mb-5 leading-tight">
              {about.heading}
            </h2>

            <div className="space-y-3 mb-6 leading-[26px] text-sm md:text-base max-w-2xl mx-auto text-white/80">
              {about.description.map((paragraph, index) => (
                <p key={index} className="text-sm md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 w-full justify-items-center md:justify-items-center max-w-3xl mx-auto">
              {[
                "Premium Quality",
                "24/7 Support",
                "Agile Development",
                "User-Centric",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle size={16} className="text-white flex-shrink-0" />
                  <span className="text-sm text-white/90 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <button
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-1 mb-6"
              style={{
                background: "var(--surface-2)",
                border: "1px solid rgba(145,94,255,0.3)",
                boxShadow: "0 0 15px rgba(145,94,255,0.2)",
              }}
            >
              <Download
                size={18}
                className="group-hover:text-accent transition-colors"
              />
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
