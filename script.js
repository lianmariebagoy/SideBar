const sideContainer = document.querySelector(".sidebar-container");
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", () => {
    sideContainer.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
    sideContainer.classList.remove("show-sidebar");
});