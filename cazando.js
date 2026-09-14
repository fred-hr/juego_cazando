let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ANCHO_GATO=50;
const ALTO_GATO=50;

function graficarGato(){
    let gatoX;
    let gatoY;
    
    gatoX=(canvas.width-ANCHO_GATO)/2;
    gatoY=(canvas.height-ALTO_GATO)/2;

    ctx.fillStyle="red";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
}