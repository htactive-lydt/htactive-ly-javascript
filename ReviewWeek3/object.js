let user = {
    name: "Ly",
    age: 20
}

console.log(Object.keys(user)); // [ 'name', 'age' ]
console.log(Object.values(user)); // [ 'Ly', 20 ]
console.log(Object.entries(user)); // [ [ 'name', 'Ly' ], [ 'age', 20 ] ]

for (let value of Object.values(user)) {
    console.log(value);
}

// Object.fromEntries

// let prices = Object.fromEntries([
//     ["banana", 1],
//     ["apple", 5],
//     ["chilli", 2]
// ])

// console.log(prices);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

sumSalaries = (salaries) => {
    let sum = 0;
    if (Object.entries(salaries).length === 0 && salaries.constructor === Object) {
        sum = 0;
    } else {
        for (let value of Object.values(salaries)) {
            sum += value;
        }
    }
    return sum;
}

console.log((sumSalaries(salaries)));