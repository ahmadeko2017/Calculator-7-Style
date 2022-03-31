let display = document.getElementById("calc-screen");
let secScreen = document.getElementById("sec-screen");
let temp = [];
let toggle = true;

function op(a, b) {
  if (display.innerHTML.length >= 19) {
    return;
  }
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

function num(number) {
  temp.push(number);
  if (display.innerHTML.length >= 19) {
    return;
  }
  if (display.innerHTML == "0") {
    display.innerHTML = number;
    temp = [number];
  } else {
    display.innerHTML += number;
  }
  secScreen.innerHTML = eval(temp.join(""));
  secScreen.style.display = "block";
  toggle = true;
}

function ac() {
  display.innerHTML = "0";
  temp = [0];
  counter = 0;
  secScreen.style.display = "none";
}

function del() {
  if (display.innerHTML.length == 1) {
    display.innerHTML = "0";
    temp = [0];
  } else {
    display.innerHTML = display.innerHTML.slice(0, -1);
    temp = temp.slice(0, -1);
    counter--;
  }
  secScreen.style.display = "none";
}

function perc() {
  display.innerHTML += "%";
  temp.push("/100");
  secScreen.innerHTML = eval(temp.join(""));
  secScreen.style.display = "block";
}

function calc() {
  display.innerHTML = eval(temp.join(""));
  temp = [eval(temp.join(""))];
  secScreen.style.display = "none";
}
