'use strict';

fetch('https://jsonplaceholder.typicode.com/todos')
.then((response) = response.json())
.then((json)=>{
     for(let obj of json){
        console.log(obj);
     }
})
.catch((error)=>console.error(error))
.finally(console.info("A finalizado la petición"));
/*Permite consumir una api fetch
Promesas: tiene que responder a lo que se locita, pueden quedar sucess, error, pending

Js solo trabaja en un hilo poe eso se vuelve asincrono al hacer peticiones:
fetch js 
 ✔ Axios libreria
❎ Promesa (.then)
x Request Url 

una funcion se vuelve asincrona y esperas (async await)
*/
