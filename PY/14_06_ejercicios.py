# Ejercicio 1
#Escribir un programa que muestre por pantalla la cadena ¡Hola Mundo!.
print("Ejercicio 1: ¡Hola Mundo!")

# Ejercicio 2
#Escribir un programa que almacene la cadena ¡Hola Mundo! en una variable y luego muestre por pantalla el contenido de la variable.
cadena1 =  "Ejercicio 2: ¡Hola Mundo!"
print(cadena1)

# Ejercicio 3
# Escribir un programa que pregunte el nombre del usuario en la consola y después de que el usuario lo introduzca muestre por pantalla la cadena ¡Hola <nombre>!, donde <nombre> es el nombre que el usuario haya introducido.
print("Ejercicio 3:")
nombre = input("Introduce tu nombre: ")
print(f"¡Hola {nombre} !")

# Ejercicio 4
# Escribir un programa que muestre por pantalla el resultado de la siguiente operación aritmética (3+2/2-5)²
print("Ejercicio 4:")
n1 = 3+2
n2 = 2-5
n3 = n1/n2
n4 = n3*n3

print(n4)

# Ejercicio 5
# Escribir un programa que pregunte al usuario por el número de horas trabajadas y el coste por hora. Después debe mostrar por pantalla la paga que le corresponde.
print("Ejercicio 5: ")
nHoras = int(input("Introduce el número de horas trabajadas "))
nCoste = int(input("Introduce el coste por hora "))
print(f"La paga que te corresponde es:  {nHoras*nCoste}")

# Ejercicio 6
# Escribir un programa que lea un entero positivo, , introducido por el usuario y después muestre en pantalla la suma de todos los enteros desde 1 hasta . La suma de los primeros enteros positivos puede ser calculada de la siguiente forma: suma = n(n+1)/2

print("Ejercicio 6: ")
n = int(input("Introduce un entero positivio."))
suma = n * (n+1) / 2
print(f"La suma es: {suma}")

# Ejercicio 7
# Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice de masa corporal y lo almacene en una variable, y muestre por pantalla la frase Tu índice de masa corporal es <imc> donde <imc> es el índice de masa corporal calculado redondeado con dos decimales.
print("Ejercicio 7: ")
p = int(input("Introduce tu peso en kg. "))
e = int(input("Introduce tu estatura en metros. "))
imc = p * (e*e)
print(f"Tu índice de masa corporal es {imc} ")

# Ejercicio 8
# Escribir un programa que pida al usuario dos números enteros y muestre por pantalla la <n> entre <m> da un cociente <c> y un resto <r> donde <n> y <m> son los números introducidos por el usuario, y <c> y <r> son el cociente y el resto de la división entera respectivamente.

print ("Ejercicio 8: ")
e8n1 = int(input("Introduce un número entero: "))
e8n2 = int(input("Introduce un segundo número enero: "))
c = e8n1 // e8n2 # cociente división
r = e8n1 % e8n2 # resto división
print(f"{e8n1} entre {e8n2} da un cociente {c} y un resto {r}.")

# Ejercicio 9
# Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el número de años, y muestre por pantalla el capital obtenido en la inversión.

print ("Ejercicio 9: ")
e9n1 = int(input("Introduce la cantidad a invertir: "))
e9n2 = int(input("Introduce el interés anual: "))
e9n3 = int(input("Introduce el número de años: "))
res9 = (((e9n2/e9n1)* 100) * e9n3)

print(f"El capital obtenido en la inversión es: {res9} €")

# Ejercicio 10
# Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por correo y la empresa de logística les cobra por peso de cada paquete así que deben calcular el peso de los payasos y muñecas que saldrán en cada paquete a demanda. Cada payaso pesa 112 g y cada muñeca 75 g. Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y calcule el peso total del paquete que será enviado.

payaso = int(input("Introduce el número de payasos vendidos: "))
muneca = int(input("Introduce el número de muñecas vendidos: "))
calc = (112 * payaso) + (75 * muneca)
print(f"El peso del pedido es {calc} gramos.")

# Ejercicio 11
# Imagina que acabas de abrir una nueva cuenta de ahorros que te ofrece el 4% de interés al año. Estos ahorros debido a intereses, que no se cobran hasta finales de año, se te añaden al balance final de tu cuenta de ahorros. Escribir un programa que comience leyendo la cantidad de dinero depositada en la cuenta de ahorros, introducida por el usuario. Después el programa debe calcular y mostrar por pantalla la cantidad de ahorros tras el primer, segundo y tercer años. Redondear cada cantidad a dos decimales.

ahorros = int(print("Introduce la cantidad de dinero en la cuenta de ahorros."))
