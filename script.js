const navIcon = document.querySelector(".nav-icon");
const wishlist = document.querySelector(".navbar-wishlist");

navIcon.addEventListener("click", () => {
  wishlist.classList.toggle("active");
});
