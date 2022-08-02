const burgerMenu = () => {
    const burger = document.querySelector('.main-nav__burger');
    const mainNav = document.querySelector('.main-nav__menu');
    const burgerLine = document.querySelectorAll('.main-nav__burger-line');
    const mainEle = document.querySelector('.main-element');

    burger.addEventListener('click' , function () {
        mainNav.classList.toggle('is-active');
        mainEle.classList.toggle('is-active');

        burgerLine.forEach(element => {
            element.classList.toggle('is-active');
        }); 
    });   
}



export default burgerMenu;