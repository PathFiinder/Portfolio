window.addEventListener('DOMContentLoaded', (event) => {

    //Handle navigation bars
    const navBars = document.querySelector('.header__iconBars');
    const nav  = document.querySelector('.header__nav');
    const header = document.querySelector('.header');

    navBars.addEventListener('click', () => {
        header.classList.toggle('header--active');
        console.log(header.classList.contains('header--active'))
        if(header.classList.contains('header--active') == true){
            nav.classList.add('nav--active');
        } else if (header.classList.contains('header--active') == false) {
            nav.classList.remove('nav--active');
        }
    })





})