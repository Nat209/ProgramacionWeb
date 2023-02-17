'use strict';

const parrafo2 = document.getElementById("parrafo2");

const mySubtitle = document.createElement("h2");
//Asignar contenido
mySubtitle.textContent = "Esto es un subtitulo creado desde JS";
//Agregar atributos al elemento

mySubtitle.id="sub1";
mySubtitle.classNames="subtitulo";
mySubtitle.style ="color:violet; font-weight:bold";
mySubtitle.setAttribute("name","sub1");

//Insertar en el DOM
//document.body.appendChild(mySubtitle);

parrafo2.appendChild(mySubtitle);

const parrafo3 = document.createElement("p");
//parrafo3.textContent = "<h3>Dub3</h3>";
parrafo3.innerHTML ="<h3><i>Sub3</i></h3>";

parrafo2.appendChild(parrafo3);
