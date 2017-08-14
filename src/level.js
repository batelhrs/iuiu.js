function Level()  {
	this.isVisual = true;
	this.x = 0;
	this.y = 0;
	this.width = 300;
	this.height = 200;
	this.layers = [];
}
Level.prototype = {
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
	}
}