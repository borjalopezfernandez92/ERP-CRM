
    // Import the functions you need from the SDKs you need
    
    // Eliminado
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
    import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc, updateDoc  } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js';

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAaDSeAWMlxcFbcdugdzWv6jx45sunM8IE",
        authDomain: "ejercicio-4941d.firebaseapp.com",
        projectId: "ejercicio-4941d",
        storageBucket: "ejercicio-4941d.appspot.com",
        messagingSenderId: "857527358176",
        appId: "1:857527358176:web:3986e2c0fe4cd645847685"
      };

    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
    export const querySnapshot = await getDocs(collection(db, "Desayunos"));



    function createCard(id, bFast) {
        //<div class="card text-white bg-info mb-6  offset-md-4" style="max-width: 20rem;">
        const principalDiv = document.createElement('div');
        principalDiv.setAttribute("class", "card bg-light mb-3");
        principalDiv.style = "max-width: 20rem;";
        principalDiv.setAttribute("name",id);
        //<div class="card-header">Formulario Tareas</div>
        const headerDiv = document.createElement('div');
        const contentDiv = document.createTextNode("Id: " + id);
        headerDiv.setAttribute("class", "card-header");
        
        principalDiv.appendChild(headerDiv);

        headerDiv.appendChild(contentDiv);
        principalDiv.appendChild(headerDiv);


        // <div class="card-body">
        const bodyDiv = document.createElement('div');
        const pTitle = document.createElement("p");
        const pTitleText = document.createTextNode("Nombre: " + bFast.nombre);
        const hr = document.createElement('hr');
        const pDesc = document.createElement("p");
        const pDescText = document.createTextNode("Descripción: " + bFast.descripcion);
        const bfPriceTitle = document.createTextNode("Precio: " + bFast.precio)


        pTitle.appendChild(pTitleText);
        bodyDiv.appendChild(pTitle);
        bodyDiv.appendChild(hr);
        pDesc.appendChild(pDescText);
        bodyDiv.appendChild(pDesc);
        bodyDiv.appendChild(bfPriceTitle);
        bodyDiv.appendChild(hr);
        
        
        var input = document.createElement("input");
        input.type = "button";
        input.value = "Borrar Desayuno";
        input.setAttribute("name", "delete");
        input.setAttribute("id",id);
        bodyDiv.appendChild(input);
    
        // editar tarea
        var inputEdit = document.createElement("input");
        inputEdit.type = "button";
        inputEdit.value = "Editar Desayuno";
        inputEdit.setAttribute("name", "edit");
        inputEdit.setAttribute("id", id);
        bodyDiv.appendChild(inputEdit);

        principalDiv.appendChild(bodyDiv);

        document.body.appendChild(principalDiv);
        const br = document.createElement("br");
        document.body.appendChild(br);        
    }

    export function getTasks() {
        querySnapshot.forEach((doc) => {
            createCard(doc.id, doc.data());
        });
    }
    function generateRandomIdTask(num) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < num; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
    export async function insertTask(bFast) {
        await setDoc(doc(db, "Desayunos", generateRandomIdTask(20)), bFast);
        alert("Insertado el desayuno: "+bFast.nombre);
        location.reload();
    }

    export async function deleteTask(id){
        await deleteDoc(doc(db, "Desayunos", id));   
        alert("Borrada la tarea: "+id);
    }

    // Function para update.

    export async function updateTask(id, taskDetails) {
        await updateDoc(doc(db, "Desayunos", id), taskDetails);
        alert("Desayuno actualizado: " + id);
        location.reload(); // Recargamos la página para reflejar los cambios.
    }
    