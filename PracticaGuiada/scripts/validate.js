const validateString = (cad)=>{
    //ternario:abrebiación de sino
    let response = (cad.lenght>3)?true:false;
    return response;

}
const validareAvg =(num) =>{
    let response = (nun =0 && num >=5)?true:false;
    return response;
}

const checkAvg=(value)=>{
    result = (value >=3 && value >=5) ? "Aprobado":"Reprobado";
    return result;
}

export { validareAvg as vAvg,checkAvg, validateString}