"use client";

import { motion } from "framer-motion";
import styles from "./Stack.module.css";
import { staggerContainer, fadeUpChild, fadeUp, VIEWPORT_ONCE } from "@/lib/animations";

const STACK = [
  {
    label: "LLM & GenAI",
    items: [
      { name: "openai", version: ">=1.0" },
      { name: "anthropic-sdk" },
      { name: "vllm" },
      { name: "langgraph" },
      { name: "langchain" },
      { name: "pgvector" },
    ],
  },
  {
    label: "Infra & MLOps",
    items: [
      { name: "kubernetes" },
      { name: "terraform" },
      { name: "ray" },
      { name: "docker" },
      { name: "airflow" },
      { name: "datadog" },
    ],
  },
  {
    label: "Full-Stack",
    items: [
      { name: "python", version: "3.12" },
      { name: "typescript" },
      { name: "react" },
      { name: "fastapi" },
      { name: "postgres" },
      { name: "redis" },
    ],
  },
];

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <h2>Stack</h2>
        </motion.div>

        <motion.div
          className={styles.manifest}
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {STACK.map((row) => (
            <motion.div
              className={styles.manifestRow}
              key={row.label}
              variants={fadeUpChild}
            >
              <div className={styles.manifestLabel}>{row.label}</div>
              <motion.div
                className={styles.manifestItems}
                variants={staggerContainer(0.05)}
              >
                {row.items.map((item) => (
                  <motion.span
                    className={styles.pkg}
                    key={item.name}
                    variants={fadeUpChild}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {item.name}
                    {item.version && (
                      <span className={styles.v}> {item.version}</span>
                    )}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
