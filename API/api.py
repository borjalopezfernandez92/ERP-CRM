
import flask
from flask import request, jsonify
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["DEBUG"] = True

empleados = [
   {'id': 0,
	'nombre': 'Davinia',
	'apellidos': 'de la Rosa',
	'trabaja_desde': '5'},
   {'id': 1,
	'nombre': 'Maria',
	'apellidos': 'Ramirez',
	'trabaja_desde': '4'},
   {'id': 2,
	'nombre': 'Lucas',
	'apellidos': 'Ruiz',
	'trabaja_desde': '4'}
]
# Ruta por defecto
@app.route('/', methods=['GET'])
@cross_origin()
def home():
 return '''<h1>API REST</h1><p>Ejemplo de API REST 2</p>'''

# Ruta para obtener todos los empleados
@app.route('/all', methods=['GET'])
@cross_origin()
def api_all():
   return jsonify(empleados)

@app.route('/insert', methods=['POST'])
def api_insert():
	 # Obtener el dato del formulario del atributo name del input
    nombre = request.form.get('nombre')
    # Crear un diccionario con los datos
    data = {'nombre': nombre}
    # Devolver los datos en formato JSON
    return jsonify(data)

app.run()

