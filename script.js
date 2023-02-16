/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


'use strict';

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        let movie = prompt('Один из просмотренных последних фильмов?');
        let score = +prompt('На сколько оцените его?');
        if(movie && score && movie.length < 50) {
            personalMovieDB.movies[movie] = score;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) alert('Просмотренно довольно мало фильмов');
    else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) alert('Вы классический зритель');
    else if(personalMovieDB.count >= 30) alert('Вы киноман');
    else alert('Произошла ошибка');
}

detectPersonalLevel();

console.log(personalMovieDB);