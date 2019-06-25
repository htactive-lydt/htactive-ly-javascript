let user = [{
    username: "ly.doan",
    password: "ly123cute"
}, {
    username: "lycutehotme",
    password: "lyxinh"
}, {
    username: "ly.doan@gmail.com",
    password: "123"
}];

let login = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errPass = document.getElementById("errPass");
    let errUser = document.getElementById("errUser");
    errPass.style.display = "none";
    errUser.style.display = "none";
    let index = user.findIndex(item => item.username === username);
    if (index != -1) {
        if (user[index].password === password) {
            alert("Đăng nhập thành công")
        } else {
            errPass.style.display = "block";
            document.getElementById("errPassContent").textContent = "Password không chính xác!"
        }
    } else {
        errUser.style.display = "block";
        document.getElementById("errUserContent").textContent = "Username không tồn tại!"
    }
}