const hamburger = document.querySelector(".hamburger")
const navbarMenu = document.querySelector("#navbar")
const search = document.querySelector(".search-icon");
const searchIcon = document.querySelector("#search-icons");
hamburger.addEventListener("click", () => navbarMenu.classList.toggle("active"))

search.addEventListener("click", () => searchIcon.classList.toggle("active"))
window.onscroll = () => {
    const header = document.querySelector("header")
    if (pageYOffset > 0) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
    navbarMenu.classList.remove("active")
    searchIcon.classList.remove("active")
}