let dog1 = { name: "lulu", age: 1 };
let dog2 = { name: "lulu", age: 1 };

function hello(greeting1, greeting2) {
    console.log(`${greeting1}, ${greeting2} ${this.name}`);
}

// Call

hello.call(dog1, "Hello", "GoGo");

// Apply

hello.apply(dog1, ["Hello", "Good night"])

// Bind

let resultBind = hello.bind(dog2, "Hello", "ụt ịt")

resultBind();