//variable

const accordions = document.getElementsByClassName('content-container');
//console.log(accordions);
Array.from(accordions).forEach((accordion) => {
    accordion.addEventListener('click', ()=>{
        accordion.classList.toggle('active');
    });
});