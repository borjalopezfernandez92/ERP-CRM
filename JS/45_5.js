let containers = document.getElementsByClassName("cuadricula");
let storageDog = localStorage.getItem('dogName');
let breedArray = [];
let storageDogName;
let countStorage = 0;
let count = 0;


function get_dog() {
    if(count == 0){
        alert("probando if")
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(dog => dog.json())
        .then(
            json => {
            let imgUrl = json.message; // declaramos la imagen del perrete
            let imageElement = document.getElementById("img_dog"); // declaramos el enlace del <img> del HTML
            imageElement.src = imgUrl; // Colocamos la imagen del perrete en el <img> del HTML.

            // preparamos la separación de la URL para sacar la raza del enlace.
            let separacion = "/";
            let cadena_dividir = imgUrl.split(separacion);
            breedName = cadena_dividir[cadena_dividir.length-2]; // posición -2 porque es donde se encuentran las razas en la URL.
            console.log(breedName);
            console.log(typeof breedName);

            breedArray.push(breedName, imgUrl);
            localStorage.perroStorage = breedArray;
            //JSON.stringify(breedArray);
            //localStorage.setItem(breedArray);

            // Aumentamos la cuenta para que empiece desde 0
            countStorage++; // Cuenta para los 
            count++;
            return breedName;
        })
    }else if(countStorage > 20){ // si hay ya suficientes perretes para todas las casillas, se reinicia.

        alert("Has llenado tu espacio de perretes. ¡Enhorabuena!")
        localStorage.clear(); // limpiamos localStorage
        location.reload(); // Y recargamos página
        count = 0; // reiniciando la cuenta

    /*}else if(localStorage.getItem("perroStorage")!== null){ // si ya tenemos esta raza en la tabla, nos la saltamos
        alert("Esta raza ya se encuentra en la tabla, nos la saltamos.");
        get_dog();*/
    }else { // No tenemos esta raza en la tabla, así que la añadimos.
        alert("Probando else.")
        let move1 = localStorage.getItem("perroStorage");
        let container1 = document.getElementById("cuad");
        container1.src = move1;
        //container1.src = move1;
        get_dog();
        count++;
        }
    console.log(countStorage);
}


/* BACKUP

function get_dog() {
    if(count == 0){
        //alert("probando if")
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(dog => dog.json())
        .then(
            json => {
            let imgUrl = json.message;
            let imageElement = document.getElementById("img_dog");
            storageDog++;
            imageElement.src = imgUrl;
            localStorage.setItem('dogName'+storageDog, imgUrl)
            count++;
        })
    }else if(storageDog > 20){
        //alert("Probando else if")
        alert("Has llenado tu espacio de perretes. ¡Enhorabuena!")
        localStorage.clear();
        location.reload();
    }else {
        //alert("probando else");
        let move1 = localStorage.getItem('dogName'+storageDog);
        let container1 = document.getElementById("cuad"+storageDog);
        container1.src = move1;
        count = 0;
        console.log(count);
        get_dog();
        }
}
        */

/*

*/

// código corregido
 /*
function perro(){

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(dog => dog.json())
        .then( dog => {
            addDog(dog.message, 300, 300);
        });

}

function contarRazas(razas, raza){ // razas = array, raza = string con una raza.
    let filtrados = razas.filter((r) => {return r == raza});
    return filtrados.length;
}

function pintarRazas(raza){
    let div = document.getElementById('razas');
    let p = document.createElement("p");
    let textNode = document.createTextNode(raza + ": " + contarRazas(razas, raza));
    p.appendChild(textNode);
    if(div){
        div.appendChild(p);
    }else{
        div = document.createElement("div");
        div.id = "razas";
        div.appendChild(p);
        document.body.appendChild(div);
    }
}

// función que agrega imágenes con tamaño custom
function addDog(url, width, height){
    let img = document.createElement("img");
    img.src = url;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
    if(localStorage.razas){
        let razas = JSON.parse(localStorage.getItem("razas"));
        if(razas.length < 20){
            razas.push(url.split('/')[4]);
            pintarRazas(razas, razas[razas.length-1]);
            localStorage.razas = JSON.stringify(razas);
        }else{
            alert("Cuadricula llena.");
            localStorage.removeItem("razas");
        }

    }else{
        let r = [url.split('/')[4]];
        pintarRazas(r, url.split('/')[4]);
        localStorage.razas = JSON.stringify(r);
    }
}

// función que crea el botón
function addButton(textButton, textFunction) {
    let div = document.createElement("div");
    let button = document.createElement("buton");
    let textNodeButton = document.createTextNode(textButton);
    button.appendChild(textNodeButton);
    button.setAttribute("onclick", textFunction); // setAttribute porque "onclick" no es nativo de HTML.
    div.appendChild(button);
    document.body.appendChild(div);

}

addButton("Perro Aleatorio", "perro()")

*/