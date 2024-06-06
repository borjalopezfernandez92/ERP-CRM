/* 1 Formulario de contacto - Local Storage
 A) Crear un formulario de contacto con los siguientes campos:
Nombre
Email
Mensaje
*/
// En HTML


// B) Guardar en Local Storage los datos de contacto enviados de cada usuario

function guardar_datos(){
    let nombre = document.getElementById('id_nombre_input').value;
    let email = document.getElementById('id_email_input').value;
    let mensaje = document.getElementById('id_mensaje_input').value;
    
    localStorage.nombre = nombre;
    localStorage.email = email;
    localStorage.mensaje = mensaje;

    mostrar_datos();

// C Mostrar los datos de los contactos guardados usando herramientas de DOM
}

function mostrar_datos(){
    //let n_nombre = localStorage.getItem('nombre');
    //let n_mail = localStorage.getItem('mail');
    //let n_mensaje = localStorage.getItem('mensaje');

    let texto_n = document.createTextNode(localStorage.getItem('nombre'));
    let texto_m = document.createTextNode(localStorage.getItem('email'));
    let texto_mm = document.createTextNode(localStorage.getItem('mensaje'));
    let br = document.createElement('br');

    document.body.appendChild(texto_n);
    document.body.appendChild(br);
    document.body.appendChild(texto_m);
    document.body.appendChild(br);
    document.body.appendChild(texto_mm);
    document.body.appendChild(br);
    event.preventDefault();

}

//console.log(localStorage.getItem('nombre'));
//console.log(localStorage.getItem('email'));
//console.log(localStorage.getItem('mensaje'));