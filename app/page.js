import Image from 'next/legacy/image';
import { HeroSection } from './components/HeroSection';
import { NavBar } from './components/NavBar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import AchievementsSection from './components/AchievementsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-1">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
