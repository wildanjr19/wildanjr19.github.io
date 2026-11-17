# Freelance section - 2026-11-17

Ruang lingkup: section 04 / Freelance di `index.html`.
Sumber data: `CAPAIAN-FREELANCE.md`, enam pekerjaan scraping dan parsing.
File sumber tidak dipublikasikan dan tidak di-commit.

## Keputusan

- Posisi tetap 04, sebelum Kontak.
- Judul section menjadi `Pekerjaan freelance`.
- Enam pekerjaan tampil setara sebagai ledger, bukan kartu.
- Setiap baris punya satu angka utama, satu catatan, alat, dan `details` `Proses & catatan`.
- `Input data Sensus Ekonomi 2026` tetap sebagai footnote, bukan baris penuh.
- Lima praktik kerja ditampilkan sebagai blok `Cara kerja`.

## Data yang tampil

| No | Pekerjaan | Angka | Catatan |
|---|---|---|---|
| 01 | Nama perusahaan jadi nomor WhatsApp | 1.601 perusahaan | 571 status tinggi, 797 review, 181 tanpa WA |
| 02 | Penyalur LPG dari PDF | 5.810 agen | 29 provinsi, 411 kota/kabupaten, 0 duplikat, 831 kontak dilacak |
| 03 | Ulasan Google Maps satu tempat wisata | 28.697 ulasan berteks | dari 56.446 baris, 27.749 tanpa teks |
| 04 | Dataset kuliner Jabodetabek | 4.918 tempat unik | 2.918 kandidat Jakarta Selatan, pilot 30 tempat, harga dan status buka kosong |
| 05 | Tiga dokumen akuntan publik | 1.128 entitas | 194 KAP OJK 2016, 483 KAP Kemenkeu 2023, 451 KJA Kemenkeu |
| 06 | Komentar tiga Reels Instagram | 3.462 baris | 2.651 komentar, 811 balasan, 0 invalid, 0 orphan, 25 record ditahan |

Tidak ada nama klien, industri klien, status berbayar, durasi, tarif, testimoni, atau total jam. Tidak ada penjumlahan angka dari unit berbeda.

## Perubahan file

- `index.html`: section freelance diganti ledger enam baris, intro, footnote, dan blok cara kerja.
- `assets/style.css`: gaya ledger, angka hasil, detail, footnote, dan prinsip kerja. Aturan `freelance-list` dan `freelance-work` yang lama dihapus.
- Screenshot: `desktop.png`, `mobile-390.png`, `freelance-desktop.png`, `freelance-mobile.png`, `freelance-open.png`.

## Verifikasi

| Pemeriksaan | Hasil |
|---|---|
| 390px tanpa detail terbuka | `scrollWidth=390`, `bodyScrollWidth=390`, 0 elemen keluar viewport |
| 390px semua detail terbuka | `scrollWidth=390`, 0 elemen keluar viewport |
| 1440px | `scrollWidth=1425` (15px scrollbar), 0 elemen keluar viewport |
| Jumlah kartu freelance | 6 |
| Jumlah details freelance | 6 |
| Angka dan catatan | Cocok dengan `CAPAIAN-FREELANCE.md` |
| Em dash, en dash, emoji | 0 |
| ID duplikat | 0 |
| Tautan internal | Semua menuju ID yang ada |
| Details | Native `details` dan `summary`, tanpa JavaScript |
| Kontras | Angka hijau 6.58:1, muted 5.86:1, tinta 11.73:1; semua lolos AA |
| Kode `--execute` | Tetap satu baris di 390px setelah `white-space: nowrap` |

## Delivery Gate

### Block 1: Hard Gate

| Rule | Status | Bukti |
|---|---|---|
| R-02 | PASS | 0 em dash dan 0 en dash di `index.html`; copy baru memakai titik, koma, dan titik dua. |
| R-03 | PASS | 390px: `scrollWidth=390`, 0 offender; semua detail terbuka juga 0 offender. |
| R-17 | PASS | Semua angka berasal dari file hasil; tidak ada total gabungan atau angka baru. |
| R-18 | PASS | Tidak ada testimoni atau nama klien. |
| R-23 | PASS | Tidak ada aset visual baru; angka sudah ada di sumber dan tidak dikarang. |
| R-24 | PASS | Nav tetap menuju `#tentang`, `#proyek`, `#keahlian`, `#freelance`, `#kontak`; semua ada. |
| R-25 | PASS | Hijau 6.58:1, muted 5.86:1, tinta 11.73:1; kode tinta di tint hijau 7% tetap tinggi. |
| R-26 | PASS | Details native, tautan punya tujuan; tidak ada kontrol mati. |
| R-27 | PASS | Empty state filter tetap ada; section freelance statis, loading/error tidak berlaku. |
| R-28 | PASS | Tidak ada FAQ. |
| R-32 | PASS | `summary` native, fokus terlihat, bisa dibuka dengan Enter atau Space. |
| R-33 | PASS | HTML dan CSS diedit langsung; tidak ada skrip patch di repo. |
| R-34 | PASS | Tidak ada theme toggle. |
| R-35 | PASS | Chromium 390px dan 1440px; detail dibuka untuk uji overflow; screenshot tersimpan. |
| R-36 | PASS | Tidak ada klaim performa, keamanan, atau pelanggan. |
| R-37 | PASS | Arah desain tetap dari `DESIGN.md`; section memakai palet dan tipografi yang sama. |
| R-38 | PASS | Data nyata; bagian yang gagal atau kosong ditulis apa adanya. |
| R-39 | PASS | `summary` native, `cursor: pointer`, angka dekoratif `aria-hidden`, heading berurutan. |
| R-40 | PASS | Tidak ada media baru; tidak ada skrip pihak ketiga; tidak ada angka performa yang dikarang. |

### Block 2: Purpose-Gate

| Rule | Status | Alasan |
|---|---|---|
| R-01 | PASS | Tidak ada gradien atau glow; palet tetap hijau, krem, kertas, tinta. |
| R-04 | PASS | Tidak ada ikon baru; panah hanya di tautan eksternal. |
| R-06 | PASS | Mono tetap hanya untuk label, alat, dan angka indeks. |
| R-07 | PASS | Tidak ada background grid. |
| R-08 | PASS | Tidak ada panah dekoratif baru. |
| R-09 | PASS | Tidak ada badge. |
| R-10 | PASS | Tidak ada glassmorphism. |
| R-12 | PASS | Tidak ada shadow. |
| R-13 | PASS | Tidak ada glow. |
| R-14 | PASS | Enam baris setara karena pekerjaan setara; hasil angka menjadi hierarki, bukan kartu dekoratif. |
| R-19 | PASS | Tidak ada animasi baru; details native. |
| R-22 | PASS | Tidak ada ilustrasi. |

### Block 3: Liveliness

| Item | Status | Bukti |
|---|---|---|
| Dial eksplisit | PASS | `ENERGY 1 / RHYTHM 2 / MOTION 1` di `DESIGN.md`. |
| Konsisten dengan dial | PASS | Section tenang, ledger rapat, motion hanya hover dan details. |
| Focal point | PASS | Angka hasil hijau dan judul pekerjaan. |
| Whitespace struktural | PASS | Garis ledger dan jarak antarbaris memisahkan pekerjaan. |
| Satu aksen | PASS | Hijau dipakai untuk angka, tautan, label, dan CTA. |
| Motif identitas | PASS | Nomor 01 sampai 06, label mono, dan garis tipis. |
| Design Read | PASS | Ditulis di `DESIGN.md` dan laporan ini. |

### Block 4: Craftsmanship dan Quality Locks

| Rule | Status | Bukti |
|---|---|---|
| C-1 | PASS | Setiap keputusan punya alasan: ledger untuk enam pekerjaan setara, angka untuk bukti, details untuk kedalaman. |
| C-2 | PASS | Semua kontrol berfungsi; details native. |
| C-3 | PASS | Section mengikuti isi klien, bukan template. |
| C-4 | PASS | 390px, 1440px, details terbuka, keyboard native. |
| C-5 | PASS | Tidak ada klaim atau angka karangan. |
| R-05 | PASS | Ledger, bukan grid kartu atau template hero. |
| R-11 | PASS | Sudut tajam; tidak ada pill. |
| R-15 | PASS | CTA tetap `Diskusikan pekerjaan`, spesifik. |
| R-16 | PASS | Tidak ada buzzword; copy memakai angka dan istilah proyek. |
| R-20 | PASS | Identitas tetap konsisten dengan portofolio. |
| R-21 | PASS | Tema terang dengan alasan di `DESIGN.md`. |
| R-29 | PASS | Dua warna inti dan satu aksen. |
| R-30 | PASS | Tidak meniru produk lain. |
| R-31 | PASS | Alasan ledger, angka, details, dan footnote ditulis di laporan ini. |

## Catatan

- `CAPAIAN-FREELANCE.md` tidak di-commit dan tidak ikut build.
- Folder `anti-slop` sudah dikecualikan dari build GitHub Pages.
- Build GitHub Pages dijalankan setelah push; hasil live dicek terpisah.
