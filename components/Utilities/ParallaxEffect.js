export const ParallaxEffect = (selector, speedMultiplier) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.style.transition = "transform 0.5s ease-out";
    element.style.transform = "translateY(0px)";
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const elementPosition = element.offsetTop;
      const distance = (scrollPosition - elementPosition) * speedMultiplier;
      element.style.transform = `translateY(${distance}px)`;
    });
  });
};

export const ParallaxEffectX = (selector, speedMultiplier) => {
  var element = document.querySelector(selector);

  if (!element) {
    console.error("Element not found for selector: " + selector);
    return;
  }

  window.addEventListener("scroll", function () {
    var scrollPosition = window.pageYOffset;
    var backgroundPosition = scrollPosition * speedMultiplier;

    element.style.transform = "translateY(" + backgroundPosition + "px)";
  });
};
