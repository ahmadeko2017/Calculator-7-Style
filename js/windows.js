dragElement(document.getElementById("calcWin"));

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

  elmnt.addEventListener("touchmove", function (e) {
    var touchLocation = e.targetTouches[0];
    elmnt.style.top = touchLocation.pageY + "px";
    elmnt.style.left = touchLocation.pageX + "px";
  });

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

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

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function minimize() {
  let min = document.getElementById("calcWin");
  min.classList.toggle("minimize");
}

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
