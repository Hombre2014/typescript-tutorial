"use strict";
// interface PostID = stringOrNumber; // It doesn't work
// Literal types
let myName; // This is a literal type "Jen", not a string!
// myName = 'John'; // It does not work
let userName; // Works with literal types
userName = 'Jen'; // Works
// userName = 'Rachel'; // Does not work
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
// logMsg(add('a', 3)); // It does not work
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// } // It works as well
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 3));
// Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default Parameters
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
const sumAllDefault = (a = 10, b, c = 2) => {
    return a + b + c;
};
// You have to specify undefined if the parameter has a default value and it is not the last one.
logMsg(sumAllDefault(undefined, 3));
// Rest Parameters
// The rest params should come at the end
const total = (a, ...nums) => {
    return a + nums.reduce((prev, current) => prev + current);
};
logMsg(total(1, 2, 3, 4));
// Never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infiniteLoop = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// Use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen');
};
