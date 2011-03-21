var thePoint;
var theSnake;
var myCanvas;
var pause = false; //Determines if the game in in pause
var lives = 3;
var points = 0;
var apples = 0; //Determines how many apples ate snake.
var loops = 0; //Determines how many loops have passed since the last apple.
var touchs = 0; //Determines how many cursor keys were touched since the last apple.
var speed = 150; //Are the milliseconds for the interval delay.
var intervalId;

$(document).ready (function(){
  myCanvas = new Canvas('myCanvas', '2');// Creating the new canvas object.
  
  if(myCanvas.context){
    //If have context
    thePoint = new Point(myCanvas, 'green');
    theSnake = new Snake(myCanvas, '#456');

    intervalId = setInterval("mainLoop()", speed); //Seting the main loop interval.
  } //End if

  refreshData();
}) //End ready

// Function called when the snake biting its tail.
function restart(){
  myCanvas.clean();

  //New apple and skane.
  thePoint = new Point(myCanvas, 'green');
  theSnake = new Snake(myCanvas, '#456');

  if(lives > 1){
    //If isn't the last life.
    lives--; //Lose a life.

    loops = 0; //Restart the loops count.
  } else {
    //If is the last life.
    lives = 3;
    
    alert('Perdiste Gil de mierda.');
    var name = prompt('¿Como te llamas? Gil');
    $.post('honor.php', 'name='+name+'&points='+points);
    
    points = 0;//Restart the points count.
  } //End if

  refreshData();
} //End function

function mainLoop(){
  if(!pause){
    $('#pause').hide('slow'); //Hide de pause notice.
    myCanvas.clean();
    
    if(thePoint.areYou(theSnake.getX(), theSnake.getY())){
      //The snake eat the apple.
      apples++; 

      points += theSnake.length() + (200 - speed) - loops - touchs;
      points = (points > 0)? points: 0; //Avoiding negative points.
      
      touchs = 0;
      loops = 0;
      
      theSnake.eat();
      theSnake.move();

      //One of three possibilities for increased speed, when the apple is eaten.
      if(speed > 10 && loops % 3 == 0){
        speed--; //Decreasing the milliseconds, the rate increases.
        
        clearInterval(intervalId); //Erasing the previous interval.
        intervalId = setInterval("mainLoop()", speed); //Setting the new interval.
      } // End if

      thePoint = new Point(myCanvas, 'green');

      $('#points').text(points);
      $('#length').text(theSnake.length());
    } //End if the snake eat.

    thePoint.blink();

    theSnake.checkTail(); //Checking if the snake eat its tail.
    theSnake.move();
    theSnake.paint();
    
    loops++;
  } else {
    $('#pause').show('slow'); //Show de pause notice.
  } //End if
}

$(document).keydown(function(event){
  var direction;
  switch(event.which){
    case 37: //Left cursor key.
      direction = 'left';
      break;
    case 38: //Up cursor key.
      direction = 'up';
      break;
    case 39: //Right cursor key.
      direction = 'right';
      break;
    case 40: //Down cursor key.
      direction = 'down';
      break;
    case 80: //P key.
      pause = !pause;
      break;
  } //End switch.
  
  if(direction){
    touchs++;
    theSnake.setDirection(direction); //Set the next direction for the snake.
  }
}); //End of keydown event.

//Function that updates the data on screen.
function refreshData(){
  $('#lives').text(lives);
  $('#points').text(points);
  $('#length').text(theSnake.length());
}