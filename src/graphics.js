function Graphics(app) {
	this.app = app;
}
Graphics.prototype = {
	clear : function(color) {
		while (this.app.stage.children.length > 0) { 
			var child = this.app.stage.getChildAt(0); 
			this.app.stage.removeChild(child); 
		}
		this.app.renderer.backgroundColor = color.toHex();
	},
	drawLine : function(start, end, color, thinkness) {
		var line = new PIXI.Graphics();
		line.lineStyle(thinkness, color.toHex(), color.a);
		line.moveTo(start.x, start.y);
		line.lineTo(end.x, end.y);
		this.app.stage.addChild(line);
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
		if(color.r != Color.white.r || color.g != Color.white.g || color.b != Color.white.b || color.a != Color.White.a) {
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
		
		this.app.stage.addChild(sprite);
	},
	flush : function() {
		this.app.renderer.render(this.app.stage);
	}
};