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
	image.texture = PIXI.Texture.fromImage(url);
	return image;
}
Image.fromCanvas = function(canvas) {
	var image = new Image();
	image.texture = PIXI.Texture.fromCanvas(url);
	return image;
}