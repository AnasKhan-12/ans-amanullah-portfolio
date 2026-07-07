import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ans — AI Engineer",
  description:
    "AI Engineer specializing in LLM systems, ML infra, and full-stack AI products. Building the full stack behind AI products — from model serving and eval pipelines to the interfaces people actually use.",
  keywords: ["AI Engineer", "LLM", "Machine Learning", "Full Stack", "GenAI"],
  openGraph: {
    title: "Ans — AI Engineer",
    description:
      "AI Engineer specializing in LLM systems, ML infra, and full-stack AI products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
