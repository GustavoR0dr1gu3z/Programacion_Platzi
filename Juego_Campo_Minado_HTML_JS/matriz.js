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

if(campo[0][0] == 1){
    boom();
}            