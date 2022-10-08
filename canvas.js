function dibujarCanvas() {
  tablero.lineWidth=8
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.fillStyle= "darkolivegreen"
  tablero.strokeStyle = "white"
  tablero.fillRect(0,0,1349,863)
  tablero.beginPath();
  tablero.moveTo(550,500)
  tablero.lineTo(800,500)
  tablero.moveTo(600,500)
  tablero.lineTo(600,150)
  tablero.stroke()
  tablero.closePath()
}

function dibujarLineas() {
  tablero.lineWidth=6
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.strokeStyle = "white"
  tablero.beginPath()
  var ancho=600/palabraSecreta.length
  for (var i=0; i < palabraSecreta.length; i++){
  tablero.moveTo(400+(ancho*i),640)
  tablero.lineTo(450+(ancho*i),640)
  }
  tablero.stroke()
  tablero.closePath()
}

function escribirLetraCorrecta(index) {
  tablero.font = "bold 52px Montserrat";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "white";
  var ancho=600/palabraSecreta.length
  tablero.fillText(palabraSecreta[index],405+(ancho*index),620)
  tablero.stroke()
}

function escribirLetraIncorrecta(letra, errorsLeft){
  tablero.font = "bold 37px Montserrat";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "white";
  tablero.fillText(letra,435+(37*(10-errorsLeft)),710,37)
}

function dibujarAhorcado(puntaje) {
  tablero.lineWidth=8
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.strokeStyle = "white"
  if(puntaje===7) {
  tablero.moveTo(750,150)
  tablero.lineTo(600,150)
  }
  if(puntaje===6) {
  tablero.moveTo(750,210)
  tablero.lineTo(750,150)
  }
  if(puntaje===5) {
    tablero.moveTo(787,234.5)
    tablero.arc(750,250,40,0,2*Math.PI)
  }
  if(puntaje===4){
    tablero.moveTo(750,389)
    tablero.lineTo(750,289)
    }
    if(puntaje===3){
    tablero.moveTo(750,389)
    tablero.lineTo(800,450)
    }
    if(puntaje===2){
    tablero.moveTo(750,389)
    tablero.lineTo(700,450)
    }
    if(puntaje===1){
    tablero.moveTo(750,315)
    tablero.lineTo(800,389)
    }
    if(puntaje===0){
    tablero.moveTo(750,315)
    tablero.lineTo(700,389)
    }

  tablero.stroke()
  tablero.closePath()
}

function perderPartida() {
  tablero.font = "bold 42px Montserrat";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "red";
  tablero.fillText("Fin del juego!",930,320)
}

function ganarPartida() {
  tablero.font = "bold 42px Montserrat";
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "blue";
  tablero.fillText("Ganaste,",950,320)
  tablero.fillText("Felicidades!",930,360)
}   
