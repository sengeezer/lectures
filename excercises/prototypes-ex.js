/**
 * Created by falbertin on 7/14/14.
 */

// Was geben die console.log aus und warum?

function Person() {
    this.adr = new Adr();
}
function Adr(){
    this.street = '<unkown>'
}

Person.prototype.adresse = new Adr();

var p1 = new Person();
var p2 = new Person();
console.log(1, p1.adresse.street, p2.adresse.street);

p2.adresse.street = 'Bahnhofstrasse';
console.log(2, p1.adresse.street, p2.adresse.street);

p2.adr.street = 'Oberseestrasse';
console.log(3, p1.adr.street, p2.adr.street);