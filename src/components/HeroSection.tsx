import React, { useState } from 'react';
import { DATA_PORTFOLIO } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Copy, Check, Terminal, Compass, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [copiedBio, setCopiedBio] = useState(false);

  const handleCopyBio = () => {
    navigator.clipboard.writeText(DATA_PORTFOLIO.bio);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2000);
  };

  return (
    <section id="beranda" className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-neutral-200">
      {/* Subtle geometric grid background pattern with low opacity */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker - Unboxed quiet metadata with separator */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-neutral-500 mb-6">
          <span>Website Personal</span>
          <span aria-hidden="true" className="text-neutral-400">·</span>
          <span className="text-neutral-900 font-semibold">{DATA_PORTFOLIO.fokus}</span>
          <span aria-hidden="true" className="text-neutral-400">·</span>
          <span>Edisi 2026</span>
        </div>

        {/* Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Typographic Main Display */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-950 leading-[1.08] text-balance">
              Halo, Saya <span className="underline decoration-2 underline-offset-8 decoration-black">{DATA_PORTFOLIO.nama}</span>.
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              <p>
                Menekuni bidang <strong className="font-semibold text-neutral-950">{DATA_PORTFOLIO.fokus}</strong> dengan dedikasi tinggi terhadap logika komputasi, pengembangan perangkat lunak terstruktur, serta eksplorasi arsitektur sistem modern.
              </p>
              <p className="text-neutral-600 text-sm sm:text-base">
                Menghadirkan perpaduan antara ketelitian algoritma, etika teknologi, dan kedisiplinan kerja untuk menciptakan solusi digital yang bermanfaat dan berkelanjutan.
              </p>
            </div>

            {/* Interactive Bio Callout - Minimalist high contrast card */}
            <div className="p-5 sm:p-6 bg-white border border-neutral-300 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 uppercase tracking-wider">
                <span className="flex items-center gap-1.5 font-medium text-neutral-700">
                  <Compass className="w-3.5 h-3.5 text-black" />
                  Prinsip Hidup & Kompas Moral
                </span>
                <button
                  onClick={handleCopyBio}
                  className="inline-flex items-center gap-1 text-neutral-500 hover:text-black transition-colors focus:outline-none"
                  title="Salin Bio"
                >
                  {copiedBio ? (
                    <>
                      <Check className="w-3 h-3 text-black" />
                      <span className="text-[11px] text-black font-sans">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span className="text-[11px] font-sans">Salin</span>
                    </>
                  )}
                </button>
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 italic border-l-2 border-black pl-4 py-0.5">
                "{DATA_PORTFOLIO.bio}"
              </blockquote>

              <p className="text-xs text-neutral-500 leading-normal">
                Pengingat diri untuk selalu memelihara keseimbangan spiritual, menjaga kejernihan niat, serta menanamkan etos kerja yang bertanggung jawab dalam setiap langkah.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#karya"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-black hover:bg-neutral-800 active:bg-neutral-900 transition-colors rounded-sm shadow-sm"
              >
                <span>Lihat Karya ({DATA_PORTFOLIO.karya.judul})</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#tentang"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-neutral-800 bg-white hover:bg-neutral-100 hover:text-black border border-neutral-300 transition-colors rounded-sm"
              >
                <span>Tentang Saya</span>
              </a>

              <a
                href="#tautan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-neutral-800 hover:text-black transition-colors"
              >
                <span>Tautan Publik</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Distinctive Technical Profile & Visual Card */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-950 text-white rounded-sm border border-neutral-900 p-6 sm:p-7 shadow-xl space-y-6">
              {/* Header of the terminal/spec sheet */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-neutral-400" />
                  <span className="text-xs font-mono tracking-wider text-neutral-300">PROFIL RINGKAS // IDENTITAS</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">STATUS: AKTIF</span>
              </div>

              {/* Data attributes list */}
              <div className="space-y-4 text-xs sm:text-sm font-mono">
                <div>
                  <div className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Nama Lengkap</div>
                  <div className="text-neutral-100 font-bold text-base">{DATA_PORTFOLIO.nama}</div>
                </div>

                <div>
                  <div className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Fokus Bidang</div>
                  <div className="text-neutral-100 font-semibold">{DATA_PORTFOLIO.fokus}</div>
                </div>

                <div>
                  <div className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Bio / Pegangan Hidup</div>
                  <div className="text-white font-medium italic bg-neutral-900/90 border border-neutral-800 p-2.5 rounded-sm">
                    "{DATA_PORTFOLIO.bio}"
                  </div>
                </div>

                <div>
                  <div className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Karya Utama</div>
                  <div className="text-neutral-200">
                    {DATA_PORTFOLIO.karya.judul}
                    <span className="block text-[11px] text-neutral-400 font-sans mt-0.5">
                      (Disajikan dalam teks dokumentasi komprehensif)
                    </span>
                  </div>
                </div>

                <div>
                  <div className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Tautan Publik Resmi</div>
                  <a
                    href={DATA_PORTFOLIO.tautanPublik.urlTujuan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:text-neutral-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{DATA_PORTFOLIO.tautanPublik.urlTampilan}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Bottom badge */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400 font-sans">
                <span>Frontend Murni · Bebas Ketergantungan Server</span>
                <span className="font-mono text-neutral-300">v1.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars row below the split */}
        <div className="mt-14 pt-8 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider">01. Rekayasa Perangkat Lunak</div>
            <div className="text-sm font-semibold text-neutral-900">Perancangan Sistem & Arsitektur Bersih</div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Menerapkan metodologi rekayasa modern untuk membangun aplikasi yang kokoh, modular, dan teruji.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider">02. Logika & Algoritma</div>
            <div className="text-sm font-semibold text-neutral-900">Pemecahan Masalah Komputasi</div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Analisis efisiensi struktur data dan algoritma demi komputasi yang optimal dan cepat.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider">03. Nilai & Karakter</div>
            <div className="text-sm font-semibold text-neutral-900">Integritas & Keseimbangan Batin</div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Memegang teguh prinsip "Jangan Lupa Sholat" sebagai pondasi moral dan kedisiplinan hidup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
