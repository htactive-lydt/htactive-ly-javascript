data = JSON.parse(localStorage.getItem("items"));

let generateHtmlClassOption = ({ id, idClass }, control) => {
    let html = `<select name="" id="${control === 1 ? "class-"+ id : "classOption"}" class="form-control" ${control === 1 ? "disabled" : ""} style="background-color: #fff">`;
    data.classes.forEach(item => {
        html += `<option value="${item.id}" ${idClass === item.id ? "selected" : ""}>${item.name}</option>`
    });
    html += `</select>`;
    return html;
}

let generateHtmlTr = ({ id, name, birthday, address, idClass }) => {
    return `
    <tr>
        <td>${id}</td>
        <td><input type="text" id="name-${id}" name="title" style="border: none; background-color: #fff" disabled value="${name}"></td>
        <td><input type="date" id="birthday-${id}" name="content" style="border: none; background-color: #fff" disabled value="${birthday}"></td>
        <td><input type="text" id="address-${id}" name="content" style="border: none; background-color: #fff" disabled value="${address}"></td>
        <td>${generateHtmlClassOption({id, idClass}, 1)}</td>
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
    localStorage.setItem("items", JSON.stringify(data));
    document.getElementById("classOption").innerHTML = generateHtmlClassOption("", 0)
    let studentHtml = studentList.reduce((html, student) => html += generateHtmlTr(student), '');
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
        idClass: idClass,
    })
    clearAddHtml();
    loadStudent(data.students)
}