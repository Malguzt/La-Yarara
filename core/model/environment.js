Environment = Backbone.Model.extend({
	lives: 3,
	points: 0,
	apples: 0, //Determines how many apples ate snake.
	// touchs: 0, //Determines how many cursor keys were touched since the last apple.

	initialize: function(){
		this.set('loops', 0); //Determines how many loops have passed since the last apple.
		this.set('speed', 150); //Are the milliseconds for the interval delay.
	},
});