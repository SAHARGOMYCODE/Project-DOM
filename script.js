var bg = document.querySelector("#primary");
bg.addEventListener("click", () => (bg.style.backgroundColor = "red"));

let btnPlus = Array.from(document.getElementsByClassName("plus"));
let btnMoins = Array.from(document.getElementsByClassName("moins"));
let btnRemove = Array.from(document.getElementsByClassName("remove"));

let qte = Array.from(document.querySelectorAll(".qte"));

for (let i = 0; i < qte.length; i++) {
  btnPlus[i].addEventListener("click", function () {
    btnPlus[i].nextElementSibling.innerHTML++;
  });

  btnMoins[i].addEventListener("click", function () {
    btnMoins[i].previousElementSibling.innerHTML--;
  });

  btnRemove[i].addEventListener("click", function () {
    btnRemove[i].previousElementSibling.previousElementSibling.innerHTML = 0;
  });
}
