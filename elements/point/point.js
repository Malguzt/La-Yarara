var Point = function(canvas, color, x, y){
  if(!x){
    x = Math.floor(Math.random()*50) * 10
  }
  if(!y){
    y = Math.floor(Math.random()*50) * 10
  }
  this.x = x;
  this.y = y;
  this.color = color;
  this.canvas = canvas;
  this.visible = true;
}
Point.prototype.paint = function(){
  if(this.visible){
    this.canvas.context.fillStyle = this.color;
    this.canvas.context.fillRect(this.x, this.y, 10 ,10);
  } 
  return this;
}

Point.prototype.blink = function(){
  if(this.visible){
    this.visible = false;
  } else {
    this.visible = true;
  }
  return this.paint();
}

Point.prototype.areYou = function(x, y){
  if(this.x == x && this.y == y){
    return true;
  }
  return false;
}