// let number1 = Number(prompt('Enter the number'));

// console.log(number1);

// console.log(typeof(number1)); //number
// console.log(typeof(Infinity)); //number
// console.log(typeof('123')); //string
// console.log(typeof(NaN)); //number


// Логический тип данных

// true //Истинно
// false //Ложно

// Условные операторы 

// if(Условие){
//     действие
// }

// Операторы сравнения
// > больше
// < меньше
// >= больше/равно
// <= меньше/равно
// == равно
// === строгое равно
// != не равно

// Логические операторы
// && and и
// || or или

// let user_age = prompt('Enter your age');

// if(user_age >= 18){
//     console.log('Доступ открыт');
// }

// if(условие){
//     действие
// }
// else{
//     альтернативное действие
// }

// if(user_age >= 18){
//     console.log('Доступ открыт');
// }
// else{
//     console.log('Доступ закрыт');
// }

// if(Условие1){
//     действие1
// }
// else if(Условие2){
//     действие2
// }
// ...
// else{
//     альтернативное действие
// }

// <=16 нет доступа
// >16 <=18 Есть доступ к книгам
// >18 <50 Есть доступ к книгам и к статям
// >=50 Есть полный доступ

// if(user_age <= 16){
//     console.log('нет доступа');
// }
// else if(user_age <= 18){
//     console.log('Есть доступ к книгам');
// }
// else if(user_age < 50){
//     console.log('Есть доступ к книгам и к статьям');
// }
// else if(user_age >= 50){
//     console.log('Есть полный доступ');
// }
// else {
//     console.log('Есть полный доступ');
// }


// let number = prompt('enter the number');
// console.log(number);
// '20' == 20 true
// if(number == 20){
//     console.log('number = 20');
// }

// '20' === 20 false 
// 20 == 20 true
// string == number false
// if(number === 20){
//     console.log('number = 20');
// }

// 11%2==1
// 13%2==1

// 10%2==0
// 8%2==0

// let number2 = +prompt('Enter the number');

// if(number2 % 2 == 0){
//     console.log("Четное");
// }
// else{
//     console.log('Нечетное');
// }


// Число проверить на кратность 3.

// let number3 = prompt('Enter the number');

// if(number3 % 3 == 0){
//     console.log('True');
// }
// else{
//     console.log('False');
// }

// Задача: Составьте программу, которая принимает с клавиатуры целое число и, если оно положительное, увеличивает его вдвое.
// Программа должна выводить в консоль новое значение.

// let number4 = +prompt('enter the number');

// if(number4 >= 0){
//     console.log(number4*2);
// }

// Задача: Составьте программу, которая принимает с клавиатуры два числа и, если первое больше второго, выводит в консоль их сумму, если же наоборот – выводит в консоль  их произведение. В случае же, если числа одинаковы, программа выводит в консоль  сообщение "числа одинаковые". 

// let number5 = +prompt('Enter the first number');
// let number6 = +prompt('Enter the second number');

// if(number5 > number6){
//     console.log(number5 + number6);
// }
// else if(number6 > number5){
//     console.log(number5 * number6);
// }
// else{
//     console.log("числа одинаковые");
// }


// Массивы
// Array

// let new_array = [elem1, elem2, elem3, ...];
// let empty_array = [];

let fruits = ['Apple', 'Kiwi', 'Banana'];

console.log(fruits);

console.log(fruits.length); //длина массива (кол/во элементов)

// array_name[index]

console.log(fruits[0]); //первый элемент
console.log(fruits[2]); //3 элемент

console.log(fruits[fruits.length - 1]); // последний элемент

// Добавление элемента/ов в начало массива
// fruits.unshift('Avocado');
fruits.unshift('Avocado', 'Mango');
console.log(fruits);

// Добавление элемента в конец массива
fruits.push('Cherry', 'Orange');
console.log(fruits);

// Удаление первого элемента
fruits.shift();
console.log(fruits);

// Удаление последнего элемента
fruits.pop();
fruits.pop();
console.log(fruits);

// Изменение значения элемента
fruits[2] = 'Pear';
console.log(fruits);

// Задание: 
// 1. Создайте массив styles с элементами «Джаз» и «Блюз». 
// 2. Добавьте «Рок-н-ролл» в конец. 
// 3. Замените значение в середине на «Классика». 
// 4. Удалите первый элемент массива.
// 5. Вставьте Рэп и Регги в начало массива.

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[1] = 'Классика';
styles.shift();
styles.unshift('Рэп', 'Регги');
console.log(styles);

