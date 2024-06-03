drop table if exists trabajos cascade;
drop table if exists citasevaluacion cascade;

SELECT *
FROM information_schema.table_constraints
WHERE constraint_type = 'FOREIGN KEY';

--=================================== TRABAJOS =====================================================--

UPDATE trabajos
set fk_id_cita = 9
WHERE id = 4;

select * from trabajos
select * from citasevaluacion
CREATE TABLE Trabajos (
    id SERIAL PRIMARY KEY,
    descripcion TEXT,
    fecha_inicio DATE,
    fecha_fin DATE,
    fk_id_lugar INT,
    fk_id_responsable INT,
	fk_id_cliente INT,
	fk_id_materiales INT,
	fk_id_trabajo INT,
	fk_id_cita INT,
    realizado BOOLEAN,
	costo INT,
    FOREIGN KEY(fk_id_lugar) REFERENCES Lugares(id),
	FOREIGN KEY(fk_id_cliente) REFERENCES Clientes(id),
    FOREIGN KEY(fk_id_responsable) REFERENCES Personal(id),
	FOREIGN KEY(fk_id_cita) REFERENCES CitasEvaluacion(id),
	FOREIGN KEY(fk_id_materiales) REFERENCES Materiales(id)
);




----- INSERTS TRABAJOS 

INSERT INTO Trabajos (descripcion, fecha_inicio, fecha_fin, costo,  fk_id_lugar, fk_id_cliente, fk_id_responsable,
					  fk_id_materiales, realizado)
VALUES ('Reparación de fachada', '2024-03-15', '2024-03-30', 1500,  1, 1, 1, 2, false);

INSERT INTO Trabajos (descripcion, fecha_inicio, fecha_fin, costo, fk_id_lugar, fk_id_cliente, fk_id_responsable,
					  fk_id_materiales, realizado)
VALUES ('Reemplazo de ventanas', '2024-04-01', '2024-04-10', 2000.00, 2, 2, 2, 1, false);

----- SELECTS TRABAJOS 
SELECT * from trabajos

UPDATE trabajos
SET realizado = true
where id = 5;

-- Ejercicio 21.1 Crea una función que devuelva la cantidad de trabajos realizados. <<< devuelve tanto los true como los false
DROP FUNCTION cantidad_trabajos_realizados;

CREATE OR REPLACE FUNCTION cantidad_trabajos_realizados()
RETURNS TABLE (Cantidad_Trabajos_Realizados INTEGER) AS 
$$
BEGIN
	RETURN QUERY
	SELECT id from trabajos
	WHERE realizado is True
	GROUP BY id;
	END;
$$
language plpgsql;

SELECT * from cantidad_trabajos_realizados();
SELECT * from citasevaluacion;

---=============== CORRECCION
CREATE OR REPLACE FUNCTION trabajos_realizados()
RETURNS TABLE (
    identificador INT,
    des TEXT,
    inicio DATE,
    fin DATE,
    id_lugar INT,
    id_responsable INT,
    hecho BOOLEAN
)
AS $$
BEGIN
    RETURN QUERY
    SELECT id, descripcion, fecha_inicio, fecha_fin, fk_id_lugar, fk_id_responsable, realizado
    FROM Trabajos
    WHERE realizado = true;
END;
$$ LANGUAGE plpgsql;

UPDATE Trabajos SET realizado = true WHERE id = 3 or id = 7;
SELECT identificador,des,inicio,fin,id_lugar,id_responsable,hecho
FROM trabajos_realizados();

-- Ejercicio 21.2 Crea una función que devuelva la media de trabajos realizados y 
---- otra la media de trabajos que no se han realizado aún (presupuesto)

------------media de trabajos que no se han realizado aún (presupuesto)

DROP FUNCTION FT_promedio_trabajos_done();


CREATE OR REPLACE FUNCTION FT_promedio_presupuestos()
RETURNS DECIMAL AS $$
DECLARE
    total DECIMAL := 0;
    cantidad INTEGER := 0;
    promedio DECIMAL := 0;
    presupuesto_actual RECORD;
BEGIN
		-- Iteración y suma
    FOR presupuesto_actual IN SELECT presupuesto FROM citasEvaluacion LOOP
        total := total + presupuesto_actual.presupuesto;
        cantidad := cantidad + 1;
    END LOOP;

    -- Calculamos el promedio
    IF cantidad > 0 THEN
        promedio := total / cantidad;
    ELSE
        RAISE EXCEPTION 'No hay trabajos finalizados en la tabla.';
    END IF;

    RETURN ROUND (promedio);
END;
$$ LANGUAGE plpgsql;

SELECT FT_promedio_presupuestos();

------------media de los trabajos realizados
CREATE OR REPLACE FUNCTION FT_promedio_trabajos_realizados()
RETURNS DECIMAL AS $$
DECLARE
    total DECIMAL := 0;
    cantidad INTEGER := 0;
    promedio DECIMAL := 0;
    trabajos_realizados RECORD;
BEGIN
    -- Iteración y suma
    FOR trabajos_realizados IN SELECT realizado FROM trabajos WHERE realizado = true LOOP
        total := total + 1;
        cantidad := cantidad + 1;
    END LOOP;

    -- calculo de promedio
    IF cantidad > 0 THEN
        promedio := total / cantidad;
    ELSE
        RAISE EXCEPTION 'No hay trabajos finalizados en la tabla.';
    END IF;

    RETURN ROUND (promedio);
END;
$$ LANGUAGE plpgsql;

SELECT FT_promedio_trabajos_realizados();
SELECt * from trabajos
SELECT * FROM citasevaluacion

---=============== CORRECCION
CREATE OR REPLACE FUNCTION trabajos_realizados_presupuesto()
RETURNS FLOAT
AS $$
DECLARE 
	r FLOAT;
BEGIN
    SELECT AVG(presupuesto) INTO r
	FROM CitasEvaluacion
	JOIN Trabajos ON Trabajos.id = CitasEvaluacion.fk_id_trabajo AND realizado = true;
	RETURN r;
END;
$$ LANGUAGE plpgsql;

SELECT trabajos_realizados_presupuesto();
-- 21.3 Crea una función que devuelva la media de trabajos de un cliente pasado por parámetro.
CREATE OR REPLACE FUNCTION FT_promedio_trabajos_realizados(id_cliente INT)
RETURNS DECIMAL AS $$
DECLARE
	id_cliente INT = fk_id_cliente;
    total DECIMAL := 0;
    cantidad INTEGER := 0;
    promedio DECIMAL := 0;
    trabajos_realizados RECORD;
BEGIN
    -- Iteración y suma
    FOR trabajos_realizados IN SELECT id FROM trabajos WHERE realizado = true LOOP
        total := total + 1;
        cantidad := cantidad + 1;
    END LOOP;

    -- calculo de promedio
    IF cantidad > 0 THEN
        promedio := total / cantidad;
    ELSE
        RAISE EXCEPTION 'No hay trabajos finalizados para ese cliente.';
    END IF;

    RETURN ROUND (promedio);
END;
$$ LANGUAGE plpgsql;

SELECT FT_promedio_trabajos_realizados(1);
SELECT * from trabajos;

--=========== CORRECION

CREATE OR REPLACE FUNCTION media_trabajos()
RETURNS TABLE (
    id_cliente INT,
    media NUMERIC
)
AS $$
BEGIN
    RETURN QUERY
    SELECT CitasEvaluacion.fk_id_cliente, AVG(presupuesto)
	FROM CitasEvaluacion
	JOIN Trabajos ON Trabajos.id = CitasEvaluacion.fk_id_trabajo AND realizado = false
	GROUP BY CitasEvaluacion.fk_id_cliente;
END;
$$ LANGUAGE plpgsql;

SELECT id_cliente, media
FROM media_trabajos();

--=========== CORRECION 2
DROP FUNCTION  media_trabajos_id;
CREATE OR REPLACE FUNCTION media_trabajos_id(id_cliente INTEGER)
RETURNS TABLE (
    cliente INT,
    media NUMERIC
)
AS $$
BEGIN
    RETURN QUERY
    SELECT CitasEvaluacion.fk_id_cliente, AVG(presupuesto)
	FROM CitasEvaluacion
	JOIN Trabajos ON Trabajos.id = CitasEvaluacion.fk_id_trabajo AND realizado = true AND Trabajos.fk_id_cliente = id_cliente
	GROUP BY CitasEvaluacion.fk_id_cliente;
END;
$$ LANGUAGE plpgsql;

SELECT cliente, media
FROM media_trabajos_id(2);

SELECT * FROM Trabajos;
SELECT * FROM CitasEvaluacion;

UPDATE CitasEvaluacion SET fk_id_trabajo = 7 WHERE id = 2;
UPDATE Trabajos SET fk_id_cliente = 2 WHERE id = 7;


-- Ejercicio 22.1 Crea un procedimiento que asigne un lugar, cuya ciudad recibe por parémtros, 
-- a los trabajos de citas impares.

CREATE OR REPLACE PROCEDURE PD_asigna_lugar(id_ciudad INT)
AS $$
DECLARE row_record RECORD;
BEGIN
	FOR row_record IN SELECT id FROM citasevaluacion
	LOOP
		IF (row_record.id % 2 = 1) THEN
		UPDATE trabajos
		SET fk_id_lugar = ID_ciudad
		WHERE fk_id_cita = row_record.id;
    	END IF;
	END LOOP;
END;
$$ LANGUAGE plpgsql;

CALL pd_asigna_lugar(1);

-- Ejercicio 21.3 Crea un procedimiento que asigne un lugar, cuya ciudad recibe por parémtros, 
-- a los trabajos de citas impares.

--=================================== LUGARES =====================================================--

select * from citasevaluacion;
select * from trabajos;

CREATE TABLE Lugares (
    id SERIAL PRIMARY KEY,
    direccion VARCHAR(200),
    ciudad VARCHAR(100),
    codigo_postal VARCHAR(10)
);

----- INSERTS LUGARES

INSERT INTO Lugares (direccion, ciudad, codigo_postal)
VALUES ('Calle Principal 123', 'Ciudad A', '12345');

INSERT INTO Lugares (direccion, ciudad, codigo_postal)
VALUES ('Avenida Central 456', 'Ciudad B', '67890');

INSERT INTO Lugares (direccion, ciudad, codigo_postal)
VALUES ('Camino Desierto 46', 'Ciudad A', '899400');

----- SELECTS LUGARES 
SELECT * from Lugares


--=================================== PERSONAL =====================================================--

CREATE TABLE Personal (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    cargo VARCHAR(100)
);

----- INSERTS PERSONAL

INSERT INTO Personal (nombre, cargo)
VALUES ('Juan Pérez', 'Técnico de Reparaciones');

INSERT INTO Personal (nombre, cargo)
VALUES ('María López', 'Encargada de Proyectos');

INSERT INTO Personal (nombre, cargo)
VALUES ('Jose Luis Ramirez', 'Técnico de Albañilería');

----- SELECTS PERSONAL
SELECT * from personal

--=================================== CLIENTES =====================================================--
ALTER TABLE clientes
DROP COLUMN responsable;



CREATE TABLE Clientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    telefono VARCHAR(20),
    email VARCHAR(100),
	fk_id_responsable VARCHAR(100)
);

----- INSERTS CLIENTES

INSERT INTO Clientes (nombre, telefono, email)
VALUES ('Empresa XYZ', '123-456-7890', 'info@empresaxyz.com');

INSERT INTO Clientes (nombre, telefono, email)
VALUES ('Edificio ABC', '987-654-3210', 'contacto@edificioabc.com');

INSERT INTO Clientes (nombre, telefono, email)
VALUES ('Matutano', '666-666-6666', 'Matutano@matutanomola.com');

INSERT INTO Clientes (nombre, telefono, email)
VALUES ('La vecina Paca', '667-666-6666', 'Paca@Lamejor.com');

----- SELECTS CLIENTES
SELECT * from clientes

----- UPDATES CLIENTES
UPDATE cLIENTES
SET fk_id_responsable = 3
WHERE id = 4;

--=================================== MATERIALES_TRABAJOS =============================================--

CREATE TABLE Materiales_Trabajos (
    id SERIAL PRIMARY KEY,
    fk_id_material INT,
    fk_id_trabajo INT,
    FOREIGN KEY(fk_id_material) REFERENCES Materiales(id),
	FOREIGN KEY(fk_id_trabajo) REFERENCES Trabajos(id)
);

----- SELECTS MATERIALES_CLIENTES
SELECT * from materiales_trabajos;

--=================================== MATERIALES =====================================================--

CREATE TABLE Materiales (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    precio_unitario NUMERIC(10, 2)
);

----- INSERTS Materiales

INSERT INTO Materiales (nombre, descripcion, precio_unitario)
VALUES ('Pintura blanca', 'Pintura de exterior para fachadas', 50.00);

INSERT INTO Materiales (nombre, descripcion, precio_unitario)
VALUES ('Cristales dobles', 'Ventanas de doble acristalamiento', 100.00);

INSERT INTO Materiales (nombre, descripcion, precio_unitario)
VALUES ('Tubería PVC', 'Tuberías para alcantarillado', 150.00);

INSERT INTO Materiales (nombre, descripcion, precio_unitario)
VALUES ('Cableado', 'Cables para aire acondicionado', 65.00);

----- SELECTS Materiales
SELECT * from materiales

--=================================== CITAS EVALUACION =====================================================-- ##Ejercicio 2##
ALTER TABLE citasevaluacion
add column fk_id_materiales INT;

---
CREATE TABLE CitasEvaluacion (
    id SERIAL PRIMARY KEY,
    fecha DATE,
	presupuesto DECIMAL(10,2),
    fk_id_lugar INT,
    fk_id_responsable INT,
    fk_id_cliente INT,
    FOREIGN KEY(fk_id_lugar) REFERENCES Lugares(id),
    FOREIGN KEY(fk_id_responsable) REFERENCES Personal(id),
	FOREIGN KEY(fk_id_cliente) REFERENCES Clientes(id)
);


CREATE TABLE CitasEvaluacion (
    id SERIAL PRIMARY KEY,
    fk_id_lugar INT,
    fk_id_cliente INT,
    fk_id_responsable INT,
	fk_id_materiales INT,
	fecha DATE,
	presupuesto INT,
	
	FOREIGN KEY(fk_id_lugar) REFERENCES Lugares(id),
    FOREIGN KEY(fk_id_responsable) REFERENCES Personal(id),
	FOREIGN KEY(fk_id_materiales) REFERENCES Materiales(id),
	FOREIGN KEY(fk_id_cliente) REFERENCES Clientes(id),
);

----- INSERTS CITAS EVUALIACION

INSERT INTO CitasEvaluacion (fecha, presupuesto, fk_id_lugar, fk_id_responsable, fk_id_cliente)
VALUES ('2025-01-03', 1623.78, 2, 1, 2);

INSERT INTO CitasEvaluacion (fecha, presupuesto, fk_id_lugar, fk_id_responsable, fk_id_cliente)
VALUES ('2026-03-05', 1500, 2, 1, 2);

INSERT INTO CitasEvaluacion (fecha, presupuesto, fk_id_lugar, fk_id_responsable, fk_id_cliente)
VALUES ('2022-03-05', 1256, 1, 2, 1);


----- SELECTS CITAS EVALUACION 
SELECT * from CitasEvaluacion

----- UPDATES CITAS EVALUACION 

UPDATE CitasEvaluacion
SET fk_id_materiales = 1
WHERE id = 3;

--=================================== TRIGGER CITA =====================================================-- ##Ejercicio 3##


CREATE OR REPLACE FUNCTION insert_cita_nuevo_trabajo_realizado()
RETURNS trigger AS
$$
BEGIN

    INSERT INTO Trabajos(descripcion, fk_id_lugar, fk_id_cliente, fk_id_responsable, realizado)
	VALUES ('trabajo no realizado', NEW.fk_id_lugar, NEW.fk_id_cliente, NEW.fk_id_responsable, FALSE);
    RETURN NEW;
	
END;
$$
LANGUAGE 'plpgsql';

CREATE OR REPLACE TRIGGER TG_nuevo_trabajo
AFTER INSERT
ON CitasEvaluacion
FOR EACH ROW
EXECUTE PROCEDURE insert_cita_nuevo_trabajo_realizado();


--=================================== CONSULTAS =====================================================-- ##Ejercicio 7##
---- 7.1 >> Obtener los datos del personal de trabajos presupuestados por encima de 1000€
SELECT * FROM Personal
WHERE id IN(SELECT fk_id_responsable
		   FROM Trabajos
		   WHERE id IN (SELECT id
					   FROM CitasEvaluacion
					   WHERE presupuesto > 1000))

---- 7.2 >> Obtener las citas de trabajos que hayan usado "Pintura blanca"
SELECT * from trabajos;
where fk_id_trabajo = 1;

INSERT INTO trabajos(fk_id_trabajo, fk_id_material) VALUES(1,1); 

SELECT * FROM CitasEvaluacion
WHERE fk_id_trabajo IN(SELECT fk_id_trabajo 
						FROM Materiales_Trabajos 
						WHERE fk_id_material IN (SELECT id
												FROM Materiales
												WHERE nombre = 'Pintura blanca'));
---- 7.3 >> Obtener los clientes de trabajos de María López.
SELECT * from clientes
where id IN(SELECT id
		   FROM Trabajos
		   WHERE id = 2)

---- 7.4 >> Mostrar los trabajos realizados en la ciudad 'Ciudad A'.
SELECT * from Trabajos
where id IN(SELECT fk_id_lugar
		   FROM Lugares
		   WHERE fk_id_lugar = 1)

---- 7.5 >> Mostrar los trabajos realizados junto con la información del lugar.
SELECT * FROM lugares
INNER JOIN Trabajos ON lugares.id = trabajos.fk_id_lugar;

SELECT *
FROM Trabajos
where fk_id_lugar IN (SELECT fk_id_lugar
					 FROM Trabajos
					 where realizado = True);

---- 7.6 >> Calcular el presupuesto total de los trabajos realizados por cada personal.
SELECT fk_id_responsable, SUM (presupuesto) AS PresupuestoTotal
FROM 
CitasEvaluacion 
GROUP BY fk_id_responsable 
ORDER BY SUM (presupuesto) DESC;

---- 7.7 >> Contar cuántos trabajos se han realizado en cada lugar.
SELECT fk_id_lugar, COUNT (*) AS Cantidad_trabajos
FROM 
trabajos 
GROUP BY fk_id_lugar
ORDER BY SUM (id) DESC;