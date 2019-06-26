// const fs = require('fs');

// const config = require('./test.json');
// let a = config;
// console.log(a)

// const fs = require('fs');
// const config = fs.readFileSync('ExerciseStudentManagement/test.json');
// let student = JSON.parse(config);
// student.students.push({ name: "Ly", birthday: "22/11/1999", idClass: 1 })
// let data = JSON.stringify(student);
// fs.writeFileSync('ExerciseStudentManagement/test.json', data);
const fetch = require("node-fetch");

fetch("ExerciseStudentManagement/test.json")
    .then(response => response.json())
    .then(json => console.log(json));