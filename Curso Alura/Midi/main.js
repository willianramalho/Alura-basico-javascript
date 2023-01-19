function tocaSom(idSom){
    document.querySelector(idSom).play();
}

 
const listaDeTeclas = document.querySelectorAll('.tecla');

function testeExecutaNada() {
    document.querySelector(idSom);
}

/*
let contador = 0;

//Utilizando a logica com While que  depende de uma condição ser verdadeira ou falsa para ser aplicada
while(contador < listaDeTeclas.length){

    // variavel cost para armazenar um valor FIXO. Criado a Const TECLA para diminuir o codigo. Ao inves de escrever listaDeTeclas(contador); é so utilizar a variavel CONST TECLA.
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);

    }

    contador++;
    console.log(contador);
}*/

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    console.log(contador);
    
    tecla.onkeydown = function(evento) {
        if(evento.code == "Enter" || evento.code == "Space"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}

