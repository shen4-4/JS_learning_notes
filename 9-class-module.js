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

	//构造函数和类的知识
	//当使用instanceof运算符来检测对象是否属于某个类时会用到构造函数
	//实际上instanceof并不会检查r函数是否由range()函数初始化而来，而回检查r是否继承自Range.prototype
	r instanceof Range //如果r继承来自range.prototype,则返回true

	//constructor属性
	//每个JavaScript函数(除个别)都拥有一个prototype属性，这个属性的值是一个对象，这个对象包含唯一一个不可枚举属性constructor
	var F = function(){};
	var p = F.prototype;
	var c = p.constructor;
	c === F //true 对于任意函数F.prototype.constructor == f

	var o = new F();
	o.constructor === F //true constructor属性代指这个类
