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
// andi.sebutkanNama();
// andi.sebutkanSubject();

/**
 *   OOP THEORY
 * 
 * Inhertiance and Encapsulation
 */

// Kalau ada nama variable yang depannya _ ex _name itu buat variable protected, soalnya di js kaga support access modifier

class Person {
    constructor(name,age){
        this._name = name;
        this._age = age;
    }
    get getName(){
        return this._name;
    }
    get getAge(){
        return this._age;
    }
    set setName(name){
        this._name = name;
    }
    set setAge(age){
        this._age = age;
    }
}

class Programmer extends Person {
    constructor(name, age, skills){
        super(name, age);
        this._skills = skills;
    }
    get getSkills(){
        return this._skills;
    }
    set setSkills(skills){
        this._skills = skills;
    }
}

class Mahasiswa extends Person {
    constructor(name, age,scores){
        super(name, age);
        this._scores = scores;
    }
    get getScores(){
        return this._scores;
    }
    set setScores(scores){
        this._scores = scores;
    }
}

let person = new Person("Andi", 20);
let programmer = new Programmer("Andi", 20, ["Javascript", "Python"]);
let student = new Mahasiswa("Andi", 20, [90, 80, 70]);
console.log(person);
console.log(programmer.getSkills);
console.log(student.getScores);

