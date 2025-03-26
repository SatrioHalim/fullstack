class Song{
    constructor(id,name,duration){
        this.id = id;
        this.name = name;
        this.duration = duration;
    }
}
class Pop extends Song{
    constructor(id,name,duration){
        super(id,name,duration);
        this.genre = "Pop";
    }
}
class Rock extends Song{
    constructor(id,name,duration){
        super(id,name,duration);
        this.genre = "Rock";
    }
}
module.exports = {
    Pop, Rock
}