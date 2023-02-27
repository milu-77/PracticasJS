let x = [1,2,3,4,5,6,7,8,9,10];
let y = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t']

function caer (columna){

    for (var i = 0; i < y.length; i++) {
       var a = y[i]+columna;
        var b = y[i-1]+columna;
       console.log(a);
       
       task(i,a);
       task2(i,b);
       
        
      }
      
      function task(a,i) {
        setTimeout(function() {
            document.getElementById(i).style.background="black" ;
            console.log("hola");
        }, 1000 * a);
      }
      function task2(a,i) {
        setTimeout(function() {
            document.getElementById(i).style.background="white" ;
            console.log("hola");
        }, 1000 * a);
      }

}