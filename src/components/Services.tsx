"use client";

import React from "react";
import { motion } from "framer-motion";
import userData from "@/data/users.json";
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  ShoppingBag,
  PenTool,
  LucideIcon,
  ArrowUpRight,
} from "lucide-react";

const iconMap: { [key: string]: LucideIcon } = {
  "Web Development": Code,
  "UI/UX Design": Palette,
  "Responsive Design": Smartphone,
  "SEO Optimization": Globe,
  "E-Commerce Solutions": ShoppingBag,
  "Maintenance & Support": PenTool,
};

const Services = () => {
  const { services } = userData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-10">
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
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            My Services
          </h2>
          <div
            className="w-10 h-px mx-auto"
            style={{ background: "rgba(255,255,255,0.15)" }}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.title] || Code;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: "var(--surface)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Icon size={20} className="text-white/60" />
                </div>

                {/* Title */}
                <div className="flex items-start justify-between mb-2.5">
                  <h3 className="text-base font-semibold text-white">
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-40 transition-opacity duration-200 flex-shrink-0 mt-0.5 text-white"
                  />
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
