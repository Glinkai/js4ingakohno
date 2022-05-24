// 1

//let student = {
// name: "Inga",
// surname: "Kohno",
//age: 29,
//courseOfStudy: 'Frontend development',
//levelEnglish: "Pre-Intermediate",
//};

//console.log(student);
//delete student.levelEnglish;
//console.log(student);

//2
//book = {
//numberOfPages: 545,
//cover: true,
//isTheAuthorAlive: false,
//isBestseller: true,
//booksEditions: 20000000,
//}
//for (let key in book) {
//if (typeof book[key] === "boolean") {
//console.log(key);
//};
//};

//3

//3.1

// let car = {
//     brand: 'Range Rover L460',
//     color: 'red',
//     numberOfDoors: 4,
//     horsePower: 530,
//     engineСapacity: 4.4,
//     transmissionType : 'automatic',
// }

// let anotherCar = {};


// for (let key in car) {
//     anotherCar[key] = car[key];

// };

//console.log(anotherCar);

//3.2

// let car = {
//     brand: 'Range Rover L460',
//     color: 'red',
//     numberOfDoors: 4,
//     horsePower: 530,
//     engineСapacity: 4.4,
//     transmissionType : 'automatic',
// }

//console.log(car);

// let anotherCar = {};

// Object.assign(anotherCar, car);

//console.log(anotherCar);

//4

//let animalObj = {
//name: "cat",
//legs: 4,
//color: "black"
//}

//function animal(obj) {
//return `This ${obj.color} ${obj.name} has ${obj.legs} legs`;
//};

//animal(animalObj);

//console.log(animal(animalObj));

//5 

//let train = {
// locomotiveLength: 25,
// totalCoachCars: 4,
//coachLength: 15,
//};

//function lengthTrain(obj) {
// let length = 0; {
//length = obj.locomotiveLength + obj.totalCoachCars * obj.coachLength;
//}
//return length;
//}

//let result = lengthTrain(train);
//console.log(result);



//6

//let student = {
// name: 'Inga',
//surname: 'Kohno',
// groupNumber: 1,
//showMessage() {
// console.log(`Это студент ${this.name} ${this.surname} из группы ${this.groupNumber}`);
//}
//}
//console.log(student.showMessage());

//7

function Animal(animal, legs, predator, name) {
    this.animal = animal;
    this.legs = legs;
    this.predator = predator;
    this.name = name;
}

let animalCat = new Animal("cat", 4, false, "Tima");

console.log(animalCat);