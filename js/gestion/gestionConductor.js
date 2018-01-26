/*
var oConductor1= new Conductor("12345678F","Alejandro","Nuñez","Masculino","987654321","ale@gmail.com","C/javascript","12345678987654321234");
oGestion.altaConductor(oConductor1);
var oConductor2= new Conductor("1235678Z","test2","test2","Masculino","987654322","al2@gmail.com","C/javascript","2222222222222222");
oGestion.altaConductor(oConductor2);
*/
var error= "";

var oBtnAltaConductor= document.getElementById("btnAltaConductor");
oBtnAltaConductor.addEventListener("click",altaConductor,false);

var oBtnBajaConductor= document.getElementById("btnBajaConductor");
oBtnBajaConductor.addEventListener("click",bajaConductor,false);

var oBtnModificarConductor= document.getElementById("btnModificarConductor");
oBtnModificarConductor.addEventListener("click",modificarConductor,false);

var oBtnAltaVacaciones= document.getElementById("btnAltaVacaciones");
oBtnAltaVacaciones.addEventListener("click",altaVacaciones,false);

var oBtnBajaVacaciones= document.getElementById("btnBajaVacaciones");
oBtnBajaVacaciones.addEventListener("click",bajaVacaciones,false);

var oBtnModificarVacaciones= document.getElementById("btnMofificarVacaciones");
oBtnModificarVacaciones.addEventListener("click",modificarVacaciones,false);

var oComboBajaConductor=document.frmConductorBaja.comboConductor;
var oComboModificaConductor=document.frmConductorModificar.comboConductor;
oComboBajaConductor.addEventListener("change", rellenaCamposConductor, false);
oComboModificaConductor.addEventListener("change", rellenaCamposConductor, false);

var oComboBajaVacaciones=document.frmBajaDeVacaciones.comboConductorVacaciones;
var oComboModificaVacaciones=document.frmModificarVacaciones.comboConductorVacaciones;
oComboBajaVacaciones.addEventListener("change", rellenaCamposBajaVacaciones, false);
oComboModificaVacaciones.addEventListener("change", rellenaCamposModificarVacaciones, false);

comboEstadoInicialConductores();
estadoInicialComboVacaciones();

function altaConductor(oEvento){
	var oE= oEvento || windows.event;
	var formAltaConductor=oE.target.parentNode.parentNode.parentNode;
	
	if(validarConductor(formAltaConductor)){
		var dniConductor= frmConductorAlta.txtConductorDni.value.trim();
		var nombreConductor= frmConductorAlta.txtConductorNombre.value.trim();
		var apellidosConductor= frmConductorAlta.txtConductorApellidos.value.trim();
		var sexoConductor= frmConductorAlta.radioConductorSexo.value;
		var tlfConductor= frmConductorAlta.txtConductorTelefono.value.trim();
		var emailConductor= frmConductorAlta.txtConductorCorreo.value.trim();
		var direccionConductor= frmConductorAlta.txtConductorDireccion.value.trim();
		var numCuentaConductor= frmConductorAlta.txtConductorCuenta.value.trim();
		//sDni,sNombre,sApellidos,sSexo,iTlf,sEmail,sDireccion,iNumCuenta
		var oConductor= new Conductor(dniConductor,nombreConductor,apellidosConductor,sexoConductor,tlfConductor,emailConductor,direccionConductor, numCuentaConductor);
				
		if(oGestion.altaConductor(oConductor)==true){
			document.frmConductorAlta.reset();
			document.frmConductorAlta.style.display="none";
			mensaje("Conductor Dado de Alta Correctamente");
			//crear cuenta con numCuentaConductor se hace en Gestion
			
		} else{
			mensaje("Este conductor ya existe");
		}
	}	
}

function bajaConductor(){
	var sDNI= frmConductorBaja.txtConductorDni.value.trim(); //console.log(oConductor); //recoge bien el campo dni pero luego no lo envia 
	var oConductor=oGestion.buscarConductor(sDNI);
	var darDeBaja= oGestion.bajaConductor(oConductor);
	//console.log(darDeBaja);
	if(oGestion.bajaConductor(oConductor)==true){
		mensaje("Cliente "+oConductor.dni+" dado de baja correctamente");
		document.frmConductorBaja.style.display="none";
		comboEstadoInicialConductores();
	} 
}

function modificarConductor(oEvento){
	var oE = oEvento || windows.event;
	var frmModificar=oE.target.parentNode.parentNode.parentNode;
	
	if(validarConductor(frmModificar)){
		var dniConductor= frmConductorModificar.txtConductorDni.value.trim();
		var nombreConductor= frmConductorModificar.txtConductorNombre.value.trim();
		var apellidosConductor= frmConductorModificar.txtConductorApellidos.value.trim();
		var sexoConductor= frmConductorModificar.radioConductorSexo.value;
		var tlfConductor= frmConductorModificar.txtConductorTelefono.value.trim();
		var emailConductor= frmConductorModificar.txtConductorCorreo.value.trim();
		var direccionConductor= frmConductorModificar.txtConductorDireccion.value.trim();
		var numCuentaConductor= frmConductorModificar.txtConductorCuenta.value.trim();
		//sDni,sNombre,sApellidos,sSexo,iTlf,sEmail,sDireccion,iNumCuenta
		var oNuevoConductor= new Conductor(dniConductor,nombreConductor,apellidosConductor,sexoConductor,tlfConductor,emailConductor,direccionConductor, numCuentaConductor);
		var bActualizacion=oGestion.modificarConductor(oNuevoConductor,dniConductor);
		
		if(bActualizacion){
			document.frmConductorModificar.style.display="none";
			mensaje("Conductor Modificado Correctamente");
			comboEstadoInicialConductores();
		/*} else{
			mensaje("Este conductor ya existe");*/
			comboEstadoInicialConductores();
		}
	}
}

//var idVacaciones=0;

function altaVacaciones(oEvento){
	var oE = oEvento || windows.event;
	var formVacaciones=oE.target.parentNode.parentNode.parentNode; //console.log(formVacaciones);
	
	if(validarVacaciones(formVacaciones)){		
		var dniConductor= frmAltaDeVacaciones.comboConductor.value.trim();  //console.log(dniConductor);
		var fechaInicioParaComprobar= new Date(frmAltaDeVacaciones.fechaIni.value.trim());
		var fechaFinParaComprobar= new Date(frmAltaDeVacaciones.fechaFin.value.trim());
		var descripcion= frmAltaDeVacaciones.descripcion.value.trim();
				
		if((fechaFinParaComprobar-fechaInicioParaComprobar)>=0){
			frmAltaDeVacaciones.fechaIni.parentNode.parentNode.classList.remove("has-error");
			frmAltaDeVacaciones.fechaFin.parentNode.parentNode.classList.remove("has-error");
			falloValidacion("", frmAltaDeVacaciones.fechaIni);
			falloValidacion("", frmAltaDeVacaciones.fechaFin);
			//idVacaciones++;
			var fechaInicio= new Date(frmAltaDeVacaciones.fechaIni.value.trim()).toLocaleDateString("es-ES");
			var fechaFin= new Date(frmAltaDeVacaciones.fechaFin.value.trim()).toLocaleDateString("es-ES");
			var oVacaciones= new Vacaciones(dniConductor,fechaInicio,fechaInicioParaComprobar,fechaFin,fechaFinParaComprobar,descripcion);
			//console.log(oVacaciones);
				
			if(oGestion.altaVacaciones(oVacaciones)==false){
				document.frmAltaDeVacaciones.reset();
				document.frmAltaDeVacaciones.style.display= "none";
				document.frmConductorVacaciones.radioVacacionesAlta.checked= false;
				mensaje("Vacaciones Aceptadas");
				estadoInicialComboVacaciones();
			} else{
				mensaje("Ese conductor ya tiene vacaciones");
			}			
		} else{
			frmAltaDeVacaciones.fechaIni.parentNode.parentNode.classList.add("has-error");
			frmAltaDeVacaciones.fechaFin.parentNode.parentNode.classList.add("has-error");
			frmAltaDeVacaciones.fechaIni.focus();
			frmAltaDeVacaciones.fechaFin.focus();
			var error= "Rango de fechas incorrecto";
			falloValidacion(error, frmAltaDeVacaciones.fechaIni);
			falloValidacion(error, frmAltaDeVacaciones.fechaFin);
		}
	} 
}

function bajaVacaciones(){
	var dniConductor= frmBajaDeVacaciones.comboConductorVacaciones.value;
	var oConductorVacaciones= oGestion.buscarVacaciones(dniConductor);
	var darDeBajaVacaciones= oGestion.bajaVacaciones(oConductorVacaciones);
	
	if(darDeBajaVacaciones==true){
		mensaje("Vacaciones Anuladas");
		document.frmBajaDeVacaciones.style.display= "none";
		document.frmConductorVacaciones.radioVacacionesBaja.checked= false;
		oGestion.actualizaComboVacaciones();
		estadoInicialComboVacaciones();
	}
}

function modificarVacaciones(oEvento){
	var oE = oEvento || windows.event;
	var formVacaciones=oE.target.parentNode.parentNode.parentNode; //console.log(formVacaciones);
	
	if(validarVacaciones(formVacaciones)){
		var dniConductor= frmModificarVacaciones.comboConductorVacaciones.value.trim();  //console.log(dniConductor);
		var fechaInicioParaComprobar= new Date(frmModificarVacaciones.fechaIni.value.trim());
		var fechaFinParaComprobar= new Date(frmModificarVacaciones.fechaFin.value.trim());
		var descripcion= frmModificarVacaciones.descripcion.value.trim();
				
		if((fechaFinParaComprobar-fechaInicioParaComprobar)>=0){
			//idVacaciones++;
			frmModificarVacaciones.fechaIni.parentNode.parentNode.classList.remove("has-error");
			frmModificarVacaciones.fechaFin.parentNode.parentNode.classList.remove("has-error");
			falloValidacion("", frmModificarVacaciones.fechaIni);
			falloValidacion("", frmModificarVacaciones.fechaFin);
			
			var fechaInicio= new Date(frmModificarVacaciones.fechaIni.value.trim()).toLocaleDateString("es-ES"); //console.log(fechaInicio);
			var fechaFin= new Date(frmModificarVacaciones.fechaFin.value.trim()).toLocaleDateString("es-ES"); //console.log(fechaFin);
			var oNuevasVacaciones= new Vacaciones(dniConductor,fechaInicio,fechaInicioParaComprobar,fechaFin,fechaFinParaComprobar,descripcion);
			//console.log(oNuevasVacaciones);
				
			if(oGestion.modificarVacaciones(oNuevasVacaciones,dniConductor)==false){
				document.frmModificarVacaciones.reset();
				document.frmModificarVacaciones.style.display= "none";
				document.frmConductorVacaciones.radioVacacionesModificar.checked= false;
				mensaje("Vacaciones Modificadas");				
				estadoInicialComboVacaciones();
			} else{
				mensaje("Fechas Incorrectas/Modificacion no completada");
			}			
		} else{
			frmModificarVacaciones.fechaIni.parentNode.parentNode.classList.add("has-error");
			frmModificarVacaciones.fechaFin.parentNode.parentNode.classList.add("has-error");
			frmModificarVacaciones.fechaIni.focus();
			frmModificarVacaciones.fechaFin.focus();
			var error= "Rango de fechas incorrecto";
			falloValidacion(error, frmModificarVacaciones.fechaIni);
			falloValidacion(error, frmModificarVacaciones.fechaFin);
		}
	}
}

function validarConductor(formAltaConductor){
	var bValido= true;
	
	//campo dni conductor
	var dniConductor= formAltaConductor.txtConductorDni.value.trim();
	formAltaConductor.txtConductorDni.value= formAltaConductor.txtConductorDni.value.trim();
	
	if(!oExpRegDni.test(dniConductor)){
		formAltaConductor.txtConductorDni.parentNode.parentNode.classList.add("has-error");
		formAltaConductor.txtConductorDni.focus();
		error= "El DNI tiene que ser 8 caracteres númericos y uno alfabético";
		falloValidacion(error, formAltaConductor.txtConductorDni);
		bValido= false;
	} else{
		formAltaConductor.txtConductorDni.parentNode.parentNode.classList.remove("has-error");
		falloValidacion("", formAltaConductor.txtConductorDni);
	}
	
	//campo nombre conductor
	var nombreConductor= formAltaConductor.txtConductorNombre.value.trim();
	formAltaConductor.txtConductorNombre.value= formAltaConductor.txtConductorNombre.value.trim();
	
	if(!oExpRegNombre.test(nombreConductor)){
		formAltaConductor.txtConductorNombre.parentNode.parentNode.classList.add("has-error");
		formAltaConductor.txtConductorNombre.focus();
		error= "El nombre tiene que ser entre 3 y 20 carácteres alfabéticos";
		falloValidacion(error, formAltaConductor.txtConductorNombre);
		bValido= false;
	} else{
		formAltaConductor.txtConductorNombre.parentNode.parentNode.classList.remove("has-error");
		falloValidacion("", formAltaConductor.txtConductorNombre);
	}
	
	//campo apellidos conductor
	var apellidosConductor= formAltaConductor.txtConductorApellidos.value.trim();
	formAltaConductor.txtConductorApellidos.value= formAltaConductor.txtConductorApellidos.value.trim();
	
	if(!oExpRegApellidos.test(apellidosConductor)){
		formAltaConductor.txtConductorApellidos.parentNode.parentNode.classList.add("has-error");
		formAltaConductor.txtConductorApellidos.focus();
		error= "El Apellido tiene que ser entre 3 y 20 carácteres alfabéticos";
		falloValidacion(error, formAltaConductor.txtConductorApellidos);
		bValido= false;
	} else{
		formAltaConductor.txtConductorApellidos.parentNode.parentNode.classList.remove("has-error");
		falloValidacion("", formAltaConductor.txtConductorApellidos);
	}
	
	//campo sexo conductor
	/*var seleccionado= false;
	
	for(var i=0; i<1; i++) {
		if (formAltaConductor.radioConductorSexo[i].checked) {
			seleccionado = true;
			break;
		}
	}
	
	if (seleccionado==false) {
		error+= "Debe seleccionar un tipo de sexo \n";		
	}
	*/
	if(!validarRadio(formAltaConductor.radioConductorSexo))
	{
		formAltaConductor.radioConductorSexo[0].parentNode.parentNode.classList.add("has-error");
		error= "Debe seleccionar un género";
		bValido=false;
		falloValidacion(error, formAltaConductor.radioConductorSexo[0].parentNode);
	}
	else {
		formAltaConductor.radioConductorSexo[0].parentNode.parentNode.classList.remove("has-error");
		falloValidacion("", formAltaConductor.radioConductorSexo[0].parentNode);
	}
	
	//campo telefono conductor
	var tlfConductor= formAltaConductor.txtConductorTelefono.value.trim();
	formAltaConductor.txtConductorTelefono.value= formAltaConductor.txtConductorTelefono.value.trim();
	
	if(!oExpRegTelefono.test(tlfConductor)){
		formAltaConductor.txtConductorTelefono.parentNode.parentNode.classList.add("has-error");
		formAltaConductor.txtConductorTelefono.focus();
		error= "El Telefono no es correcto";
		falloValidacion(error, formAltaConductor.txtConductorTelefono);
		bValido= false;
	} else{
		formAltaConductor.txtConductorTelefono.parentNode.parentNode.classList.remove("has-error");
		falloValidacion("", formAltaConductor.txtConductorTelefono);
	}
	
	//campo email conductor
	var emailConductor= formAltaConductor.txtConductorCorreo.value.trim();
	formAltaConductor.txtConductorCorreo.value= formAltaConductor.txtConductorCorreo.value.trim();
	
	if(!oExpRegCorreo.test(emailConductor)){
		formAltaConductor.txtConductorCorreo.parentNode.parentNode.classList.add("has-error");
		formAltaConductor.txtConductorCorreo.focus();
		error= "El email no es correcto";
		falloValidacion(error, formAltaConductor.txtConductorCorreo);
		bValido= false;
	} else{
		formAltaConductor.txtConductorCorreo.parentNode.parentNode.classList.remove("has-error");
		falloValidacion("", formAltaConductor.txtConductorCorreo);
	}
	
	//campo Direccion
	var direccionConductor= formAltaConductor.txtConductorDireccion.value.trim();
	formAltaConductor.txtConductorDireccion.value= formAltaConductor.txtConductorDireccion.value.trim();
		
	if(direccionConductor==""){
		formAltaConductor.txtConductorDireccion.parentNode.parentNode.classList.add("has-error");
		formAltaConductor.txtConductorDireccion.focus();
		error= "Escriba una direccion";
		falloValidacion(error, formAltaConductor.txtConductorDireccion);
		bValido= false;
	} else{
		formAltaConductor.txtConductorDireccion.parentNode.parentNode.classList.remove("has-error");
		falloValidacion("", formAltaConductor.txtConductorDireccion);
	}
	
	//campo Num Cuenta
	var numCuentaConductor= formAltaConductor.txtConductorCuenta.value.trim();
	formAltaConductor.txtConductorCuenta.value= formAltaConductor.txtConductorCuenta.value.trim();
	
	if(!oExpRegularNumCuenta.test(numCuentaConductor)){
		formAltaConductor.txtConductorCuenta.parentNode.parentNode.classList.add("has-error");
		formAltaConductor.txtConductorCuenta.focus();
		error= "El numero de cuenta debe de tener 20 dígitos";
		falloValidacion(error, formAltaConductor.txtConductorCuenta);
		bValido= false;
	} else{
		formAltaConductor.txtConductorCuenta.parentNode.parentNode.classList.remove("has-error");
		falloValidacion("", formAltaConductor.txtConductorCuenta);
	}
	
	return bValido;
}

function validarVacaciones(formVacaciones){
	var bValido= true;
	
	//fecha inicio
	var fechaInicio= formVacaciones.fechaIni.value.trim();
	formVacaciones.fechaIni.value= formVacaciones.fechaIni.value.trim();
	
	if(fechaInicio==""){
		formVacaciones.fechaIni.parentNode.parentNode.classList.add("has-error");
		formVacaciones.fechaIni.focus();
		error= "Seleccione una fecha de inicio";
		falloValidacion(error, formVacaciones.fechaIni);
	} else{
		formVacaciones.fechaIni.parentNode.parentNode.classList.remove("has-error");
		falloValidacion("", formVacaciones.fechaIni);
	}
	
	//fecha fin
	var fechaFin= formVacaciones.fechaFin.value.trim();
	formVacaciones.fechaFin.value= formVacaciones.fechaFin.value.trim();
	
	if(fechaFin==""){
		formVacaciones.fechaFin.parentNode.parentNode.classList.add("has-error");
		formVacaciones.fechaFin.focus();
		error= "Seleccione una fecha fin";
		falloValidacion(error, formVacaciones.fechaFin);
	} else{
		formVacaciones.fechaFin.parentNode.parentNode.classList.remove("has-error");
		falloValidacion("", formVacaciones.fechaFin);
	}
	
	/*rango de fechas
	if(fechaInicio!="" && fechaFin!=""){
		if((fechaFin-fechaInicio)>=0){			
			formVacaciones.fechaFin.parentNode.parentNode.classList.remove("has-error");
			falloValidacion("", formVacaciones.fechaFin);
		} else{
			formVacaciones.fechaFin.parentNode.parentNode.classList.add("has-error");
			formVacaciones.fechaFin.focus();
			error= "Rango de fechas incorrecto";
			falloValidacion(error, formVacaciones.fechaFin);
		}*/
	//}
	
	//descripcion
	var descripcionVacaciones= formVacaciones.descripcion.value.trim();
	formVacaciones.descripcion.value= formVacaciones.descripcion.value.trim();
		
	if(descripcionVacaciones==""){
		formVacaciones.descripcion.parentNode.parentNode.classList.add("has-error");
		formVacaciones.descripcion.focus();
		error= "Escriba el motivo de las vacaciones";
		falloValidacion(error, formVacaciones.descripcion);
		bValido= false;
	} else{
		formVacaciones.descripcion.parentNode.parentNode.classList.remove("has-error");
		falloValidacion("", formVacaciones.descripcion);
	}
	
	return bValido;
}

function rellenaCamposConductor(oEvento){
    var oE = oEvento || windows.event;
    var oForm=oE.target.parentNode.parentNode.parentNode; //recupera el formulario padre sobre el que esta el combo
    //console.log(oForm.name);
    var oConductor=oGestion.buscarConductor(oForm.comboConductor.value);//recupera el conductor a traves del DNI

    oForm.txtConductorDni.value=oConductor.dni;
    oForm.txtConductorNombre.value=oConductor.nombre;
    oForm.txtConductorApellidos.value=oConductor.apellidos;
    oForm.txtConductorTelefono.value=oConductor.tlf;    
    oForm.radioConductorSexo.value=oConductor.sexo;
	oForm.txtConductorCorreo.value=oConductor.email;
	oForm.txtConductorDireccion.value= oConductor.direccion;
    oForm.txtConductorCuenta.value=oConductor.numCuenta;
	
}

function rellenaCamposModificarVacaciones(oEvento){
	var oE = oEvento || windows.event;
	var formVacaciones= oE.target.parentNode.parentNode.parentNode;
	var oConductor= oGestion.buscarVacaciones(formVacaciones.comboConductorVacaciones.value);
	
	formVacaciones.fechaIni.value= oConductor.fechaIni;
	formVacaciones.fechaFin.value= oConductor.fechaFin;
	formVacaciones.fechaInicioAntigua.value= oConductor.fechaIni;
	formVacaciones.fechaFinAntigua.value= oConductor.fechaFin;
	formVacaciones.descripcion.value= oConductor.descripcion;
}

function rellenaCamposBajaVacaciones(oEvento){
	var oE = oEvento || windows.event;
	var formVacaciones= oE.target.parentNode.parentNode.parentNode;
	var oConductor= oGestion.buscarVacaciones(formVacaciones.comboConductorVacaciones.value);
	
	formVacaciones.fechaIni.value= oConductor.fechaIni;
	formVacaciones.fechaFin.value= oConductor.fechaFin;
	formVacaciones.descripcion.value= oConductor.descripcion;
}