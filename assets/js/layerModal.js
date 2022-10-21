document.addEventListener("DOMContentLoaded", function (){
    showHideAction('.modify-view','.modify-layer','.modify-close');
    showHideAction('.history-view','.history-layer','.history-close');
});
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
