
//Me traigo mi db firestore
import { getTasks, insertTask, deleteTask, updateTask } from "./utils.js";
//console.log(db);
//Extraigo todos los documentos de tasks y creo tarjetas con ellos
getTasks();


//Obtenemos el form y capturamos el submit
const form = document.getElementById("task-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    const bFast = {
        nombre: form["bfast-name"].value,
        descripcion: form["bfast-description"].value,
        precio: form["bfast-price"].value
    }

    insertTask(bFast);
})


const buttonsCardD = document.getElementsByName("delete");
buttonsCardD.forEach(element => {
    element.addEventListener("click", () => {
        var divDelete = element.parentNode.parentNode;
        document.body.removeChild(divDelete);
        console.log("Estoy borrando el desayuno: "+element.id);
        deleteTask(element.id);
    })
});

// Botón de editar task WIP
const buttonsCardE = document.getElementsByName("edit");
buttonsCardE.forEach(element => {
    element.addEventListener("click", async () => {
        const newName = prompt("Inserte un nuevo nombre para el desayuno:");
        const newDescription = prompt("Inserte una nueva descripción para el desayuno:");
        const newPrice = prompt("Inserte un nuevo precio para el desayuno.")
        if (newName && newDescription && newPrice) {
            const bFastUpdate = {
                nombre: newName,
                descripcion: newDescription,
                precio: newPrice
            };
            await updateTask(element.id, bFastUpdate);
        }
    });
});
//alert("Botón de editar el task con el ID: \n" + element.id + "\nActualmente se encuentra WIP.");