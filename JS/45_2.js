/* Lo primero que haremos será crear un input de tipo texto y un botón para buscar. 
El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar.
Después crearemos una función que se ejecute cuando se pulse el botón buscar y
que contenga una petición a la API para obtener información de ese usuario y 
así mostrarla en nuestra página:

Lo que queremos que se imprima por consola será:

nombre
número de repositorios
avatar (imagen)
Si ya has obtenido toda la información, 
utiliza las herramientas del arbol DOM para que esta información aparezca en la 
pantalla.*/

function buscar_user() {
    let user = document.getElementById("id_buscar_input").value;
    console.log(user);
    event.preventDefault();
    fetch(`https://api.github.com/users/${user}`)
    .then(res=>res.json())
    .then(json=>console.log(json.avatar_url, json.name, json.public_repos));
}