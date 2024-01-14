// const heading = document.createElement("h1");
// const paragraph = document.createElement("p");
// const headingHTML = document.getElementById("headingworld");
// const div = document.createElement("div");

// document.body.appendChild(heading);
// document.body.appendChild(paragraph);
// document.body.appendChild(div);
// headingHTML.innerText = "Bye world";
// // document.body.removeChild(headingHTML);

// const newContent = document.createTextNode("Hi there and greetings!");
// const newContent2 = document.createTextNode("Hi there and greetings again!");
// const newContent3 = document.createElement("p");
// const newContent4 = document.createTextNode("Hello paragraph div");

// heading.appendChild(newContent);
// paragraph.appendChild(newContent2);
// div.appendChild(newContent3);
// newContent3.appendChild(newContent4);

// console.log(heading);
// console.log(paragraph);

// function first() {
//   console.log("Hello First");
// }

// function second() {
//   console.log("Hello Second");
// }

// function third() {
//   console.log("Hello Third");
// }

// first();

// second();

// third();

// var name = "Victor";

// function first() {
//   var a = "Hi!";
//   second();
//   console.log(`${a} ${name}`);
// }

// function second() {
//   var b = "Hey!";
//   third();
//   console.log(`${b} ${name}`);
// }

// function third() {
//   var c = "Hello!";
//   console.log(`${c} ${name}`);
// }

// first();

// console.log("this alone", this);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   // getThis: function () {
//   //   console.log(this);
//   //   return this.firstName;
//   // },
//   getFullName: function () {
//     return this.firstName + " " + this.lastName + " " + this.id;
//   },
// };

// // console.log("The first name is", person.getThis());

// console.log("this in object method", person.getFullName());

// console.log(this);

// function test() {
//   console.log("this in a function", this);
// }

// test();

// const show = () => this;

// console.log("arrow function this", show());

// const person = {
//   name: "Pedro",
//   surname: "Sanchez",
//   sayName: function () {
//     return this.name + " " + this.surname;
//   },
// };

// console.log(person.sayName());

// function show() {
//   console.log(this);
// }

// console.log(this);

// show();

// document.getElementById("testBtn").addEventListener("click", function () {
//   console.log("this in a event", this);
// });

// const person1 = {
//   name: "Pedro",
//   surname: "Sanchez",
//   sayName: function (youtube, work) {
//     return this.name + " " + this.surname + " " + youtube + " " + work;
//   },
// };

// const person2 = {
//   name: "Jimena",
//   surname: "Juarez",
// };

// const person3 = {
//   name: "Arshad",
//   surname: "Chowdhury",
//   youtube: "DCodeCoding",
// };

// console.log(person1.sayName.call(person2, "Code Club", "Software Developer"));

// const person1 = {
//   sayName: function (city, country) {
//     return this.name + " " + this.surname + ", " + city + ", " + country;
//   },
// };

// const person2 = {
//   name: "Arshad",
//   surname: "Chowdhury",
// };

// console.log(person1.sayName.apply(person2, ["Dhaka", "Bangladesh"]));

// const person1 = {
//   name: "Pedro",
//   surname: "Sanchez",
//   sayName: function () {
//     return this.name + " " + this.surname;
//   },
// };

// const person2 = {
//   name: "Jimena",
//   surname: "Juarez",
// };

// const person3 = {
//   name: "Arshad",
//   surname: "Shad",
//   testFuncforTest: function testFunc() {
//     console.log(this);
//     return this;
//   },
// };

// const sayPerson2Name = person1.sayName.bind(person3);

// console.log(sayPerson2Name());
// console.log(person1.sayName());

// const sayPerson2Name = person3.testFuncforTest.bind(person2);

// console.log(sayPerson2Name());

// function Car(make, model, year, price) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.price = price;
//   this.greet = function greetPerson() {
//     console.log(
//       `Hello there, ${this.make}, your model is ${this.model} and you're from ${this.year}`
//     );
//   };
// }

// const car1 = new Car("Eagle", "Talon TSi", 1993);

// const car2 = new Car("Toyota", "Toyota TSi", 2023, 40000);

// console.log(
//   `Your car is ${car2.make}, model is ${car2.model} and it was built in ${car2.year} the price is ${car2.price} dollars`
// );

// const carGreet = new Car("Toyota", "Toyota TSi", 2023, 40000);

// carGreet.greet();

// Expected output: "Eagle"

// class Person {
//   constructor(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
//   greetPerson() {
//     console.log(
//       `Hello there, ${this.name}, your age is ${this.age} and you're from ${this.address}`
//     );
//   }
// }

// const p = new Person("Caroline", 20, "Dhaka, Bangladesh");
// const p2 = new Person("Arshad", 25, "Dhaka, Bangladesh");
// p.greetPerson(); // Hello, my name is Caroline

// p2.greetPerson();

function Car() {}
const car1 = new Car();
const car2 = new Car();
const car3 = new Car();

console.log(car1.color); // undefined

Car.prototype.color = "Blue";
Car.prototype.brand = "Toyota";
console.log(car1.color);

car1.color = "black";
console.log(car1.color);

car2.color = "red";
car3.color = "white";

car1.brand = "Xiaomi";

console.log(Object.getPrototypeOf(car1).color);
console.log(Object.getPrototypeOf(car2).color);
console.log(car1.color);
console.log(car2.color);
console.log(car3.color);
console.log(car2.brand);
console.log(car3.brand);
console.log(car1.brand);

console.log(Object.getPrototypeOf(car1).color);
