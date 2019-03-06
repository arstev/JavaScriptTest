// console.log(this === global)
// function func() {
//     console.log(this === global) 
// }
// func();

"use strict";

function Person(f,l) {
    this.f = f;
    console.log(this);
    this.l = l;
    console.log(this);
   
}

const person = new Person("Jane","Doe");
//console.log(global.f);
//console.log(person.f);
console.log(person);