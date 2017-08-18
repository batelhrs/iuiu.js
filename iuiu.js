/*
 * iuiu.js
 * http://github.com/kumawang/iuiu.js/
 *
 * Copyright 2017 KumaWang
 * Released under the MIT license
 */
var IUIU = (function() {

// src/color.js
function Color(r, g, b, a) {
	var hexData;
	
	if (((((r | g) | b) | a) & -256) != 0) {
		r = r < 0 ? 0 : (r > 255 ? 255 : r);
		g = g < 0 ? 0 : (g > 255 ? 255 : g);
		b = b < 0 ? 0 : (b > 255 ? 255 : b);
		a = a < 0 ? 0 : (a > 255 ? 255 : a);
		
		hexData = [ r, g, b ];
    	} else {
    		hexData = [ r, g, b ];
    		
		r = r / 255;
		g = g / 255;
		b = b / 255;
		a = a / 255;
	}
	
	this.r = r;
	this.g = g;
	this.b = b;
	this.a = a;
	
	this.data = [ this.r, this.g, this.b, this.a ];
	
	this.hex = "0x";
	var color = "";
	for (var i = 0; i < hexData.length; i++) {
		var number = new Number(hexData[i]);
		color = number.toString(16);
		this.hex = this.hex + (color.length == 1 ? "0" + color : color);
	}
	this.hex = this.hex.toUpperCase();
}
Color.prototype = {
	toArray : function(n) {
		return this.data;
	},
	toHex : function() 
	{
		return this.hex;
	},
	multiply : function multiply(other) {
	    return new Color(
	    	Math.floor(this.r * other.r / 255.0),
	    	Math.floor(this.g * other.g / 255.0),
	    	Math.floor(this.b * other.b / 255.0),
	    	Math.floor(this.a * other.a / 255.0));
	},
	clone : function() {
		var result = new Color();
		result.r = this.r;
		result.g = this.g;
		result.b = this.b;
		result.a = this.a;
		return result;
	}
};

Color.multiply = function(value, scale) {
	var r = value.r;
	var g = value.g;
	var b = value.b;
	var a = value.a;
	
 	var value = scale*65536;
 	var min = 0;
 	var max = 0xffffff;
	
	value = (value > max) ? max : value;
    value = (value < min) ? min : value;
    var uintScale = value < 0 ? 0 : value;
    
     r = (r*uintScale) >> 16;
     g = (g*uintScale) >> 16;
     b = (b*uintScale) >> 16;
     a = (a*uintScale) >> 16;
     
     r = r > 255 ? 255 : r;
     g = g > 255 ? 255 : g;
     b = b > 255 ? 255 : b;
     a = a > 255 ? 255 : a;
     
     return new Color(r, g, b, a);
};

Color.lerp = function(value1, value2, amount) {
	var r1 = value1.r;
	var g1 = valur1.g;
	var b1 = value1.b;
	var a1 = value1.a;
	
	var r2 = value2.r;
	var g2 = valur2.g;
	var b2 = value2.b;
	var a2 = value2.a;
	
	amount *= 65536;
	if(isNaN(amount) || amount < 0)
		amount = 0
	else if(amount == Number.POSITIVE_INFINITY)
		amount = amount == Number.NEGATIVE_INFINITY ? 0 : 65536;

	return new Color(r1 + (((r2 - r1)*factor) >> 16),
					 g1 + (((g2 - g1)*factor) >> 16),
					 b1 + (((b2 - b1)*factor) >> 16),
					 a1 + (((a2 - a1)*factor) >> 16));
};

Color.aliceBlue=new Color(240,248,255,255);
Color.antiqueWhite=new Color(250,235,215,255);
Color.aqua=new Color(0,255,255,255);
Color.aquamarine=new Color(127,255,212,255);
Color.azure=new Color(240,255,255,255);
Color.beige=new Color(245,245,220,255);
Color.bisque=new Color(255,228,196,255);
Color.black=new Color(0,0,0,255);
Color.blanchedAlmond=new Color(255,235,205,255);
Color.blue=new Color(0,0,255,255);
Color.blueViolet=new Color(138,43,226,255);
Color.brown=new Color(165,42,42,255);
Color.burlyWood=new Color(222,184,135,255);
Color.cadetBlue=new Color(95,158,160,255);
Color.chartreuse=new Color(127,255,0,255);
Color.chocolate=new Color(210,105,30,255);
Color.coral=new Color(255,127,80,255);
Color.cornflowerBlue=new Color(100,149,237,255);
Color.cornsilk=new Color(255,248,220,255);
Color.crimson=new Color(220,20,60,255);
Color.cyan=new Color(0,255,255,255);
Color.darkBlue=new Color(0,0,139,255);
Color.darkCyan=new Color(0,139,139,255);
Color.darkGoldenrod=new Color(184,134,11,255);
Color.darkGray=new Color(169,169,169,255);
Color.darkGreen=new Color(0,100,0,255);
Color.darkKhaki=new Color(189,183,107,255);
Color.darkMagenta=new Color(139,0,139,255);
Color.darkOliveGreen=new Color(85,107,47,255);
Color.darkOrange=new Color(255,140,0,255);
Color.darkOrchid=new Color(153,50,204,255);
Color.darkRed=new Color(139,0,0,255);
Color.darkSalmon=new Color(233,150,122,255);
Color.darkSeaGreen=new Color(143,188,139,255);
Color.darkSlateBlue=new Color(72,61,139,255);
Color.darkSlateGray=new Color(47,79,79,255);
Color.darkTurquoise=new Color(0,206,209,255);
Color.darkViolet=new Color(148,0,211,255);
Color.deepPink=new Color(255,20,147,255);
Color.deepSkyBlue=new Color(0,191,255,255);
Color.dimGray=new Color(105,105,105,255);
Color.dodgerBlue=new Color(30,144,255,255);
Color.firebrick=new Color(178,34,34,255);
Color.floralWhite=new Color(255,250,240,255);
Color.forestGreen=new Color(34,139,34,255);
Color.fuchsia=new Color(255,0,255,255);
Color.gainsboro=new Color(220,220,220,255);
Color.ghostWhite=new Color(248,248,255,255);
Color.gold=new Color(255,215,0,255);
Color.goldenrod=new Color(218,165,32,255);
Color.gray=new Color(128,128,128,255);
Color.green=new Color(0,128,0,255);
Color.greenYellow=new Color(173,255,47,255);
Color.honeydew=new Color(240,255,240,255);
Color.hotPink=new Color(255,105,180,255);
Color.indianRed=new Color(205,92,92,255);
Color.indigo=new Color(75,0,130,255);
Color.ivory=new Color(255,255,240,255);
Color.khaki=new Color(240,230,140,255);
Color.lavender=new Color(230,230,250,255);
Color.lavenderBlush=new Color(255,240,245,255);
Color.lawnGreen=new Color(124,252,0,255);
Color.lemonChiffon=new Color(255,250,205,255);
Color.lightBlue=new Color(173,216,230,255);
Color.lightCoral=new Color(240,128,128,255);
Color.lightCyan=new Color(224,255,255,255);
Color.lightGoldenrodYellow=new Color(250,250,210,255);
Color.lightGray=new Color(211,211,211,255);
Color.lightGreen=new Color(144,238,144,255);
Color.lightPink=new Color(255,182,193,255);
Color.lightSalmon=new Color(255,160,122,255);
Color.lightSeaGreen=new Color(32,178,170,255);
Color.lightSkyBlue=new Color(135,206,250,255);
Color.lightSlateGray=new Color(119,136,153,255);
Color.lightSteelBlue=new Color(176,196,222,255);
Color.lightYellow=new Color(255,255,224,255);
Color.lime=new Color(0,255,0,255);
Color.limeGreen=new Color(50,205,50,255);
Color.linen=new Color(250,240,230,255);
Color.magenta=new Color(255,0,255,255);
Color.maroon=new Color(128,0,0,255);
Color.mediumAquamarine=new Color(102,205,170,255);
Color.mediumBlue=new Color(0,0,205,255);
Color.mediumOrchid=new Color(186,85,211,255);
Color.mediumPurple=new Color(147,112,219,255);
Color.mediumSeaGreen=new Color(60,179,113,255);
Color.mediumSlateBlue=new Color(123,104,238,255);
Color.mediumSpringGreen=new Color(0,250,154,255);
Color.mediumTurquoise=new Color(72,209,204,255);
Color.mediumVioletRed=new Color(199,21,133,255);
Color.midnightBlue=new Color(25,25,112,255);
Color.mintCream=new Color(245,255,250,255);
Color.mistyRose=new Color(255,228,225,255);
Color.moccasin=new Color(255,228,181,255);
Color.navajoWhite=new Color(255,222,173,255);
Color.navy=new Color(0,0,128,255);
Color.oldLace=new Color(253,245,230,255);
Color.olive=new Color(128,128,0,255);
Color.oliveDrab=new Color(107,142,35,255);
Color.orange=new Color(255,165,0,255);
Color.orangeRed=new Color(255,69,0,255);
Color.orchid=new Color(218,112,214,255);
Color.paleGoldenrod=new Color(238,232,170,255);
Color.paleGreen=new Color(152,251,152,255);
Color.paleTurquoise=new Color(175,238,238,255);
Color.paleVioletRed=new Color(219,112,147,255);
Color.papayaWhip=new Color(255,239,213,255);
Color.peachPuff=new Color(255,218,185,255);
Color.peru=new Color(205,133,63,255);
Color.pink=new Color(255,192,203,255);
Color.plum=new Color(221,160,221,255);
Color.powderBlue=new Color(176,224,230,255);
Color.purple=new Color(128,0,128,255);
Color.red=new Color(255,0,0,255);
Color.rosyBrown=new Color(188,143,143,255);
Color.royalBlue=new Color(65,105,225,255);
Color.saddleBrown=new Color(139,69,19,255);
Color.salmon=new Color(250,128,114,255);
Color.sandyBrown=new Color(244,164,96,255);
Color.seaGreen=new Color(46,139,87,255);
Color.seaShell=new Color(255,245,238,255);
Color.sienna=new Color(160,82,45,255);
Color.silver=new Color(192,192,192,255);
Color.skyBlue=new Color(135,206,235,255);
Color.slateBlue=new Color(106,90,205,255);
Color.slateGray=new Color(112,128,144,255);
Color.snow=new Color(255,250,250,255);
Color.springGreen=new Color(0,255,127,255);
Color.steelBlue=new Color(70,130,180,255);
Color.tan=new Color(210,180,140,255);
Color.teal=new Color(0,128,128,255);
Color.thistle=new Color(216,191,216,255);
Color.tomato=new Color(255,99,71,255);
Color.transparent=new Color(0,0,0,0);
Color.turquoise=new Color(64,224,208,255);
Color.violet=new Color(238,130,238,255);
Color.wheat=new Color(245,222,179,255);
Color.white=new Color(255,255,255,255);
Color.whiteSmoke=new Color(245,245,245,255);
Color.yellow=new Color(255,255,0,255);
Color.yellowGreen=new Color(154,205,50,255);
// src/common.js
Array.prototype.insert = function (index, item) {  
  this.splice(index, 0, item);  
};  

Array.prototype.removeAt=function(index) {
	this.splice(index, 1);
}

function Common() {
}
Common.clone = function (obj) {
   var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? 
            cloneObj(obj[i]) : obj[i]; 
        }
    }
    return newobj;
}
// src/component.js
function Component() {
}
// src/graphics.js
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
	draw : function(image, location, color, origin, rotation, scale, sourceRectangle) {
		// texture
		var texture = image.texture;
		
		// sourceRectangle
		if(sourceRectangle) {
			texture.frame = new PIXI.Rectangle(sourceRectangle.x, sourceRectangle.y, sourceRectangle.width, sourceRectangle.height);
		}
		else {
			texture.frame = new PIXI.Rectangle(0, 0, image.width, image.height);
		}
		
		// sprite
		var sprite = new PIXI.Sprite(texture);
		
		// origin
		sprite.anchor.x = origin.x / image.width;
		sprite.anchor.y = origin.y / image.height;
		
		// location
		sprite.x = location.x + origin.x;
		sprite.y = location.y + origin.y;
		
		// color
		if(color.r != Color.white.r || color.g != Color.white.g || color.b != Color.white.b || color.a != Color.white.a) {
			var colorFilter = new PIXI.filters.ColorMatrixFilter();
			colorFilter.matrix = [
				// R, G, B, A
				color.r, 0, 0, 0, 0,  // R
				0, color.g, 0, 0, 0,  // G
				0, 0, color.b, 0, 0,  // B
				0, 0, 0, color.a, 0  // A
			];
			sprite.filters = [colorFilter];
		}
		
		// rotation
		sprite.rotation = rotation;
		
		// scale
		sprite.scale.x = scale.x;
		sprite.scale.y = scale.y;
		
		this.app.stage.addChild(sprite);
	},
	flush : function() {
		this.app.renderer.render(this.app.stage);
	},
	resize : function(width, height) {
		this.app.renderer.resize(width, height);
	}
};
// src/image.js
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
// src/layer.js
/**
* This is the description for my class.
*
* @class Layer
*/
function Layer()  {
	this.name = "[新建层]";
	this.isVisual = true;
	this.objects = [];
}
Layer.prototype = {
	/**
	* My method description.  Like other pieces of your comment blocks, 
	* this can span multiple lines.
	*
	* @method 添加物体
	* @param {Reference} IUIU引擎组件引用源
	* @return {Object} 返回物体结构
	*/
	addObject : function(source) {
		// 拷贝param
		var obj = source.create();
		obj.name = guid();
		obj.isVisual = true;
		obj.layer = this;
		obj.properties = source.properties ? Common.clone(source.properties) : {};
		
		this.objects.push(obj);
		
		return obj;				
	},
	removeObject : function(index) {
		this.objects.splice(index, 1);
	},
	onUpdate : function(time) {
		for(var i = 0; i < this.objects.length; i++) {
			if(this.objects[i].onUpdate) {
				this.objects[i].onUpdate(time);
			}
		}
	},
	onDraw : function(g) {
		if(this.isVisual) {
			for(var i = 0; i < this.objects.length; i++) {
				if(this.objects[i].isVisual) {
					if(this.objects[i].onDraw) {
						this.objects[i].onDraw(g);
					}
				}
			}
		}
	}
};

function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}
// src/level.js
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
// src/main.js
var IUIU = {
	Common : Common,
	Image : Image,
	Layer : Layer,
	Level : Level,
	Stage : Stage,
	Vector: Vector,
	Color: Color,
	Graphics: Graphics,
	Editor: { Components : { }, Events : { } }
};
// src/stage.js
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
// src/vector.js
// Provides a simple 3D vector class. Vector operations can be done using member
// functions, which return new vectors, or static functions, which reuse
// existing vectors to avoid generating garbage.
function Vector(x, y, z) {
  this.data = [x || 0, y || 0, z || 0];
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

// ### Instance Methods
// The methods `add()`, `subtract()`, `multiply()`, and `divide()` can all
// take either a vector or a number as an argument.
Vector.prototype = {
  negative: function() {
    return new Vector(-this.x, -this.y, -this.z);
  },
  add: function(v) {
    if (v instanceof Vector) return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);
    else return new Vector(this.x + v, this.y + v, this.z + v);
  },
  subtract: function(v) {
    if (v instanceof Vector) return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);
    else return new Vector(this.x - v, this.y - v, this.z - v);
  },
  multiply: function(v) {
    if (v instanceof Vector) return new Vector(this.x * v.x, this.y * v.y, this.z * v.z);
    else return new Vector(this.x * v, this.y * v, this.z * v);
  },
  divide: function(v) {
    if (v instanceof Vector) return new Vector(this.x / v.x, this.y / v.y, this.z / v.z);
    else return new Vector(this.x / v, this.y / v, this.z / v);
  },
  equals: function(v) {
    return this.x == v.x && this.y == v.y && this.z == v.z;
  },
  dot: function(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  },
  cross: function(v) {
    return new Vector(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x
    );
  },
  length: function() {
    return Math.sqrt(this.dot(this));
  },
  unit: function() {
    return this.divide(this.length());
  },
  min: function() {
    return Math.min(Math.min(this.x, this.y), this.z);
  },
  max: function() {
    return Math.max(Math.max(this.x, this.y), this.z);
  },
  toAngles: function() {
    return {
      theta: Math.atan2(this.z, this.x),
      phi: Math.asin(this.y / this.length())
    };
  },
  angleTo: function(a) {
    return Math.acos(this.dot(a) / (this.length() * a.length()));
  },
  toArray: function(n) {
    return this.data;
  },
  clone: function() {
    return new Vector(this.x, this.y, this.z);
  },
  init: function(x, y, z) {
    this.x = x; this.y = y; this.z = z;
    return this;
  }
};

// ### Static Properies
Vector.zero = new Vector(0,0);
Vector.one = new Vector(1,1);

// ### Static Methods
// `Vector.randomDirection()` returns a vector with a length of 1 and a
// statistically uniform direction. `Vector.lerp()` performs linear
// interpolation between two vectors.
Vector.negative = function(a, b) {
  b.x = -a.x; b.y = -a.y; b.z = -a.z;
  return b;
};
Vector.add = function(a, b, c) {
  if (b instanceof Vector) { c.x = a.x + b.x; c.y = a.y + b.y; c.z = a.z + b.z; }
  else { c.x = a.x + b; c.y = a.y + b; c.z = a.z + b; }
  return c;
};
Vector.subtract = function(a, b, c) {
  if (b instanceof Vector) { c.x = a.x - b.x; c.y = a.y - b.y; c.z = a.z - b.z; }
  else { c.x = a.x - b; c.y = a.y - b; c.z = a.z - b; }
  return c;
};
Vector.multiply = function(a, b, c) {
  if (b instanceof Vector) { c.x = a.x * b.x; c.y = a.y * b.y; c.z = a.z * b.z; }
  else { c.x = a.x * b; c.y = a.y * b; c.z = a.z * b; }
  return c;
};
Vector.divide = function(a, b, c) {
  if (b instanceof Vector) { c.x = a.x / b.x; c.y = a.y / b.y; c.z = a.z / b.z; }
  else { c.x = a.x / b; c.y = a.y / b; c.z = a.z / b; }
  return c;
};
Vector.cross = function(a, b, c) {
  c.x = a.y * b.z - a.z * b.y;
  c.y = a.z * b.x - a.x * b.z;
  c.z = a.x * b.y - a.y * b.x;
  return c;
};
Vector.unit = function(a, b) {
  var length = a.length();
  b.x = a.x / length;
  b.y = a.y / length;
  b.z = a.z / length;
  return b;
};
Vector.fromAngles = function(theta, phi) {
  return new Vector(Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi));
};
Vector.randomDirection = function() {
  return Vector.fromAngles(Math.random() * Math.PI * 2, Math.asin(Math.random() * 2 - 1));
};
Vector.min = function(a, b) {
  return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
};
Vector.max = function(a, b) {
  return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
};
Vector.lerp = function(a, b, fraction) {
  return b.subtract(a).multiply(fraction).add(a);
};
Vector.fromArray = function(a) {
  return new Vector(a[0], a[1], a[2]);
};
Vector.angleBetween = function(a, b) {
  return a.angleTo(b);
};

return IUIU;
})();
