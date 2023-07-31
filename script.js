const burgerButton = document.querySelector(".menu-burger");
const burgerMenuList = document.querySelector(".menu-burger__list");

burgerButton.addEventListener("click", () => {
    burgerMenuList.classList.toggle("menu-burger__list--active");
});

const swiper = new Swiper(".bike__swiper", {
    slidesPerView: 2.3,
    spaceBetween: 15,
});
