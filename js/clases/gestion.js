
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
        }

        return res;
    }
    

    /*Cliente no se borra de los datos, solo no se muestra a la hora de mostrar clientes actuales*/
    bajaCliente(oCliente)
    {
        var res=false;//no se ha encontrado
        var oCliente=buscarCliente(oCliente.dni);
        if(this.buscarCliente(oCliente.dni)!=null)
        {
            oCliente.estado=false;
            res=true;//se ha dado de baja
        }
        return res;
    }
    /*Recibe nuevo Cliente y el DNI antiguo de un combo, busca el cliente y lo reemplaza con el nuevo, comprobando DNI*/
    modificarCliente(oCliente, dniAntiguo)
    {
        var res="";

        //comprobar nuevo DNI
        if(buscarCliente(oCliente.dni)!=null)
            res="Ya existe un cliente con ese DNI";
        else //reemplazar
            for(var i=0;i<this._clientes.length && res==false;i++)
            {
                if(this._clientes[i].dni==dniAntiguo)
                {
                    this._clientes[i]=oCliente;
                    res="Cliente actualizado correctamente";
                }
                else
                    res="No existe el cliente a modificar";//esta opción nunca se va a dar porque va a venir de un combo
            }
        return res;
       
    }
}