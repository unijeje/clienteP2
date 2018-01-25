//todos 

var btnMostrarActivos=document.getElementById("btnOrdenarConductoresActivos");
btnMostrarActivos.addEventListener("click", mostrarConductoresActivos, false);

function listadoConductores()
{
	
	var tablaEliminar=document.querySelector("TABLE");
	if(tablaEliminar!=null) //si hay una tabla en el div de listados la quita para reemplazarla
		tablaEliminar.remove();

	var cabeceras=[];
	cabeceras[0]="DNI";
	cabeceras[1]="Nombre";
	cabeceras[2]="Apellidos";
	cabeceras[3]="Teléfono";
	cabeceras[4]="Correo";
	cabeceras[5]="Nº Cuenta";
	cabeceras[6]="Sexo";
	cabeceras[7]="Dirección";
	cabeceras[8]="Estado";
	var oCelda;
	var oTexto;

	var oTabla=document.createElement("TABLE");
	var oFila=oTabla.insertRow();
	oFila.classList.add("thead-dark");
	for ( var i=0;i<9;i++){// crea la cabecera la tabla
		oCelda=document.createElement("TD");
		oTexto=document.createTextNode(cabeceras[i]);
		oCelda.appendChild(oTexto);
		oCelda.classList.add("lead");
		oFila.appendChild(oCelda);
	}

	for ( var i=0;i<oGestion._conductores.length;i++){
		oFila=oTabla.insertRow(1);
		oCelda=oFila.insertCell();
		oTexto=document.createTextNode(oGestion._conductores[i].dni);
		oCelda.appendChild(oTexto);
		oCelda=oFila.insertCell();
		oTexto=document.createTextNode(oGestion._conductores[i].nombre);
		oCelda.appendChild(oTexto);
		oCelda=oFila.insertCell();
		oTexto=document.createTextNode(oGestion._conductores[i].apellidos);
		oCelda.appendChild(oTexto);
		oCelda=oFila.insertCell();
		oTexto=document.createTextNode(oGestion._conductores[i].tlf);
		oCelda.appendChild(oTexto);
		oCelda=oFila.insertCell();
		oTexto=document.createTextNode(oGestion._conductores[i].email);
		oCelda.appendChild(oTexto);
		oCelda=oFila.insertCell();
		oTexto=document.createTextNode(oGestion._conductores[i].numCuenta);
		oCelda.appendChild(oTexto);
		oCelda=oFila.insertCell();
		oTexto=document.createTextNode(oGestion._conductores[i].sexo);
		oCelda.appendChild(oTexto);
		oCelda=oFila.insertCell();
		oTexto=document.createTextNode(oGestion._conductores[i].direccion);
		oCelda.appendChild(oTexto);
		oCelda=oFila.insertCell();
		if(oGestion._conductores[i].estado)// para que no salga true o false en la tabla
			oTexto=document.createTextNode("Activo");
		else
			oTexto=document.createTextNode("Baja");

		oCelda.appendChild(oTexto);
	}

	oTabla.classList.add("table");
	oTabla.classList.add("table-striped");
	oTabla.classList.add("text-center");
	oCapaListado.appendChild(oTabla);
	
}

function mostrarConductoresActivos()
{
	var oFilas=document.querySelectorAll("#resultadoListados table tbody tr");
	console.log(oFilas);
	for(var i=1;i<oFilas.length;i++)
	{
		console.log(oFilas[i].lastChild.textContent);
		if(oFilas[i].lastChild.textContent=="Activo")
			oFilas[i].classList.remove("invisible");
		else
			oFilas[i].classList.add("invisible");
	}
}