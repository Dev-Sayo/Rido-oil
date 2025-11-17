const menuDropdown = document.getElementById("hamIcon-toggle");
const menu = document.getElementById("menuLinks");

menuDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("show");
});

// close when the user click outside the menu
document.addEventListener("click", (e) => {
  const isClickInsideMenu = menu.contains(e.target);
  const isClickOnToggle = menuDropdown.contains(e.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    menu.classList.remove("show");
  }
});
