const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    //Mientras mayor es la cantidad, menor el interes para pagar
    if (cantidad < 5000) {
        total = cantidad *1.5;
    } else if(cantidad >= 5000 && cantidad <10000){
        total = cantidad *1.4;
    } else if(cantidad >= 10000 && cantidad <15000){
        total = cantidad *1.3;
    } else{
        total = cantidad *1.2;
    }

    //Plazo - Más plazo, mayor interés
    if (plazo === 3) {
        total *= 1.1;
    } else if(plazo === 6){
        total *= 1.2;
    } else if(plazo === 12){
        total *= 1.3;
    } else{
        total *= 1.4;
    }
    return total;
}

export default calcularTotalPagar;