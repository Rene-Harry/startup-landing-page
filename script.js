// Faq
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");
  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");
    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    // toggle icon

    icon.classList.toggle("fa-chevron-up");
    icon.classList.toggle("fa-chevron-down");

    // Toggle faq body
    groupBody.classList.toggle("open");

    //  close other open faq bodies

    const otherGroups = faqContainer.querySelectorAll(".faq-group");
    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-chevron-up");
        otherIcon.classList.add("fa-chevron-down");
      }
    });
  });

  faqMenu();
  hamburgerToggle();
});

// FAQ

function faqMenu() {
  const faqMenu = document.querySelector(".faq-menu");

  faqMenu.addEventListener("click", (e) => {
    // Check if the clicked element is an li within the faq-menu
    if (e.target.tagName === "LI") {
      // Remove the active class from all li elements
      faqMenu
        .querySelectorAll("li")
        .forEach((li) => li.classList.remove("active"));

      // Add the active class to the clicked li element
      e.target.classList.add("active");
    }
  });
}

// HAMBURGER BUTTON

function hamburgerToggle() {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
}
