import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Ayush | Software Developer",
  description: "Software developer specializing in web, mobile & cloud.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        {children}
        <Footer />
      </body>
    </html>
  );
}