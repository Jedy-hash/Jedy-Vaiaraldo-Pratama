import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WorkSection } from './components/WorkSection';
import { LinksSection } from './components/LinksSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#121212] flex flex-col font-sans selection:bg-black selection:text-white">
      {/* Navigation Bar - 3-Zone Top Bar Contract */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Bagian Pembuka (Hero Section) */}
        <HeroSection />

        {/* Tentang Saya (About Section) */}
        <AboutSection />

        {/* Karya (Work Section) */}
        <WorkSection />

        {/* Tautan Publik (Links Section) */}
        <LinksSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
