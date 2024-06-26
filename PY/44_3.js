////////////////////// Ejercicio 1
// Crea un array de dos dimensiones (matriz) que contenga números y cadenas solicitados al usuario, muestra por pantalla los elementos cadena que se encuentren en posiciones fila par y columna impar

function matrices() {
    let defColumns = parseInt(prompt("Introduce el número de columnas de tu matriz: "));
    let defRows = parseInt(prompt("Introduzca el número de filas que desea para su matriz: "));

    let matrix = [];

    for (let i = 0; i < defRows; i++) {
        const row = [];
        for (let j = 0; j < defColumns; j++) {
            const userInput = prompt(`Introduce un número o palabra en la posición (${i + 1},${j + 1}): `);
            const element = parseInt(userInput);

            row.push(isNaN(element) ? userInput : element);
        }
        matrix.push(row);
    }
    printParImpar(matrix);
};


function printParImpar(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i % 2 === 0 && j % 2 === 1) {
                alert(matrix[i][j]);
                console.log(matrix);
            }
        }
    }
}


////////////////////// Ejercicio 2
//// Crea un array a partir de las siguientes instrucciones:
// El tamaño es solicitado al usuario
// Elemento1: 1
// Elemento2: 1
// ElementoN: ElementoN-1 + ElementoN-2

function matrices2(){
    let defRows = parseInt(prompt("Introduzca el número de filas que desea para su matriz: "));
    let a = 1;
    let b = 1;
    let c = 0;

    let matrix = [a, b,];

    for (let i = 2; i < defRows; i++) {
        let nextPos = (defRows.length[i]) + (defRows.length)
        matrix.push(nextPos);
    }
    console.log(matrix)
}