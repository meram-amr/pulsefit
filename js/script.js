let menu_links = document.querySelector('.menu-links');
let hamburger = document.querySelector('.humburger');

hamburger.addEventListener('click', function () {
    if (menu_links.style.display === 'flex') {
        menu_links.style.display = 'none';
    } else {
        menu_links.style.display = 'flex';
    }
    hamburger.classList.toggle("active");
});

const btn = document.getElementById("dark_mode");

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        btn.classList.remove("fa-moon");
        btn.classList.add("fa-sun");
    }
});

btn.addEventListener("click", () => {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
        document.documentElement.removeAttribute("data-theme");
        btn.classList.remove("fa-sun");
        btn.classList.add("fa-moon");

        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        btn.classList.remove("fa-moon");
        btn.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");
    }
});
