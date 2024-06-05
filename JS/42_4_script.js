/* 1 - Por un lado habrás de crear una variable cargador donde habrá de guardar unos 7 "pium!"
2 - El otro elemento será nuestra chauchat, que "hace cosas", y será donde pondremos el cargador para que haga cosas.

chauchat(cargador)

Cuando ejecutemos dicho código, veremos impresos todos los "pium!" del cargador, uno tras otro.

En el caso de 3 "pium!" en el cargador, veremos en la consola:

pium!
pium!
pium!

3 - Al tener el cargador abierto, era posible que se bloquease si algo entraba, como una "ramita".

Digamos que existe un 80% de probabilidad de que se quede "pillada":

Si se queda pillada, no habrá tiros y sólo mostrará un mensaje: "Illo, me he quedao pillá!"
En este enlace sabrás cómo generar números aleatorios: Math.random()

4 - Para evitar que se caliente y se bloquee, cada 3 disparos se imprimirá un espacio:
*/


const cargador = "pium!"; // constante con los disparos.

function prob_pillada(n){ // función que calcula la probabilidad de que se quede pillada.
    return Math.random() < n;
}

function chauchat(){
    let balas = parseInt(prompt("Introduce el número de balas del chauchat")); // Número de disparos que queremos realizar
    let cont_disparos = 0; // Contador de disparos para el apartado 4 del ejercicio.
    for (let i = 0; i < balas; i++) {
        if (prob_pillada(0.8)){  // apartado 3 del ejercicio.
            console.log("Illo, me he quedao pillá!");
        }else if(cont_disparos == 3){
            alert(" "); // espacio imprimido cada 3 disparos (apartado 4 del ejercicio.)
            cont_disparos = 0; // reinicio del contador de disparos tras haberse disparado 3 e imprimir el espacio.
        }else{
            alert(cargador);
            cont_disparos++; // suma 1 al contador de disparos para el apartado 4 del ejercicio.
            //alert("cont +1:" + cont_disparos);
        }
    }
}
