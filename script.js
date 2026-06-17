const sections = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("mostrar");
        } else {
            entry.target.classList.remove("mostrar");
        }
    });
});

sections.forEach((section) => {
    observer.observe(section);
});