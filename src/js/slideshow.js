let slideIndex = 1;
showSlides(slideIndex);

// Schimbă slide-ul la apelarea butonului
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Afișează slide-ul curent și ascunde celelalte
function showSlides(n) {
    let slides = document.getElementsByClassName("container");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Ascunde toate slide-urile
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Afișează doar slide-ul curent
    slides[slideIndex - 1].style.display = "block";
}
