function tabs() {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {

            item.classList.remove('tabheader__item_active');

        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target,
            contains = target.classList.contains('tabheader__item');
        if (target && contains) {

            tabs.forEach((item, index) => {

                /* target возвращает элемент, на который в данный момент мы нажали.
                * потом при помощи функции forEach, мы перебираем весь массив, при этом,
                * в index запоминается номер элемента. И если они совпали, то
                * скрывается весь предыдущий контент и вызывается функция, которая
                * показывает элемент по индексу.
                * */

                if (target === item) {
                    hideTabContent();
                    showTabContent(index);
                }
            });

        }

    });

}

module.exports = tabs;