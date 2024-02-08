
// DECLARACION DE VARIABLES
const buttons = document.getElementsByClassName("btn");
const volumen = document.getElementsByClassName("btnV");
let ch1 = document.getElementById("ch1");
let ch2 = document.getElementById("ch2");
let ligaApaga = document.getElementById("liga");
let imagen = document.getElementById("myImagen");

let infCanal = document.getElementById("canal");
let horaMin = document.getElementById("hora");
let anoMes = document.getElementById("data");

// MÉTODO QUE COMVIERTE UNA LISTA DE Element DE LA CLASE A ELEMENTOS DE ARRAY

// const tv = ["tv_", "tv_", "tv_", "tv_", "tv_", "tv_", "tv_", "tv_", "tv_"];

// MÉTODO QUE PERMITE CAMBIAR DE CANALES USANDO NÚMEROS

let subirBajarvolume = 0;
let currentChannel = 0;
let aux = 0;
let aux1 = 0;
let tvLidago = false;
let arrayButtons = Array.from(buttons)
let arrayVolumen = Array.from(volumen)

let hora = new Date();

arrayButtons.map(
  item => {
    item.addEventListener("click", (evento) => {
      //screen.classList.remove(screen.classList[screen.classList.length - 1])
      if(tvLidago){     /// SOLO SE EXECUTA CUANDO ESTE ECENDIDO
        if (imagen.src.match("img/" + evento.target.id + ".jpg")) {
          // alert("Estas en el mismo canal");
        } else {
          
  
          imagen.src = "img/" + evento.target.id + ".jpg";
          // aux = evento.target.id.slice(-1);
          // aux1 = aux - 1;
          // aux = tv[aux - 1] + "" + aux;
          // console.log(evento.target.id.substring(0, 3));
          infCanal.innerHTML = "TV "+ evento.target.id.slice(-1);
        }
      }
    });
  }
);


// MÉTODO DE LIGAR Y DESLIGAR 
function ligadoApagado(){
  tvLidago = !tvLidago;
  if(tvLidago){
// SE ADD PARA QUE INICIE POR DEFECTO CUANDO SE ENCIENDA LA TV
    ligaApaga.textContent = "Off";
    imagen.src="./img/tv_1.jpg";
    infCanal.innerHTML ="TV "+1;
    horaMin.innerHTML ="Hora "+ hora.getHours() + ":" + hora.getMinutes();
    anoMes.innerHTML ="Fecha "+ new Date().toLocaleDateString('en-US');
  }else{
// AL APAGAR EL EQUIPO SE DECLARA LAS VARIABLES QUE IMPORTAN LAS INFORMACIONES EN TV COMO VACÍAS
    ligaApaga.textContent = "On";
    imagen.src=" ";
    infCanal.innerHTML =""
    horaMin.innerHTML = ""
    anoMes.innerHTML = ""
  }
}
ligaApaga.addEventListener("click", ligadoApagado);

// MÉTODO QUE PERMITE CAMBIAR DE CANALES USANDO BOTONES
// arrayVolumen.map( item =>{
//   item.addEventListener("click", (e) => {
//     if(tvLidago){
//       if(e.subirBajarvolume < 100){
//         subirBajarvolume++;
//         console.log(subirBajarvolume);
//       }else if(e.subirBajarvolume >= 100){
//         subirBajarvolume--;
//         console.log(subirBajarvolume);
//       }
      
//     }
//   });
// });

// MÉTODO QUE PERMITE CAMBIAR DE CANALES USANDO BOTONES
// function changeVolume(direction) {
//   if (tvLidago) {
//     if (direction === "up" && currentVolume < 100) {
//       currentVolume += 10;
//     } else if (direction === "down" && currentVolume > 0) {
//       currentVolume -= 10;
//     }
//     console.log("Volume:", currentVolume);
//   }
// }
// ligaApaga.addEventListener("click", ligadoApagado);

// // // // // // // // // ligaApaga.addEventListener("click", () => {
// // // // // // // // //   tvLidago = !tvLidago;
// // // // // // // // //   if(tvLidago){
// // // // // // // // //     ligaApaga.textContent = "On";
// // // // // // // // //   }else{
// // // // // // // // //     ligaApaga.innerHTML = "Off";
// // // // // // // // //   }
// // // // // // // // // });
// // MÉTODO QUE PERMITE CAMBIAR DE CANAL CON 2 TECLADOS CH

// // MÉTODO CAHHEL
// let currentChannel = 0;
// function canalCh(direction) {
//     if (direction === "cima") {

//     currentChannel = (currentChannel % 9) + 1;

//     imagen.src = "img/" + tv[currentChannel] + "" + currentChannel + ".jpg";
//     console.log("Posision tv:", tv[currentChannel], " CurrenteCH:", currentChannel, " Directio:", direction);
//   } else {
//     currentChannel = (currentChannel === 1) ? 9 : currentChannel - 1;
//   }
//   imagen.src = "img/" + tv[currentChannel] + "" + currentChannel + ".jpg";
//   console.log("Posision tv:", tv[currentChannel], " CurrenteCH:", currentChannel, " Directio:", direction);

// }

// ch1.addEventListener("click", () => canalCh("cima"));
// ch2.addEventListener("click", () => canalCh("bajo"));
