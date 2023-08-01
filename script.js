const burgerButton = document.querySelector(".menu-burger");
const burgerMenuList = document.querySelector(".menu-burger__list");

burgerButton.addEventListener("click", () => {
    burgerMenuList.classList.toggle("menu-burger__list--active");
});

if (window.location.pathname.endsWith("index.html")) {
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

    const mySwiperTwo = new Swiper(".mySwiperTwo", {
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

    const swiperIntro = new Swiper(".swiperIntro", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
