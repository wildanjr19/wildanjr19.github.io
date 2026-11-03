const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Buka navigasi");
  navigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Buka navigasi" : "Tutup navigasi",
  );
  navigation.classList.toggle("is-open", !isOpen);
});

navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuToggle.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-wrap")) closeMenu();
});
window.matchMedia("(min-width: 761px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll("[data-category]");
filters.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    filters.forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle("active", selected);
      filter.setAttribute("aria-pressed", String(selected));
    });
    let visibleCount = 0;
    projects.forEach((project) => {
      const visible =
        category === "all" ||
        project.dataset.category.split(" ").includes(category);
      project.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    document.querySelector("#filter-status").textContent =
      `Menampilkan ${visibleCount} proyek.`;
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
