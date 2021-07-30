/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const ul = document.querySelector(".navbar__menu ul");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
let buildNav = () => {
  sections.forEach((section) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.dataset.nav = "#" + section.id;
    link.href = "#";
    link.classList.add("menu__link");
    link.textContent = section.dataset.nav;
    li.appendChild(link);
    ul.appendChild(li);
  });
};

// Add class 'active' to section when near top of viewport
let makeSectionActive = () => {
  sections.forEach((section) => {
    addEventListener("scroll", () => {
      secPosition = section.getBoundingClientRect().top;
      if (secPosition < 150 && secPosition > -410) {
        if (!section.classList.contains("your-active-class")) {
          section.classList.add("your-active-class");
        }
      } else {
        if (section.classList.contains("your-active-class")) {
          section.classList.remove("your-active-class");
        }
      }
    });
  });
};

// Scroll to Sections Smoothly
const scrollToSections = () => {
  ul.addEventListener("click", (e) => {
    if (e.target.nodeName === "A") {
      e.preventDefault();
      const clicked = document.querySelector(e.target.dataset.nav);
      clicked.scrollIntoView({ behavior: "smooth" });
    }
  });
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNav();
// Scroll to section on link click
scrollToSections();
// Set sections as active
makeSectionActive();
