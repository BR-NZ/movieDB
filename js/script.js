/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
    editElementText: function(selector, text) {
        const element = document.querySelector(selector);
        element.textContent = text;
    },
    changeElementBackground: function(selector, backgroundUrl) {
        const element = document.querySelector(selector);
        element.style.backgroundImage = `url(${backgroundUrl})`;
    },
    removeAdv: function() {
        const advBlock = document.querySelector('.promo__adv')
        advBlock.remove();
    },
    listElements: function(arr) {
        const parent = document.querySelector('.promo__interactive-list');
        parent.innerHTML = '';

        arr.sort().forEach((element, i) => {
            const item = document.createElement('li');
            item.classList.add('promo__interactive-item');
            item.innerHTML = '<div class="delete"></div>';
            item.textContent = `${i + 1}. ${element}`;
            parent.appendChild(item);
        });
    }
};

movieDB.removeAdv();
movieDB.editElementText('.promo__genre', 'драма');
movieDB.changeElementBackground('.promo__bg', '/img/bg.jpg');
movieDB.listElements(movieDB.movies);