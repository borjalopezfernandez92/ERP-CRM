import psycopg2

#editInput = input("Introduzca el nombre de la tabla en la que quiera realizar una edición: ")
#deleteInput = input("Introduzca el nombre de la tabla que quiera eliminar: ")

################################################################################ FUNCTIONS ################################################################################
def mainMenu():
    menuInput = input("Bienvenido al CRUD de la base de datos 'crud'.\n Escoja la operación a realizar tecleando el número correspondiente: \n(1) Insertar Datos\n (2) Actualizar Datos\n (3) Eliminar Datos\n (4) Buscar datos.\n")
    menuInputInt = int(menuInput)
    if menuInputInt == 1:
        insertTo()
    elif menuInputInt == 2:
        updateTo()
    elif menuInputInt == 3:
        deleteTo()
    elif menuInputInt == 4:
        selectTo()
    else:
        print(f'El número introducido " {menuInput} " no corresponde a ninguna operación programada, por favor, intentelo de nuevo.')
        mainMenu()

############## INSERTS ############
def insertTo():
    insertInput = input("Escoge la tabla en la que quieres realizar una inserción: \n(1) Clientes\n (2) Productos\n (3) Proveedores\n (4) Compras.\n (5) Suministros.\n")
    insertInputInt = int(insertInput)
    
    if insertInputInt == 1: # clientes
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

    elif insertInputInt == 2: # productos
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

    elif insertInputInt == 3: ## proveedores
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

    elif insertInputInt == 4: # compras
        inputIdClienteCompra = input("Introduzca la información que quiera insertar en el campo 'ID cliente': \n")
        inputCodigoProductoCompra = input("Introduzca la información que quiera insertar en el campo 'Codigo Producto': \n")
        inputCantidadCompra = input("Introduzca la información que quiera insertar en el campo 'Cantidad': \n")
        inputFechaCompra = input("Introduzca la información que quiera insertar en el campo 'Fecha de compra': \n")


        compras_insert_query = """ INSERT INTO Compras(id_cliente, codigo_producto, cantidad, fecha_compra) 
            VALUES (%s, %s, %s, %s)"""
        record_to_insert = [(inputIdClienteCompra, inputCodigoProductoCompra, inputCantidadCompra, inputFechaCompra)]
        for i in record_to_insert:
            cursor.execute(compras_insert_query, i)
            connection.commit()
            count = cursor.rowcount
        print(count, "Record inserted successfully \
        into compras table")

    elif insertInputInt == 5: # Suministros
        insertCodigoSuministros = input("Introduzca el código del producto a insertar: \n")
        insertNifSuministros = input("Introduzca el nif del proveedor a insertar: \n")

        suministros_insert_query = """ INSERT INTO Suministros(codigo_producto, nif_proveedor)
            VALUES (%s, %s)"""
        record_to_insert = [(insertCodigoSuministros, insertNifSuministros)]
        for i in record_to_insert:
            cursor.execute(suministros_insert_query, i)
            connection.commit()
            count = cursor.rowcount
            print(count, "Record updated successfully \
            into Clientes table")
    
    else:
        print(f"La tabla '{insertInput}' no existe en la base de datos, vuelve a intentarlo.")
        insertTo()

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

def printProductos():
    postgreSQL_select_Query = "SELECT * from Productos"
    cursor.execute(postgreSQL_select_Query)
    productos_records = cursor.fetchall()

    for row in productos_records:
        print("código = ", row[0], )
        print("nombre = ", row[1])
        print("precio_unitario = ", row[2], "\n")

def printProveedores():
    postgreSQL_select_Query = "SELECT * from Proveedores"
    cursor.execute(postgreSQL_select_Query)
    proveedores_records = cursor.fetchall()

    for row in proveedores_records:
        print("nif = ", row[0], )
        print("nombre = ", row[1])
        print("direccion = ", row[2], "\n")

def printCompras():
    postgreSQL_select_Query = "SELECT * from Compras"
    cursor.execute(postgreSQL_select_Query)
    compras_records = cursor.fetchall()

    for row in compras_records:
        print("id = ", row[0], )
        print("id_cliente = ", row[1])
        print("codigo_producto = ", row[2])
        print("cantidad = ", row[3])
        print("fecha_compra = ", row[4], "\n")

def printSuministros():
    postgreSQL_select_Query = "SELECT * from Suministros"
    cursor.execute(postgreSQL_select_Query)
    suministros_records = cursor.fetchall()

    for row in suministros_records:
        print("id = ", row[0], )
        print("codigo_producto = ", row[1])
        print("nif_proveedor = ", row[2], "\n")

def deleteTo():
    deleteInput = input("Escoge la tabla en la que quieres realizar el borrado: \n(1) Clientes\n (2) Productos\n (3) Proveedores\n (4) Compras.\n (5) Suministros.\n")
    deleteInputInt = int(deleteInput)

    if deleteInputInt == 1:
        print(f'en la tabla escogida (clientes) existen los siguientes datos: ')
        printClientes()
        delCli = input("Introduzca el ID del cliente que desea eliminar: ")
        sql_delete_query = """Delete from clientes\
            where id = %s"""
        cursor.execute(sql_delete_query, (delCli,))
        connection.commit()
        count = cursor.rowcount
        print(count, f'Cliente con ID: {delCli} eliminado sin problema.')

    elif deleteInputInt == 2:
        print(f'en la tabla escogida (Productos) existen los siguientes datos: ')
        printProductos()
        delProd = input("Introduzca el código del producto que desea eliminar: ")
        sql_delete_query = """Delete from productos\
            where codigo = %s"""
        cursor.execute(sql_delete_query, (delProd,))
        connection.commit()
        count = cursor.rowcount
        print(count, f'Producto con el código: {delProd} eliminado sin problema.')

    elif deleteInputInt == 3:
        print(f'en la tabla escogida (Proveedores) existen los siguientes datos: ')
        printProveedores()
        delProv = input("Introduzca el nif del cliente que desea eliminar: ")
        sql_delete_query = """Delete from proveedores\
            where nif = %s"""
        cursor.execute(sql_delete_query, (delProv,))
        connection.commit()
        count = cursor.rowcount
        print(count, f'Proveedor con el nif: {delProv} eliminado sin problema.')

    elif deleteInputInt == 4:
        print(f'en la tabla escogida (Compras) existen los siguientes datos: ')
        printCompras()
        delComp = input("Introduzca el id de la compra que desea eliminar: ")
        sql_delete_query = """Delete from compras\
            where id = %s"""
        cursor.execute(sql_delete_query, (delComp,))
        connection.commit()
        count = cursor.rowcount
        print(count, f'Compra con el ID: {delComp} eliminada sin problema.')

    elif deleteInputInt == 5:
        print(f'en la tabla escogida (Suministros) existen los siguientes datos: ')
        printSuministros()
        delSumi = input("Introduzca el id del suministro desea eliminar: ")
        sql_delete_query = """Delete from suministros\
            where id = %s"""
        cursor.execute(sql_delete_query, (delSumi,))
        connection.commit()
        count = cursor.rowcount
        print(count, f'Suministro con el ID: {delSumi} eliminado sin problema.')
    else:
        print(f"La tabla '{deleteInput}' no existe en la base de datos, vuelve a intentarlo.")
        deleteTo()        

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
    productos_records = cursor.fetchall()
    connection.commit()

    
    for row in productos_records:
        print("codigo = ", row[0], )
        print("nombre = ", row[1])
        print("precio_unitario = ", row[2], "\n")

def selectNameProveedores():
    nameInput = input("Introduce el nombre del proveedor a buscar: ")
    postgreSQL_select_Query = f"SELECT * from Proveedores WHERE nombre = '{nameInput}'"
    cursor.execute(postgreSQL_select_Query,)
    proveedores_records = cursor.fetchall()
    connection.commit()

    
    for row in proveedores_records:
        print("nif = ", row[0], )
        print("nombre = ", row[1])
        print("direccion = ", row[2], "\n")

def selectNameCompras():
    nameInput = input("Introduce el id del cliente a buscar: ")
    postgreSQL_select_Query = f"SELECT * from Compras WHERE id_cliente = '{nameInput}'"
    cursor.execute(postgreSQL_select_Query,)
    compras_records = cursor.fetchall()
    connection.commit()

    
    for row in compras_records:
        print(f"Los datos de la compra realizada con id del cliente {nameInput} son los siguientes:")

        print("id_cliente = ", row[1], )
        print("codigo_producto = ", row[2])
        print("cantidad = ", row[3])
        print("fecha_compra = ", row[4], "\n")

def selectNameSuministros():
    nameInput = input("Introduce el código del producto a buscar: ")
    postgreSQL_select_Query = f"SELECT * from Suministros WHERE codigo_producto = '{nameInput}'"
    cursor.execute(postgreSQL_select_Query,)
    suministros_records = cursor.fetchall()
    connection.commit()

    
    for row in suministros_records:
        print(f"Los datos del producto con id {nameInput} son los siguientes:")

        print("id del suministro = ", row[0], )
        print("nif del proveedor = ", row[2], "\n")


def selectTo():
    selectInput = input("Escoge la tabla en la que quieres realizar la búsqueda: \n(1) Clientes\n (2) Productos\n (3) Proveedores\n (4) Compras\n (5) Suministros\n")
    selectInputInt = int(selectInput)

    if selectInputInt == 1 :
        selectNameClientes()
    elif selectInputInt == 2 :
        selectNameProductos()
    elif selectInputInt == 3 :
        selectNameProveedores()
    elif selectInputInt == 4 :
        selectNameCompras()
    elif selectInputInt == 5 :
        selectNameSuministros()
    else:
        print(f"La tabla escogida {selectInputInt} no existe, escoga una tabla válida.")
        selectTo()

############## UPDATE ############
def updateTo():
    updateInput = input("Escoge la tabla en la que quieres actualizar datos: \n(1) Clientes\n (2) Productos\n (3) Proveedores\n (4) Compras\n (5) Suministros\n")
    updateInputInt = int(updateInput)

    if updateInputInt == 1 : ### Clientes
        print("En la tabla escogida (clientes) existen los siguientes datos: \n")
        printClientes()
        chooseUpCli = input("Escoge un campo a actualizar: (1) id, (2) nombre, (3) apellidos, (4) dni, (5) direccion, (6) fecha de nacimiento \n")
        upCliToInt = int(chooseUpCli)

        if upCliToInt == 1:
            newId = input("Introduce el nuevo ID: \n")
            postgreSQL_update_Query = f"UPDATE clientes SET id = '{newId}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()

        if upCliToInt == 2:
            newName = input("Introduce el nuevo nombre: \n")
            postgreSQL_update_Query = f"UPDATE clientes SET nombre = '{newName}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()

        elif upCliToInt == 3:
            newSurname = input("Introduce los nuevos apellidos: \n")
            postgreSQL_update_Query = f"UPDATE clientes SET apellidos = '{newSurname}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()

        elif upCliToInt == 4:
            newDni = input("Introduce el nuevo DNI: \n")
            postgreSQL_update_Query = f"UPDATE clientes SET dni = '{newDni}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()

        elif upCliToInt == 5:
            newAddress = input("Introduce la nueva dirección: \n")
            postgreSQL_update_Query = f"UPDATE clientes SET direccion = '{newAddress}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()

        elif upCliToInt == 6:
            newBirthdate = input("Introduce la nueva fecha de nacimiento en formato (aaaa-mm-dd): \n")
            postgreSQL_update_Query = f"UPDATE clientes SET fecha_nacimiento = '{newBirthdate}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()
        else:
            print(f"El campo escogido '{upCliToInt}' no existe en esta tabla, prueba de nuevo.")
            updateTo()

    elif updateInputInt == 2 : ###Productos
        print("En la tabla escogida (Productos) existen los siguientes datos: \n")
        printProductos()
        chooseUpProd = input("Escoge un campo a actualizar: (1) código, (2) nombre, (3) precio unitario \n")
        upProdToInt = int(chooseUpProd)

        if upProdToInt == 1:
            newCode = input("Introduce el nuevo código: \n")
            postgreSQL_update_Query = f"UPDATE Productos SET codigo = '{newCode}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()
    
        if upProdToInt == 2:
            newName = input("Introduce el nuevo nombre: \n")
            postgreSQL_update_Query = f"UPDATE Productos SET nombre = '{newName}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()

        if upProdToInt == 3:
            newName = input("Introduce el precio unitario: \n")
            newNameToFlt = float(newName)
            postgreSQL_update_Query = f"UPDATE Productos SET precio_unitario = '{newNameToFlt}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()
        else:
            print(f"El campo escogido '{upProdToInt}' no existe en esta tabla, prueba de nuevo.")
            updateTo()

    elif updateInputInt == 3 : ## Proveedores
        print("En la tabla escogida (Proveedores) existen los siguientes datos: \n")
        printProveedores()
        chooseUpProv = input("Escoge un campo a actualizar: (1) nif, (2) nombre, (3) dirección \n")
        upProvToInt = int(chooseUpProv)

        if upProvToInt == 1:
            newNif = input("Introduce el nuevo nif: \n")
            postgreSQL_update_Query = f"UPDATE Proveedores SET nif = '{newNif}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()

        if upProvToInt == 2:
            newName = input("Introduce el nuevo nombre: \n")
            postgreSQL_update_Query = f"UPDATE Proveedores SET nombre = '{newName}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()
    
        if upProvToInt == 3:
            newAdd = input("Introduce la nueva dirección: \n")
            postgreSQL_update_Query = f"UPDATE Proveedores SET direccion = '{newAdd}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()    
    
    elif updateInputInt == 4 : ## Compras
        print("En la tabla escogida (Compras) existen los siguientes datos: \n")
        printCompras()
        chooseUpCom = input("Escoge un campo a actualizar: (1) id, (2) id de cliente, (3) codigo del producto, (4) cantidad, (5) fecha de compra \n")
        upComToInt = int(chooseUpCom)
        
        if upComToInt == 1:
            newId = input("Introduce el nuevo ID: \n")
            postgreSQL_update_Query = f"UPDATE Compras SET id = '{newId}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()

        if upComToInt == 2:
            newClientId = input("Introduce el nuevo ID de cliente: \n")
            postgreSQL_update_Query = f"UPDATE Compras SET id_cliente = '{newClientId}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()

        if upComToInt == 3:
            newProdCod = input("Introduce el nuevo código del producto: \n")
            postgreSQL_update_Query = f"UPDATE Compras SET codigo_producto = '{newProdCod}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()

        if upComToInt == 4:
            newQuant = input("Introduce la nueva cantidad: \n")
            postgreSQL_update_Query = f"UPDATE Compras SET cantidad = '{newQuant}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()

        if upComToInt == 5:
            newDate = input("Introduce la nueva fecha de compra en formato (aaaa-mm-dd): \n")
            postgreSQL_update_Query = f"UPDATE Compras SET fecha_compra = '{newDate}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()
    
    elif updateInputInt == 5 : ## Suministros
        print("En la tabla escogida (Suministros) existen los siguientes datos: \n")
        printSuministros()
        chooseUpSum = input("Escoge un campo a actualizar: (1) id, (2) codigo del producto, (3) nif del proveedor \n")
        upSumToInt = int(chooseUpSum)

        if upSumToInt == 1:
            newId = input("Introduce el nuevo ID: \n")
            postgreSQL_update_Query = f"UPDATE Suministros SET id = '{newId}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()

        if upSumToInt == 2:
            newCode = input("Introduce el nuevo código del producto: \n")
            postgreSQL_update_Query = f"UPDATE Suministros SET codigo_producto = '{newCode}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()
        
        if upSumToInt == 3:
            newNif = input("Introduce el nuevo nif del proveedor: \n")
            postgreSQL_update_Query = f"UPDATE Suministros SET nif_proveedor = '{newNif}'"
            cursor.execute(postgreSQL_update_Query,)
            connection.commit()
    else:
        print(f"La tabla escogida {updateInputInt} no existe, escoga una tabla válida.")
        selectTo()


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











