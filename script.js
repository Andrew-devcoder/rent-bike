const burgerButton = document.querySelector(".menu-burger");
const burgerMenuList = document.querySelector(".menu-burger__list");

burgerButton.addEventListener("click", () => {
    burgerMenuList.classList.toggle("menu-burger__list--active");
});

const first = new Swiper(".swiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    touchRatio: 2,
    grabCursor: true,
    slidesPerView: 1,
    watchOverflow: true,
    // spaceBetween: 100,
    // autoplay: {
    //     delay: 1000,
    //     stopOnLastSlide: true,
    //     disableOnInteraction: false,
    // },
    speed: 2000,
    freeMode: true,
    centeredSlides: true,
    // centerInsufficientSlides: true
    // centeredSlides: true
    // centeredSlidesBounds: true,
    // setWrapperSize: true,
});

// autoswap the slides "first"
const sliderBlock = document.querySelector(".swiper");

sliderBlock.addEventListener("mouseleave", (event) => {
    first.params.autoplay.disableOnInteraction = false;
    first.params.autoplay.delay = 500;
    first.autoplay.start();
});

sliderBlock.addEventListener("mouseenter", (event) => {
    first.autoplay.stop();
});
