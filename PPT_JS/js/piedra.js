var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina;

opcionUsuario = prompt("Piedra: 0\nPapel: 1\nTijera: 2\n Opcion: ",0);



if(opcionUsuario == piedra){
    alert("Elegiste Piedra")
}else if(opcionUsuario == papel){
    alert("Elegiste Papel")
}else if(opcionUsuario == tijera){
    alert("Elegiste Tijera")
}else{
    alert("Digite numero correcto")
}