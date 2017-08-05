function Layer()  {
	this.name = "[ÐÂ½¨²ã]";
	this.isVisual = true;
	this.objects = [];
}
Layer.prototype = {
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