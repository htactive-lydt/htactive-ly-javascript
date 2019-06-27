data = JSON.parse(localStorage.getItem("items"));

let generateHtmlClassOption = ({ id, idClass }, control) => {
    let html = `<select id="${control === 1 ? "class-"+ id : "classOption"}" class="form-control" ${control === 1 ? "disabled" : ""} style="background: #fff">`;
    data.classes.forEach(item => {
        html += `<option value="${item.id}" ${idClass === item.id ? "selected" : ""}>${item.name}</option>`
    });
    html += `</select>`;
    return html;
}

let generateHtmlTr = ({ id, name, birthday, address, idClass }, stt) => {
    return `
    <tr>
        <td>${stt}</td>
        <td><input type="text" id="name-${id}" class="input-edit" name="title" disabled value="${name}"></td>
        <td><input type="date" id="birthday-${id}" class="input-edit" name="content" disabled value="${birthday}"></td>
        <td><input type="text" id="address-${id}" class="input-edit" name="content" disabled value="${address}"></td>
        <td>${generateHtmlClassOption({id, idClass}, 1)}</td>
        <td class="text-center">
            <span hidden id="group-edit-${id}">
                <button type="button" class="mr-7 btn btn-success" onclick="saveEdit(${id})">
                    <i class="fa fa-floppy-o"></i>
                </button>
                <button type="button" class="mr-7 btn btn-default" onclick="cancelEdit()">
                    <i class="fa fa-ban"></i>
                </button>
            </span>
            <button type="button" class="mr-7 btn btn-warning" onclick="edit(${id})" id="edit-${id}">
                <i class="fa fa-pencil"></i>
            </button>
            <button type="button" class="mr-7 btn btn-danger" onclick="deleteStudent(${id})">
                <i class="fa fa-trash-o"></i>
            </button> &nbsp;
        </td>
    </tr>
    `
}

let loadStudent = (studentList) => {
    localStorage.setItem("items", JSON.stringify(data));
    document.getElementById("option").innerHTML = generateHtmlClassOption("", 0);
    var stt = 0;
    let studentHtml = studentList.reduce((html, student) => {
        stt++;
        return html += generateHtmlTr(student, stt)
    }, '');
    document.getElementById("studentList").innerHTML = studentHtml;
}

loadStudent(data.students);

let clearAddHtml = () => {
    document.getElementById("name").value = "";
    document.getElementById("birthday").value = "";
    document.getElementById("address").value = "";
}

let add = () => {
    document.getElementById("btnAdd").setAttribute("Hidden", true)
    document.getElementById("btnCancel").removeAttribute("Hidden");
    document.getElementById("form-add").removeAttribute("Hidden")
}

let cancel = () => {
    document.getElementById("btnCancel").setAttribute("Hidden", true)
    document.getElementById("btnAdd").removeAttribute("Hidden");
    document.getElementById("form-add").setAttribute("Hidden", true);
    clearAddHtml();
}

let saveAdd = () => {
    let name = document.getElementById("name").value;
    let birthday = document.getElementById("birthday").value;
    let address = document.getElementById("address").value;
    let idClass = document.getElementById("classOption").value;
    console.log("Ly" + idClass)
    let listId = data.students.map(item => item.id);
    data.students.push({
        id: Math.max(...listId) + 1,
        name: name,
        birthday: birthday,
        address: address,
        idClass: parseInt(idClass),
    })
    clearAddHtml();
    loadStudent(filterStudent());
}

let edit = (id) => {
    document.getElementById("group-edit-" + id).removeAttribute("Hidden");
    document.getElementById("edit-" + id).setAttribute("Hidden", true);
    let name = document.getElementById("name-" + id);
    name.disabled = false;
    name.style.border = "1px solid #ced4da";
    name.focus();
    var length = name.value.length;
    name.setSelectionRange(length, length);
    let birthday = document.getElementById("birthday-" + id);
    birthday.disabled = false;
    birthday.style.border = "1px solid #ced4da";
    let address = document.getElementById("address-" + id);
    address.disabled = false;
    address.style.border = "1px solid #ced4da";
    let idClass = document.getElementById("class-" + id);
    idClass.disabled = false;
}

let cancelEdit = () => {
    loadStudent(filterStudent());
}
let deleteStudent = (id) => {
    let index = data.students.findIndex(item => item.id === id);
    if (confirm("Are you sure you want to delete this task?")) {
        data.students.splice(index, 1);
        loadStudent(filterStudent());
    }
}
let saveEdit = (id) => {
    let name = document.getElementById("name-" + id).value;
    let birthday = document.getElementById("birthday-" + id).value;
    let address = document.getElementById("address-" + id).value;
    let idClass = document.getElementById("class-" + id).value;
    let index = data.students.findIndex(item => item.id === id);
    data.students[index].name = name;
    data.students[index].birthday = birthday;
    data.students[index].address = address;
    data.students[index].idClass = parseInt(idClass);
    loadStudent(filterStudent());
}

let filterStudent = () => {
    let studentName = document.getElementById("searchContent").value;
    let result = data.students.filter(item => item.name.search(studentName) != -1);
    return result;
}

let searchStudent = () => {
    loadStudent(filterStudent());
}

let reLoad = () => {
    document.getElementById("searchContent").value = "";
    loadStudent(data.students);
}