'use strict';
let boton = document.getElementById('enviar');
const formulario = document.getElementById('form');
let myH1 = document.getElementsByTagName('h1');
console.log(myH1);

/*boton.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(formulario[0].value);
    console.log(formulario[1].value);
    console.log(formulario[2].value);
    console.log(formulario[3].value);
    console.log(formulario[4].value);

});*/

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
});















// Variables o contenedores

/*var numero= 13;//global
let numero2=25;// Local
const iva = 19.1;
const IVA =34;
if (true) {

    let numero2= 50;
    console.log(numero2);
    
}

console.log(numero2);*/
