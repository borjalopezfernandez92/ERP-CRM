# Escribir un programa que pregunte al usuario su nombre, edad, dirección y teléfono y lo guarde en un diccionario. Después debe mostrar por pantalla el mensaje <nombre> tiene <edad> años, vive en <dirección> y su número de teléfono es <teléfono>.

dicData = {}
nombreInput = input("Introduce tu nombre: ")
edadInput = input("Introduce tu edad: ")
dirInput = input("Introduce tu dirección: ")
telInput = input("Introduce tu número de teléfono:")

dicData["Nombre"] = nombreInput
dicData["Edad"] = edadInput
dicData["Dirección"] = dirInput
dicData["Teléfono"] = telInput

print(f"{dicData.get("Nombre")} tiene {dicData.get("Edad")} años, vive en {dicData.get("Dirección")} y su número de teléfono es {dicData.get("Teléfono")}")