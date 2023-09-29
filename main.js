const sliderWrapper = document.querySelector(".slider-wrapper");
const image1 = sliderWrapper.querySelectorAll("img")[0];
const arrows = document.querySelectorAll("i");
const dots = document.querySelectorAll(".dot");
let image1Scroll = image1.clientWidth + 685;
let scrolWith = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;

arrows.forEach(arrow => {
  arrow.addEventListener("click", () => {
    sliderWrapper.scrollLeft +=arrow.id == "chevronLeft" ? -image1Scroll : image1Scroll;
    // dots.classList.toggle("active-dot");

  });
});

dots[0].classList.toggle("active-dot");
dots.forEach(dot => {
  dot.addEventListener("click", () => {
  console.log(dot);
  });
});
