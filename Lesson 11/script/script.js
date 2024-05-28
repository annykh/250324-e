// for(start; end; step){
//     body 
// }

// let numbers = [-23, 1, 5, 0, 26, 4, 10, -4, 3, 5];

// Вывести только четные положительные числа из массива

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 == 0 && numbers[i] > 0){
//         console.log(numbers[i]);
//     }
// }

// Из массива вывести числа, которые меньше 0 или больше 10.

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] < 0 || numbers[i] > 10){
//         console.log(numbers[i]);
//     }
// }

// Заполнить массив числами от 0 до 10.

// let array = [];

// for(let i = 0; i <= 10; i++){
//     array.push(i);
// }

// console.log(array);

// Заполнить массив четными числами от 0 до 100.

// let numbers = [];

// for(let i = 0; i <= 100; i++){
//     if(i % 2 == 0){
//         numbers.push(i);
//     }
// }

// for(let i = 0; i <= 100; i+=2){
//     numbers.push(i);
// }

// console.log(numbers);

// Objects

// let array = [['John', 'Bob', 'Alex'], 
//             [2000, 2500, 1500]];

// индекс: элемент

// let obj = {}; // пустой объект

// // свойства = ключ: значение

// let user = {
//     first_name: 'John',
//     last_name: 'Smith',
//     age: 30
// }

// console.log(user.first_name);
// console.log(user.last_name);

// let users = {
//     first_names: ['John', 'Bob', 'Alex'], 
//     last_names: ['Smith', 'Brown', 'Jameson'],
//     ages: [22, 26, 30]
// };

// console.log(users.first_names[0]); //John
// console.log(users.last_names[1]); //Brown

// let users = [
//     {
//         first_name: 'John',
//         last_name: 'Smith',
//         age: 30
//     }, 
//     {
//         first_name: 'Bob',
//         last_name: 'Brown',
//         age: 29
//     }, 
//     {
//         first_name: 'Alex',
//         last_name: 'Jameson',
//         age: 25
//     }
// ];

// console.log(users[0]);
// console.log(users[0].first_name);
// console.log(users[0].last_name);
// console.log(users[0].age);

// let phone = {
//     title: 'iPhone 14 pro',
//     color: 'black',
//     price: 1000
// };

// // Добавление нового свойства
// phone.quantity = 10;

// // Изменение значениия свойства
// phone.color = 'white';

// // Удаление свойства
// delete phone.quantity;

// console.log(phone);

// Напишите код, выполнив задание из каждого пункта отдельной строкой:

//     Создайте пустой объект user.
//     Добавьте свойство firstname со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства firstname на Pete.
//     Удалите свойство firstname из объекта.

// let user = {};
// user.firstname = 'John';
// user.surname = 'Smith';
// user.firstname = 'Pete';
// delete user.firstname;

// console.log(user);

// let phone = {
//     title: 'iPhone 14 pro',
//     color: 'black',
//     price: 1000
// };

// console.log(phone.title);
// console.log(phone.color);
// console.log(phone.price);

// for (let key in phone){
//     // console.log(key);   //title, color, price
//     console.log(phone[key]);
// }

// let phones = [
//     {
//         name: 'iPhone 14',
//         price: 1000,
//         quantity: 10
//     },
//     {
//         name: 'iPhone 14 pro',
//         price: 1100,
//         quantity: 4
//     },
//     {
//         name: 'iPhone 14 pro max',
//         price: 1200,
//         quantity: 15
//     },
//     {
//         name: 'iPhone 15',
//         price: 1300,
//         quantity: 5
//     },
//     {
//         name: 'iPhone 15 pro',
//         price: 1350,
//         quantity: 20
//     }
// ]

// Вывести все элементы массива
// for(let i = 0; i < phones.length; i++){
//     console.log(phones[i]);
// }

// Вывести только имена товаров

// console.log(phones[0].name);
// console.log(phones[1].name);
// console.log(phones[2].name);

// for(let i = 0; i < phones.length; i++){
//     console.log(phones[i].name);
// }

// Вывести имена только тех товаров, кол/во которых больше 10

// for(let i = 0; i < phones.length; i++){
//     if(phones[i].quantity > 10){
//         console.log(phones[i].name);
//     }
// }

// Найти сумму price всех товаров.

// let sum = 0;

// for(let i = 0; i < phones.length; i++){
//     sum = sum + phones[i].price;
// }

// console.log(sum);

// Найти сумму price тех товаров, кол/во которых меньше/равно 10.

// let sum = 0;

// for(let i = 0; i < phones.length; i++){
//     if(phones[i].quantity <= 10){
//         sum = sum + phones[i].price;
//     }
// }

// console.log(sum);

// Вывести для каждого товара строку по маске : 'name: price'

// console.log(`${phones[0].name}: ${phones[0].price}`); //iPhone 14: 1000

// for(let i = 0; i < phones.length; i++){
//     console.log(`${phones[i].name}: ${phones[i].price}`);
// } 

let user = {
    firstname: 'John',
    lastname: 'Smith',
    age: 30,
    friends_count: 12
};


// Вывести только те значения свойств, которые являются строками.

for(let key in user){
    if(typeof(user[key]) == 'string') {
        console.log(user[key]);
    } 
}

// typeof('John'); //'string'
// typeof(12); //'number'
