var oBtnDarAlta=document.getElementById("btnAltaCliente");
oBtnDarAlta.addEventListener("click", AltaCliente, false);

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

}

function actualizaCliente()
{

}