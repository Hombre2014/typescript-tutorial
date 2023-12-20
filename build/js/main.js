"use strict";
let stringArr = ['one', 'two', 'three'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Hello';
stringArr.push('World');
guitars[0] = 1984;
guitars.unshift('Jim');
// stringArr = guitars; // error
guitars = stringArr;
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['value', 123, true];
let mixed = ['John', 1, false];
mixed = myTuple;
// myTuple = mixed; // error
// myTuple[3] = 42; // error
// Objects
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812'],
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV'],
};
evh = jp;
let evh2 = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812'],
};
let jp2 = {
    name: 'Jimmy',
    albums: ['I', 'II', 'IV'],
};
evh2 = jp2;
const greetGuitarist = (guitarist) => {
    return 'Hello, ' + guitarist.name + '!';
};
console.log(greetGuitarist(jp));
let evh3 = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812'],
};
console.log(greetGuitarist(evh3));
// name, must be optional also to use a method on it
const greetGuitarist4 = (guitarist) => {
    var _a;
    return 'Hello, ' + ((_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()) + '!';
};
// or
const greetGuitarist5 = (guitarist) => {
    if (guitarist.name) {
        return 'Hello, ' + guitarist.name.toUpperCase() + '!';
    }
    return 'Hello!';
};
const rwb = {
    active: true,
    albums: [1984, 5150, 'OU812'],
};
console.log(greetGuitarist5(rwb));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); // 0
var Grades;
(function (Grades) {
    Grades[Grades["U"] = 1] = "U";
    Grades[Grades["D"] = 2] = "D";
    Grades[Grades["C"] = 3] = "C";
    Grades[Grades["B"] = 4] = "B";
    Grades[Grades["A"] = 5] = "A";
})(Grades || (Grades = {}));
console.log(Grades.U); // 1
