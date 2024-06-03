/*<h4>Formulario para el ejercicio 1</h4>
    <form>
        <label for="edad">Edad</label>
        <br>
        <input type="text" name="edad">
        <br>
        <br>
        <input type="button" value="¿Mayor de edad?" onclick="mayorEdad()">
        <br>
        <br>
    </form>
*/
function ponerTitulo(){
    //<h4>Formulario para el ejercicio 1</h4>
    let h4 = document.createElement('h4');
    let texto = document.createTextNode('Formulario para el ejercicio 1');
    h4.appendChild(texto);
    document.body.appendChild(h4);
}

function crearForm(){
    let form = document.createElement('form');
    document.body.appendChild(form);
    return form;
}

function ponerLabel(form){
    //<label for="edad">Edad</label>
    let label = document.createElement('label');
    //label.for = "edad";
    let texto = document.createTextNode('Edad');
    label.appendChild(texto);
    form.appendChild(label);
}
function ponerInput(form){
    //<label for="edad">Edad</label>
    let input = document.createElement('input');
    input.type = "text";
    form.appendChild(input);
}
function ponerBoton(form){
    //<label for="edad">Edad</label>
    let input = document.createElement('input');
    input.type = "button";
    input.value="¿Mayor de edad?"; 
    form.appendChild(input);
}
ponerTitulo();
let formFuera = crearForm();
ponerLabel(formFuera);
ponerInput(formFuera);
ponerBoton(formFuera);
