# Latihan Python & Vibe Coding

Kuis pilihan ganda interaktif untuk latihan ujian Python dasar, VS Code, dan vibe coding. Berisi **100 soal** yang dilengkapi pembahasan. Dibuat dengan HTML, CSS, dan JavaScript murni, tanpa framework, tanpa build, dan tanpa server.

## Fitur

- **100 soal dalam 8 materi**: instalasi VS Code & Python, dasar bahasa Python, variabel & aritmetika, percabangan & Boolean, list, perulangan, fungsi, serta vibe coding & deploy ke Vercel.
- **Jenis soal bervariasi**: output kode, lengkapi kode, pernyataan benar (I–IV), pengertian, cari kesalahan, dan studi kasus.
- **Umpan balik langsung**: setelah menjawab, jawaban benar dan salah langsung ditandai, lalu pembahasannya ditampilkan.
- **Timer per soal** yang bisa diatur dari 5 sampai 90 detik, atau dimatikan dengan angka 0.
- **Jumlah soal acak**: saat memilih "Semua materi", jumlah soal bisa ditentukan sendiri, misalnya 20 dari 100.
- **Halaman hasil** berisi skor, rincian benar per materi, daftar soal yang salah beserta pembahasannya, dan tombol untuk mengulang semua soal atau hanya soal yang salah.
- **Bisa berhenti di tengah kuis**: tombol *Selesai* menampilkan skor dari soal yang sudah dijawab, sedangkan tombol *Keluar* kembali ke menu awal. Timer dijeda selama dialog konfirmasi terbuka.
- **Tampilan bisa diatur**: 7 warna tema pelangi dan 4 pilihan font. Pengaturan disimpan di browser.
- **Efek suara** saat jawaban benar atau salah, dibuat dengan Web Audio API sehingga tidak perlu file audio. Bisa dimatikan.
- **Responsif** untuk laptop, tablet, dan HP.

## Cara menjalankan

Tidak perlu instalasi apa pun.

1. Clone atau unduh repository ini.
2. Buka `index.html` langsung di browser dengan klik dua kali.

Aplikasi juga berjalan saat dibuka dari `file://` karena data soal dimuat lewat tag `<script>`, bukan `fetch`.

### Pintasan keyboard

| Tombol | Fungsi |
| --- | --- |
| `A`–`E` | Memilih jawaban |
| `Enter` | Lanjut ke soal berikutnya |
| `Esc` | Menutup dialog konfirmasi |
