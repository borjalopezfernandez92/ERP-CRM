console.log(document.title);


// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
let cambio_1 = document.getElementById("gen-1");
cambio_1.innerText = 'Generasión 1 Pokimon';

// Cambia el color de fondo de la primera generación de Pokimon.
let cambio_2 = document.querySelector('.infocard-list').style.backgroundColor = "lightblue";

// 3 Imprime por consola la URL de la página.
console.log(window.location.href);

// 4 Imprime por consola el dominio de la página.

console.log(document.location);

// 5 Imprime todos los nodos de imagen.

console.log(document.getElementsByClassName(".img-fixed"));