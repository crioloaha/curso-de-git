//CÓDIGOS DOS ATORES
//Variáveis do Ator
let colisao = false

let yAtor = 366;
let xAtor = 90;
let meusPontos = 0
    

function mostraAtor (){
   image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor (){
  if (keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  if (keyIsDown(DOWN_ARROW)){
  if (podeSeMover()){
    yAtor +=3;
}
  }
}
function verificaColisao(){

    for (let i = 0; i < imagemCarros.length; i = i + 1){
   colisao = collideRectCircle(xCarros[i], yCarros  [i], comprimentoCarro, alturaCarro, xAtor, yAtor, 10)
  if (colisao){
        voltaAtorParaPosicaoInicial();
        somDaColisao.play();
        if (pontosMaiorQueZero())
          meusPontos -= 1;
  }
}
}
function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textSize (25);
  textAlign (CENTER);
  fill(color(255, 240, 20))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor <10){
     somDoPonto.play();
     voltaAtorParaPosicaoInicial();
     meusPontos +=1;
     }
}
  
  function pontosMaiorQueZero(){
    return meusPontos >0
  }  
  
  function podeSeMover (){
    return yAtor < 366;
  }