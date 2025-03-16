class Student{
    constructor(name, subjects, score){
        this.name = name;
        this.subjects = subjects;
        this.score = score;
    }

    sebutkanNama(){
        console.log(this.name);
    }
    sebutkanSubject(){
        console.log(this.subjects);
    }
}

let andi = new Student("Andi", ["Math", "Physics", "Chemistry"], [90, 80, 70]);
andi.sebutkanNama();
andi.sebutkanSubject();