import styles from "./Work.module.css";

interface Project {
  title: string;
  status: string;
  desc: string;
  task: string;
  scale: string;
  result: string;
  chips: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Latency-Aware RAG Router",
    status: "production",
    desc: "Cut p95 response time by routing queries between a small fast model and a larger fallback based on live confidence scoring.",
    task: "retrieval-augmented generation",
    scale: "40k req/day, 3 model tiers",
    result: "−48% p95 latency, no accuracy drop",
    chips: ["Python", "vLLM", "Redis", "pgvector"],
  },
  {
    title: "Eval Harness for Agent Workflows",
    status: "production",
    desc: "Internal framework that scores multi-step agent runs against golden traces, catching regressions before they ship.",
    task: "automated evaluation",
    scale: "200+ test suites, nightly CI",
    result: "caught 30+ regressions pre-release",
    chips: ["TypeScript", "LangGraph", "Postgres"],
  },
  {
    title: "Fine-Tuned Support Copilot",
    status: "shipped",
    desc: "End-to-end product: fine-tuned model, retrieval layer, and a React interface support agents actually wanted to use.",
    task: "domain-tuned assistant",
    scale: "1.2k daily active agents",
    result: "−35% avg handle time",
    chips: ["React", "FastAPI", "LoRA"],
  },
  {
    title: "GPU Fleet Autoscaler",
    status: "production",
    desc: "Queue-depth-aware autoscaling for inference workloads, replacing a fixed-capacity setup with something that breathes.",
    task: "inference infra",
    scale: "40–200 GPUs, elastic",
    result: "−31% infra cost, same SLA",
    chips: ["Kubernetes", "Ray", "Terraform"],
  },
];

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <h2>Selected work</h2>
          <span className="tag">// model_cards.json</span>
        </div>
        <div className={styles.cards}>
          {PROJECTS.map((p) => (
            <div className={styles.card} key={p.title}>
              <div className={styles.cardTop}>
                <h3>{p.title}</h3>
                <span className={styles.status}>● {p.status}</span>
              </div>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.kv}>
                <span className={styles.k}>task</span>
                <span className={styles.v}>{p.task}</span>
                <span className={styles.k}>scale</span>
                <span className={styles.v}>{p.scale}</span>
                <span className={styles.k}>result</span>
                <span className={styles.v}>{p.result}</span>
              </div>
              <div className={styles.chips}>
                {p.chips.map((c) => (
                  <span className={styles.chip} key={c}>
                    {c}
                  </span>
                ))}
              </div>
              <div className={styles.cardLinks}>
                <a href="#">Case study</a>
                <a href="#">Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
