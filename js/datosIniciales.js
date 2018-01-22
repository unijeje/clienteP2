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
    oGestion = new Gestion();

    var arrayClientes = oXML.querySelectorAll("gestion > cliente");
    var arrayConductores=oXML.querySelectorAll("gestion > conductor");
    var arrayAutobuses=oXML.querySelectorAll("gestion > autobus");
    var arrayAlquileres=oXML.querySelectorAll("gestion > alquiler");
    /*
    console.log(arrayClientes);
    console.log(arrayTrabajadores);
    console.log(arrayAutobuses);
    console.log(arrayAlquileres);
    */

    
    cargarClientes(arrayClientes);   
    cargarConductores(arrayConductores);
    cargarAutobuses(arrayAutobuses);
    //cargarAlquileres(arrayAlquileres);
    
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
      var iConsumoAutobus = array[i].children[3].textContent;

      var oNuevoAutobus=new Autobus(sMatriculaAutobus,iAsientosAutobus,sModeloAutobus,iConsumoAutobus);

      if(oGestion.altaAutobus(oNuevoAutobus))
        console.log("Autobus: "+oNuevoAutobus.matricula+" Introducido correctamente");
  }
}

function cargarAlquileres(array) 
{

  /*
  <alquiler id="001">
        <conductores>
            <conductor>09876509P</conductor>
            <conductor>09876589K</conductor>
        </conductores>
        <autobuses>
            <autobus>3297PQE</autobus>
            <autobus>3857KSH</autobus>
        </autobuses>
        <id>973</id>
        <horas>4</horas>
        <fecha>01/01/2018</fecha>
        <numPers>45</numPers>
        <descripcion>Excursion</descripcion>
        <origen>Colegio</origen>
        <destino>Teatro</destino>
        <kms>10</kms>
        <cliente>98765498F</cliente>
    </alquiler>
  */

for (var i = 0;i<array.length;i++) 
  {

    var nodoConductores = array[i].children[0];
    var nodoAutobuses = array[i].children[1];
    /*  
    console.log(array[i].children[0].);
      
    var oConductores=[];
    for(var i=0;i<array[i].children[0].length;i++)
    {
      console.log(array[i].children[0]);
      //oConductores.push(array[i].children[0].children[i]);
    }
    console.log(oConductores);
   
    var oConductores = array[i].attributes["id"].nodeValue;
    var oAutobuses = array[i].children[0].textContent;


    var iTelefono = array[i].children[1].textContent;

    var nodoSala = array[i].children[2];
    var iCapacidadSala = nodoSala.attributes["capacidad"].nodeValue;


    var oAlquiler=new Alquiler(oConductores, oAutobuses, sIDAlquiler, sHoras, dFecha, iNumPers, sDesc, sOrigen, sDestino, iKMs, oCliente);

    oGestion.altaAlquiler(oTeatro);
    */
  }
}

function cargarArrayConductores(oSala, nodoConductores) {

      var oConductores=[]; 
  
      for (var i = 0;i<nodoSala.children.length;i++) {
          var iIdElemento = nodoSala.children[i].attributes["id"].nodeValue;
          var sNombre = nodoSala.children[i].children[0].textContent;
          var sTipo = nodoSala.children[i].children[1].textContent;
          var sConsumible = nodoSala.children[i].children[2].textContent;
          var iPrecio = nodoSala.children[i].children[3].textContent;
  
          var oElemento = new ElementoSala(iIdElemento,sNombre,sTipo,sConsumible,iPrecio);
  
          oSala.anadirElemento(oElemento);
      }

      return 
  }