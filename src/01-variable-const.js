//variables que se puede cambiar
let firstname = 'Carlos';
//Cambiar variable
firstname = 'Charlie';


//Constante fijas q no se puede renombrar como let
const lastname = 'Bravo';

const condicion = true;
if (condicion){
    firstname = 'Abraham'; // se puede declarar nuevamente con let ya q es indiferente y solo dentro del if
    console.log(firstname);
} 

//Log para la consola del navegador
console.log("Hello world!!! " + firstname +' '+lastname);

//template string
console.log(`Hello world!!! ${firstname} ${lastname}`);  // ` con alt 96 o alt }
