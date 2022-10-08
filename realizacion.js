document.getElementById("palabra-nueva").style.display = "none";
document.getElementById("botones-canvas").style.display = "none";

var palabras = ["BALON", "TARJETA", "ARBITRO", "ARCO", "ENTRENADOR", "ESTRATEGIA", "AFICIONADO", "ESTADIO"];
var tablero = document.getElementById("pizarra").getContext("2d");
var palabraSecreta = "";
var letras = [];
var errores = 8;
var letrasCorrectas = [];

function salirNuevaPalabra() {
    location.reload();
}

function reiniciar() {
    errores = 8;
    letrasCorrectas = [];
    iniciarJuego();
}

function renunciar() {
    location.reload();
}

function escogerPalabraSecreta() {
    var palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
}

function comprobarLetra(key) {
    if (key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
      letras.push(key)  
      console.log(key)
      return false;

    } else {
      letras.push(key)  
      console.log(key)
      return true;
    }
}

function descontarOportunidad() {
    errores = errores - 1;
    console.log(errores)
}

function verificarFinJuego(errores) {
    dibujarAhorcado(errores);
    if (errores === 0) {
        perderPartida()
    }
}

function verificarGanador(letra) {
    letrasCorrectas.push(letra);
    if (letrasCorrectas.length === palabraSecreta.length) {
        ganarPartida()
    }
}

function escribirPalabra () {
    document.getElementById("botones-inicio").style.display = "none";
    document.getElementById("palabra-nueva").style.display = "block";
}

function guardarPalabra() {
  
    var nuevaPalabra = document.getElementById("input-texto").value;
  
    if(nuevaPalabra !== "") {
      palabras.push(nuevaPalabra.toUpperCase());
      alert('La palabra fue guardada')
      document.getElementById("palabra-nueva").style.display = "none";
      iniciarJuego();
    }else {
      alert("Ninguna palabra ha sido digitada")
    }
}

function iniciarJuego () {
    document.getElementById("botones-inicio").style.display = "none";
    document.getElementById("botones-canvas").style.display = "block";
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarLineas();

    document.onkeydown = (e) => {
        var letra = e.key.toUpperCase()
        
        if (comprobarLetra(letra) && palabraSecreta.includes(letra)) {
            for(let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                    escribirLetraCorrecta(i)
                    verificarGanador()
                }
            }
          
        }else {
            descontarOportunidad(letra)
            escribirLetraIncorrecta(letra, errores)
            verificarFinJuego(errores)
        }
        
    }
}
