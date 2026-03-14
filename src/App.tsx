import { Toaster } from "sileo";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Bio from "@/components/Bio";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Process from "@/components/Process";
import GithubContributions from "@/components/GithubContributions";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const ThemedToaster = () => {
  const { theme } = useTheme();
  return <Toaster position="top-right" theme={theme} />;
};

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden antialiased">
        {/* Crimson gradient background — only visible in dark mode */}
        <div className="fixed inset-0 -z-10 opacity-0 transition-opacity duration-500 dark:opacity-100">
          {/* Crimson Core Glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), radial-gradient(68% 58% at 50% 50%, #c81e3a 0%, #a51d35 16%, #7d1a2f 32%, #591828 46%, #3c1722 60%, #2a151d 72%, #1f1317 84%, #141013 94%, #0a0a0a 100%), radial-gradient(90% 75% at 50% 50%, rgba(228,42,66,0.06) 0%, rgba(228,42,66,0) 55%), radial-gradient(150% 120% at 8% 8%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(150% 120% at 92% 92%, rgba(0,0,0,0) 42%, #0b0a0a 82%, #070707 100%), radial-gradient(60% 50% at 50% 60%, rgba(240,60,80,0.06), rgba(0,0,0,0) 60%), #050505",
            }}
          />
          {/* Soft vignette to blend edges */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)",
              opacity: 0.95,
            }}
          />
        </div>

        <NavBar />

        <main className="relative z-10 container mx-auto flex max-w-5xl flex-col items-center px-4 pt-20">
          <Hero />
          <Bio />
          <Projects />
          <WorkExperience />
          <Education />
          <Skills />
          <Process />
          <GithubContributions />
          <Contact />
          <Footer />
        </main>

        <ScrollToTop />
        <ThemedToaster />
      </div>
    </ThemeProvider>
  );
};

export default App;
