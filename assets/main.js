const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

function closeMenu() {
  if (!menuToggle || !navigation) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Buka navigasi");
  navigation.classList.remove("is-open");
}

if (menuToggle && navigation) {
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
}

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll("[data-category]");
const filterStatus = document.querySelector("#filter-status");
const projectsEmpty = document.querySelector("#projects-empty");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    const orderedProjects = [...projects];
    if (category === "nlp") {
      orderedProjects.sort(
        (a, b) => (a.dataset.nlpOrder ?? 99) - (b.dataset.nlpOrder ?? 99),
      );
    }
    orderedProjects.forEach((project) => project.parentElement.append(project));

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

    if (filterStatus) {
      filterStatus.textContent = `Menampilkan ${visibleCount} proyek.`;
    }
    if (projectsEmpty) {
      projectsEmpty.hidden = visibleCount !== 0;
    }
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
