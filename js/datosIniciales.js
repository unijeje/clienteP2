//Funciones para cargar datos iniciales
function loadXMLDoc(filename)
{
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }
    else // code for IE5 and IE6
    {
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",filename,false);

    xhttp.send();

    return xhttp.responseXML;
}

function cargarDatos(ficheroXml) 
{

    var oXML = loadXMLDoc(ficheroXml);

    //oGestion = new Gestion(oXML.getElementsByTagName("gestion")[0].attributes["id"].nodeValue);

    var gestionCuenta=parseInt(oXML.getElementsByTagName("gestion")[0].attributes["cuenta"].nodeValue);



    oGestion = new Gestion(gestionCuenta);

    var arrayClientes = oXML.querySelectorAll("gestion > cliente");
    var arrayConductores=oXML.querySelectorAll("gestion > conductor");
    var arrayAutobuses=oXML.querySelectorAll("gestion > autobus");
    var arrayAlquileres=oXML.querySelectorAll("gestion > alquiler");
    var arrayMantenimiento=oXML.querySelectorAll("gestion > mantenimiento");
	var arrayVacaciones= oXML.querySelectorAll("gestion > vacaciones");
    /*
    console.log(arrayClientes);
    console.log(arrayTrabajadores);
    console.log(arrayAutobuses);
    console.log(arrayAlquileres);
    */

    
    cargarClientes(arrayClientes);   
    cargarConductores(arrayConductores);
    cargarAutobuses(arrayAutobuses);
    cargarAlquileres(arrayAlquileres);
    cargarMantenimientos(arrayMantenimiento);
    cargarVacaciones(arrayVacaciones);
}
    
function cargarClientes(array)
{
  for (var i = 0;i<array.length;i++) 
  {
      //var iIdTrabajador = array[i].attributes["id"].nodeValue;
      var sDniCliente = array[i].children[0].textContent;
      var sNombreCliente = array[i].children[1].textContent;
      var sApellidosCliente = array[i].children[2].textContent;
      var sTlfCliente = array[i].children[3].textContent;
      var sCorreoCliente = array[i].children[4].textContent;
      var sCuentaCliente = array[i].children[5].textContent;
      var sSexoCliente = array[i].children[6].textContent;

      var oCliente=new Cliente(sDniCliente, sNombreCliente, sApellidosCliente, sTlfCliente, sCorreoCliente, sCuentaCliente, sSexoCliente);

      if(oGestion.altaCliente(oCliente))
        console.log("Cliente: "+oCliente.dni+" Introducido correctamente");
  }
}

function cargarConductores(array)
{
  for (var i = 0;i<array.length;i++) 
  {
      //var iIdTrabajador = array[i].attributes["id"].nodeValue;
      var dniConductor = array[i].children[0].textContent;
      var nombreConductor = array[i].children[1].textContent;
      var apellidosConductor = array[i].children[2].textContent;
      var sexoConductor = array[i].children[3].textContent;
      var tlfConductor = array[i].children[4].textContent;
      var emailConductor = array[i].children[5].textContent;
      var direccionConductor = array[i].children[6].textContent;
      var numCuentaConductor = array[i].children[7].textContent;

      var oConductor= new Conductor(dniConductor,nombreConductor,apellidosConductor,sexoConductor,tlfConductor,emailConductor,direccionConductor, numCuentaConductor);

      if(oGestion.altaConductor(oConductor))
        console.log("Conductor: "+oConductor.dni+" Introducido correctamente");
  }
}

function cargarAutobuses(array)
{
  for (var i = 0;i<array.length;i++) 
  {
      //var iIdTrabajador = array[i].attributes["id"].nodeValue;
      var sMatriculaAutobus = array[i].children[0].textContent;
      var iAsientosAutobus = array[i].children[1].textContent;
      var sModeloAutobus = array[i].children[2].textContent;
      var fConsumoAutobus = array[i].children[3].textContent;

      var oNuevoAutobus=new Autobus(sMatriculaAutobus,parseInt(iAsientosAutobus),sModeloAutobus,parseFloat(fConsumoAutobus));

      if(oGestion.altaAutobus(oNuevoAutobus))
        console.log("Autobus: "+oNuevoAutobus.matricula+" Introducido correctamente");
  }
}

function cargarMantenimientos(array)
{
  for(var i=0;i<array.length;i++)
  {
      var sDescripcionMant = array[i].children[0].textContent;
      var fImporteMant = array[i].children[1].textContent;
      var dFechaMant = new Date(array[i].children[2].textContent).toLocaleDateString("es-ES");
      //var dFechaMant = new Date(array[i].children[2].textContent);
      var sMatriculaMant = array[i].children[3].textContent;

      var oNuevoMant=new Mantenimiento(sDescripcionMant, fImporteMant, dFechaMant, sMatriculaMant);
      if(oGestion.altaMantenimiento(oNuevoMant))
        console.log("Mantenimiento: "+sMatriculaMant+" - "+dFechaMant+" Introducida correctamente");

  }
}

function cargarVacaciones(array){
	for(var i=0;i<array.length;i++){
		var dniConductor = array[i].children[0].textContent;
		var fechaIni = new Date(array[i].children[1].textContent).toLocaleDateString("es-ES");
		var fechaIniSinConver = new Date(array[i].children[2].textContent);
		var fechaFin = new Date(array[i].children[3].textContent).toLocaleDateString("es-ES");
		var fechaFinSinConver = new Date(array[i].children[4].textContent);
		var descripcion = array[i].children[5].textContent;
	
    var oNuevoVacaciones=new Vacaciones(dniConductor, fechaIni, fechaIniSinConver, fechaFin, fechaFinSinConver, descripcion);
		if(oGestion.altaVacaciones(oNuevoVacaciones)){
			console.log("Vacaciones: "+dniConductor+" - "+fechaIni+" - "+fechaFinSinConver+" Introducida correctamente");
		}
	}
}

function cargarAlquileres(array) 
{
for (var i = 0;i<array.length;i++) 
  {

    var nodoConductores = array[i].children[0];
    var nodoAutobuses = array[i].children[1];
    var arrayConductores=cargarArrayConductores(nodoConductores);
    var arrayAutobuses=cargarArrayAutobuses(nodoAutobuses);
    //console.log(arrayConductores);
    //console.log(arrayAutobuses);
   
    var sIDAlquiler = array[i].children[2].textContent;
    var sHoras = array[i].children[3].textContent;
    var dFecha = new Date(array[i].children[4].textContent).toLocaleDateString("es-ES");
    //var dFecha = new Date(array[i].children[4].textContent);
    var iNumPers = array[i].children[5].textContent;
    var sDesc = array[i].children[6].textContent;
    var sOrigen = array[i].children[7].textContent;
    var sDestino = array[i].children[8].textContent;
    var iKMs = array[i].children[9].textContent;
    var sDniCliente = array[i].children[10].textContent;
    oCliente=oGestion.buscarCliente(sDniCliente);


    var oAlquiler=new Alquiler(arrayConductores, arrayAutobuses, sIDAlquiler, sHoras, dFecha, iNumPers, sDesc, sOrigen, sDestino, iKMs, oCliente);

    if(oGestion.altaAlquiler(oAlquiler))
      console.log("Alquiler: "+oAlquiler.id+" Introducido correctamente");
    
  }
}

function cargarArrayConductores(nodoConductores) 
{

      var oConductores=[]; 
      //console.log(nodoConductores);
    
      for (var i = 0;i<nodoConductores.children.length;i++)
      {
        var sDNI=nodoConductores.children[i].textContent;
        var oConductor=oGestion.buscarConductor(sDNI);
        //console.log(oConductor);
        oConductores.push(oConductor);
      }

      return oConductores;
      
}

function cargarArrayAutobuses(nodoAutobuses) 
{

      var oAutobuses=[]; 
      //console.log(nodoConductores);
    
      for (var i = 0;i<nodoAutobuses.children.length;i++)
      {
        var sMatricula=nodoAutobuses.children[i].textContent;
        var oAutobus=oGestion.buscarAutobus(sMatricula);
        //console.log(oConductor);
        oAutobuses.push(oAutobus);
      }

      return oAutobuses;
      
}