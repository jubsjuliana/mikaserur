// script responsavel pela automacao do menu hamburger

const btnmobile = document.getElementById('btn-mobile');
// const >> declara nossa variavel no uso do decorrer do codigo

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded'), active;
        if (active) {
            event.currentTarget.setAttribute('aria-label, Fechar menu');
        } else {
            event.currentTarget.setAttribute('aria-label, Abrir Menu');
        }
}

btnmobile.addEventListener('click', toggleMenu)
btnmobile;addEventListener('touchstart', toggleMenu)