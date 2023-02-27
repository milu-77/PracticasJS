 let alarma =1000;
let constante = 1;
let contador = 0;
function decre (){
  contador=contador-10;
   
}
function incre (){
  contador=contador+10;
   
}
function reset (){
  contador=-1;
   
}

function start(){
   if (alarma==contador)
   alert("Alarma");



  if(contador>-1){    
    document.getElementById("id0").style.color="white";

  }else{
    document.getElementById("id0").style.color="RED";
  }
  
  contador = constante + contador;
  document.getElementById("id0").innerHTML=contador;
 
  setTimeout("start()", 1000) 


}
function setear(){
  alarma =  document.getElementById('tiempo').value ;
 
  console.log(alarma);

}