data = JSON.parse(localStorage.getItem("items"));

let generateHtmlTeacherOption = ({ id, idTeacher }, control) => {
    let html = `<select id="${control === 1 ? "teacher-"+ id : "teacherOption"}" class="form-control" ${control === 1 ? "disabled" : ""} style="background: #fff">`;
    data.teachers.forEach(item => {
        html += `<option value="${item.id}" ${idTeacher === item.id ? "selected" : ""}>${item.name}</option>`
    });
    html += `</select>`;
    return html;
}

let generateHtmlTr = ({ id, name, idTeacher }, stt) => {
    return `
    <tr>
        <td>${stt}</td>
        <td><input type="text" id="name-${id}" class="input-edit" name="title" disabled value="${name}"></td>
        <td>${generateHtmlTeacherOption({id, idTeacher}, 1)}</td>
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
            <button type="button" class="mr-7 btn btn-danger" onclick="deleteTeacher(${id})">
                <i class="fa fa-trash-o"></i>
            </button> &nbsp;
        </td>
    </tr>
    `
}

let loadTeacher = (teacherList) => {
    localStorage.setItem("items", JSON.stringify(data));
    document.getElementById("option").innerHTML = generateHtmlTeacherOption("", 0);
    var stt = 0;
    let teacherHtml = teacherList.reduce((html, teacher) => {
        stt++;
        return html += generateHtmlTr(teacher, stt)
    }, '');
    document.getElementById("studentList").innerHTML = teacherHtml;
}

loadTeacher(data.classes);

let clearAddHtml = () => {
    document.getElementById("name").value = "";
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
    let idTeacher = document.getElementById("teacherOption").value;
    let listId = data.classes.map(item => item.id);
    data.classes.push({
        id: Math.max(...listId) + 1,
        name: name,
        idTeacher: parseInt(idTeacher),
    })
    clearAddHtml();
    loadTeacher(data.classes);
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
    let idTeacher = document.getElementById("teacher-" + id);
    idTeacher.disabled = false;
}

let cancelEdit = () => {
    loadTeacher(data.classes);
}
let deleteTeacher = (id) => {
    let index = data.classes.findIndex(item => item.id === id);
    if (confirm("Are you sure you want to delete this task?")) {
        let existClass = data.students.some(item => item.idClass === id);
        if (existClass) {
            alert("Can't delete this class");
        } else {
            data.classes.splice(index, 1);
        }
        loadTeacher(data.classes);
    }
}
let saveEdit = (id) => {
    let name = document.getElementById("name-" + id).value;
    let idTeacher = document.getElementById("teacher-" + id).value;
    let index = data.classes.findIndex(item => item.id === id);
    data.classes[index].name = name;
    data.classes[index].idTeacher = parseInt(idTeacher);
    loadTeacher(data.classes);
}

let filterStudent = () => {
    let className = document.getElementById("searchContent").value;
    let result = data.classes.filter(item => item.name.search(className) != -1);
    return result;
}

let searchStudent = () => {
    loadTeacher(filterStudent());
}

let reLoad = () => {
    document.getElementById("searchContent").value = "";
    loadTeacher(data.classes);
}