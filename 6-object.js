
	//对象直接量
	var empty = {};
	var point = {x:0;y:0};
	var point2 = { x:point.x, y:point.y+1};
	var book = {
		"main title":"JavaScript",
		'sub-title':"The Definitive Guide",
		"for":"all audiences",
		author:{
			firstname:"David",
			surname:"Flanagan"
		}
	};

	//通过new创建对象
	var o = new Objext();
	var a = new Array();
	var d = new Date();
	var r = new RegExp("js");

	//object.create创建对象
	var o1 = Object.create({x:1,y:2});
	var o2 = Object.create(null);
	var o3 = Object.create(Object.prototype);

	//通过原型继承创建一个新对象
	function inherit(p){
		if(p == null) throw TypeError();
		if(Object.create)
			return Object.create(p);
		var t = typeof p;
		if(t !== "object" && t !=="function") throw TypeError();
		function f(){};
		f.prototype = p;
	    return new f();
	}

	//属性的查询和设置
	var author = book.author;
	var name = author.surname;
	var title = book["main title"]

	book.edition = 6;
	book["mian title"] = "ECMAAcript";

	//通过[]来访问对象的属性时，属性名可通过字符串来表示
	var addr = "";
	for(i = 0 ; i < 4 ; i++){
		addr += customer["address"+i] + '\n';
	}

	//for/in遍历数组
	function addStock(portfolio,stockname,shares){
		portfolio[storkname] = shares;
	}

	function getValue(portfolio){
		var total = 0.0;
		for(stock in portfolio){
			var shares = portfolio[stock];
			var prices = getquote(stock);
			total += shares * prices;
		}
		return total;
	}

	//继承
	var o = {} //o从object.prototype继承对象的方法；
	o.x = 1;
	var p = inherit(o);
	p.y = 2;
	var q = inherit(p);
	q.z = 3;
	var s = q.toString();
	q.x + q.y  //=>3

	//设置属性与继承无关
	var unitcircle = {r:1};
	var c = inherit(unitcircle);
	c.x = 1; c.y = 2;
	c.r = 2;
	unitcircle.r; //=>1

	//属性访问错误，两种避免出错的方法
	book.subtitle ; //undefined
	var len = book.subtitle.length; //抛出类型错误异常
	//1
	var len = undefined;
	if(book){
		if (book.subtitle) len = book.subtitle.length;
	}
	//2
	var len = book && book.subtitle && book.subtitle.lenth;

 	//删除属性,delete只能删除自有属性，不能删除继承属性
 	delete book.author;
 	delete book["main title"];

 	//delete表达式删除成功后或没有任何副作用，返回true
 	o = {x:1};
 	delete o.x;
 	delete o.x;
 	delete o.toString; //toString是继承来的，什么也没做，返回true
 	delete 1;

 	//delete 不能删除那些可配置为false的属性
 	delete Object.prototype; //不能删除，属性为不可配置
 	var x = 1; 
 	delete this x; //不能删除这个属性
 	function f(){};
 	delete this.f; //不能删除全局函数

 	//检测属性 通过 in、 hasOwnProperty()和propertyIsEnumberable()
 	var  o = {x:1}; //更简便的同in的方法是使用"!=="判断是否是undefined,但是in能区分不存在和存在但属性为undefined的属性
 	"x" in o; //true
 	"y" in o; //false
 	"toString" in o; //true o继承toString属性

 	var o = {x:1};
 	o.hasOwnProperty("x");
 	o.hasOwnProperty("y");
 	o.hasOwnProperty("toString"); //false toString是继承属性

 	var o = inherit({y:2});
 	o.x = 1;
 	o.propertyIsEnumberable("x");
 	o.propertyIsEnumberable("y");
 	Object.prototype.propertyIsEnumberable("toString"); //false:不可枚举

