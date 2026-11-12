export interface PortfolioData {
  nama: string;
  fokus: string;
  bio: string;
  karya: {
    judul: string;
    tipe: string;
    urlTersedia: boolean;
    deskripsiRingkas: string;
    deskripsiLengkap: string;
    modul: {
      nomor: string;
      judul: string;
      ringkasan: string;
      poin: string[];
    }[];
    catatan: string;
  };
  tautanPublik: {
    label: string;
    urlTampilan: string;
    urlTujuan: string;
    platform: string;
    keterangan: string;
  };
}

export const DATA_PORTFOLIO: PortfolioData = {
  nama: "Jedy",
  fokus: "Teknik Informatika",
  bio: "Jangan Lupa Sholat",
  karya: {
    judul: "Informatics Engineering",
    tipe: "Karya Teks & Konseptual Komputasi",
    urlTersedia: false, // Ditampilkan sebagai teks sesuai instruksi pengguna
    deskripsiRingkas:
      "Studi komprehensif dan perancangan sistem komputasi berfokus pada rekayasa perangkat lunak, efisiensi algoritma, dan arsitektur data terstruktur.",
    deskripsiLengkap:
      "Karya bertajuk Informatics Engineering ini merupakan representasi pemikiran konseptual dan teknis Jedy di ranah Teknik Informatika. Mengingat karya ini belum memiliki tautan web publik eksternal, karya ini disajikan secara terbuka dalam format teks berbobot yang merangkum metodologi rekayasa komputasi, prinsip desain perangkat lunak yang bersih, serta disiplin penerapan logika algoritma.",
    modul: [
      {
        nomor: "01",
        judul: "Pondasi Logika & Algoritma Komputasi",
        ringkasan:
          "Penerapan struktur data yang efisien dan analisis kompleksitas algoritma untuk memecahkan persoalan komputasi nyata.",
        poin: [
          "Optimasi efisiensi waktu dan ruang (Big-O Analysis) dalam penyelesaian masalah komputasi.",
          "Pemanfaatan struktur data terorganisir untuk pemrosesan informasi berkecepatan tinggi.",
          "Pendekatan matematis dan analitis dalam merancang logika alur program."
        ]
      },
      {
        nomor: "02",
        judul: "Arsitektur & Rekayasa Perangkat Lunak",
        ringkasan:
          "Pembangunan fondasi perangkat lunak yang modular, mudah dipelihara, dan dapat dikembangkan secara berkelanjutan.",
        poin: [
          "Penerapan prinsip desain perangkat lunak (Clean Code, Modularity, & High Cohesion).",
          "Perancangan antarmuka pengguna yang responsif, aksesibel, dan berfokus pada kenyamanan pengguna.",
          "Pemodelan sistem berorientasi objek dan arsitektur berlapis (n-tier architecture)."
        ]
      },
      {
        nomor: "03",
        judul: "Manajemen Data & Keamanan Informasi",
        ringkasan:
          "Prinsip integritas data relasional dan non-relasional serta pengamanan aliran informasi digital.",
        poin: [
          "Normalisasi skema basis data untuk mencegah redundansi dan menjamin konsistensi data.",
          "Konektivitas sistem yang aman dengan validasi input dan penanganan kesalahan terstruktur.",
          "Eksplorasi ekosistem teknologi modern berbasis web dan komputasi awan."
        ]
      }
    ],
    catatan:
      "Catatan: Karya ini saat ini ditampilkan sebagai teks dokumentasi konseptual resmi. Ketika tautan implementasi atau repositori publik telah diterbitkan, URL akses langsung akan diperbarui di bagian ini."
  },
  tautanPublik: {
    label: "Instagram Profil",
    urlTampilan: "Instragam.com/viraldo2009",
    urlTujuan: "https://instagram.com/viraldo2009",
    platform: "Instagram",
    keterangan: "Kanal komunikasi dan tautan publik resmi untuk terhubung dengan Jedy."
  }
};
