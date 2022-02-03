import {Persona} from './Persona';

var miObjeto = new Persona('de assis', 22, 'alex', 2000 );
miObjeto.camina();








console.log('Hola Mundo Edu IT');

alert('pasamos por aqui');

var foo = 123;

if(true) {
    var foo = 456;
}

console.log(foo);

let foo2 = 123;
if (true) {
    let foo2 = 456;
}

console.log(foo2);

const foo3 = 123456;

console.log(foo3);

const foo4 = {bar : 123};

console.log(foo4);

foo4.bar = 999;

console.log(foo4);

let isDone: boolean = false;

console.log('isDone = ' + isDone);

let decimal : number = 6;
console.log('Decimal: ' + decimal);

let hex : number = 0xf00d;
console.log('Hex: ' + hex);

let binary : number = 0b1010;
console.log('Binary: ' + binary);

let octal: number = 0o744;
console.log('Octal: ' + octal);

let color: string = "Blue";
console.log(color);

color = 'Red';
console.log(color);


console.log('Templates para concatenar strings');
let fullName: string =`Rocio Suarez` ;
let age: number = 21 ;

let sentence: string = `Hello , my name is ${ fullName }. I'll be ${ age + 1 }  years old net month.` ;

console.log(sentence);


let sentence2: string = "Hello , my name is " + fullName  +  ".I'll be " +( age + 1 ) +  " years old net month";

console.log(sentence2);













