# Simulación de TV y Control Remote

# Introducción

En este proyecto, se propone el desarrollo de una interfaz de televisión
interactiva con un mando a distancia utilizando tecnologías web como HTML, CSS y
JavaScript. El objetivo principal es crear una experiencia de usuario intuitiva y
funcional que simule la interacción con una televisión real.

# Requisitos

Teniendo en cuenta la descripción, estos serían los requisitos mínimos:

- Televisión:
- Diseño de una pantalla de inicio que simula la interfaz de bienvenida
de una televisión.
- Presentación de información relevante, como el nombre del canal, la
hora actual y la fecha.
- Mando a Distancia:
- Implementación de un mando a distancia virtual utilizando HTML y
CSS.
- Inclusión de botones para cambiar canales, ajustar el volumen, y
acceder a funciones adicionales.
- Selección de Canales:
- Uso del DOM para cambiar dinámicamente la información del canal y
la imagen de fondo al cambiar de canal.
- Implementación de una lista de canales simulada.
- Validación de Entrada:
- Implementación de validaciones en JavaScript para prevenir acciones
no deseadas o entradas incorrectas, como que la televisión funcione
estando apagada.

# Tecnologías

HTML, CSS y JavaScript,

# Estado del Proyecto

El proyecto se encuentra en el estado concluido, ya que se cumple con todos los requisitos mencionados en la pre discripción del proyecto. Para extras se haran las actualizaciones para que se cumpla con los demas requisitos y asi poder dar una mejor mejoria al proyecto.

# Funcionamiento e Imagenes

Para el funcionamiento se tiene un control remoto donde se puede manejar las interacciones o interactuar de forma intuintiva con el televisor. En seguida se muestra la imagen principal del proyecto.

![Captura de pantalla 2024-02-07 230553.png](Simulacio%CC%81n%20de%20TV%20y%20Control%20Remote%20893aed77187648bca35ea38bee943acd/Captura_de_pantalla_2024-02-07_230553.png)

En la seguiente imagen se puede ver la tela del encrá y el control remote. Del control remote se puede cambiar los canales del TV usando los botones numericos del control remote, simulando con cambio de imagenes. Mas arriba se puede ver el teclado del encendido y apagado, que en esta versión funcona correctamente.

 

![Captura de pantalla 2024-02-07 230910.png](Simulacio%CC%81n%20de%20TV%20y%20Control%20Remote%20893aed77187648bca35ea38bee943acd/Captura_de_pantalla_2024-02-07_230910.png)

En esta imagen se puede observar que TV esta perfectamente encendido y con efecto del clic al boton, También se puede ver la información del hora, diá, mes, año y el número del canal.

# Código de la funcionalidad de botón encendido

Como se puede ver se inicializó una imagen por defecto al momento que se enciende TV y se igualo una variable por si misma para que sea folse y asi poder poder utilizarla como bit de 1, 0 para encendido y apagado

```jsx
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
```

# Código de funcionalidad de cambio de canales

Para el siguiente trozo de código se muestra las declaraciones de las variables y la de claración de un método Array Map para la funcionalidades de los botones ya que se adicionarán en un array para el facilmanejamiento, y en este mismo código se llamá el método de encendido apagado, para poder validar los botones en caso que este encendido

```jsx
/ DECLARACION DE VARIABLES
const buttons = document.getElementsByClassName("btn");
const volumen = document.getElementsByClassName("btnV");
let ch1 = document.getElementById("ch1");
let ch2 = document.getElementById("ch2");
let ligaApaga = document.getElementById("liga");
let imagen = document.getElementById("myImagen");

let infCanal = document.getElementById("canal");
let horaMin = document.getElementById("hora");
let anoMes = document.getElementById("data");

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
      
      if(tvLidago){     /// SOLO SE EXECUTA CUANDO ESTE ECENDIDO
        if (imagen.src.match("img/" + evento.target.id + ".jpg")) {
          // alert("Estas en el mismo canal");
        } else {
          imagen.src = "img/" + evento.target.id + ".jpg";
         
          infCanal.innerHTML = "TV "+ evento.target.id.slice(-1);
        }
      }
    });
  }
);
```

# Cambios posteriores

Control de Volumen:

- Incorporación de controles deslizantes para ajustar el volumen.
- Actualización dinámica del nivel de volumen en la interfaz.
- Funciones Adicionales:
- Inclusión de botones para acceder a funciones como guía de
programas, configuración, y búsqueda de canales.
- Implementación de validaciones estilo control parental
- Animaciones y Transiciones:
- Utilización de CSS para crear animaciones y transiciones que mejoren
la experiencia de usuario al cambiar canales o ajustar el volumen.
- Responsive Design:
- Desarrollo de una interfaz adaptable que funcione de manera eficiente
en dispositivos de diferentes tamaños, desde pantallas grandes hasta
dispositivos móviles..

# Autor

Miguel Bengui
