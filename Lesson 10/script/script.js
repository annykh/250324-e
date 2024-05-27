// if 
// else if
// else 

// > < <= >= == === !=
// && ||
// ()

// let numbers = [3, 10, -3, 0, 3, -12, 7, 3];

// numbers.push(10);
// numbers.unshift(15);
// numbers.pop();
// numbers.shift();

// let users = ['John', 'Tom', 'Alex', 'Bob', 'James'];

// users.splice(start_index, deletedCount, value1, value2, ...);

// Удалить двух пользователей начиная с третьего.
// users.splice(2, 2);

// Удалить двух пользователей начиная с третьего и добавить пользователей Den, Jack
// users.splice(2, 2, 'Den', 'Jack');

// Добавить пользователя Sam после Jack(3).
// users.splice(4, 0, 'Sam');

// console.log(users.indexOf('Jack'));

// users.splice(users.indexOf('Jack') + 1, 0, 'Sam');

// Добавить Leo до Tom.
// users.splice(users.indexOf('Tom'), 0, 'Leo');

// console.log(users);

// Удалить пользователя Den и вставить двух пользователей Nick, Dereck.
// users.splice(users.indexOf('Den'), 1, 'Nick', 'Dereck');
// console.log(users);

// Циклы 

// for(Начало; Условие выхода; Шаг){
    // тело цикла
// }

// let num1 = 5;

// num1 = num1 + 1;
// num1++;

// num1 += 3;

// num1 = num1 - 1;
// num1--;

// num1 -= 4;


// for(let num = 0; num <= 5; num+=2){
//     console.log(num);
// }

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// Задача: Вывести все числа от 1-10, которые делятся на 3 без остатка.

// for(let num = 1; num <= 10; num++){
//     if(num % 3 == 0){
//         console.log(num);
//     }
// }

// Вывести все четные числа от 20 до 100.

// for(let num = 20; num <= 100; num++){
//     if(num % 2 == 0){
//         console.log(num);
//     }
// }

// for(let num = 20; num <= 100; num+=2){
//     console.log(num);
// }

// Обратный цикл

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// Вывести нечетные числа от 1 до 20 в обратном порядке.
// for(let num = 20; num >= 1; num--){
//     if(num % 2 != 0){
//         console.log(num);
//     }
// }

// for(let num = 19; num >= 1; num-=2){
//     console.log(num);
// }


// let users = ['John', 'Tom', 'Alex', 'Bob', 'James', 'Jack', 'Ben', 'Sam', 'Leo'];

// Вывести в консоль всех пользователей.

// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);
// console.log(users[5]);

// for(let index = 0; index < users.length; index++){
//     console.log(users[index]);
// }

// Вывести первых трех пользователей

// for(let i = 0; i < 3; i++){
//     console.log(users[i]);
// }

// Вывести последних трех пользователей

// for(let i = users.length - 1; i >= users.length - 3; i--){
//     console.log(users[i]);
// }

let prices = [1200, 3000, 230, 1200, 400, 5400, 2000];

// Вывести цены меньше 2000.

// if(prices[0] < 2000){
//     console.log(prices[0]);
// }
// ...

// for(let i = 0; i < prices.length; i++){
//     if(prices[i] < 2000){
//         console.log(prices[i]);
//     }
// }


// Найти сумму всех элементов массива.

// let sum = prices[0] + prices[1] + prices[2] + ...
// let sum = prices[0];
// sum = sum + prices[1];
// sum = sum + prices[2];
// sum = sum + prices[3];
// sum = sum + prices[4];
// sum = sum + prices[5];

// sum = 1200;

// sum = 1200 + 3000; //4200
// sum = 4200 + 230; //4430


let sum = 0;

for(let i = 0; i < prices.length; i++){
    sum = sum + prices[i];
}

console.log(sum);

// sum = 0
// sum = 0 + 1200
// sum = 1200 + 3000
// sum = 4200 + 230
