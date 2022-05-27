const imgSlider = (() => {
  const changeSize = (arrow) => {
    // Click animation
    arrow.style.height = "40px";
    arrow.style.width = "40px";
    setTimeout(() => {
      arrow.style.height = "50px";
      arrow.style.width = "50px";
    }, 100);
  };

  const addFunctionability = () => {
    // Variables
    let count = 2;
    let leftArrow = document.getElementById("left-arrow");
    let rightArrow = document.getElementById("right-arrow");
    slidesStyle();

    leftArrow.addEventListener("click", function () {
      changeSize(leftArrow);
      // Makes sure count always stays within available images range
      count === 0 ? (count = 2) : count--;
      slideImage(count);
    });

    rightArrow.addEventListener("click", function () {
      changeSize(rightArrow);
      count === 2 ? (count = 0) : count++;
      slideImage(count);
    });
  };

  const slidesStyle = () => {
    // Hides all images except for the one on top
    let slides = document.getElementsByClassName("slide");
    let slidesArray = [...slides];
    slidesArray.forEach((slide, index) => {
      if (index < slidesArray.length - 1) slide.style.opacity = 0;
    });
  };

  const slideImage = (count) => {
    let slides = document.getElementsByClassName("slide");
    let slidesArray = [...slides];
    // Adds the transition effect and hides all images
    slidesArray.forEach((slide) => {
      slide.style.transition = "all 1000ms ease";
      slide.style.opacity = 0;
    });
    let image = document.getElementById(`${"img" + count}`);
    // Unhides the corresponding image
    image.style.opacity = 1;
  };

  return {
    changeSize,
    addFunctionability,
    slidesStyle,
    slideImage,
  };
})();

export default imgSlider;
