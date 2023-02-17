
import { validateString,vAvg,checkAvg } from "./validate.js";
import { paintCard,addStudent, modalAlert} from "./paint.js";

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar')

/* 
Generar eventos
1. Colocando el método en el atributo onclick,
onmouseover, onmouseout de la etiqueta
2. Mediante propiedad
3. Mediante el addeven...
*/

btnAgregar.onclick = function (){
    
 //console.log('evento mediante propiedad');
 const name = document.getElementById('nombre').value;
 const lastname = document.getElementById('apellido').value;
 const avg = parseFloat(document.getElementById('promedio').value);
 const op = document.getElementById('opcion').value;

 //console.log(`${name} ${lastname} ${avg} ${op}`);

 if (validateString(name) && validateString(lastname) && op !=0) {
    if (!isNaN(avg) && vAvg(avg)) {
        addStudent(name,lastname, avg);
    }else{
        document.getElementById('promedio').value="";
        modalAlert("Promedio Inválido");
    }
 }else{
    modalAlert("Datos Inválidos, revisar los datos");

 }
}

btnMostrar.addEventListener("click", function(){
    paintCard('ESTUDIANTE');
});
