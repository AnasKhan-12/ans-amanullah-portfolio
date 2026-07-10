"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { staggerContainer, fadeUpChild, fadeUp, VIEWPORT_ONCE } from "@/lib/animations";

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.05 6.05l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Compose mailto link
    const mailtoUrl = `mailto:ansamanullah@yahoo.com?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.open(mailtoUrl);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <h2>Contact</h2>
        </motion.div>

        <motion.div
          className={styles.layout}
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {/* ── Left column ── */}
          <motion.div className={styles.left} variants={fadeUpChild}>
            <h3 className={styles.leftTitle}>
              Let&apos;s Talk About Your Project
            </h3>
            <p className={styles.leftSub}>
              I&apos;m always open to discussing web development work or
              partnership opportunities.
            </p>

            <motion.div
              className={styles.infoCards}
              variants={staggerContainer(0.1)}
            >
              {[
                { icon: <EmailIcon />, label: "EMAIL", value: "ansamanullah@yahoo.com", href: "mailto:ansamanullah@yahoo.com" },
                { icon: <PhoneIcon />, label: "PHONE", value: "+92 320 8424534", href: "tel:+923208424534" },
                { icon: <LocationIcon />, label: "LOCATION", value: "Lahore, Pakistan", href: undefined },
              ].map((item) => (
                <motion.div
                  className={styles.infoCard}
                  key={item.label}
                  variants={fadeUpChild}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <span className={styles.infoIcon}>{item.icon}</span>
                  <div>
                    <div className={styles.infoLabel}>{item.label}</div>
                    {item.href ? (
                      <a className={styles.infoValue} href={item.href}>{item.value}</a>
                    ) : (
                      <span className={styles.infoValue}>{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className={styles.socialSection} variants={fadeUpChild}>
              <div className={styles.socialLabel}>FIND ME ONLINE</div>
              <div className={styles.socialRow}>
                <motion.a
                  className={styles.socialBtn}
                  href="https://github.com/AnasKhan-12"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.05, rotate: 3, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GitHubIcon />
                  GitHub
                </motion.a>
                <motion.a
                  className={styles.socialBtn}
                  href="https://www.linkedin.com/in/ans-amanullah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.05, rotate: -3, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LinkedInIcon />
                  LinkedIn
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right column: form ── */}
          <motion.div className={styles.right} variants={fadeUpChild}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <motion.div
                className={styles.formRow}
                variants={staggerContainer(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
              >
                <motion.div className={styles.fieldGroup} variants={fadeUpChild}>
                  <label className={styles.label} htmlFor="contact-name">
                    NAME
                  </label>
                  <input
                    className={styles.input}
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
                <motion.div className={styles.fieldGroup} variants={fadeUpChild}>
                  <label className={styles.label} htmlFor="contact-email">
                    EMAIL
                  </label>
                  <input
                    className={styles.input}
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className={styles.fieldGroup}
                variants={fadeUpChild}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
              >
                <label className={styles.label} htmlFor="contact-subject">
                  SUBJECT
                </label>
                <input
                  className={styles.input}
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.div
                className={styles.fieldGroup}
                variants={fadeUpChild}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
              >
                <label className={styles.label} htmlFor="contact-message">
                  MESSAGE
                </label>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.button
                className={styles.submitBtn}
                type="submit"
                variants={fadeUpChild}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.97 }}
              >
                {sent ? "Message Sent ✓" : (
                  <>
                    Send Message <SendIcon />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
