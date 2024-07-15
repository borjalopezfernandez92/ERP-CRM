import psycopg2
import flask
from flask import request, jsonify
from flask_cors import CORS, cross_origin

def select_all():
    resultado_dic = {} ## diccionario vacío para agrupar datos de los libros a continuación.

    try:
        conn = psycopg2.connect(
            database="empresa",
            user='postgres',
            password='clase23',
            host='localhost',
            port='5432'
        )
        cursor = conn.cursor()
        select_query = "select * from empleados"
        cursor.execute(select_query)
        empleados_resultado = cursor.fetchall() # Resultado de la consulta
    

        for row in empleados_resultado:
            resultado_dic[row[0]] = {}
            resultado_dic[row[0]]['id'] = row[0]
            resultado_dic[row[0]]['nombre'] = row[1]
            resultado_dic[row[0]]['apellidos'] = row[2]
            resultado_dic[row[0]]['trabaja_desde'] = row[3]

        print(resultado_dic)
    
    except (Exception, psycopg2.Error) as error:
        print("Error while fetching data from PostgreSQL", error)

    finally:
        # closing database connection.
        if conn:
            cursor.close()
            conn.close()
            print("PostgreSQL connection is closed")
    return resultado_dic
def select_id(id):
    resultado_dic = {} ## diccionario vacío para agrupar datos de los libros a continuación.

    try:
        conn = psycopg2.connect(
            database="empresa",
            user='postgres',
            password='clase23',
            host='localhost',
            port='5432'
        )
        cursor = conn.cursor()
        select_query = "select * from empleados"
        cursor.execute(select_query)
        empleados_resultado = cursor.fetchall() # Resultado de la consulta
    

        for row in empleados_resultado:
            if id == row[0]:
                resultado_dic[row[0]] = {}
                resultado_dic[row[0]]['nombre'] = row[1]
                resultado_dic[row[0]]['apellidos'] = row[2]
                resultado_dic[row[0]]['trabaja_desde'] = row[3]
                print(resultado_dic)
    
    except (Exception, psycopg2.Error) as error:
        print("Error while fetching data from PostgreSQL", error)

    finally:
        # closing database connection.
        if conn:
            cursor.close()
            conn.close()
            print("PostgreSQL connection is closed")
    return resultado_dic
def insert_new(nombre, apellidos, trabaja_desde):
    try:
        conn = psycopg2.connect(
            database="empresa",
            user='postgres',
            password='clase23',
            host='localhost',
            port='5432'
        )
        cursor = conn.cursor()
        insert_query = """ INSERT INTO empleados(nombre,
	    apellidos, trabaja_desde) 
	    VALUES (%s,%s,%s)"""
        data = (nombre, apellidos, trabaja_desde)
        cursor.execute(insert_query, data)
        conn.commit()
        count = cursor.rowcount
        print(count, "Inserción realizada con éxito en la tabla 'empleados'")
    
    
    
    except (Exception, psycopg2.Error) as error:
        print("Error while fetching data from PostgreSQL", error)

    finally:
        # closing database connection.
        if conn:
            cursor.close()
            conn.close()
            print("PostgreSQL connection is closed")
def delete_empleado(id):
    try:
        conn = psycopg2.connect(
            database="empresa",
            user='postgres',
            password='clase23',
            host='localhost',
            port='5432'
        )
        cursor = conn.cursor()
        sql_delete_query = """Delete from empleados\
		where id = %s"""
        cursor.execute(sql_delete_query, (id,))
        conn.commit()
        count = cursor.rowcount
        print(count, f"Empleado con id '{id}' eliminado con éxito")

    except (Exception, psycopg2.Error) as error:
            print("Error while fetching data from PostgreSQL", error)

    finally:
            # closing database connection.
        if conn:
            cursor.close()
            conn.close()
            print("PostgreSQL connection is closed")
def update_empleado(id, nombre):
    try:
        conn = psycopg2.connect(
            database="empresa",
            user='postgres',
            password='clase23',
            host='localhost',
            port='5432'
        )
        cursor = conn.cursor()
        update_query = """UPDATE empleados SET nombre = %s where id = %s"""
        data = (nombre, id)
        cursor.execute(update_query, data)
        conn.commit()
        count = cursor.rowcount
        print(count, "Record Updated successfully ")

    except (Exception, psycopg2.Error) as error:
            print("Error while fetching data from PostgreSQL", error)

    finally:
            # closing database connection.
        if conn:
            cursor.close()
            conn.close()
            print("PostgreSQL connection is closed")

app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["DEBUG"] = True

## /all (GET): Devuelve todos los empleados.
@cross_origin()
@app.route('/all', methods=['GET'])
def all():
    resultado_dic = select_all()
    return jsonify(resultado_dic)

## /all/id (GET): Devuelve un empleado por id
@cross_origin()
@app.route('/all/<int:id>', methods=['GET'])
def get_id(id):
    resultado_dic = select_id(id)
    return jsonify(resultado_dic)

## /insert (POST): Inserta un empleado
@cross_origin()
@app.route('/all/insert', methods=['POST'])
def insert():
    insert_new(request.json.get('nombre'), request.json.get('apellidos'), request.json.get('trabaja_desde'))
    return jsonify({'result': 'ok'})

## /delete (DELETE): Borra un empleado
@cross_origin()
@app.route('/all/delete/<int:id>', methods=['DELETE'])
def delete(id):
    delete_empleado(id)
    return jsonify({"message": f"Empleado con id '{id}' eliminado con éxito"})

## /update/id/nombre (PUT): Actualiza el nombre de un empleado localizado por id
@cross_origin()
@app.route('/all/update/<int:id>/<string:nombre>', methods=['PUT'])
def update(id, nombre):
    update_empleado(id, nombre)
    return jsonify({"result": f"Empleado con id '{id}' actualizado con éxito"})

app.run()