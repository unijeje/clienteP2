var oGestion=new Gestion();

//botones principales
var oBtnAlquiler=document.getElementById("btnAlquiler");
oBtnAlquiler.addEventListener("click", mostrarMenuAlquiler, false);

var oBtnGestion=document.getElementById("btnGestion");
oBtnGestion.addEventListener("click", mostrarMenuGestion, false);

var oBtnListados=document.getElementById("btnListados");
oBtnListados.addEventListener("click", mostrarMenuListados, false);

var oMenuAlquiler=document.getElementById("menuAlquiler");
var oMenuGestion=document.getElementById("menuGestion");
var oMenuListados=document.getElementById("menuListados");

//botones alquiler

var oBtnNuevoAlquiler=document.getElementById("btnNuevoAlquiler");
oBtnNuevoAlquiler.addEventListener("click", mostrarFormNuevoAlquiler, false);

var oBtnModificarAlquiler=document.getElementById("btnModificarAlquiler");
oBtnModificarAlquiler.addEventListener("click", mostrarFormModificarAlquiler, false);

//botones Administracion

var oBtnMenuAutobuses=document.getElementById("btnMenuAutobuses");
oBtnMenuAutobuses.addEventListener("click", mostrarMenuAutobuses, false);

var oBtnMenuClientes=document.getElementById("btnMenuClientes");
oBtnMenuClientes.addEventListener("click", mostrarMenuClientes, false);

var oBtnMenuConductores=document.getElementById("btnMenuConductores");
oBtnMenuConductores.addEventListener("click", mostrarMenuConductores, false);

//botones Autobuses
var oBtnAutobusAlta=document.getElementById("btnMenuAutobusAlta");
oBtnAutobusAlta.addEventListener("click", mostrarMenuAltaAutobus, false);

var oBtnAutobusBaja=document.getElementById("btnMenuAutobusBaja");
oBtnAutobusBaja.addEventListener("click", mostrarMenuBajaAutobus, false);

var oBtnAutobusModificar=document.getElementById("btnMenuAutobusModificar");
oBtnAutobusModificar.addEventListener("click", mostrarMenuModificarAutobus, false);

var oBtnAutobusMantenimiento=document.getElementById("btnMenuAutobusMantenimiento");
oBtnAutobusMantenimiento.addEventListener("click", mostrarMenuMantenimientoAutobus, false);

//botones Clientes
var oBtnClienteAlta=document.getElementById("btnMenuClienteAlta");
oBtnClienteAlta.addEventListener("click", mostrarMenuAltaCliente, false);

var oBtnClienteBaja=document.getElementById("btnMenuClienteBaja");
oBtnClienteBaja.addEventListener("click", mostrarMenuBajaCliente, false);

var oBtnClienteModificar=document.getElementById("btnMenuClienteModificar");
oBtnClienteModificar.addEventListener("click", mostrarMenuModificarCliente, false);

//botones Conductores
var oBtnConductorAlta=document.getElementById("btnMenuConductorAlta");
oBtnConductorAlta.addEventListener("click", mostrarMenuAltaConductor, false);

var oBtnConductorBaja=document.getElementById("btnMenuConductorBaja");
oBtnConductorBaja.addEventListener("click", mostrarMenuBajaConductor, false);

var oBtnConductorModificar=document.getElementById("btnMenuConductorModificar");
oBtnConductorModificar.addEventListener("click", mostrarMenuModificarConductor, false);

var oBtnConductorVacaciones=document.getElementById("btnMenuConductorVacaciones");
oBtnConductorVacaciones.addEventListener("click", mostrarMenuVacacionesConductor, false);

var oMenuGestionAutobuses=document.getElementById("MenuGestionAutobuses");
var oMenuGestionClientes=document.getElementById("MenuGestionClientes");
var oMenuGestionConductores=document.getElementById("MenuGestionConductores");

//botones Listados


//botones panel de mensajes
var oBtnCerrar=document.getElementById("btnCerrar");
oBtnCerrar.addEventListener("click", cerrar, false);
var oPanelMensajes=document.getElementById("panelMensajes");
var oPanelMensajeTexto=document.getElementById("pTextoMensaje");

//ocultar

function ocultarFormularios()
{
    //todos los formularios
    oTodosFormularios=document.querySelectorAll("form");
    for(var i=0;i<oTodosFormularios.length;i++)
        oTodosFormularios[i].style.display="none";   
  
}
//mostrar
function mostrarMenuAlquiler()
{
    ocultarFormularios()
    oMenuListados.style.display="none";
    oMenuGestion.style.display="none";
    oMenuAlquiler.style.display="block";
}

function mostrarMenuGestion()
{
    ocultarFormularios()
    oBtnAutobusAlta.style.display="none";
    oBtnAutobusBaja.style.display="none";
    oBtnAutobusModificar.style.display="none";
    oBtnAutobusMantenimiento.style.display="none";
    oBtnClienteAlta.style.display="none";
    oBtnClienteBaja.style.display="none";
    oBtnClienteModificar.style.display="none";
    oBtnConductorAlta.style.display="none";
    oBtnConductorBaja.style.display="none";
    oBtnConductorModificar.style.display="none";
    oBtnConductorVacaciones.style.display="none";
    oMenuListados.style.display="none";    
    oMenuAlquiler.style.display="none";
    oMenuGestion.style.display="block";
}

function mostrarMenuListados()
{
    ocultarFormularios()
    oMenuGestion.style.display="none";
    oMenuAlquiler.style.display="none";
    oMenuListados.style.display="block";
    
}

function mostrarFormNuevoAlquiler()
{
    document.frmModificarAlquiler.style.display="none";
    document.frmNuevoAlquiler.style.display="block";
}

function mostrarFormModificarAlquiler()
{
    document.frmNuevoAlquiler.style.display="none";
    document.frmModificarAlquiler.style.display="block";
}


//botones administración
function mostrarMenuAutobuses()
{
    ocultarFormularios()
    oMenuGestionClientes.style.display="none";
    oMenuGestionConductores.style.display="none";
    oMenuGestionAutobuses.style.display="block";
    oBtnAutobusAlta.style.display="block";
    oBtnAutobusBaja.style.display="block";
    oBtnAutobusModificar.style.display="block";
    oBtnAutobusMantenimiento.style.display="block";
}

function mostrarMenuClientes()
{
    ocultarFormularios()
    oMenuGestionConductores.style.display="none";
    oMenuGestionAutobuses.style.display="none";
    oMenuGestionClientes.style.display="block";
    oBtnClienteAlta.style.display="block";
    oBtnClienteBaja.style.display="block";
    oBtnClienteModificar.style.display="block";
}

function mostrarMenuConductores()
{
    ocultarFormularios()
    oMenuGestionAutobuses.style.display="none";
    oMenuGestionClientes.style.display="none";
    oMenuGestionConductores.style.display="block";
    oBtnConductorAlta.style.display="block";
    oBtnConductorBaja.style.display="block";
    oBtnConductorModificar.style.display="block";
    oBtnConductorVacaciones.style.display="block";
}
//botones administracion cliente
function mostrarMenuAltaCliente()
{
    document.frmClienteBaja.style.display="none";
    document.frmClienteModificar.style.display="none";
    document.frmClienteAlta.style.display="block";
}
function mostrarMenuBajaCliente()
{
    document.frmClienteModificar.style.display="none";
    document.frmClienteAlta.style.display="none";
    document.frmClienteBaja.style.display="block";
}
function mostrarMenuModificarCliente()
{
    document.frmClienteAlta.style.display="none";
    document.frmClienteBaja.style.display="none";
    document.frmClienteModificar.style.display="block";
}

//botones administración autobuses

function mostrarMenuAltaAutobus()
{
    document.frmAutobusBaja.style.display="none";
    document.frmAutobusModificar.style.display="none";
    document.frmAutobusMantenimiento.style.display="none";
    document.frmAutobusAlta.style.display="block";
}
function mostrarMenuBajaAutobus()
{
    document.frmAutobusModificar.style.display="none";
    document.frmAutobusMantenimiento.style.display="none";
    document.frmAutobusAlta.style.display="none";
    document.frmAutobusBaja.style.display="block";
}
function mostrarMenuModificarAutobus()
{
    document.frmAutobusMantenimiento.style.display="none";
    document.frmAutobusAlta.style.display="none";
    document.frmAutobusBaja.style.display="none";
    document.frmAutobusModificar.style.display="block";
}
function mostrarMenuMantenimientoAutobus()
{
    document.frmAutobusModificar.style.display="none";
    document.frmAutobusAlta.style.display="none";
    document.frmAutobusBaja.style.display="none";
    document.frmAutobusMantenimiento.style.display="block";
}

//botones administración conductores
function mostrarMenuAltaConductor()
{
    document.frmConductorVacaciones.style.display="none";
    document.frmConductorBaja.style.display="none";
    document.frmConductorModificar.style.display="none";
    document.frmConductorAlta.style.display="block";
}

function mostrarMenuBajaConductor()
{
    document.frmConductorVacaciones.style.display="none";
    document.frmConductorModificar.style.display="none";
    document.frmConductorAlta.style.display="none";
    document.frmConductorBaja.style.display="block";
}

function mostrarMenuModificarConductor()
{
    document.frmConductorVacaciones.style.display="none";
    document.frmConductorAlta.style.display="none";
    document.frmConductorBaja.style.display="none";
    document.frmConductorModificar.style.display="block";
}

function mostrarMenuVacacionesConductor()
{
    document.frmConductorAlta.style.display="none";
    document.frmConductorBaja.style.display="none";
    document.frmConductorModificar.style.display="none";
    document.frmConductorVacaciones.style.display="block";
}

//panel de mensajes
function mensaje(sTexto)
{
	oPanelMensajeTexto.textContent=sTexto;
	oPanelMensajes.style.display = "block";
}

function cerrar()
{
	oPanelMensajes.style.display = "none";
}


function comboEstadoInicial() //al iniciar el programa muestra los datos del primero y al borrar/actualizar vuelve a mostrar el primero
{
    //alquiler

    //cliente
    var oComboBajaCliente=document.frmClienteBaja.comboCliente;
    var oComboModificaCliente=document.frmClienteModificar.comboCliente;
    if(oComboBajaCliente.firstChild)
    {
        oComboBajaCliente.firstChild.selected;// seleccionar el primero al cargar el programa
        oComboModificaCliente.firstChild.selected;// seleccionar el primero al cargar el programa
        var oCliente=oGestion.buscarCliente(frmClienteModificar.comboCliente.value);
        
        frmClienteModificar.txtClienteDni.value=oCliente.dni;
        frmClienteModificar.txtClienteNombre.value=oCliente.nombre;
        frmClienteModificar.txtClienteApellidos.value=oCliente.apellidos;
        frmClienteModificar.txtClienteTelefono.value=oCliente.tlf;
        frmClienteModificar.txtClienteCorreo.value=oCliente.correo;
        frmClienteModificar.txtClienteCuenta.value=oCliente.numCuenta;
        frmClienteModificar.txtClienteSexo.value=oCliente.sexo;

        frmClienteBaja.txtClienteDni.value=oCliente.dni;
        frmClienteBaja.txtClienteNombre.value=oCliente.nombre;
        frmClienteBaja.txtClienteApellidos.value=oCliente.apellidos;
        frmClienteBaja.txtClienteTelefono.value=oCliente.tlf;
        frmClienteBaja.txtClienteCorreo.value=oCliente.correo;
        frmClienteBaja.txtClienteCuenta.value=oCliente.numCuenta;
        frmClienteBaja.txtClienteSexo.value=oCliente.sexo;

    }  
    else
    {
        frmClienteModificar.txtClienteDni.value=null;
        frmClienteModificar.txtClienteNombre.value=null;
        frmClienteModificar.txtClienteApellidos.value=null;
        frmClienteModificar.txtClienteTelefono.value=null;
        frmClienteModificar.txtClienteCorreo.value=null;
        frmClienteModificar.txtClienteCuenta.value=null;
        frmClienteModificar.txtClienteSexo.value=null;

        frmClienteBaja.txtClienteDni.value=null;
        frmClienteBaja.txtClienteNombre.value=null;
        frmClienteBaja.txtClienteApellidos.value=null;
        frmClienteBaja.txtClienteTelefono.value=null;
        frmClienteBaja.txtClienteCorreo.value=null;
        frmClienteBaja.txtClienteCuenta.value=null;
        frmClienteBaja.txtClienteSexo.value=null;
    }

    //conductores

    //autobuses
}