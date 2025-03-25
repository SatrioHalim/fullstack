/**
 * 
 * Node Js : Module utama dan 3rd party module (npm) 
 * 
 */

const command = process.argv[2];
const params = process.argv.slice(3); // mengambil indeks ke 3 sampai terakhir

let cmd = command.toLowerCase();

switch (cmd) {
    case "add":
        console.log("Command Add");
        break;
    case "remove":
        console.log("Command Remove");
        break;
    case "make":
        console.log("Command Make");
        break;
    default:
        console.log("Unknown command: " + cmd + " , Please use valid command!");
        break;
}
