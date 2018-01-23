//datos de prueba
var oAutobus1=new Autobus("4444HTH",30,"asdasd",8);
var oAutobus2=new Autobus("5555RGD",25,"PPPPP",7);

var oMantenimiento44=new Mantenimiento("Cambio de aceite",55,"06/02/2018","4444HTH");

oGestion.altaAutobus(oAutobus1);
oGestion.altaAutobus(oAutobus2);
oGestion.altaMantenimiento(oMantenimiento44);
//console.log(oMantenimiento44.fecha);


var oBtnDarAltaAutobus=document.getElementById("btnAltaAutobus");
oBtnDarAltaAutobus.addEventListener("click",fAltaAutobus,false);

var oBtnDarBajaAutobus=document.getElementById("btnBajaAutobus");
oBtnDarBajaAutobus.addEventListener("click",fBajaAutobus,false);

var oBtnModificarAutobus=document.getElementById("btnModificarAutobus");
oBtnModificarAutobus.addEventListener("click",fModificarAutobus,false);

var oBtnAltaMantenimiento=document.getElementById("btnAltaMantenimiento");
oBtnAltaMantenimiento.addEventListener("click",fAltaMantenimiento,false);
var oBtnBajaMantenimiento=document.getElementById("btnBajaMantenimiento");
oBtnBajaMantenimiento.addEventListener("click",fBajaMantenimiento,false);


var oComboBajaAutobus=document.frmAutobusBaja.comboAutobus;
var oComboModificaAutobus=document.frmAutobusModificar.comboAutobus;
var oComboAltaMantenimiento=document.frmAltaMantenimiento.comboAutobus;
var oComboAutobusRevisado=document.frmBajaMantenimiento.comboAutobusRevisado;
var oComboAutobusRevisado2=document.frmModificarMantenimiento.comboAutobusRevisado;
var oRadioMantenimientoSeleccion=document.frmAutobusMantenimiento.rdMantenimientoSeleccion;

oComboBajaAutobus.addEventListener("change", rellenaCamposAutobus, false);
oComboModificaAutobus.addEventListener("change", rellenaCamposAutobus, false);
oComboAutobusRevisado.addEventListener("change", rellenaCamposMantenimiento, false);
oComboAutobusRevisado2.addEventListener("change", rellenaCamposMantenimiento, false);

oRadioMantenimientoSeleccion=document.getElementById("rdMantenimientoSeleccion");
oRadioMantenimientoSeleccion.addEventListener("click", muestraFormsMantenimiento, false);
oRadioMantenimientoSeleccion1=document.getElementById("rdMantenimientoSeleccion1");
oRadioMantenimientoSeleccion1.addEventListener("click", muestraFormsMantenimiento1, false);
oRadioMantenimientoSeleccion2=document.getElementById("rdMantenimientoSeleccion2");
oRadioMantenimientoSeleccion2.addEventListener("click", muestraFormsMantenimiento2, false);


comboEstadoInicialAutubuses();

function fAltaAutobus(oEvento){

    var oE = oEvento || windows.event;
    var oForm=oE.target.parentNode.parentNode.parentNode; //recupera el formulario padre sobre el que esta el boton
	/////////////validar formulario///////////////////
    if (validarAutobus(oForm)){

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
    else
    {
        mensaje("Fallo en la validación");
    }
}

function fBajaAutobus()
{
	var sMatriculaAutobus=frmAutobusBaja.txtAutobusMatricula.value.trim();
    //console.log(sMatriculaAutobus);

	var oNuevoAutobus=new Autobus(sMatriculaAutobus,"","","");

	var bBaja=oGestion.bajaAutobus(oNuevoAutobus);

	  if(bBaja)
        {
            mensaje("Autobus con matricula "+sMatriculaAutobus+" dado de baja correctamente");
            document.frmAutobusBaja.style.display="none";
            comboEstadoInicialAutubuses(); //vuelve a seleccionar el primero del combo
        }
        else
            mensaje("Error al dar de baja: "+sMatriculaAutobus);      
    
}

function fModificarAutobus(oEvento)
{
    var oE = oEvento || windows.event;
    var oForm=oE.target.parentNode.parentNode.parentNode; //recupera el formulario padre sobre el que esta el boton

    if (validarAutobus(oForm)){
        var sMatriculaAutobus=frmAutobusModificar.txtAutobusMatricula.value.trim();
        var iAsientosAutobus=parseInt(frmAutobusModificar.txtAutobusAsientos.value.trim());
        var sModeloAutobus=frmAutobusModificar.txtAutobusModelo.value.trim();
        var iConsumoAutobus=parseInt(frmAutobusModificar.txtAutobusConsumo.value.trim());

        var oNuevoAutobus=new Autobus(sMatriculaAutobus,iAsientosAutobus,sModeloAutobus,iConsumoAutobus);

        var bInsercion=oGestion.modificarAutobus(oNuevoAutobus);
        if (bInsercion)
        {
            document.frmAutobusModificar.reset();
            document.frmAutobusModificar.style.display="none";
            mensaje("Autobús modificado correctamente");
            comboEstadoInicialAutubuses();
        }
        else
            mensaje("No se ha podido modificar el autobús");
    }
    else
        mensaje("Fallo en la validación");
}

function fAltaMantenimiento()
{
    var sDescripcion=frmAltaMantenimiento.txtDescripcionMantenimiento.value.trim();
    var fImporte=parseFloat(frmAltaMantenimiento.txtImporteMantenimiento.value.trim());
    var dFecha=new Date(frmAltaMantenimiento.txtMantenimientoFecha.value.trim());
    var sMatricula=frmAltaMantenimiento.comboAutobus.value.trim();

    dFecha.toLocaleDateString("es-ES");
    //console.log(dFecha);
    //console.log(sMatricula);
    var oNuevoMantenimiento=new Mantenimiento(sDescripcion,fImporte,dFecha,sMatricula);
    //console.log(oNuevoMantenimiento.fecha);
    var bInsercion=oGestion.altaMantenimiento(oNuevoMantenimiento);
    if(bInsercion){
        document.frmAltaMantenimiento.reset();
        document.frmAltaMantenimiento.style.display="none";
        document.frmAutobusMantenimiento.style.display="none";


        oGestion.actualizaComboRevisado();
        /*
        oGestion.gestionContabilidad("mantenimiento", oGestion.cuentaEmpresa.numCuenta, fImporte, dFecha);
        */
        
        
        
        mensaje("Mantenimiento añadido correctamente");
        //actualizar combo mantenimientos
    }
    else
        mensaje("El autobús seleccionado ya tiene pasado el mantenimiento");

}

function fBajaMantenimiento()
{
    var sMatricula=frmBajaMantenimiento.comboAutobusRevisado.value.trim();

    var anulado=oGestion.bajaMantenimiento(sMatricula);
    if (anulado)
        mensaje("Mantenimiento anulado correctamente");
    
    else
        mensaje("Error al anular el mantenimiento");

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

function rellenaCamposMantenimiento(oEvento) //actualiza
{
    var oE = oEvento || windows.event;
    var oForm=oE.target.parentNode.parentNode.parentNode; //recupera el formulario padre sobre el que esta el combo
    //console.log(oForm.name);
    console.log(oForm.comboAutobusRevisado.value);
    var oMantenimiento=oGestion.buscarMantenimiento(oForm.comboAutobusRevisado.value);//recupera el autobus a traves de la matricula

    console.log(oMantenimiento.fecha);
     oForm.txtDescripcionMantenimiento.value=oMantenimiento.descripcion;
     oForm.txtImporteMantenimiento.value=oMantenimiento.importe;
     oForm.txtMantenimientoFecha.value=oMantenimiento.fecha;

}

function muestraFormsMantenimiento()
{
    document.frmAltaMantenimiento.style.display="block";
    document.frmBajaMantenimiento.style.display="none";
    document.frmModificarMantenimiento.style.display="none";
    /*
    if(oRadioMantenimientoSeleccion.value=="Alta"){
        document.frmAltaMantenimiento.style.display="block";
        document.frmBajaMantenimiento.style.display="none";
        document.frmModificarMantenimiento.style.display="none";
    }
    else if(oRadioMantenimientoSeleccion.value=="Baja"){
            document.frmAltaMantenimiento.style.display="none";
            document.frmBajaMantenimiento.style.display="block";
            document.frmModificarMantenimiento.style.display="none";
        }
        else{
            document.frmAltaMantenimiento.style.display="none";
            document.frmBajaMantenimiento.style.display="none";
            document.frmModificarMantenimiento.style.display="block";
        }

    */
}

function muestraFormsMantenimiento1()
{
    document.frmAltaMantenimiento.style.display="none";
    document.frmBajaMantenimiento.style.display="block";
    document.frmModificarMantenimiento.style.display="none";
    
}
function muestraFormsMantenimiento2()
{
    document.frmAltaMantenimiento.style.display="none";
    document.frmBajaMantenimiento.style.display="none";
    document.frmModificarMantenimiento.style.display="block";
    
}


function validarAutobus(oForm)
{
    var bValidacion=true;
    var sError="";

    //Matricula
    var sMatricula=oForm.txtAutobusMatricula.value.trim();
    oForm.txtAutobusMatricula.value=oForm.txtAutobusMatricula.value.trim();

    if(!oExpRegMatricula.test(sMatricula))
    {
        oForm.txtAutobusMatricula.parentNode.parentNode.classList.add("has-error");
        oForm.txtAutobusMatricula.focus();
        sError="La matricula debe tener 4 numeros y 3 letras mayúsculas";
        falloValidacion(sError,oForm.txtAutobusMatricula);
        bValidacion=false;
    }
    else
    {
         oForm.txtAutobusMatricula.parentNode.parentNode.classList.remove("has-error");
         falloValidacion("",oForm.txtAutobusMatricula);
    }

    //num asientos

    //MARCA
    var sModelo=oForm.txtAutobusModelo.value.trim();
    oForm.txtAutobusModelo.value=oForm.txtAutobusModelo.value.trim();

    if(!oExpRegModelo.test(sModelo))
    {
        oForm.txtAutobusModelo.parentNode.parentNode.classList.add("has-error");
        oForm.txtAutobusModelo.focus();
        sError="El modelo debe estar entre 3 y 20 caracteres";
        falloValidacion(sError,oForm.txtAutobusModelo);
        bValidacion=false;
    }
    else
    {
         oForm.txtAutobusModelo.parentNode.parentNode.classList.remove("has-error");
         falloValidacion("",oForm.txtAutobusModelo);
    }

    //CONSUMO
    var fConsumo=parseFloat(oForm.txtAutobusConsumo.value.trim());
    oForm.txtAutobusConsumo.value=oForm.txtAutobusConsumo.value.trim();

    if(!oExpRegConsumo.test(fConsumo))
    {
        oForm.txtAutobusConsumo.parentNode.parentNode.classList.add("has-error");
        oForm.txtAutobusConsumo.focus();
        sError="El consumo debe tener 1 o 2 caracteres enteros y uno decimal";
        falloValidacion(sError,oForm.txtAutobusConsumo);
        bValidacion=false;
    }
    else
    {
         oForm.txtAutobusConsumo.parentNode.parentNode.classList.remove("has-error");
         falloValidacion("",oForm.txtAutobusConsumo);
    }


    return bValidacion;
    
}