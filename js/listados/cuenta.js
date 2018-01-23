//muestra todos los ingresos y gastos de gestion Cuenta

function listadoCuenta()
{
    var tablaEliminar=document.querySelector("TABLE");
	if(tablaEliminar!=null) //si hay una tabla en el div de listados la quita para reemplazarla
        tablaEliminar.remove();
    var oNumCuenta=document.createTextNode("Cuenta: "+oGestion.cuentaEmpresa.numCuenta);
    var oH1=document.createElement("h1");
    oH1.classList.add("text-center");
    oH1.classList.add("lead");
    oH1.appendChild(oNumCuenta);
    oCapaListado.appendChild(oH1);

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
	var oFila=oTabla.insertRow();
	oFila.classList.add("thead-dark");

    for(var i=0;i<cabeceras.length;i++)
    {
        oCelda=document.createElement("TH");
		oTexto=document.createTextNode(cabeceras[i]);
		oCelda.appendChild(oTexto);
		oFila.appendChild(oCelda);
    }

    var n=arrayCuenta.length;
    for(var i=n-1;i>=0;i--) 
    {
        console.log(saldoMomento);
        if(arrayCuenta[i].asunto=="alquiler")
        {
            ganancia=true;
        }
        else
            ganancia=false;
        
        //ASUNTO
        oFila=oTabla.insertRow(1);

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