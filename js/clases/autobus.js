
//objeto
class Autobus
{
	constructor(sMatricula,iNumAsientos,sModelo,iConsumo)
	{
	//atributos
		this.matricula=sMatricula;
		this.asientos=iNumAsientos;
		this.modelo=sModelo;
		this.consumo=iConsumo;
		this.itv=false;
		this.estado=true; //para saber si esta o no de baja
	}

    //funciones
    pasarRevision()
    {
    	this.itv=true;
    }

    darBaja()
    {
    	this.estado=false;
    }

}

