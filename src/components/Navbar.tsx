import React, { useState, useEffect } from 'react';
import { DATA_PORTFOLIO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['beranda', 'tentang', 'karya', 'tautan'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#beranda', id: 'beranda', label: 'Beranda' },
    { href: '#tentang', id: 'tentang', label: 'Tentang Saya' },
    { href: '#karya', id: 'karya', label: 'Karya' },
    { href: '#tautan', id: 'tautan', label: 'Tautan Publik' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.05)]'
          : 'bg-white/80 backdrop-blur-sm border-b border-neutral-200/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Brand wordmark */}
          <a
            href="#beranda"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-neutral-950 hover:text-black transition-colors whitespace-nowrap shrink-0 group"
          >
            <span className="w-7 h-7 rounded-sm bg-black text-white flex items-center justify-center text-xs font-mono font-semibold tracking-normal transition-transform group-hover:scale-105">
              J
            </span>
            <span>{DATA_PORTFOLIO.nama}</span>
          </a>

          {/* Zone 2: Navigation Links (Clean unboxed text with hover underline) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive ? 'text-black font-semibold' : 'hover:text-black'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="#tautan"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium tracking-wide text-white bg-black hover:bg-neutral-800 active:bg-neutral-900 transition-colors rounded-sm whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Tautan Publik</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-800 hover:text-black focus:outline-none"
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-sm transition-colors ${
                  activeSection === link.id
                    ? 'bg-neutral-100 text-black font-semibold'
                    : 'text-neutral-700 hover:bg-neutral-50 hover:text-black'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-neutral-100">
            <a
              href="#tautan"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-white bg-black hover:bg-neutral-800 rounded-sm transition-colors"
            >
              <span>Buka Tautan Publik</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
