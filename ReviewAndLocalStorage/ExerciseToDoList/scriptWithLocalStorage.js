class ToDoClass {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('items')) || [];

        this.loadTasks(this.tasks);

        this.taskUndo = {};
        this.indexUndo;

        this.addEventListener();
    }


    addEventListener() {
        document.getElementById('addTask').addEventListener('keypress', event => {
            if (event.keyCode === 13) {
                this.addTask(event.target.value);
                event.target.value = "";
            }
        });
    }


    addTaskClick() {
        let task = document.getElementById("addTask").value;
        document.getElementById('addTask').value = "";
        this.addTask(task);
    }

    completeTodo(index) {
        var checkbox = event.target;
        if (checkbox.checked) {
            this.tasks[index].isComplete = true;

        } else {
            this.tasks[index].isComplete = false;
        }
        this.loadTasks(this.tasks);
    }

    deleteTodo(event, index) {

        if (confirm("Are you sure you want to delete this?")) {
            this.indexUndo = index;
            this.taskUndo = { task: this.tasks[index].task, isComplete: this.tasks[index].isComplete }
            this.tasks.splice(index, 1);
            this.loadTasks(this.tasks);
            let divUndo = document.getElementById("undo");
            console.log(this.generateUndo());
            divUndo.innerHTML = this.generateUndo();
            this.timer = setInterval(this.timedCount, 1000);
        }

    }

    generateUndo() {
        return `
        <p>Còn: <span id="second" value="">6</span>s</p>
        <button class="btn btn-primary" type="button" onclick="toDo.undo()">Undo</button>
        `;
    }

    undo() {
        this.tasks.splice(this.indexUndo, 0, this.taskUndo);
        this.loadTasks(this.tasks);
        document.getElementById("undo").innerHTML = "";
    }

    addTask(task) {
        this.tasks.push({ task: task, isComplete: false })
        this.loadTasks(this.tasks);
    }

    editTask(event, index) {
        let input = document.getElementById(index);
        input.disabled = false;
        event.target.className = "edit-icon fa fa-save";
        document.getElementById("save-" + index).setAttribute("onClick", 'toDo.saveEditTask(event, ' + index + ')');
        input.focus();
        var length = input.value.length;
        input.setSelectionRange(length, length);
    }

    saveEditTask(event, index) {
        let input = document.getElementById(index).value;
        this.tasks[index].task = input;
        this.loadTasks(this.tasks);
    }


    generateTaskHtml(task, index) {
        return `
            <li class="list-group-item checkbox">
            <div class="row">
                <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                <label><input id="toggleTaskStatus" type="checkbox" onchange="toDo.completeTodo(${index})" value="" class="" ${task.isComplete ? 'checked' : ''}></label>
                </div>
                <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${task.isComplete ? 'complete' : ''}">
                <input type="text" value = "${task.task}" style="border: none; background-color: #fff; width: 300px; height: 30px" disabled id = ${index}></input>
                
                </div>
                <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                <a class="" onClick="toDo.editTask(event, ${index})" id = "save-${index}"><i id="editTask" data-id="${index}" class="edit-icon fa fa-pencil-square-o"></i></a>
                <a class="" onClick="toDo.deleteTodo(event, ${index})" data-confirm="Are you sure to delete this item?"><i id="deleteTask" data-id="${index}" class="delete-icon glyphicon glyphicon-trash"></i></a>
                </div>
            </div>
            </li>
        `;
    }

    checkSelectAll() {
        let count = 0;
        this.tasks.forEach(item => {
            if (item.isComplete == true) {
                count++;
            }
        })
        if (count == this.tasks.length) {
            return 1;
        }
        return 0;
    }

    generateSelectAllHtml() {
        return `
        <li class="list-group-item checkbox">
            <div class="row">
                <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                    <label><input id="toggleTaskStatus" type="checkbox" onchange="toDo.selectAllTask()" value="" class="" ${this.checkSelectAll() == 1 ? 'checked' : ''}></label>
                </div>
                <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ">
                    <b>Select All</b>
                </div>
            </div>
        </li>
        `;
    }

    selectAllTask() {
        var checkbox = event.target;
        if (checkbox.checked) {
            this.tasks.forEach(item => {
                item.isComplete = true;
            })
        } else {
            this.tasks.forEach(item => {
                item.isComplete = false;
            })
        }
        this.loadTasks(this.tasks);
    }

    filterByStatus() {
        let resultFilter = [];
        let choosen = document.getElementById("filter").value;
        if (choosen == "1") {
            resultFilter = this.tasks.filter(item => item.isComplete == true);
        } else if (choosen == "0") {
            resultFilter = this.tasks.filter(item => item.isComplete == false);
        } else {
            resultFilter = this.tasks;
        }
        this.loadTasks(resultFilter);
    }

    countMarkDone() {
        let done = this.tasks.filter(item => item.isComplete == true).length;
        document.getElementById("textPercent").textContent = Math.round(done / this.tasks.length * 100) + "%";
        document.getElementById("percent").style.width = done / this.tasks.length * 100 + "%";
    }

    timedCount() {
        let c = document.getElementById("second");
        if (c != undefined && c != null) {
            let second = c.textContent;
            if (second == 0) {
                document.getElementById("undo").innerHTML = "";
                clearInterval(this.timer)
            } else {
                console.log(second);
                document.getElementById("second").textContent = second - 1;
            }
        }
    }

    loadTasks(tasksList) {
        localStorage.setItem('items', JSON.stringify(this.tasks));
        this.countMarkDone();
        let taskHtml = tasksList.reduce((html, task, index) => html += this.generateTaskHtml(task, index), '');
        if (tasksList != undefined && tasksList.length != 0) {
            taskHtml = this.generateSelectAllHtml() + taskHtml;
        }
        document.getElementById('taskList').innerHTML = taskHtml;
    }

}

let toDo;
window.addEventListener("load", () => {
    toDo = new ToDoClass();
});