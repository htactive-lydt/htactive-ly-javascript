let delay = (ms) => {
    return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

delay(3000).then(() => console.log('runs after 3 seconds'));

let pow = (a, b) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                return rejects(new Error("Argument must be number"));
            }
            return resolve(a ** b)
        }, 1000)
    })
}

pow(4, 3)
    .then(res => console.log(`The result: ${res}`))
    .catch(err => console.log(`Have: ${err}`))
    .finally(console.log("Promise ready"))

const fetch = require("node-fetch");
fetch("http://facebook.com")
    .then(res => res.text())
    .then(res => console.log(res))

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait till the promise resolves (*)

    console.log(result); // "done!"
}

f()