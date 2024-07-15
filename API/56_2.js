//Mostrar datos de empleados en tabla
fetch('http://127.0.0.1:5000/all')
.then(response => response.json())
.then(data => {
    const container = document.getElementById('employee-container');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['ID', 'Nombre', 'Apellidos', 'Trabaja Desde'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    Object.values(data).forEach(employee => {
        const row = document.createElement('tr');
        ['id', 'nombre', 'apellidos', 'trabaja_desde'].forEach(key => {
            const td = document.createElement('td');
            td.textContent = employee[key];
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    container.innerHTML = ''; // Limpia el contenido existente
    container.appendChild(table);

});


// Buscar empleado por ID
function getEmployeeById() {
    document.getElementById('employeeForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const employeeId = document.getElementById('employeeId').value;
        const employeeIdInt = parseInt(employeeId, 10);
        const url = `http://127.0.0.1:5000/all/${employeeIdInt}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if ('message' in data) {
                    document.getElementById('result').innerHTML = `<p>${data.message}</p>`;
                } else {
                    document.getElementById('result').innerHTML = JSON.stringify(data);
                }
            })
    })
};


// Insertar nuevo empleado
const empleado_insert = () => {
    fetch('http://127.0.0.1:5000/all/insert', {
        method: "POST",
        body: JSON.stringify(
            { nombre: document.getElementById('newEmployeeName').value,
              apellidos: document.getElementById('newEmployeeSurname').value,
              trabaja_desde: document.getElementById('newEmployeeWork').value,
    }),
    headers: {
        "Content-type" : "application/json",
    }
})
    .then(res => res.json())
    .then(json =>alert(json.result));

}

// Eliminar empleado por ID
const empleado_delete = () => {
    id = document.getElementById('inputDeleteEmployee').value;

    fetch('http://127.0.0.1:5000/all/delete/'+id, {
    method: "DELETE",})
    .then(res =>res.json())
    .then(json =>alert(json.result));
}

// Actualizar nombre de empleado por ID

const empleado_update = () => {
    const id = document.getElementById('updateEmployeeId').value;
    const nombre = document.getElementById('updateEmployeeName').value;
    fetch(`http://127.0.0.1:5000/all/update/${id}/${nombre}`, {
    method: "PUT",})
    .then(res =>res.json())
    .then(json =>alert(json.result));
}