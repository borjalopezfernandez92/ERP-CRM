
    //Me traigo mi db firestore
    import { getTasks, insertTask, deleteTask} from "./utils.js";
    //console.log(db);
    //Extraigo todos los documentos de tasks y creo tarjetas con ellos
    getTasks();


    //Obtenemos el form y capturamos el submit
    const form = document.getElementById("task-form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        const task = {
            title: form["task-title"].value,
            description: form["task-description"].value
        }

        insertTask(task);
    })


    const buttonsCardD = document.getElementsByName("delete");
    buttonsCardD.forEach(element => {
        element.addEventListener("click",  () => {
            var divDelete = element.parentNode.parentNode;
            document.body.removeChild(divDelete);
            //console.log("Estoy borrando la tarea: "+element.id);
            deleteTask(element.id);
        })
    });

 // Botón de editar task WIP
    const buttonsCardE = document.getElementsByName("edit");
    buttonsCardE.forEach(element => {
        element.addEventListener("click", () => {
            //var titleEditGet = element.parentNode.parentNode;
            //var descEditGet = element.parentNode.parentNode.description;
            //console.log("Title: " +element.id);
            //console.log("Description: " + descEditGet);


            //var titleEdit = prompt("Inserte un nuevo título para la tarea");
            //var descEdit = prompt("Inserte una nueva descripción para la tarea.");
            //titleEditGet = titleEdit;
            //descEditGet = descEdit;
            //alert("Editando el task con el ID: " + element.id)
        //
            alert("Botón de editar el task con el ID: \n" + element.id + "\nActualmente se encuentra WIP.");
        })
    });