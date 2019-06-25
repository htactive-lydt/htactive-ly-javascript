let student = {
    name: 'Ly',
    age: 20,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    husband: null
};

let json = JSON.stringify(student);

console.log(typeof json); // we've got a string!

console.log(json);

// ignored Function properties (methods); Symbolic properties; Properties that store undefined.
let user = {
    name: 'Lyly',
    sayHi() { // ignored
        console.log("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};

console.log(JSON.stringify(user)); // {"name": "Lyly"}

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(JSON.stringify(meetup, ['title', 'participants', 'place']));

console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number'], 2));

// JSON.parse convert JSON back into an object

let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log(numbers[1]);