let sumAll = (...args) => { // args is the name for the array
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
}

console.log(sumAll(4, 5, 8));
console.log(sumAll(4, 5));

// The rest parameters must be at the end

let showName = (firstName, ...lastNames) => {
    let fullName = "";
    for (let lastName of lastNames) {
        fullName += lastName + " ";
    }
    fullName += firstName;
    return fullName;
}

console.log(showName("Ly", "Đoàn", "Thị"));

let showName = (...lastNames, firstName) => {
    // error
}