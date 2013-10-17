Section = Point.extend({
	el: $('body'),

	initialize: function(options){
		_.bindAll(this, 'render', 'blink', 'areYou');

		if(this.options.x){
			this.x = this.options.x;
		} else {
	    this.x = Math.floor(Math.random()*50) * 10; //Random value if none was defined.
	  } //End if
	  if(this.options.y){
	  	this.options.y;
	  } else {
	    this.y = Math.floor(Math.random()*50) * 10; //Random value if none was defined.
	  }

		this.color = this.options.color;
		this.canvas = this.options.canvas;

		this.visible = true;

		this.render();
	},

	render: function(){
		if(this.visible){
	 		this.canvas.context.fillStyle = this.color; //Defining the drawing color.
	  	this.canvas.context.fillRect(this.x, this.y, 10 ,10);
		}
	},

	blink: function(){
		this.visible = !this.visible;
	},

	areYou: function(options){
		if (this.options.x == this.x && this.options.y == this.y) {
			return true;
		};
		return false;
	}
});