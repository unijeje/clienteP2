
frmNuevoAlquiler.txtAlquilerNumPers.addEventListener("focusout", gestionCalcularNumConductores);
frmNuevoAlquiler.txtAlquilerNumPers.addEventListener("focusout", gestionCalcularNumAutobuses);
frmNuevoAlquiler.txtAlquilerNumPers.addEventListener("focusout", comprobarCero);

var oAltaAlquiler=document.getElementById("btnAltaAlquiler");
oAltaAlquiler.addEventListener("click", altaAlquiler, false);


function altaAlquiler(oEvento)
{
    var oE=oEvento || windows.event;
    var oForm=oE.target.parentNode.parentNode.parentNode; //recupera el formulario padre sobre el que esta el boton


}

function validarAlquiler(oForm)
{
    return true;
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
        oNodoClonado.classList.remove("alquilerConductoresOriginal");
        oForm.insertBefore(oNodoClonado, oComboOriginal);
    }


}