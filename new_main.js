var speed = 150; //Are the milliseconds for the interval delay.
var thePoint;
var environment;

$(document).ready(function(){
  myCanvas = new Canvas('myCanvas', '2');// Creating the new canvas object.
  environment = new Environment();
  mainView = new Main();
  
  if(myCanvas.context){
    //If have context
    thePoint = new Point({canvas:myCanvas, color:'green'});

    // intervalId = setInterval("mainLoop()", speed); //Seting the main loop interval
  } //End if
})