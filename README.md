https://github.com/unijeje/clienteP2
# Clientes Segunda Practica

Al usar XML sin base de datos, no funciona en Chrome.

index.html – Contiene todo el código HTML de la aplicación, distribuido por capas que se irán ocultando o mostrando a conveniencia.

datos.xml > Contiene información con todos los datos iniciales.

Gestion Autobuses.pdf > Esquema XML

CSS/ > archivos Bootstrap y css propio

IMG/ > Imagen portada de la aplicación

JS/ > archivos JS

JS/clases > todas las clases definidas del proyecto. La principal donde se cargan todos los datos es gestion.js

JS/gestion > se distribuyen las gestiones de enlace entre el usuario y las clases. En conductor se gestiona vacaciones y autobuses mantenimiento

JS/listados > para mostrar los diferentes listados. Conductores tiene un filtro para mostrar solo los que estén en activo. Alquileres tiene otro para mostrar solo el que se seleccione. Ingresos y gastos tiene para ordenar por fecha(mm/dd/yyyy).

principal contiene funciones que se usan en común desde varios lugares como reset de combos o ocultar/mostrar formularios según proceda.

datosIniciales carga los datos del XML.

# Fechas: 
No hay validación de fecha en expresión regular porque se espera que el usuario tenga activado el datepicker de input type="date" por defecto.
Para activar esto en firefox: escribir about:config en el navegador, buscar dom.forms.datetime y set a true.
En caso de no activar esto introducir las fechas como viene en el placeholder mm/dd/yyyy

# Cuenta y apuntes
Al crear una gestion se le introduce el nº de cuenta de la empresa que lo este utilizando, este se recoge del XML.
Gestion tendra una cuenta donde se agregaran apuntes, cada apunte es una transacción realizada:

Cada vez que se realiza un alquiler Gestion recibira un ingreso dependiendo del número de horas y kilómetros, así como el número de autobuses que se ha tenido que usar. > calcularImporteAlquileEmpresa(numAutobuses, sHoras, kms)

Con cada alquiler Gestion hará un pago a cada conductor por igual dependiendo del número de horas del alquiler >  calcularImporteAlquilerConductor(sHoras)

Cada mantenimiento restará el coste de este a Gestion.

Cada conductor también tendrá una cuenta guardada en el sistema con todos los pagos recibidos.
