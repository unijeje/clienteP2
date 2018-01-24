//
var oComboAlquilerCliente=document.frmListadoAlquileres.comboCliente;
oComboAlquilerCliente.addEventListener("change", listadoAlquileres,false);

function listadoAlquileres(){
	
	var dniCliente=oComboAlquilerCliente.value;

	var tablaEliminar=document.querySelector("TABLE");
	if(tablaEliminar!=null) //si hay una tabla en el div de listados la quita para reemplazarla
		tablaEliminar.remove();

	var cabeceras=[];
	cabeceras[0]="ID Alquiler";
	cabeceras[1]="Conductores";
	cabeceras[2]="Autobuses";
	cabeceras[3]="Fecha";
	cabeceras[4]="Nº Personas";
	cabeceras[5]="Descripcion";
	cabeceras[6]="Origen";
	cabeceras[7]="Destino";
	cabeceras[8]="KMS";
	//cabeceras[9]="Cliente";

	var oCelda;
	var oTexto;
	var contador;

	var oTabla=document.createElement("TABLE");
	var oFila=oTabla.insertRow();
	oFila.classList.add("thead-dark");
	oFila.classList.add("text-center");
	for ( var i=0;i<9;i++){// crea la cabecera la tabla
		oCelda=document.createElement("TD");
		oTexto=document.createTextNode(cabeceras[i]);
		oCelda.appendChild(oTexto);
		oCelda.classList.add("lead");
		
		oFila.appendChild(oCelda);
	}

	for ( var i=0;i<oGestion._alquileres.length;i++){
		if (oGestion._alquileres[i].cliente.dni==dniCliente){
			oFila=oTabla.insertRow(1);
			oCelda=oFila.insertCell();
			oTexto=document.createTextNode(oGestion._alquileres[i].id);
			oCelda.appendChild(oTexto);
			oCelda=oFila.insertCell();
			oTexto=document.createTextNode("");
			for (var j=0;j<oGestion._alquileres[i].conductor.length;j++){
				//oTexto.textContent=oTexto.textContent+oGestion._alquileres[i].conductor[j].dni;
				//oTexto.textContent=oTexto.textContent+oGestion._alquileres[i].conductor[j].nombre;
				oTexto=document.createTextNode(oGestion._alquileres[i].conductor[j].dni+" - ");
				oCelda.appendChild(oTexto);
				oTexto=document.createTextNode(oGestion._alquileres[i].conductor[j].nombre);
				oCelda.appendChild(oTexto);
				oCelda.appendChild(document.createElement("BR"));
			}
			//oCelda.appendChild(oTexto);
			oCelda=oFila.insertCell();
			oTexto=document.createTextNode("");
			for (var j=0;j<oGestion._alquileres[i].autobuses.length;j++){
				//oTexto.textContent=oTexto.textContent+oGestion._alquileres[i].autobuses[j].matricula;
				oTexto=document.createTextNode(oGestion._alquileres[i].autobuses[j].matricula+" - ");
				oCelda.appendChild(oTexto);
				//oTexto.textContent=oTexto.textContent+oGestion._alquileres[i].autobuses[j].modelo;
				oTexto=document.createTextNode(oGestion._alquileres[i].autobuses[j].modelo);
				oCelda.appendChild(oTexto);
				oCelda.appendChild(document.createElement("BR"));
			}
			//oCelda.appendChild(oTexto);
			oCelda=oFila.insertCell();
			oTexto=document.createTextNode(oGestion._alquileres[i].fecha);
			oCelda.appendChild(oTexto);
			oCelda=oFila.insertCell();
			oTexto=document.createTextNode(oGestion._alquileres[i].numPers);
			oCelda.appendChild(oTexto);
			oCelda=oFila.insertCell();
			oTexto=document.createTextNode(oGestion._alquileres[i].descripcion);
			oCelda.appendChild(oTexto);
			oCelda=oFila.insertCell();
			oTexto=document.createTextNode(oGestion._alquileres[i].origen);
			oCelda.appendChild(oTexto);
			oCelda=oFila.insertCell();
			oTexto=document.createTextNode(oGestion._alquileres[i].destino);
			oCelda.appendChild(oTexto);
			oCelda=oFila.insertCell();
			oTexto=document.createTextNode(oGestion._alquileres[i].kms);
			oCelda.appendChild(oTexto);
			//oCelda=oFila.insertCell();
			//oTexto=document.createTextNode("");
			//oTexto.textContent+=oGestion._alquileres[i].cliente.dni;
			//oTexto.textContent+=oGestion._alquileres[i].cliente.nombre;
			//oCelda.appendChild(oTexto);
		}
	}

	oTabla.classList.add("table");
	oTabla.classList.add("table-striped");
	oTabla.classList.add("text-center");
	oCapaListado.appendChild(oTabla);	

}