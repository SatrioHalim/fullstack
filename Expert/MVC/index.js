// Process Argv : bisa mengambil input dari terminal
// Command : show, add, update, delete



const command = process.argv[2];
const params = process.argv.slice(3);
const ToDoController = require('./controller/ToDoController');

switch(command){
    case 'show':
        // console.log('Showing Users');
        ToDoController.show();
        break;
    case 'add':
        // console.log('Adding User');
        ToDoController.add(params);
        break;
    case 'update':
        // console.log('Updating User');
        ToDoController.update(params);
        break;
    case 'delete':
        // console.log('Deleting User');
        ToDoController.delete(params);
        break;
    default:
        // console.log('Unknown command ! please use add, show, update, or delete');
        ToDoController.message("Unknown command ! please use add, show, update, or delete");
        break;
}