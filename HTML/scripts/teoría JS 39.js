function primero(){
    let parrafos = document.getElementsByTagName('p');
    /*let pos = parseInt(prompt("Indica el párrafo que quieres ver (Entre 1 y 6)"));
    while(pos < 1 || pos > parrafos.length){
        alert("Posición no válida, inténtalo con (Entre 1 y 6)");
        pos = parseInt(prompt("Indica el párrafo que quieres ver (Entre 1 y 6)"));
    }*/
    let pos;
    do{
        pos = parseInt(prompt("Indica el párrafo que quieres ver (Entre 1 y 6)"));
        if(pos < 1 || pos > parrafos.length){
            alert("Posición no válida, inténtalo con (Entre 1 y 6)");
        }
    }while(pos < 1 || pos > parrafos.length);

    alert(parrafos[pos-1].innerText);
    
}

////////////////////////////////////////////////////


function ejecutar(){
    var e = prompt("Seleccione el elemento (1 a 4):"); 
    var eElegido = document.getElementById(e); 
    document.write("<h1>"+eElegido.innerHTML+"</h1>"); 
}



/////////////////////////////////////////////////

function pintar() {
    let color = prompt("Inserta un color para pintar el primer div");
    let div = document.getElementsByClassName("clase1")[0];
    div.style = "background-color: "+ color;
    let id = prompt("Inserta id para el primer div");
    div.id = id;
}


////////////////////////////////////////////////

const validar = ()=>{
    var user = document.getElementById("user").value;
    //document.write('<form><label for="usuario">User NUEVO</label><br><input type="text" name="usuario" id="user"><br><label for="cont">Pass</label><br><input type="password" name="cont" id=""><br><input type="button" value="Validar" onclick="validar()"></form>'+'Bienvenid@ '+ user);
    let texto='Bienvenid@ '+ user;//1
    let p =  document.createElement('p'); //Crear un nuevo nodo etiqueta del arbol (2)
    let textoParrafo = document.createTextNode(texto);//(3)
    p.appendChild(textoParrafo);//(4)
    document.body.appendChild(p);//5
}