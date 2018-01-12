var oGestion;

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
oBtnAlquiler.addEventListener("click", mostrarFormNuevoAlquiler, false);

var oBtnModificarAlquiler=document.getElementById("btnModificarAlquiler");
oBtnModificarAlquiler.addEventListener("click", mostrarFormModificarAlquiler, false);

//botones Administracion

//botones Listados

//ocultar

function ocultarFormularios()
{

}


//mostrar

function mostrarMenuAlquiler()
{
    oMenuListados.style.display="none";
    oMenuGestion.style.display="none";
    oMenuAlquiler.style.display="block";
}

function mostrarMenuGestion()
{
    oMenuListados.style.display="none";    
    oMenuAlquiler.style.display="none";
    oMenuGestion.style.display="block";
}

function mostrarMenuListados()
{
    oMenuGestion.style.display="none";
    oMenuAlquiler.style.display="none";
    oMenuListados.style.display="block";
}

function mostrarFormNuevoAlquiler()
{

}

function mostrarFormModificarAlquiler()
{

}

