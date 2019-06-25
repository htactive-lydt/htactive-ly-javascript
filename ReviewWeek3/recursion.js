let sumTo = (n) => {
    return (n === 1) ? 1 : n + sumTo(n - 1);
}


console.log(`Sum from 1 to 4 is ${sumTo(4)}`);

let factorial = (n) => {
    return (n === 1) ? 1 : n * factorial(n - 1);
}

console.log(`3! = ${factorial(3)}`);

let fibonaci = (n) => {
    return (n <= 1) ? n : fibonaci(n - 1) + fibonaci(n - 2);
}

console.log(fibonaci(7));

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

let printList = (list) => {
    console.log(list.value);
    if (list.next) {
        printList(list.next)
    }
}
let printReverseList = (list) => {

    if (list.next) {
        printReverseList(list.next)
    }

    console.log(list.value);
}

printList(list);
console.log("Reverse list: ")
printReverseList(list)