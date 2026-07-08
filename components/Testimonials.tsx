import styles from "./Testimonials.module.css";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initial: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Ans delivered a highly accurate model and integrated it into our web systems flawlessly. His knowledge in NLP and machine learning pipelines is exceptional.",
    name: "A. Rahman",
    role: "Lead AI Researcher",
    initial: "A",
  },
  {
    quote:
      "The Chrome extension Ans built using FAISS and LangChain completely revolutionized how our team summarizes browser content. Extremely responsive developer!",
    name: "S. Khan",
    role: "Product Manager, TechEdge",
    initial: "S",
  },
  {
    quote:
      "Ans built a robust WhatsApp chatbot that retrieves facts directly from PDF/Excel records. Brilliant execution, very clean codebase, and Twilio setup.",
    name: "M. Bilal",
    role: "Founder, ChatFlow",
    initial: "M",
  },
];

function StarRating() {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={styles.star}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <h2>Testimonials</h2>
        </div>
        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <div className={styles.card} key={t.name}>
              <div className={styles.cardHeader}>
                <StarRating />
                <span className={styles.quoteMark}>&ldquo;</span>
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.reviewer}>
                <div className={styles.avatar}>{t.initial}</div>
                <div className={styles.reviewerInfo}>
                  <span className={styles.reviewerName}>{t.name}</span>
                  <span className={styles.reviewerRole}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
