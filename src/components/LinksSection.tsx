import React, { useState } from 'react';
import { DATA_PORTFOLIO } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check, Instagram, Share2, MessageCircle, ExternalLink, Shield } from 'lucide-react';

export const LinksSection: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const tautan = DATA_PORTFOLIO.tautanPublik;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(tautan.urlTujuan);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="tautan" className="py-20 md:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
            03 / Kanal Komunikasi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            Tautan Publik
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl">
            Terhubung langsung dengan {DATA_PORTFOLIO.nama} melalui tautan publik resmi yang tertera di bawah ini.
          </p>
        </div>

        {/* Public Link Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Primary Link Card (High contrast black accent) */}
          <div className="lg:col-span-7 bg-neutral-950 text-white rounded-sm p-6 sm:p-8 shadow-xl space-y-6 border border-neutral-900">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-white text-black flex items-center justify-center font-bold">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">Kanal Resmi</div>
                  <div className="text-sm font-bold text-white">{tautan.platform}</div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-neutral-400">STATUS: TERVERIFIKASI</span>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-neutral-400 uppercase">Alamat Tautan Publik</div>
              <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white select-all break-all">
                {tautan.urlTampilan}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                {tautan.keterangan}
              </p>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={tautan.urlTujuan}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-black bg-white hover:bg-neutral-200 active:bg-neutral-300 transition-colors rounded-sm shadow-sm"
              >
                <span>Buka Instagram</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 transition-colors rounded-sm"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Tautan Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin URL Tautan</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-4 border-t border-neutral-800 text-[11px] text-neutral-500 font-mono">
              Format tautan asli dari input data: {tautan.urlTampilan}
            </div>
          </div>

          {/* Secondary Information & Etiquette Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-neutral-50 border border-neutral-300 rounded-sm space-y-4">
              <h3 className="text-base font-bold text-neutral-950 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-black" />
                Kolaborasi & Jejaring
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Terbuka untuk diskusi akademik, eksplorasi riset Teknik Informatika, serta pertukaran ide seputar rekayasa perangkat lunak dan komputasi modern.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 bg-white border border-neutral-200 rounded-sm">
                  <div className="font-semibold text-neutral-900 mb-0.5">Topik Diskusi</div>
                  <div className="text-neutral-600">
                    Rekayasa Perangkat Lunak, Struktur Algoritma, Pengembangan Web, dan Studi Komputasi.
                  </div>
                </div>

                <div className="p-3 bg-white border border-neutral-200 rounded-sm">
                  <div className="font-semibold text-neutral-900 mb-0.5">Etika Komunikasi</div>
                  <div className="text-neutral-600">
                    Sopan, lugas, menjunjung nilai saling menghargai dan mengedepankan etika profesional.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick reminder box */}
            <div className="p-4 border-l-2 border-black bg-white border border-neutral-200 rounded-sm space-y-1">
              <div className="text-xs font-mono font-bold text-neutral-900 uppercase">
                Pengingat
              </div>
              <p className="text-xs text-neutral-600">
                "{DATA_PORTFOLIO.bio}" — Keseimbangan batin dan disiplin waktu senantiasa membimbing setiap komunikasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
