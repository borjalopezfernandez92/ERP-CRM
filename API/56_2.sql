CREATE TABLE empleados (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    apellidos VARCHAR(255),
    trabaja_desde INT
);

SELECT * FROM empleados;

INSERT INTO empleados (Nombre, apellidos, trabaja_desde)
VALUES ('Davinia', 'De la Rosa', 5);

INSERT INTO empleados (Nombre, apellidos, trabaja_desde)
VALUES ('María', 'Ramirez', 4);