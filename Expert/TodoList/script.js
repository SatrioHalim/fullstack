let tasks = [
    {
        id:1,
        name: "Belajar DOM",
        status:true
    },
    {
        id:2,
        name: "Kerjakan latihan",
        status:false
    },
    {
        id:3,
        name: "Explore JS DOM",
        status:true
    }
]

let btn_todo = document.getElementById("btn_click");

// console.log(btn_todo)


function btn_click(){
    let inputTask = document.getElementById("taskForm").value;
    if(inputTask === ""){
        alert("Please fill the task form!");
    } else {

        let id = tasks[tasks.length - 1].id + 1;
        let tempObj = {
            id: id,
            name: inputTask,
            status: false
        }
        tasks.push(tempObj);
        getTasks();
        alert("Task Successfully Added !");
        document.getElementById("taskForm").value = "";
    }
    
}
btn_todo.addEventListener("click",btn_click);
// console.log(tasks);

function getTasks(){
    let tbody = document.getElementById("tBody");
    tbody.innerHTML = "";
    tasks.forEach(task => {
        tbody.innerHTML += `<tr>
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td>${task.status}</td>
        </tr>`
    })
}
getTasks();
