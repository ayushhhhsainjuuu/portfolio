import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <Hero />
        <hr style={{ border: "none", borderTop: "0.5px solid var(--border)" }} />
        <About />
        <hr style={{ border: "none", borderTop: "0.5px solid var(--border)" }} />
        <Projects />
        <hr style={{ border: "none", borderTop: "0.5px solid var(--border)" }} />
        <Contact />
      </div>
    </main>
  );
}