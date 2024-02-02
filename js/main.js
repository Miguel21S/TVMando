
// DECLARACION DE VARIABLES
var on_off = document.getElementById("on-off");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var menu = document.getElementById("manu");


// MÉTODOS PARA CAMBIAR DE CANALES
uno.onclick = function() {
    // alert("uno");
    let imagen = document.getElementById("myImagen");
    if ( imagen.src.match("img/tv_1.jpg") ){
        alert("Estas en el mismo canal");
        document.getElementById("canal").innerHTML = " TV Futbol";
    }else{
        imagen.src = "img/tv_1.jpg";
        document.getElementById("canal").innerHTML = " TV Futbol";
    }   
};

dos.addEventListener("click", function() {
    let imagen = document.getElementById("myImagen");
    if ( imagen.src.match("img/tv_2.jpg") ){
        alert("Estas en el mismo canal");
        document.getElementById("canal").innerHTML = " TV Turistico";
    }else{
        imagen.src = "img/tv_2.jpg";
        document.getElementById("canal").innerHTML = " TV Turistico";
    }
});

tres.addEventListener("click", function() {
    let imagen = document.getElementById("myImagen");
    if ( imagen.src.match("img/tv_3.jpg") ){
        alert("Estas en el mismo canal");
        document.getElementById("canal").innerHTML = " TV Music";
    }else{
        imagen.src = "img/tv_3.jpg";
        document.getElementById("canal").innerHTML = " TV Music";
    }
});

cuatro.addEventListener("click", function() {
    let imagen = document.getElementById("myImagen");
    document.getElementById("canal").innerHTML = " TV Artes Marciales";
    if ( imagen.src.match("img/tv_4.jpg") ){
        alert("Estas en el mismo canal");
    }else{
        imagen.src = "img/tv_4.jpg";
        document.getElementById("canal").innerHTML = " TV Artes Marciales";
    }
});

cinco.addEventListener("click", function() {
    let imagen = document.getElementById("myImagen");
    document.getElementById("canal").innerHTML = " TV Novelas";
    if ( imagen.src.match("img/tv_5.jpg") ){
        alert("Estas en el mismo canal");
    }else{
        imagen.src = "img/tv_5.jpg";
        document.getElementById("canal").innerHTML = " TV Novelas";
    }
});

seis.addEventListener("click", function() {
    let imagen = document.getElementById("myImagen");
    document.getElementById("canal").innerHTML = " TV Formula 1";
    if ( imagen.src.match("img/tv_6.jpg") ){
        alert("Estas en el mismo canal");
    }else{
        imagen.src = "img/tv_6.jpg";
    }
});

siete.addEventListener("click", function() {
    let imagen = document.getElementById("myImagen");
    if ( imagen.src.match("video/heroesTonigth_7.mp4") ){
        alert("Estas en el mismo canal");
    }else{
        imagen.src = "video/heroesTonigth_7.mp4";
    }
});

ocho.addEventListener("click", function() {
    let imagen = document.getElementById("myImagen");
    if ( imagen.src.match("img/tv_8.jpg") ){
        alert("Estas en el mismo canal");
    }else{
        imagen.src = "img/tv_8.jpg";
    }
});

nueve.addEventListener("click", function() {
    let imagen = document.getElementById("myImagen");
    if ( imagen.src.match("img/tv_9.jpg") ){
        alert("Estas en el mismo canal");
    }else{
        imagen.src = "img/tv_9.jpg";
    }
});

