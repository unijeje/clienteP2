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

//botones Clientes
var oBtnClienteAlta=document.getElementById("btnMenuClienteAlta");
oBtnClienteAlta.addEventListener("click", mostrarMenuAltaCliente, false);

var oBtnClienteBaja=document.getElementById("btnMenuClienteBaja");
oBtnClienteBaja.addEventListener("click", mostrarMenuBajaCliente, false);

var oBtnClienteModificar=document.getElementById("btnMenuClienteModificar");
oBtnClienteModificar.addEventListener("click", mostrarMenuModificarCliente, false);

var oMenuGestionAutobuses=document.getElementById("MenuGestionAutobuses");
var oMenuGestionClientes=document.getElementById("MenuGestionClientes");
var oMenuGestionConductores=document.getElementById("MenuGestionConductores");


//botones Conductores

//botones Listados

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
    oBtnClienteModificar.style.display="block";
}

function mostrarMenuGestion()
{
    ocultarFormularios()
    oBtnClienteAlta.style.display="none";
    oBtnClienteBaja.style.display="none";
    oBtnClienteModificar.style.display="none";
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

    oMenuGestionClientes.style.display="none";
    oMenuGestionConductores.style.display="none";
    oMenuGestionAutobuses.style.display="block";
}

function mostrarMenuClientes()
{
    oMenuGestionConductores.style.display="none";
    oMenuGestionAutobuses.style.display="none";
    oMenuGestionClientes.style.display="block";
    oBtnClienteAlta.style.display="block";
    oBtnClienteBaja.style.display="block";
    oBtnClienteModificar.style.display="block";
}

function mostrarMenuConductores()
{
    oMenuGestionConductores.style.display="none";
    oMenuGestionAutobuses.style.display="none";
    oMenuGestionClientes.style.display="block";
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