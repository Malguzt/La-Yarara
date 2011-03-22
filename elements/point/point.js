/**
 * @Class Point
 * @param canvas Canvas object.
 * @param color Color for the point.
 * @param x integer X position for the point.
 * @param y integer Y position for the point.
 */
var Point = function(canvas, color, x, y){
  if(!x){
    x = Math.floor(Math.random()*50) * 10; //Random value if none was defined.
  } //End if
  if(!y){
    y = Math.floor(Math.random()*50) * 10; //Random value if none was defined.
  } //End if
  this.x = x;
  this.y = y;
  this.color = color;
  this.canvas = canvas;
  
  this.visible = true; //Flag to make bliks the point.
} //End constructor

/**
 * Draw the poin in the canvas.
 * @return Point It self
 */
Point.prototype.paint = function(){
  if(this.visible){
    this.canvas.context.fillStyle = this.color; //Defining the drawing color.
    this.canvas.context.fillRect(this.x, this.y, 10 ,10); //Drawing the point (Square)
  } //End if
  return this;
} //End method

/**
 * Change the visibility of the point and paint it.
 * @return Point Paint return.
 */
Point.prototype.blink = function(){
  this.visible = !this.visible;
  return this.paint();
} //End method

/**
 * Check if the point is in the given coordinates.
 * @param x integer X coordinate.
 * @param y integer Y coordinate.
 * @return boolean True if the point is in this coordinates.
 */
Point.prototype.areYou = function(x, y){
  if(this.x == x && this.y == y){
    return true;
  } //End if
  return false;
} //End method