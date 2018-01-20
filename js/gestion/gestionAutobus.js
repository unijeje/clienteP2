//datos de prueba
var oAutobus1=new Autobus("4444HTH",30,"asdasd",8);
var oAutobus2=new Autobus("5555RGD",25,"PPPPP",7);

oGestion.altaAutobus(oAutobus1);
oGestion.altaAutobus(oAutobus2);

var oBtnDarAltaAutobus=document.getElementById("btnAltaAutobus");
oBtnDarAltaAutobus.addEventListener("click",fAltaAutobus,false);

var oBtnDarBajaAutobus=document.getElementById("btnBajaAutobus");
oBtnDarBajaAutobus.addEventListener("click",fBajaAutobus,false);

var oBtnModificarAutobus=document.getElementById("btnModificarAutobus");
oBtnModificarAutobus.addEventListener("click",fModificarAutobus,false);

var oComboBajaAutobus=document.frmAutobusBaja.comboAutobus;
var oComboModificaAutobus=document.frmAutobusModificar.comboAutobus;
oComboBajaAutobus.addEventListener("change", rellenaCamposAutobus, false);
oComboModificaAutobus.addEventListener("change", rellenaCamposAutobus, false);

comboEstadoInicialAutubuses();

function fAltaAutobus(){

	/////////////validar formulario///////////////////

	var sMatriculaAutobus=frmAutobusAlta.txtAutobusMatricula.value.trim();
    var iAsientosAutobus=parseInt(frmAutobusAlta.txtAutobusAsientos.value.trim());
    var sModeloAutobus=frmAutobusAlta.txtAutobusModelo.value.trim();
    var iConsumoAutobus=parseInt(frmAutobusAlta.txtAutobusConsumo.value.trim());

    var oNuevoAutobus=new Autobus(sMatriculaAutobus,iAsientosAutobus,sModeloAutobus,iConsumoAutobus);

    var bInsercion=oGestion.altaAutobus(oNuevoAutobus);
    if (bInsercion)
    {
    	document.frmAutobusAlta.reset();
    	document.frmAutobusAlta.style.display="none";
    	mensaje("Autobus dado de alta correctamente");
    }
    else
    	mensaje("Ya existe un autobus con esa matrícula");
}

function fBajaAutobus()
{
	var sMatriculaAutobus=frmAutobusAlta.txtAutobusMatricula.value.trim();

	var oNuevoAutobus=new Autobus(sMatriculaAutobus,"","","");

	var bBaja=oGestion.bajaAutobus(oNuevoAutobus);

	  if(bBaja)
        {
            mensaje("Autobus con matricula "+sMatriculaAutobus+" dado de baja correctamente");
            document.frmAutobusBaja.style.display="none";
            comboEstadoInicial(); //vuelve a seleccionar el primero del combo
        }
        else
            mensaje("Error al dar de baja: "+sMatriculaAutobus);      
    
}

function fModificarAutobus()
{

}


function rellenaCamposAutobus(oEvento) //actualiza
{
    var oE = oEvento || windows.event;
    var oForm=oE.target.parentNode.parentNode.parentNode; //recupera el formulario padre sobre el que esta el combo
    //console.log(oForm.name);
    var oAutobus=oGestion.buscarAutobus(oForm.comboAutobus.value);//recupera el autobus a traves de la matricula

     oForm.txtAutobusMatricula.value=oAutobus.matricula;
     oForm.txtAutobusAsientos.value=oAutobus.asientos;
     oForm.txtAutobusModelo.value=oAutobus.modelo;
     oForm.txtAutobusConsumo.value=oAutobus.consumo;

}