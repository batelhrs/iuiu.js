function Graphics(stage) {
	this.stage = stage;
}
Graphics.prototype = {
	clear : function(color) {
		while (this.stage.children.length > 0) { 
			var child = this.stage.getChildAt(0); 
			this.stage.removeChild(child); 
		}
		stage.renderer.backgroundColor = color.toHex();
	},
	draw : function(texture, location, color, origin, rotation, scale, sourceRectangle) {
		// texture
		var texture = PIXI.loader.resources[texture].texture;
		
		// sourceRectangle
		if(sourceRectangle) {
			texture.frame = new PIXI.Rectangle(sourceRectangle.x, sourceRectangle.y, sourceRectangle.width, sourceRectangle.height);
		}
		else {
			texture.frame = null;
		}
		
		// sprite
		var sprite = new PIXI.Sprite(texture);
		
		// location
		sprite.x = location.x;
		sprite.y = location.y;
		
		// color
		if(color != Color.white) {
			var colorFilter = new PIXI.ColorMatrixFilter();
			colorFilter.matrix = [
				// R, G, B, A
				color.r, 0, 0, 0, 0,  // R
				0, color.g, 0, 0, 0,  // G
				0, 0, color.b, 0, 0,  // B
				0, 0, 0, color.a, 0  // A
			];
			sprite.filters.push(colorFilter);
		}
		
		// origin
		sprite.anchor.x = origin.x;
		sprite.anchor.y = origin.y;
		
		// rotation
		sprite.rotation = rotation;
		
		// scale
		sprite.scale.x = scale.x;
		sprite.scale.y = scale.y;
		
		this.stage.addChild(sprite);
	}
	flush : function() {
		this.stage.renderer.render(this.stage);
	}
};