# Escribir un programa que guarde en un diccionario los precios de las frutas de la tabla, pregunte al usuario por una fruta, un número de kilos y muestre por pantalla el precio de ese número de kilos de fruta. Si la fruta no está en el diccionario debe mostrar un mensaje informando de ello.


diccionarioFruta = {'plátano': 1.35, 'manzana': 0.80, 'pera': 0.85, 'naranja': 0.70}

frutaInput = input("Escoge una fruta:\n Plátano\n Manzana\n Pera\n Naranja\n")
kilos = int(input("Escoge un número de kilos: "))
frutaLower = frutaInput.lower()


for fruta, precio in diccionarioFruta.items():
    if frutaLower == "plátano":
        plat = diccionarioFruta.get('plátano')
        calc = kilos * plat
        print(f"El precio de {kilos} kg de {frutaInput} es: {calc}")
        break
    elif frutaLower == "manzana":
        manz = diccionarioFruta.get('manzana')
        calc = kilos * manz
        print(f"El precio de {kilos} kg de {frutaInput} es: {calc}")
        break
    elif frutaLower == "pera":
        pera = diccionarioFruta.get('pera')
        calc = kilos * pera
        print(f"El precio de {kilos} kg de {frutaInput} es: {calc}")
        break
    elif frutaLower =="naranja":
        nar = diccionarioFruta.get('naranja')
        calc = kilos * nar
        print(f"El precio de {kilos} kg de {frutaInput} es: {calc}")
        break
    else:
        print("Fruta no encontrada.")
        break


        
#if fruta == "plátano":
#    calc = kilos * precios[0]
#    print(f"El precio de {kilos} kg de {fruta} es: {calc}")
#elif fruta == "Manzana":
#    calc = kilos * precios[1]
#    print(f"El precio de {kilos} kg de {fruta} es: {calc}")
#elif fruta == "Pera":
#    calc = kilos * precios[2]
#    print(f"El precio de {kilos} kg de {fruta} es: {calc}")
#else:
#    calc = kilos * precios[3]
#    print(f"El precio de {kilos} kg de {fruta} es: {calc}")