var Snake = function(canvas, color){
  this.color = color;
  this.head = new Section(
    canvas,
    color,
    Math.floor(canvas.element.width()/2), 
    Math.floor(canvas.element.height()/2),
    null
  );
  this.direction = null;
}

Snake.prototype.eat = function(){
  var newHead = new Section(this.head.canvas, this.head.color, this.head.x, this.head.y);
  //newHead.move(this.direction);
  newHead.setNext(this.head);
  this.head = newHead;
}

Snake.prototype.getX = function(){
  return this.head.x;
}

Snake.prototype.getY = function(){
  return this.head.y;
}

Snake.prototype.paint = function(){
  this.head.draw();
}

Snake.prototype.move = function(){
  this.head.moveTail(this.direction);
}

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
}

Snake.prototype.checkTail = function(){
  if(this.head.checkTail()){
    restart();
  }
}

Snake.prototype.length = function(){
  return this.head.length();
}