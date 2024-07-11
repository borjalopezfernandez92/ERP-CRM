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
    data.forEach(employee => {
        const row = document.createElement('tr');
        Object.values(employee).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
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

function getNewEmployeeData() {
    const employeeName = document.getElementById('newEmployeeName').value;
    const employeeSurname = document.getElementById('newEmployeeSurname').value;
    const workTime = document.getElementById('newEmployeeWork').value;
    return {
        nombre: employeeName,
        apellidos: employeeSurname,
        trabaja_desde: workTime
    };
}

async function insertEmployee() {
    try {
        const formdata = getNewEmployeeData();
        const response = await fetch('/all/insert', {
            method: 'POST',
            headers: {
                'Content-type': 'applicatoin/json',
            },
            body: JSON.stringify(formdata),
        });
        if (!response.ok) {
            throw new Error(alert`HTTP error! status: ${response.status}`);
        } else {
            const result = await response.json();
            console.log(result.message); // log con mensaje para confirmar que ha funcionado
            // Limpiamos el formulario tras la inserción.
            document.getElementById('newEmployeeName').value = '';
            document.getElementById('newEmployeeSurname').value = '';
            document.getElementById('newEmployeeWork').value = '';
        }
    } catch (error) {
        console.error('Error:', error);
    }
}