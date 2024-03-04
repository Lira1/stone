//Piedra    == 0
//Papel     == 1
//Tijeras   == 2

function getComputerChoice(){
    //Funcion para obtener un resultado randomizado de la consola
    let cpu = Math.floor(Math.random()*3);
    //console.clear();
    console.log(cpu);
    return cpu
}

function play(){
    let cpu = getComputerChoice();
    let player = getplayerSelection();
    if (cpu === player)
        console.log("Empate");
    else
        if(cpu === 0 && player === 1 || cpu===1 && player ===2 || cpu===2 && player===0)
        console.log("Ganaste");
    else 
        console.log("Perdiste");
}

function getplayerSelection(){
    let pSelection = prompt("Piedra, papel o tijeras?")
    pSelection.toLowerCase();
    if(pSelection==="piedra")
        return 0
    else if(pSelection ==="papel")
        return 1
    else 
    return 2

}