import flask
from flask import request, jsonify
from flask_cors import CORS ##instalado flask_cors


app = flask.Flask(__name__)
CORS(app) # activado aquí

app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
 return jsonify({'message:' 'EJERCICIO CRUD'}) # me daba error y traté de convertirlo en un error

app.run()
