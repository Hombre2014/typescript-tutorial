"use strict";
// convert to more or less specific types
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful, because TS sees no problem, but a string is returned!
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string; // Not possible
10; // Possible
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img'); // Does not work in TSX in React
img.src;
myImg.src;
