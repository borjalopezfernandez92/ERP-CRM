--*- Crea un procedimiento y una función que calculen el área de un círculo. [DONE] 

--- Procedimiento
CREATE OR REPLACE PROCEDURE PD_area_circulo(pi DECIMAL, radio DECIMAL)
AS $$
DECLARE
  resultado DECIMAL;
BEGIN
  resultado := pi * radio;
  RAISE NOTICE 'El área de un círculo de % y % es % cm', pi, radio, resultado;
END;
$$ LANGUAGE plpgsql;

CALL PD_area_circulo(3.14, 5);

--==================== CORRECCIÓN
CREATE OR REPLACE PROCEDURE area_circulo(radio DECIMAL(6,2))
AS $$
DECLARE
  area DECIMAL(6,2);
  pi CONSTANT NUMERIC := 3.14159265358979323846;
BEGIN
	area := pi * radio ^ 2; 
  	RAISE NOTICE 'El area del circulo es %', area;
END;
$$ LANGUAGE plpgsql;

CALL area_circulo(2.1);


--- Función
CREATE OR REPLACE FUNCTION FT_area_circulo(pi DECIMAL, radio DECIMAL)
RETURNS DECIMAL AS $$
DECLARE
  resultado DECIMAL;
BEGIN
  resultado := pi * radio;
  RETURN resultado;
END;
$$ LANGUAGE plpgsql;

SELECT FT_area_circulo(3.14, 5);

--==================== CORRECCIÓN
CREATE OR REPLACE FUNCTION area_circulo_2(radio DECIMAL(6,2))
RETURNS DECIMAL(6,2) AS $$
DECLARE
  pi CONSTANT NUMERIC := 3.14159265358979323846;
BEGIN
	RETURN pi * radio ^ 2; 
END;
$$ LANGUAGE plpgsql;

SELECT area_circulo_2(2.1);

-- Crea un procedimiento y una función que indiquen si un número pasado por parámetros es par o impar. [WIP]
-----PROCEDIMIENTO

CREATE OR REPLACE PROCEDURE PD_numero_par_impar(numero INTEGER)
AS $$
BEGIN
  IF (numero % 2 = 0) THEN
    RAISE NOTICE 'El número introducido es par.';
  ELSE
    RAISE NOTICE 'El número introducido es impar.';
  END IF;
END ;
$$
LANGUAGE plpgsql;

CALL PD_numero_par_impar(5);

--==================== CORRECCIÓN
CREATE OR REPLACE PROCEDURE par_impar(numero INTEGER)
AS $$
BEGIN
	IF numero % 2 = 0 THEN
    	RAISE NOTICE 'El numero es par';
	ELSE 
    	RAISE NOTICE 'El numero es impar';
	END IF;
END;
$$ LANGUAGE plpgsql;

CALL par_impar(1400);
CALL par_impar(1401);

-----FUNCION

CREATE OR REPLACE FUNCTION FT_numero_par_impar(numero INTEGER)
RETURNS INTEGER AS $$
DECLARE
  resultado INTEGER;
BEGIN
  IF (numero % 2 = 0) THEN
    RAISE NOTICE 'El número introducido es par.';
  ELSE
    RAISE NOTICE 'El número introducido es impar.';
  END IF;
END ;
$$ LANGUAGE plpgsql;

SELECT FT_numero_par_impar(6);

--==================== CORRECCIÓN
CREATE OR REPLACE FUNCTION par_impar_2(numero INTEGER)
RETURNS BOOLEAN AS $$
BEGIN
	RETURN numero % 2 = 0;
END;
$$ LANGUAGE plpgsql;


DO $$

BEGIN
	IF par_impar_2(324) THEN
    	RAISE NOTICE 'El numero es par';
	ELSE 
    	RAISE NOTICE 'El numero es impar';
	END IF;
	IF par_impar_2(15) THEN
    	RAISE NOTICE 'El numero es par';
	ELSE 
    	RAISE NOTICE 'El numero es impar';
	END IF;

END $$;

-- Crea un procedimiento que permita devolver la suma, resta, multiplicación y división de dos números.
-----Procedure
CREATE OR REPLACE PROCEDURE PD_calculadora(
    operacion CHAR,
    num_a NUMERIC,
    num_b NUMERIC,
    OUT result NUMERIC
)
LANGUAGE plpgsql
AS $$
BEGIN
    CASE operacion
        WHEN '+' THEN
            result := num_a + num_b;
        WHEN '-' THEN
            result := num_a - num_b;
        WHEN '*' THEN
            result := num_a * num_b;
        WHEN '/' THEN
            IF num_b <> 0 THEN
                result := num_a / num_b;
            ELSE
                RAISE EXCEPTION 'División entre 0 no está permitida.';
            END IF;
        ELSE
            RAISE EXCEPTION 'Operación invalida: %', operacion;
    END CASE;
END;
$$;

CALL PD_calculadora('*', 5, 0, result => 0);

--==================== CORRECCIÓN
CREATE OR REPLACE PROCEDURE calculadora(
    IN num1 INTEGER,
    IN num2 INTEGER,
    OUT suma INTEGER,
    OUT resta INTEGER,
    OUT multiplicacion INTEGER,
    OUT division FLOAT
)
AS $$
BEGIN
    suma := num1 + num2;  
    resta := num1 - num2;
    multiplicacion := num1 * num2;
    IF num2 = 0 THEN
        division := NULL; -- Evita la división por cero, que no existe
    ELSE
        division := num1::FLOAT / num2;
    END IF;
END;
$$ LANGUAGE plpgsql;


DO $$
DECLARE
	suma INTEGER;
	resta INTEGER;
	multiplicacion INTEGER;
	division FLOAT;
	n1 INTEGER DEFAULT 1300;
	n2 INTEGER DEFAULT 10;

BEGIN
	CALL calculadora(n1,n2,suma, resta, multiplicacion, division);
	RAISE NOTICE 'Suma: %', suma;
    RAISE NOTICE 'Resta: %', resta;
    RAISE NOTICE 'Multiplicación: %', multiplicacion;
    RAISE NOTICE 'División: %', division;
	CALL calculadora(3,7,suma, resta, multiplicacion, division);
    RAISE NOTICE 'Suma: %', suma;
    RAISE NOTICE 'Resta: %', resta;
    RAISE NOTICE 'Multiplicación: %', multiplicacion;
    RAISE NOTICE 'División: %', division;
END $$;

-- Crea un procedimiento que permita recibir un número, sumarle 100 y devolverlo modificado.
CREATE OR REPLACE PROCEDURE suma_cien(num INTEGER)
LANGUAGE plpgsql AS $$
BEGIN
    RAISE NOTICE 'Resultado: %', num + 100;
END;
$$;

CALL suma_cien(5);
--==================== CORRECCIÓN
CREATE OR REPLACE PROCEDURE suma_100(INOUT resultado INTEGER)
AS $$
BEGIN
    resultado := resultado + 100;
END;
$$ LANGUAGE plpgsql;

DO $$
DECLARE
	n INTEGER DEFAULT 100;
BEGIN
	CALL suma_100(n);
	RAISE NOTICE 'Numero: %', n;
	CALL suma_100(n);
	RAISE NOTICE 'Numero: %', n;
	CALL suma_100(n);
	RAISE NOTICE 'Numero: %', n;
END $$;
