const fs = require('fs');
class ToDo{
    constructor(id,task,status){
        this.id = id;
        this.task = task;
        this.status = status;
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
}

module.exports = ToDo;