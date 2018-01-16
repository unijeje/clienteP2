var oConductor1= new Conductor("1235678F","Alejandro","Nuñez",,"Masculino","987654321","ale@gmail.com","C/javascript","1111111111111111");
oGestion.altaCliente(oConductor1);

var oBtnAltaCliente= document.getElementById("btnAltaConductor");
oBtnAltaCliente.addEventListener("submit",altaConductor,false);

function altaCliente(oEvento){
	var oE= oEvento || windows.event;
	
}

function validarConductor(frmAltaConductor){
	var bValido= true;
	var error= "";
	
	//campo dni conductor
	var dniConductor= frmAltaConductor.txtConductorDni.value.trim();
	frmAltaConductor.txtConductorDni.value= frmAltaConductor.txtConductorDni.value.trim();
	
	if(!oExpRegDni.test(dniConductor)){
		frmAltaConductor.txtConductorDni.style.backgroundColor="red";
		frmAltaConductor.txtConductorDni.focus();
		error= "El DNI comprender 8 números y una letra \n";
		bValido= false;
	} else{
		frmAltaConductor.txtConductorDni.style.backgroundColor="white";
	}
	
	//campo nombre conductor
	var nombreConductor= frmAltaConductor.txtConductorNombre.value.trim();
	frmAltaConductor.txtConductorNombre.value= frmAltaConductor.txtConductorNombre.value.trim();
	
	if(!oExpRegNombre.test(nombreConductor)){
		frmAltaConductor.txtConductorNombre.style.backgroundColor="red";
		frmAltaConductor.txtConductorNombre.focus();
		error+= "El nombre debe tener entre 3 y 20 carácteres \n";
		bValido= false;
	} else{
		frmAltaConductor.txtConductorNombre.style.backgroundColor="white";
	}
	
	//campo apellidos conductor
	var apellidosConductor= frmAltaConductor.txtConductorApellidos.value.trim();
	frmAltaConductor.txtConductorApellidos.value= frmAltaConductor.txtConductorApellidos.value.trim();
	
	if(!oExpRegApellidos.test(apellidosConductor)){
		frmAltaConductor.txtConductorApellidos.style.backgroundColor="red";
		frmAltaConductor.txtConductorApellidos.focus();
		error+= "Los apellidos debe tener entre 3 y 30 carácteres \n";
		bValido= false;
	} else{
		frmAltaConductor.txtConductorApellidos.style.backgroundColor="white";
	}
	
	//campo sexo conductor
	var seleccionado= false;
	
	for(var i=0; i<1; i++) {
		if (frmAltaConductor.radioConductorSexo[i].checked) {
			seleccionado = true;
			break;
		}
	}
	
	if (seleccionado==false) {
		frmAltaConductor.radioConductorSexo.style.backgroundColor="red";
		frmAltaConductor.radioConductorSexo.focus();
		error+= "Debe seleccionar un tipo de sexo \n";		
	}
	
	//campo telefono conductor
	var tlfConductor= frmAltaConductor.txtConductorTelefono.value.trim();
	frmAltaConductor.txtConductorTelefono.value= frmAltaConductor.txtConductorTelefono.value.trim();
	
	if(!oExpRegTelefono.test(tlfConductor)){
		frmAltaConductor.txtConductorTelefono.style.backgroundColor="red";
		frmAltaConductor.txtConductorTelefono.focus();
		error+= "El telefono no es correcto \n";
		bValido= false;
	} else{
		frmAltaConductor.txtConductorTelefono.style.backgroundColor="white";
	}
	
	//campo email conductor
	var emailConductor= frmAltaConductor.txtConductorCorreo.value.trim();
	frmAltaConductor.txtConductorCorreo.value= frmAltaConductor.txtConductorCorreo.value.trim();
	
	if(!oExpRegCorreo.test(emailConductor)){
		frmAltaConductor.txtConductorCorreo.style.backgroundColor="red";
		frmAltaConductor.txtConductorCorreo.focus();
		error+= "El telefono no es correcto \n";
		bValido= false;
	} else{
		frmAltaConductor.txtConductorCorreo.style.backgroundColor="white";
	}
	
	//campoDireccion
	
}