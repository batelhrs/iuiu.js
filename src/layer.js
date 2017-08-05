/**
* This is the description for my class.
*
* @class Layer
*/
function Layer()  {
	this.name = "[�½���]";
	this.isVisual = true;
	this.objects = [];
}
Layer.prototype = {
	/**
	* My method description.  Like other pieces of your comment blocks, 
	* this can span multiple lines.
	*
	* @method �������
	* @param {Reference} IUIU�����������Դ
	* @return {Object} ��������ṹ
	*/
	addObject : function(source) {
		// ����param
		var obj = new Component();
		obj.name = CryptoJS.MD5(new Date().getTime());
		obj.params = source.params ? source.params.slice(0, source.params.length) : [];
		obj.onDraw = source.onDraw;
		obj.onUpdate = source.onUpdate;
		
		this.objects.push(obj);
		
		return obj;				
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
				if(this.objects[i].onDraw) {
					this.objects[i].onDraw(g);
				}
			}
		}
	}
};