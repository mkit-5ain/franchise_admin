document.addEventListener("DOMContentLoaded", function (){
    tabAction();
});
function tabAction () {
    const tabItem = document.querySelectorAll('.tab');
    const tabContent = document.querySelectorAll('.tab-content');

    tabItem.forEach((item) => {
        item.addEventListener('click', tabHandler);
    });

    function tabHandler(item) {
        const tabTarget = item.currentTarget;
        const target = tabTarget.dataset.tab;
        
        tabItem.forEach((title) => {
            title.classList.remove('active');
        });
        tabContent.forEach((target) => {
            target.classList.remove('active');
        });
        document.querySelector('#' + target).classList.add('active');
        tabTarget.classList.add('active');
    }
}