'use strict';

const user = {
    name: "Alex",
    age: 25,
    city: "Kyiv",
    job: "Frontend"
};

const { usersName, age, city, job } = user;
// Знадобилось перейменувати бо видавало таку помилку при створенні наступного об'єкту 
// "name" устарело.ts(6385)
// lib.dom.d.ts(27095, 5): Объявление было отмечено как устаревшее.
// const name: void
// @deprecated

const shortInfo = {
    name: usersName,
    city: city
};

const renamed = {
    fullName: usersName,
    location: city
};