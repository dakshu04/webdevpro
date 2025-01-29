document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input")
    const addTaskButton = document.getElementById("add-task-btn")
    const todoList = document.getElementById("todo-list")

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []

    tasks.forEach((tasks) => renderTask(tasks))

    addTaskButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim()
        if(taskText === "") return
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        }
        tasks.push(newTask)
        saveTasks();
        renderTask(newTask)
        todoInput.value = "" //clear input
        console.log(tasks);
    })

    function renderTask(task) {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        if(task.completed) li.classList.add("completed")
        li.innerHTML = `<span>${task.text}</span>
        <button>delete</button>`
        li.addEventListener('click', (e) => {
            if(e.target.tagName === "BUTTON") {
                console.log('delete button is clicked!');
            }
            task.completed = !task.completed
            li.classList.toggle('completed') //completed tag in css is used
            saveTasks()
        })

        li.querySelector("button").addEventListener('click',(e) => {
            e.stopPropagation()//prevent the event from bubbling up to parent elements
            tasks = tasks.filter(t => t.id !== task.id)
            li.remove();
            saveTasks();
        })

        todoList.append(li);
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})