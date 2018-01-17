var oConductor1= new Conductor("1235678F","Alejandro","Nuñez","Masculino","987654321","ale@gmail.com","C/javascript","1111111111111111");
oGestion.altaConductor(oConductor1);

var error= "";

var oBtnAltaConductor= document.getElementById("btnAltaConductor");
oBtnAltaConductor.addEventListener("click",altaConductor,false);

var oComboBajaConductor=document.frmConductorBaja.comboConductor;
var oComboModificaConductor=document.frmConductorModificar.comboConductor;
oComboBajaConductor.addEventListener("change", rellenaCamposConductor, false);
oComboModificaConductor.addEventListener("change", rellenaCamposConductor, false);

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
		
		var oConductor= new Conductor(dniConductor,nombreConductor,apellidosConductor,sexoConductor,tlfConductor,emailConductor,numCuentaConductor);
				
		if(oGestion.altaConductor(oConductor)==true){
			document.frmConductorAlta.reset();
			document.frmConductorAlta.style.display="none";
			mensaje("Conductor Dado de Alta Correctamente");
		} else{
			mensaje("Este conductor ya existe");
		}
	} else{
		mensaje("Fallo en la validación "+error);
	}
	
}

function validarConductor(formAltaConductor){
	var bValido= true;
	
	//campo dni conductor
	var dniConductor= formAltaConductor.txtConductorDni.value.trim();
	formAltaConductor.txtConductorDni.value= formAltaConductor.txtConductorDni.value.trim();
	
	if(!oExpRegDni.test(dniConductor)){
		formAltaConductor.txtConductorDni.style.backgroundColor="red";
		formAltaConductor.txtConductorDni.focus();
		error= "El DNI comprender 8 números y una letra \n";
		bValido= false;
	} else{
		formAltaConductor.txtConductorDni.style.backgroundColor="white";
	}
	
	//campo nombre conductor
	var nombreConductor= formAltaConductor.txtConductorNombre.value.trim();
	formAltaConductor.txtConductorNombre.value= formAltaConductor.txtConductorNombre.value.trim();
	
	if(!oExpRegNombre.test(nombreConductor)){
		formAltaConductor.txtConductorNombre.style.backgroundColor="red";
		formAltaConductor.txtConductorNombre.focus();
		error+= "El nombre debe tener entre 3 y 20 carácteres \n";
		bValido= false;
	} else{
		formAltaConductor.txtConductorNombre.style.backgroundColor="white";
	}
	
	//campo apellidos conductor
	var apellidosConductor= formAltaConductor.txtConductorApellidos.value.trim();
	formAltaConductor.txtConductorApellidos.value= formAltaConductor.txtConductorApellidos.value.trim();
	
	if(!oExpRegApellidos.test(apellidosConductor)){
		formAltaConductor.txtConductorApellidos.style.backgroundColor="red";
		formAltaConductor.txtConductorApellidos.focus();
		error+= "Los apellidos debe tener entre 3 y 30 carácteres \n";
		bValido= false;
	} else{
		formAltaConductor.txtConductorApellidos.style.backgroundColor="white";
	}
	
	//campo sexo conductor
	var seleccionado= false;
	
	for(var i=0; i<1; i++) {
		if (formAltaConductor.radioConductorSexo[i].checked) {
			seleccionado = true;
			break;
		}
	}
	
	if (seleccionado==false) {
		formAltaConductor.radioConductorSexo.focus();
		error+= "Debe seleccionar un tipo de sexo \n";		
	}
	
	//campo telefono conductor
	var tlfConductor= formAltaConductor.txtConductorTelefono.value.trim();
	formAltaConductor.txtConductorTelefono.value= formAltaConductor.txtConductorTelefono.value.trim();
	
	if(!oExpRegTelefono.test(tlfConductor)){
		formAltaConductor.txtConductorTelefono.style.backgroundColor="red";
		formAltaConductor.txtConductorTelefono.focus();
		error+= "El telefono no es correcto \n";
		bValido= false;
	} else{
		formAltaConductor.txtConductorTelefono.style.backgroundColor="white";
	}
	
	//campo email conductor
	var emailConductor= formAltaConductor.txtConductorCorreo.value.trim();
	formAltaConductor.txtConductorCorreo.value= formAltaConductor.txtConductorCorreo.value.trim();
	
	if(!oExpRegCorreo.test(emailConductor)){
		formAltaConductor.txtConductorCorreo.style.backgroundColor="red";
		formAltaConductor.txtConductorCorreo.focus();
		error+= "El telefono no es correcto \n";
		bValido= false;
	} else{
		formAltaConductor.txtConductorCorreo.style.backgroundColor="white";
	}
	
	//campo Direccion
	var direccionConductor= formAltaConductor.txtConductorDireccion.value.trim();
	formAltaConductor.txtConductorDireccion.value= formAltaConductor.txtConductorDireccion.value.trim();
		
	if(direccionConductor==""){
		formAltaConductor.txtConductorDireccion.style.backgroundColor="red";
		formAltaConductor.txtConductorDireccion.focus();
		error+= "Rellene el campo dirección correctamente \n";
		bValido= false;
	} else{
		formAltaConductor.txtConductorDireccion.style.backgroundColor="white";
	}
	
	//campo Num Cuenta
	var numCuentaConductor= formAltaConductor.txtConductorCuenta.value.trim();
	formAltaConductor.txtConductorCuenta.value= formAltaConductor.txtConductorCuenta.value.trim();
	
	if(!oExpRegularNumCuenta.test(numCuentaConductor)){
		formAltaConductor.txtConductorCuenta.style.backgroundColor="red";
		formAltaConductor.txtConductorCuenta.focus();
		error+= "El número de cuenta no es correcto, debe de tener 20 dígitos \n";
		bValido= false;
	} else{
		formAltaConductor.txtConductorCuenta.style.backgroundColor="white";
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
    oForm.txtConductorCorreo.value=oConductor.correo;
    oForm.txtConductorCuenta.value=oConductor.numCuenta;
    oForm.radioConductorSexo.value=oConductor.sexo;
	oForm.txtConductorDireccion.value= oConductor.direccion;
}