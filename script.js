const burgerMenu = document.querySelector(".menu-burger");
const burgerMenuList = document.querySelector(".menu-burger__list");
const burgerMenuButton = document.querySelector(".menu-burger__button");

const navMobile = document.querySelector(".nav-mobile");

burgerMenu.addEventListener("click", () => {
    burgerMenuList.classList.toggle("menu-burger__list--active");
    burgerMenuButton.classList.toggle("menu-burger__button--active");
});

if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname.includes("/rent-bike/")
) {
    const swiperIntro = new Swiper(".swiperIntro", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,

        speed: 2000,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
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
    });
}

const changePlaceNavMobile = () => {
    if (window.pageXOffset > 80 || document.documentElement.scrollTop > 80) {
        navMobile.classList.add("nav-mobile--active");
    } else {
        navMobile.classList.remove("nav-mobile--active");
    }
};

window.addEventListener("scroll", changePlaceNavMobile);
