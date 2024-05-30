// showMessage();

// let object = {};

// let object = {
//     key1: value1,
//     key2: value2,
//     'first name': 'John',
//     first_name: 'Bob',
//     FirstName: 'Dereck'
// }

// console.log(object.first_name);

// object.first_name = 'Alex';
// object.new_key = 'New value';
// delete object.first_name;

// const object = {
//     ...
// }

// let user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     dateOfBirth: {
//         day: 5,
//         month: 10,
//         year: 1995
//     }
// }

// console.log(user.firstName); //John
// console.log(user.dateOfBirth);
// console.log(user.dateOfBirth.month); //10

// Проверка наличия свойства

// console.log('firstName' in user); //true
// console.log('firstname' in user); //false

// Есть массив из чисел

// [23, 0, -13, 6, -23, 5, 7, 0, 2, -5, -1, -45, 3, 26, 78, 900]

// Найти сумму элементов массива, которые четные и больше 10. 

// let numbers = [23, 0, -13, 6, -23, 5, 7, 0, 2, -5, -1, -45, 3, 26, 78, 900];

// let sum = 0;
// console.log(numbers.length);

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 == 0 && numbers[i] > 10){
//         sum = sum + numbers[i];
//     }
// }

// console.log(sum);

// Function
// function function_name(param1, param2){
//     ..body..
// }

// example 1

// showMessage();

// function showMessage(){
//     console.log('Hello');
// }

// showMessage();

// let num = 5;
// console.log(num);

// showMessage();

// example 2

// До локальной переменной

// showName(); //Cannot access 'first_name' before initialization

// После локальной переменной
// showName(); //Bob

// let first_name = 'John'; // Глобальная переменная

// showName();

// console.log(first_name); //John

// function showName() {
//     let first_name = 'Bob'; // Локальная переменная
//     console.log(first_name);
// }

// showName();

// example 3

// function showFirstName(){
//     let first_name = prompt('Enter your name');
//     console.log(first_name);
// }

// showFirstName();
// showFirstName();

// example 4

// let first_name = prompt('Enter your name');

// function showUserName() {
//     console.log(first_name);
// }

// showUserName();
// showUserName();

// Параметры

// example 5
// function showMessage(first_name = 'User name'){ // first_name - параметр
//     console.log(`Hello ${first_name}`);
// }

// // showMessage('John'); // 'John' - аргумент
// // showMessage('Alex'); // 'Alex' - аргумент

// // let userName = prompt('Enter your name');
// // showMessage(userName); // userName - аргумент

// // параметр = аргумент

// // До значения по умолч.
// showMessage(); // Hello undefined

// // После значения по умолч.
// showMessage(); // Hello User name


// example 6

// function show_user_name(first_name, last_name){
//     console.log(`Hello ${first_name} ${last_name}`);
// }

// show_user_name('John', 'Smith'); //Hello John Smith
// show_user_name(); //Hello undefined undefined
// show_user_name('John'); //Hello John undefined

// function show_user_name(first_name = 'Name', last_name = 'Surname'){
//     console.log(`Hello ${first_name} ${last_name}`);
// }

// show_user_name('John', 'Smith'); //Hello John Smith
// show_user_name(); //Hello Name Surname
// show_user_name('John'); //Hello John Surname
// show_user_name(prompt('Enter your name'), prompt('Ente your surname'));

// Создать функцию, которая принимает два числовых агумента и выводит в консоль их сумму

// function show_sum(num1 = 0 , num2 = 0){
//     console.log(num1 + num2);
// }

// show_sum(20, 5); //25
// show_sum(+prompt('Enter the first number'), +prompt('Enter the second number'));
// show_sum(); //0

// Возврат значения

// function get_sum(num1 = 0, num2 = 0){
//     return num1 + num2;
//     let sum = num1 + num2; // Не выполниться
// }

// let result = get_sum(20, 10);

// console.log(result);

// Создать функцию, которая проверяет возраст пользователя. Если польз. больше 18, возвращает сообщение 'Есть доступ', если нет - 'Нет доступа'.

// function checkAge(age = 0){
//     if(age > 18){
//         return 'Есть доступ';
//     }
//     else {
//         return 'Нет доступа';
//     }
// }

// function checkAge(age = 0){
//     if(age > 18){
//         return 'Есть доступ';
//     }
//     return 'Нет доступа';  
// }

// let result = checkAge(+prompt('Enter your age'));

// console.log(result);


// Написать функцию которая принимает два числовых значения и возвращет максимум из двух чисел.

function getMax(num1 = 0, num2 = 0){
    if (num1 > num2){
        return num1;
    }
    return num2;
}

// let result = getMax(10, 45);
let result = getMax(+prompt('enter the number'), +prompt('enter the number'));

console.log(result);
