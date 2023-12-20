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
let bands: string[] = [];
bands.push('Van Halen');

// Tuple
let myTuple: [string, number, boolean] = ['value', 123, true];

let mixed = ['John', 1, false];

mixed = myTuple;
// myTuple = mixed; // error
// myTuple[3] = 42; // error

// Objects
let myObject: object;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};

const exampleObj = {
  prop1: 'Dave',
  prop2: true,
};
// exampleObj.prop2 = 42; // error

// Type Assertion
type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812'],
};

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II', 'IV'],
};

evh = jp;
// evh.years = 40; // error

// Optional Properties
type Guitarist2 = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
};

let evh2: Guitarist2 = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812'],
};

let jp2: Guitarist2 = {
  name: 'Jimmy',
  albums: ['I', 'II', 'IV'],
};

evh2 = jp2;

const greetGuitarist = (guitarist: Guitarist) => {
  return 'Hello, ' + guitarist.name + '!';
};

console.log(greetGuitarist(jp));

// Interfaces
interface Guitarist3 {
  name: string;
  active: boolean;
  albums: (string | number)[];
}

let evh3: Guitarist3 = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812'],
};

console.log(greetGuitarist(evh3));

// If name is optional
interface Guitarist4 {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

// name, must be optional also to use a method on it
const greetGuitarist4 = (guitarist: Guitarist4) => {
  return 'Hello, ' + guitarist.name?.toUpperCase() + '!';
};

// or
const greetGuitarist5 = (guitarist: Guitarist4) => {
  if (guitarist.name) {
    return 'Hello, ' + guitarist.name.toUpperCase() + '!';
  }
  return 'Hello!';
};

const rwb: Guitarist4 = {
  active: true,
  albums: [1984, 5150, 'OU812'],
};

console.log(greetGuitarist5(rwb));

// Enums

enum Grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grade.U); // 0

enum Grades {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grades.U); // 1
