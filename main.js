// Create a box wherein a div forming a complete square in which each side is of length X

//write a function that would generate a square made up of divs

container = document.querySelector(".container");

divs = container.querySelectorAll("div");

divs.forEach((div) => {
  div.addEventListener("mouseover", mouseOver);
});

function mouseOver(e) {
  if (e.fromElement.classList.contains("grid-item"))
    e.fromElement.classList.add("mouse-over");
}

window.addEventListener("mouseover", mouseOver);
