
/** Iniciar sesión button */
document.getElementById("btn2").onclick = function () {
    this.textContent = "Ticmas";
}


/** Go top button */
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
    } else {
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
/** Cierra Go top button */