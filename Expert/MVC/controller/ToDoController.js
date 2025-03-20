const { todo } = require('node:test');
const ToDo = require('../model/ToDo');
const ToDoView = require('../view/ToDoView');

class ToDoController {
    static show(){
        console.log("Controller show");
        let todos = ToDo.show();
        ToDoView.show(todos);
    }
    static add(params){
        console.log("Controller add");
    }
    static update(params){
        console.log("Controller update");
    }
    static delete(params){
        console.log("Controller delete");
    }
    static message(message){
        ToDoView.message(message);
    }
}

module.exports = ToDoController;