let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ANCHO_GATO=50;
const ALTO_GATO=40;
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

    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"red");
}

function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"yellow");

}
function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}
function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function moverIzquierda(){
    gatoX=gatoX-10;
    actualizarPantalla();
    detectarColision();
}
function moverDerecha(){
    gatoX=gatoX+10;
    actualizarPantalla();
    detectarColision();
}
function moverArriba(){
    gatoY=gatoY-10;
    actualizarPantalla();
    detectarColision();
}
function moverAbajo(){
    gatoY=gatoY+10;
    actualizarPantalla();
    detectarColision();
}
function actualizarPantalla(){
    limpiarCanvas();
    graficarGato();
    graficarComida();
}
function detectarColision(){
    if(gatoX+ANCHO_GATO>comidaX && gatoX<comidaX+ANCHO_COMIDA && gatoY+ALTO_GATO>comidaY && gatoY<comidaY+ALTO_COMIDA){
        alert("!COMIDA ATRAPADA¡")
    }
}