//conductores con vacaciones

//var btnListadoVacacionesConductores= document.getElementById("btnListadoVacacionesConductores");
var oBtnOrdenarVacacionesPorApellidos= document.getElementById("btnOrdenarVacacionesPorApellidos");
oBtnOrdenarVacacionesPorApellidos.addEventListener("click", listadoVacacionesPorApellidos, false);

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

function listadoVacacionesPorApellidos(){
	var oFilas=document.querySelectorAll("#resultadoListados table tbody tr");
	var oApellidos=[];
	var oFilasOrdenado=[];
	
	for(var i=1;i<oFilas.length;i++){
        oApellidos.push(oFilas[i].cells[2].textContent);
    }
	
	oApellidos.sort(ordenadosApell);
	
	for(var i=0;i<oFilas.length;i++){		
		oFilasOrdenado.push(oApellidos[i]);
	}
	
	var oBodyTable=document.querySelector("#resultadoListados table tbody");
	
    for(var i=0;i<oFilasOrdenado.length;i++){        
        oBodyTable.appendChild(oFilasOrdenado[i]);
    }
}

var ordenadosApell= function(a,b){
	  if (a > b) {
		return 1;
	  }
	  if (a < b) {
		return -1;
	  }
	  return 0;
};