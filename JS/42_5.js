// 1 - Cuando se pinche sobre el primer enlace, se oculte su sección relacionada

function ocultar_1() {
    let p1_original = document.getElementById("contenidos_1").innerHTML;
    let a1_original = document.getElementById("enlace_1").innerText;

    document.getElementById("enlace_1").innerHTML = "Mostrar contenidos.";// 4 Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista:propiedad innerHTML)

    document.getElementById("contenidos_1").hidden =!document.getElementById("contenidos_1").hidden;

    // 2 Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
    if (!document.getElementById("contenidos_1").hidden) {
        document.getElementById("contenidos_1").innerHTML = p1_original;
        document.getElementById("enlace_1").innerHTML = "Ocultar contenidos";
    }
}

// 3 Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace

function ocultar_2() {
    let p1_original = document.getElementById("contenidos_2").innerHTML;
    
    document.getElementById("enlace_2").innerHTML = "Mostrar contenidos.";
    document.getElementById("contenidos_2").hidden =!document.getElementById("contenidos_2").hidden;
    // 2 Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
    if (!document.getElementById("contenidos_2").hidden) {
        document.getElementById("contenidos_2").innerHTML = p1_original;
        document.getElementById("enlace_2").innerHTML = "Ocultar contenidos";
    
    }
}
function ocultar_3() {
    let p1_original = document.getElementById("contenidos_3").innerHTML;

    document.getElementById("enlace_3").innerHTML = "Mostrar contenidos.";
    document.getElementById("contenidos_3").hidden =!document.getElementById("contenidos_3").hidden;
    // 2 Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
    if (!document.getElementById("contenidos_3").hidden) {
        document.getElementById("contenidos_3").innerHTML = p1_original;
        document.getElementById("enlace_3").innerHTML = "Ocultar contenidos";

    }
}


