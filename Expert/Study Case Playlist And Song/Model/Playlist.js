const fs = require('fs');
const {Pop, Rock} = require('./Song');
class Playlist {
    constructor(id,name,songs){
        this.id = id;
        this.name = name;
        this.songs = songs || [];
    }
    static getPlaylist(){
        let data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let playlists = data.map(playlist => {
            let {id,name,songs} = playlist;
            songs = songs.map(song => {
                const {id,name,duration,genre} = song;
                if(genre === 'Pop'){
                    return new Pop(id,name,duration);
                } else if(genre ===  'Rock'){
                    return new Rock(id,name,duration);
                }
            })
            return new Playlist(id,name,songs);
        })
        return playlists;
    }
    static show(){
        let data = this.getPlaylist();
        console.log(data);
    }
    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 3));
    }
    static add(params){
        let playlists = this.getPlaylist();
        const [name, genre, duration ,playlistName] = params;
        playlists.forEach(playlist => {
            if(playlist.name === playlistName){
                let id;
                if(playlist.songs.length === 0){
                    id = 1;
                } else {
                    id = playlist.songs[playlist.songs.length - 1].id + 1;
                }
                if(genre === 'Pop'){
                    playlist.songs.push(new Pop(id,name,+duration)); // +duration biar durationnya jadi number bukan string
                } else if(genre ===  'Rock'){
                    playlist.songs.push(new Rock(id,name,+duration));
                }
            }
        });
        this.save(playlists);
        console.log(`${name} has been added to ${playlistName}.`);
    }
    static remove(params){
        let playlists = this.getPlaylist();
        const [songName,playlistName] = params;
        playlists = playlists.map(playlist => {
            if(playlist.name === playlistName){
                playlist.songs = playlist.songs.filter(song => song.name !== songName); // ngebuat array baru yg song.name nya ga sama dengan songName                
                return playlist;
            } else {
                return playlist;
            }
        });
        this.save(playlists);
        console.log(`${songName} has been removed from ${playlistName}.`);
    }
    static make(params){
        let playlists = this.getPlaylist();
        let id = playlists[playlists.length-1].id + 1;
        let [name] = params;
        playlists.push(new Playlist(id,name));
        this.save(playlists);
        console.log(`Playlist ${name} has been created.`)
    }
}

module.exports = Playlist;