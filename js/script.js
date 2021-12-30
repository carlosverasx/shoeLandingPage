let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
    document.classList.toggle('active');
}

window.onscroll = () => {
    if (window.innerWidth < 1200) {
        menu.classList.remove('fa-times');
        header.classList.remove('active');
        document.classList.remove('active');
    }
}