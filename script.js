document.addEventListener("DOMContentLoaded", () => {
    alert("Bienvenue sur mon CV interactif !");

    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});