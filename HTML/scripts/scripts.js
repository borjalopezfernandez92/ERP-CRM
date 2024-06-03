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

