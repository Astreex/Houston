const hamb = document.querySelector("#hamb");
const smallMenu = document.querySelector("#smallMenu");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  smallMenu.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderSmallMenu();
}

function renderSmallMenu() {
  smallMenu.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  smallMenu.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
