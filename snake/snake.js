/**
 * @class snake
 * @param canvas Canvas object on which to draw the snake.
 * @param color string Color in the CSS format.
 */
var Snake = function(canvas, color){
  this.color = color;
  this.head = new Section(
    canvas,
    color,
    Math.floor(canvas.element.width()/2), //Drawing the snake in the middle of the canvas.
    Math.floor(canvas.element.height()/2),
    null
  );
    
  this.direction = null; //The null direction causes the snake doesn't move at first.
}

/**
 * The snake grows when she eat.
 * @return Snake It self
 */
Snake.prototype.eat = function(){
  var newHead = new Section(this.head.canvas, this.head.color, this.head.x, this.head.y); //The new point is created in the old head position

  newHead.setNext(this.head);
  this.head = newHead; //Is a new node in the list, man.

  return this;
}

/**
 * @return integer X position of the snake head.
 */
Snake.prototype.getX = function(){
  return this.head.x;
}

/**
 * @return integer Y position of the snake head.
 */
Snake.prototype.getY = function(){
  return this.head.y;
}

/**
 * Draw the snake in the canvas.
 * @return Snake It self
 */
Snake.prototype.paint = function(){
  this.head.draw();

  return this;
}

/**
 * Move the snake in the seted direction
 * @return Snake It self
 */
Snake.prototype.move = function(){
  this.head.moveTail(this.direction);

  return this;
}

/**
 * Set the next direction for the snake.
 * @param direction string up, down, left, right
 * @return Snake It self
 */
Snake.prototype.setDirection = function(direction){
  var opposite = new Object();
  opposite['up'] = 'down';
  opposite['down'] = 'up';
  opposite['left'] = 'right';
  opposite['right'] = 'left';
  
  if(opposite[this.direction] == direction){
    direction = this.direction;
  }
  
  this.direction = direction;

  return this; //More smalltalk manias
}

/**
 * Check if any of the snake sections are in the its new position.
 * Restart de game if any section is at head coordinates.
 */
Snake.prototype.checkTail = function(){
  if(this.head.checkTail()){
    restart();
  }
}

/**
 * Recursively calculates the length of the snake.
 * @return integer length of the snake.
 */
Snake.prototype.length = function(){
  return this.head.length();
}