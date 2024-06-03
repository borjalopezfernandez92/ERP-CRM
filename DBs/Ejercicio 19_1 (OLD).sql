-----------------------------------------------------------------------------------------------------------------------------
-----DROPS-------

drop table if exists trabajos;
drop table if exists Lugares cascade;
drop table if exists personal cascade;
drop table if exists CitasEvaluacion cascade;
drop table if exists clientes cascade;
drop table if exists materiales cascade;



-----------------------------------------------------------------------------------------------------------------------------
-----TABLAS-------


CREATE TABLE Trabajos (
    id SERIAL PRIMARY KEY,
    descripcion TEXT,
    fecha_inicio DATE,
    fecha_fin DATE,
    fk_id_responsable INT,
	fk_id_lugar INT,
	fk_id_cita INT,
	fk_id_materiales INT,
	fk_id_cliente INT,
	responsable_id INT,
    realizado BOOLEAN,
	costo INT,
	FOREIGN KEY(fk_id_materiales) REFERENCES Materiales(id) 			-- Agregado por apartado 5 del ejercicio 19_1
		ON DELETE CASCADE											-- Agregado por apartado 4 del ejercicio 19_1
		ON UPDATE CASCADE,											-- Agregado por apartado 4 del ejercicio 19_1
    FOREIGN KEY(fk_id_lugar) REFERENCES Lugares(id)
		ON DELETE CASCADE											-- Agregado por apartado 4 del ejercicio 19_1
		ON UPDATE CASCADE,											-- Agregado por apartado 4 del ejercicio 19_1
    FOREIGN KEY(fk_id_responsable) REFERENCES Personal(id)
		ON DELETE CASCADE											-- Agregado por apartado 4 del ejercicio 19_1
		ON UPDATE CASCADE,											-- Agregado por apartado 4 del ejercicio 19_1
	FOREIGN KEY(fk_id_cita) REFERENCES CitasEvaluacion(id)
		ON DELETE CASCADE											-- Agregado por apartado 4 del ejercicio 19_1
		ON UPDATE CASCADE,	
		FOREIGN KEY(fk_id_cliente) REFERENCES Clientes(id)
		ON DELETE CASCADE											
		ON UPDATE CASCADE	
);

CREATE TABLE Lugares (
    id SERIAL PRIMARY KEY,
    direccion VARCHAR(200),
    ciudad VARCHAR(100),
	lugar VARCHAR(100),
    codigo_postal VARCHAR(10)
);

CREATE TABLE Personal (
    id SERIAL PRIMARY KEY,
	responsable VARCHAR (100),
    cargo VARCHAR(100)
);

CREATE TABLE Clientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    telefono VARCHAR(20),
    email VARCHAR(100),
	personal_encargado VARCHAR(100)
);

CREATE TABLE Materiales (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
	fk_id_materiales INT,
    precio_unitario NUMERIC(10, 2)
);
	
------ Tabla Ejercicio 2-----
CREATE TABLE CitasEvaluacion  (
    id SERIAL PRIMARY KEY,
	descripcion TEXT,
    fk_id_lugar INT,
    fk_id_cliente INT,
    fk_id_responsable INT,
	fecha DATE,
	presupuesto INT,
		FOREIGN KEY(fk_id_responsable) REFERENCES Personal(id) 			
		ON DELETE CASCADE											
		ON UPDATE CASCADE,
		FOREIGN KEY(fk_id_lugar) REFERENCES Lugares(id) 			
		ON DELETE CASCADE											
		ON UPDATE CASCADE,
		FOREIGN KEY(fk_id_cliente) REFERENCES Clientes(id) 			
		ON DELETE CASCADE											
		ON UPDATE CASCADE
);

------ Tabla Ejercicio 5-----
CREATE TABLE MaterialesTrabajos  (
    id SERIAL PRIMARY KEY,
    material VARCHAR(100),
    coste INT
);

-----------------------------------------------------------------------------------------------------------------------------
-----------------ALTER TABLES ----------------------	
ALTER TABLE Trabajo
ADD COLUMN nombre;

ALTER TABLE Trabajos
ADD codigo_trabajo VARCHAR(10);
-----------------------------------------------------------------------------------------------------------------------------
-----------------Inserts ---------------------------

INSERT INTO Trabajos (descripcion, fecha_inicio, fecha_fin, costo, fk_id_lugar,
					  responsable_id, fk_id_responsable, fk_id_materiales, realizado)
VALUES ('Reparación de fachada', '2024-03-15', '2024-03-30', 5000, 1, 1, 1, 1, false); -- completado datos

INSERT INTO Trabajos (descripcion, fecha_inicio, fecha_fin, costo, fk_id_lugar,
					  responsable_id, fk_id_responsable, fk_id_materiales, realizado)
VALUES ('Reemplazo de ventanas', '2024-04-01', '2024-04-10', 2000.00, 2, 2, 2, 2, false); -- completado datos

INSERT INTO Lugares (direccion, ciudad, codigo_postal, lugar)
VALUES ('Calle Principal 123', 'Ciudad A', '12345', 'Edificio Colcer');

INSERT INTO Lugares (direccion, ciudad, codigo_postal, lugar)
VALUES ('Avenida Central 456', 'Ciudad B', '67890', 'Casa Paca');

INSERT INTO Personal (responsable, cargo)
VALUES ('Juan Pérez', 'Técnico de Reparaciones');

INSERT INTO Personal (responsable, cargo)
VALUES ('María López', 'Encargada de Proyectos');

INSERT INTO Personal (responsable, cargo)
VALUES ('Jose Luis', 'Técnico en Construcciones');

INSERT INTO Clientes (nombre, telefono, email, personal_encargado)
VALUES ('Empresa XYZ', '123-456-7890', 'info@empresaxyz.com', 'María López');

INSERT INTO Clientes (nombre, telefono, email, personal_encargado)
VALUES ('Edificio ABC', '987-654-3210', 'contacto@edificioabc.com', 'Juan Pérez');

INSERT INTO Materiales (nombre, descripcion, precio_unitario, fk_id_materiales)
VALUES ('Pintura blanca', 'Pintura de exterior para fachadas', 50.00, 1);

INSERT INTO Materiales (nombre, descripcion, precio_unitario, fk_id_materiales)
VALUES ('Cristales dobles', 'Ventanas de doble acristalamiento', 100.00, 2);
	
-----------------------------------------------------------------------------------------------------------------------------
------- INSERT EJERCICIO 7 --
INSERT INTO CitasEvaluacion (descripcion, fk_id_lugar, fk_id_cliente, fk_id_responsable, fecha, presupuesto)
VALUES ('destasco de tubería', 1, 1, 3, '05/11/2024', '1250');

INSERT INTO CitasEvaluacion (descripcion, fk_id_lugar, fk_id_cliente, fk_id_responsable, fecha, presupuesto)
VALUES ('cambio aire acondicionado', 2, 2, 3, '15/06/2024', '350');

-----------------------------------------------------------------------------------------------------------------------------
-----------TRIGGERS----------
CREATE OR REPLACE FUNCTION insert_cita_nuevo_trabajo_false()
  RETURNS trigger AS
$$
BEGIN

    INSERT INTO Trabajos(id, descripcion, fk_id_lugar, fk_id_cliente, fk_id_responsable,  realizado)
	VALUES (NEW.id,NEW.descripcion, NEW.fk_id_lugar, NEW.fk_id_cliente, NEW.fk_id_responsable, FALSE);
    RETURN NEW;
	
END;
$$
LANGUAGE 'plpgsql';


CREATE TRIGGER TG_nuevo_trabajo
AFTER INSERT
ON CitasEvaluacion
FOR EACH ROW
EXECUTE PROCEDURE insert_cita_nuevo_trabajo_false();
	
-----------------------------------------------------------------------------------------------------------------------------
-----------SELECTS----------
	--Obtener los datos del personal de trabajos presupuestados por encima de 1000€
SELECT * from CitasEvaluacion
WHERE presupuesto > 1000

  	--Obtener las citas de trabajos que hayan usado "Pintura blanca"
SELECT * from Materiales
WHERE nombre = 'Pintura blanca'

	-- Obtener los clientes de trabajos de María López.
SELECT * from personal
WHERE personal = 'María López'

	-- Mostrar los trabajos realizados en la ciudad 'Ciudad A'.
SELECT * from lugares
WHERE ciudad = 'Ciudad A'
	
	-- Mostrar los trabajos realizados junto con la información del lugar.
SELECT *
FROM cities
JOIN countries ON (cities.country_id = countries.country_id)
WHERE cities.name = 'New York' 
OR countries.name = 'New York'

	-- Calcular el presupuesto total de los trabajos realizados por cada personal.
SELECT personal, SUM (presupuesto) AS Presupuesto_total
FROM 
CitasEvaluacion 
GROUP BY personal
ORDER BY SUM (presupuesto) DESC;
	-- Contar cuántos trabajos se han realizado en cada lugar.
SELECT ciudad, COUNT (id) AS Cantidad_trabajos
FROM 
Lugares 
GROUP BY ciudad
ORDER BY SUM (id) DESC;
--=================================================================================================================================
--==============UTILIDADES/NOTAS/ETC===============-
SELECT * from CitasEvaluacion
WHERE presupuesto > 1000
SELECT * from Trabajos
SELECT * from Lugares
SELECT * from CitasEvaluacion
SELECT * from Personal
SELECT * from Materiales
SELECT * from Clientes
SELECT * from MaterialesTrabajos

INSERT INTO CitasEvaluacion(lugar, cliente, personal, fecha, presupuesto)
VALUES ('pamplona', 'Juan', 'Almudena','19/6/2024', '1000');
INSERT INTO Trabajos(materiales)
VALUES ('madera, cemento y arena');
DELETE from citasevaluacion
WHERE id = 4
-----------------------------------------------------------------------------------------------------------------------------
------------- Cambios ---------
-- Cambiado en tabla Lugares, lugar TEXT -> VARCHAR(100)
-- ALTER TABLE para dropear "nombre" en "Personal", ya que nombre y personal sirven para lo mismo, siendo redundante.
	--de la misma manera cambiado (nombre) de los INSERT a personal por (personal) 	

------------- Errores ---------
--- Faltaban apartados en trabajadores, en lugares y en personal.
--- Tras agregarlos a las tablas, hacer drop y volver a crearlas, los insert ejecutan sin problema.