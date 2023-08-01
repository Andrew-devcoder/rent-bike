const burgerButton = document.querySelector(".menu-burger");
const burgerMenuList = document.querySelector(".menu-burger__list");

burgerButton.addEventListener("click", () => {
    burgerMenuList.classList.toggle("menu-burger__list--active");
});

const mySwiperOne = new Swiper(".mySwiperOne", {
    slidesPerView: 2,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

let mySwiperTwo = new Swiper(".mySwiperTwo", {
    slidesPerView: 2,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
