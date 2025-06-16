import { AboutMeSection } from "../components/AboutMeSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/NavBar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutMeSection />
      </main>
    </div>
  );
};
