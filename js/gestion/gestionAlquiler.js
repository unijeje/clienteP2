
frmNuevoAlquiler.txtAlquilerNumPers.addEventListener("focusout", gestionCalcularNumConductores);
frmNuevoAlquiler.txtAlquilerNumPers.addEventListener("focusout", gestionCalcularNumAutobuses);
frmNuevoAlquiler.txtAlquilerNumPers.addEventListener("focusout", comprobarCero);


var oAltaAlquiler=document.getElementById("btnAltaAlquiler");
oAltaAlquiler.addEventListener("click", altaAlquiler, false);


function altaAlquiler(oEvento)
{
    var oE=oEvento || windows.event;
    var oForm=oE.target.parentNode.parentNode.parentNode; //recupera el formulario padre sobre el que esta el boton
    if(validarAlquiler(oForm))
    {
        var sDniCliente=oForm.comboCliente.value.trim();
        //buscar Cliente
        var oCliente=oGestion.buscarCliente(sDniCliente);
        //console.log(oCliente);
        var sIDAlquiler=oForm.txtAlquilerID.value.trim();
        var sHoras=oForm.txtAlquilerHoras.value.trim();
        var dFecha=oForm.txtAlquilerFecha.value.trim();
        var iNumPers=oForm.txtAlquilerNumPers.value.trim();
        var sDesc=oForm.txtAlquilerDesc.value.trim();
        var sOrigen=oForm.txtAlquilerOrigen.value.trim();
        var sDestino=oForm.txtAlquilerDestino.value.trim();
        var iKMs=oForm.txtAlquilerKms.value.trim();
        
        //conductores
        var oConductores=[];
        var oComboConductores=oForm.querySelectorAll("#comboConductores");
        for (var i=0;i<oComboConductores.length;i++)
            oConductores.push(oGestion.buscarConductor(oComboConductores[i].value));
        /*
        for (var i=0;i<oComboConductores.length;i++)
            console.log(oConductores[i]);
        */
        //Autobuses
        var oAutobuses=[];
        var oComboAutobuses=oForm.querySelectorAll("#comboAutobuses");
        for (var i=0;i<oComboAutobuses.length;i++)
            oAutobuses.push(oGestion.buscarAutobus(oComboAutobuses[i].value));

        //arrayConductores, arrayAutobuses, sID, iHoras, dFecha, iNumPers, sDescripcion, sOrigen, sDestino, iKMS, oCliente
        var oAlquiler=new Alquiler(oConductores, oAutobuses, sIDAlquiler, sHoras, dFecha, iNumPers, sDesc, sOrigen, sDestino, iKMs, oCliente);
        //console.log(oAlquiler);
        var bInserccion=oGestion.altaAlquiler(oAlquiler);
        if(bInserccion)
        {
            oForm.reset();
            oForm.style.display="none";
            mensaje("Alquiler insertado Correctamente");
        }
        else
            mensaje("Ya existe un alquiler con ese ID");

    }
    else
        mensaje("Fallo en la validación");
    
}

function validarAlquiler(oForm)
{
    var bValidacion=true;

    /*IDALQUILER*/
    var sIDAlquiler=oForm.txtAlquilerID.value.trim();

    if(!oExpRegEsNumero.test(sIDAlquiler))
    {
        oForm.txtAlquilerID.parentNode.parentNode.classList.add("has-error");
        oForm.txtAlquilerID.focus();
        sError="El ID de alquiler tiene que ser un número";
        falloValidacion(sError, oForm.txtAlquilerID);
        bValidacion=false;
    }
    else
        oForm.txtAlquilerID.parentNode.parentNode.classList.remove("has-error");


    /*Combo Conductores no se repite*/
    var oComboConductores=oForm.querySelectorAll("#comboConductores");
    if(comprobarRepetido(oComboConductores))
    {
        bValidacion=false;
        for(var i=0;i<oComboConductores.length;i++)
            oComboConductores[i].parentNode.parentNode.classList.add("has-error");
        sError="Valor del combo repetido";
        var oComboConductorOrig=oForm.querySelector(".alquilerConductoresOriginal").childNodes[3].childNodes[1];
        falloValidacion(sError, oComboConductorOrig);
    }
    else
    {
        for(var i=0;i<oComboConductores.length;i++)
            oComboConductores[i].parentNode.parentNode.classList.remove("has-error");
    }

    /*Combo Autobuses no se repite*/
    var oComboAutobuses=oForm.querySelectorAll("#comboAutobuses");
    if(comprobarRepetido(oComboAutobuses))
    {
        bValidacion=false;
        for(var i=0;i<oComboAutobuses.length;i++)
            oComboAutobuses[i].parentNode.parentNode.classList.add("has-error");
        var oComboConductorOrig=oForm.querySelector(".alquilerAutobusesOriginal").childNodes[3].childNodes[1];
        falloValidacion(sError, oComboConductorOrig);
    }
    else
    {
        for(var i=0;i<oComboAutobuses.length;i++)
            oComboAutobuses[i].parentNode.parentNode.classList.remove("has-error");
    }


    return bValidacion;
}

function comprobarRepetido(oArray)
{
    var res=false;

    var oComprobar=[];

    for (var i=0;i<oArray.length;i++)
        oComprobar.push(oArray[i].value);

    for(var i=0;i<oComprobar.length && res==false;i++)
    {
        var iContador=0; // si se repite mas de una vez falla validacion
        for(var j=0;j<oComprobar.length && res==false;j++)
        {
            if(oComprobar[i]==oComprobar[j])
                iContador++;
        }
        if(iContador>=2)
            res=true;
    }

    return res;
}

function comprobarCero(oEvento)
{
    var oE=oEvento || windows.event;
    var oForm=oE.target.parentNode.parentNode.parentNode; //recupera el formulario padre sobre el que esta el boton

    var iNumPers=oForm.txtAlquilerNumPers.value.trim();

    if(iNumPers<=0)
    {
        oForm.txtAlquilerNumPers.style.backgroundColor="red";
    }
    else
    oForm.txtAlquilerNumPers.style.backgroundColor="white";
}

function gestionCalcularNumConductores(oEvento)
{
    var oE = oEvento || window.event;
    oForm=oE.target.parentNode.parentNode.parentNode;

    var iNumMin=1; //nº de personas minimo para poder realizar un alquiler

    var iNumPers=oForm.txtAlquilerNumPers.value;

    var iAutobuses=oGestion.calcNumAutobuses(iNumPers);

    //borrar combo select que haya previamente
    var oCombosActuales=oForm.querySelectorAll(".alquilerConductores"); 

    for(var i=0;i<oCombosActuales.length;i++)
    {
        oCombosActuales[i].parentNode.removeChild(oCombosActuales[i]);
    }
    /*
    var oDivConductores=oForm.comboConductores.parentNode.parentNode;
    var oDivAutobuses=oForm.comboAutobuses.parentNode.parentNode;
    */
    //recuperamos el combo original
    var oComboOriginal=frmNuevoAlquiler.querySelector(".alquilerConductoresOriginal");

    //copiamos el original y le cambiamos las clases

    for(var i=1;i<iAutobuses;i++)
    {
        var oNodoClonado=oComboOriginal.cloneNode(true);
        oNodoClonado.classList.add("alquilerConductores");
        oNodoClonado.classList.remove("alquilerConductoresOriginal");
        oForm.insertBefore(oNodoClonado, oComboOriginal);

    }
}

function gestionCalcularNumAutobuses(oEvento)
{
    var oE = oEvento || window.event;
    oForm=oE.target.parentNode.parentNode.parentNode;

    var iNumMin=1; //nº de personas minimo para poder realizar un alquiler

    var iNumPers=oForm.txtAlquilerNumPers.value;
    var iAutobuses=oGestion.calcNumAutobuses(iNumPers);
    //borrar combo select que haya previamente
    var oCombosActuales=oForm.querySelectorAll(".alquilerAutobuses"); 

    for(var i=0;i<oCombosActuales.length;i++)
    {
        oCombosActuales[i].parentNode.removeChild(oCombosActuales[i]);
    }
    //var oDivAutobuses=oForm.comboAutobuses.parentNode.parentNode;
    //recuperamos el combo original
    var oComboOriginal=frmNuevoAlquiler.querySelector(".alquilerAutobusesOriginal");
    

    for(var i=1;i<iAutobuses;i++)
    {

        var oNodoClonado=oComboOriginal.cloneNode(true);
        oNodoClonado.classList.add("alquilerAutobuses");
        oNodoClonado.classList.remove("alquilerAutobusesOriginal");
        oForm.insertBefore(oNodoClonado, oComboOriginal);
    }


}