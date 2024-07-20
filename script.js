const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click",changeColors);
}

const h2s = document.querySelectorAll("h2");
for (let h2 of h2s) {
  h2.addEventListener("click", changeColors);
}

function changeColors() {
  this.style.backgroundColor = "red";
  this.style.color = "white";
  this.style.fontSize = "20px";
}
