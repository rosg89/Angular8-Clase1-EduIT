"use strict";
exports.__esModule = true;
var Persona_1 = require("./Persona");
var miObjeto = new Persona_1.Persona('de assis', 22, 'alex', 2000);
miObjeto.camina();
console.log('Hola Mundo Edu IT');
alert('pasamos por aqui');
var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo);
var foo2 = 123;
if (true) {
    var foo2_1 = 456;
}
console.log(foo2);
var foo3 = 123456;
console.log(foo3);
var foo4 = { bar: 123 };
console.log(foo4);
foo4.bar = 999;
console.log(foo4);
var isDone = false;
console.log('isDone = ' + isDone);
var decimal = 6;
console.log('Decimal: ' + decimal);
var hex = 0xf00d;
console.log('Hex: ' + hex);
var binary = 10;
console.log('Binary: ' + binary);
var octal = 484;
console.log('Octal: ' + octal);
var color = "Blue";
console.log(color);
color = 'Red';
console.log(color);
console.log('Templates para concatenar strings');
var fullName = "Rocio Suarez";
var age = 21;
var sentence = "Hello , my name is " + fullName + ". I'll be " + (age + 1) + "  years old net month.";
console.log(sentence);
var sentence2 = "Hello , my name is " + fullName + ".I'll be " + (age + 1) + " years old net month";
console.log(sentence2);
