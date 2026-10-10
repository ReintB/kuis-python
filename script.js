const HURUF = ["A", "B", "C", "D", "E"];
const $ = (id) => document.getElementById(id);

let pengaturan = { timer: 60, acak: true };
let sesiDasar = [];
let daftar = [];
let idx = 0;
let jawabanUser = [];
let terkunci = false;
let sisaWaktu = 0;
let intervalId = null;

function isiPilihanMateri() {
  const wadah = $("pilihan-materi");
  const item = [{ id: "semua", nama: "Semua materi", jumlah: SOAL.length }].concat(
    MATERI.map((m) => ({ id: m.id, nama: m.nama, jumlah: SOAL.filter((s) => s.materi === m.id).length }))
  );
  item.forEach((m, i) => {
    const label = document.createElement("label");
    if (m.id === "semua") label.className = "semua";
    label.innerHTML = `<input type="radio" name="materi" value="${m.id}"${i === 0 ? " checked" : ""}><span></span>`;
    label.querySelector("span").append(m.nama, Object.assign(document.createElement("b"), { textContent: m.jumlah + " soal" }));
    wadah.append(label);
  });
}

function tampilkanLayar(id) {
  ["layar-awal", "layar-soal", "layar-hasil"].forEach((l) => ($(l).hidden = l !== id));
  window.scrollTo(0, 0);
}

function acak(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function mulai(soalSoal) {
  daftar = pengaturan.acak ? acak(soalSoal) : soalSoal.slice().sort((a, b) => a.nomor - b.nomor);
  idx = 0;
  jawabanUser = [];
  tampilkanLayar("layar-soal");
  $("timer").hidden = pengaturan.timer === 0;
  tampilkanSoal();
}

function buatKode(pre, kode) {
  const code = pre.querySelector("code");
  code.textContent = "";
  kode.split("\n").forEach((baris) => {
    const span = document.createElement("span");
    span.className = "baris";
    span.textContent = baris || " ";
    code.append(span);
  });
  pre.hidden = !kode;
}

function panjangTeks(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent.length;
}

function tampilkanSoal() {
  const s = daftar[idx];
  terkunci = false;
  $("teks-progres").textContent = `Soal ${idx + 1} dari ${daftar.length}`;
  perbaruiProgres();
  $("badge").textContent = `PERTANYAAN ${idx + 1}`;
  $("kategori").textContent = s.kategori;

  const p = $("pertanyaan");
  p.innerHTML = s.pertanyaan;
  const n = panjangTeks(s.pertanyaan);
  p.className = "pertanyaan" + (n > 150 ? " panjang" : n > 70 ? " sedang" : "");

  buatKode($("blok-kode"), s.kode);

  const wadah = $("opsi");
  wadah.textContent = "";
  wadah.classList.toggle("padat", s.opsi.reduce((t, o) => t + panjangTeks(o), 0) > 350);
  s.opsi.forEach((teks, i) => {
    const b = document.createElement("button");
    b.className = "opsi";
    b.innerHTML = `<span class="huruf">${HURUF[i]}</span><span class="opsi-teks"></span>`;
    b.querySelector(".opsi-teks").innerHTML = teks;
    b.addEventListener("click", () => pilih(i));
    wadah.append(b);
  });

  $("umpan-balik").hidden = true;
  window.scrollTo(0, 0);
  mulaiTimer();
}

function perbaruiProgres() {
  $("isi-bar").style.width = (jawabanUser.length / daftar.length) * 100 + "%";
}

function pilih(i) {
  if (terkunci) return;
  terkunci = true;
  hentikanTimer();

  const s = daftar[idx];
  const benar = i === s.jawaban;
  jawabanUser.push(i);
  perbaruiProgres();

  const tombol = $("opsi").querySelectorAll(".opsi");
  tombol.forEach((b) => (b.disabled = true));
  tombol[s.jawaban].classList.add("benar");
  if (i >= 0 && !benar) tombol[i].classList.add("salah");

  bunyi(benar);
  const panel = $("umpan-balik");
  panel.classList.toggle("benar", benar);
  $("judul-umpan").textContent = benar ? "Benar!" : i < 0 ? "Waktu habis" : "Kurang tepat";
  $("ringkas-umpan").textContent =
    `Jawaban kamu: ${i < 0 ? "(waktu habis)" : HURUF[i]} · Jawaban benar: ${HURUF[s.jawaban]}`;
  $("pembahasan").innerHTML = s.pembahasan;
  $("tombol-lanjut").textContent = idx === daftar.length - 1 ? "Lihat hasil" : "Soal berikutnya";
  panel.hidden = false;
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
  $("tombol-lanjut").focus({ preventScroll: true });
}

function lanjut() {
  idx++;
  if (idx < daftar.length) tampilkanSoal();
  else tampilkanHasil();
}

function tulisWaktu() {
  const m = String(Math.floor(sisaWaktu / 60)).padStart(2, "0");
  const d = String(sisaWaktu % 60).padStart(2, "0");
  $("teks-timer").textContent = `${m}:${d}`;
  $("timer").classList.toggle("kritis", sisaWaktu <= 10);
}

function mulaiTimer(lanjutkan = false) {
  hentikanTimer();
  if (!pengaturan.timer) return;
  if (!lanjutkan) sisaWaktu = pengaturan.timer;
  tulisWaktu();
  intervalId = setInterval(() => {
    sisaWaktu--;
    tulisWaktu();
    if (sisaWaktu <= 0) pilih(-1);
  }, 1000);
}

function hentikanTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function bacaTimer() {
  let n = Math.round(Number($("angka-timer").value));
  if (!Number.isFinite(n) || n <= 0) n = 0;
  else n = Math.min(90, Math.max(5, n));
  return n;
}

function tampilkanTimerAtur(n) {
  $("angka-timer").value = n;
  $("geser-timer").value = n;
  $("label-timer").textContent = n ? `${n} detik` : "Mati";
  try { localStorage.setItem("kuis-timer", n); } catch (e) {}
}

let audio = null;

function siapkanSuara() {
  if (!audio && $("suara").checked) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) audio = new AC();
  }
  if (audio && audio.state === "suspended") audio.resume();
}

function nada(frek, mulai, durasi, tipe, volume) {
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  const t = audio.currentTime + mulai;
  osc.type = tipe;
  osc.frequency.setValueAtTime(frek, t);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(volume, t + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + durasi);
  osc.connect(gain).connect(audio.destination);
  osc.start(t);
  osc.stop(t + durasi + 0.02);
}

function bunyi(benar) {
  if (!$("suara").checked) return;
  siapkanSuara();
  if (!audio) return;
  if (benar) {
    nada(659, 0, 0.14, "sine", 0.25);
    nada(988, 0.11, 0.22, "sine", 0.25);
  } else {
    nada(220, 0, 0.18, "square", 0.08);
    nada(165, 0.16, 0.28, "square", 0.08);
  }
}

function tampilkanHasil(total = daftar.length) {
  hentikanTimer();
  const salah = daftar.filter((s, i) => jawabanUser[i] !== s.jawaban);
  const jmlBenar = daftar.length - salah.length;
  const persen = Math.round((jmlBenar / daftar.length) * 100);
  $("skor").innerHTML = `<b>${jmlBenar}/${daftar.length}</b> benar · ${persen}%` +
    (total > daftar.length ? ` <small>· berhenti di soal ${daftar.length} dari ${total}</small>` : "");

  const tabel = $("rincian");
  tabel.textContent = "";
  MATERI.forEach((m) => {
    const soalM = daftar.filter((s) => s.materi === m.id);
    if (!soalM.length) return;
    const b = soalM.filter((s) => !salah.includes(s)).length;
    const tr = tabel.insertRow();
    tr.insertCell().textContent = m.nama;
    tr.insertCell().textContent = `${b}/${soalM.length}`;
  });

  const wadah = $("daftar-salah");
  wadah.textContent = "";
  $("judul-salah").hidden = $("ulang-salah").hidden = salah.length === 0;
  daftar.forEach((s, i) => {
    const j = jawabanUser[i];
    if (j === s.jawaban) return;
    const div = document.createElement("div");
    div.className = "item-salah";
    div.innerHTML = `
      <p class="q">${i + 1}. ${s.pertanyaan}</p>
      <pre class="blok-kode"><code></code></pre>
      <p class="jaw x">Jawaban kamu: ${j < 0 ? "(waktu habis)" : `${HURUF[j]}. ${s.opsi[j]}`}</p>
      <p class="jaw v">Jawaban benar: ${HURUF[s.jawaban]}. ${s.opsi[s.jawaban]}</p>
      <div class="pembahasan">${s.pembahasan}</div>`;
    buatKode(div.querySelector("pre"), s.kode);
    wadah.append(div);
  });

  $("ulang-salah").onclick = () => mulai(salah);
  tampilkanLayar("layar-hasil");
}

$("tombol-mulai").addEventListener("click", () => {
  const materi = document.querySelector('input[name="materi"]:checked').value;
  pengaturan = { timer: bacaTimer(), acak: $("acak").checked };
  siapkanSuara();
  sesiDasar = materi === "semua" ? acak(SOAL).slice(0, bacaJumlah()) : SOAL.filter((s) => s.materi === materi);
  mulai(sesiDasar);
});
$("tombol-lanjut").addEventListener("click", lanjut);
$("ulang-semua").addEventListener("click", () => mulai(sesiDasar));
$("ke-menu").addEventListener("click", () => tampilkanLayar("layar-awal"));
const IKON = { info: "?", bahaya: "!", catatan: "i" };
function tanya({ judul, pesan, ya = "Ya", batal = "Batal", jenis = "info" }) {
  const d = $("dialog");
  d.dataset.jenis = jenis;
  $("dialog-ikon").textContent = IKON[jenis];
  $("dialog-judul").textContent = judul;
  $("dialog-pesan").innerHTML = pesan;
  $("dialog-ya").textContent = ya;
  $("dialog-batal").hidden = !batal;
  if (batal) $("dialog-batal").textContent = batal;
  const timerJalan = intervalId !== null;
  hentikanTimer();
  d.returnValue = "";
  d.showModal();
  if (!batal) $("dialog-ya").focus();
  return new Promise((selesai) => {
    d.addEventListener("close", () => {
      if (timerJalan) mulaiTimer(true);
      selesai(d.returnValue === "ya");
    }, { once: true });
  });
}
$("dialog").addEventListener("click", (e) => { if (e.target === e.currentTarget) e.currentTarget.close("batal"); });

$("selesai").addEventListener("click", async () => {
  const dijawab = jawabanUser.length;
  if (!dijawab) return tanya({ judul: "Belum ada jawaban", pesan: "Jawab minimal satu soal dulu sebelum melihat hasil.", ya: "Oke", batal: null, jenis: "catatan" });
  const sisa = daftar.length - dijawab;
  if (sisa > 0 && !(await tanya({
    judul: "Selesai sekarang?",
    pesan: `Skor dihitung dari <b>${dijawab} soal</b> yang sudah dijawab. Sisa ${sisa} soal tidak dinilai.`,
    ya: "Lihat hasil", batal: "Lanjut kuis",
  }))) return;
  const total = daftar.length;
  daftar = daftar.slice(0, dijawab);
  tampilkanHasil(total);
});
$("keluar").addEventListener("click", async () => {
  if (!(await tanya({
    judul: "Keluar dari kuis?",
    pesan: "Jawaban di sesi ini <b>tidak disimpan</b> dan kamu akan kembali ke menu awal.",
    ya: "Keluar", batal: "Lanjut kuis", jenis: "bahaya",
  }))) return;
  hentikanTimer();
  tampilkanLayar("layar-awal");
});

document.addEventListener("keydown", (e) => {
  if ($("layar-soal").hidden || $("dialog").open || e.ctrlKey || e.metaKey || e.altKey) return;
  const k = HURUF.indexOf(e.key.toUpperCase());
  if (!terkunci && k >= 0) {
    e.preventDefault();
    pilih(k);
  } else if (terkunci && e.key === "Enter") {
    e.preventDefault();
    lanjut();
  }
});

function terapkanTampilan(nama, nilai) {
  document.documentElement.dataset[nama] = nilai;
  try { localStorage.setItem("kuis-" + nama, nilai); } catch (e) {}
}
["warna", "font"].forEach((nama) => {
  let simpan = null;
  try { simpan = localStorage.getItem("kuis-" + nama); } catch (e) {}
  const pilihan = simpan && document.querySelector(`input[name="${nama}"][value="${simpan}"]`);
  if (pilihan) pilihan.checked = true;
  terapkanTampilan(nama, document.querySelector(`input[name="${nama}"]:checked`).value);
  document.querySelectorAll(`input[name="${nama}"]`).forEach((r) =>
    r.addEventListener("change", () => terapkanTampilan(nama, r.value))
  );
});

$("geser-timer").addEventListener("input", (e) => tampilkanTimerAtur(Number(e.target.value)));
$("angka-timer").addEventListener("input", () => {
  const n = Number($("angka-timer").value);
  if (n >= 0 && n <= 90) {
    $("geser-timer").value = n;
    $("label-timer").textContent = n ? `${n} detik` : "Mati";
  }
});
$("angka-timer").addEventListener("change", () => tampilkanTimerAtur(bacaTimer()));
$("suara").addEventListener("change", () => {
  try { localStorage.setItem("kuis-suara", $("suara").checked ? "1" : "0"); } catch (e) {}
});
try {
  const t = localStorage.getItem("kuis-timer");
  if (t !== null) { $("angka-timer").value = t; tampilkanTimerAtur(bacaTimer()); }
  if (localStorage.getItem("kuis-suara") === "0") $("suara").checked = false;
} catch (e) {}

isiPilihanMateri();

function bacaJumlah() {
  const n = Math.round(Number($("jumlah-soal").value)) || SOAL.length;
  const hasil = Math.min(Math.max(n, 1), SOAL.length);
  $("jumlah-soal").value = hasil;
  try { localStorage.setItem("kuis-jumlah", hasil); } catch (e) {}
  return hasil;
}
$("jumlah-soal").max = SOAL.length;
$("jumlah-maks").textContent = "dari " + SOAL.length;
try { $("jumlah-soal").value = localStorage.getItem("kuis-jumlah") || SOAL.length; } catch (e) { $("jumlah-soal").value = SOAL.length; }
$("jumlah-soal").addEventListener("change", bacaJumlah);
function perbaruiJumlahAtur() {
  $("jumlah-atur").hidden = document.querySelector('input[name="materi"]:checked').value !== "semua";
}
$("pilihan-materi").addEventListener("change", perbaruiJumlahAtur);
perbaruiJumlahAtur();
