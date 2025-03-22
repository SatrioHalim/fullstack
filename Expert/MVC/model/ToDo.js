const fs = require('fs');
class ToDo{
    constructor(id,task,status){
        this.id = id;
        this.task = task;
        this.status = status || false;
    }
    static getTodos(){
        let data = fs.readFileSync('./data1.json', 'utf-8');
        let parsedData = JSON.parse(data);
        let todos = parsedData.map(el => {
            const {id,task,status} = el;
            return new ToDo (id,task,status);
        });
        return todos;
    }
    static show(){
        let todos = this.getTodos();
        return todos;
    }
    static add(todo){
        let todos = this.getTodos();
        let id = todos[todos.length - 1].id + 1;
        let task = todo[0];
        let temp = new ToDo(id,task);
        todos.push(temp);
        // console.log(todos);
        this.save(todos);
    }
    static delete(todo){
        // console.log(todo);
        let todos = this.getTodos();
        let id = Number(todo[0]);
        let temp = todos.filter(todo=> todo.id !== id);
        // console.log(temp);
        this.save(temp);
    }

    static save(data){
        fs.writeFileSync('./data1.json', JSON.stringify(data, null, 3), 'utf-8');
    }
    static update(data){
        let todos = this.getTodos();
        let id = Number(data[0]);
        let task = data[1];
        let temp = todos.map(todo => {
            if(todo.id === id){
                todo.task = task;
            }
            return todo;
        });
        // console.log(temp);
         this.save(temp);
    }
}

module.exports = ToDo;