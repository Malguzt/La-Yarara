var Canvas = function(idCanvas, dimensions){
  this.element = $("#" + idCanvas);
  if(this.element[0] && this.element[0].getContext){
    this.context =  this.element[0].getContext(dimensions+'d');
    if(!this.context){
      alert('No se pudo crear el contexto de '+dimensions+' dimensiones.');
    }
  } else {
    alert('Elemento canvas no encontrado');
  }
}

Canvas.prototype.clean = function(){
  if(this){
    this.context.clearRect(0,0,this.element.width(),this.element.height());
  }
}