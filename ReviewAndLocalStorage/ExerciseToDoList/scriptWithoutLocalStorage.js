class ToDoClass {
    constructor() {

        this.tasks = [
            { task: 'Go To Dentist', isComplete: false },
            { task: 'Do Gardening', isComplete: true },
            { task: 'Renew Library Account', isComplete: false },
        ];

        this.loadTasks();

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
        this.addTask(task);
    }

    completeTodo(index) {
        var checkbox = event.target;
        if (checkbox.checked) {
            this.tasks[index].isComplete = true;

        } else {
            this.tasks[index].isComplete = false;
        }
        this.loadTasks();
    }

    deleteTodo(event, index) {
        console.log(this.tasks);

        if (confirm("Are you sure you want to delete this?")) {
            this.tasks.splice(index, 1);
            this.loadTasks();
        }

    }

    addTask(task) {
        if (this.tasks.push({ task: task, isComplete: false })) {
            console.log("Thêm task thành công");
            this.loadTasks();
        }
    }


    generateTaskHtml(task, index) {
        return `
            <li class="list-group-item checkbox">
            <div class="row">
                <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                <label><input id="toggleTaskStatus" type="checkbox" onchange="toDo.completeTodo(${index})" value="" class="" ${task.isComplete ? 'checked' : ''}></label>
                </div>
                <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${task.isComplete ? 'complete' : ''}">
                ${task.task}
                </div>
                <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                <a class="" onClick="toDo.deleteTodo(event, ${index})" data-confirm="Are you sure to delete this item?"><i id="deleteTask" data-id="${index}" class="delete-icon glyphicon glyphicon-trash"></i></a>
                </div>
            </div>
            </li>
        `;
    }

    loadTasks() {
        let taskHtml = this.tasks.reduce((html, task, index) => html += this.generateTaskHtml(task, index), '');
        document.getElementById('taskList').innerHTML = taskHtml;
    }
}

let toDo;
window.addEventListener("load", () => {
    toDo = new ToDoClass();
});