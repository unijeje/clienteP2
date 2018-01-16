
frmNuevoAlquiler.txtAlquilerNumPers.addEventListener("focusout", gestionCalcularNumAutobuses);

var oDivConductores=document.getElementById("AlquilerConductores");

function gestionCalcularNumAutobuses(oEvento)
{
    var oE = oEvento || window.event;
    //var oDivConductores=frmNuevoAlquiler.comboConductores.parentNode.parentNode;

    iNumMin=1; //nº de personas minimo para poder realizar un alquiler

    iNumPers=document.frmNuevoAlquiler.txtAlquilerNumPers.value;

    if(iNumPers>=iNumMin)
    {
        //console.log(iNumPers);

        var iAutobuses=oGestion.calcNumAutobuses(iNumPers);

        console.log(iAutobuses);

        //añadir combo select de conductores y autobuses dependiendo del necesario

        for(var i=1;i<iAutobuses;i++)
        {

            //div form-group
            var newDivFormGroup=document.createElement("div");
            newDivFormGroup.classList.add("form-group");


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
            newDiv.appendChild(newSelect);

            newDivFormGroup.appendChild(newDiv);

            //oDivConductores.appendChild(newDiv);

            document.frmNuevoAlquiler.insertBefore(newDivFormGroup, oDivConductores);

        }

    }
}