/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let addOn = true;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

while(addOn) {
    let movie = prompt('Один из просмотренных последних фильмов?');
    let score = +prompt('На сколько оцените его?');
    if(!movie && !score && movie.length > 50) continue;
    personalMovieDB.movies[movie] = score;
    addOn = confirm('Продолжить ввод?');
}

if(personalMovieDB.count < 10) alert('Просмотренно довольно мало фильмов');
else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) alert('Вы классический зритель');
else if(personalMovieDB.count >= 30) alert('Вы киноман');
else alert('Произошла ошибка');