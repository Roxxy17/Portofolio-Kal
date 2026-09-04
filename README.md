# Portofolio Kalila Atha Achmad

Portofolio satu halaman yang dibangun dengan Next.js 14, Tailwind CSS, dan Framer Motion.

## Menjalankan

```bash
bun install
bun run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Perintah lain: `bun run build` untuk build produksi, `bun run start` untuk menyajikan hasil build.

## Menyunting isi

Semua teks dan data halaman ada di satu tempat: **`lib/content.js`**.
Sunting file itu saja, tidak perlu menyentuh komponen mana pun.

- Identitas, hero, dan about
- Pengalaman kerja, lengkap dengan ringkasan, poin rincian, dan chip teknologi
- Daftar skill
- Proyek. Tambah objek baru di `work.projects` untuk menambah kartu
- Tautan sosial. Biarkan `href` kosong untuk menyembunyikan ikon dari dock

Di dalam teks `about`, frasa yang dibungkus `==begini==` akan dirender bergaris bawah.

## Struktur

```
app/            layout, halaman, dan token warna di globals.css
components/
  layout/       dock melayang dan pengalih tema
  primitives/   BlurFade, animasi masuk
  sections/     Hero, About, Experience, Skills, Projects, Contact
lib/content.js  seluruh isi halaman
```

## Tema

Terang dan gelap, memakai palet neutral shadcn. Pilihan tema disimpan di
`localStorage` dan dipasang lewat skrip inline sebelum halaman digambar,
sehingga tidak ada kedipan putih saat memuat dalam mode gelap.

## Atribusi

Arah desain dan pola komponen `BlurFade` diadaptasi dari
[portfolio template milik Dillion Verma](https://github.com/dillionverma/portfolio),
yang dirilis di bawah lisensi MIT.

```
MIT License
Copyright (c) 2023 Dillion Verma
```

Isi, data, dan implementasi di repositori ini milik Kalila Atha Achmad.
