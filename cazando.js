let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ANCHO_GATO=50;
const ALTO_GATO=50;
const ANCHO_COMIDA=30;
const ALTO_COMIDA=30;

let gatoX=0;
let gatoY=0;

let comidaX=0;
let comidaY=0;

function iniciarJuego(){
    gatoX=(canvas.width-ANCHO_GATO)/2;
    gatoY=(canvas.height-ALTO_GATO)/2;

    comidaX=canvas.width-ANCHO_COMIDA;
    comidaY=canvas.height-ALTO_COMIDA;

    graficarGato();
    graficarComida();
}
function graficarGato(){

    ctx.fillStyle="red";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
}

function graficarComida(){
    ctx.fillStyle="yellow";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);

}