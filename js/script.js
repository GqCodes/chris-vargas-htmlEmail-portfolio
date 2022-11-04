const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const navItem = document.querySelectorAll(".nav-item");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("flex");
    menu.classList.add("hidden");
    btn.classList.remove("open");
  });
});
