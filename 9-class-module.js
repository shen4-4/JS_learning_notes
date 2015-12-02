	//类和原型 类的所有实例对象都从同一个原型对象上继承属性，原型对象是类的核心
	//一个简单的js类，实现表示值的范围的类
	function range(from,to){
		var r = inherit(range,methods);
		r.from = from;
		r.to = to;
		return r;
	}
	range.methods = {
		includes:function(x){
			return this.from <==x && x<==this.to;
		},
		foreach:function(f){
			for(var x=Math.ceil(this.from);x<=this.to;x++)f(x);
		},
		toString:function(){
			return '('+this.from+'...'+this.to+')';
		}
	};
	var r = range(1,3);
	r.include(2); //true
	r.foreach(console.log); //1,2,3
	console.log(r); //1..3

	