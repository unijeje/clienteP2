
//objeto
class Gestion
{
    constructor()
    {
        //atributos
        this._alquileres=[];
        this._autobuses=[];
        this._clientes=[];
        this._conductores=[];
		this._vacaciones=[];
        this.numCuenta="cuentaEmpresa";
        //cuenta/factura falta
    }
    //funciones

    //alquiler

    /*Se le pasa un nº de personas y devuelve el nº de autobuses necesario*/
    calcNumAutobuses(iNumPers)
    {
        var iCapacidad=30; // cada 30 personas se necesitara un autobus
        var numBuses=0;

        numBuses=Math.ceil(iNumPers/iCapacidad); //redondear a la alta

        return numBuses;
    }

    //clientes

    /*Comprueba con DNI si existe ese cliente en los datos */
    buscarCliente(sDni)
    {
        var oCliente=null;
        for(var i=0;i<this._clientes.length && oCliente==null;i++)
        {
            if(sDni==this._clientes[i].dni)
                oCliente=this._clientes[i];
        }
        return oCliente;
    }
    /*Mira si existe un cliente con ese DNI, si ya existe uno no se introduce y devuelve false*/
    altaCliente(oCliente)
    {
        var res=false;
        
        if(this.buscarCliente(oCliente.dni)==null)
        {
            this._clientes.push(oCliente);
            res=true;
            this.actualizaComboCliente();
        }
        else if(this.buscarCliente(oCliente.dni).estado==false) //si ya existe pero esta dado de baja lo da de alta otra vez
        {
            for(var i=0;i<this._clientes.length;i++)
            {
                if(oCliente.dni==this._clientes[i].dni)
                    this._clientes[i].estado=true;
                res=true;
                this.actualizaComboCliente();
            }
        }        
        return res;
    }
    

    /*Cliente no se borra de los datos, solo no se muestra a la hora de mostrar clientes actuales*/
    bajaCliente(oCliente)
    {
        var res=false;//no se ha encontrado
        var oCliente=this.buscarCliente(oCliente.dni);
        if(oCliente!=null)
        {
            oCliente.estado=false;
            res=true;//se ha dado de baja
            this.actualizaComboCliente();
        }
        return res;
    }
    /*Recibe nuevo Cliente y el DNI antiguo de un combo, busca el cliente y lo reemplaza con el nuevo, comprobando DNI*/
    modificarCliente(oCliente, dniAntiguo)
    {
        var res=true;

        //comprobar nuevo DNI
        if(this.buscarCliente(oCliente.dni)!=null)
         {
            res=false
            oCliente.dni=dniAntiguo;
         }   
        //si el dni es incorrecto se deja el mismo que tenia antes y se avisa aunque se cambian los otros datos
        for(var i=0;i<this._clientes.length;i++)
        {
            if(this._clientes[i].dni==dniAntiguo)
            {
                console.log(i);                    
                this._clientes[i]=oCliente;
                this.actualizaComboCliente();
                
            }

        }
        return res;
       
    }
    /*actualiza los select con los clientes, no muy eficiente pero funciona para todos los casos*/
    actualizaComboCliente()
    {
        var oComboBajaCliente=document.frmClienteBaja.comboCliente;
        var oComboModificaCliente=document.frmClienteModificar.comboCliente;
        var oComboSeleccionaCliente=document.frmNuevoAlquiler.comboCliente;

        while (oComboBajaCliente.firstChild) { //tienen el mismo nº de hijos
            oComboBajaCliente.removeChild(oComboBajaCliente.firstChild);
            oComboModificaCliente.removeChild(oComboModificaCliente.firstChild);
            oComboSeleccionaCliente.removeChild(oComboSeleccionaCliente.firstChild);
        }
        for(var i=0;i<this._clientes.length;i++)
        {
            if(this._clientes[i].estado==true) //solo mostrar los dados de alta
            {
                var newSelect=document.createElement("option");
                newSelect.value=this._clientes[i].dni;
                newSelect.text=this._clientes[i].dni+" - "+this._clientes[i].nombre+" "+this._clientes[i].apellidos;
                oComboBajaCliente.appendChild(newSelect);
                oComboModificaCliente.appendChild(oComboBajaCliente.lastChild.cloneNode(true));
                oComboSeleccionaCliente.appendChild(oComboBajaCliente.lastChild.cloneNode(true));
            }    
        }
    }

    //conductores
	altaConductor(oConductor){
		var bEncontrado= false;
		
		for(var i=0; i<this._conductores.length && bEncontrado==false; i++){
			if(this._conductores[i].dni==oConductor.dni){
				bEncontrado= true;
			}
		}
		
		if(bEncontrado==false){
			this._conductores.push(oConductor);
            this.actualizaComboConductores();
            
		}
			
		return !bEncontrado;
	}
	
	bajaConductor(oConductor){ //funciona
		var bEncontrado= false; // console.log(oConductor.dni);
		
		for(var i=0; i<this._conductores.length && bEncontrado==false; i++){
			if(this._conductores[i].dni==oConductor.dni){
				bEncontrado= true; 
				this._conductores[i].estado=false; //false es dado de baja
				this.actualizaComboConductores();				
			}
		}
		
		return bEncontrado;
	}

	buscarConductor(sDni){
        var oConductor=null;
        for(var i=0;i<this._conductores.length && oConductor==null;i++)
        {
            if(sDni==this._conductores[i].dni)
                oConductor=this._conductores[i];
        }
        return oConductor;
    }
	
	actualizaComboConductores(){		
		var oComboBajaConductor=document.frmConductorBaja.comboConductor;
        var oComboModificaConductor=document.frmConductorModificar.comboConductor;
        var oComboSeleccionaConductor=document.frmNuevoAlquiler.querySelector(".alquilerConductoresOriginal").childNodes[3].childNodes[1];
        var oComboVacacionesConductor=document.frmConductorVacaciones.comboConductor;

		 while (oComboBajaConductor.firstChild) { //tienen el mismo nº de hijos
            oComboBajaConductor.removeChild(oComboBajaConductor.firstChild);
            oComboModificaConductor.removeChild(oComboModificaConductor.firstChild);
            oComboSeleccionaConductor.removeChild(oComboSeleccionaConductor.firstChild);
            oComboVacacionesConductor.removeChild(oComboVacacionesConductor.firstChild);
        }

		
        for(var i=0;i<this._conductores.length;i++){
            if(this._conductores[i].estado==true){
				var newSelect=document.createElement("option");				
				newSelect.value=this._conductores[i].dni;
				newSelect.text=this._conductores[i].dni+" - "+this._conductores[i].nombre+" "+this._conductores[i].apellidos;
				oComboBajaConductor.appendChild(newSelect);
                oComboModificaConductor.appendChild(oComboBajaConductor.lastChild.cloneNode(true));
                oComboSeleccionaConductor.appendChild(oComboBajaConductor.lastChild.cloneNode(true));
                oComboVacacionesConductor.appendChild(oComboBajaConductor.lastChild.cloneNode(true));
                    
            }       
        }
		/*
		var mostarComboActualizadoConductores= "<label class='col-md-3 col-sm-3 control-label' for='comboConductor'>Seleccione Conductor</label>"+
													"<div class='col-md-6 col-sm-8'>"+
														"<select id='comboConductor' name='comboConductor' class='form-control'>"+
															"<option>Seleccione un Conductor..</option>";
	
		for(var i=0; i<this._conductores.length; i++){
			mostarComboActualizadoConductores+= "<option>"+this._conductores[i].sDni+" - "+this._conductores[i].sNombre+" "+this._conductores[i].sApellidos+"</option>";
		}
		
		mostarComboActualizadoConductores+= "</select>";
		
		return mostarComboActualizadoConductores;
		*/
	}
	
    //autobuses
    altaAutobus(oAutobus)
    {
        var esta=false;
        var introducido=false;

        for (var i=0;i>this._autobuses.length;i++)
            if(this._autobuses[i].matricula == oAutobus.matricula )
                esta=true;
        

        if(!esta){
            this._autobuses.push(oAutobus);
            this.actualizaComboAutobus();
        }

        return introducido;
    }

    actualizaComboAutobus() ///////////////aun sin terminar
    {
        frmAutobusBaja
        frmAutobusModificar

        var oComboBajaAutobus=document.frmAutobusBaja.comboAutobus;
        var oComboModificaCliente=document.frmAutobusModificar.comboAutobus;

        while (oComboBajaCliente.firstChild) { //tienen el mismo nº de hijos
            oComboBajaCliente.removeChild(oComboBajaCliente.firstChild);
            oComboModificaCliente.removeChild(oComboModificaCliente.firstChild);
        }
        for(var i=0;i<this._clientes.length;i++)
        {
            if(this._clientes[i].estado==true) //solo mostrar los dados de alta
            {
                var newSelect=document.createElement("option");
                newSelect.value=this._clientes[i].dni;
                newSelect.text=this._clientes[i].dni+" - "+this._clientes[i].nombre+" "+this._clientes[i].apellidos;
                oComboBajaCliente.appendChild(newSelect);
                oComboModificaCliente.appendChild(oComboBajaCliente.lastChild.cloneNode(true));
            }    
        }

    }
}