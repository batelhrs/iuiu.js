function Layer()  {
	this.name = "[�½���]";
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