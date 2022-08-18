const hamburgerButton = document.querySelector(".hamburger-button")
const navLinks = document.querySelector(".nav-links")

const toggleMobileMenu = (btnClicked, targetElement) => {
	targetElement.classList.toggle("mobile-menu-visible")
	btnClicked.classList.toggle("cross-button-active")
}

hamburgerButton.addEventListener("click", () =>
	toggleMobileMenu(hamburgerButton, navLinks))