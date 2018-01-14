
//datos prueba
var oCliente01=new Cliente("123", "nombre", "ape", "98765", "correo@gmail.com", "abc", "m");
var oCliente02=new Cliente("1234", "nombre2", "ape2", "298765", "correo1@gmail.com", "abdc", "f");
oGestion.altaCliente(oCliente01);
oGestion.altaCliente(oCliente02);

var oBtnDarAltaCliente=document.getElementById("btnAltaCliente");
oBtnDarAltaCliente.addEventListener("click", AltaCliente, false);

var oBtnDarBajaCliente=document.getElementById("btnBajaCliente");
oBtnDarBajaCliente.addEventListener("click", bajaCliente, false);

var oBtnActualizarCliente=document.getElementById("btnModificarCliente");
oBtnActualizarCliente.addEventListener("click", actualizaCliente, false);

var oComboBajaCliente=document.frmClienteBaja.comboCliente;
var oComboModificaCliente=document.frmClienteModificar.comboCliente;
oComboBajaCliente.addEventListener("change", rellenaCamposCliente, false);
oComboModificaCliente.addEventListener("change", rellenaCamposCliente, false);

comboEstadoInicial();


function AltaCliente()
{
    if(validarAltaCliente())
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
        mensaje("Fallo en la validación");
    }
}

function validarAltaCliente()
{
    return true;
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

function actualizaCliente()
{
    //console.log("actualziar");
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




