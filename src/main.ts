// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// interface PostID = stringOrNumber; // It doesn't work

// Literal types
let myName: 'Jen'; // This is a literal type "Jen", not a string!
// myName = 'John'; // It does not work

let userName: 'Jen' | 'Cory' | 'Blue'; // Works with literal types
userName = 'Jen'; // Works
// userName = 'Rachel'; // Does not work

// Functions

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg('Hello');
logMsg(add(2, 3));
// logMsg(add('a', 3)); // It does not work

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// } // It works as well

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 3));

// Optional Parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

// Default Parameters
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));

const sumAllDefault = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

// You have to specify undefined if the parameter has a default value and it is not the last one.
logMsg(sumAllDefault(undefined, 3));

// Rest Parameters
// The rest params should come at the end
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, current) => prev + current);
};

logMsg(total(1, 2, 3, 4));

// Never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infiniteLoop = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) {
      break;
    }
  }
};

// Custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false;
};

// Use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (isNumber(value)) return 'number';

  return createError('This should never happen');
};
