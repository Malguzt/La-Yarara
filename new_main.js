var speed = 150; //Are the milliseconds for the interval delay.
var thePoint;
$(document).ready(function(){
  myCanvas = new Canvas('myCanvas', '2');// Creating the new canvas object.
  
  if(myCanvas.context){
    //If have context
    thePoint = new Point({canvas:myCanvas, color:'green'});

    intervalId = setInterval("mainLoop()", speed); //Seting the main loop interval
  } //End if
})

function mainLoop(){
	myCanvas.clean();
	thePoint.blink();
	thePoint.render();
}