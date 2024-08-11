document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const carouselInner = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  let index = 0;

  function showSlide(newIndex) {
    if (newIndex < 0) {
      index = items.length - 1;
    } else if (newIndex >= items.length) {
      index = 0;
    } else {
      index = newIndex;
    }
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
  }

  prevButton.addEventListener("click", () => showSlide(index - 1));
  nextButton.addEventListener("click", () => showSlide(index + 1));

  setInterval(() => showSlide(index + 1), 10000);
});
