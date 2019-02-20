let nav = document.getElementsByClassName("nav")[0],
	  btn = document.getElementsByClassName("nav__btn")[0],
	  ico = document.getElementsByClassName("nav__ico")[0];

btn.addEventListener("click", (e) => {
	nav.classList.toggle("open");
	btn.classList.toggle("open");
	ico.classList.toggle("open");
});