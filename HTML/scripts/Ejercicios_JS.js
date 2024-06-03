///////////////////////////////////////////////////////////////////////////////////////////// 38_2 ///////////////////////////////////////////////////

///////////////////////////////////////////////////Ejercicio 1

//solicita al usuario 3 nº enteros e indica cual es el menor.
function numero_peque() {
    let n1 = prompt("Inserte el primer número.");
    let n2 = prompt("Inserte el segundo número.");
    let n3 = prompt("Inserte el tercer número.");
// Convierte los inputs a interger

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3); 

// iniciar smallest
let smallest = n1;

// comprobar si n2 es más pequeño que el más pequeño actual
if (n2 < smallest) {
    smallest = n2;
}


// comprobar si n3 es más pequeño que el más pequeño actual
if (n3 < smallest) {
    smallest = n3;
}

// muestra el más pequeño

alert("El número más pequeño es: "+ smallest);

}

///////////////////////////////////////////////////Ejercicio 2

//Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.
function letras_en_frase() {
    let frase = prompt("Inserte una frase.");
    let letra = prompt("Inserte una letra.");
    let coincidencia = 0;

// iniciar contador
let coincidencias = frase.match(new RegExp(letra, 'g')) || [];


let conteo = coincidencias.length;


alert("El número de veces que aparece " + letra + " es: " + conteo);

}


///////////////////////////////////////////////////Ejercicio 3

//Suma o resta (según elija el usuario) dos números reales
function suma_resta() {
    let n1 = prompt("Introduce un número.");
    let n2 = prompt("Introduce otro número.");
    let op = prompt("¿Quieres sumar o restar? Escribe 'sumar' para sumar y 'restar' para restar.");

    // Convertir a Integer cada variable
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    // Operar
    if (op === "sumar") {
        let resultado = n1 + n2;
        alert("El resultado de la suma es: " + resultado)
    }
    else if (op === "restar") {
        let resultado = n1 - n2 ;
        alert("El resultado de la resta es: " + resultado)
    }
    else { // En caso de operación no reconocida
        alert("Operación no reconocida. Por favor, introduce 'sumar' o 'restar'.");
    }
}

///////////////////////////////////////////////////Ejercicio 4

//Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)


function user_pass() { // Función de expresión
    const user = "usuario1";
    const pass = "password1";

    for (let i = 0; i < 3; i++){
        let usertry = prompt("Introduce el usuario");
        if (usertry == user) {
            alert("Usuario correcto.");
            let passtry = prompt("Ahora, introduce la contraseña");
            if (passtry == pass) {
                alert ("Contraseña correcta, enhorabuena.");
            }
            else {
                alert ("Contraseña errónea, pruebe de nuevo.");
            }
        }
        else {
            alert ("Usuario erróneo, pruebe de nuevo.");
        }
}}


///////////////////////////////////////////////////Ejercicio 5

// Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, 
// indícale que se ha equivocado de letra.

function letra_magica() {
    let letrauser = prompt("Escoge una letra entre: 'a', 'b' o 'c'.")

    if (letrauser == "a") {
        alert ("7");
    }
    else if (letrauser == "b") {
        alert ("9");
    }
    else if (letrauser == "c") {
        alert ("101");
    }
    else {
        alert ("Letra errónea, por favor inserte 'a', 'b' o 'c'.")
    }
}


///////////////////////////////////////////////////Ejercicio 6

// Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja

function siete_palabras() {
    let lista = ["Andalucía", "Madrid", "Cantabria", "Galicia", "Extremadura", "Castilla y León", "Asturias"];
    let n, i, k, aux;
    n = lista.length;
    console.log(lista); //mostramos por consola la lista desordenada.
    // usamos el algoritmo de la burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////// 39_1 ///////////////////////////////////////////////////

//// Ejercicio 2
/// Apartado A 
// Una función que devuelva el número de cifras de un entero solicitado al usuario

function numero_cifras() {

    let n = parseInt(prompt("Inserta un número entero"))

    // Variable para iniciar la cuenta de digitos.
    let count = 0;

    // Comprueba si el número es igual o mayor que 1, si es así, incrementa la cuenta.
    if (n >= 1) ++count;
  
    // Repite los pasos mientras el número dividido entre 10 es mayor o igual que 1.
    while (n / 10 >= 1) {
      // Divide un número entre 10 para quitarle 1 digito.
      n /= 10;
      // Incrementa la cuenta para llevar la cuenta de los digitos quitados.
      ++count;
    }
  
    // Devuelve la cuenta final de los dígitos.
    alert (count);
}

/// Apartado B 
// Una función que muestre al usuario una secuencia de * (se debe construir la cadena de uno en uno), la cantidad de * será solicitada al usuario

function cuenta_asteriscos () {
    let str = "*";
    let times = parseInt(prompt("Inserta la cantidad de * que desees como número entero."))
    let result = "";
    for (let i = 0; i < times; i++) {
       result += str;
    }
    alert(result);
}

/// Apartado C 
// Una función que permita mostrar la secuencia (se debe construir la cadena de uno en uno):  *+_*+_*+_*+_

function cadena () {
    let cuenta = 0;

    for (cuenta = 0; cuenta < 14 ; cuenta++) {
        switch (cuenta) {
            case 0:
                console.log("");
                break;
            case 1:
                console.log("*");
                break;
            case 2:
                console.log("*+");
                break;
            case 3:
                console.log("*+_");
                break;
            case 4:
                console.log("*+_*");
                break;
            case 5:
                console.log("*+_*+");
                break;
            case 6:
                console.log("*+_*+_");
                break;
            case 7:
                console.log("*+_*+_*");
                break;
            case 8:
                console.log("*+_*+_*+");
                break;
            case 9:
                console.log("*+_*+_*+_");
                break;
            case 10:
                console.log("*+_*+_*+_*");
                break;
            case 11:
                console.log("*+_*+_*+_*+");
                break;
            case 12:
                console.log("*+_*+_*+_*+_");
                break;
            case 13:
                alert("*+_*+_*+_*+_");
        }
    }
}


/// Apartado D
// Una función que permita mostrar un triángulo como el siguiente:
// *
// **
// ***
// ****
// *****

function triangulo_asteriscos () {

    var spaces = " ";
    for (i = 1; i <= 5; i++) {
        if (i % 2 == 1) spaces = spaces.substring(0, spaces.length - 1);
        const strs = []
    for (j = 0; j < i; j++) {
        strs.push('*')
    }
  console.log(spaces + strs.join(''))
}
}

/// Apartado E
// Una función que devuelva la diferencia en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes)


function diferencia_dias() {
    
}