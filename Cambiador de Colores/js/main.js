 
let y = ['A','B','C','D','E','F','1','2','3','4','5','6','7','8','9','0']

function random (){
  
  var color="#";
  for (var i = 0; i < 6; i++) {
    color=color+   y [Math.floor(Math.random() * 15)];

  }
  document.getElementById("caja").style.background=color;

  document.getElementById("id0").innerHTML="BACKGROUND COLOR :"+ color;
  console.log(color);

}