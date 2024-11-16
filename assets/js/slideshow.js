let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    // Reinitializează efectul de zoom și lumină la fiecare slide
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        const image = container.querySelector('.image');
        const light = container.querySelector('.light');

        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            image.style.transform = `scale(1.5) translate(${(x - rect.width / 2) / 10}px, ${(y - rect.height / 2) / 10}px)`;
            light.style.transform = `translate(${x}px, ${y}px)`;
        });

        container.addEventListener('mouseleave', () => {
            image.style.transform = `scale(1) translate(0, 0)`;
            light.style.opacity = 0;
        });
    });
}
