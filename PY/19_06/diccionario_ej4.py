# Escribir un programa que pregunte una fecha en formato dd/mm/aaaa y muestre por pantalla la misma fecha en formato dd de <mes> de aaaa donde <mes> es el nombre del mes.

fechaInput = input("Introduce una fecha en formato dd/mm/aaaa.")

dicMes = {
    "01": "Enero", "02": "Febrero", "03": "Marzo", "04": "Abril", "05": "Mayo", "06": "Junio", "07": "Julio", "08": "Agosto", "09": "Septiembre", "10": "Octubre", "11": "Noviembre", "12": "Diciembre"
}

getDay = (fechaInput[0:2])
getMonth = (fechaInput[3:5])
getYear = (fechaInput[6:10])

for number, month in dicMes.items():
    if getMonth == "01":
        print(f"{getDay} de {dicMes.get("01")} de {getYear}")
        break
    elif getMonth == "02":
        print(f"{getDay} de {dicMes.get("02")} de {getYear}")
        break
    elif getMonth == "03":
        print(f"{getDay} de {dicMes.get("03")} de {getYear}")
        break
    elif getMonth == "04":
        print(f"{getDay} de {dicMes.get("04")} de {getYear}")
        break
    elif getMonth == "05":
        print(f"{getDay} de {dicMes.get("05")} de {getYear}")
        break
    elif getMonth == "06":
        print(f"{getDay} de {dicMes.get("06")} de {getYear}")
        break
    elif getMonth == "07":
        print(f"{getDay} de {dicMes.get("07")} de {getYear}")
        break
    elif getMonth == "08":
        print(f"{getDay} de {dicMes.get("08")} de {getYear}")
        break
    elif getMonth == "09":
        print(f"{getDay} de {dicMes.get("09")} de {getYear}")
        break
    elif getMonth == "10":
        print(f"{getDay} de {dicMes.get("10")} de {getYear}")
        break
    elif getMonth == "11":
        print(f"{getDay} de {dicMes.get("11")} de {getYear}")
        break
    elif getMonth == "12":
        print(f"{getDay} de {dicMes.get("12")} de {getYear}")
        break
    else:
        print(f"tu fecha {fechaInput} no se encuentra en un formato correcto (dd/mm/aaaa).")
        break
