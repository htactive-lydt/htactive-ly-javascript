// Getter, Setter

let person = {
    firstName: "Ly",
    lastName: "Đoàn",

    get fullName() {
        return `${this.lastName} ${this.firstName}`
    },

    set fullName(value) {
        [this.lastName, this.firstName] = value.split(" ")
    }
}

console.log(person.fullName)

person.fullName = "Ly cute";

console.log(person.firstName)
console.log(person.lastName)


function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // age is calculated from the current date and birthday
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        },
        writable: false // Read-only
    });
}

let ly = new User("Ly cute", new Date(1999, 11, 22));

console.log(`${ly.name} năm nay ${ly.age} tuổi`)

// ly.age = 80; // Error Cannot assign to read only property 'age'