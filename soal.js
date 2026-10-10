const MATERI = [
  {
    "id": "s1",
    "nama": "Instalasi VS Code & Python",
    "indikator": "Interpreter, PATH, pip, venv, menjalankan program"
  },
  {
    "id": "s2",
    "nama": "Dasar bahasa Python",
    "indikator": "Tipe data, input/output, konversi, sintaks, string"
  },
  {
    "id": "s3",
    "nama": "Variabel & aritmetika",
    "indikator": "Operator, prioritas, floor division, assignment"
  },
  {
    "id": "s4",
    "nama": "Percabangan & Boolean",
    "indikator": "Kondisi, truthiness, and/or/not, alur if"
  },
  {
    "id": "s5",
    "nama": "List / array",
    "indikator": "Index, slicing, metode list, alias dan copy"
  },
  {
    "id": "s6",
    "nama": "Perulangan",
    "indikator": "range, for/while, break/continue, nested loop"
  },
  {
    "id": "s7",
    "nama": "Fungsi Python",
    "indikator": "Argumen, return, scope, efek terhadap objek"
  },
  {
    "id": "s8",
    "nama": "Vibe coding & Vercel",
    "indikator": "Prompt, web frontend, GitHub, deploy, keamanan"
  }
];

const SOAL = [
  {
    "nomor": 1,
    "materi": "s1",
    "kategori": "Instalasi VS Code & Python",
    "pertanyaan": "Kamu baru menginstal VS Code dan ekstensi Python. Saat mengetik <code>python --version</code> di terminal, muncul pesan <em>&#x27;python&#x27; is not recognized</em> / <em>command not found</em>. Apa penyebab paling mungkin?",
    "kode": "",
    "opsi": [
      "Belum ada folder proyek yang dibuka",
      "VS Code harus dijalankan sebagai administrator",
      "File .py belum disimpan",
      "Ekstensi Python di VS Code belum diaktifkan",
      "Python interpreter belum terinstal, atau lokasinya belum masuk PATH"
    ],
    "jawaban": 4,
    "pembahasan": "<p>VS Code hanyalah <strong>editor</strong>, dan ekstensi Python hanya membantu editor bekerja dengan Python. Yang menjalankan kode adalah <strong>interpreter Python</strong>, yang harus diinstal terpisah.</p><p>Terminal mencari perintah <code>python</code> di daftar folder bernama <strong>PATH</strong>. Jika Python belum terinstal, atau saat instalasi opsi <em>Add Python to PATH</em> tidak dicentang, perintah tidak ditemukan. Solusinya: instal Python (centang <em>Add to PATH</em>), lalu tutup dan buka lagi terminal.</p>"
  },
  {
    "nomor": 2,
    "materi": "s1",
    "kategori": "Instalasi VS Code & Python",
    "pertanyaan": "Kamu sudah menjalankan <code>pip install requests</code> di terminal dan berhasil. Namun saat file dijalankan dari VS Code muncul <code>ModuleNotFoundError: No module named &#x27;requests&#x27;</code>. Apa yang paling tepat diperiksa pertama kali?",
    "kode": "",
    "opsi": [
      "Pastikan interpreter yang dipilih di VS Code (<em>Python: Select Interpreter</em>) sama dengan Python tempat pip memasang paket",
      "Ganti baris import menjadi <code>import Requests</code>",
      "Instal ulang VS Code",
      "Ganti nama file kamu menjadi <code>requests.py</code>",
      "Jalankan <code>pip install requests</code> berulang kali sampai berhasil"
    ],
    "jawaban": 0,
    "pembahasan": "<p>Di satu komputer bisa ada beberapa Python (misalnya Python sistem dan Python di <code>.venv</code>). <code>pip</code> di terminal bisa memasang paket ke Python A, sementara VS Code menjalankan file dengan Python B. Cek interpreter aktif di pojok kanan bawah VS Code atau lewat Command Palette → <em>Python: Select Interpreter</em>.</p><p>Cara aman memasang paket: <code>python -m pip install requests</code>, supaya pip pasti milik interpreter yang sama.</p><p><strong>Jebakan:</strong> menamai file kamu <code>requests.py</code> justru memperparah masalah, karena file itu akan menutupi library asli saat di-import. Nama modul Python juga peka huruf besar-kecil, jadi <code>import Requests</code> salah.</p>"
  },
  {
    "nomor": 3,
    "materi": "s1",
    "kategori": "Instalasi VS Code & Python",
    "pertanyaan": "Perintah yang benar untuk membuat virtual environment bernama <code>.venv</code> di folder proyek adalah...",
    "kode": "",
    "opsi": [
      "<code>pip install .venv</code>",
      "<code>python -m venv .venv</code>",
      "<code>python venv create .venv</code>",
      "<code>code --venv .venv</code>",
      "<code>pip venv .venv</code>"
    ],
    "jawaban": 1,
    "pembahasan": "<p><code>python -m venv .venv</code> artinya: jalankan modul bawaan <code>venv</code> milik Python, lalu buat environment di folder <code>.venv</code>.</p><p>Setelah dibuat, aktifkan (Windows: <code>.venv\\Scripts\\activate</code>, macOS/Linux: <code>source .venv/bin/activate</code>) dan pilih interpreter <code>.venv</code> di VS Code.</p>"
  },
  {
    "nomor": 4,
    "materi": "s1",
    "kategori": "Instalasi VS Code & Python",
    "pertanyaan": "Apa fungsi utama virtual environment (<code>.venv</code>) dalam sebuah proyek?",
    "kode": "",
    "opsi": [
      "Memisahkan paket/dependensi tiap proyek agar versinya tidak saling bentrok",
      "Menggantikan VS Code sebagai editor",
      "Mengubah file .py menjadi aplikasi .exe",
      "Mengunggah proyek ke GitHub secara otomatis",
      "Membuat kode Python berjalan lebih cepat"
    ],
    "jawaban": 0,
    "pembahasan": "<p>Proyek A mungkin butuh library versi 1, proyek B butuh versi 2. Dengan <code>.venv</code>, setiap proyek punya folder paket sendiri, sehingga <code>pip install</code> di satu proyek tidak mengganggu proyek lain.</p><p><code>.venv</code> tidak mempercepat kode dan tidak berhubungan dengan GitHub. Folder ini biasanya justru dimasukkan ke <code>.gitignore</code> agar tidak ikut di-push.</p>"
  },
  {
    "nomor": 5,
    "materi": "s1",
    "kategori": "Instalasi VS Code & Python",
    "pertanyaan": "File <code>halo.py</code> berada di folder yang sedang terbuka di terminal. Perintah untuk menjalankannya adalah...",
    "kode": "",
    "opsi": [
      "<code>python -m venv halo.py</code>",
      "<code>import halo.py</code>",
      "<code>run halo.py</code>",
      "<code>python halo.py</code>",
      "<code>pip halo.py</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p>Format umumnya <code>python nama_file.py</code>. Di Windows kadang dipakai <code>py halo.py</code>, di macOS/Linux <code>python3 halo.py</code>.</p><p>Jika muncul <em>No such file or directory</em>, terminal tidak berada di folder yang sama dengan file. Cek isi folder dengan <code>dir</code> (Windows) atau <code>ls</code> (macOS/Linux), lalu pindah folder dengan <code>cd</code>.</p>"
  },
  {
    "nomor": 6,
    "materi": "s1",
    "kategori": "Instalasi VS Code & Python",
    "pertanyaan": "Pernyataan yang benar tentang <code>pip install numpy</code> dan <code>import numpy</code> adalah...",
    "kode": "",
    "opsi": [
      "<code>pip install</code> harus dijalankan setiap kali file dijalankan",
      "Keduanya ditulis di dalam file .py",
      "<code>import</code> otomatis mengunduh paket dari internet jika belum ada",
      "<code>pip install</code> dijalankan di terminal untuk memasang paket; <code>import</code> ditulis di kode untuk memakai paket yang sudah terpasang",
      "Keduanya sama, hanya beda penulisan"
    ],
    "jawaban": 3,
    "pembahasan": "<p><code>pip</code> adalah program pemasang paket, cukup dijalankan sekali per environment di terminal. <code>import</code> tidak mengunduh apa pun; ia hanya memuat paket yang sudah ada. Jika paket belum terpasang di interpreter yang dipakai, <code>import</code> gagal dengan <code>ModuleNotFoundError</code>.</p>"
  },
  {
    "nomor": 7,
    "materi": "s2",
    "kategori": "Dasar bahasa Python",
    "pertanyaan": "Saat program berikut dijalankan, user mengetik <code>17</code> lalu Enter. Apa yang dicetak oleh <code>print</code>?",
    "kode": "umur = input(\"Umur: \")\nprint(type(umur))",
    "opsi": [
      "<code>&lt;class &#x27;float&#x27;&gt;</code>",
      "<code>&lt;class &#x27;bool&#x27;&gt;</code>",
      "<code>&lt;class &#x27;int&#x27;&gt;</code>",
      "<code>&lt;class &#x27;str&#x27;&gt;</code>",
      "<code>&lt;class &#x27;NoneType&#x27;&gt;</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p><code>input()</code> <strong>selalu</strong> mengembalikan string, apa pun yang diketik user. <code>&quot;17&quot;</code> adalah teks, bukan angka.</p><p>Agar bisa dihitung, ubah dulu: <code>umur = int(input(&quot;Umur: &quot;))</code>.</p>"
  },
  {
    "nomor": 8,
    "materi": "s2",
    "kategori": "Dasar bahasa Python",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "print(\"5\" + \"3\")\nprint(\"5\" * 3)",
    "opsi": [
      "<code>53</code> lalu <code>555</code>",
      "<code>8</code> lalu <code>15</code>",
      "<code>53</code> lalu <code>15</code>",
      "<code>8</code> lalu <code>555</code>",
      "<code>TypeError</code>"
    ],
    "jawaban": 0,
    "pembahasan": "<p>Pada string, <code>+</code> berarti <strong>menyambung</strong> (concatenation): <code>&quot;5&quot; + &quot;3&quot;</code> → <code>&quot;53&quot;</code>.</p><p>String dikali bilangan bulat berarti <strong>mengulang</strong>: <code>&quot;5&quot; * 3</code> → <code>&quot;555&quot;</code>. Tidak ada perhitungan angka karena keduanya string.</p>"
  },
  {
    "nomor": 9,
    "materi": "s2",
    "kategori": "Dasar bahasa Python",
    "pertanyaan": "Apa yang terjadi saat kode berikut dijalankan?",
    "kode": "n = \"7\"\nhasil = n + 5\nprint(hasil)",
    "opsi": [
      "Mencetak <code>12</code>",
      "Mencetak <code>75</code>",
      "Muncul <code>ValueError</code>",
      "Muncul <code>TypeError</code>",
      "Mencetak <code>7 5</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p>Python tidak otomatis mengubah tipe. <code>&quot;7&quot; + 5</code> mencoba menyambung string dengan int, dan itu operasi antar tipe yang tidak cocok, sehingga muncul <strong>TypeError</strong>.</p><p>Perbaikan: <code>int(n) + 5</code> → <code>12</code> (penjumlahan angka), atau <code>n + str(5)</code> → <code>&quot;75&quot;</code> (penyambungan teks).</p>"
  },
  {
    "nomor": 10,
    "materi": "s2",
    "kategori": "Dasar bahasa Python",
    "pertanyaan": "Apa hasil dari kode berikut?",
    "kode": "print(int(\"3.5\"))",
    "opsi": [
      "<code>3</code>",
      "<code>4</code>",
      "<code>TypeError</code>",
      "<code>3.5</code>",
      "<code>ValueError</code>"
    ],
    "jawaban": 4,
    "pembahasan": "<p><code>int()</code> hanya bisa mengubah string yang berisi <strong>bilangan bulat</strong>, seperti <code>&quot;3&quot;</code>. String <code>&quot;3.5&quot;</code> bertipe benar (string) tetapi nilainya tidak bisa diubah ke int, sehingga muncul <strong>ValueError</strong>.</p><p>Bandingkan: <code>int(3.5)</code> (float, bukan string) → <code>3</code> karena desimal dibuang, dan <code>int(float(&quot;3.5&quot;))</code> → <code>3</code>.</p><p>Cara mengingat: <strong>ValueError</strong> = tipenya cocok, isinya tidak bisa dipakai. <strong>TypeError</strong> = tipenya sendiri tidak cocok untuk operasi itu.</p>"
  },
  {
    "nomor": 11,
    "materi": "s2",
    "kategori": "Dasar bahasa Python",
    "pertanyaan": "Isian yang tepat untuk <code>___</code> agar program mencetak <code>2026-10-10</code> adalah...",
    "kode": "print(\"2026\", \"10\", \"10\", ___)",
    "opsi": [
      "<code>end=\"-\"</code>",
      "<code>sep=-</code>",
      "<code>\"-\"</code>",
      "<code>join=\"-\"</code>",
      "<code>sep=\"-\"</code>"
    ],
    "jawaban": 4,
    "pembahasan": "<ul><li><code>sep</code> mengatur <strong>pemisah antar-argumen</strong> (default spasi), jadi hasilnya <code>2026-10-10</code>.</li><li><code>end=\"-\"</code> hanya mengganti akhir baris → <code>2026 10 10-</code>.</li><li><code>sep=-</code> tanpa kutip → <code>SyntaxError</code>.</li><li><code>\"-\"</code> dianggap argumen keempat → <code>2026 10 10 -</code>.</li><li><code>print</code> tidak punya parameter <code>join</code> → <code>TypeError</code>.</li></ul>"
  },
  {
    "nomor": 12,
    "materi": "s2",
    "kategori": "Dasar bahasa Python",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "print(bool(\"\"), bool(\" \"), bool(\"0\"))",
    "opsi": [
      "<code>False False True</code>",
      "<code>False True True</code>",
      "<code>False False False</code>",
      "<code>False True False</code>",
      "<code>True True True</code>"
    ],
    "jawaban": 1,
    "pembahasan": "<p>Untuk string, hanya <strong>string kosong</strong> <code>&quot;&quot;</code> yang bernilai False. <code>&quot; &quot;</code> berisi satu spasi dan <code>&quot;0&quot;</code> berisi karakter nol, jadi keduanya tidak kosong dan bernilai True.</p><p><strong>Jebakan:</strong> angka <code>0</code> (int) memang False, tetapi string <code>&quot;0&quot;</code> bernilai True.</p>"
  },
  {
    "nomor": 13,
    "materi": "s2",
    "kategori": "Dasar bahasa Python",
    "pertanyaan": "Isian yang tepat untuk <code>___</code> agar program mencetak <code>Halo Budi, namamu 4 huruf</code> adalah...",
    "kode": "nama = \"Budi\"\nprint(___\"Halo {nama}, namamu {len(nama)} huruf\")",
    "opsi": [
      "<code>r</code>",
      "<code>$</code>",
      "<code>%</code>",
      "<code>str</code>",
      "<code>f</code>"
    ],
    "jawaban": 4,
    "pembahasan": "<p>Awalan <code>f</code> membuat <strong>f-string</strong>: ekspresi di dalam <code>{ }</code> dihitung lalu disisipkan ke teks. <code>{len(nama)}</code> menjadi <code>4</code>.</p><p>Awalan <code>r</code> (raw string) mencetak kurung kurawal apa adanya, sedangkan <code>$</code>, <code>%</code>, dan <code>str</code> di depan kutip tidak valid sebagai awalan string.</p>"
  },
  {
    "nomor": 14,
    "materi": "s2",
    "kategori": "Dasar bahasa Python",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "x = None\nprint(type(3.0), x is None)",
    "opsi": [
      "<code>&lt;class &#x27;int&#x27;&gt; False</code>",
      "<code>&lt;class &#x27;float&#x27;&gt; True</code>",
      "<code>&lt;class &#x27;int&#x27;&gt; True</code>",
      "<code>&lt;class &#x27;float&#x27;&gt; False</code>",
      "<code>float None</code>"
    ],
    "jawaban": 1,
    "pembahasan": "<p><code>3.0</code> memakai titik desimal, jadi bertipe <strong>float</strong> walaupun nilainya bulat.</p><p><code>x is None</code> memeriksa apakah <code>x</code> adalah objek <code>None</code>, hasilnya <code>True</code>. Untuk memeriksa None, gunakan <code>is None</code>, bukan <code>== None</code>.</p>"
  },
  {
    "nomor": 15,
    "materi": "s3",
    "kategori": "Variabel & aritmetika",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "a = 13\nb = 5\nprint(a // b, a % b, 2 + 3 * 4)",
    "opsi": [
      "<code>2 3 20</code>",
      "<code>2.6 3 14</code>",
      "<code>2 3 14</code>",
      "<code>2 2.6 20</code>",
      "<code>3 2 14</code>"
    ],
    "jawaban": 2,
    "pembahasan": "<p><code>13 // 5</code> = <strong>2</strong> (hasil bagi dibulatkan ke bawah). <code>13 % 5</code> = <strong>3</strong> (sisa bagi, karena 5 × 2 = 10 dan 13 − 10 = 3).</p><p><code>2 + 3 * 4</code>: perkalian dulu, 3 × 4 = 12, lalu 2 + 12 = <strong>14</strong>. Jawaban 20 muncul jika salah menghitung dari kiri.</p>"
  },
  {
    "nomor": 16,
    "materi": "s3",
    "kategori": "Variabel & aritmetika",
    "pertanyaan": "Di mana tanda kurung harus diletakkan agar ekspresi <code>2 + 3 * 4 ** 2</code> menghasilkan <code>400</code>?",
    "kode": "print(___)",
    "opsi": [
      "<code>(2 + 3) * 4 ** 2</code>",
      "<code>2 + (3 * 4) ** 2</code>",
      "<code>((2 + 3) * 4) ** 2</code>",
      "<code>(2 + 3 * 4) ** 2</code>",
      "<code>2 + 3 * (4 ** 2)</code>"
    ],
    "jawaban": 2,
    "pembahasan": "<p>Tanpa kurung, urutannya <code>**</code> → <code>*</code> → <code>+</code>, hasilnya 50. Agar 400, penjumlahan dan perkalian harus dikerjakan <strong>sebelum</strong> pangkat: (2 + 3) = 5 → 5 × 4 = 20 → 20² = 400.</p><ul><li><code>(2 + 3) * 4 ** 2</code> → 5 × 16 = 80</li><li><code>2 + (3 * 4) ** 2</code> → 2 + 144 = 146</li><li><code>(2 + 3 * 4) ** 2</code> → 14² = 196</li><li><code>2 + 3 * (4 ** 2)</code> → 50 (sama dengan tanpa kurung)</li></ul>"
  },
  {
    "nomor": 17,
    "materi": "s3",
    "kategori": "Variabel & aritmetika",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "print(-9 // 4, 9 // 4)",
    "opsi": [
      "<code>-2.25 2.25</code>",
      "<code>-2 2</code>",
      "<code>-3 3</code>",
      "<code>-2 3</code>",
      "<code>-3 2</code>"
    ],
    "jawaban": 4,
    "pembahasan": "<p><code>//</code> adalah <strong>floor division</strong>: hasil bagi dibulatkan ke <strong>bawah</strong> (menuju negatif tak hingga), bukan sekadar membuang desimal.</p><p>9 / 4 = 2,25 → dibulatkan ke bawah = <strong>2</strong>.<br>−9 / 4 = −2,25 → dibulatkan ke bawah = <strong>−3</strong> (karena −3 lebih kecil dari −2,25).</p><p>Kesalahan umum: menjawab −2 karena mengira desimalnya cukup dibuang.</p>"
  },
  {
    "nomor": 18,
    "materi": "s3",
    "kategori": "Variabel & aritmetika",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "print(10 / 2, 10 // 2)",
    "opsi": [
      "<code>5 5</code>",
      "<code>5.00 5</code>",
      "<code>5.0 5.0</code>",
      "<code>5 5.0</code>",
      "<code>5.0 5</code>"
    ],
    "jawaban": 4,
    "pembahasan": "<p>Operator <code>/</code> <strong>selalu</strong> menghasilkan float di Python 3, walaupun hasilnya bulat: <code>10 / 2</code> → <code>5.0</code>.</p><p><code>//</code> pada dua int menghasilkan int: <code>10 // 2</code> → <code>5</code>. (Jika salah satunya float, misal <code>10.0 // 2</code>, hasilnya <code>5.0</code>.)</p>"
  },
  {
    "nomor": 19,
    "materi": "s3",
    "kategori": "Variabel & aritmetika",
    "pertanyaan": "Isian yang tepat untuk <code>___</code> agar program mencetak <code>6</code> adalah...",
    "kode": "x = 10\nx += 5\nx ___ 4\nx *= 2\nprint(x)",
    "opsi": [
      "<code>/=</code>",
      "<code>-=</code>",
      "<code>+=</code>",
      "<code>**=</code>",
      "<code>//=</code>"
    ],
    "jawaban": 4,
    "pembahasan": "<p>Telusuri nilainya: <code>x = 10</code> → <code>x += 5</code> → 15 → <code>x //= 4</code> → 15 // 4 = <strong>3</strong> → <code>x *= 2</code> → <strong>6</strong>.</p><ul><li><code>/=</code> → 3.75 → 7.5</li><li><code>-=</code> → 11 → 22</li><li><code>+=</code> → 19 → 38</li><li><code>**=</code> → 50625 → 101250</li></ul>"
  },
  {
    "nomor": 20,
    "materi": "s3",
    "kategori": "Variabel & aritmetika",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "print(2 ** 3 ** 2)",
    "opsi": [
      "<code>81</code>",
      "<code>36</code>",
      "<code>512</code>",
      "<code>64</code>",
      "<code>12</code>"
    ],
    "jawaban": 2,
    "pembahasan": "<p>Operator pangkat <code>**</code> bersifat <strong>asosiatif kanan</strong>: dihitung dari kanan ke kiri.</p><p><code>2 ** 3 ** 2</code> = <code>2 ** (3 ** 2)</code> = <code>2 ** 9</code> = <strong>512</strong>.</p><p>Jika dihitung dari kiri, <code>(2 ** 3) ** 2</code> = 64, dan itu salah. Operator lain seperti <code>-</code> dan <code>/</code> dihitung dari kiri.</p>"
  },
  {
    "nomor": 21,
    "materi": "s3",
    "kategori": "Variabel & aritmetika",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "print(round(2.5), round(3.5))",
    "opsi": [
      "<code>3 3</code>",
      "<code>2 3</code>",
      "<code>2 4</code>",
      "<code>3 4</code>",
      "<code>2.5 3.5</code>"
    ],
    "jawaban": 2,
    "pembahasan": "<p><code>round()</code> di Python memakai pembulatan <strong>ke bilangan genap terdekat</strong> jika nilainya tepat di tengah (.5). Disebut juga <em>banker&#x27;s rounding</em>.</p><p><code>round(2.5)</code> → 2 (genap), <code>round(3.5)</code> → 4 (genap). Untuk nilai yang tidak tepat di tengah, misal <code>round(2.6)</code>, hasilnya 3 seperti biasa.</p>"
  },
  {
    "nomor": 22,
    "materi": "s3",
    "kategori": "Variabel & aritmetika",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "a = 5\nb = a\na = 8\nprint(a == b, b)",
    "opsi": [
      "<code>False 5</code>",
      "<code>True 5</code>",
      "<code>True 8</code>",
      "<code>False 8</code>",
      "<code>SyntaxError</code>"
    ],
    "jawaban": 0,
    "pembahasan": "<p><code>b = a</code> membuat <code>b</code> menunjuk nilai 5. Saat <code>a = 8</code>, <code>a</code> menunjuk nilai baru, sedangkan <code>b</code> tetap 5. Bilangan tidak bisa diubah di tempat (<em>immutable</em>), jadi mengganti <code>a</code> tidak memengaruhi <code>b</code>.</p><p><code>a == b</code> → <code>8 == 5</code> → <strong>False</strong>. Ingat: <code>=</code> menetapkan nilai, <code>==</code> membandingkan.</p><p>Bandingkan dengan list di materi 5: di sana <code>b = a</code> lalu <code>b.append(...)</code> ikut mengubah <code>a</code>.</p>"
  },
  {
    "nomor": 23,
    "materi": "s4",
    "kategori": "Percabangan & Boolean",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "x = 7\nprint(5 < x <= 9, x > 10 or x % 2 == 1)",
    "opsi": [
      "<code>True False</code>",
      "<code>SyntaxError</code>",
      "<code>True True</code>",
      "<code>False False</code>",
      "<code>False True</code>"
    ],
    "jawaban": 2,
    "pembahasan": "<p><code>5 &lt; x &lt;= 9</code> adalah <strong>perbandingan berantai</strong>, sama dengan <code>5 &lt; x and x &lt;= 9</code>. Untuk x = 7: <code>5 &lt; 7</code> True dan <code>7 &lt;= 9</code> True → <strong>True</strong>.</p><p><code>x &gt; 10 or x % 2 == 1</code> → <code>False or True</code> → <strong>True</strong> (7 ganjil, sisa bagi 2 adalah 1).</p>"
  },
  {
    "nomor": 24,
    "materi": "s4",
    "kategori": "Percabangan & Boolean",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "print(not (3 > 2 and 2 > 5))",
    "opsi": [
      "<code>3</code>",
      "<code>False</code>",
      "<code>Error</code>",
      "<code>True</code>",
      "<code>None</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p>Kerjakan bagian dalam kurung dulu:</p><ul><li><code>3 &gt; 2</code> → True</li><li><code>2 &gt; 5</code> → False</li><li><code>True and False</code> → False</li><li><code>not False</code> → <strong>True</strong></li></ul>"
  },
  {
    "nomor": 25,
    "materi": "s4",
    "kategori": "Percabangan & Boolean",
    "pertanyaan": "Isian yang tepat untuk <code>___</code> agar program mencetak <code>B</code> <strong>tanpa</strong> <code>ZeroDivisionError</code> adalah...",
    "kode": "x = 0\nif x != 0 ___ 10 / x > 1:\n    print(\"A\")\nelse:\n    print(\"B\")",
    "opsi": [
      "<code>or</code>",
      "<code>and</code>",
      "<code>+</code>",
      "<code>not</code>",
      "<code>then</code>"
    ],
    "jawaban": 1,
    "pembahasan": "<p><code>and</code> bersifat <strong>short-circuit</strong>: jika sisi kiri sudah False, sisi kanan tidak dihitung. Karena <code>x != 0</code> bernilai False, <code>10 / x</code> tidak pernah dijalankan dan program mencetak <code>B</code>.</p><p>Dengan <code>or</code>, sisi kiri False membuat Python tetap menghitung <code>10 / 0</code> → <code>ZeroDivisionError</code>. <code>not</code> dan <code>then</code> di posisi itu adalah <code>SyntaxError</code>.</p>"
  },
  {
    "nomor": 26,
    "materi": "s4",
    "kategori": "Percabangan & Boolean",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "nilai = 85\nif nilai >= 70:\n    print(\"Lulus\")\nif nilai >= 80:\n    print(\"Baik\")\nelse:\n    print(\"Cukup\")",
    "opsi": [
      "Hanya <code>Baik</code>",
      "<code>Lulus</code>, <code>Baik</code>, lalu <code>Cukup</code>",
      "<code>Lulus</code> lalu <code>Cukup</code>",
      "<code>Lulus</code> lalu <code>Baik</code>",
      "Hanya <code>Lulus</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p>Ada <strong>dua <code>if</code> terpisah</strong>, jadi keduanya dievaluasi satu per satu.</p><ul><li><code>if nilai &gt;= 70</code> → 85 ≥ 70 True → cetak <code>Lulus</code>.</li><li><code>if nilai &gt;= 80 ... else</code> → 85 ≥ 80 True → cetak <code>Baik</code>. <code>else</code> milik <code>if</code> kedua ini, jadi dilewati.</li></ul><p>Jika <code>if</code> kedua diganti <code>elif</code>, hanya <code>Lulus</code> yang tercetak, karena if–elif–else memilih satu cabang saja.</p>"
  },
  {
    "nomor": 27,
    "materi": "s4",
    "kategori": "Percabangan & Boolean",
    "pertanyaan": "Program penentu grade berikut dijalankan. Apa outputnya?",
    "kode": "nilai = 95\nif nilai >= 60:\n    grade = \"C\"\nelif nilai >= 75:\n    grade = \"B\"\nelif nilai >= 90:\n    grade = \"A\"\nprint(grade)",
    "opsi": [
      "<code>NameError</code>",
      "<code>A B C</code>",
      "<code>C</code>",
      "<code>A</code>",
      "<code>B</code>"
    ],
    "jawaban": 2,
    "pembahasan": "<p>if–elif–else memilih <strong>cabang pertama</strong> yang kondisinya True, lalu sisanya dilewati.</p><p>95 ≥ 60 sudah True di cabang pertama, jadi <code>grade = &quot;C&quot;</code>. Cabang <code>&gt;= 75</code> dan <code>&gt;= 90</code> tidak pernah diperiksa.</p><p>Ini bug logika: urutan kondisi harus dari yang paling ketat (<code>&gt;= 90</code>) ke yang paling longgar (<code>&gt;= 60</code>).</p>"
  },
  {
    "nomor": 28,
    "materi": "s4",
    "kategori": "Percabangan & Boolean",
    "pertanyaan": "Program harus mencetak <code>kosong</code> hanya jika <code>data</code> <strong>dan</strong> <code>nama</code> sama-sama kosong. Isian yang tepat untuk <code>___</code> adalah...",
    "kode": "data = []\nnama = \"\"\nif ___:\n    print(\"kosong\")",
    "opsi": [
      "<code>data and nama</code>",
      "<code>data == None and nama == None</code>",
      "<code>len(data) + len(nama)</code>",
      "<code>data = [] and nama = \"\"</code>",
      "<code>not data and not nama</code>"
    ],
    "jawaban": 4,
    "pembahasan": "<p>List kosong <code>[]</code> dan string kosong <code>\"\"</code> bernilai <strong>False</strong> dalam kondisi. Jadi <code>not data</code> berarti “data kosong”, dan <code>not data and not nama</code> berarti keduanya kosong.</p><ul><li><code>data and nama</code> → False, tidak mencetak apa pun.</li><li>List/string kosong <strong>tidak sama</strong> dengan <code>None</code>.</li><li><code>len(data) + len(nama)</code> → 0 → False.</li><li><code>=</code> di dalam <code>if</code> adalah <code>SyntaxError</code>; perbandingan memakai <code>==</code>.</li></ul>"
  },
  {
    "nomor": 29,
    "materi": "s4",
    "kategori": "Percabangan & Boolean",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "umur = 20\npunya_kartu = False\nprint(umur >= 18 and punya_kartu, umur >= 18 or punya_kartu)",
    "opsi": [
      "<code>True False</code>",
      "<code>20 False</code>",
      "<code>True True</code>",
      "<code>False False</code>",
      "<code>False True</code>"
    ],
    "jawaban": 4,
    "pembahasan": "<p><code>umur &gt;= 18</code> → True.</p><ul><li><code>True and False</code> → <strong>False</strong>. <code>and</code> butuh <strong>semua</strong> sisi True.</li><li><code>True or False</code> → <strong>True</strong>. <code>or</code> cukup <strong>salah satu</strong> sisi True.</li></ul>"
  },
  {
    "nomor": 30,
    "materi": "s4",
    "kategori": "Percabangan & Boolean",
    "pertanyaan": "Kode berikut gagal dijalankan. Di mana letak kesalahannya?",
    "kode": "x = 5\nif x = 5:\n    print(\"lima\")",
    "opsi": [
      "Baris 3, karena <code>print</code> harus memakai tanda kutip tunggal",
      "Baris 2, karena kondisi harus memakai <code>==</code>, bukan <code>=</code>",
      "Baris 1, karena <code>x</code> belum dideklarasikan tipenya",
      "Tidak ada error; outputnya <code>lima</code>",
      "Baris 2, karena <code>if</code> harus ditulis huruf kapital"
    ],
    "jawaban": 1,
    "pembahasan": "<p><code>=</code> adalah <strong>assignment</strong> (menetapkan nilai) dan tidak boleh dipakai sebagai kondisi <code>if</code>. Python langsung menolak dengan <strong>SyntaxError</strong> sebelum program berjalan.</p><p>Yang benar: <code>if x == 5:</code>. Python tidak perlu deklarasi tipe, dan kutip tunggal maupun ganda sama-sama sah.</p>"
  },
  {
    "nomor": 31,
    "materi": "s5",
    "kategori": "List / array",
    "pertanyaan": "Isian yang tepat untuk <code>___</code> agar program mencetak <code>[20, 30]</code> adalah...",
    "kode": "a = [10, 20, 30, 40, 50]\nprint(a[___])",
    "opsi": [
      "<code>1:2</code>",
      "<code>2:3</code>",
      "<code>1:4</code>",
      "<code>1:3</code>",
      "<code>2:4</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p>Slicing <code>a[mulai:berhenti]</code> mengambil indeks <code>mulai</code> sampai <strong>sebelum</strong> <code>berhenti</code>. Nilai 20 ada di indeks 1 dan 30 di indeks 2, jadi <code>a[1:3]</code>.</p><ul><li><code>1:2</code> → [20]</li><li><code>2:3</code> → [30]</li><li><code>1:4</code> → [20, 30, 40]</li><li><code>2:4</code> → [30, 40]</li></ul>"
  },
  {
    "nomor": 32,
    "materi": "s5",
    "kategori": "List / array",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "a = [4, 8]\nb = a\nb.append(12)\nprint(a)",
    "opsi": [
      "<code>[4, 8, 12]</code>",
      "<code>Error</code>",
      "<code>[12]</code>",
      "<code>[4, 8]</code>",
      "<code>[4, 8, [12]]</code>"
    ],
    "jawaban": 0,
    "pembahasan": "<p><code>b = a</code> <strong>tidak menyalin</strong> list. <code>a</code> dan <code>b</code> adalah dua nama untuk <strong>objek list yang sama</strong> (alias). Saat <code>b.append(12)</code>, list itu berubah, sehingga <code>a</code> juga terlihat berubah.</p><p>Untuk membuat salinan terpisah, gunakan <code>b = a.copy()</code> atau <code>b = a[:]</code>.</p>"
  },
  {
    "nomor": 33,
    "materi": "s5",
    "kategori": "List / array",
    "pertanyaan": "Isian yang tepat untuk <code>___</code> agar <code>a</code> <strong>tidak ikut berubah</strong> dan program mencetak <code>[4, 8] [4, 8, 12]</code> adalah...",
    "kode": "a = [4, 8]\nb = ___\nb.append(12)\nprint(a, b)",
    "opsi": [
      "<code>a</code>",
      "<code>[a]</code>",
      "<code>a.sort()</code>",
      "<code>a.copy()</code>",
      "<code>list</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p><code>b = a</code> tidak menyalin list; <code>a</code> dan <code>b</code> menunjuk <strong>list yang sama</strong>, sehingga <code>append</code> lewat <code>b</code> ikut mengubah <code>a</code>.</p><p><code>a.copy()</code> membuat list baru dengan isi yang sama. Opsi lain: <code>[a]</code> membungkus list di dalam list, <code>a.sort()</code> mengembalikan <code>None</code>, dan <code>list</code> tanpa kurung hanyalah nama tipe.</p>"
  },
  {
    "nomor": 34,
    "materi": "s5",
    "kategori": "List / array",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "a = [1, 2]\nb = [1, 2]\na.append([3, 4])\nb.extend([3, 4])\nprint(len(a), len(b), a)",
    "opsi": [
      "<code>3 3 [1, 2, [3, 4]]</code>",
      "<code>3 4 [1, 2, [3, 4]]</code>",
      "<code>4 4 [1, 2, 3, 4]</code>",
      "<code>4 3 [1, 2, 3, 4]</code>",
      "<code>2 4 [1, 2]</code>"
    ],
    "jawaban": 1,
    "pembahasan": "<p><code>append()</code> menambahkan <strong>satu objek</strong> apa adanya. List <code>[3, 4]</code> masuk sebagai satu elemen, jadi <code>a</code> = <code>[1, 2, [3, 4]]</code> dengan panjang <strong>3</strong>.</p><p><code>extend()</code> memasukkan <strong>setiap elemen</strong> satu per satu, jadi <code>b</code> = <code>[1, 2, 3, 4]</code> dengan panjang <strong>4</strong>.</p>"
  },
  {
    "nomor": 35,
    "materi": "s5",
    "kategori": "List / array",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "m = [[1, 2, 3], [4, 5, 6]]\nprint(len(m), len(m[0]), m[1][2])",
    "opsi": [
      "<code>3 2 6</code>",
      "<code>6 3 6</code>",
      "<code>2 3 6</code>",
      "<code>2 6 6</code>",
      "<code>2 3 5</code>"
    ],
    "jawaban": 2,
    "pembahasan": "<p><code>m</code> adalah list luar berisi <strong>2</strong> list. Jadi <code>len(m)</code> = 2, bukan 6.</p><p><code>m[0]</code> = <code>[1, 2, 3]</code> → panjang <strong>3</strong>.</p><p><code>m[1][2]</code>: ambil list indeks 1 (<code>[4, 5, 6]</code>), lalu elemen indeks 2 → <strong>6</strong>.</p>"
  },
  {
    "nomor": 36,
    "materi": "s5",
    "kategori": "List / array",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "a = [3, 1, 3, 2]\na.remove(3)\nprint(a)",
    "opsi": [
      "<code>[3, 1, 3]</code>",
      "<code>[1, 2, 3]</code>",
      "<code>[1, 3, 2]</code>",
      "<code>[3, 1, 2]</code>",
      "<code>[1, 2]</code>"
    ],
    "jawaban": 2,
    "pembahasan": "<p><code>remove(nilai)</code> menghapus <strong>kecocokan pertama</strong> dari nilai tersebut, bukan semuanya. Angka 3 pertama (indeks 0) dihapus; angka 3 kedua tetap ada.</p><p>Jangan tertukar: <code>remove()</code> menerima <strong>nilai</strong>, sedangkan <code>pop()</code> menerima <strong>indeks</strong>.</p>"
  },
  {
    "nomor": 37,
    "materi": "s5",
    "kategori": "List / array",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "a = [3, 1, 2]\nb = a.sort()\nprint(a, b)",
    "opsi": [
      "<code>[3, 1, 2] None</code>",
      "<code>None [1, 2, 3]</code>",
      "<code>[1, 2, 3] [1, 2, 3]</code>",
      "<code>[3, 1, 2] [1, 2, 3]</code>",
      "<code>[1, 2, 3] None</code>"
    ],
    "jawaban": 4,
    "pembahasan": "<p><code>sort()</code> mengurutkan list <strong>di tempat</strong> (list aslinya berubah) dan mengembalikan <strong>None</strong>. Jadi <code>a</code> menjadi <code>[1, 2, 3]</code>, sedangkan <code>b</code> berisi <code>None</code>.</p><p>Jika ingin list baru yang terurut tanpa mengubah aslinya, gunakan <code>sorted(a)</code>.</p>"
  },
  {
    "nomor": 38,
    "materi": "s5",
    "kategori": "List / array",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "buah = [\"apel\", \"jeruk\"]\nprint(\"Jeruk\" in buah, \"apel\" in buah)",
    "opsi": [
      "<code>False False</code>",
      "<code>False True</code>",
      "<code>True False</code>",
      "<code>1 0</code>",
      "<code>True True</code>"
    ],
    "jawaban": 1,
    "pembahasan": "<p>Operator <code>in</code> memeriksa keberadaan nilai dan menghasilkan <strong>bool</strong>. Perbandingan string peka huruf besar-kecil: <code>&quot;Jeruk&quot;</code> ≠ <code>&quot;jeruk&quot;</code>, jadi hasilnya False. <code>&quot;apel&quot;</code> ada di list → True.</p>"
  },
  {
    "nomor": 39,
    "materi": "s6",
    "kategori": "Perulangan",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "total = 0\nfor n in range(2, 9, 3):\n    total += n\nprint(total)",
    "opsi": [
      "<code>27</code>",
      "<code>10</code>",
      "<code>9</code>",
      "<code>15</code>",
      "<code>20</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p><code>range(2, 9, 3)</code> mulai dari 2, naik 3, berhenti <strong>sebelum</strong> 9: nilainya <strong>2, 5, 8</strong>.</p><p>total: 0 → 2 → 7 → <strong>15</strong>.</p>"
  },
  {
    "nomor": 40,
    "materi": "s6",
    "kategori": "Perulangan",
    "pertanyaan": "Isian yang tepat untuk <code>___</code> agar program mencetak <code>[10, 7, 4, 1]</code> adalah...",
    "kode": "print(list(range(___)))",
    "opsi": [
      "<code>10, 1, -3</code>",
      "<code>10, 0, 3</code>",
      "<code>10, 0, -3</code>",
      "<code>0, 10, 3</code>",
      "<code>1, 10, 3</code>"
    ],
    "jawaban": 2,
    "pembahasan": "<p>Untuk menghitung mundur, <code>langkah</code> harus negatif dan <code>berhenti</code> lebih kecil dari angka terakhir yang diinginkan (1), misalnya 0.</p><ul><li><code>10, 1, -3</code> → [10, 7, 4] (1 tidak ikut)</li><li><code>10, 0, 3</code> → [] (langkah positif tidak bisa turun)</li><li><code>0, 10, 3</code> → [0, 3, 6, 9]</li><li><code>1, 10, 3</code> → [1, 4, 7]</li></ul>"
  },
  {
    "nomor": 41,
    "materi": "s6",
    "kategori": "Perulangan",
    "pertanyaan": "Isian yang tepat untuk <code>(1)</code> dan <code>(2)</code> agar program mencetak <code>1 2 4 5</code> adalah...",
    "kode": "for i in range(1, 8):\n    if i == 3:\n        (1)\n    if i == 6:\n        (2)\n    print(i, end=\" \")",
    "opsi": [
      "(1) <code>continue</code> dan (2) <code>break</code>",
      "(1) <code>break</code> dan (2) <code>continue</code>",
      "(1) <code>continue</code> dan (2) <code>continue</code>",
      "(1) <code>pass</code> dan (2) <code>break</code>",
      "(1) <code>break</code> dan (2) <code>break</code>"
    ],
    "jawaban": 0,
    "pembahasan": "<p>Angka 3 harus <strong>dilewati</strong> tetapi loop tetap jalan → <code>continue</code>. Loop harus <strong>berhenti total</strong> saat 6 → <code>break</code>.</p><ul><li><code>break</code>, <code>continue</code> → 1 2</li><li><code>continue</code>, <code>continue</code> → 1 2 4 5 7</li><li><code>pass</code>, <code>break</code> → 1 2 3 4 5 (<code>pass</code> tidak melakukan apa-apa)</li><li><code>break</code>, <code>break</code> → 1 2</li></ul>"
  },
  {
    "nomor": 42,
    "materi": "s6",
    "kategori": "Perulangan",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "i = 1\nwhile i < 20:\n    i *= 3\nprint(i)",
    "opsi": [
      "<code>81</code>",
      "<code>9</code>",
      "<code>20</code>",
      "<code>27</code>",
      "<code>18</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p>Periksa kondisi sebelum setiap iterasi:</p><ul><li>i=1 → 1 &lt; 20 → i = 3</li><li>i=3 → 3 &lt; 20 → i = 9</li><li>i=9 → 9 &lt; 20 → i = 27</li><li>i=27 → 27 &lt; 20 False → berhenti</li></ul><p><code>print</code> berada di luar loop, jadi hanya mencetak nilai akhir: <strong>27</strong>. Nilai akhir boleh melewati 20, karena kondisi diperiksa sebelum perkalian.</p>"
  },
  {
    "nomor": 43,
    "materi": "s6",
    "kategori": "Perulangan",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "count = 0\nfor i in range(3):\n    for j in range(1, 5):\n        count += 1\nprint(count)",
    "opsi": [
      "<code>12</code>",
      "<code>7</code>",
      "<code>15</code>",
      "<code>8</code>",
      "<code>9</code>"
    ],
    "jawaban": 0,
    "pembahasan": "<p>Loop luar berjalan 3 kali (i = 0, 1, 2). Untuk <strong>setiap</strong> i, loop dalam berjalan 4 kali (j = 1, 2, 3, 4).</p><p>Total iterasi = 3 × 4 = <strong>12</strong>. Pengecoh 7 muncul jika banyak iterasi dijumlahkan (3 + 4), bukan dikalikan.</p>"
  },
  {
    "nomor": 44,
    "materi": "s6",
    "kategori": "Perulangan",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "for i in range(3):\n    for j in range(3):\n        if j == 1:\n            break\n        print(i, j)",
    "opsi": [
      "<code>0 0</code>, <code>1 0</code>, <code>2 0</code> (tiap baris)",
      "<code>0 0</code> lalu <code>0 1</code>",
      "Hanya <code>0 0</code>",
      "Tidak ada output",
      "<code>0 0</code>, <code>1 1</code>, <code>2 2</code> (tiap baris)"
    ],
    "jawaban": 0,
    "pembahasan": "<p><code>break</code> hanya keluar dari loop <strong>terdekat</strong>, yaitu loop <code>j</code>. Loop <code>i</code> tetap berjalan.</p><p>Untuk setiap i: j = 0 → cetak <code>i 0</code>; j = 1 → break. Jadi tercetak <code>0 0</code>, <code>1 0</code>, <code>2 0</code>.</p>"
  },
  {
    "nomor": 45,
    "materi": "s6",
    "kategori": "Perulangan",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "total = 0\nfor x in range(1, 11):\n    if x % 3 == 0:\n        total += x\nprint(total)",
    "opsi": [
      "<code>27</code>",
      "<code>55</code>",
      "<code>3</code>",
      "<code>18</code>",
      "<code>30</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p>Loop memeriksa 1 sampai 10, tetapi hanya menambahkan angka yang habis dibagi 3: <strong>3, 6, 9</strong>. Total = 18.</p><p>Versi singkatnya: <code>sum(x for x in range(1, 11) if x % 3 == 0)</code>. Pengecoh 55 adalah jumlah 1–10 tanpa filter.</p>"
  },
  {
    "nomor": 46,
    "materi": "s6",
    "kategori": "Perulangan",
    "pertanyaan": "Mengapa loop berikut tidak pernah berhenti?",
    "kode": "i = 0\nwhile i < 5:\n    print(i)",
    "opsi": [
      "Karena <code>while</code> harus selalu memakai <code>range()</code>",
      "Karena angka 5 harus ditulis <code>5.0</code>",
      "Karena nilai <code>i</code> tidak pernah berubah, sehingga <code>i &lt; 5</code> selalu True",
      "Karena loop <code>while</code> memang selalu berjalan selamanya",
      "Karena <code>print</code> harus diletakkan di luar loop"
    ],
    "jawaban": 2,
    "pembahasan": "<p>Loop <code>while</code> berhenti saat kondisinya menjadi False. Di sini <code>i</code> tetap 0, jadi <code>0 &lt; 5</code> selalu True dan loop tidak pernah berhenti (<em>infinite loop</em>).</p><p>Perbaikan: tambahkan <code>i += 1</code> di dalam loop. Jika terlanjur berjalan di terminal, hentikan dengan <strong>Ctrl + C</strong>.</p>"
  },
  {
    "nomor": 47,
    "materi": "s7",
    "kategori": "Fungsi Python",
    "pertanyaan": "Isian yang tepat untuk <code>___</code> agar program mencetak <code>7 12</code> adalah...",
    "kode": "def hitung(x, ___):\n    return x + y\n\nprint(hitung(4), hitung(y=10, x=2))",
    "opsi": [
      "<code>y</code>",
      "<code>y=3</code>",
      "<code>y==3</code>",
      "<code>3</code>",
      "<code>y: 3</code>"
    ],
    "jawaban": 1,
    "pembahasan": "<p><code>y=3</code> memberi <strong>nilai default</strong>: jika <code>y</code> tidak dikirim, nilainya 3. Jadi <code>hitung(4)</code> = 4 + 3 = 7, dan <code>hitung(y=10, x=2)</code> = 12.</p><ul><li><code>y</code> tanpa default → <code>hitung(4)</code> error karena argumen kurang.</li><li><code>y==3</code> dan <code>3</code> → <code>SyntaxError</code>.</li><li><code>y: 3</code> hanya anotasi tipe, bukan default → tetap error saat <code>hitung(4)</code>.</li></ul>"
  },
  {
    "nomor": 48,
    "materi": "s7",
    "kategori": "Fungsi Python",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "def sapa(nama):\n    print(\"Halo\", nama)\n\nhasil = sapa(\"Ani\")\nprint(hasil)",
    "opsi": [
      "<code>Halo Ani</code> lalu <code>Halo Ani</code>",
      "<code>Halo Ani</code> lalu <code>None</code>",
      "<code>Halo Ani</code> saja",
      "<code>None</code> saja",
      "Error karena <code>sapa</code> tidak punya return"
    ],
    "jawaban": 1,
    "pembahasan": "<p>Saat <code>sapa(&quot;Ani&quot;)</code> dipanggil, <code>print</code> di dalamnya menampilkan <code>Halo Ani</code>. Fungsi itu tidak punya <code>return</code>, jadi otomatis mengembalikan <strong>None</strong>, dan <code>hasil</code> berisi None.</p><p>Inilah beda <code>print</code> dan <code>return</code>: <code>print</code> hanya menampilkan ke layar; <code>return</code> mengirim nilai ke pemanggil.</p>"
  },
  {
    "nomor": 49,
    "materi": "s7",
    "kategori": "Fungsi Python",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "x = 10\n\ndef ubah():\n    x = 99\n\nubah()\nprint(x)",
    "opsi": [
      "<code>None</code>",
      "<code>99</code>",
      "<code>10</code>",
      "<code>NameError</code>",
      "<code>109</code>"
    ],
    "jawaban": 2,
    "pembahasan": "<p><code>x = 99</code> di dalam fungsi membuat <strong>variabel lokal</strong> baru bernama <code>x</code>, yang hanya hidup di dalam <code>ubah()</code>. Variabel <code>x</code> global di luar tidak tersentuh dan tetap <strong>10</strong>.</p><p>(Mengubah variabel global dari dalam fungsi butuh <code>global x</code>, tetapi cara yang lebih baik adalah memakai <code>return</code>.)</p>"
  },
  {
    "nomor": 50,
    "materi": "s7",
    "kategori": "Fungsi Python",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "def tambah(lst):\n    lst.append(4)\n\ndata = [1, 2, 3]\ntambah(data)\nprint(data)",
    "opsi": [
      "<code>[1, 2, 3, [4]]</code>",
      "<code>[1, 2, 3, 4]</code>",
      "<code>[1, 2, 3]</code>",
      "<code>None</code>",
      "<code>[4]</code>"
    ],
    "jawaban": 1,
    "pembahasan": "<p>Parameter <code>lst</code> menunjuk <strong>objek list yang sama</strong> dengan <code>data</code>. <code>append()</code> <strong>mengubah objek itu</strong> di tempat (mutasi), sehingga perubahannya terlihat dari luar fungsi.</p><p>Bandingkan dengan soal berikutnya tentang integer, yang tidak bisa diubah di tempat.</p>"
  },
  {
    "nomor": 51,
    "materi": "s7",
    "kategori": "Fungsi Python",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "def naik(n):\n    n += 1\n    return n\n\na = 5\nnaik(a)\nprint(a)",
    "opsi": [
      "<code>5</code>",
      "<code>Error</code>",
      "<code>1</code>",
      "<code>6</code>",
      "<code>None</code>"
    ],
    "jawaban": 0,
    "pembahasan": "<p>Integer bersifat <strong>immutable</strong>. <code>n += 1</code> membuat nilai baru (6) untuk variabel lokal <code>n</code>; nilai <code>a</code> di luar tetap 5.</p><p>Fungsi memang mengembalikan 6, tetapi nilai itu <strong>tidak disimpan</strong> ke mana pun. Agar <code>a</code> berubah, tulis <code>a = naik(a)</code>.</p>"
  },
  {
    "nomor": 52,
    "materi": "s7",
    "kategori": "Fungsi Python",
    "pertanyaan": "Apa output kode berikut?",
    "kode": "def cek(n):\n    if n > 0:\n        return \"positif\"\n        print(\"baris ini\")\n    return \"bukan positif\"\n\nprint(cek(5), cek(-2))",
    "opsi": [
      "<code>positif baris ini bukan positif</code>",
      "<code>positif bukan positif</code>",
      "<code>positif</code> saja",
      "<code>baris ini</code>",
      "<code>None None</code>"
    ],
    "jawaban": 1,
    "pembahasan": "<p><code>return</code> mengirim nilai <strong>dan langsung mengakhiri</strong> fungsi. Baris <code>print(&quot;baris ini&quot;)</code> setelah return tidak pernah dijalankan.</p><ul><li><code>cek(5)</code> → masuk if → return <code>&quot;positif&quot;</code>.</li><li><code>cek(-2)</code> → if False → lanjut ke return <code>&quot;bukan positif&quot;</code>.</li></ul>"
  },
  {
    "nomor": 53,
    "materi": "s7",
    "kategori": "Fungsi Python",
    "pertanyaan": "Isian yang tepat untuk <code>___</code> agar program mencetak <code>1 9</code> adalah...",
    "kode": "def min_max(angka):\n    return ___\n\nkecil, besar = min_max([3, 9, 1])\nprint(kecil, besar)",
    "opsi": [
      "<code>min(angka), max(angka)</code>",
      "<code>max(angka), min(angka)</code>",
      "<code>min(angka) max(angka)</code>",
      "<code>min(angka) + max(angka)</code>",
      "<code>[min, max]</code>"
    ],
    "jawaban": 0,
    "pembahasan": "<p>Fungsi bisa mengembalikan <strong>beberapa nilai</strong> dengan memisahkannya memakai koma; hasilnya tuple <code>(1, 9)</code> yang lalu dibongkar ke <code>kecil, besar</code> sesuai urutan.</p><ul><li>Urutan terbalik → mencetak <code>9 1</code>.</li><li>Tanpa koma → <code>SyntaxError</code>.</li><li><code>min + max</code> → satu angka (10), tidak bisa dibongkar ke dua variabel.</li><li><code>[min, max]</code> mengembalikan fungsinya, bukan hasilnya.</li></ul>"
  },
  {
    "nomor": 54,
    "materi": "s7",
    "kategori": "Fungsi Python",
    "pertanyaan": "Diberikan fungsi berikut. Pemanggilan mana yang menyebabkan <strong>error</strong>?",
    "kode": "def diskon(harga, persen=10):\n    return harga - harga * persen / 100",
    "opsi": [
      "<code>diskon(50000, persen=5)</code>",
      "<code>diskon(50000, 20)</code>",
      "<code>diskon(50000)</code>",
      "<code>diskon(persen=20, harga=50000)</code>",
      "<code>diskon(harga=50000, 20)</code>"
    ],
    "jawaban": 4,
    "pembahasan": "<p>Aturannya: <strong>argumen posisi harus ditulis sebelum argumen bernama</strong>. <code>diskon(harga=50000, 20)</code> menaruh argumen posisi (20) setelah argumen bernama, sehingga muncul <strong>SyntaxError</strong>.</p><p>Pemanggilan lain sah:</p><ul><li><code>diskon(50000)</code> → persen default 10 → <code>45000.0</code></li><li><code>diskon(50000, 20)</code> → <code>40000.0</code></li><li><code>diskon(persen=20, harga=50000)</code> → <code>40000.0</code> (urutan bebas jika semua bernama)</li><li><code>diskon(50000, persen=5)</code> → <code>47500.0</code></li></ul>"
  },
  {
    "nomor": 55,
    "materi": "s8",
    "kategori": "Vibe coding & Vercel",
    "pertanyaan": "Kamu ingin AI membuatkan website kalkulator BMI. Prompt mana yang paling mungkin menghasilkan kode sesuai kebutuhan?",
    "kode": "",
    "opsi": [
      "“Buatkan website BMI yang bagus.”",
      "“Tolong kode BMI, cepat ya, yang penting jalan.”",
      "“Buatkan website BMI seperti milik rumah sakit terkenal, warnanya biru.”",
      "“Buatkan kalkulator BMI dengan HTML, CSS, dan JavaScript murni untuk pelajar SMA. Input berat (kg) dan tinggi (cm), tampilkan BMI 1 desimal beserta kategorinya. Responsif di HP. Tolak input kosong, nol, atau negatif dengan pesan error. Uji: 60 kg, 170 cm → 20,8 (Normal).”",
      "“Buatkan website BMI paling canggih dengan semua fitur yang mungkin.”"
    ],
    "jawaban": 3,
    "pembahasan": "<p>Prompt yang baik memuat: <strong>tujuan</strong> (kalkulator BMI), <strong>pengguna</strong> (pelajar SMA), <strong>fitur</strong> (input, hasil, kategori), <strong>teknologi</strong> (HTML/CSS/JS murni), <strong>tampilan</strong> (responsif), <strong>edge case</strong> (input kosong/nol/negatif), serta <strong>data contoh dan kriteria berhasil</strong> (60 kg, 170 cm → 20,8).</p><p>Prompt lain terlalu kabur (“bagus”, “canggih”, “yang penting jalan”), sehingga AI harus menebak dan hasilnya sulit diuji.</p>"
  },
  {
    "nomor": 56,
    "materi": "s8",
    "kategori": "Vibe coding & Vercel",
    "pertanyaan": "Pada website hasil generate AI, tombol <strong>Tambah ke Keranjang</strong> tampil rapi tetapi tidak terjadi apa-apa saat diklik. Apa yang paling tepat diperiksa pertama?",
    "kode": "",
    "opsi": [
      "File CSS, karena warna tombolnya mungkin salah",
      "Pengaturan domain di Vercel",
      "Tag <code>&lt;title&gt;</code> di HTML",
      "Ukuran gambar produk",
      "Event handler JavaScript untuk tombol itu dan pesan error di Console browser (DevTools)"
    ],
    "jawaban": 4,
    "pembahasan": "<p>Pembagian tugas: <strong>HTML</strong> = struktur, <strong>CSS</strong> = tampilan, <strong>JavaScript</strong> = interaksi/event. Tombol yang tampil benar tetapi tidak bereaksi adalah masalah JavaScript.</p><p>Yang dicek: apakah file <code>.js</code> sudah terhubung (<code>&lt;script src=...&gt;</code>), apakah <code>id</code>/selector di <code>addEventListener</code> cocok dengan tombolnya, dan apakah ada error merah di <strong>Console</strong> (F12) yang menghentikan script.</p>"
  },
  {
    "nomor": 57,
    "materi": "s8",
    "kategori": "Vibe coding & Vercel",
    "pertanyaan": "Urutan alur deploy yang benar untuk website yang dihubungkan ke Vercel lewat GitHub adalah...",
    "kode": "",
    "opsi": [
      "Edit kode → deploy Vercel → baru commit ke GitHub",
      "Edit dan uji di lokal → commit → push ke GitHub → Vercel build dan deploy dari branch yang dikonfigurasi",
      "Push ke GitHub → edit kode → commit → Vercel build",
      "Deploy di Vercel → commit → push → edit kode",
      "Commit → edit kode → uji di lokal → Vercel build tanpa push"
    ],
    "jawaban": 1,
    "pembahasan": "<p>Kode diubah dan diuji di komputer → <strong>commit</strong> (menyimpan versi di Git lokal) → <strong>push</strong> (mengirim ke GitHub) → Vercel mendeteksi push ke branch yang terhubung, lalu otomatis <strong>build</strong> dan <strong>deploy</strong>.</p><p>Vercel membaca kode dari GitHub, jadi tanpa push tidak ada yang berubah di Vercel.</p>"
  },
  {
    "nomor": 58,
    "materi": "s8",
    "kategori": "Vibe coding & Vercel",
    "pertanyaan": "Website berjalan normal di localhost, tetapi status deploy di Vercel <strong>Failed</strong>. Langkah pertama yang paling tepat?",
    "kode": "",
    "opsi": [
      "Baca build log di Vercel untuk melihat pesan error dan baris penyebabnya",
      "Langsung pindah ke layanan hosting lain",
      "Hapus repo dan buat ulang dari awal",
      "Minta AI menulis ulang seluruh proyek tanpa menyertakan pesan error",
      "Abaikan, karena di localhost sudah berjalan"
    ],
    "jawaban": 0,
    "pembahasan": "<p><strong>Build log</strong> menunjukkan persis langkah mana yang gagal. Penyebab umum: paket hanya terpasang di laptop tetapi tidak tercatat di <code>package.json</code>, beda huruf besar-kecil pada nama file, environment variable belum diisi di Vercel, atau perintah build salah.</p><p>Jika minta bantuan AI, sertakan potongan error dari log supaya perbaikannya tepat sasaran. Berhasil di localhost belum membuktikan berhasil build di server.</p>"
  },
  {
    "nomor": 59,
    "materi": "s8",
    "kategori": "Vibe coding & Vercel",
    "pertanyaan": "Website kamu memanggil API cuaca berbayar dengan API key. Cara menyimpan key yang paling aman saat deploy di Vercel adalah...",
    "kode": "",
    "opsi": [
      "Menyimpannya di <code>config.js</code> lalu push ke repo publik",
      "Menyimpannya sebagai Environment Variable di Vercel dan memakainya hanya dari kode server (misalnya serverless function/API route)",
      "Menuliskannya di README agar tim mudah memakainya",
      "Menulisnya langsung di file JavaScript frontend",
      "Menaruhnya di komentar HTML agar tidak terlihat"
    ],
    "jawaban": 1,
    "pembahasan": "<p>Semua yang dikirim ke browser (HTML, CSS, JS frontend, termasuk komentar) <strong>bisa dilihat siapa pun</strong> lewat <em>View Source</em> atau DevTools. Repo publik juga bisa dibaca siapa saja.</p><p>Simpan key di <strong>Environment Variable</strong> (Settings → Environment Variables di Vercel), baca hanya dari kode server, dan masukkan file <code>.env</code> ke <code>.gitignore</code>. Hati-hati: variabel berawalan publik (misalnya <code>NEXT_PUBLIC_</code>) tetap dikirim ke browser.</p>"
  },
  {
    "nomor": 60,
    "materi": "s8",
    "kategori": "Vibe coding & Vercel",
    "pertanyaan": "Kamu tidak sengaja push file berisi API key ke repo GitHub publik. Tindakan paling tepat adalah...",
    "kode": "",
    "opsi": [
      "Segera mencabut (revoke) dan membuat ulang key di dashboard penyedia API, lalu memindahkan key ke environment variable",
      "Membiarkannya jika repo jarang dikunjungi",
      "Mengganti nama variabelnya saja",
      "Menghapus file itu dengan commit baru, lalu selesai",
      "Mengubah repo menjadi private, lalu selesai"
    ],
    "jawaban": 0,
    "pembahasan": "<p>Key yang sudah ter-push harus dianggap <strong>bocor</strong>. Menghapus file dengan commit baru tidak cukup, karena key masih ada di <strong>riwayat Git</strong>. Bot otomatis juga memindai GitHub untuk mencari key dalam hitungan menit.</p><p>Satu-satunya langkah aman: <strong>revoke</strong> key lama agar tidak berlaku, buat key baru, lalu simpan di environment variable.</p>"
  },
  {
    "nomor": 61,
    "materi": "s8",
    "kategori": "Vibe coding & Vercel",
    "pertanyaan": "Setelah deploy, halaman utama terbuka tetapi link ke <code>tentang.html</code> menampilkan <strong>404 Not Found</strong>. Di laptop Windows, link itu berfungsi. Penyebab yang paling mungkin adalah...",
    "kode": "",
    "opsi": [
      "API key salah",
      "CSS belum di-minify",
      "Nama file atau path tidak cocok, misalnya file bernama <code>Tentang.html</code> sementara link menulis <code>tentang.html</code>",
      "Laptop kehabisan baterai saat deploy",
      "Tombol belum diberi event handler"
    ],
    "jawaban": 2,
    "pembahasan": "<p><strong>404</strong> berarti server tidak menemukan file/route di alamat itu, jadi yang dicek adalah <strong>path dan routing</strong>. Windows tidak membedakan huruf besar-kecil pada nama file, sedangkan server Vercel membedakannya. <code>Tentang.html</code> dan <code>tentang.html</code> dianggap file berbeda.</p><p>Cek juga apakah file berada di folder yang benar (misalnya ikut ter-push, bukan hanya ada di laptop).</p>"
  },
  {
    "nomor": 62,
    "materi": "s8",
    "kategori": "Vibe coding & Vercel",
    "pertanyaan": "Kamu push perubahan ke branch <code>dev</code>, tetapi website di domain utama tidak berubah. Penjelasan paling mungkin?",
    "kode": "",
    "opsi": [
      "Production deployment mengikuti branch produksi (umumnya <code>main</code>); push ke branch lain menghasilkan Preview Deployment dengan URL terpisah",
      "GitHub menolak semua push ke branch selain main",
      "Vercel sedang rusak",
      "Perubahan harus dikirim manual ke Vercel lewat email",
      "Browser akan menampilkan versi lama selamanya"
    ],
    "jawaban": 0,
    "pembahasan": "<p>Vercel men-deploy <strong>domain produksi</strong> dari branch produksi, biasanya <code>main</code>. Push ke branch lain seperti <code>dev</code> tetap di-build, tetapi menjadi <strong>Preview Deployment</strong> dengan URL sendiri, berguna untuk menguji sebelum digabung.</p><p>Agar tampil di domain utama: merge <code>dev</code> ke <code>main</code> (atau ubah pengaturan production branch).</p>"
  },
  {
    "nomor": 63,
    "materi": "s8",
    "kategori": "Vibe coding & Vercel",
    "pertanyaan": "AI sudah menghasilkan website, dan halamannya tampil di localhost. Kondisi mana yang <strong>paling</strong> menunjukkan website siap dipublikasikan?",
    "kode": "",
    "opsi": [
      "Kodenya panjang sehingga pasti lengkap",
      "Sudah di-push ke GitHub",
      "Build berhasil, fitur utama sudah dicoba, tampilan di HP sudah dicek, input salah ditangani, dan tidak ada API key di kode frontend/repo",
      "AI menyatakan kodenya sudah benar",
      "Tampilannya di laptop sudah bagus"
    ],
    "jawaban": 2,
    "pembahasan": "<p>Tampil di localhost hanya membuktikan halaman bisa terbuka di satu komputer. Siap rilis berarti sudah <strong>diuji</strong>: build sukses, fitur berfungsi, tampilan responsif, kasus input salah aman, dan rahasia tidak bocor.</p><p>Alur kerjanya: prompt spesifik → generate → <strong>review kode</strong> → jalankan → uji → perbaiki → deploy. Klaim AI bahwa kodenya benar bukan pengganti pengujian.</p>"
  },
  {
    "nomor": 64,
    "materi": "s1",
    "kategori": "Instalasi VS Code & Python",
    "pertanyaan": "Kamu sudah membuat <code>.venv</code>, tetapi VS Code masih memakai Python global sehingga library di venv tidak terbaca. Langkah yang tepat adalah...",
    "kode": "",
    "opsi": [
      "Menginstal ulang VS Code",
      "Menghapus folder <code>.venv</code> lalu menjalankan file lagi",
      "Buka Command Palette (<code>Ctrl+Shift+P</code>) → <strong>Python: Select Interpreter</strong> → pilih interpreter dari <code>.venv</code>",
      "Mengganti nama file menjadi <code>venv.py</code>",
      "Menjalankan <code>pip uninstall python</code>"
    ],
    "jawaban": 2,
    "pembahasan": "<p>VS Code menjalankan file memakai <strong>interpreter yang dipilih</strong>. Jika yang terpilih Python global, library yang dipasang di <code>.venv</code> tidak akan ditemukan.</p><p>Pilih interpreter <code>.venv</code> lewat <strong>Python: Select Interpreter</strong>; nama interpreter aktif juga tampil di status bar kanan bawah.</p>"
  },
  {
    "nomor": 65,
    "materi": "s1",
    "kategori": "Instalasi VS Code & Python",
    "pertanyaan": "Perintah untuk <strong>mengaktifkan</strong> virtual environment <code>.venv</code> di terminal <strong>PowerShell Windows</strong> adalah...",
    "kode": "",
    "opsi": [
      "<code>.venv\\Scripts\\Activate.ps1</code>",
      "<code>source .venv/bin/activate</code>",
      "<code>python activate .venv</code>",
      "<code>pip activate .venv</code>",
      "<code>cd .venv</code>"
    ],
    "jawaban": 0,
    "pembahasan": "<p>Di Windows, skrip aktivasi ada di folder <code>Scripts</code>: <code>.venv\\Scripts\\Activate.ps1</code> (PowerShell) atau <code>.venv\\Scripts\\activate.bat</code> (CMD).</p><p><code>source .venv/bin/activate</code> adalah versi macOS/Linux. Setelah aktif, prompt terminal biasanya diawali <code>(.venv)</code>.</p>"
  },
  {
    "nomor": 66,
    "materi": "s1",
    "kategori": "Instalasi VS Code & Python",
    "pertanyaan": "Temanmu meng-clone proyekmu dan ingin memasang semua library yang tercatat di <code>requirements.txt</code>. Perintah yang tepat adalah...",
    "kode": "",
    "opsi": [
      "<code>pip install requirements.txt</code>",
      "<code>python requirements.txt</code>",
      "<code>pip freeze requirements.txt</code>",
      "<code>pip install -r requirements.txt</code>",
      "<code>import requirements.txt</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p>Opsi <code>-r</code> berarti membaca daftar paket dari file. Tanpa <code>-r</code>, pip mengira <code>requirements.txt</code> adalah nama paket.</p><p>File itu sendiri biasanya dibuat dengan <code>pip freeze &gt; requirements.txt</code>.</p>"
  },
  {
    "nomor": 67,
    "materi": "s1",
    "kategori": "Instalasi VS Code & Python",
    "pertanyaan": "Perhatikan pernyataan tentang pip dan virtual environment berikut.<span class=\"pernyataan\"><b>I.</b> <code>pip install</code> dijalankan di terminal, bukan ditulis di dalam file <code>.py</code>.</span><span class=\"pernyataan\"><b>II.</b> Library yang dipasang di dalam <code>.venv</code> otomatis tersedia untuk semua proyek lain.</span><span class=\"pernyataan\"><b>III.</b> <code>python -m pip install ...</code> memastikan paket terpasang ke interpreter yang sama dengan perintah <code>python</code>.</span><span class=\"pernyataan\"><b>IV.</b> Folder <code>.venv</code> sebaiknya ikut di-push ke GitHub supaya teman tidak perlu instal lagi.</span><span class=\"tanya\">Pernyataan yang <strong>benar</strong> adalah...</span>",
    "kode": "",
    "opsi": [
      "I, II, dan III",
      "I dan III",
      "II dan IV",
      "III dan IV",
      "Semua benar"
    ],
    "jawaban": 1,
    "pembahasan": "<ul><li><strong>I benar</strong>: <code>pip</code> adalah program terminal, bukan perintah Python.</li><li><strong>II salah</strong>: tujuan venv justru <em>mengisolasi</em> library per proyek.</li><li><strong>III benar</strong>: <code>python -m pip</code> memakai pip milik interpreter itu sendiri.</li><li><strong>IV salah</strong>: <code>.venv</code> besar dan spesifik komputer; cukup bagikan <code>requirements.txt</code>, lalu masukkan <code>.venv</code> ke <code>.gitignore</code>.</li></ul>"
  },
  {
    "nomor": 68,
    "materi": "s2",
    "kategori": "Dasar bahasa Python",
    "pertanyaan": "Apa fungsi <strong>komentar</strong> (baris yang diawali <code>#</code>) dalam kode Python?",
    "kode": "",
    "opsi": [
      "Menjalankan baris tersebut lebih dulu sebelum baris lain",
      "Menandai baris yang mengandung error",
      "Mencetak teks ke layar seperti <code>print()</code>",
      "Membuat variabel yang bisa dipakai di semua file",
      "Memberi catatan untuk pembaca kode; baris tersebut diabaikan saat program dijalankan"
    ],
    "jawaban": 4,
    "pembahasan": "<p>Komentar ditulis untuk <strong>manusia</strong>: menjelaskan maksud kode, memberi catatan, atau menonaktifkan baris sementara. Interpreter Python melewati semua teks setelah <code>#</code> pada baris itu.</p>"
  },
  {
    "nomor": 69,
    "materi": "s2",
    "kategori": "Dasar bahasa Python",
    "pertanyaan": "Perhatikan pernyataan tentang tipe data berikut.<span class=\"pernyataan\"><b>I.</b> <code>input()</code> selalu mengembalikan nilai bertipe <code>str</code>, meskipun user mengetik angka.</span><span class=\"pernyataan\"><b>II.</b> <code>type(3.0)</code> menghasilkan <code>&lt;class 'int'&gt;</code>.</span><span class=\"pernyataan\"><b>III.</b> <code>int(\"12\") + 3</code> menghasilkan <code>15</code>.</span><span class=\"pernyataan\"><b>IV.</b> String boleh ditulis dengan kutip tunggal <code>'...'</code> maupun kutip ganda <code>\"...\"</code>.</span><span class=\"tanya\">Pernyataan yang <strong>benar</strong> adalah...</span>",
    "kode": "",
    "opsi": [
      "I dan II",
      "II dan IV",
      "I, III, dan IV",
      "Hanya III",
      "Semua benar"
    ],
    "jawaban": 2,
    "pembahasan": "<ul><li><strong>I benar</strong>: hasil <code>input()</code> perlu dikonversi dengan <code>int()</code>/<code>float()</code> bila ingin dihitung.</li><li><strong>II salah</strong>: <code>3.0</code> punya titik desimal, jadi tipenya <code>float</code>.</li><li><strong>III benar</strong>: <code>\"12\"</code> diubah menjadi 12, lalu 12 + 3 = 15.</li><li><strong>IV benar</strong>: <code>'a'</code> dan <code>\"a\"</code> adalah string yang sama.</li></ul>"
  },
  {
    "nomor": 70,
    "materi": "s2",
    "kategori": "Dasar bahasa Python",
    "pertanyaan": "Program harus menerima umur dari user lalu mencetak umur tahun depan. Isian yang tepat untuk <code>___</code> adalah...",
    "kode": "umur = ___(input(\"Umur: \"))\nprint(\"Tahun depan:\", umur + 1)",
    "opsi": [
      "<code>int</code>",
      "<code>str</code>",
      "<code>print</code>",
      "<code>len</code>",
      "<code>type</code>"
    ],
    "jawaban": 0,
    "pembahasan": "<p><code>input()</code> menghasilkan string, misalnya <code>\"16\"</code>. String tidak bisa dijumlah dengan angka (<code>\"16\" + 1</code> → <code>TypeError</code>).</p><p><code>int(...)</code> mengubahnya menjadi bilangan bulat sehingga <code>umur + 1</code> bisa dihitung.</p>"
  },
  {
    "nomor": 71,
    "materi": "s2",
    "kategori": "Dasar bahasa Python",
    "pertanyaan": "Kode berikut menghasilkan <code>SyntaxError</code>. Di baris mana kesalahannya?",
    "kode": "nama = \"Rani\"\nkota = 'Bandung\"\nprint(nama, kota)",
    "opsi": [
      "Baris 1, karena nama variabel harus diawali huruf kapital",
      "Baris 3, karena <code>print</code> tidak boleh berisi dua argumen",
      "Baris 1, karena string harus memakai kutip tunggal",
      "Baris 2, karena kutip pembuka (<code>'</code>) dan kutip penutup (<code>\"</code>) tidak sama",
      "Tidak ada error, kode mencetak <code>Rani Bandung</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p>String harus dibuka dan ditutup dengan <strong>jenis kutip yang sama</strong>. Di baris 2, string dibuka dengan <code>'</code> tetapi ditutup dengan <code>\"</code>, sehingga Python menganggap string tidak pernah ditutup.</p><p>Perbaikan: <code>kota = 'Bandung'</code> atau <code>kota = \"Bandung\"</code>.</p>"
  },
  {
    "nomor": 72,
    "materi": "s2",
    "kategori": "Dasar bahasa Python",
    "pertanyaan": "Manakah yang <strong>bukan</strong> nama variabel yang valid di Python?",
    "kode": "",
    "opsi": [
      "<code>nilai_2</code>",
      "<code>2nilai</code>",
      "<code>_nilai</code>",
      "<code>NilaiAkhir</code>",
      "<code>nilai2</code>"
    ],
    "jawaban": 1,
    "pembahasan": "<p>Aturan nama variabel: hanya huruf, angka, dan garis bawah <code>_</code>, serta <strong>tidak boleh diawali angka</strong>. Karena itu <code>2nilai</code> menghasilkan <code>SyntaxError</code>.</p><p>Nama juga peka huruf besar-kecil: <code>NilaiAkhir</code> dan <code>nilaiakhir</code> adalah dua variabel berbeda.</p>"
  },
  {
    "nomor": 73,
    "materi": "s3",
    "kategori": "Variabel & aritmetika",
    "pertanyaan": "Operator <code>%</code> (modulo) pada Python menghasilkan...",
    "kode": "",
    "opsi": [
      "Persentase dari suatu bilangan",
      "Hasil bagi yang dibulatkan ke bawah",
      "Hasil pangkat dua bilangan",
      "Hasil bagi dalam bentuk desimal",
      "Sisa hasil bagi, misalnya <code>17 % 5</code> menghasilkan <code>2</code>"
    ],
    "jawaban": 4,
    "pembahasan": "<p><code>%</code> menghitung <strong>sisa pembagian</strong>: 17 = 5 × 3 + <strong>2</strong>.</p><p>Penggunaan umum: mengecek bilangan genap (<code>n % 2 == 0</code>). Pembagian yang dibulatkan ke bawah adalah <code>//</code>, sedangkan pangkat adalah <code>**</code>.</p>"
  },
  {
    "nomor": 74,
    "materi": "s3",
    "kategori": "Variabel & aritmetika",
    "pertanyaan": "Perhatikan pernyataan tentang operator aritmetika berikut.<span class=\"pernyataan\"><b>I.</b> <code>10 / 2</code> menghasilkan <code>5.0</code>.</span><span class=\"pernyataan\"><b>II.</b> <code>7 // 2</code> menghasilkan <code>3</code>.</span><span class=\"pernyataan\"><b>III.</b> <code>2 ** 3</code> menghasilkan <code>6</code>.</span><span class=\"pernyataan\"><b>IV.</b> <code>x += 3</code> sama artinya dengan <code>x = x + 3</code>.</span><span class=\"tanya\">Pernyataan yang <strong>benar</strong> adalah...</span>",
    "kode": "",
    "opsi": [
      "I dan III",
      "II dan III",
      "I, II, dan IV",
      "Hanya IV",
      "Semua benar"
    ],
    "jawaban": 2,
    "pembahasan": "<ul><li><strong>I benar</strong>: operator <code>/</code> selalu menghasilkan float.</li><li><strong>II benar</strong>: <code>//</code> membagi lalu membulatkan ke bawah (3.5 → 3).</li><li><strong>III salah</strong>: <code>**</code> adalah pangkat, 2 × 2 × 2 = <strong>8</strong>.</li><li><strong>IV benar</strong>: <code>+=</code> adalah singkatan penugasan.</li></ul>"
  },
  {
    "nomor": 75,
    "materi": "s3",
    "kategori": "Variabel & aritmetika",
    "pertanyaan": "Program mengubah 135 menit menjadi <code>2 jam 15 menit</code>. Pasangan operator yang tepat untuk <code>(1)</code> dan <code>(2)</code> adalah...",
    "kode": "menit = 135\njam = menit (1) 60\nsisa = menit (2) 60\nprint(jam, \"jam\", sisa, \"menit\")",
    "opsi": [
      "(1) <code>//</code> dan (2) <code>%</code>",
      "(1) <code>/</code> dan (2) <code>%</code>",
      "(1) <code>%</code> dan (2) <code>//</code>",
      "(1) <code>//</code> dan (2) <code>//</code>",
      "(1) <code>*</code> dan (2) <code>%</code>"
    ],
    "jawaban": 0,
    "pembahasan": "<ul><li><code>135 // 60</code> = <strong>2</strong> (jam penuh).</li><li><code>135 % 60</code> = <strong>15</strong> (sisa menit).</li></ul><p>Jika memakai <code>/</code>, hasilnya <code>2.25</code>, bukan jumlah jam penuh.</p>"
  },
  {
    "nomor": 76,
    "materi": "s3",
    "kategori": "Variabel & aritmetika",
    "pertanyaan": "Program berikut seharusnya menghitung rata-rata (hasilnya <code>80.0</code>), tetapi justru mencetak <code>193.33333333333334</code>. Perbaikan yang tepat untuk baris 2 adalah...",
    "kode": "a, b, c = 80, 90, 70\nrata = a + b + c / 3\nprint(rata)",
    "opsi": [
      "<code>rata = a + b + c // 3</code>",
      "<code>rata = a + b + (c / 3)</code>",
      "<code>rata = (a + b + c) % 3</code>",
      "<code>rata = (a + b + c) / 3</code>",
      "<code>rata = a + (b + c) / 3</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p>Pembagian <code>/</code> dikerjakan <strong>lebih dulu</strong> daripada penjumlahan, jadi yang dibagi 3 hanya <code>c</code>: 80 + 90 + 23.33… = 193.33….</p><p>Tanda kurung memaksa penjumlahan dikerjakan dulu: <code>(80 + 90 + 70) / 3 = 80.0</code>.</p>"
  },
  {
    "nomor": 77,
    "materi": "s3",
    "kategori": "Variabel & aritmetika",
    "pertanyaan": "Empat ekspresi berikut hasilnya sama, kecuali satu. Ekspresi mana yang hasilnya <strong>berbeda</strong>?",
    "kode": "",
    "opsi": [
      "<code>2 + 3 * 2</code>",
      "<code>(2 + 3) * 2</code>",
      "<code>2 * 3 + 2</code>",
      "<code>16 // 2</code>",
      "<code>2 ** 3</code>"
    ],
    "jawaban": 1,
    "pembahasan": "<ul><li><code>2 + 3 * 2</code> → perkalian dulu → 2 + 6 = 8</li><li><code>2 * 3 + 2</code> → 6 + 2 = 8</li><li><code>16 // 2</code> → 8</li><li><code>2 ** 3</code> → 8</li><li><code>(2 + 3) * 2</code> → kurung dulu → 5 × 2 = <strong>10</strong></li></ul>"
  },
  {
    "nomor": 78,
    "materi": "s4",
    "kategori": "Percabangan & Boolean",
    "pertanyaan": "Apa yang dimaksud dengan tipe data <strong>Boolean</strong> di Python?",
    "kode": "",
    "opsi": [
      "Tipe data untuk bilangan desimal",
      "Fungsi untuk membandingkan dua string",
      "Nama lain dari perintah <code>if</code>",
      "Tipe data berisi teks <code>\"benar\"</code> atau <code>\"salah\"</code>",
      "Tipe data yang hanya memiliki dua nilai: <code>True</code> atau <code>False</code>"
    ],
    "jawaban": 4,
    "pembahasan": "<p>Boolean (<code>bool</code>) hanya bernilai <code>True</code> atau <code>False</code>. Hasil perbandingan seperti <code>3 &gt; 2</code> adalah Boolean, dan nilai inilah yang diperiksa oleh <code>if</code> dan <code>while</code>.</p><p>Perhatikan huruf kapital: <code>true</code> (huruf kecil) bukan Boolean di Python.</p>"
  },
  {
    "nomor": 79,
    "materi": "s4",
    "kategori": "Percabangan & Boolean",
    "pertanyaan": "Perhatikan pernyataan tentang Boolean dan percabangan berikut.<span class=\"pernyataan\"><b>I.</b> <code>5 &gt; 3 and 2 &gt; 4</code> bernilai <code>True</code>.</span><span class=\"pernyataan\"><b>II.</b> <code>not False</code> bernilai <code>True</code>.</span><span class=\"pernyataan\"><b>III.</b> <code>\"a\" == \"A\"</code> bernilai <code>False</code>.</span><span class=\"pernyataan\"><b>IV.</b> Blok <code>else</code> dijalankan jika semua kondisi <code>if</code>/<code>elif</code> sebelumnya bernilai <code>False</code>.</span><span class=\"tanya\">Pernyataan yang <strong>benar</strong> adalah...</span>",
    "kode": "",
    "opsi": [
      "I dan II",
      "I, II, dan III",
      "II, III, dan IV",
      "Hanya IV",
      "Semua benar"
    ],
    "jawaban": 2,
    "pembahasan": "<ul><li><strong>I salah</strong>: <code>and</code> butuh kedua sisi True, padahal <code>2 &gt; 4</code> False.</li><li><strong>II benar</strong>: <code>not</code> membalik nilai.</li><li><strong>III benar</strong>: perbandingan string peka huruf besar-kecil.</li><li><strong>IV benar</strong>: <code>else</code> adalah cabang terakhir saat tidak ada kondisi yang terpenuhi.</li></ul>"
  },
  {
    "nomor": 80,
    "materi": "s4",
    "kategori": "Percabangan & Boolean",
    "pertanyaan": "Isian yang tepat untuk <code>___</code> agar nilai 75 mencetak <code>B</code> adalah...",
    "kode": "nilai = 75\nif nilai >= 85:\n    print(\"A\")\n___ nilai >= 70:\n    print(\"B\")\nelse:\n    print(\"C\")",
    "opsi": [
      "<code>elif</code>",
      "<code>else if</code>",
      "<code>elseif</code>",
      "<code>else</code>",
      "<code>if else</code>"
    ],
    "jawaban": 0,
    "pembahasan": "<p>Python memakai kata kunci <strong><code>elif</code></strong> (singkatan <em>else if</em>) untuk kondisi tambahan. Penulisan <code>else if</code> atau <code>elseif</code> seperti di bahasa lain menghasilkan <code>SyntaxError</code>.</p><p><code>else</code> tidak boleh diikuti kondisi.</p>"
  },
  {
    "nomor": 81,
    "materi": "s4",
    "kategori": "Percabangan & Boolean",
    "pertanyaan": "Program berikut mencetak <code>Cukup</code> untuk nilai 95, padahal seharusnya <code>Istimewa</code>. Apa penyebabnya?",
    "kode": "nilai = 95\nif nilai >= 60:\n    print(\"Cukup\")\nelif nilai >= 90:\n    print(\"Istimewa\")",
    "opsi": [
      "Nilai 95 tidak memenuhi <code>nilai &gt;= 90</code>",
      "Indentasi <code>print</code> salah sehingga dilewati",
      "Seharusnya memakai <code>=</code> bukan <code>&gt;=</code>",
      "Kondisi <code>nilai &gt;= 60</code> sudah True lebih dulu, jadi <code>elif</code> tidak pernah diperiksa; urutkan dari batas tertinggi",
      "<code>elif</code> harus diganti <code>else</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p>Pada rantai <code>if</code>/<code>elif</code>, Python berhenti di <strong>kondisi pertama yang True</strong>. Karena 95 ≥ 60 sudah True, cabang <code>elif</code> dilewati.</p><p>Perbaikan: periksa <code>nilai &gt;= 90</code> lebih dulu, baru <code>nilai &gt;= 60</code>.</p>"
  },
  {
    "nomor": 82,
    "materi": "s4",
    "kategori": "Percabangan & Boolean",
    "pertanyaan": "Kondisi yang tepat untuk mengecek umur <strong>13 sampai 17 tahun</strong> (13 dan 17 termasuk) adalah...",
    "kode": "",
    "opsi": [
      "<code>umur &gt;= 13 or umur &lt;= 17</code>",
      "<code>13 &lt;= umur &lt;= 17</code>",
      "<code>13 &lt; umur &lt; 17</code>",
      "<code>umur &gt;= 13 and &lt;= 17</code>",
      "<code>umur == 13 and umur == 17</code>"
    ],
    "jawaban": 1,
    "pembahasan": "<ul><li><code>13 &lt;= umur &lt;= 17</code> → perbandingan berantai, sama dengan <code>umur &gt;= 13 and umur &lt;= 17</code>.</li><li>Dengan <code>or</code>, semua umur lolos (misal 50 ≥ 13 sudah True).</li><li><code>&lt;</code> tidak menyertakan 13 dan 17.</li><li><code>and &lt;= 17</code> tanpa variabel adalah <code>SyntaxError</code>.</li><li>Umur tidak mungkin sama dengan 13 dan 17 sekaligus.</li></ul>"
  },
  {
    "nomor": 83,
    "materi": "s5",
    "kategori": "List / array",
    "pertanyaan": "Pernyataan yang paling tepat tentang <strong>indeks</strong> pada list Python adalah...",
    "kode": "",
    "opsi": [
      "Indeks dimulai dari <code>1</code>, seperti urutan kehidupan sehari-hari",
      "Indeks negatif selalu menyebabkan error",
      "Indeks hanya bisa dipakai pada list yang berisi angka",
      "Indeks elemen terakhir sama dengan <code>len(list)</code>",
      "Indeks dimulai dari <code>0</code>, dan indeks <code>-1</code> menunjuk elemen terakhir"
    ],
    "jawaban": 4,
    "pembahasan": "<p>Untuk <code>a = [10, 20, 30]</code>: <code>a[0]</code> = 10, <code>a[-1]</code> = 30. Indeks terakhir adalah <code>len(a) - 1</code> = 2; mengakses <code>a[3]</code> menghasilkan <code>IndexError</code>.</p>"
  },
  {
    "nomor": 84,
    "materi": "s5",
    "kategori": "List / array",
    "pertanyaan": "Perhatikan pernyataan tentang list berikut.<span class=\"pernyataan\"><b>I.</b> Satu list boleh berisi tipe data campuran, misalnya <code>[1, \"dua\", 3.0]</code>.</span><span class=\"pernyataan\"><b>II.</b> <code>append()</code> menambahkan elemen di <em>awal</em> list.</span><span class=\"pernyataan\"><b>III.</b> <code>data.sort()</code> mengembalikan list baru yang sudah terurut.</span><span class=\"pernyataan\"><b>IV.</b> Isi list bisa diubah, misalnya <code>data[0] = 10</code>.</span><span class=\"tanya\">Pernyataan yang <strong>benar</strong> adalah...</span>",
    "kode": "",
    "opsi": [
      "I dan II",
      "II dan III",
      "I dan IV",
      "I, III, dan IV",
      "Semua benar"
    ],
    "jawaban": 2,
    "pembahasan": "<ul><li><strong>I benar</strong>: list Python tidak membatasi tipe elemen.</li><li><strong>II salah</strong>: <code>append()</code> menambah di <strong>akhir</strong>; untuk posisi tertentu pakai <code>insert()</code>.</li><li><strong>III salah</strong>: <code>sort()</code> mengurutkan list itu sendiri dan mengembalikan <code>None</code>. Untuk list baru, pakai <code>sorted(data)</code>.</li><li><strong>IV benar</strong>: list bersifat <em>mutable</em> (bisa diubah).</li></ul>"
  },
  {
    "nomor": 85,
    "materi": "s5",
    "kategori": "List / array",
    "pertanyaan": "Isian yang tepat untuk <code>___</code> agar program mencetak <code>['apel', 'jeruk', 'mangga']</code> adalah...",
    "kode": "buah = [\"apel\", \"jeruk\"]\nbuah.___(\"mangga\")\nprint(buah)",
    "opsi": [
      "<code>append</code>",
      "<code>add</code>",
      "<code>push</code>",
      "<code>insert</code>",
      "<code>extend</code>"
    ],
    "jawaban": 0,
    "pembahasan": "<ul><li><code>append(x)</code> menambahkan <strong>satu elemen</strong> di akhir list.</li><li><code>add</code> dan <code>push</code> tidak ada pada list Python (<code>AttributeError</code>).</li><li><code>insert</code> butuh dua argumen: posisi dan nilai.</li><li><code>extend(\"mangga\")</code> menambahkan tiap huruf secara terpisah: <code>'m', 'a', 'n', ...</code></li></ul>"
  },
  {
    "nomor": 86,
    "materi": "s5",
    "kategori": "List / array",
    "pertanyaan": "Kode berikut menghasilkan <code>IndexError</code>. Apa penyebabnya?",
    "kode": "nilai = [70, 85, 90]\nprint(nilai[3])",
    "opsi": [
      "List tidak boleh berisi angka",
      "<code>print</code> tidak bisa mencetak elemen list",
      "List seharusnya ditulis dengan kurung kurawal <code>{}</code>",
      "List berisi 3 elemen dengan indeks 0–2, sehingga indeks <code>3</code> tidak ada",
      "Seharusnya tidak error dan mencetak <code>90</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p>Indeks dimulai dari 0: <code>nilai[0]</code> = 70, <code>nilai[1]</code> = 85, <code>nilai[2]</code> = 90. Elemen ketiga ada di indeks <strong>2</strong>.</p><p>Untuk mengambil elemen terakhir tanpa menghitung panjang, pakai <code>nilai[-1]</code>.</p>"
  },
  {
    "nomor": 87,
    "materi": "s5",
    "kategori": "List / array",
    "pertanyaan": "Kamu ingin mengecek apakah <code>\"budi\"</code> ada di dalam list <code>siswa</code>. Ekspresi yang tepat adalah...",
    "kode": "",
    "opsi": [
      "<code>siswa.has(\"budi\")</code>",
      "<code>\"budi\" in siswa</code>",
      "<code>siswa == \"budi\"</code>",
      "<code>siswa.find(\"budi\")</code>",
      "<code>\"budi\" == siswa[0]</code>"
    ],
    "jawaban": 1,
    "pembahasan": "<p>Operator <code>in</code> menghasilkan <code>True</code> jika elemen ada di list. <code>has</code> dan <code>find</code> bukan method list, <code>siswa == \"budi\"</code> membandingkan list dengan string (selalu False), dan <code>siswa[0]</code> hanya memeriksa elemen pertama.</p>"
  },
  {
    "nomor": 88,
    "materi": "s6",
    "kategori": "Perulangan",
    "pertanyaan": "Kapan sebaiknya memakai <code>while</code> dibanding <code>for</code>?",
    "kode": "",
    "opsi": [
      "Saat ingin mengulang setiap elemen dalam list",
      "Selalu, karena <code>while</code> lebih cepat dari <code>for</code>",
      "Saat jumlah perulangan sudah pasti, misalnya tepat 10 kali",
      "<code>while</code> hanya bisa dipakai untuk bilangan genap",
      "Saat jumlah perulangan belum diketahui dan bergantung pada suatu kondisi, misalnya mengulang sampai password benar"
    ],
    "jawaban": 4,
    "pembahasan": "<p><code>for</code> cocok untuk mengulang <strong>sejumlah item yang sudah jelas</strong> (isi list, <code>range(10)</code>). <code>while</code> cocok saat perulangan berlanjut <strong>selama kondisi True</strong> dan kita belum tahu kapan berhenti, misalnya input ulang sampai valid.</p>"
  },
  {
    "nomor": 89,
    "materi": "s6",
    "kategori": "Perulangan",
    "pertanyaan": "Perhatikan pernyataan tentang perulangan berikut.<span class=\"pernyataan\"><b>I.</b> <code>range(5)</code> menghasilkan angka 0 sampai 4.</span><span class=\"pernyataan\"><b>II.</b> <code>break</code> menghentikan seluruh perulangan saat itu juga.</span><span class=\"pernyataan\"><b>III.</b> <code>continue</code> menghentikan program sepenuhnya.</span><span class=\"pernyataan\"><b>IV.</b> <code>range(1, 5)</code> menghasilkan angka 1 sampai 5.</span><span class=\"tanya\">Pernyataan yang <strong>benar</strong> adalah...</span>",
    "kode": "",
    "opsi": [
      "I, II, dan IV",
      "II dan III",
      "I dan II",
      "III dan IV",
      "Semua benar"
    ],
    "jawaban": 2,
    "pembahasan": "<ul><li><strong>I benar</strong>: batas akhir <code>range</code> tidak ikut.</li><li><strong>II benar</strong>: <code>break</code> keluar dari loop.</li><li><strong>III salah</strong>: <code>continue</code> hanya melewati sisa putaran saat ini lalu lanjut ke putaran berikutnya.</li><li><strong>IV salah</strong>: <code>range(1, 5)</code> → 1, 2, 3, 4 (5 tidak ikut).</li></ul>"
  },
  {
    "nomor": 90,
    "materi": "s6",
    "kategori": "Perulangan",
    "pertanyaan": "Program harus mencetak <code>2 4 6 8 10</code>. Isian yang tepat untuk <code>range(___)</code> adalah...",
    "kode": "for i in range(___):\n    print(i, end=\" \")",
    "opsi": [
      "<code>2, 11, 2</code>",
      "<code>2, 10, 2</code>",
      "<code>0, 10, 2</code>",
      "<code>2, 10</code>",
      "<code>1, 11, 2</code>"
    ],
    "jawaban": 0,
    "pembahasan": "<p>Format <code>range(mulai, berhenti, langkah)</code>, dan nilai <code>berhenti</code> <strong>tidak ikut</strong>. Agar 10 tercetak, batasnya harus lebih dari 10, misalnya 11.</p><ul><li><code>2, 10, 2</code> → 2 4 6 8</li><li><code>0, 10, 2</code> → 0 2 4 6 8</li><li><code>1, 11, 2</code> → 1 3 5 7 9</li></ul>"
  },
  {
    "nomor": 91,
    "materi": "s6",
    "kategori": "Perulangan",
    "pertanyaan": "Program berikut seharusnya mencetak jumlah <code>15</code>, tetapi mencetak <code>7</code>. Perbaikan yang tepat adalah...",
    "kode": "angka = [3, 5, 7]\nfor x in angka:\n    total = 0\n    total += x\nprint(total)",
    "opsi": [
      "Ganti <code>total += x</code> menjadi <code>total = x</code>",
      "Ganti <code>for</code> dengan <code>while</code>",
      "Tambahkan <code>break</code> setelah <code>total += x</code>",
      "Pindahkan <code>total = 0</code> ke atas, sebelum <code>for</code>",
      "Ganti <code>print(total)</code> menjadi <code>print(angka)</code>"
    ],
    "jawaban": 3,
    "pembahasan": "<p>Karena <code>total = 0</code> ada <strong>di dalam</strong> loop, nilainya di-reset setiap putaran. Hanya elemen terakhir (7) yang tersisa.</p><p>Variabel penampung (akumulator) harus diinisialisasi <strong>sekali</strong>, sebelum loop dimulai.</p>"
  },
  {
    "nomor": 92,
    "materi": "s6",
    "kategori": "Perulangan",
    "pertanyaan": "Berapa kali kata <code>Halo</code> dicetak oleh kode berikut?",
    "kode": "for i in range(3):\n    for j in range(2):\n        print(\"Halo\")",
    "opsi": [
      "5 kali",
      "6 kali",
      "3 kali",
      "2 kali",
      "9 kali"
    ],
    "jawaban": 1,
    "pembahasan": "<p>Ini <strong>loop bersarang</strong>: untuk setiap putaran luar (3 kali), loop dalam berjalan penuh (2 kali). Total = 3 × 2 = <strong>6</strong>.</p>"
  },
  {
    "nomor": 93,
    "materi": "s7",
    "kategori": "Fungsi Python",
    "pertanyaan": "Apa perbedaan <strong>parameter</strong> dan <strong>argumen</strong> pada fungsi?",
    "kode": "",
    "opsi": [
      "Argumen adalah nama variabel di definisi fungsi, sedangkan parameter adalah nilai yang dikirim saat dipanggil",
      "Keduanya sama persis dan tidak ada bedanya",
      "Parameter hanya untuk angka, argumen hanya untuk teks",
      "Argumen adalah nilai yang ditulis setelah <code>return</code>",
      "Parameter adalah nama variabel di definisi fungsi, sedangkan argumen adalah nilai yang dikirim saat fungsi dipanggil"
    ],
    "jawaban": 4,
    "pembahasan": "<p>Pada <code>def sapa(nama):</code>, <code>nama</code> adalah <strong>parameter</strong>. Pada pemanggilan <code>sapa(\"Dina\")</code>, nilai <code>\"Dina\"</code> adalah <strong>argumen</strong> yang diisikan ke parameter tersebut.</p>"
  },
  {
    "nomor": 94,
    "materi": "s7",
    "kategori": "Fungsi Python",
    "pertanyaan": "Perhatikan pernyataan tentang fungsi berikut.<span class=\"pernyataan\"><b>I.</b> Fungsi di Python didefinisikan dengan kata kunci <code>function</code>.</span><span class=\"pernyataan\"><b>II.</b> Fungsi tanpa <code>return</code> mengembalikan <code>None</code>.</span><span class=\"pernyataan\"><b>III.</b> Variabel yang dibuat di dalam fungsi bisa langsung dipakai di luar fungsi.</span><span class=\"pernyataan\"><b>IV.</b> Satu fungsi bisa dipanggil berkali-kali dengan argumen berbeda.</span><span class=\"tanya\">Pernyataan yang <strong>benar</strong> adalah...</span>",
    "kode": "",
    "opsi": [
      "I dan II",
      "I, II, dan IV",
      "II dan IV",
      "II dan III",
      "Semua benar"
    ],
    "jawaban": 2,
    "pembahasan": "<ul><li><strong>I salah</strong>: kata kuncinya <code>def</code>; <code>function</code> dipakai di JavaScript.</li><li><strong>II benar</strong>: tanpa <code>return</code>, fungsi mengembalikan <code>None</code>.</li><li><strong>III salah</strong>: variabel di dalam fungsi bersifat <em>lokal</em>; memakainya di luar menghasilkan <code>NameError</code>.</li><li><strong>IV benar</strong>: itulah gunanya fungsi, yaitu kode yang dapat dipakai ulang.</li></ul>"
  },
  {
    "nomor": 95,
    "materi": "s7",
    "kategori": "Fungsi Python",
    "pertanyaan": "Fungsi harus <strong>mengembalikan</strong> luas persegi panjang agar hasilnya bisa disimpan di variabel. Isian yang tepat untuk <code>___</code> adalah...",
    "kode": "def luas(p, l):\n    ___ p * l\n\nhasil = luas(4, 5)\nprint(hasil)",
    "opsi": [
      "<code>return</code>",
      "<code>print</code>",
      "<code>def</code>",
      "<code>global</code>",
      "<code>break</code>"
    ],
    "jawaban": 0,
    "pembahasan": "<p><code>return</code> mengirim nilai kembali ke pemanggil, sehingga <code>hasil</code> berisi 20.</p><p>Jika memakai <code>print</code>, angka 20 memang tampil di layar, tetapi fungsi mengembalikan <code>None</code>, jadi <code>print(hasil)</code> mencetak <code>None</code>.</p>"
  },
  {
    "nomor": 96,
    "materi": "s7",
    "kategori": "Fungsi Python",
    "pertanyaan": "Kode berikut menghasilkan <code>NameError</code>. Apa penyebabnya?",
    "kode": "print(sapa(\"Dina\"))\n\ndef sapa(nama):\n    return \"Halo \" + nama",
    "opsi": [
      "<code>return</code> tidak boleh mengembalikan string",
      "Nama fungsi tidak boleh diawali huruf <code>s</code>",
      "Argumen fungsi harus berupa angka",
      "Fungsi dipanggil sebelum didefinisikan; blok <code>def</code> harus berada di atas pemanggilan",
      "<code>print</code> tidak bisa mencetak hasil fungsi"
    ],
    "jawaban": 3,
    "pembahasan": "<p>Python membaca kode <strong>dari atas ke bawah</strong>. Saat baris 1 dijalankan, nama <code>sapa</code> belum dikenal karena <code>def sapa</code> baru ada di baris 3.</p><p>Pindahkan definisi fungsi ke atas, lalu panggil setelahnya.</p>"
  },
  {
    "nomor": 97,
    "materi": "s7",
    "kategori": "Fungsi Python",
    "pertanyaan": "Fungsi <code>genap(n)</code> harus <strong>mengembalikan</strong> <code>True</code> jika <code>n</code> genap dan <code>False</code> jika ganjil. Definisi yang tepat adalah...",
    "kode": "",
    "opsi": [
      "<code>def genap(n): print(n % 2 == 0)</code>",
      "<code>def genap(n): return n % 2 == 0</code>",
      "<code>def genap(n): return n % 2</code>",
      "<code>def genap(n): n % 2 == 0</code>",
      "<code>def genap(n): return n / 2</code>"
    ],
    "jawaban": 1,
    "pembahasan": "<ul><li><code>return n % 2 == 0</code> → mengembalikan Boolean yang benar.</li><li>Versi <code>print</code> hanya menampilkan, nilai kembaliannya <code>None</code>.</li><li><code>return n % 2</code> → 0 untuk genap, 1 untuk ganjil (angka, bukan True/False, dan terbalik maknanya).</li><li>Tanpa <code>return</code> → selalu <code>None</code>.</li><li><code>n / 2</code> hanya membagi dua.</li></ul>"
  },
  {
    "nomor": 98,
    "materi": "s8",
    "kategori": "Vibe coding & Vercel",
    "pertanyaan": "Kode dari AI menghasilkan error saat dijalankan. Prompt lanjutan mana yang <strong>paling efektif</strong>?",
    "kode": "",
    "opsi": [
      "\"Kodenya error, perbaiki.\"",
      "\"Buat ulang semuanya dari awal dengan bahasa lain.\"",
      "Mengirim screenshot layar tanpa keterangan",
      "\"Tolong jangan error lagi ya.\"",
      "Menyertakan pesan error lengkap, potongan kode terkait, langkah yang dilakukan, dan hasil yang diharapkan"
    ],
    "jawaban": 4,
    "pembahasan": "<p>AI tidak melihat layarmu. Semakin lengkap konteksnya, semakin tepat perbaikannya: <strong>pesan error utuh</strong> (termasuk nomor baris), bagian kode terkait, apa yang kamu lakukan, dan apa yang seharusnya terjadi.</p><p>Prompt yang samar biasanya menghasilkan tebakan atau kode yang ditulis ulang tanpa memperbaiki penyebabnya.</p>"
  },
  {
    "nomor": 99,
    "materi": "s8",
    "kategori": "Vibe coding & Vercel",
    "pertanyaan": "Kamu men-deploy website statis ke Vercel. File halaman utama di root repo bernama <code>beranda.html</code>, dan membuka domain utama menghasilkan <strong>404</strong>. Perbaikan paling tepat?",
    "kode": "",
    "opsi": [
      "Membeli domain baru",
      "Menghapus repo lalu membuat ulang",
      "Ganti nama file halaman utama menjadi <code>index.html</code>",
      "Menambahkan <code>&lt;h1&gt;404&lt;/h1&gt;</code> ke halaman",
      "Mengganti browser"
    ],
    "jawaban": 2,
    "pembahasan": "<p>Saat alamat root (<code>/</code>) dibuka, server web mencari file <strong><code>index.html</code></strong> secara otomatis. File bernama lain hanya bisa dibuka dengan menuliskan namanya, misalnya <code>/beranda.html</code>.</p>"
  },
  {
    "nomor": 100,
    "materi": "s8",
    "kategori": "Vibe coding & Vercel",
    "pertanyaan": "Perhatikan pernyataan tentang Git, GitHub, dan Vercel berikut.<span class=\"pernyataan\"><b>I.</b> File <code>.env</code> yang berisi API key sebaiknya dimasukkan ke <code>.gitignore</code>.</span><span class=\"pernyataan\"><b>II.</b> Setiap push ke branch yang terhubung ke production (misalnya <code>main</code>) memicu deploy ulang otomatis di Vercel.</span><span class=\"pernyataan\"><b>III.</b> Website statis HTML/CSS/JS di Vercel wajib ditemani server Python yang menyala terus.</span><span class=\"pernyataan\"><b>IV.</b> Kode hasil AI pasti benar sehingga tidak perlu diuji sebelum di-deploy.</span><span class=\"tanya\">Pernyataan yang <strong>benar</strong> adalah...</span>",
    "kode": "",
    "opsi": [
      "I dan II",
      "I, II, dan III",
      "II dan IV",
      "Hanya I",
      "Semua benar"
    ],
    "jawaban": 0,
    "pembahasan": "<ul><li><strong>I benar</strong>: rahasia tidak boleh masuk repo; simpan di Environment Variables Vercel.</li><li><strong>II benar</strong>: Vercel memantau repo dan otomatis build ulang saat ada push.</li><li><strong>III salah</strong>: file statis cukup dilayani apa adanya, tanpa server khusus.</li><li><strong>IV salah</strong>: kode AI bisa salah; selalu uji di localhost dan periksa hasilnya.</li></ul>"
  }
];
