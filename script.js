document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
    });
});
