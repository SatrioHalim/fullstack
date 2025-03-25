/**
 * 
 * Node Js : Module utama dan 3rd party module (npm) 
 * 
 */

const command = process.argv[2];
const params = process.argv.slice(3); // mengambil indeks ke 3 sampai terakhir
const PlaylistController = require("./Controller/PlaylistController");

switch (command.toLowerCase()) {
    // Nambahin lagu di suatu playlist
    case "add":
        PlaylistController.add(params);
        break;
    // Hapus lagu di suatu playlist
    case "remove":
        PlaylistController.remove(params);
        break;
    // Ngebuat playlist baru
    case "make":
        PlaylistController.make(params);
        break;
    // Nunjukkin playlist
    case "show":
        PlaylistController.show();
        break;
    // Error handling kalau commandnya salah
    default:
        console.log("Unknown command: " + command + " , Please use valid command!");
        break;
}
