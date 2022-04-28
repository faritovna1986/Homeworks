'use strict'

//1. Получить данные всех пользователей из https://reqres.in/api/users
fetch("https://reqres.in/api/users?per_page=12")

.then((response) => response.json())
.then((result) => console.log(result.data));

//2. Вывести в консоль фамилии всех пользователей в цикле 

fetch("https://reqres.in/api/users?per_page=12")

    .then((response) => response.json())
    .then((result) => {
        showAllUsers(result.data);
});


function showAllUsers(users = []) {
    users.forEach((user) => {
    console.log(user.last_name);
});

//3 Вывести все данные всех пользователей, фамилия которых начинается на F
const usersFiltered = users.filter((user) => {
        return user.last_name && user.last_name [0]=== 'F';
});

usersFiltered.forEach((user) => {
    console.log(user.last_name);
   
});

//4 Вывести следующее предложение: Наша база содержит данные следующих пользователей: и далее в этой же строке через запятую имена и фамилии всех пользователей. Использовать метод ruduce
const userBase = users.reduce ((acc, user) => {
acc += user.first_name + ' ' + user.last_name + ','
    return acc;
}, '');

console.log(`Наша база содержит данные следующих пользователей: ${userBase}`);

//5 Вывести названия всех ключей в объекте пользователя

const usersObjectKeys = users.reduce((acc, user) => {
    const keys = Object.keys(user);
    keys.forEach((key) => {
        acc[key] = true;
    });
    return acc;
}, {});

Object.keys(usersObjectKeys).forEach((usersObjectKey) => {
    console.log(usersObjectKey);
});
}


//Отрисовать в браузере

const container = document.querySelector('.container');

fetchUsers();

async function fetchUsers() {
    let result;
    try {
        const response = await fetch("https://reqres.in/api/users?per_page=12");
        result = await response.json();
    } catch (e) {
        console.log(e);
    }

    const users = (result && result.data) || [];
   
     drawUsers(users);
}

function drawUsers(users = []) {
    let resultHtml = '';

    users.forEach((user) => {
        resultHtml += `
            <div class="user">
                <img class="user__image" src=${user.avatar}>
                <span class="user__name">${user.first_name} ${user.last_name}</span>
            </div>`;

    });
    console.log(resultHtml);
    
    container.innerHTML = resultHtml;
 }
