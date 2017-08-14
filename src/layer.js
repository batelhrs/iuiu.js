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