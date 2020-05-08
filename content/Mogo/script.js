let slideindex = 1;


function prev() {
    showSlides(slideindex = slideindex - 1);
}

function next() {
    showSlides(slideindex = slideindex + 1);
}

function currentSlide(n) {
    showSlides(slideindex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('slider-item');
    let dots =  document.getElementsByClassName('slider-dots_item');
    if (n < 1) {
        slideindex = slides.length;
    }

    if (n > slides.length) {
        slideindex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideindex - 1].style.display = "flex";
    dots[slideindex - 1].className += " active"; 
}

showSlides(slideindex);
