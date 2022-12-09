const btnDeclineCookie = document.querySelector('.js-btn--decline');
const btnAcceptCookie = document.querySelector('.js-btn--accept');
const containerCookie = document.querySelector('.js-c-cookie');


setTimeout(()=>{
    containerCookie.classList.remove('is-hidden');
}, 1000);

const removeCookie = function(){
    containerCookie.classList.add('is-hidden');
}

btnDeclineCookie.addEventListener('click', removeCookie);
btnAcceptCookie.addEventListener('click', removeCookie);