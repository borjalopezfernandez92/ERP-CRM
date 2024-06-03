/////////////// Ejercicio1 ///////////////
//// 1 
// Pedir a un usuario su edad e indicarle si es mayor de edad o no. (2 puntos)

function mayor_edad() {
    let edad = parseInt(prompt("Introduce tu edad en formato numérico."));

    if (edad < 0) {
        alert("Por favor, introduce una edad correcta. (1+)");
    }else if(edad < 18) {
        alert("Aún no eres mayor de edad.");
    }else{
        alert("Eres mayor de edad.");
    }
}

//// 2 
// Pedir a un usuario su nombre completo e indicar si la cantidad de letras 'a' que tiene en su nombre es par o impar. (4 puntos)

function cantidad_a (){
    let nombre = prompt("Introduzca su nombre.").toLowerCase();
    let letra = "a";
    let cuenta = [];

    for (let i = 0; i < nombre.length; i++) {
            if (nombre[i] == letra) {
                cuenta[letra] = (cuenta[letra] || 0) + 1;
            }
        }
        if (cuenta[letra] % 2 == 0){
            alert("La cantida de letras 'a' que hay en tu nombre (" + cuenta[letra] + ") es par.");
        }else{
            alert("La cantida de letras 'a' que hay en tu nombre (" + cuenta[letra] + ") es impar.");
        }
    }

//// 3 
/// En HTML crea un formulario para cada ejercicio (1 y 2) y usando 
/// herramientas de DOM recoge los datos para los dos ejercicios anteriores. (4 puntos)

// 3.1
function mayor_edad_3() {
    let edad = document.getElementById("id_edad_input").value;
    
    if (edad < 0) {
        alert("Por favor, introduce una edad correcta. (1+)");
    }else if(edad < 18) {
        alert("Aún no eres mayor de edad.");
    }else{
        alert("Eres mayor de edad.");
    }
}

// 3.2
function cantidad_a_3() {
    let nombre = document.getElementById("id_nombre_input").value.toLowerCase();
    let letra = "a";
    let cuenta = [];
    
    for (let i = 0; i < nombre.length; i++) {
            if (nombre[i] == letra) {
                cuenta[letra] = (cuenta[letra] || 0) + 1;
            }
        }
        if (cuenta[letra] % 2 == 0){
            alert("La cantida de letras 'a' que hay en tu nombre (" + cuenta[letra] + ") es par.");
        }else{
            alert("La cantida de letras 'a' que hay en tu nombre (" + cuenta[letra] + ") es impar.");
        }
}
