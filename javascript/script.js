

function mouseover(element) {

    element.style.backgroundColor = "rgb(156, 216, 240)"

    
}

function mouseout(element) {

    element.style.backgroundColor = "aliceblue"

    
}



let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
 
    if(duracao && adultos && criancas != ""){

    

 
    resultado.innerHTML =  `<p><img src="./images/steak-1750291_640.png" width="55px" height="30px">  ${qtdTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML +=  `<p><img src="./images/glass-32068_640.png" width="30px" height="45px">  ${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja de 355ml, Equivalente a ${qtdTotalCerveja/ 1000} Litros</p>`
    resultado.innerHTML +=  `<p><img src="./images/drinks-1430739_640.png" width="55px" height="30px">  ${Math.ceil(qtdTotalBebidas / 2000)} Pet's de 2 Litros</p>`

  } else {
    resultado.innerHTML = ""
    resultado.innerHTML +=  `<p>Por favor digite todas as informações</p>`

  }

    console.log(qtdTotalCarne);
}

function carnePP(duracao) {
    if (duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}
