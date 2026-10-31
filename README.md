# Website IKMADA

Website profil resmi **Ikatan Keluarga Alumni Yaspida (IKMADA)** sebagai media informasi, publikasi kegiatan, pengenalan organisasi, dan komunikasi keluarga besar alumni Yaspida.

**Website:** https://acarashya.github.io/website-ikmada/

**Repository:** https://github.com/acarashya/website-ikmada

---

## 1. Teknologi yang Digunakan

- HTML5
- Tailwind CSS v4
- CSS
- JavaScript
- Node.js dan NPM
- GitHub Pages

## 2. Fitur Website

1. Beranda dan identitas organisasi.
2. Profil, sejarah, visi, dan misi IKMADA.
3. Struktur kepengurusan.
4. Galeri kegiatan dengan fitur popup.
5. Merchandise resmi IKMADA.
6. Informasi kontak dan lokasi sekretariat.
7. Tautan WhatsApp, email, dan Instagram.

## 3. Struktur Folder

```text
WEB-IKMADA/
│
├── assets/
│   └── images/
│       ├── kegiatan/
│       ├── merchandise/
│       ├── pengurus/
│       ├── hero-banner.jpg
│       └── logo-ikmada.png
│
├── css/
│   ├── style.css
│   └── tailwind.css
│
├── js/
│   └── main.js
│
├── src/
│   └── input.css
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 4. Persyaratan Instalasi

Pastikan perangkat sudah memiliki:

- Node.js
- NPM
- Visual Studio Code
- Browser

## 5. Cara Menjalankan Project

### A. Membuka Project

Buka folder proyek menggunakan Visual Studio Code.

### B. Instalasi Dependencies

Buka terminal di VS Code dan jalankan:

```bash
npm install
```

### C. Menjalankan Tailwind CSS

Jalankan:

```bash
npm run dev:css
```

Perintah ini memantau perubahan file CSS selama pengembangan.

### D. Menjalankan Website

Buka file `index.html` menggunakan ekstensi Live Server di VS Code.

Website akan terbuka melalui browser.

## 6. Build untuk Produksi

Sebelum memperbarui website online, jalankan:

```bash
npm run build:css
```

Perintah tersebut menghasilkan CSS yang sudah diminifikasi di:

```text
css/tailwind.css
```

Pastikan perubahan `index.html`, CSS, JavaScript, dan gambar yang diperlukan ikut diunggah ke repository.

## 7. Cara Memperbarui Website

- **Konten dan informasi:** edit `index.html`.
- **Tampilan tambahan:** edit `css/style.css`.
- **Fitur interaktif:** edit `js/main.js`.
- **Sumber Tailwind:** edit `src/input.css`.
- **Logo dan gambar:** simpan di dalam `assets/images/`.

Setelah perubahan selesai:

1. Jalankan build CSS jika terdapat perubahan yang membutuhkan kompilasi Tailwind.
2. Uji website melalui Live Server.
3. Unggah perubahan ke GitHub.
4. Lakukan commit ke branch `main`.
5. Periksa hasil pembaruan melalui GitHub Pages.

## 8. Publikasi Website

Website dipublikasikan menggunakan GitHub Pages.

**URL:** https://acarashya.github.io/website-ikmada/

Branch publikasi: `main`

Folder publikasi: `/ (root)`

## 9. Informasi Organisasi

**Ikatan Keluarga Alumni Yaspida (IKMADA)**

Instagram: [@ikmada43](https://www.instagram.com/ikmada43/)

Email: ikmada43@gmail.com

WhatsApp: 0819-0345-2647

## 10. Lisensi dan Pengembangan

Proyek ini dikembangkan sebagai website profil dan media informasi organisasi IKMADA.

Pengembangan dan pemeliharaan selanjutnya dapat dilakukan melalui repository GitHub resmi.

---

**IKMADA — Satu Identitas, Satu Solidaritas!**
