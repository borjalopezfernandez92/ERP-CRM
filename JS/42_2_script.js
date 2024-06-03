/*
1.- Crear variable tipo let de nombre variableSinValor declarada sin valor

2.- Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos

3.- Crear variable tipo const de nombre PI declarada con valor 3.14

4.- Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
*/

// 1
let variableSinValor;
console.log("Ejercicio 1: " + variableSinValor);

// 2
let booleano1 = true;
let booleano2 = false;

console.log("Ejercicio 2: " + booleano1 + booleano2);

// 3
const PI = 3.14;

console.log("Ejercicio 3: " + PI);

// 4
const TAU = (PI*2);
console.log("Ejercicio 4: " + TAU);

/*
 5.- Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2

 6.- Crear variable booleanoNot cuyo valor sea la compracación booleana no booleano1

 7.- Crear variable booleanoMix0 cuyo valor sea la compración booleana (booleano1 or booleano2) 
 and (booleano1 or (not booleano1 and not booleano2)
*/

// 5

let booleanoAnd = booleano1 && booleano2;

console.log("Ejercicio 5: " + booleanoAnd);

// 6

let booleanoNot = booleano1 != booleano2;

console.log("Ejercicio 6: " + booleanoNot);

// 7

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || !( booleano1 &! booleano2));
console.log("Ejercicio 7" + booleanoMix0);
/*
 8.- Crear variable incrementarDesp con valor 2 y asigna su valor con postincremento a resultadoDesp

 9.- Crear variable incrementarAntes con valor 2 y asigna su valor con preincremento a resultadoAntes
*/

// 8
let incrementarDesp = 2;
let resultadoDEsp = incrementarDesp++;

console.log("Ejercicio 8: " + resultadoDEsp);


// 9
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

console.log("Ejercicio 9: " + resultadoAntes);


/*
 10.- Crear variable contarHasta10_2 con valor 0 e incrementar su valor con un bucle for hasta que se verifique que contarHasta10_2 === 10

 11.- Crear las variables postI y postJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar 
 al valor de postI el valor de postJ++

 12.- Crear la variable sumaPares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) si la iteración es par se deberá sumar 
 a sumaPares el número de la iteración actual (i)
*/

// 10
let contarHasta10_2 = 0;

for (let i = 0; i < 10; i++) {
    contarHasta10_2++;
}
console.log("Ejercicio 10: " + contarHasta10_2);

// 11
let postI = 0;
let postJ = 0;
let resultadoIJ = 0;
for (let i = 0; i < 11; i++) {
    resultadoIJ = postI + postJ++;
}
console.log("Ejercicio 11: " + resultadoIJ);


// 12
let sumaPares = 0;
let resSumaPares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        resSumaPares = sumaPares + (i);
    }
}
console.log("Ejercicio 12: " + resSumaPares);


/*
 13.- Crear variable tipo let de nombre variableValorNumerico declarada con un valor numérico cualquiera

 14.- Crear variable tipo const de nombre MiNombre declarada con valor tu nombre

 15.- Crear variable tipo const de nombre MiNumeroFav declarada con valor numérico
*/

// 13
let variableValorNumerico = 5;
console.log("Ejercicio 13: " + variableValorNumerico);


// 14
const MiNombre = "Borja";
console.log("Ejercicio 14: " + MiNombre);

// 15
const MiNumeroFav = 11;
console.log("Ejercicio 15: " + MiNumeroFav);


/*
 16.- Crear variable booleanoOr cuyo calor sea la comparación booleana booleano1 or booleano2

 17.- Crear variable booleanoMix1 cuyo valor sea la comparación booleana (booleano1 and (TAU/2 sea igual a PI)) or (variableValorNumerico mayor o igual que MiNumeroFav)

 18.- Crear variable seisNoEsNueve cuyo valor sea la comparación booleana 6 no es estrictamente igual que 9

 19.- Crear variable booleanoMix2 cuyo valor sea la comparación booleana variableValorNumerico positivo (0 no incluido) o menor que -(MiNumeroFav * TAU)
*/

// 16
let booleanoOr = booleano1 || booleano2;
console.log("Ejercicio 16: " + booleanoOr);

// 17
let booleanoMix1 = (booleano1 && (TAU/2 == PI) || (variableValorNumerico >= MinumeroFav))
console.log("Ejercicio 17: " + booleanoMix1);

// 18
let seisNoEsNueve = 6 != 9;
console.log("Ejercicio 18: " + seisNoEsNueve);

// 19 
let booleanoMix2 = variableValorNumerico < -(MiNumeroFav*TAU);
console.log("Ejercicio 19: " + booleanoMix2);

/*
20.- Crear variable valorSuma cuyo valor sea la suma de MiNumeroFav y variableValorNumerico

 21.- Crear variable valorResta cuyo valor sea la resta de MiNumeroFav y variableValorNumerico

 22.- Crear variable valorMultiplicación cuyo valor sea la multiplicación de MiNumeroFav por variableValorNumerico

 23.- Crear variable valorDivisión cuyo valor sea la división de MiNumeroFav entre 3
*/

// 20
let valorSuma = MiNumeroFav + variableValorNumerico;
console.log("Ejercicio 20: " + valorSuma);

//21
let valorResta = MiNumeroFav - variableValorNumerico;
console.log("Ejercicio 21: " + valorResta);

//22
let valorMultiplicación = MiNumeroFav * variableValorNumerico;
console.log("Ejercicio 22: " + valorMultiplicación);

//23
let valorDivision = MiNumeroFav / 3;
console.log("Ejercicio 23: " + valorDivision);

/*
 24.- Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle while hasta que se verifique que contarHasta10 === 10

 25.- Crear las variables preI y preJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de preI el valor de ++preJ

 26.- Crear la variable sumaImpares con valor 0 a continuación crea un bucle que itere 10 veces (i < 10) si la iteración es impar se deberá sumar a sumaImpares el número de la iteración actual (i)
 */

 // 24
 let contarHasta10 = 0;
 while (contarHasta10 < 10) {
    contarHasta10++;
 }
 console.log("Ejercicio 24: " + contarHasta10);

 // 25
 let preI = 0;
 let preJ = 0;
 let resultadoPreIJ = 0;

for (let i = 0; i < 11; i++) {
    resultadoPreIJ = preI + ++preJ;   
}

console.log("Ejercicio 25: " + resultadoPreIJ);

// 26
let sumaImpares = 0;
let resSumaImPares = 0;

for (let i = 0; i < 10; i++) {
    if (i % 2 == 1) {
        resSumaImPares = sumaPares + (i);
    }
}

console.log("Ejercicio 26: " + resSumaImPares);
