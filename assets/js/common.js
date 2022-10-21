document.addEventListener("DOMContentLoaded", function (){
    menuAction();
    showHideAction('.modify-view','.modify-layer','.modify-close');
    showHideAction('.history-view','.history-layer','.history-close');
    tabAction();
});

function menuAction () {
    let ele = document.querySelector(".depth > .menu");
    let category = document.querySelector(".depth");
    ele.addEventListener('click', function () {
        category.classList.toggle('active');
    });
}

function showHideAction (viewBtn, viewLayer, viewClose) {
    let btn = document.querySelector(viewBtn);
    let showEle = document.querySelector(viewLayer);
    let hideEle= document.querySelector(viewClose);

    btn.addEventListener('click', function () {
        showEle.classList.add('active');
    });

    hideEle.addEventListener('click', function () {
        showEle.classList.remove('active');
    });
}

function tabAction () {
    const tabItem = document.querySelectorAll(".tab-container__item");
    const tabContent = document.querySelectorAll(".content-container__content");

    tabItem.forEach((item) => {
    item.addEventListener("click", tabHandler);
    });

    function tabHandler(item) {
    const tabTarget = item.currentTarget;
    const target = tabTarget.dataset.tab;
    tabItem.forEach((title) => {
    title.classList.remove("active");
    });
    tabContent.forEach((target) => {
    target.classList.remove("target");
    });
    document.querySelector("#" + target).classList.add("target");
    tabTarget.classList.add("active");
    }

}