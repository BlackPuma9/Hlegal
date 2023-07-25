const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const menu = document.getElementById("humburger-btn");
menu.addEventListener("click", () => {
  document.getElementById("humburger-items").classList.toggle("show-menu");
});
