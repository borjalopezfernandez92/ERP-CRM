//Mostrar datos de empleados en tabla
fetch('http://127.0.0.1:5000/all')
    .then(empleados => empleados.json())
    .then(data => {
        const container = document.getElementById('employee-container');

        let tHead = document.createElement("thead");
        let headerRow = document.createElement('tr');
        Object.keys(data[0]).forEach(key => {
            let th = document.createElement('th');
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            headerRow.appendChild(th);
        });
        tHead.appendChild(headerRow);
        container.appendChild(tHead);

        let tBody = document.createElement('tbody');
        data.forEach(employee => {
            let row = document.createElement('tr');
            Object.values(employee).forEach(value => {
                let cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });
            tBody.appendChild(row);
        });
        container.appendChild(tBody);
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