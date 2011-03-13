var Section = function(canvas, color, x, y){
  this.x = x;
  this.y = y;
  this.color = color;
  this.canvas = canvas;
  this.nextSection = null;
  this.prevMove = null;
}

Section.prototype = new Point();

Section.prototype.draw = function(){
  this.paint();
  if(this.getNext()){
    this.getNext().draw();
  }
}

Section.prototype.setNext = function(next){
  this.nextSection = next;
}

Section.prototype.getNext = function(){
  return this.nextSection;
}

Section.prototype.moveTail = function(direction){
  this.move(direction);
  if(this.getNext()){
    this.getNext().moveTail(this.prevMove);
  }
  this.prevMove = direction;
}

Section.prototype.checkTail = function(){
  if(this.nextSection){
    return this.nextSection.tailAreHere(this.x, this.y);
  }
  return false;
}

Section.prototype.tailAreHere = function(x, y){
  if(this.areYou(x, y)){
    return true;
  }
  if(this.nextSection){
    return this.nextSection.tailAreHere(x, y);
  }
  return false;
}

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
  if(this.x >= this.canvas.element.width()){
    this.x = 0;
  }
  if(this.x < 0){
    this.x = this.canvas.element.width() - 10;
  }
  if(this.y >= this.canvas.element.height()){
    this.y = 0;
  }
  if(this.y < 0){
    this.y = this.canvas.element.height() - 10;
  }
}

Section.prototype.length = function(){
  if(this.nextSection){
    return this.nextSection.length() + 1;
  }
  return 1;
}