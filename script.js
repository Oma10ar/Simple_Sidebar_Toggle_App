let btnOpen = document.getElementById("btnOpen");
let btnClose = document.getElementById("btnClose");
let nav = document.getElementById("nav");

btnClose.onclick = function () {
  nav.classList.add("hide");
  btnClose.classList.add("hide");
  btnOpen.classList.remove("hide");
};
btnOpen.onclick = function () {
  nav.classList.remove("hide");
  btnClose.classList.remove("hide");
  btnOpen.classList.add("hide");
};
