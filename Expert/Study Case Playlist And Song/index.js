/**
 * 
 * Node Js : Module utama dan 3rd party module (npm) 
 * 
 */

const command = process.argv[2];
const params = process.argv.slice(3); // mengambil indeks ke 3 sampai terakhir
const PlaylistController = require("./Controller/PlaylistController");

switch (command.toLowerCase()) {
    case "add":
        // console.log("Command Add");
        PlaylistController.add(params);
        break;
    case "remove":
        // console.log("Command Remove");
        PlaylistController.remove(params);
        break;
    case "make":
        // console.log("Command Make");
        PlaylistController.make(params);
        break;
    case "show":
        // console.log("Command Show");
        PlaylistController.show();
        break;
    default:
        console.log("Unknown command: " + command + " , Please use valid command!");
        break;
}
