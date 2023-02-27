 let posibilidades= ["verde" ,"rojo" ,"amarillo" ,"azul" ];
let tirada = [];
let jugador = [];
contadortiradas=0
let resultados = [["Empate","Ganador","Perdedor"], ["Perdedor","Empate","Ganador"], ["Ganador","Perdedor","Empate"]];
 let ganadas=0;
 let perdidas=0;
 let empates=0;

 


 

function start (){
  var color=Math.floor(Math.random() * 4);

  tirada.push(color);

  for (var i = tirada.length-1; i > 0; i--) {
     
    console.log(i);

    
    task(posibilidades[tirada[i]],i)
    
     
     
    
     
   }
  
   
 




}
function task(caja,i) {
  setTimeout(function() {
      document.getElementById(caja).style.backgroundColor="black" ;
      console.log("hola");
  }, 1000 * i);
}

function verde(){
  //console.log(contadortiradas);
  //console.log(tirada.length);
  if(contadortiradas==tirada.length){
    start ();
    contadortiradas=contadortiradas+1;
  }
  jugador.push(0);
console.log("verde");
}
function rojo(){
  if(contadortiradas==tirada.length){
    start ();
  }
  jugador.push(1);
  console.log("rojo");
}
function amarillo(){
  if(contadortiradas==tirada.length){
    start ();
  }
  jugador.push(2);
  console.log("amarillo");
}
function azul(){
  if(contadortiradas==tirada.length){
    start ();
  }
  jugador.push(3);
  console.log("azul");

}