const Playlist = require("../Model/Playlist");

class PlaylistController {
    static show(){
        Playlist.show();
    }
    static add(params){
        Playlist.add(params);
    }
    static remove(params){
        Playlist.remove(params);
    }
    static make(params){
        Playlist.make(params);
    }
}
module.exports = PlaylistController;