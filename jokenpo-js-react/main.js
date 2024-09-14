/*Javascript
Jogador define o tipo de jogo*/
return ("Jo - Ken - Pô");
return ("Qual tipo de jogo pretende jogar?");
console.log("0 - Jogo Livre");
console.log("3 - Melhor de 3");
console.log("5 - Melhor de 5");
console.log("7 - Melhor de 7");
var TipoJogo = prompt("Quantas partidas pretende jogar? 0 - Jogo livre ou, Melhor de ");
console.log(TipoJogo);
var TotalVitorias = 0;
var TotalDerrotas = 0;
var TotalEmpates = 0;
var Tenta = "S"
var i = 0
while (Tenta == "S" || i < TipoJogo ) {
  //Inicia o Jogo//
  var NumPartidas = TipoJogo;
  console.log("Selecione a sua jogada")
  console.log("1 - Pedra ");
  console.log("2 - Papel ");
  console.log("3 - Tesoura");
  //Jogador seleciona a Jogada//
  var JOG = 0;
  var Jogada = 0;
  var Resultado = "";
  var COMP = 0;
    JOG = prompt("Selecione a sua jogada " + "1 - Pedra " + "2 - Papel " + "3 - Tesoura");
 //Valida opção digitada//
  while (JOG > 3) {
    console.log("Opção Inválida");
    console.log("Selecione a sua jogada " + "1 - Pedra " + "2 - Papel " + "3 - Tesoura")
    JOG = prompt("Opção Inválida." + "Selecione a sua jogada " + "1 - Pedra " +
                 "2 - Papel " + "3 - Tesoura")
  }
  //Computador Joga//
    COMP = parseInt(Math.random() * 3 + 1);
  //Resolve a Jogada//
  Jogada = COMP - JOG;
  switch (Jogada) {
    case 0:
      Resultado = "EMPATE";
      console.log("Você jogou: " + JOG + " Computador jogou " + COMP + " Empatou!")
      TotalEmpates++;
      if (TipoJogo == 0) {
      Tenta = prompt("Jogar novamente? (S)Sim (N) Não");
     }
     else {
          i++; 
          Tenta = "N";
     }
     break;
    case 2:
      Resultado = "JOG";
      console.log("Você jogou: " + JOG + " Computador jogou " + COMP + " Você venceu!")
      TotalVitorias++;
      if (TipoJogo == 0) {
      Tenta = prompt("Jogar novamente? (S)Sim (N) Não");
      }
      else {
           i++; 
           Tenta = "N"
      }
      break;
    case -2:
      Resultado = "COMP";
      console.log("Você jogou: " + JOG + " Computador jogou " + COMP + " Você perdeu!")
      TotalDerrotas++;
      if (TipoJogo == 0) {
      Tenta = prompt("Jogar novamente? (S)Sim (N)    Não");
      }
      else {
           i ++; 
           Tenta = "N";
      }
      break;
    case 1:
      Resultado = "COMP";
      console.log("Você jogou: " + JOG + " Computador jogou " + COMP + " Você perdeu!")
      TotalDerrotas ++;
      if (TipoJogo == 0) {
      Tenta = prompt("Jogar novamente? (S)Sim (N)    Não");
      }
      else {
          i++; 
          Tenta = "N";
      }
      break;
    case -1:
      Resultado = "JOG"
      console.log("Você jogou: " + JOG + " Computador jogou " + COMP + " Você venceu!");
      TotalVitorias++;
      if (TipoJogo == 0) {
      Tenta = prompt("Jogar novamente? (S)Sim (N) Não");
      }
      else {
           i++; 
           Tenta = "N";
      }
      break;
   };
//Resultados e Estatísticas//    
var TotalPartidas = TotalVitorias + TotalDerrotas + TotalEmpates;
var PercentVitorias = Math.round((TotalVitorias / TotalPartidas) * 100);
var PercentDerrotas = Math.round((TotalDerrotas / TotalPartidas) * 100);
var PercentEmpates = Math.round((TotalEmpates / TotalPartidas) * 100);
console.log("Resultados")
console.log("Vitórias: " + TotalVitorias + " " + PercentVitorias + "%");
console.log("Derrotas: " + TotalDerrotas + " " + PercentDerrotas + "%");
console.log("Empates: " + TotalEmpates + " " + PercentEmpates + "%");
};