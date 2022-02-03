function createDivs(length = 16) {
  container.innerHTML = "";
  for (let i = 0; i < length * length; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
  }
  container.style.cssText = `display: grid; width: 450px; height: 450px; grid-template: repeat(${length}, 1fr) / repeat(${length}, 1fr);`;
}

function mouseOver(e) {
  if (e.fromElement.classList.contains("grid-item"))
    e.fromElement.classList.add("mouse-over");
}

function reset() {
  divs.forEach((div) => {
    div.classList.remove("mouse-over");
  });
  createDivs(askLength());
}

function askLength() {
  const num = prompt("Length of the square? (Max of 100): ");
  if (num > 100) return askLength();
  return num;
}

container = document.querySelector(".container");
createDivs(16);

divs = container.querySelectorAll("div");
resetButton = document.querySelector("#clear");

divs.forEach((div) => {
  div.addEventListener("mouseover", mouseOver);
});

window.addEventListener("mouseover", mouseOver);
resetButton.addEventListener("click", reset);
