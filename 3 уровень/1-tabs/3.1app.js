'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

let text_el = document.querySelector('.text')

let nav_link_el = document.querySelectorAll('.nav-link')

nav_link_el.forEach(el => {
    el.addEventListener('click', clickHandler)
})

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    changeActiveClass(event)
    changeText(event)

    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.

}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    let active_el = document.querySelector('.active')
    active_el.classList.remove('active')
    event.target.classList.add('active')
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    let num_el = event.target.textContent.length
    let last_el = event.target.textContent[num_el - 1]

    text_el.textContent = texts['text' + (last_el)]

    // почемуто при нажатии Link 1 текст возвращается стандартный я незнаю почему.


}