let numeroAleatorio = 0;


function generarNumeroAleatorio(){
    console.log('desde la funcion generar numeros aleatorios')
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(numeroAleatorio);
}

function compararNumeros(){
    //let numeroIngresado = parseInt(document.querySelector('#numeroIngresado').value);
    console.log('desde la funcion comparar numeros')
    //buscar el valor del imput
    console.log(numeroIngresado)
    console.log(numeroAleatorio)
    //if (numeroIngresado === numeroAleatorio){
    //    console.log("ADIVINASTE!")
    //}
    //else if(numeroIngresado > numeroAleatorio){
//
    //    console.log("El numero magico es menor al ingresado");
    //}else{
//
    //    console.log("El numero magico es mayor al ingresado");
    //}

}

function cartelito(){

    let numeroIngresado = parseInt(document.querySelector('#numeroIngresado').value);

    if(numeroIngresado === numeroAleatorio){

        window.alert("Adivinaste!")
    }
    else if(numeroIngresado > numeroAleatorio)
    {
        window.alert("El numero ingresado es mayor!")
    }
    else{
        window.alert("El numero ingresado es menor!")
    }


}