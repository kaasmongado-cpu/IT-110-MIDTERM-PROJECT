/* === CHANGE HEADER BACKGROUND ON SCROLL === */
window.addEventListener("scroll", () => {
  document.getElementById("header").classList.toggle("scroll-header", window.scrollY >= 50);
});



/* === SCROLL SECTIONS ACTIVE LINK === */
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  sections.forEach((sec) => {
    const top = sec.offsetTop - 58;
    const height = sec.offsetHeight;
    const id = sec.id;
    const link = document.querySelector(`.nav_menu a[href*=${id}]`);
    if (link) {
      link.classList.toggle("active-link", scrollY > top && scrollY <= top + height);
    }
  });
});

/* === LIGHT/DARK THEME === */
const themeBtn = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

const getTheme = () => (document.body.classList.contains(lightTheme) ? "dark" : "light");
const getIcon = () => (themeBtn.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun");

if (localStorage.getItem("selected-theme")) {
  document.body.classList.toggle(lightTheme, localStorage.getItem("selected-theme") === "dark");
  themeBtn.classList.toggle(iconTheme, localStorage.getItem("selected-icon") === "bx bx-moon");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeBtn.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getTheme());
  localStorage.setItem("selected-icon", getIcon());
});



// Observe elements in Home section
document.querySelectorAll('.home_data, .home_team, .home_scroll')
        .forEach(el => observer.observe(el));

// Observe elements in About section
document.querySelectorAll('.about_img, .about_data, .about_box')
        .forEach(el => observer.observe(el));


        
