
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
        this.numCuenta="cuentaEmpresa";
        //cuenta/factura falta
    }
    //funciones

    //alquiler

    /*Se le pasa un alquiler y devuelve el nº de autobuses necesario*/
    calcNumAutobuses(oAlquiler)
    {
        var iCapacidad=30; // cada 30 personas se necesitara un autobus
        var numBuses=0;
        for(var i=0;i<this._alquileres;i++)
        {
            if(this._alquileres[i].id==oAlquiler.id)
            {
                var numPersonas=this._alquileres[i].numPers;
                numBuses=math.ceil(numPersonas/iCapacidad); //redondear a la alta
            }
        }

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

    //conductores

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