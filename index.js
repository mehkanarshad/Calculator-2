let display = document.getElementById("screen");
function allclear() {
  display.value = "";
}
function show(n) {
  display.value += n;
}
function calc() {
  //   console.log(display.value);
  display.value = eval(display.value);
}
