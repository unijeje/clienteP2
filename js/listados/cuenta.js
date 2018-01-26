//muestra todos los ingresos y gastos de gestion Cuenta

var btnOrdenarFecha=document.getElementById("btnOrdenarCuentaFecha");
btnOrdenarFecha.addEventListener("click", listadoCuentaPorFecha, false);

function listadoCuenta()
{
    var tablaEliminar=document.querySelector("TABLE");
	if(tablaEliminar!=null) //si hay una tabla en el div de listados la quita para reemplazarla
        tablaEliminar.remove();
    var h1Eliminar=document.querySelector("H1");
    if(h1Eliminar!=null) //si hay una tabla en el div de listados la quita para reemplazarla
        h1Eliminar.remove();
    var oNumCuenta=document.createTextNode("Cuenta: "+oGestion.cuentaEmpresa.numCuenta);
    var oH1=document.createElement("h1");
    oH1.classList.add("text-center");
    oH1.classList.add("lead");
    oH1.appendChild(oNumCuenta);
    campoCuenta.appendChild(oH1);

    var saldoMomento=0;
    var arrayCuenta=oGestion.cuentaEmpresa.apuntes; //todos los apuntes que se han realizado
    var ganancia=true; //true si es alquiler, false si es pago mantenimiento o a trabajador
    
    var cabeceras=[];
    cabeceras[0]="Asunto";
    cabeceras[1]="Importe";
    cabeceras[2]="Fecha";
    cabeceras[3]="SALDO";

    var oCelda;
    var oTexto;

    var oTabla=document.createElement("TABLE");
    //var oTHead=oTabla.createTHead();
	var oFila=oTabla.insertRow();
	oFila.classList.add("thead-dark");

    for(var i=0;i<cabeceras.length;i++)
    {
        oCelda=document.createElement("TD");
        oTexto=document.createTextNode(cabeceras[i]);
        
        oCelda.appendChild(oTexto);
        oCelda.classList.add("bg-info");
        oCelda.classList.add("lead");
		oFila.appendChild(oCelda);
    }

    var n=arrayCuenta.length;
    for(var i=0;i<n;i++) 
    {
        //console.log(saldoMomento);
        if(arrayCuenta[i].asunto=="alquiler")
        {
            ganancia=true;
        }
        else
            ganancia=false;
        
        //ASUNTO
        oFila=oTabla.insertRow(1);
        oFila.dataset.fecha=arrayCuenta[i].fecha;

        oCelda=oFila.insertCell();
        oTexto=document.createTextNode(arrayCuenta[i].asunto); 
        oCelda.appendChild(oTexto);
        
        //Importe
   
        oCelda=oFila.insertCell();
        oTexto=document.createTextNode(arrayCuenta[i].importe); 
        oCelda.appendChild(oTexto);

        //fecha

        oCelda=oFila.insertCell();
        oTexto=document.createTextNode(arrayCuenta[i].fecha); 
        oCelda.appendChild(oTexto);


        //saldo
        if(ganancia)
            saldoMomento=parseFloat(saldoMomento+parseFloat(arrayCuenta[i].importe));
        else
            saldoMomento=parseFloat(saldoMomento-parseFloat(arrayCuenta[i].importe));
        oCelda=oFila.insertCell();
        oTexto=document.createTextNode(saldoMomento); 
        oCelda.appendChild(oTexto);


        
    }

    oTabla.classList.add("table");
	oTabla.classList.add("table-striped");
	oTabla.classList.add("text-center");
	oCapaListado.appendChild(oTabla);

    
}
/*Falla algo, el sort en oFecha lo hace bien, pero a la hora de insertar las filas en orden no lo hace bien*/

function listadoCuentaPorFecha()
{
    //alert("ordenar por fecha");
    var oFilas=document.querySelectorAll("#resultadoListados table tbody tr");
    var oFecha=[];
    var oFilasOrdenado=[];
    //console.log(oFilas);

    for(var i=1;i<oFilas.length;i++)//coger datafecha
    {
        oFecha.push(new Date(oFilas[i].dataset.fecha));
    }

    oFecha.sort(date_sort_desc); //ordenar array

    /*
    for(var i=0;i<oFecha.length;i++)
    console.log(oFecha[i].toDateString());
    */
    for(var i=0;i<oFecha.length;i++)
    {
        var bMetido=false;
        //console.log(oFecha[i].toDateString());
        for(var j=1;j<oFilas.length && bMetido==false;j++)
        {
            /*
            console.log(i);
            console.log("fila: "+new Date(oFilas[j].dataset.fecha));
            console.log("array: "+oFecha[i]);
            */
            if(new Date(oFilas[j].dataset.fecha).toDateString()==oFecha[i].toDateString())
            {
                oFilasOrdenado.push(oFilas[j]);
                oFilas[j].dataset.fecha=""; //para que no vuelva a coger repetidas
                bMetido=true;
            }
        }
            
    }
    for (var i=0;i<oFilasOrdenado.length;i++) //vuelvo a meter dataset en las filas
    {
        oFilasOrdenado[i].dataset.fecha=oFecha[i];
    }
    //console.log(oFilasOrdenado);

    var oBodyTable=document.querySelector("#resultadoListados table tbody");
    for(var i=0;i<oFilasOrdenado.length;i++) //insertar
    {
        
        oBodyTable.appendChild(oFilasOrdenado[i]);
    }
    
}

function sortNumber(a,b) {
    return b-a;
}
var date_sort_desc = function (date1, date2) {
    // This is a comparison function that will result in dates being sorted in
    // ASCENDING order.
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
  };