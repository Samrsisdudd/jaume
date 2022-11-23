const menu= document.querySelector(".menu");
const openMenuBtn= document.querySelector(".obrir-menu");
const closeMenuBtn= document.querySelector(".tancar-menu");

function toggleMenu() {
	menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click",toggleMenu);
closeMenuBtn.addEventListener("click",toggleMenu);