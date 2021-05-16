var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina;

opcionUsuario = prompt("Piedra: 0\nPapel: 1\nTijera: 2\n Opcion: ",0);

alert("Ejegiste "+opcionUsuario);

if(opcionUsuario == 0){
    alert("Elegiste Piedra")
}else if(opcionUsuario == 1){
    alert("Elegiste Papel")
}else if(opcionUsuario == 2){
    alert("Elegiste Tijera")
}else{
    alert("Digite numero correcto")
}