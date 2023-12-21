"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]); // Error without index signature
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]; // Error without index signature
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 30; // Error
console.log(todaysTransactions['Dave']); // Access a key that does not exist
const student = {
    name: 'Dave',
    GPA: 4.0,
    classes: [100, 200],
};
// console.log(student.test); // Error if no index signature
for (const key in student) {
    // console.log(`${key}: ${student[key]}`); // with index signature
    console.log(`${key}: ${student[key]}`); // No problem even without index signature
}
Object.keys(student).map((key) => {
    console.log(`${key}: ${student[key]}`); // If we do not kow the type of the key
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
