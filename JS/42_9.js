// Escribe una función que calcule la cantidad de segundos en un tiempo dado en horas, minutos y segundos.


function calcu_segundos(){
    const hora = 3600 ;
    const minuto = 60 ;
    const segundo = 1 ;
    let tiempo_h = parseInt(prompt("Introduce el número de horas."));
    let tiempo_m = parseInt(prompt("Introduce el número de minutos."));
    let tiempo_s = parseInt(prompt("Introduce el número de segundos."));

    let resultado = (tiempo_h * hora) + (tiempo_m * minuto) + (tiempo_s * segundo);
    alert("Los datos introducidos suman: "+ resultado + " segundos.")
}

// La cantidad de horas, minutos y segundos de un tiempo dado en segundos.

function calcu_segundos_inv(){
    const hora = 3600 ;
    const minuto = 60 ;
    let tiempo = parseInt(prompt("Introduce el número de segundos."));
    let cont_h = 0;
    let cont_m = 0;
    let cont_s = 0;
    
    for (let i = 0; i < tiempo; i++) {
        if (tiempo >= hora){
            cont_h++;
            tiempo -= 3600;
        }else if ( tiempo >= minuto){
            cont_m++;
            tiempo -= 60;
        }else{
            cont_s++;
            tiempo -= 1;
        }
    }
    alert("Los datos introducidos suman:\n"+ cont_h + " horas.\n" + cont_m + " Minutos \n" + "y " + cont_s + " segundos.");
}

/* Una vez hecho, crea un menú donde se pueda elegir la opción de convertir a segundos, convertir a horas,minutos y segundos 
o salir del programa. */

function menu_calcu_segundos(){
    // let op_segToTiempo = "segundos";
    // let op_tiempoToSeg = "hora";
    // let op_salir = "";

    let opcion= prompt("Si quieres convertir una hora a segundos teclea 'segundos'. \n Si quieres convertir segundos a una hora teclea 'hora'. \n Si deseas salir, teclea cualquier otra cosa.")
    if (opcion == "segundos"){
        calcu_segundos();
    } else if (opcion == "horas"){
        calcu_segundos_inv();
    } else {
        alert("Taluego.");
    }
}