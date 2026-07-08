"use client";

import styles from "./Work.module.css";
import TiltCard from "./TiltCard";

interface Project {
  title: string;
  status: string;
  desc: string;
  task: string;
  stack: string;
  highlight: string;
  chips: string[];
  github: string;
  demo?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Personal Assistant Agent",
    status: "shipped",
    desc: "Agentic AI assistant using LangGraph with a ReAct loop, autonomously routing tasks across Gmail and Google Calendar via MCP connectors. FastAPI streaming backend with SSE reduced response latency by 40%.",
    task: "agentic AI / task automation",
    stack: "LangGraph · FastAPI · React · MCP",
    highlight: "−40% response latency via SSE streaming",
    chips: ["LangGraph", "FastAPI", "React", "MCP", "Python"],
    github: "https://github.com/AnasKhan-12",
  },
  {
    title: "RAG-Powered WhatsApp Chatbot",
    status: "shipped",
    desc: "WhatsApp chatbot using LangChain, RAG, and Google Gemini API with ensemble retrieval (vector + BM25) and semantic chunking. Deployed as a FastAPI webhook on Meta Cloud API with per-user conversation memory.",
    task: "conversational AI / RAG",
    stack: "LangChain · ChromaDB · FastAPI · Gemini",
    highlight: "92% retrieval accuracy on restaurant queries",
    chips: ["LangChain", "RAG", "Gemini API", "ChromaDB", "FastAPI"],
    github: "https://github.com/AnasKhan-12/Whatsapp-Chatbot-LangChain-version",
  },
  {
    title: "RAG YouTube Assistant Extension",
    status: "shipped",
    desc: "Chrome extension with a full document processing pipeline — chunking, sentence embeddings, and FAISS-based retrieval for real-time semantic search over YouTube transcripts, evaluated with grounding metrics.",
    task: "retrieval-augmented generation",
    stack: "LangChain · FAISS · Gemini API · Chrome API",
    highlight: "Real-time semantic search, minimized hallucinations",
    chips: ["LangChain", "FAISS", "Gemini API", "Chrome Extension"],
    github: "https://github.com/AnasKhan-12/RAG-based-Youtube-Assistant-Extension",
  },
  {
    title: "Spam Classifier Web App",
    status: "live",
    desc: "End-to-end ML web app for SMS spam detection with full NLP preprocessing — tokenization, stopword removal, stemming, and TF-IDF vectorization. Deployed on Render with real-time inference.",
    task: "NLP / text classification",
    stack: "Scikit-learn · NLTK · Flask · Render",
    highlight: "97% accuracy · 1.0 precision on holdout set",
    chips: ["Python", "Scikit-learn", "NLTK", "Flask", "TF-IDF"],
    github: "https://github.com/AnasKhan-12/SMS-Spam-Classifier",
    demo: "https://sms-spam-classifier-a54e.onrender.com/",
  },
  {
    title: "Movie Recommendation System",
    status: "shipped",
    desc: "Content-based filtering system leveraging cosine similarity on TF-IDF feature vectors for personalized movie recommendations. Built a clean item-feature matrix using Pandas and Scikit-learn on structured metadata.",
    task: "recommender systems / NLP",
    stack: "Pandas · Scikit-learn · TF-IDF · Cosine Similarity",
    highlight: "Personalized recommendations from metadata vectors",
    chips: ["Python", "Pandas", "Scikit-learn", "NLP", "TF-IDF"],
    github: "https://github.com/AnasKhan-12/Movies-Recommendation-System",
  },
];

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <h2>Featured Projects</h2>
        </div>
        <div className={`${styles.cards} reveal-stagger`}>
          {PROJECTS.map((p) => (
            <TiltCard
              key={p.title}
              className={styles.card}
            >
              <div className={styles.cardTop}>
                <h3>{p.title}</h3>
                <span className={styles.status}>● {p.status}</span>
              </div>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.kv}>
                <span className={styles.k}>task</span>
                <span className={styles.v}>{p.task}</span>
                <span className={styles.k}>stack</span>
                <span className={styles.v}>{p.stack}</span>
                <span className={styles.k}>highlight</span>
                <span className={styles.v}>{p.highlight}</span>
              </div>
              <div className={styles.chips}>
                {p.chips.map((c) => (
                  <span className={styles.chip} key={c}>
                    {c}
                  </span>
                ))}
              </div>
              <div className={styles.cardLinks}>
                <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
