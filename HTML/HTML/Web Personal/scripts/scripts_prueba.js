let array = [1,2,3];

function insertar(a){
    array.push(["Hola"]);
    return a; // se devuelve porque se cambia el array.
}

function mostrar(a){
    alert(a);
}

let b = insertar(array);
mostrar(array);
mostrar(b);