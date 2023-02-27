
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

/** Tooltip */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/** Noticias con Collapse */
document.getElementById("btn3").onclick = function () {
    alert("¡Gracias! ¡Hemos registrado sus datos exitosamente!");
}


