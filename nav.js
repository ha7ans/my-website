const navSlide = () => {
  const hamburger = document.querySelector(".js-toggle");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // Opening the hamburger //
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link) => {
      link.classList.toggle("fade");
    });

    // Closing the hamburger //
    hamburger.classList.toggle("close");
  });
};

navSlide();
