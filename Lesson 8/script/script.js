// let varibleName = 'Значение'; 

// let UserName
// let user_first_name


// Строки string
// '' ""

// Числа number
// 123
// 12.3
// -12
// Infinity
// -Infinity

// let userAge = 20;
// let userName = 'John';

// console.log(userName);

// console.log('Hello world!');

// let number1 = 12;
// number1 = 20;

// number1 = 30;

// // number1 = 'String';

// const admin_name = 'Bob';
// // admin_name = 'Tom'; //error


// String

// ""
// ''
// ``


// let user_name = 'John';
// let user_surname = 'Smith';
// let user_age = 20;

// Конкатенация

// 'Hello user_name user_surname'

// console.log('Hello ' + user_name + ' ' + user_surname);

// // Hello. My name is user_name user_surname. I'm user_age.

// console.log('Hello. My name is ' + user_name + ' ' + user_surname + ". I'm " + user_age + '.');

// // Интерполяция
// // Метод обратных ковычек

// // 'Hello user_name user_surname'

// console.log(`Hello ${user_name} ${user_surname}`);

// // Hello. My name is user_name user_surname. I'm user_age.

// console.log(`Hello. My name is ${user_name} ${user_surname}. I'm ${user_age}.`);


// Задача: есть переменные r, g, b с числовыми значениями. Вывести в консоль строку 
// “rgb(12, 34, 14)” 
// используя конкатенацию и интерполяцию.

// let r = 12;
// let g = 34
// let b = 14;

// console.log('rgb(' + r + ', ' + g + ', ' + b + ')');

// console.log(`rgb(${r}, ${g}, ${b})`);

// Number

// let number1 = 20;
// let number2 = 10;

// console.log(number1 + number2); //30
// console.log(number1 * number2); //200
// console.log(number1 / number2); //2
// console.log(number1 - number2); //10
// console.log(number1 ** 2); //400
// console.log(number1 ** 3); //8000 
// console.log(number1 % 2); //0
// console.log(11 % 2); //1
// console.log(17 % 3); //2

// let sum = number1 + number2;

// console.log(sum);

// console.log(10 / 0); //Infinity
// console.log(-20 / 0); //-Infinity

// // NaN = Not a Number "не число"

// console.log('hello' / 2); //NaN
// console.log('hello' * 2); //NaN
// console.log('hello' - 2); //NaN
// console.log('hello' ** 2); //NaN
// console.log('hello' % 2); //NaN
// console.log('hello' + 2); //'hello2'

// console.log(10 + 36 * 12 / 5 / 'a' * 10 + 20); //NaN

// Ввод данных 

// prompt(title, default)

// let user_name = prompt('Enter your name', 'UserName');

// console.log(user_name);

// let user_age = prompt('Enter your age');
// // let user_age = +prompt('Enter your age');
// // let user_age = Number(prompt('Enter your age'));

// console.log(user_age); //'20'
// console.log(200 + user_age); //'20020'

// console.log(+user_age); //20
// console.log(Number(user_age)); //20

// Задача: Написать программу, которая считывает через prompt число и выводит в консоль его квадрат.

// let number = +prompt('Enter the number');

// console.log(number**2);
