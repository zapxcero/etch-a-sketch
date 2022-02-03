container = document.querySelector(".container");
divs = container.querySelectorAll("div");
clearButton = document.querySelector("#clear");

function mouseOver(e) {
  if (e.fromElement.classList.contains("grid-item"))
    e.fromElement.classList.add("mouse-over");
}

function clearGrid() {
  divs.forEach((div) => {
    div.classList.remove("mouse-over");
  });
}

divs.forEach((div) => {
  div.addEventListener("mouseover", mouseOver);
});

window.addEventListener("mouseover", mouseOver);

clearButton.addEventListener("click", clearGrid);
