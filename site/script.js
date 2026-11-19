/* ============================================================
   script.js - what your website DOES
   ------------------------------------------------------------
   Plain JavaScript, no libraries. Each block below is independent,
   so if you break one, the others keep working.
   Open the browser DevTools (F12) > Console to see errors.
   ============================================================ */

// 1. Mobile menu: show/hide the links when the ☰ button is tapped
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after a link is chosen (nicer on phones)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// 2. Light/dark theme switch, remembered in this browser (localStorage)
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

let savedTheme = "light";
try {
  savedTheme = localStorage.getItem("theme") || "light";
} catch (error) {
  // Some browsers block storage (private mode). The site still works.
}
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (error) {
    /* ignore */
  }
});

// 3. Greeting that depends on the time of day
const hour = new Date().getHours();
const greeting = hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";
document.getElementById("greeting").textContent = greeting;

// 4. Fun facts button
// CUSTOMIZE: write your own fun facts here. Keep each one inside "quotes",
// separated by commas.
const funFacts = [
  "I deployed my first cloud website at the AWS S3 Bootcamp.",
  "My favorite programming language is JavaScript... for now.",
  "I can solve a Rubik's cube in under two minutes.",
];
let factIndex = 0;

document.getElementById("funFactButton").addEventListener("click", () => {
  document.getElementById("funFact").textContent = funFacts[factIndex];
  factIndex = (factIndex + 1) % funFacts.length; // go back to the first fact after the last
});

// 5. Always show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
