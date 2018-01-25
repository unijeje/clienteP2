//conductores con vacaciones

//var btnListadoVacacionesConductores= document.getElementById("btnListadoVacacionesConductores");

function listadoVacaciones(){
	var tablaEliminar=document.querySelector("TABLE");
	if(tablaEliminar!=null) //si hay una tabla en el div de listados la quita para reemplazarla
		tablaEliminar.remove();
		
	var cabeceras=[];
	cabeceras[0]="DNI";
	cabeceras[1]="Nombre";
	cabeceras[2]="Apellidos";
	cabeceras[3]="Inicio Vacaciones";
	cabeceras[4]="Fin Vacaciones";
	cabeceras[5]="Descripción";
	var oCelda;
	var oTexto;
	
	var oTabla=document.createElement("TABLE");
	var oFila=oTabla.insertRow();
	oFila.classList.add("thead-dark");
	
	for ( var i=0;i<cabeceras.length;i++){// crea la cabecera la tabla
		oCelda=document.createElement("TD");
		oTexto=document.createTextNode(cabeceras[i]);
		oCelda.appendChild(oTexto);
		oCelda.classList.add("lead");
		oFila.appendChild(oCelda);
	}
	
	for(var i=0;i<oGestion._vacaciones.length;i++){
		for(var j=0;j<oGestion._conductores.length;j++){
			if(oGestion._vacaciones[i].dni==oGestion._conductores[j].dni && oGestion._vacaciones[i].estado==true){
				oFila=oTabla.insertRow(1);
				oCelda=oFila.insertCell();
				oTexto=document.createTextNode(oGestion._conductores[j].dni);
				oCelda.appendChild(oTexto);
				oCelda=oFila.insertCell();
				oTexto=document.createTextNode(oGestion._conductores[j].nombre);
				oCelda.appendChild(oTexto);
				oCelda=oFila.insertCell();
				oTexto=document.createTextNode(oGestion._conductores[j].apellidos);
				oCelda.appendChild(oTexto);
				oCelda=oFila.insertCell();
				oTexto=document.createTextNode(oGestion._vacaciones[i].fechaIni);
				oCelda.appendChild(oTexto);
				oCelda=oFila.insertCell();
				oTexto=document.createTextNode(oGestion._vacaciones[i].fechaFin);
				oCelda.appendChild(oTexto);
				oCelda=oFila.insertCell();
				oTexto=document.createTextNode(oGestion._vacaciones[i].descripcion);
				oCelda.appendChild(oTexto);
			}
		}
	}
	
	oTabla.classList.add("table");
	oTabla.classList.add("table-striped");
	oTabla.classList.add("text-center");
	oCapaListado.appendChild(oTabla);
}