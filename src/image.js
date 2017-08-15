var checkerboardCanvas;
var loadList = [];

var downloadLoadList = function() {
	if(loadList.length > 0) {
		PIXI.loader
	  		.add(loadList[0].url)
	  		.load(function() {
	  			loadList[0].img.texture = PIXI.loader.resources[loadList[0].url].texture;
	  			loadList.removeAt(0);
	  			downloadLoadList();	
	  		});
	}
}

function Image() {
	this.texture = null;
}
Image.prototype = {
	get width() {
		return this.texture == null ? 0 : this.texture.width;
	},
	get height() {
		return this.texture == null ? 0 : this.texture.height;
	}																			
}
Image.fromURL = function(url) {
	var image = new Image();
	if(PIXI.loader.resources[url]) {
		image.texture = PIXI.loader.resources[url].texture;
	}
	else {
		loadList.push({ img : image, url : url });
		if(!PIXI.loader.loading) {
			downloadLoadList();
		}
	  		
	  	checkerboardCanvas = checkerboardCanvas || (function() {
			var c = document.createElement('canvas').getContext('2d');
			c.canvas.width = c.canvas.height = 128;
			for (var y = 0; y < c.canvas.height; y += 16) {
			  for (var x = 0; x < c.canvas.width; x += 16) {
			    c.fillStyle = (x ^ y) & 16 ? '#FFF' : '#DDD';
			    c.fillRect(x, y, 16, 16);
			  }
			}
			return c.canvas;
		})();
		
		image.texture = PIXI.Texture.fromCanvas(checkerboardCanvas);
	}
	return image;
}
Image.fromCanvas = function(canvas) {
	var image = new Image();
	image.texture = PIXI.Texture.fromCanvas(canvas);
	return image;
}