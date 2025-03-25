const Playlist = require("../Model/Playlist");

class PlaylistController {
    static show(){
        // console.log("Show Controller");
        Playlist.show();
    }
    static add(params){
        // console.log("Add Controller");
        Playlist.add(params);
    }
    static remove(params){
        // console.log("Remove Controller");
        Playlist.remove(params);
    }
    static make(params){
        // console.log("Make Controller");
        Playlist.make(params);
    }
}
module.exports = PlaylistController;