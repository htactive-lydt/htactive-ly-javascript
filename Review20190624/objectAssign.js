// 1 - copy the values from another object:

let obj1 = { name: "Ly" };

let obj2 = {
    age: 20,
    hobby: "eat chicken leg"
};

let result = Object.assign(obj1, obj2);

console.log(result);

console.log(obj1);

// 2 - Clone từ object khác:

let obj3 = {
    age: 25,
    clothes: "Jean"
}

let obj4 = Object.assign({}, obj3);

console.log(obj4);

// 3 - Dùng để merge duplicate properties trong object:

let obj5 = {
    name: "Ly",
    age: 25,
    married_status: "Single",
    motor: "exiter",
    house: "4 floor"
}

let obj6 = {
    name: "Ly xđ",
    age: "20"
}

let obj7 = Object.assign(obj5, obj6);

console.log(obj7);