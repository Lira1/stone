// // //Piedra    == 0
// // //Papel     == 1
// // //Tijeras   == 2
// // //git push origin rps-ui para hacer push a la rama



// const estado = document.querySelector('#estado');

let seleccionJugador;
let selecionCPU;
const spanPlayer = document.querySelector('#player')
const spanCPU  = document.querySelector('#cpu')
const contadorVictorias = document.querySelector('#victorias');
const contadorDettotas = document.querySelector('#derrotas');
const estadoCompeticion = document.querySelector('#estado');
const resultadoFinal = document.querySelector('#resultado')

let victorias =0;
let derrotas = 0;

 function getSeleccion(idBotonSeleccionado){
     if(idBotonSeleccionado === "piedra"){    
        seleccionJugador = 0;
        spanPlayer.textContent = "Piedra";
     }
     else if(idBotonSeleccionado === "papel"){
        seleccionJugador = 1;
        spanPlayer.textContent = "Papel";
    }
     else{
        seleccionJugador = 2;
        spanPlayer.textContent = "Tijeras";
     }
    selecionCPU=getComputerChoice();
    if(selecionCPU===0)
        spanCPU.textContent = "Piedra";
    else if (selecionCPU === 1)
        spanCPU.textContent = "Papel";
    else
        spanCPU.textContent = "Tijeras"
    console.log(seleccionJugador);
    console.log(selecionCPU);
    if(selecionCPU === seleccionJugador){
        estadoCompeticion.textContent = "Empate";
    }
     else if( selecionCPU === 0 && seleccionJugador === 1 || selecionCPU === 1 && seleccionJugador === 2 || selecionCPU === 2 && seleccionJugador ===0){
        victorias++;
         estadoCompeticion.textContent = 'Ganaste!!!';
         contadorVictorias.textContent = victorias;
     }
     else{
        derrotas++
         estadoCompeticion.textContent = 'Perdiste!!!'
         contadorDettotas.textContent = derrotas;
     }
     resetGame();
 }

  function getComputerChoice(){
      //Funcion para obtener un resultado randomizado de la consola
      let cpu = Math.floor(Math.random()*3);
      //console.log("Eleccion del CPU: "+cpu);
      return cpu
  }
    
function resetGame(){
    if(victorias === 5 || derrotas === 5){
        if(victorias===5)
            resultadoFinal.textContent = "Ganaste la partida";
        else
            resultadoFinal.textContent = "CPU Gano la partida";
       

    }
}

function playAgain(){
    victorias = 0;
    derrotas = 0;
    contadorVictorias.textContent = victorias;
    contadorDettotas.textContent = derrotas;
    resultadoFinal.textContent = '';
    estadoCompeticion.textContent = '';
    spanPlayer.textContent=''
    spanCPU.textContent='';
}