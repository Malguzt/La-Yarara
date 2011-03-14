var thePoint;
var theSnake;
var myCanvas;
var pause = false;
var lives = 3;
var points = 0;

$(document).ready (function(){
  //Recibimos el elemento canvas
  myCanvas = new Canvas('myCanvas', '2');
  if(myCanvas.context){
    //Si tengo el contexto
    thePoint = new Point(myCanvas, 'green');
    theSnake = new Snake(myCanvas, '#456');
    setInterval("mainLoop()", 100);
  }
  $('#lives').text(lives);
})

function restart(){
  myCanvas.clean();

  thePoint = new Point(myCanvas, 'green');
  theSnake = new Snake(myCanvas, '#456');

  if(lives > 1){
    lives--;
    $('#lives').text(lives);
  } else {
    lives = 3;
    $('#lives').text(lives);
    alert('Perdiste Gil de mierda.');
    var name = prompt('¿Como te llamas gil?');
    $.post('honor.php', 'name='+name+'&points='+points);
    points = 0;
  }

  $('#points').text(points);
  $('#length').text(theSnake.length());
}

function mainLoop(){
  if(!pause){
    $('#pause').hide('slow');
    myCanvas.clean();
    if(thePoint.areYou(theSnake.getX(), theSnake.getY())){
      points += theSnake.length();
      theSnake.eat();
      theSnake.move();

      thePoint = new Point(myCanvas, 'green');

      $('#points').text(points);
      $('#length').text(theSnake.length());
    }
    thePoint.blink();

    theSnake.checkTail();
    theSnake.move();
    theSnake.paint();
  } else {
    $('#pause').show('slow');
  }
}

$(document).keydown(function(event){
  var direction;
  switch(event.which){
    case 37:
      direction = 'left';
      break;
    case 38:
      direction = 'up';
      break;
    case 39:
      direction = 'right';
      break;
    case 40:
      direction = 'down';
      break;
    case 80:
      pause = !pause;
      break;
  }
  if(direction){
    theSnake.setDirection(direction);
  }
});