var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones =["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina=papel;

opcionUsuario = prompt("Piedra: 0\nPapel: 1\nTijera: 2\n Opcion: ",0);

alert("Elegiste "+opciones[opcionUsuario]);

if(opcionUsuario == piedra)
    {
        if(opcionMaquina==piedra)
            {
                alert("Empate");
            }
            else if(opcionMaquina==papel)
                {
                    alert("Perdiste");
                }
            else if(opcionMaquina==tijera)
                {
                    alert("Ganaste");
                }
    }
    else if(opcionUsuario == papel)
        {
        if(opcionMaquina==piedra)
        {
            alert("Ganaste");
        }
        else if(opcionMaquina==papel)
            {
                alert("Empate");
            }
        else if(opcionMaquina==tijera)
            {
                alert("Perdiste");
            }
        }
    else if(opcionUsuario == tijera)
        {
        if(opcionMaquina==piedra)
        {
            alert("Perdiste");
        }
        else if(opcionMaquina==papel)
            {
                alert("Ganaste");
            }
        else if(opcionMaquina==tijera)
            {
                alert("Empate");
            }
        }

else
    {
        alert("Digite numero correcto")
    }

