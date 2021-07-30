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
let buildNav = () => {
  sections.forEach((section) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#" + section.id;
    link.classList.add("menu__link");
    link.textContent = section.dataset.nav;
    li.appendChild(link);
    ul.appendChild(li);
  });
};
// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNav();
// Scroll to section on link click

// Set sections as active
