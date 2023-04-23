var marcado = null;
var jugadorMarcado=null;
var iniWidth="99";
var iniHeight="171";
var selectedWidth="132";
var selectedHeight="228";


function ocultaPorteria() {
    var x = document.getElementById("bloquePortero");
    var boton = document.getElementById("guardarParadas");
    var contador = 0;
    if (document.getElementById("uno-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("dos-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("tres-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("cuatro-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("cinco-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("seis-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("siete-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("ocho-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("nueve-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("diez-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("once-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("doce-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("trece-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("catorce-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("quince-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("dieciseis-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("diecisiete-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("dieciocho-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("diecinueve-1").style.background == "red") contador = contador + 1;
    if (document.getElementById("veinte-1").style.background == "red") contador = contador + 1;
    //console.log(contador);
    if (contador == 12) {
        x.style.display = "none";
        boton.innerHTML = "Oculto las opciones del PORTERO para que no hagas trampa";
        boton.disabled = true;
        document.getElementById("bloqueChutador").style.display = "block";
    }
    else {
        window.alert("Tienes que marcar doce posiciones.");
    }
}

function cambiarColor(boton) {
    var color = boton.style.background;
    if (color == "black") boton.style.background = "red";
    else
    if (color == "red") boton.style.background = "black";
}
function marcar(boton){
    boton.style.background = "blue";
    if (marcado != null) marcado.style.background = "black";
    marcado = boton;
}
function chutar(){
    document.getElementById("chutar").disabled = true;
    nombreMarcado = marcado.id;
    nombreMarcado = nombreMarcado + "-1"
    botonPorteria = document.getElementById(nombreMarcado)
    //document.getElementById("bloquePortero").style.display = "block";
    document.getElementById("bloqueResultado").style.display = "block";
    if (botonPorteria.style.background == "red") {
        document.getElementById("resultado").innerHTML = "FALLASTE!!!!!!!"
    }
    else{
        document.getElementById("resultado").innerHTML = "GOOOOOOOOOOOL!!!!!!!"
    }
}

function pintaBorde(jugador){
    jugador.style.borderStyle = "solid";
    jugador.width = selectedWidth;
    jugador.height = selectedHeight;

    if (jugadorMarcado != null) {
        jugadorMarcado.style.borderStyle = "none";
        jugadorMarcado.width = iniWidth;
        jugadorMarcado.height = iniHeight;
    }
    jugadorMarcado = jugador;
}

function bloquearSeleccionJugador() {
    document.getElementById("bloqueJugador").disabled = true;
    document.getElementById("bloquePortero").style.display = "block";
}
