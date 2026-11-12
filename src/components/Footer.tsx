import React from 'react';
import { DATA_PORTFOLIO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-xs bg-white text-black flex items-center justify-center text-xs font-mono font-bold">
                J
              </span>
              <span className="text-base font-bold text-white tracking-tight">
                {DATA_PORTFOLIO.nama}
              </span>
            </div>
            <p className="text-xs text-neutral-400">
              Fokus {DATA_PORTFOLIO.fokus} · "{DATA_PORTFOLIO.bio}"
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#beranda" className="hover:text-white transition-colors">Beranda</a>
            <a href="#tentang" className="hover:text-white transition-colors">Tentang Saya</a>
            <a href="#karya" className="hover:text-white transition-colors">Karya</a>
            <a href="#tautan" className="hover:text-white transition-colors">Tautan Publik</a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white rounded-sm transition-colors cursor-pointer"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {DATA_PORTFOLIO.nama}. Seluruh hak cipta dilindungi.
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span>Website Statis Satu Halaman</span>
            <span aria-hidden="true">·</span>
            <span>React + Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
