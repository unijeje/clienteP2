
/*datos prueba
var oCliente01=new Cliente("123", "nombre", "ape", "98765", "correo@gmail.com", "abc", "m");
var oCliente02=new Cliente("1234", "nombre2", "ape2", "298765", "correo1@gmail.com", "abdc", "f");
oGestion.altaCliente(oCliente01);
oGestion.altaCliente(oCliente02);
/*DatosPrueba*/


var oBtnDarAltaCliente=document.getElementById("btnAltaCliente");
oBtnDarAltaCliente.addEventListener("click", altaCliente, false);

var oBtnDarBajaCliente=document.getElementById("btnBajaCliente");
oBtnDarBajaCliente.addEventListener("click", bajaCliente, false);

var oBtnActualizarCliente=document.getElementById("btnModificarCliente");
oBtnActualizarCliente.addEventListener("click", actualizaCliente, false);

var oComboBajaCliente=document.frmClienteBaja.comboCliente;
var oComboModificaCliente=document.frmClienteModificar.comboCliente;
oComboBajaCliente.addEventListener("change", rellenaCamposCliente, false);
oComboModificaCliente.addEventListener("change", rellenaCamposCliente, false);

comboEstadoInicialClientes();




function altaCliente(oEvento)
{
    var oE = oEvento || windows.event;
    var oForm=oE.target.parentNode.parentNode.parentNode; //recupera el formulario padre sobre el que esta el boton

    if(validarCliente(oForm))
    {
        var sDniCliente=frmClienteAlta.txtClienteDni.value.trim();
        var sNombreCliente=frmClienteAlta.txtClienteNombre.value.trim();
        var sApellidosCliente=frmClienteAlta.txtClienteApellidos.value.trim();
        var sTlfCliente=frmClienteAlta.txtClienteTelefono.value.trim();
        var sCorreoCliente=frmClienteAlta.txtClienteCorreo.value.trim();
        var sCuentaCliente=frmClienteAlta.txtClienteCuenta.value.trim();
        var sSexoCliente=frmClienteAlta.radioClienteSexo.value;

        var oCliente=new Cliente(sDniCliente, sNombreCliente, sApellidosCliente, sTlfCliente, sCorreoCliente, sCuentaCliente, sSexoCliente);
        
        var bInserccion=oGestion.altaCliente(oCliente);
        if(bInserccion)
        {
            document.frmClienteAlta.reset();
            document.frmClienteAlta.style.display="none";
            mensaje("Cliente Insertado Correctamente");
            comboEstadoInicialClientes(); //vuelve a seleccionar el primero del combo
        }
        else
        {
            mensaje("Ese cliente ya existe");
        }   
    }
}

function validarCliente(oForm)
{
    var bValidacion=true;
    var sError="";

    //DNI
    var sDniCliente=oForm.txtClienteDni.value.trim();
    oForm.txtClienteDni.value=oForm.txtClienteDni.value.trim();

    if(!oExpRegDni.test(sDniCliente))
    {
        oForm.txtClienteDni.parentNode.parentNode.classList.add("has-error");
        oForm.txtClienteDni.focus();
        sError="El DNI tiene que ser 8 caracteres númericos y uno alfabético";
        falloValidacion(sError, oForm.txtClienteDni);
        bValidacion=false;
    }
    else
    {
        oForm.txtClienteDni.parentNode.parentNode.classList.remove("has-error");
        falloValidacion("", oForm.txtClienteDni); //vuelve a eliminar el mensaje
    }

    //NOMBRE
    var sNombreCliente=oForm.txtClienteNombre.value.trim();
    oForm.txtClienteNombre.value=oForm.txtClienteNombre.value.trim();

    if(!oExpRegNombre.test(sNombreCliente))
    {
        oForm.txtClienteNombre.parentNode.parentNode.classList.add("has-error");
        if(bValidacion)
            oForm.txtClienteNombre.focus();
        sError="El nombre del cliente tiene que ser entre 3 y 20 carácteres alfabéticos \n";
        falloValidacion(sError, oForm.txtClienteNombre);
        bValidacion=false;
    }
    else
    {
        oForm.txtClienteNombre.parentNode.parentNode.classList.remove("has-error");
        falloValidacion("", oForm.txtClienteNombre);
    }
    //Apellidos
    var sApellidosCliente=oForm.txtClienteApellidos.value.trim();
    oForm.txtClienteApellidos.value=oForm.txtClienteApellidos.value.trim();

    if(!oExpRegApellidos.test(sApellidosCliente))
    {
        oForm.txtClienteApellidos.parentNode.parentNode.classList.add("has-error");
        if(bValidacion)
            oForm.txtClienteApellidos.focus();
        sError="El Apellido del cliente tiene que ser entre 3 y 20 carácteres alfabéticos \n";
        falloValidacion(sError, oForm.txtClienteApellidos);
        bValidacion=false;
    }
    else
    {
        falloValidacion("", oForm.txtClienteApellidos);
        oForm.txtClienteApellidos.parentNode.parentNode.classList.remove("has-error");
    }
    //Tlf
    var sTlfCliente=oForm.txtClienteTelefono.value.trim();
    oForm.txtClienteTelefono.value=oForm.txtClienteTelefono.value.trim();

    if(!oExpRegTelefono.test(sTlfCliente))
    {
        oForm.txtClienteTelefono.parentNode.parentNode.classList.add("has-error");
        if(bValidacion)
            oForm.txtClienteTelefono.focus();
        sError="El Telefono no es correcto \n";
        falloValidacion(sError, oForm.txtClienteTelefono);
        bValidacion=false;
    }
    else
    {
        oForm.txtClienteTelefono.parentNode.parentNode.classList.remove("has-error");
        falloValidacion("", oForm.txtClienteTelefono);
    }
    //Correo
    var sCorreoCliente=oForm.txtClienteCorreo.value.trim();
    oForm.txtClienteCorreo.value=oForm.txtClienteCorreo.value.trim();

    if(!oExpRegCorreo.test(sCorreoCliente))
    {
        oForm.txtClienteCorreo.parentNode.parentNode.classList.add("has-error");
        if(bValidacion)
            oForm.txtClienteCorreo.focus();
        sError="El correo no es correcto";
        falloValidacion(sError, oForm.txtClienteCorreo);
        bValidacion=false;
    }
    else
    {
        oForm.txtClienteCorreo.parentNode.parentNode.classList.remove("has-error");
        falloValidacion("", oForm.txtClienteCorreo);
    }

    //Cuenta
    var sCuentaCliente=oForm.txtClienteCuenta.value.trim();
    oForm.txtClienteCuenta.value==oForm.txtClienteCuenta.value.trim();
    if(!oExpRegularNumCuenta.test(sCuentaCliente))
    {
        oForm.txtClienteCuenta.parentNode.parentNode.classList.add("has-error");
        if(bValidacion)
            oForm.txtClienteCuenta.focus();
        sError="El numero de cuenta tiene que tener 20 dígitos";
        falloValidacion(sError, oForm.txtClienteCuenta);
        bValidacion=false;
    }
    else
    {
        oForm.txtClienteCuenta.parentNode.parentNode.classList.remove("has-error");
        falloValidacion("", oForm.txtClienteCuenta);
    }
    //Genero
    var sSexoCliente=oForm.radioClienteSexo.value;
    var bSexoCliente=validarRadio(oForm.radioClienteSexo);

    if(!bSexoCliente)
    {
        oForm.radioClienteSexo[0].parentNode.parentNode.classList.add("has-error");
        sError="Debe seleccionar un genero";
        bValidacion=false;
        falloValidacion(sError, oForm.radioClienteSexo[0].parentNode);
    }
    else
    {   
        oForm.radioClienteSexo[0].parentNode.parentNode.classList.remove("has-error");
        falloValidacion("", oForm.radioClienteSexo[0].parentNode);
    }

    return bValidacion;
}

function bajaCliente()
{
    var sDniCliente=frmClienteBaja.txtClienteDni.value.trim();
    var oCliente=oGestion.buscarCliente(sDniCliente);
    if(oCliente==null)
        mensaje("Cliente con el DNI: "+sDniCliente+" no encontrado");
    else
    {
        var bBaja=oGestion.bajaCliente(oCliente);
        if(bBaja)
        {
            mensaje("Cliente "+sDniCliente+" dado de baja correctamente");
            document.frmClienteBaja.style.display="none";
            comboEstadoInicialClientes(); //vuelve a seleccionar el primero del combo
        }
        else
            mensaje("Error al dar de baja: "+sDniCliente);
            
    }
}

function actualizaCliente(oEvento)
{
    //console.log("actualziar");
    var oE = oEvento || windows.event;
    var oForm=oE.target.parentNode.parentNode.parentNode; //recupera el formulario padre sobre el que esta el boton
    if(validarCliente(oForm))
    {
        var sDniclienteAntiguo=frmClienteModificar.comboCliente.value;
        var sDniCliente=frmClienteModificar.txtClienteDni.value.trim();
        var sNombreCliente=frmClienteModificar.txtClienteNombre.value.trim();
        var sApellidosCliente=frmClienteModificar.txtClienteApellidos.value.trim();
        var sTlfCliente=frmClienteModificar.txtClienteTelefono.value.trim();
        var sCorreoCliente=frmClienteModificar.txtClienteCorreo.value.trim();
        var sCuentaCliente=frmClienteModificar.txtClienteCuenta.value.trim();
        var sSexoCliente=frmClienteModificar.radioClienteSexo.value.trim();

        var oNuevoCliente=new Cliente(sDniCliente, sNombreCliente, sApellidosCliente, sTlfCliente, sCorreoCliente, sCuentaCliente, sSexoCliente);
        var bActualizacion=oGestion.modificarCliente(oNuevoCliente, sDniclienteAntiguo);
        if(bActualizacion)
        {
            mensaje("Cliente actualizado correctamente");
        
        }
        else
            mensaje("Ya existe un cliente con ese DNI");
        
        comboEstadoInicialClientes();
    }
    
    
}

function rellenaCamposCliente(oEvento) //actualiza
{
    var oE = oEvento || windows.event;
    var oForm=oE.target.parentNode.parentNode.parentNode; //recupera el formulario padre sobre el que esta el combo
    //console.log(oForm.name);
    var oCliente=oGestion.buscarCliente(oForm.comboCliente.value);//recupera el conductor a traves del DNI

    oForm.txtClienteDni.value=oCliente.dni;
    oForm.txtClienteNombre.value=oCliente.nombre;
    oForm.txtClienteApellidos.value=oCliente.apellidos;
    oForm.txtClienteTelefono.value=oCliente.tlf;
    oForm.txtClienteCorreo.value=oCliente.correo;
    oForm.txtClienteCuenta.value=oCliente.numCuenta;
    oForm.txtClienteSexo.value=oCliente.sexo;
}




