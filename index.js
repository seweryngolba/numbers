let btn = document.querySelector("#button");
let cnt = document.querySelector("#container");

btn.addEventListener("click", () => {
  const number = Math.floor(Math.random() * 23) + 1;
  const numberElement = document.createElement("p");
  numberElement.textContent = number;
  cnt.appendChild(numberElement);
});
