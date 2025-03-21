class ToDoView{
    static message(message){
        console.log(message);
    }
    static show(todos){
        console.log("Todo List : ");
        todos.forEach(todo => {
            const {id, task, status} = todo;
            if(status){
                console.log(`${id}. [X] ${task}`);
            }else{
                console.log(`${id}. [ ] ${task}`);
            }
        });
    }
}

module.exports = ToDoView;