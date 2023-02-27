 
let y = ['img/papel.png','img/piedra.png','img/tijera.png'];
let resultados = [["Empate","Ganador","Perdedor"], ["Perdedor","Empate","Ganador"], ["Ganador","Perdedor","Empate"]];
 let ganadas=0;
 let perdidas=0;
 let empates=0;

// jugador1             jugador2           Resultado
 
//  0(papel)             1(piedra)          Ganador
//  0(papel)             2(tijera)          Perdedor
//  1(piedra)            0(papel)           Perdedor
 
//  1(piedra)            2(tijera)          Ganador
//  2(tijera)            0(papel)           Ganador
//  2(tijera)            1(piedra)          Perdedor
 


 

function tirar (){
  
  var color=Math.floor(Math.random() * 3);
  
  document.getElementById("player2").src = y[color];
  document.getElementById("player2").name=y[color];
  var a = document.getElementById("player1")
  var b = document.getElementById("player2")
  
    if(resultados[y.indexOf(a.name)][y.indexOf(b.name)]==="Ganador")
    ganadas=ganadas+1;
    if(resultados[y.indexOf(a.name)][y.indexOf(b.name)]==="Perdedor")
    perdidas=perdidas+1;
    if(resultados[y.indexOf(a.name)][y.indexOf(b.name)]==="Empate")
    empates=empates+1;

    document.getElementById("ganadas").innerHTML=ganadas;
    document.getElementById("perdidas").innerHTML=perdidas;
    document.getElementById("empates").innerHTML=empates;
     

}

function izq(){
  var a = document.getElementById("player1")
  if(y.indexOf(a.name)==0){
  document.getElementById("player1").src = y[2];
  document.getElementById("player1").name=y[2];
}
  else{
    document.getElementById("player1").src = y[y.indexOf(a.name)-1];
  document.getElementById("player1").name=y[y.indexOf(a.name)-1];
  }
  
}
function der(){
  var a = document.getElementById("player1")
  if(y.indexOf(a.name)==2){
  document.getElementById("player1").src = y[0];
  document.getElementById("player1").name=y[0];
}
  else{
    document.getElementById("player1").src = y[y.indexOf(a.name)+1];
  document.getElementById("player1").name=y[y.indexOf(a.name)+1];
  }

}