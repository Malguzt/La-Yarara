/**
 * @class Canvas
 * @param idCanvas string CSS ID of the canva element.
 * @param dimensions integer 2 or 3
 */
var Canvas = function(idCanvas, dimensions){
  this.element = $("#" + idCanvas); // Seeking the canvas element.

  if(this.element[0] && this.element[0].getContext){ //If exist the context.
    this.context =  this.element[0].getContext(dimensions+'d'); //Saving the context
    
    if(!this.context){
      alert('No se pudo crear el contexto de '+dimensions+' dimensiones.');
    }//End if

  } else {
    alert('Elemento canvas no encontrado');
  } //End if
}

/**
 * Draw a clean rectangle with size of the canvas.
 * @return clearRect return.
 */
Canvas.prototype.clean = function(){
  if(this){
    return this.context.clearRect(0,0,this.element.width(),this.element.height());
  } //End if
}//End method