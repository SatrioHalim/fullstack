const { todo } = require('node:test');
const ToDo = require('../model/ToDo');
const ToDoView = require('../view/ToDoView');

class ToDoController {
    static show(){
        // console.log("Controller show");
        let todos = ToDo.show();
        ToDoView.show(todos);
    }
    static add(params){
        // console.log("Controller add");
        ToDo.add(params);
    }
    static update(params){
        // console.log("Controller update");
        ToDo.update(params);
    }
    static delete(params){
        // console.log("Controller delete");
        ToDo.delete(params);
    }
    static message(message){
        ToDoView.message(message);
    }
}

module.exports = ToDoController;