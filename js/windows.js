// Menjalankan fungsi dragElement pada id="calcWin".

dragElement(document.getElementById("calcWin"));

/* Merupakan fungsi dragElement(elmnt) yang dapat mengubah posisi jendela kalkualtor. */

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  /* Merupakan event listener yang akan berjalan ketika ada sentuhan dan bergerak. */

  elmnt.addEventListener("touchmove", function (e) {
    var touchLocation = e.targetTouches[0];
    elmnt.style.top = touchLocation.pageY + "px"; // Melakukan update posisi Y
    elmnt.style.left = touchLocation.pageX + "px"; // Melakukan update posisi X
  });

  /* Fungsi dragMouseDown(e) merupakan fungsi parent dari fungsi elementDrag(e) dan fungsi closeDragElement() */

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX; // Variabel yang akan menyimpan posisi awal X.
    pos4 = e.clientY; // Variabel yang akan menyimpan posisi awal Y.
    document.onmouseup = closeDragElement; // Program yang akan jalan ketika kita melepas klik pada mouse.
    document.onmousemove = elementDrag; // Program yang akan jalan ketika kita menggerakkan mouse.
  }

  /* Fungsi elementDrag(e) merupakan fungsi dengan parameter windows event. Fungsi ini mendapatkan posisi pointer (X,Y) kemudian melakukan koreksi posisi jendela ketika terjadi perubahan.  */

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  /* Fungsi closeDragElement() berguna untuk menghentikan pemindahan jendela ketika kita sudah tidak meng klik jendela. */

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/* Fungsi ini berguna untuk menambahkan class minimize pada id="calcWin". class minimize berisi untuk mengganti display menjadi display: none; */

function minimize() {
  let min = document.getElementById("calcWin");
  min.classList.toggle("minimize");
}

/* Merupakan fungsi untuk merubah tampilan menjadi dark-mode dengan menambahkan class-dark. Kode selector yang digunakan belum optimal terutama bagian minimize, maximize, dan exit.*/

function theme() {
  let bg = document.querySelector("body");
  bg.classList.toggle("darkMode");

  let btn = document.querySelectorAll("button.btn");
  btn.forEach((element) => {
    element.classList.toggle("btn-dark");
  });
  let display = document.querySelector("div.calc div.display");
  display.classList.toggle("display-dark");

  let calc = document.getElementById("calcWin");
  calc.classList.toggle("win-dark");

  let min = document.getElementById("minimize");
  min.classList.toggle("btn-dark");

  let exit = document.getElementById("exit");
  exit.classList.toggle("btn-dark");

  let max = document.getElementById("maximize");
  max.classList.toggle("btn-dark");
}
