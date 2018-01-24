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

comboEstadoInicialConductores();

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
	} else{
		mensaje("Fallo en la validación.");
	}
	
}

function bajaConductor(){
	var sDNI= frmConductorBaja.txtConductorDni.value.trim(); //console.log(oConductor); //recoge bien el campo dni pero luego no lo envia 
	var oConductor=oGestion.buscarConductor(sDNI);
	var darDeBaja= oGestion.bajaConductor(oConductor);
	console.log(darDeBaja);
	if(oGestion.bajaConductor(oConductor)==true){
		mensaje("Cliente "+oConductor.dni+" dado de baja correctamente");
		document.frmConductorBaja.style.display="none";
		comboEstadoInicialConductores();
	} else{
		mensaje("Error al dar de baja");
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
		/*} else{
			mensaje("Este conductor ya existe");*/
			comboEstadoInicialConductores();
		}
	} else{
		mensaje("Fallo al modificar el conductor, rellene los campos correctamente");
	}
}

function altaVacaciones(oEvento){
	var oE = oEvento || windows.event;
	var formVacaciones=oE.target.parentNode.parentNode.parentNode;
	
	
}

function bajaVacaciones(){
	
}

function modificarVacaciones(){
	
}

function validarConductor(formAltaConductor){
	var bValido= true;
	var sError="";
	
	//campo dni conductor
	var dniConductor= formAltaConductor.txtConductorDni.value.trim();
	formAltaConductor.txtConductorDni.value= formAltaConductor.txtConductorDni.value.trim();
	
	if(!oExpRegDni.test(dniConductor)){
		formAltaConductor.txtConductorDni.parentNode.parentNode.classList.add("has-error");
		formAltaConductor.txtConductorDni.focus();
		sError="El DNI tiene que ser 8 caracteres númericos y uno alfabético";
		falloValidacion(sError, formAltaConductor.txtConductorDni);
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
		sError="El nombre del conductor tiene que ser entre 3 y 20 carácteres alfabéticos \n";
		falloValidacion(sError, formAltaConductor.txtConductorNombre);
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
		sError="El Apellido del conductor tiene que ser entre 3 y 20 carácteres alfabéticos \n";
		falloValidacion(sError, formAltaConductor.txtConductorApellidos);
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
		bValido=false;
	}
	else
		formAltaConductor.radioConductorSexo[0].parentNode.parentNode.classList.remove("has-error");
		
	//campo telefono conductor
	var tlfConductor= formAltaConductor.txtConductorTelefono.value.trim();
	formAltaConductor.txtConductorTelefono.value= formAltaConductor.txtConductorTelefono.value.trim();
	
	if(!oExpRegTelefono.test(tlfConductor)){
		formAltaConductor.txtConductorTelefono.parentNode.parentNode.classList.add("has-error");
		formAltaConductor.txtConductorTelefono.focus();
		sError="El Telefono no es correcto \n";
		falloValidacion(sError, formAltaConductor.txtConductorTelefono);
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
		sError="El correo no es valido \n";
		falloValidacion(sError, formAltaConductor.txtConductorCorreo);
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
		sError="Tiene que introducir una dirección \n";
		falloValidacion(sError, formAltaConductor.txtConductorDireccion);
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
		sError="El numero de cuenta tiene que tener 20 dígitos";
		falloValidacion(sError, formAltaConductor.txtConductorCuenta);
		bValido= false;
	} else{
		formAltaConductor.txtConductorCuenta.parentNode.parentNode.classList.remove("has-error");
		falloValidacion("", formAltaConductor.txtConductorCuenta);
	}
	
	return bValido;
}

function validarVacaciones(formVacaciones){
	
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