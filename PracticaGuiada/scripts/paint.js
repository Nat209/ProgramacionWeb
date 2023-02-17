
import { checkAvg } from "./validate.js";
const cardE = document.getElementById("cardsEstudiantes");

const students = [];

const paintCard=(typ)=>{
console.log(typ);
 typ =typ.toUpperCase();
 const fragment = document.createDocumentFragment();
 const templateStudent = document.getElementById('templateEstudiante').content;

 if (typ === "ESTUDIANTE") {
    for (let i of students) {
        const cloneTemp= templateStudent.cloneNode(true);
        cloneTemp.querySelector('.title-card').innerHTML= "Datos del <i>Estudiante</i>";
        cloneTemp.querySelector('.data-card').innerHTML=  ` Nombre ; ${i.nom.toUpperCase()}
        Apellidos: ${i.ape.toUpperCase()}`;
        cloneTemp.querySelector('.text-promedio').innerHTML = ` Promedio es: ${i.avg}`;
        cloneTemp.querySelector('.text-aprobado').innerHTML = ` ${checkAvg(i.avg)}`;
        fragment.appendChild(cloneTemp);
    }
 }else{

 }

 cardE.appendChild(fragment);
};

const addStudent =(name,lastname,avg)=>{
    //Objeto literal de Js 
    let student = {
        nom: name, 
        ape: lastname,
        avg: avg
    }
     .push(student);
    alert('Se agrego estudiante');
}
const modalAlert = (cad)=>{
    const alert = document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src='./img/delete_delete_exit_1577.png';
    img.className="close";
    texto.setAttribute("class","textAlert")
    alert.setAttribute("id","alert"); 
    alert.setAttribute("class","alert");
    texto.innerHTML=`<strong> ${cad}</strong>`;
    alert.appendChild(img);
    alert.appendChild(texto);
    document.body.appendChild(alert);
    img.onclick = function(){
        document.getElementById("alert").remove();
    }

}


export {paintCard, addStudent , modalAlert}