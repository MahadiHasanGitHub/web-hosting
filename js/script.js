var nav = document.querySelector("#menu");
var open = document.querySelector(".hamburger-open")
var close = document.querySelector(".hamburger-close")

function openMenu(){
    nav.style.display = "block"
    close.style.display = "block"
    open.style.display = "none"
}
function closeMenu(){
    nav.style.display = "none"
    close.style.display = "none"
    open.style.display = "block"
}