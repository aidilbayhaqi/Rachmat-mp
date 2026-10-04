# Website Profil Rachmat Manggala Purba

Website multipage dengan HTML, CSS, dan JavaScript murni. Tidak memerlukan framework, npm, proses build, database, atau API.

## Cara membuka

Ekstrak seluruh ZIP, lalu buka `index.html`. Pertahankan struktur folder `css`, `js`, dan `assets`. Semua halaman, stylesheet, script, dan gambar utama tersedia secara lokal. Internet diperlukan saat membuka publikasi dan YouTube.

## Struktur halaman

| File | Isi |
| --- | --- |
| index.html | Beranda, pengantar profil, keahlian, publikasi pilihan, diskusi |
| tentang.html | Biografi, pendidikan, perizinan dan registrasi |
| keahlian.html | Penilaian aset, konsultasi bisnis/properti/keuangan, layanan hukum |
| pengalaman.html | Karier profesional, akademik, organisasi, pengelolaan aset daerah |
| publikasi.html | Buku, jurnal, makalah, disertasi, tautan penerbit/PDF |
| kegiatan.html | Video, organisasi/kepengurusan, asosiasi, dan riwayat seleksi dengan sumber yang tersedia |
| kontak.html | Email, telepon, draf pesan, informasi awal konsultasi |
| css/style.css | Sistem warna, tipografi, layout, responsive, fokus keyboard, print |
| js/main.js | Menu seluler, draf email, tombol kembali ke atas, animasi scroll |
| assets/images/ | Foto dari CV serta sampul buku dari penerbit |

## Pendekatan desain dan implementasi

Pola editorial mengikuti referensi rmp-v5-editorial: navy, warna kertas, aksen emas, judul serif, garis pemisah, nomor bagian, serta susunan konten yang bervariasi. Spasi dan skala tipografi diseragamkan. Foto menggunakan foto asli dalam CV, dengan resolusi sumber 172 × 216 piksel; wajah tidak direkayasa.

Konten inti ditulis langsung di HTML, sehingga dapat dibaca dan diindeks tanpa menunggu JavaScript. Navigasi memakai halaman HTML nyata dan relative path. Semua tautan eksternal membuka tab baru dengan `noopener noreferrer`. Tidak ada iframe YouTube, cookie analitik, database kontak, atau pengiriman data otomatis.

Formulir kontak membuka aplikasi email memakai `mailto:`. Pengunjung harus menekan Kirim di aplikasi email. Formulir tidak menampilkan klaim bahwa pesan berhasil diterima. Tanpa aplikasi email terpasang, gunakan alamat email yang tercantum langsung. Isi form tidak disimpan oleh website.

Animasi scroll menggunakan IntersectionObserver dan keyframe CSS: blok konten bergerak lembut dari bawah dengan fade-in, serta jeda antar kartu maksimal 170 ms. Setiap blok hanya dianimasikan sekali. Konten di layar awal langsung tampil. Gerakan dibuat lebih pendek di HP, dihentikan saat fokus keyboard masuk ke blok, dan dinonaktifkan untuk reduced motion serta cetak. Tanpa JavaScript atau IntersectionObserver, semua konten tetap terlihat. Tidak memakai library animasi atau mengubah perilaku scroll native. Pengaturan durasi/jarak ada pada `.scroll-reveal` dan `@keyframes scroll-reveal-in` di CSS; daftar blok ada pada `revealSelector` di JavaScript.

## Pembaruan konten

Edit konten di HTML terkait; warna dan jarak di `:root` dalam CSS. Header dan footer sengaja tersedia langsung di tiap halaman untuk mendukung pembukaan file lokal dan penggunaan tanpa JavaScript; perubahan navigasi perlu diterapkan konsisten ke tujuh halaman. Gunakan nama file dengan huruf kecil dan tanpa spasi untuk aset baru.

## Dasar data dan keputusan editorial

Sumber utama: PROFIL RMP DIKTI.pdf yang diberikan untuk pembaruan ini, serta sumber dan aset publik yang sudah ada di proyek.

- Gelar memakai Dr., bukan kandidat doktor.
- Tahun pendidikan mengikuti CV: doktor 2023, magister manajemen 2014, magister hukum 2024. Biografi mencantumkan doktor 2022 dan magister 2012. Perbedaan ini perlu dikonfirmasi ke pemilik profil bila hendak membuat dokumen akademik resmi. Predikat Cum Laude tidak dipromosikan karena terdapat perbedaan riwayat sumber.
- Tahun 2000 disebut sebagai awal perjalanan usaha penilaian; tidak disamakan dengan tahun izin KJPP 2009.
- Riwayat seleksi tidak digambarkan sebagai jabatan yang pernah diemban. Klaim statistik "9 uji kelayakan", "38+ tahun karier", "100+ proyek", "15+ karya", dan kutipan disertasi yang tidak jelas asalnya dari template dihapus.
- Nomor izin dicantumkan sebagai catatan CV, bukan konfirmasi status aktif saat ini. Nomor MAPPI 94-S-00421 merujuk direktori MAPPI. Data direktori dapat berubah.
- LBH Mitra Persada Nusantara dicantumkan sebagai Pengurus/Bendahara sejak 2026 sesuai CV, tanpa mengubahnya menjadi klaim pendiri.
- Buku Strategi Sersan Satu tidak dimasukkan sebagai karya RMP. Halaman dan sampul penerbit mencantumkan Prof. Dr. Sugiono, M.M. sebagai penulis, berbeda dari CV. Sumber: https://www.gemilangpress.com/product/strategi-sersan-satu-seni-interaksi-sosial-menuju-peradaban-modern/
- Penulis Sinkronisasi GCG mengikuti penerbit: Tb. Boy B. Arifin, Rachmat M. Purba, Ronny Franky Sompie. ISBN tidak diisi karena kolom penerbit kosong.
- ISBN Harmonisasi GCG/BPJS mengikuti penerbit: 978-634-7812-48-3. ISBN Sinergi BPK: 978-634-7712-36-3. Duplikasi ISBN yang ada di CV tidak disebarkan ke buku berbeda.
- Judul tanpa tautan yang dapat dicocokkan tetap dicantumkan dari CV dengan keterangan tautan publik belum tersedia. Tidak ada link PDF buatan atau hasil pencarian generik yang dipresentasikan sebagai naskah.
- Nama firma menggunakan RMP Law Firm & Partner sesuai CV; sebagian sumber publik menuliskannya sebagai RMP Law Firm & Partners.
- Gambar preview sosial dan favicon bawaan referensi dipertahankan. Halaman web menggunakan identitas dan data yang telah diperbarui.

## Sumber publik pelengkap

Ditinjau pada 8 September 2026. Tautan serta metadata publisher/video diperiksa melalui hasil penelusuran dan pengambilan halaman/metadata. Pemutaran penuh video tidak diuji.

1. Direktori MAPPI: https://e-directory.mappi.or.id/penilai/1314
2. Buku Kompolnas, unggahan penerbit: https://www.researchgate.net/publication/406677537_REKONSTRUKSI_DAN_PENGUATAN_KOMISI_KEPOLISIAN_NASIONAL_KOMPOLNAS_Menuju_Kepastian_dan_Keadilan_Hukum_dalam_Pelaksanaan_Sistem_Pengawasan_Eksternal_Polri
3. Artikel jurnal RMP, halaman resmi: https://jurnal.unmabanten.ac.id/index.php/cahayahukum/article/view/1051
4. PDF artikel jurnal: https://jurnal.unmabanten.ac.id/index.php/cahayahukum/article/download/1051/430/
5. Sinkronisasi GCG: https://www.gemilangpress.com/product/sinkronisasi-good-corporate-governance-dan-sistem-manajemen-mutu-dalam-perspektif-hukum-bisnis-mencari-titik-temu-norma-dan-standar/
6. Sinergi BPK: https://www.gemilangpress.com/product/sinergi-bpk-dengan-lembaga-perwakilan-dpr-dpd-dan-dprd-dan-aparat-pengawasan-intern-pemerintah-bpkp-dan-inspektorat-perspektif-hukum-pemeriksaan-keuangan-negara-dalam-mewujudkan-nilai-strategis/
7. Harmonisasi BPJS: https://www.gemilangpress.com/product/harmonisasi-good-corporate-governance-sistem-manajemen-mutu-dan-kewajiban-kontraktual-bpjs-sebuah-kajian-hukum-bisnis-di-sektor-kesehatan/
8. Makalah literasi keuangan: https://www.academia.edu/87209856/Makalah_Literasi_Keuangan_Indonesia_OJK
9. DPR, BS LPS 2026: https://www.dpr.go.id/kegiatan-dpr/berita/Komisi-XI-Uji-10-Calon-BS-LPS-Kemampuan-Merespons-Krisis-Jadi-Penilaian-Utama-63095
10. DPR, calon BPK 2024: https://emedia.dpr.go.id/news/2024/07/08/perlu-masukan-dari-masyarakat-komisi-xi-umumkan-75-nama-calon-anggota-bpk-ri
11. Detik, seleksi Kompolnas 2024: https://news.detik.com/berita/d-7453129/daftar-107-orang-lolos-seleksi-administrasi-calon-anggota-kompolnas-2024-2028
12. Detik, seleksi KPK 2019: https://news.detik.com/berita/d-4620127/lolos-seleksi-awal-192-capim-kpk-akan-uji-kompetensi-pekan-depan
13. Profil BPK 2022: https://wahananews.co/nasional/ada-rachmat-manggala-purba-dari-10-calon-anggota-bpk-ri-2022-2027-anRV1r7VWu/0
14. Profil BPK 2023: https://ekonomi.bisnis.com/read/20230328/9/1641178/14-nama-lolos-calon-anggota-bpk-deputi-komisioner-ojk-hingga-direktur-pwc

## Video yang dicocokkan

| Judul | Kanal | URL |
| --- | --- | --- |
| Biografi Dr. Ir. Rachmat M. Purba | GEMILANG PRESS INDONESIA | https://www.youtube.com/watch?v=fUXqSpGXsOw |
| Persoalan Tanah di Indonesia, Begini Peran Hukum dan Appraiser | Ronny Sompie | https://www.youtube.com/watch?v=7rqzQOZmOvw |
| Uji Kelayakan Calon Anggota Badan Supervisi LPS, Part II | TVR PARLEMEN | https://www.youtube.com/watch?v=5Yum7TtTlCc |
| Sinergi BPK dengan Lembaga Perwakilan dan APIP | GEMILANG PRESS INDONESIA | https://www.youtube.com/watch?v=uoTbzgArENQ |

Metadata judul dan kanal dikonfirmasi melalui oEmbed YouTube. Kartu video menggunakan tipografi dan tombol putar, bukan gambar thumbnail hasil rekayasa.

## Pemeriksaan dan deployment

Pemeriksaan pembaruan: syntax JavaScript; parsing HTML; keberadaan aset sampul; satu H1 per halaman; ID unik; anchor lokal; serta pemisahan link publik dan entri tanpa sumber. Browser visual tetap perlu dicek setelah file dibuka di browser target.

Untuk hosting statis biasa, unggah isi folder website (index.html dan folder pendukung) ke document root seperti public_html. Tidak membutuhkan instalasi package maupun konfigurasi database. Jalankan pemeriksaan desktop/mobile dan form mailto di browser target sebelum peluncuran ke audiens luas. Sumber eksternal dapat berubah atau mensyaratkan login.
