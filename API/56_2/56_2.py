import flask, psycopg2
from flask import request, jsonify
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["DEBUG"] = True


# Establishing the connection
connection = psycopg2.connect(user="postgres",  
                            password="clase23",
                            host="127.0.0.1",
                            port="5432",
                            database="empresa")
cursor = connection.cursor()
connection.commit()


# Ruta por defecto
@app.route('/', methods=['GET'])
@cross_origin()
def home():
 return '''<h1>Ejercicio 56_2</h1>'''

############################################################ 1 
## /all (GET): Devuelve todos los empleados.
@app.route('/all', methods=['GET'])
@cross_origin()
def api_all():
    conn = psycopg2.connect(database="empresa", user="postgres", password="clase23", host="localhost", port="5432")
        
    cursor = conn.cursor()
    cursor.execute('''SELECT * FROM empleados''')
    data = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(data)


############################################################ 2
## /all/id (GET): Devuelve un empleado por id
@cross_origin()
@app.route('/all/<int:id>', methods=['GET'])
def get_empleado(id):
    conn = psycopg2.connect(database="empresa", user="postgres", password="clase23", host="localhost", port="5432")
        
    cursor = conn.cursor()
    cursor.execute('''SELECT * FROM empleados WHERE id = %s''', (id,))
    data = cursor.fetchone()
    
    if data:
        return jsonify({"id": data[0], "nombre": data[1], "apellidos": data[2], "trabaja_desde": data[3]})
    else:
        return jsonify({'message': 'Empleado not found'}), 404
    cursor.close()
    conn.close()
    # Filtra la lista de empleados para encontrar su ID
  
    if empleado:
        return jsonify(empleado), 200
    else:
        return jsonify({'message': 'Empleado not found'}), 404
    
############################################################ 3
## /insert (POST): Inserta un empleado
@cross_origin()
@app.route('/all/insert', methods=['POST'])
def post_empleado():
    data = request.get_json()
    cursor.execute('''INSERT INTO empleados (nombre, apellidos, trabaja_desde) VALUES (%s, %s, %s) RETURNING id;''', (data['nombre'], data['apellidos'], data['trabaja_desde']))
    id = cursor.fetchone()[0]
    conn.commit()
    return jsonify({"message": "Empleado implementado con éxito", "empleado": {"id": id, "nombre": data['nombre'], "apellidos": data['apellidos'], "trabaja_desde": data['trabaja_desde']} }), 201



############################################################ 4
## /delete (DELETE): Borra un empleado
@app.route('/all/delete/<int:id>', methods=['DELETE'])
@cross_origin()

def delete_empleado(id):
    global empleados
    empleado_a_eliminar = next((e for e in empleados if e['id'] == id), None)
    if empleado_a_eliminar:
        empleados.remove(empleado_a_eliminar)
        return jsonify({"message": f"empleado {id} eliminado con éxito"}), 200
    else:
        return jsonify({"message": "Empleado no encontrado"}), 404
   
############################################################ 5
## /update/id/nombre (PUT): Actualiza el nombre de un empleado localizado por id

@app.route('/all/update/<int:id>/<string:nombre>', methods=['PUT'])
@cross_origin()
def update_nombre_empleado(id, nombre):
    global empleados
    empleado_a_actualizar = next((e for e in empleados if e['id'] == id), None)
    if empleado_a_actualizar:
        empleado_a_actualizar['nombre'] = nombre
        return jsonify({"message": f"Nombre del empleado {id} actualizado con éxito", "empleado": empleado_a_actualizar}), 201
    else:
        return jsonify({"message": "Empleado no encontrado"}), 404


app.run()
