const validation =(userData)=>{
    const errors = {};
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)){
        errors.email = 'el email no es valido mastercard'
    }
    if(!userData.email){
        errors.email= 'debe ingresar un email bobi';
    }
    if(userData.email.length > 35){
        errors.email= 'es re largo esto mono, bajalo'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password ='debe tener al menos un numero';
    }
    if(userData.password.length < 6 || userData.password.length > 15){
        errors.password='la contra debe tener al menos 6 caracteres y como maximo 10'
    }
    return errors;
}

export default validation