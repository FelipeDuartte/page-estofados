document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            document.querySelector(".navbar-collapse").classList.remove("show");
        });
    });
});

