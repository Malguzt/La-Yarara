/**
 * Snake section.
 * @Class Section
 * @param canvas Canvas object
 * @param color string Color in the CSS format.
 * @param x integer X Position
 * @param y integer Y Position
 */
var Section = function(canvas, color, x, y){
  this.x = x;
  this.y = y;
  this.color = color;
  this.canvas = canvas;
  this.nextSection = null; //The section is a list.
  this.prevMove = ''; //Next move to do
}

Section.prototype = new Point(); //Inheriting from point

/**
 * Recursively draw the sections on the canvas .
 * @return Section It self
 */
Section.prototype.draw = function(){
  this.paint();
  
  if(this.getNext()){ //If isn't the last
    this.getNext().draw();
  }
  
  return this;
}

/**
 * Set the next section in the snake.
 * @param next Section
 */
Section.prototype.setNext = function(next){
  this.nextSection = next;
  return this;
}

/**
 * Get the next section in the snake.
 * @return Section
 */
Section.prototype.getNext = function(){
  return this.nextSection;
}

/**
 * Recursively move the sections of the canvas .
 * @return Section It self
 */
Section.prototype.moveTail = function(direction){
  this.move(direction);

  if(this.getNext()){//If isn't the last
    this.getNext().moveTail(this.prevMove); //Move the next section with its previous direction.
  }
  
  this.prevMove = direction; //Saving the direction
  
  return this; //Manias of Smalltalk
}

/**
 * Check if any of the following sections are in the its new position.
 * @return boolean True if any section is at coordinates.
 */
Section.prototype.checkTail = function(){
  if(this.getNext()){ //If isn't the last
    return this.getNext().tailAreHere(this.x, this.y);
  }
  return false;
}

/**
 * Recursively check if it or any of the following sections are in the position.
 * @param x integer X Position
 * @param y integer Y Position
 * @return boolean True if any section is at coordinates.
 */
Section.prototype.tailAreHere = function(x, y){
  if(this.areYou(x, y)){ //If it is in the position.
    return true;
  }

  if(this.getNext()){ //If isn't the last one.
    return this.getNext().tailAreHere(x, y); //Recursively call
  }
  
  return false; //Base case.
}


/**
 * Move the section in the specified direction.
 * @param direction string down, up, left or right
 * @return Section It self
 */
Point.prototype.move = function(direction){
  switch(direction){
    case 'down':
      this.y = this.y + 10;
      break;
    case 'up':
      this.y = this.y - 10;
      break;
    case 'left':
      this.x = this.x - 10;
      break;
    case 'right':
      this.x = this.x + 10;
      break;
  }
  if(this.x >= this.canvas.element.width()){ //Goes out to the right
    this.x = 0; //Re-enter for the left
  }
  if(this.x < 0){ //Goes out to the left
    this.x = this.canvas.element.width() - 10; //Re-enter for the right
  }
  if(this.y >= this.canvas.element.height()){ //Goes out to the down
    this.y = 0; //Re-enter for the up
  }
  if(this.y < 0){ //Goes out to the up
    this.y = this.canvas.element.height() - 10; //Re-enter for the down
  }

  return this;
}

/**
 * Recursively calculates the length of the snake.
 * @return integer length of the snake.
 */
Section.prototype.length = function(){
  if(this.getNext()){ //If isn't the last one.
    return this.getNext().length() + 1; //Recursively call
  }
  
  return 1; //Base case
}