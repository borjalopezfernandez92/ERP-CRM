import psycopg2

#editInput = input("Introduzca el nombre de la tabla en la que quiera realizar una edición: ")
#deleteInput = input("Introduzca el nombre de la tabla que quiera eliminar: ")

################################################################################ FUNCTIONS ################################################################################

def mainMenu():
    menuInput = input("Bienvenido al CRUD de la base de datos 'crud'.\n Escoja la operación a realizar tecleando el número correspondiente: \n(1) Insertar Datos\n (2) Actualizar Datos\n (3) Eliminar Datos\n (4) Buscar datos.\n")
    menuInputLower = menuInput.lower()
    if menuInputLower == "1":
        insertTo()
    elif menuInputLower == "2":
        updateTo()
    elif menuInputLower == "3":
        deleteTo()
    elif menuInputLower == "4":
        selectTo()
    else:
        print(f'El número introducido {menuInput} no corresponde a ninguna operación programada.')
        mainMenu()

############## INSERTS ############
def insertTo():
    insertInput = input("Escoge la tabla en la que quieres realizar una inserción: \n(1) Clientes\n (2) Productos\n (3) Proveedores\n (4) Compras.\n")
    insertInputLower = insertInput.lower()
    if insertInputLower == "1": # clientes
        inputNombreClientes = input("Introduzca la información que quiera insertar en el campo 'nombre': ")
        inputApellidoClientes = input("Introduzca la información que quiera insertar en el campo 'apellidos': ")
        inputDniClientes = input("Introduzca la información que quiera insertar en el campo 'dni': ")
        inputDireccionClientes = input("Introduzca la información que quiera insertar en el campo 'direccion': ")
        inputFechaNacimientoClientes = input("Introduzca la información que quiera insertar en el campo 'fecha de nacimiento', por favor utilice el formato (aaaa-mm-dd): ")

        clientes_insert_query = """ INSERT INTO Clientes(nombre, apellidos, dni, direccion, fecha_nacimiento) 
            VALUES (%s, %s, %s, %s, %s)"""
        record_to_insert = [(inputNombreClientes, inputApellidoClientes, inputDniClientes, inputDireccionClientes, inputFechaNacimientoClientes)]
        for i in record_to_insert:
            cursor.execute(clientes_insert_query, i)
            connection.commit()
            count = cursor.rowcount
        print(count, "Record inserted successfully \
        into Clientes table")

    elif insertInputLower == "2": # productos
        inputNombreProductos = input("Introduzca la información que quiera insertar en el campo 'nombre': ")
        inputPrecioProductos = input("Introduzca la información que quiera insertar en el campo 'precio unitario': ")


        productos_insert_query = """ INSERT INTO Productos(nombre, precio_unitario) 
            VALUES (%s, %s)"""
        record_to_insert = [(inputNombreProductos, inputPrecioProductos)]
        for i in record_to_insert:
            cursor.execute(productos_insert_query, i)
            connection.commit()
            count = cursor.rowcount
        print(count, "Record inserted successfully \
        into Productos table")

    elif insertInputLower == "3": ## proveedores
        inputNifProveedores = input("Introduzca la información que quiera insertar en el campo 'nif': ")
        inputNombreProveedores = input("Introduzca la información que quiera insertar en el campo 'nombre': ")
        inputDireccionProveedores = input("Introduzca la información que quiera insertar en el campo 'dirección': ")


        proveedores_insert_query = """ INSERT INTO Proveedores(nif, nombre, direccion) 
            VALUES (%s, %s, %s)"""
        record_to_insert = [(inputNifProveedores, inputNombreProveedores, inputDireccionProveedores)]
        for i in record_to_insert:
            cursor.execute(proveedores_insert_query, i)
            connection.commit()
            count = cursor.rowcount
        print(count, "Record inserted successfully \
        into Proveedores table")

    elif insertInputLower == "4": # compras
        inputCantidadCompra = input("Introduzca la información que quiera insertar en el campo 'Cantidad': ")
        inputFechaCompra = input("Introduzca la información que quiera insertar en el campo 'Fecha de compra': ")

        compras_insert_query = """ INSERT INTO Compras(Cantidad, fecha_compra) 
            VALUES (%s, %s)"""
        record_to_insert = [(inputCantidadCompra, inputFechaCompra)]
        for i in record_to_insert:
            cursor.execute(proveedores_insert_query, i)
            connection.commit()
            count = cursor.rowcount
        print(count, "Record inserted successfully \
        into compras table")

#    elif insertInputLower == "suministros":
#        insertCampoSuministros = input("Teclee el número del campo en el que realizar la inserción: \n 'codigo productos(1)'\n 'nif proveedor(2)' ")
    
    else:
        print(f"La tabla {insertInput} no existe en la base de datos.")

############## DELETE ############
def printClientes():
    postgreSQL_select_Query = "SELECT * from clientes"
    cursor.execute(postgreSQL_select_Query)
    clientes_records = cursor.fetchall()

    for row in clientes_records:
        print("id = ", row[0], )
        print("nombre = ", row[1])
        print("apellidos = ", row[2])
        print("dni = ", row[3])
        print("direccion = ", row[4])
        print("fecha_nacimiento = ", row[5], "\n")


def deleteTo():
    deleteInput = input("Escoge la tabla en la que quieres realizar el borrado: \n(1) Clientes\n (2) Productos\n (3) Proveedores\n (4) Compras.\n")
    deleteInputLower = deleteInput.lower()

    if deleteInputLower == "1":
        #datos_clientes = printClientes()
        print(f'en la tabla escogida (clientes) existen los siguientes datos: ')
        printClientes()
        delId = input("Introduzca el ID de los datos que desea eliminar: ")
        sql_delete_query = """Delete from clientes\
            where id = %s"""
        cursor.execute(sql_delete_query, (delId,))
        connection.commit()
        count = cursor.rowcount
        print(count, f'ID: {delId} deleted successfully')


############## SELECT ############
def selectNameClientes():
    nameInput = input("Introduce el nombre a buscar: ")
    postgreSQL_select_Query = f"SELECT * from Clientes WHERE nombre = '{nameInput}'"
    cursor.execute(postgreSQL_select_Query,)
    clientes_records = cursor.fetchall()
    connection.commit()

    
    for row in clientes_records:
        print("id = ", row[0], )
        print("nombre = ", row[1])
        print("apellidos = ", row[2])
        print("dni = ", row[3])
        print("direccion = ", row[4])
        print("fecha_nacimiento = ", row[5], "\n")
    
def selectNameProductos():
    nameInput = input("Introduce el nombre del producto a buscar: ")
    postgreSQL_select_Query = f"SELECT * from Productos WHERE nombre = '{nameInput}'"
    cursor.execute(postgreSQL_select_Query,)
    clientes_records = cursor.fetchall()
    connection.commit()

    
    for row in clientes_records:
        print("codigo = ", row[0], )
        print("nombre = ", row[1])
        print("precio_unitario = ", row[2], "\n")

def selectNameProveedores():
    nameInput = input("Introduce el nombre del proveedor a buscar: ")
    postgreSQL_select_Query = f"SELECT * from Proveedores WHERE nombre = '{nameInput}'"
    cursor.execute(postgreSQL_select_Query,)
    clientes_records = cursor.fetchall()
    connection.commit()

    
    for row in clientes_records:
        print("nif = ", row[0], )
        print("nombre = ", row[1])
        print("direccion = ", row[2], "\n")

def selectTo():
    selectInput = input("Escoge la tabla en la que quieres realizar la búsqueda: \n(1) Clientes\n (2) Productos\n (3) Proveedores\n (4) Compras\n (5) Suministros")
    selectInputLower = selectInput.lower()

    if selectInputLower == "1":
        selectNameClientes()
    elif selectInputLower == "2":
        selectNameProductos()
    elif selectInputLower == "3":
        selectNameProveedores()
    elif selectInputLower == "4":
        selectNameCompras()
    elif selectInputLower:
        selectNameSuministros()######## HERE




################################################################################ MAIN CRUD ################################################################################


try:
    # Establishing the connection
    connection = psycopg2.connect(user="postgres",  
								password="clase23",
								host="127.0.0.1",
								port="5432",
								database="crud")
    cursor = connection.cursor()

    mainMenu()



except (Exception, psycopg2.Error) as error:
    print("Failed to open main menu", error)

finally:
	# closing database connection.
	if connection:
		cursor.close()
		connection.close()
		print("PostgreSQL connection is closed")











