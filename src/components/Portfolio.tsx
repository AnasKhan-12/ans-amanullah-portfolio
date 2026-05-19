"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import userData from "@/data/users.json";
import { ExternalLink, Github } from "lucide-react";

const categoryGradients: { [key: string]: string } = {
  "Machine Learning": "linear-gradient(135deg, #0b1c16 0%, #123324 100%)",
  "AI & LLMs": "linear-gradient(135deg, #150f24 0%, #24132b 100%)",
  "AI & Chatbots": "linear-gradient(135deg, #081628 0%, #10263f 100%)",
};

const Portfolio = () => {
  const { portfolio } = userData;
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(portfolio.map((item) => item.category))),
  ];

  const filteredProjects =
    filter === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === filter);

  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col pb-24 scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-medium uppercase tracking-[0.18em] mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: "var(--text-muted)",
              border: "1px solid rgba(255,255,255,0.09)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            Recent Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            My Portfolio
          </h2>
          <div
            className="w-10 h-px mx-auto"
            style={{ background: "rgba(255,255,255,0.15)" }}
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className="px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200"
              style={
                filter === category
                  ? {
                      background: "rgba(255,255,255,0.1)",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }
                  : {
                      background: "transparent",
                      color: "var(--text-muted)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2  gap-5">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={`${project.title}-${project.category}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* Background */}
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background:
                      categoryGradients[project.category] ||
                      "linear-gradient(135deg, #111118, #15151e)",
                  }}
                />

                {/* Project initial */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold opacity-[0.06] text-white select-none">
                  {project.title[0]}
                </div>

                {/* Category pill */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(10,10,15,0.75)",
                      color: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-5 text-center"
                  style={{
                    background: "rgba(10,10,15,0.93)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <h3 className="text-sm md:text-base font-bold text-white mb-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-250">
                    {project.title}
                  </h3>

                  {/* Project description */}
                  <p
                    className="text-[11px] md:text-xs text-white/70 mb-4 px-2 line-clamp-4 leading-relaxed translate-y-3 group-hover:translate-y-0 transition-transform duration-250"
                    style={{ transitionDelay: "20ms" }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies tags */}
                  <div
                    className="flex flex-wrap justify-center gap-1.5 mb-5 max-w-full px-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-250"
                    style={{ transitionDelay: "40ms" }}
                  >
                    {project.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-medium px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex gap-2.5 translate-y-3 group-hover:translate-y-0 transition-transform duration-250"
                    style={{ transitionDelay: "60ms" }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 hover:bg-white/10"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <Github size={13} /> Code
                    </a>
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all duration-150 hover:bg-white/15"
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          border: "1px solid rgba(255,255,255,0.15)",
                        }}
                      >
                        <ExternalLink size={13} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
