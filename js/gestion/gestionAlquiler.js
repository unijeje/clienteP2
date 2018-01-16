
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
    
    var oDivConductores=oForm.comboConductores.parentNode.parentNode;
    var oDivAutobuses=oForm.comboAutobuses.parentNode.parentNode;

    var iNumMin=1; //nº de personas minimo para poder realizar un alquiler

    var iNumPers=oForm.txtAlquilerNumPers.value;

        var iAutobuses=oGestion.calcNumAutobuses(iNumPers);

        //borrar combo select que haya previamente
        var oCombosActuales=oForm.querySelectorAll(".alquilerConductores"); 
        //console.log(oCombosActuales);
        for(var i=0;i<oCombosActuales.length;i++)
        {
            if(oCombosActuales[i].parentNode.parentNode!=null)
                oCombosActuales[i].parentNode.parentNode.removeChild(oCombosActuales[i].parentNode.parentNode.firstChild);

            if(oCombosActuales[i].parentNode.parentNode.firstChild!=null)
                oForm.removeChild(oCombosActuales[i].parentNode.parentNode);
        }

        //añadir combo select de conductores y autobuses dependiendo del necesario

        for(var i=1;i<iAutobuses;i++)
        {

        //div form-group CONDUCTOR
        var newDivFormGroup=document.createElement("div");
        newDivFormGroup.classList.add("form-group");
        //newDivFormGroup.classList.add("alquilerConductores");


        //div with cols
        var newDiv = document.createElement("div");
        newDiv.classList.add("col-md-6");
        newDiv.classList.add("col-sm-8");

        var newLabel=document.createElement("label");
        newLabel.classList.add("col-md-3");
        newLabel.classList.add("col-sm-3");
        newLabel.classList.add("control-label");
        newLabel.setAttribute("for", "comboConductores"+i);
        newLabel.appendChild(document.createTextNode("Seleccione Conductor: "));
        newDivFormGroup.appendChild(newLabel);

        var newSelect=document.createElement("select");
        newSelect.setAttribute("id", "comboConductores"+i);
        newSelect.classList.add("form-control");
        newSelect.setAttribute("name", "comboConductores"+i);
        newSelect.classList.add("alquilerConductores");
        newDiv.appendChild(newSelect);

        newDivFormGroup.appendChild(newDiv);


        oForm.insertBefore(newDivFormGroup, oDivConductores);
        
        //hará una llamada a actualiza comboConductores
        //ID del Select es comboConductores

    }
}

function gestionCalcularNumAutobuses(oEvento)
{
    var oE = oEvento || window.event;
    oForm=oE.target.parentNode.parentNode.parentNode;


    var oDivConductores=oForm.comboConductores.parentNode.parentNode;
    var oDivAutobuses=oForm.comboAutobuses.parentNode.parentNode;

    var iNumMin=1; //nº de personas minimo para poder realizar un alquiler

    var iNumPers=oForm.txtAlquilerNumPers.value;
    var iAutobuses=oGestion.calcNumAutobuses(iNumPers);
    //borrar combo select que haya previamente
    var oCombosActuales=oForm.querySelectorAll(".alquilerAutobuses"); 
    //console.log(oCombosActuales);
    for(var i=0;i<oCombosActuales.length;i++)
    {
        if(oCombosActuales[i].parentNode.parentNode!=null)
            oCombosActuales[i].parentNode.parentNode.removeChild(oCombosActuales[i].parentNode.parentNode.firstChild);

        if(oCombosActuales[i].parentNode.parentNode.firstChild!=null)
            oForm.removeChild(oCombosActuales[i].parentNode.parentNode);
    }

    //añadir combo select de Autobuses y autobuses dependiendo del necesario

    for(var i=1;i<iAutobuses;i++)
    {

        //div form-group Autobus
        var newDivFormGroup=document.createElement("div");
        newDivFormGroup.classList.add("form-group");
        //newDivFormGroup.classList.add("alquilerAutobuses");


        //div with cols
        var newDiv = document.createElement("div");
        newDiv.classList.add("col-md-6");
        newDiv.classList.add("col-sm-8");

        var newLabel=document.createElement("label");
        newLabel.classList.add("col-md-3");
        newLabel.classList.add("col-sm-3");
        newLabel.classList.add("control-label");
        newLabel.setAttribute("for", "comboAutobuses"+i);
        newLabel.appendChild(document.createTextNode("Seleccione Autobus: "));
        newDivFormGroup.appendChild(newLabel);

        var newSelect=document.createElement("select");
        newSelect.setAttribute("id", "comboAutobuses"+i);
        newSelect.classList.add("form-control");
        newSelect.setAttribute("name", "comboAutobuses"+i);
        newSelect.classList.add("alquilerAutobuses");
        newDiv.appendChild(newSelect);

        newDivFormGroup.appendChild(newDiv);


        oForm.insertBefore(newDivFormGroup, oDivAutobuses);

        //hará una llamada a actualiza comboAutobuses
        //ID del Select es comboAutobuses

    }


}