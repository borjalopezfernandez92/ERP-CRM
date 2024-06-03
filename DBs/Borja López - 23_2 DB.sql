--==================================================EJERCICIO 23_2=========================================================--
--============ TABLA JUGADORES

CREATE TABLE Jugadores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    fecha_nacimiento DATE,
    posicion VARCHAR(100),
    fk_id_equipo INT,
    FOREIGN KEY(fk_id_equipo) REFERENCES Equipos(id)
	ON DELETE set null ON UPDATE CASCADE
);

SELECT * FROM Jugadores;

-- INSERTS

INSERT INTO Jugadores (Nombre, fecha_nacimiento, Posicion, fk_id_equipo)
VALUES ('Emilio', '1995-02-05', 'central', 1);

INSERT INTO Jugadores (Nombre, fecha_nacimiento, Posicion, fk_id_equipo)
VALUES ('Pepe', '1988-11-15', 'Portero', 2);

INSERT INTO Jugadores (Nombre, fecha_nacimiento, Posicion, fk_id_equipo)
VALUES ('Matías', '1990-01-31', 'Delantero', 3);

INSERT INTO Jugadores (Nombre, fecha_nacimiento, Posicion, fk_id_equipo)
VALUES ('Jose Javier', '1985-08-24', 'Defensa', 4);


--============ TABLA COPIA SEGURIDAD JUGADORES


CREATE TABLE cs_Jugadores (
    id SERIAL PRIMARY KEY,
    Nombre VARCHAR(100),
    fecha_nacimiento DATE,
    Poisicion VARCHAR(100),
    fk_id_equipo INT,
    FOREIGN KEY(fk_id_equipo) REFERENCES Equipos(id)
	ON DELETE set null ON UPDATE CASCADE
);

SELECT * FROM cs_jugadores;

--============ TABLA EQUIPOS

CREATE TABLE Equipos (
    id SERIAL PRIMARY KEY,
    Nombre VARCHAR(200),
    Estadio VARCHAR (200),
    Aforo_Estadio INT,
    Año_Fundacion DATE,
	Ciudad VARCHAR (200)
);

SELECT * FROM Equipos;

-- INSERTS

INSERT INTO Equipos (Nombre, Estadio, Aforo_Estadio, Año_Fundacion, Ciudad)
VALUES ('Grefusa', 'Tijuana', 60.000, '1965-01-01', 'Valencia' );

INSERT INTO Equipos (Nombre, Estadio, Aforo_Estadio, Año_Fundacion, Ciudad)
VALUES ('Atlético de Jardín', 'Botánico', 70.460, '1903/02/02', 'Madrid' );

INSERT INTO Equipos (Nombre, Estadio, Aforo_Estadio, Año_Fundacion, Ciudad)
VALUES ('Real Jardín', 'Recién Podado', 81.044, '1902/03/03', 'Madrid' );

INSERT INTO Equipos (Nombre, Estadio, Aforo_Estadio, Año_Fundacion, Ciudad)
VALUES ('Matutano', 'Frito', 50.000, '1955/04/04', 'Sevilla' );

--============ TABLA PARTIDOS

CREATE TABLE Partidos (
    id SERIAL PRIMARY KEY,
    Fecha DATE,
    Goles_Casa INT,
    Goles_Visitante INT,
	Total_goles INT
);

SELECT * FROM Partidos;

-- INSERTS
INSERT INTO Partidos (Fecha, Goles_Casa, Goles_Visitante, Total_goles)
VALUES ('2024-03-03', 3, 1, 4);

INSERT INTO Partidos (Fecha, Goles_Casa, Goles_Visitante, Total_goles)
VALUES ('2024-02-02', 1, 1, 2);

INSERT INTO Partidos (Fecha, Goles_Casa, Goles_Visitante, Total_goles)
VALUES ('2024-01-11', 0, 4, 4);

INSERT INTO Partidos (Fecha, Goles_Casa, Goles_Visitante, Total_goles)
VALUES ('2024-01-21', 3, 3, 6);

--============ TABLA GOLES


CREATE TABLE Goles (
    id SERIAL PRIMARY KEY,
	Minuto_gol TIME,
	Descripcion TEXT,
	fk_id_partido INT,
	fk_id_jugador INT,
	FOREIGN KEY (fk_id_jugador) REFERENCES Jugadores(id)
	ON DELETE cascade ON UPDATE cascade,
	FOREIGN KEY (fk_id_partido) REFERENCES Partidos (id)
	ON DELETE cascade ON UPDATE cascade

);

SELECT * FROM Goles;

-- INSERTS
INSERT INTO Goles (Minuto_gol, Descripcion, fk_id_partido, fk_id_jugador)
VALUES ('00:30:25', 'Remate desde córner', 1, 2);

INSERT INTO Goles (Minuto_gol, Descripcion, fk_id_partido, fk_id_jugador)
VALUES ('01:15:33', 'Remate desde córner', 2, 3);

INSERT INTO Goles (Minuto_gol, Descripcion, fk_id_partido, fk_id_jugador)
VALUES ('01:25:03', 'Penalti', 2, 3);

INSERT INTO Goles (Minuto_gol, Descripcion, fk_id_partido, fk_id_jugador)
VALUES ('00:16:43', 'De cabeza', 3, 4);

INSERT INTO Goles (Minuto_gol, Descripcion, fk_id_partido, fk_id_jugador)
VALUES ('01:29:59', 'Tiro de falta', 3, 4);


--============ TABLA PRESIDENTES
CREATE TABLE Presidentes (
    id SERIAL PRIMARY KEY,
    DNI VARCHAR(10),
    Nombre VARCHAR(100),
	Apellidos VARCHAR (200),
	Fecha_Nacimiento DATE,
	fk_id_Equipo INT,
    Año_Eleccion DATE,
	FOREIGN KEY(fk_id_equipo) REFERENCES Equipos(id)
	ON DELETE SET NULL ON UPDATE CASCADE

);

SELECT * FROM Presidentes;

-- INSERTS
INSERT INTO Presidentes (DNI, Nombre, Apellidos, Fecha_Nacimiento, fk_id_Equipo, Año_Eleccion)
VALUES ('789654123E', 'Jose', 'Estriguero', '1975-05-15', 1, '2023-09-09');

INSERT INTO Presidentes (DNI, Nombre, Apellidos, Fecha_Nacimiento, fk_id_Equipo, Año_Eleccion)
VALUES ('147258369H', 'Vicente', 'De la Torre', '1969-01-06', 2, '2023-10-10');

INSERT INTO Presidentes (DNI, Nombre, Apellidos, Fecha_Nacimiento, fk_id_Equipo, Año_Eleccion)
VALUES ('963852741S', 'Eleuterio', 'Fernández', '1966-12-12', 3, '2020-11-11');

INSERT INTO Presidentes (DNI, Nombre, Apellidos, Fecha_Nacimiento, fk_id_Equipo, Año_Eleccion)
VALUES ('654987123L', 'Manuel', 'Maza', '1979-11-6', 4, '2024-01-01');


--========== TRIGGER --
CREATE OR REPLACE FUNCTION ft_copia_seguridad_jugadores()
RETURNS TRIGGER AS $$
BEGIN
	INSERT INTO cs_jugadores (nombre, fecha_nacimiento, poisicion, fk_id_equipo)
	VALUES (OLD.nombre, OLD.fecha_nacimiento, OLD.posicion, OLD.fk_id_equipo);
	RETURN old;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER copia_seguridad_jugadores
AFTER DELETE ON Jugadores
FOR EACH ROW EXECUTE FUNCTION ft_copia_seguridad_jugadores();


DELETE FROM jugadores
where id = 3;
--========== SELECTS
-- JOIN -- Muestra los goles marcados por un jugador --

SELECT * from jugadores
JOIN goles ON jugadores.id = goles.fk_id_jugador WHERE jugadores.nombre = 'Pepe';

-- Muestra los estadios en la ciudad "Madrid"
SELECT estadio from equipos
WHERE ciudad = 'Madrid' ;

-- Muestra los goles marcados en la primera hora de partido
SELECT * from goles
WHERE minuto_gol < '01:00:00';
