let tasks = [];
let currentFilter = "all";
const savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
    tasks = JSON.parse(savedTasks);
}

// console.log("Saved tasks:", savedTasks);
// console.log("Tasks array:", tasks);

const form = document.querySelector(".todo-form");
const input = document.querySelector("#task-input");
const todoList = document.querySelector(".todo-list");
const errorMessage = document.querySelector("#error-message");
const filterButtons = document.querySelectorAll(".filters button");
const taskCount = document.querySelector("#task-count");
const clearCompletedButton = document.querySelector("#clear-completed");
// console.log(form);
// console.log(input);
// console.log(todoList);

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskText = input.value.trim();
    if (taskText === "") {
        errorMessage.textContent = "Please enter a task.";
        return;
    }

    errorMessage.textContent = "";

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    saveTasks();

    renderTasks();

    input.value = "";
    updateTaskCount();
});

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        currentFilter = button.dataset.filter;

        renderTasks();
    });
});

function updateTaskCount() {
    let remainingTasks = 0;

    tasks.forEach(function (task) {
        if (!task.completed) {
            remainingTasks++;
        }
    });

    const taskText = remainingTasks === 1 ? "task" : "tasks";

    taskCount.textContent = `${remainingTasks} ${taskText} remaining`;
}
clearCompletedButton.addEventListener("click", function () {
    tasks = tasks.filter(function (task) {
        return !task.completed;
    });

    saveTasks();
    renderTasks();
    updateTaskCount();
});

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    todoList.innerHTML = "";

    tasks.forEach(function (task) {
        if (
            currentFilter === "active" &&
            task.completed
        ) {
            return;
        }

        if (
            currentFilter === "completed" &&
            !task.completed
        ) {
            return;
        }

        const li = document.createElement("li");
        li.classList.add("todo-item");

        const todoContent = document.createElement("div");
        todoContent.classList.add("todo-content");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;

            saveTasks();
            renderTasks();
            updateTaskCount();
        });

        const span = document.createElement("span");
        span.textContent = task.text;

        if (task.completed) {
            span.classList.add("completed");
        }

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            tasks = tasks.filter(function (item) {
                return item.id !== task.id;
            });

            saveTasks();
            renderTasks();
            updateTaskCount();
        });

        todoContent.appendChild(checkbox);
        todoContent.appendChild(span);

        li.appendChild(todoContent);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    });
}

// console.log("Page loaded - rendering tasks");

renderTasks();
updateTaskCount();