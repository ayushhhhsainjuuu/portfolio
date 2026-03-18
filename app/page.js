import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "0 2rem" }}>
      <Hero />
      <hr style={{ border: "none", borderTop: "0.5px solid var(--border)" }} />
      <About />
      <hr style={{ border: "none", borderTop: "0.5px solid var(--border)" }} />
      <Projects />
      <hr style={{ border: "none", borderTop: "0.5px solid var(--border)" }} />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 4rem" }}></div>
      <Contact />
    </main>
  );
}