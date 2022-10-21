document.addEventListener("DOMContentLoaded", function (){
    menuAction();
});

function menuAction () {
    let ele = document.querySelector(".depth > .menu");
    let category = document.querySelector(".depth");
    ele.addEventListener('click', function () {
        category.classList.toggle('active');
    });
}