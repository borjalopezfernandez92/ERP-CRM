# Escribir un programa que guarde en una variable el diccionario {'Euro':'€', 'Dollar':'$', 'Yen':'¥'}, pregunte al usuario por una divisa y muestre su símbolo o un mensaje de aviso si la divisa no está en el diccionario.

DictDiv = {'euro':'€', 'dollar':'$', 'yen':'¥'}
divisaInput = input("Escoge una divisa:\n Euro\n Dollar\n Yen: ")
divLower = divisaInput.lower()


for divisa, simbolo in DictDiv.items():
    if divLower == "euro":
        euro = DictDiv.get('euro')
        print(f'El símbolo de la divisa escogida es: {euro}')
        break
    elif divLower == "dollar":
        doll = DictDiv.get('dollar')
        print(f'El símbolo de la divisa escogida es: {doll}')
        break
    elif divLower == "yen":
        yen = DictDiv.get('yen')
        print(f'El símbolo de la divisa escogida es: {yen}')
        break
    else:
        print("Divisa no encontrada")
        break

