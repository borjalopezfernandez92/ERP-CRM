/* Queremos crear un programa que trabaje con fracciones a/b. Para representar una fracción vamos a utilizar dos enteros: numerador y denominador.
Vamos a crear las siguientes funciones para trabajar con funciones: */

// leer_fracción: La tarea de esta función es leer por teclado el numerador y el denominador. Cuando leas una fracción debes simplificarla.
let numerador = 0;
let denominador = 0;

function leer_fraccion(){
    let numerador = parseInt(prompt("Introduce el numerador"));
    let denominador = parseInt(prompt("Introduce el denominador"));
    //let fraccion = 0;
    if (denominador % numerador == 0){
        numerador /= 2;
        denominador /= 2;
        // console.log(numerador);
        // console.log(denominador);
    }
    alert(numerador + "/" + denominador);
    return [numerador, denominador];
}

// escribir_fracción: Esta función escribe en pantalla la fracción. Si el dominador es 1, se muestra sólo el numerador.

function escribir_fraccion(){
    if (denominador == 1){
        alert(numerador);
    }else{
        alert(numerador + "/" + denominador);
    }
}

// calcular_mcd: Esta función recibe dos número y devuelve el máximo común divisor.

function calcular_mcd(){


}