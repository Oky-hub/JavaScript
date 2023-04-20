// console.log('Hi Firnanda', 'Online Course'); //statement 'Hi Firnanda'
// console.log('Hi Firnanda');
// console.log('Hi Firnanda');
// console.log('Hi Firnanda');
//console.log('Hi Firnanda');

// Variable
// var name=('Hello Universe');
// console.log(name);

// let price = 250; // can update this variable

// price = 400; // update dari variable price

// const name = 'Oky'; // cannot update this variable

// console.log(price,name);

// let name = 'Oky'; // string type
// console.log(typeof name);

// let age = 22; // int type
// console.log(typeof age);

// let isMarried = true; // boolean type
// console.log(typeof isMarried);

// let colors; //undefined type
// console.log(colors);

// let selectcolor = null; // object type
// console.log(typeof selectcolor);

// let name='Oky';
// let age= 22;
// let hobby = 'running';

// let user = {
//     name : 'Oky',
//     age : 22,
//     hobby : 'Running',
// }; // hasil convert type object

// console.log(user); // menampilkan variable name object
// console.log(user.name); //menampilkan index tertentu
// console.log(user['hobby']); //menampilkan index tertentu

// JavaScript Array
// let friends = ['Joko', 'Santi', 'Siti']; //terdapat 3 index dimulai dari 0 - 2, jumlah length 3

// console.log(friends); // menampilkan semua value di variable friends
// console.log(friends[0]); // menampilkan value berdasarkan urutan indexs
// console.log(typeof friends); // melihat type data dari variable friends, yaitu object
// console.log(friends.length); // menghitung jumlah length

// JavaScript Function
// can execute some of the work and when you need be, if you want to display

// function showMyName(){ // bentuk function
//     console.log('My name is Oky'); 
    
// }
// showMyName(); // menampilkan value yang ada di function

// function showMyPartName(name){ // bentuk function dengan parameter
//     console.log(name)
//     //console.log('My name is Oky'); 
    
// }
// showMyPartName('Jaju'); // menampilkan value dengan memberikan nilai di

// function showMyPartName(name){ // bentuk function
//     console.log('My name is ' + name); 
    
// }
// showMyPartName('Nanda'); // menampilkan value yang ada di function

// let num1 = 30;
// let num2 = 20;
// let sum = num1 + num2;
// console.log('Hasil = ' + sum); // belum menggunakan function

// function calcSum(num1, num2){ // function dengan parameter
//     const sum = num1 + num2; // membuat variable sum untuk penjumlahan
//     return sum; // mengembalikan nilai variable
// }

// const result = calcSum(45, 32); // inisialisasi nilai untuk parameter
// console.log('Hasil = ' + result);  // menampilkan hasil dari result

// Template Literals

// let name = 'jack';
// console.log(`my name is ${name} `); // pengggunaan simbol `` untuk memanggil variabel name 

// console.log(`${30 + 43}`);

// let message = `My name is 
// kazi 
// ariyan`;

// console.log(message);

// Exercise - Person Object
// let person = {
//     name : 'Oky',
//     age : 22,
//     isMarried : true, // deklarasi variable type object

//     homeAddress : {
//         long : 44.55,
//         lat : 33.44, // deklarasi variable object
//     },
//     friends : ['cici', 'jack', 'marshall'], // variable array
// };
// console.log(person); // show value in variable object person
// console.log(person.name); // show value in variable object person with variable name
// console.log(person.homeAddress.long); // show value in variable object person in variable object with variable long
// console.log(person.friends[1]); // show value in variable object person with variable friends and show value index 1

// Arithmetic Operators
// let num1 = 25;
// let num2 = 10;

// console.log(num1 + num2); // penjumlahan
// console.log(num1 - num2); // pengurangan
// console.log(num1 * num2); // perkalian
// console.log(num1 / num2); // pembagian

// console.log(num1 ** num2); // double perkalian
// console.log(num1 % num2); // modulus

// Assighment Operators
// let num1 = 10;
// let num2 = num1;

// console.log(num1, num2);

// // num1 = num1 + 5;
// num1 += 5; // hasilnya sama dengan kondisi diatas
// console.log(num1);

// num1 = num1 - 5;
// num1 -= 5;
// console.log(num1);

// num1 = num1 * 5;
// num1 *= 5;
// console.log(num1);

// num1 = num1 + 1;
// num1 += 1;
// console.log(num1);

// num1 = num1 - 1;
// num1 - 1;
// console.log(num1);

// Comparison Operators
// > < >= <= === !==

// let price = 200; 

// console.log(price > 300);
// console.log(price >= 200);
// console.log(price < 100);
// console.log(price <= 300);
// console.log(price === 200);
// console.log(price !== 100);

// Logical Operators
// and (&&) ,  or (||) , not (!)

// let price = 10;

// console.log(price > 5 && price < 13);
// // true && true

// console.log(price > 50 || price < 13);
// console.log(!(price > 50));

// Equality operaratos
// let price = 10;
// console.log(price === '10');
// console.log(price !== 20); 

// console.log(price === '10');
// console.log(price !== 20);

// Problem : Swap Two Numbers
// let apple = 10;
// let orange = 20;

// let temp = apple;
// apple = orange;
// orange = temp;

// console.log(apple, orange);

// Conditional Statements 

// if (condition1){
//     statements
// }else if(condition2){
//     statements
// }else if(condition3){
//     statements
// }else{

// let number = 2;

// if (number > 0){
//     console.log('This is a positive number');
// }else if(number < 0){
//     console.log('This is a negative number');
// }else{
//     console.log('This is not a number');
// }

// }

// Switch Case
// let color = 'Yellow';

// switch (color){
//     case 'Red':
//     console.log('This is black');
//     break;

//     case 'Green':
//         console.log('Yhis is color green');
//         break;

//     case 'Yellow':
//             console.log('This is black');
//             break;
// }


// Ternary Operators
// let number1 =  10;
// let number2 = 2;

// let maxValue;
// if (number1>number2){
//     maxValue = number1;
// }else{
//     maxValue = number2;
// }

// let max = number1 > number2 ? number1 : number2;

// console.log(max);

// Exercise
// Problem : FizzBuzz
// Take a number
// if it is divisible by 3, print Fizz
// If it is divisible by 5 Print Buzz
// If it is divisible by both 3 & 5 print Fizzbuzz
// otherwise, print nothing  
let number = 10;

// if (number % 3 === 0 && number % 5 === 0){
//     console.log('Fizzbuzz');
// }
// else if (number % 3 === 0){
//     console.log('Fizz');
// }
// else if (number % 5 === 0){
//     console.log('Buzz');   
// }else{
//     console.log('Nothing');
// }

// Exercise Fizz Buzz
// console.log(
//     number % 3 === 0 && number % 5 === 0
//     ? 'FixxBuzz'
//     : number % 3 === 0
//     ? 'Fizz'
//     : number % 5 === 0
//     ? 'Buzz'
//     : 'Nothing'
// );

// Exercise Our Grading System
// Problem : Our Grading FileSystem
// Take a number
// If the mark is in between 80 - 100, Print "A+"
// If the mark is in between 70 - 79, Print "A"
// If the mark is in between 60 - 69, Print "A-"
// If the mark is in between 50 - 59, Print "B"
// If the mark is in between 40 - 49, Print "C"
// If the mark is in between 33 - 39, Print "D"
// If the mark is in between 0 - 32, Print "F"

// let mark = 74;

// if(mark >= 80 && mark <= 100){
//     console.log('A+');
// }else if(mark >= 70 && mark <= 79){
//     console.log('A');
// }else if(mark >= 60 && mark <= 69){
//     console.log('A-');
// }else if(mark >= 50 && mark <= 59){
//     console.log('B');
// }else if(mark >= 40 && mark <= 49){
//     console.log('C');
// }else if(mark >= 33 && mark <= 39){
//     console.log('D');
// }else if(mark >= 0 && mark <= 32){
//     console.log('F');
// }

// Problem : Our Grading System
// Take A nimber
// number  > number
// number === 0   
// number < 0
// let mark = 110;

// switch(true){
//     case number > 0:
//     console.log('This a positive number');
//     break;

//     case number === 0:
//         console.blog('This is a zero number');
//         break;

//         case number < 0:
//             console.blog('This is a zero number');
//             break;
        
// }

// Section 6
//29. For Loop
// let name = 'Nanda';

// for(let index = 1; index <= 5; index++ ){
//     console.log(name, index);
// }

// for(let index = 5; index >= 1; index-- ){
//     console.log(name, index);
// }

//30. While Loop
// let greating = 'Hii Nanda';
// let index = 1;
// let index2 = 4;

// while(index <= 5){
//     console.log(greating, index);
//     index++;
// }

// while(index2 >= 1){
//     console.log(greating, index2);
//     index2--;
// }

//31. Do while Loop
// let service = 10;
// let greating = 'Hi Nanda';
// do{
//     console.log(greating, service);
//     service--;
// }while(service >= 1);

// console.log(service);

//32. For in Loop
// const objs = {
//     name : 'Oky',
//     Age  : 22,
// }

// for (let key in objs){
//     console.log(key, objs[key]);
// }
// let numbers = [1,2,3,4,5];
// console.log(numbers);

// for (let index in numbers){
//     console.log(index, numbers[index]);
// }

//40. String Methods: to String, Concat, Split
// let message = "Hi my name is Oky"
// let temp = [1,2,3];
// console.log(temp.toString);
// console.log(typeof temp.toString()); // mengganti tipe data menjadi string

// let m1 = 'Hi'
// let m2 = ' My name'
// let m3 = ' is Oky' 

// let m = m1.concat(m2,m3); // menggabungkan dari beberapa variabel dengan method concat
// console.log(m);

// console.log(message.split(' ')); // membagikan menjadi setiap karakter

//41. String Methods: slice, subStr, subString
// let message = "Hi my name is HI Oky";
// console.log(message.slice(0,5)); //mendapatkan nilai dari index 0 - 5
// console.log(message.slice(6,12));
// console.log(message.slice(5));
// console.log(message.slice());
// console.log(message.slice(0));
// console.log(message.slice(-12, -1)); //mengubah urutan nilai

// console.log(message.substring(0,5));
// console.log(message.substt(0,4))

//42. Escape Sequences
// let message = '\tHi\\ my name is \\ "Hii\' Oky" Firnanda".\nHow are you? ';
// console.log(message)

//43. String Immutability
// let message = 'Hi Oky';
// message = 'Ji Oky' + ' how are you';
// message = message + 'how are you';
// console.log(message);
//--------------------------------------------------------------------------------------------


// Section 8 : Objects - The Core of JavaScript & JSON
//44. Object Basics with Dot Bracket Notation
// let name = 'Nanda';
// let age = 22;
// let hobby = 'Swimming'

// const user = {
//     name: 'Nanda',
//     age: 22,
//     hobby: 'Swimming'
// }
// console.log(user);

// console.log(user.name); // menampilkan dari variabel dengan dot notation

// console.log(user['name']); // menggunakan bracket notation

//45. Adding, Modifying Deleting Properties
// const user = {
//     name: 'Nanda',
//     age: 22,
//     hobby: 'Swimming'
// }
// console.log(user);
// //ADD
// user.email = 'oki332023@gmail.com';
// user['phone'] = '085369116033';

// //UPDATE
// user.hobby = 'Travelling';
// user.age = user.age + 7;

//DELETE
// delete user.age;

//46. Object Methods This Keyword
// const user = {
//     name: 'Nanda',
//     age: 22,
//     hobby: 'Swimming',
//     friends: ['Rasyid', 'Marshall'],
//     selectColoer : null,
//     calculateAge: function(){
//         console.log(`I am ${this.age} Oky Firnanda`); // menampilkan function dengan pemanggilan property keyword
//     }
// };

// user.calculateAge(); // mengembalikkan nilai function untuk ditampilkan

//47. Traversing Object Entries
// const user = {
//         name: 'Nanda',
//         age: 22,
//         hobby: 'Swimming',
//         friends: ['Rasyid', 'Marshall'],
// };

// //one way
// for (let key in user){
//     console.log(key, user[key]);
// }

// // two way
// console.log(Object.keys(user)); // menampilkan hanya bagian key property
// console.log(Object.values(user)); // menampilkan bagian values

// for (let val of Object.values(user)){
//     console.log(val);
// } // menampilkan values

//48. Exercise Total Salary
// const salaries = {
//     dayat : 2400,
//     michael : 3000,
//     mangi : 4900,
//     ikhsan : 5300,
//     nanda : 6400
// };

// let sum = 0;

// for (let key in salaries){ // variable key di dalam salaries
//     console.log(key, salaries[key]); // menampilkan key dan value salaries
//     // sum = sum + salaries[key]; // menjumlah values then simpan di sum
//     sum += salaries[key];
// }

// console.log(sum);

// console.log(Object.values(salaries));

// for (let val of Object.values(salaries)){
//     sum += val;
// }
// console.log(sum);

//49. Object Destructuring
// const user = {
//     name : nanda,
//     age : 22,
//     favBook : {

//     }
// };

//50. Cloning an object
//51. Math Object
//52. JSON Data Format