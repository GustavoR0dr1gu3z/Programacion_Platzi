function boom(){
    alert("!!BOOOOOM!!");
    document.write("<h1> BOM, ELEGISTE OPCION MINDADA<h1>");
}

function ganaste(){
    alert("!!GANASTE!!");
    document.write("<h1> GANASTE <h1>");
}

// 1 = Bomba
// 0 = No Bomba
var campo =[[1 , 0 , 0],
            [0 , 1 , 0],
            [1 , 1 , 1]];

var textos = ["Césped", "Bomba"]

var x, y;

alert("ESTÁS EN UN CAMPO MINADO ELIGE UNA POSICIÓN ENTRE EL 0 Y 3 PARA X,Y");

x = prompt("Posicion X (Entre 0 y 2): ");
y = prompt("Posicion Y (Entre 0 y 2): ");
var posicion = campo[x][y];

