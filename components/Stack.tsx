import styles from "./Stack.module.css";

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
        <div className="section-head">
          <h2>Stack</h2>
        </div>
        <div className={`${styles.manifest} reveal`}>
          {STACK.map((row) => (
            <div className={styles.manifestRow} key={row.label}>
              <div className={styles.manifestLabel}>{row.label}</div>
              <div className={styles.manifestItems}>
                {row.items.map((item) => (
                  <span className={styles.pkg} key={item.name}>
                    {item.name}
                    {item.version && (
                      <span className={styles.v}> {item.version}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
