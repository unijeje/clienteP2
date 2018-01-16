
//datos prueba
var oCliente01=new Cliente("123", "nombre", "ape", "98765", "correo@gmail.com", "abc", "m");
var oCliente02=new Cliente("1234", "nombre2", "ape2", "298765", "correo1@gmail.com", "abdc", "f");
oGestion.altaCliente(oCliente01);
oGestion.altaCliente(oCliente02);

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

comboEstadoInicial();

var sError="";


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
        var sSexoCliente=frmClienteAlta.txtClienteSexo.value.trim();

        var oCliente=new Cliente(sDniCliente, sNombreCliente, sApellidosCliente, sTlfCliente, sCorreoCliente, sCuentaCliente, sSexoCliente);
        
        var bInserccion=oGestion.altaCliente(oCliente);
        if(bInserccion)
        {
            document.frmClienteAlta.reset();
            document.frmClienteAlta.style.display="none";
            mensaje("Cliente Insertado Correctamente");
        }
        else
        {
            mensaje("Ese cliente ya existe");
        }   
    }
    else
    {
        mensaje("Fallo en la validación "+sError);
    }
}

function validarCliente(oForm)
{

    var bValidacion=true;
    sError = "";
    //DNI
    var sDniCliente=oForm.txtClienteDni.value.trim();
    oForm.txtClienteDni.value=oForm.txtClienteDni.value.trim();

    if(!oExpRegDni.test(sDniCliente))
    {
        oForm.txtClienteDni.style.backgroundColor="red";
        oForm.txtClienteDni.focus();
        sError +="El DNI tiene que ser 8 caracteres númericos y uno alfabético \n";
        bValidacion=false;
    }
    else
    {
        oForm.txtClienteDni.style.backgroundColor="white";
    }

    //NOMBRE
    var sNombreCliente=oForm.txtClienteNombre.value.trim();
    oForm.txtClienteNombre.value=oForm.txtClienteNombre.value.trim();

    if(!oExpRegNombre.test(sNombreCliente))
    {
        oForm.txtClienteNombre.style.backgroundColor="red";
        if(bValidacion)
        oForm.txtClienteNombre.focus();
        sError +="El nombre del cliente tiene que ser entre 3 y 20 carácteres alfabéticos \n";
        bValidacion=false;
    }
    else
    oForm.txtClienteNombre.style.backgroundColor="white";

    //Apellidos
    var sApellidosCliente=oForm.txtClienteApellidos.value.trim();
    oForm.txtClienteApellidos.value=oForm.txtClienteApellidos.value.trim();

    if(!oExpRegNombre.test(sApellidosCliente))
    {
        oForm.txtClienteApellidos.style.backgroundColor="red";
        if(bValidacion)
            oForm.txtClienteApellidos.focus();
        sError +="El Apellido del cliente tiene que ser entre 3 y 20 carácteres alfabéticos \n";
        bValidacion=false;
    }
    else
    oForm.txtClienteApellidos.style.backgroundColor="white";

    //Tlf
    var sTlfCliente=oForm.txtClienteTelefono.value.trim();
    oForm.txtClienteTelefono.value=oForm.txtClienteTelefono.value.trim();

    if(!oExpRegTelefono.test(sTlfCliente))
    {
        oForm.txtClienteTelefono.style.backgroundColor="red";
        if(bValidacion)
            oForm.txtClienteTelefono.focus();
        sError +="El Telefono no es correcto \n";
        bValidacion=false;
    }
    else
        oForm.txtClienteTelefono.style.backgroundColor="white";

    //Correo
    var sCorreoCliente=oForm.txtClienteCorreo.value.trim();
    oForm.txtClienteCorreo.value=oForm.txtClienteCorreo.value.trim();

    if(!oExpRegCorreo.test(sCorreoCliente))
    {
        oForm.txtClienteCorreo.style.backgroundColor="red";
        if(bValidacion)
            oForm.txtClienteCorreo.focus();
        sError+="El correo no es correcto";
        bValidacion=false;
    }
    else
        oForm.txtClienteCorreo.style.backgroundColor="white";

    //Cuenta
    var sCuentaCliente=oForm.txtClienteCuenta.value.trim();

    //Genero
    var sSexoCliente=oForm.txtClienteSexo.value.trim();

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
            comboEstadoInicial(); //vuelve a seleccionar el primero del combo
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
        var sSexoCliente=frmClienteModificar.txtClienteSexo.value.trim();

        var oNuevoCliente=new Cliente(sDniCliente, sNombreCliente, sApellidosCliente, sTlfCliente, sCorreoCliente, sCuentaCliente, sSexoCliente);
        var bActualizacion=oGestion.modificarCliente(oNuevoCliente, sDniclienteAntiguo);
        if(bActualizacion)
        {
            mensaje("Cliente actualizado correctamente");
        
        }
        else
            mensaje("Ya existe un cliente con ese DNI");
        
        comboEstadoInicial();
    }
    else
        mensaje("Error en el formulario \n"+sError);
    
    
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




