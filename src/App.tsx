import { Toaster } from "sileo";
import { ThemeProvider } from "@/context/ThemeContext";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Bio from "@/components/Bio";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import bgImg from "@/assets/bg-img5.png";

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden antialiased">
        {/* Background image — only visible in dark mode */}
        <div className="fixed inset-0 -z-10 overflow-hidden opacity-0 transition-opacity duration-500 dark:opacity-100">
          <img
            src={bgImg}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        <NavBar />

        <main className="relative z-10 container mx-auto flex max-w-5xl flex-col items-center px-4 pt-20">
          <Hero />
          <Projects />
          <Bio />
          <Skills />
          <WorkExperience />
          <Education />
          <Contact />
          <Footer />
        </main>

        <ScrollToTop />
        <Toaster position="bottom-right" />
      </div>
    </ThemeProvider>
  );
};

export default App;
