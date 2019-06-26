// const fs = require('fs');
// const config = fs.readFileSync('ExerciseStudentManagement/data.json');
// let data = JSON.parse(config);
// console.log(data.students)

import { userData } from './data.js'
let data = JSON.parse(userData);
console.log(data)

let generateHtmlTr = (student) => {
    return `
    <tr>
        <td>1</td>
        <td><input type="text" name="title" class="border-none" readonly="" value="${student.name}"></td>
        <td><input type="text" name="content" class="border-none" readonly="" value="${student.birthday}"></td>
        <td><input type="text" name="content" class="border-none" readonly="" value="${student.birthday}"></td>
        <td class="text-center">
            <button type="button" class="btn btn-warning mr-10">
                <i class="fa fa-pencil"></i>
            </button>
            <button type="button" class="btn btn-danger">
                <i class="fa fa-trash-o"></i>
            </button> &nbsp;
        </td>
    </tr>
    `
}

let loadStudent = (studentList) => {
    let studentHtml = studentList.reduce((html, student) => html += generateHtmlTr(student), '');
    document.getElementById("studentList").innerHTML = taskHtml;
}

loadStudent(data.students)

let add = () => {
    document.getElementById("btnAdd").setAttribute("Hidden", true)
    document.getElementById("btnCancel").removeAttribute("Hidden");
    document.getElementById("form-add").removeAttribute("Hidden")
}

let cancel = () => {
    document.getElementById("btnCancel").setAttribute("Hidden", true)
    document.getElementById("btnAdd").removeAttribute("Hidden");
    document.getElementById("form-add").setAttribute("Hidden", true)
}