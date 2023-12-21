// Index Signatures

// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

interface TransactionObj {
  readonly [index: string]: number; // Index Signatures it might be key as well as index
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]); // Error without index signature

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction]; // Error without index signature
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 30; // Error
console.log(todaysTransactions['Dave']); // Access a key that does not exist

///////////////////////////////////////////////////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: 'Dave',
  GPA: 4.0,
  classes: [100, 200],
};

// console.log(student.test); // Error if no index signature

for (const key in student) {
  // console.log(`${key}: ${student[key]}`); // with index signature
  console.log(`${key}: ${student[key as keyof Student]}`); // No problem even without index signature
}

Object.keys(student).map((key) => {
  console.log(`${key}: ${student[key as keyof typeof student]}`); // If we do not kow the type of the key
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, 'name');

///////////////////////////////////////////////////////////////////////////////

// interface Incomes {
//   [key: string]: number;
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
