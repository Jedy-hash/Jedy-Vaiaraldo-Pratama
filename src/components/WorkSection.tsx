import React, { useState } from 'react';
import { DATA_PORTFOLIO } from '../data/portfolioData';
import { FileText, Copy, Check, BookOpen, Layers, X, Info, Sparkles, Cpu, GitBranch, Database } from 'lucide-react';

export const WorkSection: React.FC = () => {
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const karya = DATA_PORTFOLIO.karya;

  const handleCopySummary = () => {
    const textToCopy = `Karya: ${karya.judul}\nFokus: ${DATA_PORTFOLIO.fokus}\nPenulis: ${DATA_PORTFOLIO.nama}\n\n${karya.deskripsiLengkap}\n\nModul Utama:\n` +
      karya.modul.map(m => `${m.nomor}. ${m.judul}: ${m.ringkasan}`).join('\n');
    
    navigator.clipboard.writeText(textToCopy);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  const moduleIcons = [Cpu, GitBranch, Database];

  return (
    <section id="karya" className="py-20 md:py-28 bg-[#fafafa] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500">
            <span>02 / Dokumentasi Karya</span>
            <span aria-hidden="true">·</span>
            <span>Teks & Konsep</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
                Karya: {karya.judul}
              </h2>
              <p className="text-base text-neutral-600 mt-2 max-w-2xl">
                Dokumentasi terstruktur rekayasa sistem, analisis komputasi, dan arsitektur perangkat lunak yang disajikan dalam format teks.
              </p>
            </div>

            {/* Quick Action Button for Copying Text Summary */}
            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-neutral-800 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-black rounded-sm transition-colors shadow-sm self-start"
            >
              {copiedSummary ? (
                <>
                  <Check className="w-4 h-4 text-black" />
                  <span>Ringkasan Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-600" />
                  <span>Salin Ringkasan Karya (Teks)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Text Presentation Notice Banner (Zero-pill clean layout) */}
        <div className="mb-8 p-4 bg-white border border-neutral-300 rounded-sm flex items-start gap-3 shadow-xs">
          <Info className="w-5 h-5 text-black shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            <strong className="font-semibold text-neutral-950">Penyajian Format Teks:</strong> Sesuai data yang diberikan, karena URL eksternal belum tersedia, karya <span className="font-semibold text-neutral-950">"{karya.judul}"</span> disajikan secara langsung dalam format teks dokumentasi yang terstruktur, komprehensif, dan mudah dipelajari.
          </div>
        </div>

        {/* Main Work Featured Card */}
        <div className="bg-white border border-neutral-300 rounded-sm p-6 sm:p-8 shadow-sm space-y-8">
          {/* Card Top Information */}
          <div className="space-y-4 border-b border-neutral-200 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500 font-mono">
              <span className="text-black font-semibold uppercase tracking-wider">
                Dokumen Karya Resmi
              </span>
              <span>Penulis: {DATA_PORTFOLIO.nama} · {DATA_PORTFOLIO.fokus}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
              {karya.judul}
            </h3>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-4xl">
              {karya.deskripsiLengkap}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-black hover:bg-neutral-800 active:bg-neutral-900 transition-colors rounded-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>Baca Naskah Lengkap Karya</span>
              </button>

              <span className="text-xs text-neutral-500 font-mono">
                Status URL: Disajikan Langsung Sebagai Teks
              </span>
            </div>
          </div>

          {/* Structured Text Modules Breakdown */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-neutral-950 flex items-center gap-2">
                <Layers className="w-4 h-4 text-black" />
                Modul & Bahasan Utama Karya
              </h4>
              <span className="text-xs font-mono text-neutral-500">3 Modul Terstruktur</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {karya.modul.map((mod, index) => {
                const IconComponent = moduleIcons[index % moduleIcons.length];
                return (
                  <div
                    key={mod.nomor}
                    className="p-5 bg-neutral-50 border border-neutral-200 rounded-sm hover:border-black transition-colors space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-neutral-400">
                          MODUL {mod.nomor}
                        </span>
                        <IconComponent className="w-4 h-4 text-neutral-700" />
                      </div>
                      <h5 className="text-sm sm:text-base font-bold text-neutral-950 leading-snug">
                        {mod.judul}
                      </h5>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {mod.ringkasan}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-neutral-200">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                        Cakupan Bahasan:
                      </div>
                      <ul className="space-y-1.5 text-xs text-neutral-700">
                        {mod.poin.map((p, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-black font-bold text-xs">·</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Architectural Notes */}
          <div className="p-5 bg-neutral-100 border-l-2 border-black rounded-sm space-y-2">
            <div className="text-xs font-mono font-semibold text-neutral-900 uppercase">
              Catatan Khusus Ketersediaan URL
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {karya.catatan}
            </p>
          </div>
        </div>
      </div>

      {/* Full Document Reader Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className="bg-white border border-neutral-300 rounded-sm w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-150"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                  Naskah Teks Resmi · {DATA_PORTFOLIO.nama}
                </div>
                <h3 className="text-xl font-extrabold text-neutral-950">
                  {karya.judul}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-2 text-neutral-500 hover:text-black hover:bg-neutral-200/60 rounded-sm transition-colors focus:outline-none"
                aria-label="Tutup naskah"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Scrollable Text Article */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-neutral-800 text-sm sm:text-base leading-relaxed">
              <div>
                <h4 className="text-base font-bold text-neutral-950 mb-2">
                  1. Pengantar Karya
                </h4>
                <p className="text-neutral-700">
                  {karya.deskripsiLengkap}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-neutral-950 mb-3">
                  2. Rincian Materi dan Modul Teknis
                </h4>
                <div className="space-y-4">
                  {karya.modul.map((mod) => (
                    <div key={mod.nomor} className="p-4 bg-neutral-50 border border-neutral-200 rounded-sm space-y-2">
                      <div className="text-xs font-mono font-bold text-black">
                        MODUL {mod.nomor}: {mod.judul}
                      </div>
                      <p className="text-xs text-neutral-600">
                        {mod.ringkasan}
                      </p>
                      <ul className="list-disc list-inside text-xs text-neutral-700 space-y-1 pt-1">
                        {mod.poin.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-neutral-950 mb-2">
                  3. Kesimpulan & Relevansi Masa Depan
                </h4>
                <p className="text-neutral-700 text-sm">
                  Karya teks "Informatics Engineering" ini menjadi batu loncatan bagi Jedy dalam membangun solusi digital di masa depan. Fondasi yang tersusun dalam karya ini akan diterapkan pada berbagai proyek implementasi praktis mendatang.
                </p>
              </div>

              <div className="p-4 bg-neutral-900 text-neutral-200 rounded-sm text-xs font-mono space-y-1">
                <div className="text-neutral-400">VERIFIKASI PENYAJIAN:</div>
                <div>Status: Ditampilkan sebagai teks lengkap sesuai instruksi pengguna.</div>
                <div>URL Eksternal: Belum dipublikasikan (Ditampilkan sebagai teks).</div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-neutral-200 flex items-center justify-between bg-neutral-50">
              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:text-black border border-neutral-300 rounded-sm bg-white"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedSummary ? 'Tersalin' : 'Salin Naskah'}</span>
              </button>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-black hover:bg-neutral-800 rounded-sm transition-colors"
              >
                Tutup Naskah
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
