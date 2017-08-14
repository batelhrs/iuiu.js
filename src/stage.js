function Stage()  {
	var app = new PIXI.Application();
	this.view = app.view;
	this.graphics = new Graphics(app);
	this.levels = [];
	this.isPaused = true;
}
Stage.prototype = {
	addLevel : function(name) {
		var level = new Level();
		this.levels.push(level);
		return level;
	},
	removeLevel : function(index) {
		this.levels.splice(index, 1);
	},
	onUpdate : function(time) {
		for(var i = 0; i < this.levels.length; i++) {
			var level = this.levels[i];
			if(level.onUpdate) {
				level.onUpdate(time);
			}
		}
	},
	onDraw : function(g) {		
		for(var i = 0; i < this.levels.length; i++) {
			var level = this.levels[i];
			g.offsetX = level.x;
			g.offsetY = level.y;
			if(level.isVisual && level.onDraw) {
				level.onDraw(g);
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
        },
        fullscreen : function(options) {
		options = options || {};
		var top = options.paddingTop || 0;
		var left = options.paddingLeft || 0;
		var right = options.paddingRight || 0;
		var bottom = options.paddingBottom || 0;
		if (!document.body) {
			throw new Error('document.body doesn\'t exist yet (call gl.fullscreen() from ' + 'window.onload() or from inside the <body> tag)');
		}
		document.body.appendChild(this.view);
		document.body.style.overflow = 'hidden';
		this.view.style.position = 'absolute';
		this.view.style.left = left + 'px';
		this.view.style.top = top + 'px';
		
		var context = this;
		function resize() {
			context.view.width = window.innerWidth - left - right;
			context.view.height = window.innerHeight - top - bottom;
			context.graphics.resize(context.view.width, context.view.height);
			if (context.onDraw) context.onDraw(context.graphics);
		}
		window.addEventListener('resize', resize);
		resize();
    }
}