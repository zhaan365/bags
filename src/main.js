
// tabs_________________________________________________________________________

const tabsBtn = document.querySelectorAll('.b__items-link');
const tabsItems = document.querySelectorAll('.b__row');

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if ( ! currentBtn.classList.contains('active')){
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });
            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});
