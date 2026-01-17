function changeColor(box, color) {
  box.style.backgroundColor = color;
  box.style.color = "white";
}

function greet() {
  const name = document.getElementById("nameInput").value;
  if (name !== "") {
    document.getElementById("greetText").innerText = "Hello, " + name;
  }
}
