import React, { useState } from 'react';
import { DATA_PORTFOLIO } from '../data/portfolioData';
import { BookOpen, Code2, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profil' | 'fokus' | 'filosofi'>('profil');

  return (
    <section id="tentang" className="py-20 md:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
            01 / Profil Pribadi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            Tentang Saya
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl">
            Mengenal lebih dekat perjalanan akademik, dedikasi pada bidang Teknik Informatika, dan prinsip spiritual yang melandasi keseharian.
          </p>
        </div>

        {/* Tab Controls - Functional segmented buttons */}
        <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-sm max-w-md mb-8 border border-neutral-200">
          <button
            type="button"
            onClick={() => setActiveTab('profil')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-sm transition-colors ${
              activeTab === 'profil'
                ? 'bg-black text-white shadow-sm'
                : 'text-neutral-700 hover:text-black'
            }`}
          >
            Latar Belakang
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('fokus')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-sm transition-colors ${
              activeTab === 'fokus'
                ? 'bg-black text-white shadow-sm'
                : 'text-neutral-700 hover:text-black'
            }`}
          >
            Fokus Keilmuan
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('filosofi')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-sm transition-colors ${
              activeTab === 'filosofi'
                ? 'bg-black text-white shadow-sm'
                : 'text-neutral-700 hover:text-black'
            }`}
          >
            Filosofi Sholat
          </button>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'profil' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5 text-neutral-700 leading-relaxed text-sm sm:text-base">
              <p>
                Nama saya <strong className="font-semibold text-neutral-950">{DATA_PORTFOLIO.nama}</strong>. Sebagai individu yang mendalami ilmu komputasi, saya memandang teknologi bukan sekadar kumpulan kode atau algoritma, melainkan instrumen untuk menghadirkan efisiensi, kemudahan, dan nilai kebaikan bagi sesama.
              </p>
              <p>
                Di tengah perkembangan pesat kecerdasan buatan, komputasi awan, dan rekayasa perangkat lunak berskala besar, saya terus melatih ketajaman logika berpikir, ketelitian terhadap detail, serta kemampuan abstraksi masalah yang kompleks menjadi solusi terstruktur.
              </p>
              <p>
                Saya percaya bahwa fondasi yang kuat dalam ilmu dasar informatika—mulai dari matematika diskrit, struktur data, algoritma pengurutan dan pencarian, hingga arsitektur komputer—adalah kunci utama seorang perekayasa perangkat lunak yang tangguh.
              </p>

              <div className="pt-3">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
                  Ringkasan Nilai Utama
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 border border-neutral-200 rounded-sm bg-neutral-50/50 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-neutral-800">
                      Disiplin Analitis & Logika Berpikir Kritis
                    </span>
                  </div>
                  <div className="p-3 border border-neutral-200 rounded-sm bg-neutral-50/50 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-neutral-800">
                      Keseimbangan Hidup & Integritas Moral
                    </span>
                  </div>
                  <div className="p-3 border border-neutral-200 rounded-sm bg-neutral-50/50 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-neutral-800">
                      Pembelajaran Berkelanjutan Sepanjang Hayat
                    </span>
                  </div>
                  <div className="p-3 border border-neutral-200 rounded-sm bg-neutral-50/50 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-neutral-800">
                      Rekayasa Kode Bersih, Efisien, & Modular
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 border border-neutral-300 rounded-sm bg-neutral-50 space-y-4">
                <h3 className="text-base font-bold text-neutral-950 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-black" />
                  Data Profil Personal
                </h3>
                <dl className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-neutral-200">
                    <dt className="text-neutral-500">Nama Lengkap</dt>
                    <dd className="font-semibold text-neutral-900">{DATA_PORTFOLIO.nama}</dd>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-neutral-200">
                    <dt className="text-neutral-500">Fokus Utama</dt>
                    <dd className="font-semibold text-neutral-900">{DATA_PORTFOLIO.fokus}</dd>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-neutral-200">
                    <dt className="text-neutral-500">Motto / Bio</dt>
                    <dd className="font-semibold text-black italic">"{DATA_PORTFOLIO.bio}"</dd>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-neutral-200">
                    <dt className="text-neutral-500">Karya</dt>
                    <dd className="font-semibold text-neutral-900">{DATA_PORTFOLIO.karya.judul}</dd>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <dt className="text-neutral-500">Media Publik</dt>
                    <dd className="font-semibold text-black">{DATA_PORTFOLIO.tautanPublik.platform}</dd>
                  </div>
                </dl>
              </div>

              <div className="p-4 bg-black text-white rounded-sm text-xs space-y-2">
                <div className="font-mono uppercase tracking-wider text-neutral-400">Komitmen Pengembang</div>
                <p className="text-neutral-300 leading-relaxed font-sans">
                  "Menyusun baris demi baris instruksi logika dengan penuh tanggung jawab, mengedepankan kualitas daripada kuantitas, dan senantiasa menjaga integritas diri."
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'fokus' && (
          <div className="space-y-8">
            <div className="max-w-3xl space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-black" />
                Disiplin Ilmu: {DATA_PORTFOLIO.fokus}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Teknik Informatika adalah cabang keilmuan yang menelaah struktur, sifat, dan interaksi dari beberapa sistem yang dipakai untuk mengumpulkan data, memproses dan menyimpan hasil pemrosesan data, serta menampilkannya dalam bentuk informasi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-neutral-200 rounded-sm bg-neutral-50/50 space-y-3">
                <div className="text-xs font-mono text-neutral-400 uppercase">Pilar 01</div>
                <h4 className="text-base font-bold text-neutral-950">Analisis Algoritma & Struktur Data</h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Mempelajari cara menyusun representasi data di dalam memori komputer (Array, Linked List, Tree, Graph, Hash Table) serta merancang algoritma pencarian, pengurutan, dan penjelajahan graf yang efisien.
                </p>
              </div>

              <div className="p-6 border border-neutral-200 rounded-sm bg-neutral-50/50 space-y-3">
                <div className="text-xs font-mono text-neutral-400 uppercase">Pilar 02</div>
                <h4 className="text-base font-bold text-neutral-950">Rekayasa & Desain Perangkat Lunak</h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Menelaah siklus hidup pengembangan perangkat lunak (SDLC), pemodelan sistem berbasis UML, pola desain (Design Patterns), serta penerapan kode yang bersih (clean code) dan mudah diuji.
                </p>
              </div>

              <div className="p-6 border border-neutral-200 rounded-sm bg-neutral-50/50 space-y-3">
                <div className="text-xs font-mono text-neutral-400 uppercase">Pilar 03</div>
                <h4 className="text-base font-bold text-neutral-950">Basis Data & Infrastruktur Komputasi</h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Merancang skema data relasional, mengoptimalkan query melalui indeks, serta memahami interaksi antara lapisan perangkat keras, sistem operasi, dan protokol jaringan komunikasi data.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'filosofi' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-5 text-neutral-700 leading-relaxed text-sm sm:text-base">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 flex items-center gap-2">
                <Heart className="w-5 h-5 text-black" />
                Makna Filosofi Bio: "{DATA_PORTFOLIO.bio}"
              </h3>
              <p>
                Bagi saya, kalimat <strong className="font-semibold text-neutral-950">"{DATA_PORTFOLIO.bio}"</strong> bukanlah slogan hampa, melainkan kompas spiritual yang menjaga saya tetap membumi di tengah dinamika dunia komputasi yang serba cepat.
              </p>
              <div className="space-y-4 pt-2">
                <div className="p-4 border-l-2 border-black bg-neutral-50 space-y-1">
                  <div className="text-sm font-bold text-neutral-950">1. Kedisiplinan Waktu (Time Management)</div>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Sholat lima waktu mendidik kita untuk memiliki ritme hidup yang teratur, berhenti sejenak dari kesibukan duniawi, dan menghargai setiap detik waktu yang diamanahkan.
                  </p>
                </div>
                <div className="p-4 border-l-2 border-black bg-neutral-50 space-y-1">
                  <div className="text-sm font-bold text-neutral-950">2. Kejernihan Pikiran & Ketenangan Jiwa</div>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Dalam memecahkan masalah komputasi atau debugging yang menguras konsentrasi, sujud dan doa memberikan ketenangan batin yang memulihkan fokus mental.
                  </p>
                </div>
                <div className="p-4 border-l-2 border-black bg-neutral-50 space-y-1">
                  <div className="text-sm font-bold text-neutral-950">3. Integritas Moral & Kejujuran</div>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Sholat mengingatkan kita bahwa setiap amanah—termasuk data, kode, dan hak pengguna—diawasi oleh Tuhan Yang Maha Melihat, sehingga kejujuran dan etika harus ditegakkan.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 border border-neutral-300 rounded-sm bg-neutral-950 text-white space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>REFLEKSI NILAI</span>
                </div>
                <div className="text-2xl font-extrabold tracking-tight text-white italic">
                  "{DATA_PORTFOLIO.bio}"
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  "Sukses teknis tanpa pondasi spiritual ibarat bangunan megah tanpa tiang pancang. Ingatlah Sang Pencipta dalam setiap pencapaian dan ikhtiar."
                </p>
                <div className="pt-2 border-t border-neutral-800 text-[11px] text-neutral-400">
                  — Jedy, Penggiat {DATA_PORTFOLIO.fokus}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
