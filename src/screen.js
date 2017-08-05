function Screen()  {
	var app = new PIXI.Application();
	this.view = app.view;
	this.graphics = new Graphics(app);
	this.layers = [];
	this.isPaused = true;
}
Screen.prototype = {
	addLayer : function(name) {
		var layer = new Layer();
		this.layers.push(layer);
		return layer;
	},
	onUpdate : function(time) {
		for(var i = 0; i < this.layers.length; i++) {
			var layer = this.layers[i];
			if(layer.onUpdate) {
				layer.onUpdate(time);
			}
		}
	},
	onDraw : function(g) {
		for(var i = 0; i < this.layers.length; i++) {
			var layer = this.layers[i];
			if(layer.onDraw) {
				layer.onDraw(time);
			}
		}
	},
	start : function() {
		this.isPaused = false;

		var post = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
		function(callback) {
			setTimeout(callback, 1000 / 60);
		};

		var time = new Date().getTime();
		var context = this;

		function update() {
			var scr = context;
			if(!scr.isPaused) {
				var now = new Date().getTime();
				if (scr.onUpdate) gl.onUpdate((now - time) / 1000);
				if (scr.onDraw) gl.onDraw(scr.graphics);
				post(update);
			}
			time = now;
		}
        	update();
        },
        pause : function() {
        	this.isPaused = true;
        }
}