/**
 * 
 * Class cookie : Parent class
 * Chocolate, strawberry, Blueberry : child class
 * Oven : factory class
 * 
 */

class Cookie{
    constructor(name,type,price){
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

class Chocolate extends Cookie{
    constructor(name,price, isSweet){
        super(name,"Chocolate",price);
        this.isSweet = isSweet || false; // yg kiri || kalau paremeternya ada isinya tapi kalau gaada nilainya false
    }
}
class Strawberry extends Cookie{
    constructor(name,price, isSweet){
        super(name,"Strawberry",price);
        this.isSweet = isSweet || false;
    }
}
class Blueberry extends Cookie{
    constructor(name,price, isSweet){
        super(name,"Blueberry",price);
        this.isSweet = isSweet || false;
    }
}

class Oven{
    constructor(container){
        this.container = container || [];
    }
    bake(cookie){
        this.container.push(cookie);
    }
    delivery(cookie_name){
        this.container = this.container.filter((cookie) => cookie.name !== cookie_name);
    }
}

let oven = new Oven();
oven.bake(new Chocolate("Choco Oreo", 10000));
oven.bake(new Strawberry("Strawberry Oreo", 12000));
oven.bake(new Blueberry("Blueberry Oreo", 15000));
oven.delivery("Choco Oreo");
console.log(oven.container);