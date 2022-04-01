// Menangkap element html
let display = document.getElementById("calc-screen");
let secScreen = document.getElementById("sec-screen");
// Inisialisasi variabel awal
let temp = [];
let toggle = true;

/* Fungsi op(a,b) ini merupakan fungsi operator dalam kalkulator yang memiliki dua input masukan berupa operator yang tertampil dengan operator dalam bahasa pemrograman misalnya × dengan * untuk perkalian. */
function op(a, b) {
  if (display.innerHTML.length > 18) {
    return;
  }
  /* Kode ini memiliki tugas untuk menghindari input operator ganda. Selain itu, kode ini akan mengganti operator sebelumnya dengan operator yang baru saja di "klik". */
  if (toggle) {
    display.innerHTML += a;
    temp.push(b);
  } else {
    display.innerHTML = display.innerHTML.slice(0, -1);
    display.innerHTML += a;
    temp = temp.slice(0, -1);
    temp.push(b);
  }
  toggle = false;
}

/* Fungsi ini memiliki masukan bebrupa angka dan akan mulai menampilkan angka beserta operatornya di display. Maksimal karakter yang diperbolehkan adalah 18 karakter. */
function num(number) {
  temp.push(number);
  if (display.innerHTML.length > 18) {
    return;
  }
  if (display.innerHTML == "0") {
    display.innerHTML = number;
    temp = [number];
  } else {
    display.innerHTML += number;
  }
  /* Jika angka sudah di ketik maka layar kedua melakukan perhitungan dengan menggabungkan array yang sudah dimasukkan tadi dan dilakukan eval.  */
  secScreen.innerHTML = eval(temp.join(""));
  secScreen.style.display = "block";
  toggle = true;
}

/* Fungsi ini bertujuan untuk mereset tampilan pada kalkukator. */
function ac() {
  display.innerHTML = "0";
  temp = [0];
  counter = 0;
  secScreen.style.display = "none";
}

/* Fungsi ini bertujuan untuk mengurangi 1 angka terakhir. */
function del() {
  if (display.innerHTML.length == 1) {
    display.innerHTML = "0";
    temp = [0];
  } else {
    display.innerHTML = display.innerHTML.slice(0, -1);
    temp = temp.slice(0, -1);
    counter--;
  }
  secScreen.style.display = "none"; // menonaktifkan tampilan kedua
}

function perc() {
  display.innerHTML += "%";
  temp.push("/100");
  secScreen.innerHTML = eval(temp.join(""));
  secScreen.style.display = "block"; // Mengaktifkan tampilan kedua
}

function calc() {
  display.innerHTML = eval(temp.join(""));
  temp = [eval(temp.join(""))];
  secScreen.style.display = "none"; // menonaktifkan tampilan kedua
}
