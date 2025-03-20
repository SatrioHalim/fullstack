// Process Argv : bisa mengambil input dari terminal
// Command : show, add, update, delete



const command = process.argv[2];
const params = process.argv.slice(3);

switch(command){
    case 'add':
        console.log('Adding User');
        break;
    case 'show':
        console.log('Showing Users');
        break;
    case 'update':
        console.log('Updating User');
        break;
    case 'delete':
        console.log('Deleting User');
        break;
    default:
        console.log('Unknown command ! please use add, show, update, or delete');
        break;
}