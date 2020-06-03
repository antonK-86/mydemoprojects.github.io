let slideindex = 1;

function currentSlide(n) {
  showSlides((slideindex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("client_slider");
  let dots = document.getElementsByClassName("slider-dots_item");
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

(function () {
  let btnBurger = document.querySelector(".burger");
  let navBurger = document.querySelector(".nav-burger");
  btnBurger.addEventListener("click", (e) => {
    e.stopPropagation();
    btnBurger.style.display = "none";
    navBurger.style.display = "flex";
  });
  document.querySelector("header").onclick = (e) => {
    btnBurger.style.display = "block";
    navBurger.style.display = "none";
  };
})();
