Main = Backbone.View.extend({
	el: $('body'),

	initialize: function(options){
		_.bindAll(this, 'runLoop');

		this.listenTo(environment, 'change:loops', this.runLoop);

		this.runLoop();
	},

	runLoop: function(){
		myCanvas.clean();

		// if(this.get('loops') != undefined && this.get('speed') != undefined){
			// this.nextLoop();
			setTimeout(function(){
				// var nextLoop = ;
				// nextLoop++;
				// alert(environment.get('loops'));
				$('#points').text(environment.get('loops'));
				environment.set('loops', environment.get('loops') + 1);
			}, 500);
		// }
	},
});