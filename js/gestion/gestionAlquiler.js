
frmNuevoAlquiler.txtAlquilerNumPers.addEventListener("focusout", gestionCalcularNumConductores);
frmNuevoAlquiler.txtAlquilerNumPers.addEventListener("focusout", gestionCalcularNumAutobuses);



function gestionCalcularNumConductores(oEvento)
{
    var oE = oEvento || window.event;
    var oDivConductores=frmNuevoAlquiler.comboConductores.parentNode.parentNode;
    var oDivAutobuses=frmNuevoAlquiler.comboAutobuses.parentNode.parentNode;

    var iNumMin=1; //nº de personas minimo para poder realizar un alquiler

    var iNumPers=document.frmNuevoAlquiler.txtAlquilerNumPers.value;

        var iAutobuses=oGestion.calcNumAutobuses(iNumPers);

        //borrar combo select que haya previamente
        var oCombosActuales=document.frmNuevoAlquiler.querySelectorAll(".alquilerConductores"); 
        console.log(oCombosActuales);
        for(var i=0;i<oCombosActuales.length;i++)
        {
            if(oCombosActuales[i].parentNode.parentNode!=null)
                oCombosActuales[i].parentNode.parentNode.removeChild(oCombosActuales[i].parentNode.parentNode.firstChild);

            if(oCombosActuales[i].parentNode.parentNode.firstChild!=null)
                frmNuevoAlquiler.removeChild(oCombosActuales[i].parentNode.parentNode);
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
        newDiv.classList.add("col-md-10");
        newDiv.classList.add("col-sm-8");

        var newLabel=document.createElement("label");
        newLabel.classList.add("col-md-2");
        newLabel.classList.add("col-sm-4");
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


        document.frmNuevoAlquiler.insertBefore(newDivFormGroup, oDivConductores);

    

        

    }
}

function gestionCalcularNumAutobuses(oEvento)
{
    var oE = oEvento || window.event;
    var oDivConductores=frmNuevoAlquiler.comboConductores.parentNode.parentNode;
    var oDivAutobuses=frmNuevoAlquiler.comboAutobuses.parentNode.parentNode;

    var iNumMin=1; //nº de personas minimo para poder realizar un alquiler

    var iNumPers=document.frmNuevoAlquiler.txtAlquilerNumPers.value;
    var iAutobuses=oGestion.calcNumAutobuses(iNumPers);
    //borrar combo select que haya previamente
    var oCombosActuales=document.frmNuevoAlquiler.querySelectorAll(".alquilerAutobuses"); 
    console.log(oCombosActuales);
    for(var i=0;i<oCombosActuales.length;i++)
    {
        if(oCombosActuales[i].parentNode.parentNode!=null)
            oCombosActuales[i].parentNode.parentNode.removeChild(oCombosActuales[i].parentNode.parentNode.firstChild);

        if(oCombosActuales[i].parentNode.parentNode.firstChild!=null)
            frmNuevoAlquiler.removeChild(oCombosActuales[i].parentNode.parentNode);
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
        newDiv.classList.add("col-md-10");
        newDiv.classList.add("col-sm-8");

        var newLabel=document.createElement("label");
        newLabel.classList.add("col-md-2");
        newLabel.classList.add("col-sm-4");
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


        document.frmNuevoAlquiler.insertBefore(newDivFormGroup, oDivAutobuses);

    }


}