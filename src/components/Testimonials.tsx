"use client";

import React from "react";
import { motion } from "framer-motion";
import userData from "@/data/users.json";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const { testimonials } = userData;

  return (
    <section id="testimonials" className="py-10">
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
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Testimonials
          </h2>
          <div
            className="w-10 h-px mx-auto"
            style={{ background: "rgba(255,255,255,0.15)" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl flex flex-col"
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill="rgba(255,255,255,0.3)"
                    className="text-white/30"
                  />
                ))}
              </div>

              {/* Quote icon */}
              <Quote
                className="absolute top-5 right-5 text-white/5"
                size={36}
              />

              {/* Text */}
              <p
                className="italic mb-6 relative z-10 leading-relaxed text-sm flex-1"
                style={{ color: "var(--text-muted)" }}
              >
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-semibold text-xs flex-shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {testimonial.author[0]}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {testimonial.author}
                  </h4>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--text-subtle)" }}
                  >
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
