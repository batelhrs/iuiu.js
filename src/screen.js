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
		layer.name = name;
		this.layers.push(layer);
		return layer;
	},
	removeLayer : function(index) {
		this.layers.splice(index, 1);
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
				layer.onDraw(g);
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
				if (scr.onUpdate) scr.onUpdate((now - time) / 1000);
				if (scr.onDraw) {
					scr.graphics.clear(Color.cornflowerBlue);
					scr.onDraw(scr.graphics);
					scr.graphics.flush();
				}
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