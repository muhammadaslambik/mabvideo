# MAB-Video

MAB-Video adalah proyek demo platform berbagi video bergaya YouTube, dibangun
sepenuhnya dengan **HTML, CSS, dan JavaScript murni** (tanpa framework, tanpa
backend/server). Semua data disimpan di browser pengguna menggunakan
`localStorage` dan `IndexedDB`.

## ✨ Fitur Utama

- Beranda dengan grid video, filter kategori, dan pencarian (termasuk pencarian suara)
- Halaman **Watch** lengkap: pemutar video custom (kontrol, kecepatan, kualitas,
  mode teater, miniplayer + Picture-in-Picture, pintasan keyboard ala YouTube),
  deskripsi, video terkait, dan kolom komentar
- **Upload video sungguhan** — video asli disimpan di IndexedDB browser,
  thumbnail otomatis diambil dari frame video, dan langsung bisa diputar ulang
- **MAB-Video Studio** — dashboard channel, halaman Konten, dan Analytics
- **Shorts** — feed video vertikal dengan autoplay saat terlihat di layar
- **Channel page** — profil channel dengan tab Beranda/Video/Shorts/Playlist/Komunitas/Tentang
- Trending, Subscriptions, Riwayat tontonan (nyata, berbasis localStorage), Playlists, Liked
- Login & Register sederhana (sesi di localStorage, demo saja)
- Panel **Admin** sederhana dengan data contoh
- Mode gelap/terang di seluruh halaman

## 📁 Struktur Folder

```
mabvideo/
├── index.html, watch.html, login.html, register.html
├── css/            (main.css, auth.css)
├── js/             (main.js, auth.js)
├── assets/         (images, icons, logos, thumbnails)
├── pages/          (trending, subscriptions, history, playlists, liked, search)
├── shorts/         (feed video pendek)
├── channel/        (halaman profil channel)
├── studio/         (dashboard MAB-Video Studio)
└── admin/          (panel admin, data contoh)
```

## ⚠️ Keterbatasan (situs statis, tanpa server)

- Video yang diupload hanya tersimpan di browser & perangkat yang sama
- Data pengguna/statistik admin adalah data contoh, bukan multi-pengguna nyata
- Beberapa tombol menampilkan *"Fitur ini belum tersedia di demo ini"*

## 🚀 Menjalankan Secara Lokal

```bash
python3 -m http.server 8000
```

lalu buka `http://localhost:8000`.

## 📄 Lisensi

Lihat [LICENSE](./LICENSE).
