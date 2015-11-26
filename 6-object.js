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
   
   	//枚举属性
    var o = {x:1;y=2;z=3};
 	o.propertyIsEnumberable("toString"); //false 不可枚举
 	for(p in o)
 	console.log(p); //输出x,y,z

 	//用来枚举属性的对象工具函数
 	//extend();把p中的枚举属性复制到o中，含有同名属性，则覆盖
 	function extend(o,p){
 		for(prop in p){
 			o[prop] = p [prop];
 		}
 		return o;
 	}
 	//merge();把p中的可枚举属性复制到o中，含有同名属性，o中属性不受影响
 	function merge(o,p){
 		for(prop in p){
 			if(o.hasOwnProperty[prop]) continue; //过滤掉o中存在的属性
 			o[prop] = p[prop];
 		}
 		return o;
 	}
 	//restrict();如果o中没有p中的同名属性，则删掉
 	function restrict(o,p){
 		for(prop in o){
 			if(!(prop in p)) delete o[prop];
 		}
 		return o;
 	}
 	//subtract();如果o中存在p中的同名属性，则删掉
 	function subtract(o,p){
 		for(prop in p){
 			delete o[prop];
 		}
 		return o;
 	}
 	//union();返回一个新对象同时拥有op属性，如果有重名属性，则使用p的属性值
 	function union(o,p){
 		return extend(extend({},o),p);
 	}
 	//intersection();返回一个新对象，同上，但p中属性的值被忽略
 	function intersection(o,p){
 		return restrict(extend({},o),p);
 	}
 	//keys();返回一个数组，这个数组包含o中可枚举的自由属性的名字
 	function keys(o){
 		if(typeof o !== "object") throw TypeError(); //参数必须是对象
 		var result = [];
 		for(var prop in o){
 			if(o.hasOwnProperty(prop))
 				result.push(prop);
 		}
 		return result;
 	}
    
    //除了for/in循环，ES5还定义了以枚举属性名称的函数 1.Object.keys()同上keys()
    //2.Object.getOwnPropertyNames(),与1类似，不过返回对象所有自有属性的名称

    //属性getter和setter,“存取性属性”,可继承

    //使用对象直接量语法定义存取器属性
    var o = {
    	data_prop : value;
    	//存取性属性是成对定义的函数
    	get accessor_prop(){},
    	set accessor_prop(value){}
    };

    //复杂一点的存取性属性
    var p = {
    	x:1.0,
    	y:2.0.

    	get r(){
    		return Math.sqrt(this.x*this.x + this.y*this.y);
    	}
    	set r(newValue){
    		var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
    		var ratio = newValue/oldvalue;
    		this.x *= ratio;
    		this.y *= ratio;
    	},

    	get theta(){
    		return Math.atan2(this.y,this x);
    	}
    }

    //属性的特性 数据属性的4个特性：值，可写性，可枚举性，可配置性 调用
    //调用Object.getOwnPropertyDescriptor()可获得某个对象特定属性的属性描述符
    //对于继承属性和不存在的属性，返回undefined
    Object.getOwnPropertyDescriptor({x:1},"x"); //value:1 writable:true,enumberable:true,configurable:true

    //想要获得继承属性的特性，需要遍历原型链,通过Object.getPrototypeOf()查询原型
    //通过调用Object.defineProperty()设置属性的特性
    var o = {}
    Object.defineProperty(o ,"x",{
    	value:1,
    	writable:true,
    	enumberable:false,
    	configurable:true,
    });
    o.x; //1
    Object.keys(o); //[] 不可枚举
    Object.defineProperty(o ,'x',{writable:false});
    o.x = 2; //失败，但不报错,严格模式抛出类型错误异常
    o.x; //1
    Object.defineProperty(o, 'x',{value:2});
    o.x; //2 依然可配置，但是方式变化
    //将x从数据属性改为存取器属性
    Object.defineProperty(o,'x',{get:function(){return 0;}});
    o.x; //0

    //复制属性的特性
    Object.defineProperty(Object.prototype,"extend",{
    	writable:true,
    	enumberable:false,
    	configurable:true,
    	value:function(o){
    		var names = Object.getOwnPropertyNames(o); //得到所有的自有属性
    		for (var i = 0;i<names.length;i++){
    			if(names[i] in this) continue; //如果属性已经存在，则跳过
    			var desc = Object.getOwnPropertyDescriptor(o,names[i]); //获得o中的属性的描述符
    			Object.defineProperty(this,names[i],desc); //用他给this创建一个属性
    		}
    	}
    });

    //对象的三个属性 原型属性、类属性、 可扩展性
    //使用isPrototypeOf()来检测一个对象是否是另一个对象的原型
    var p = {x:1};
    var o = Object.create(p);
    p.isPrototypeOf(o) //true o继承自p
    Object.prototype.isPrototypeOf(o) //true p继承自Object.prototype

    //使用classOf()返回任意传递给他的任意对象的类

    function classOf(o){
    	if(o === null) return "Null";
    	if(o === undefined) return "Undefined";
    	// 为了获取对象的类，调用toString()方法，提取已返回字符串的第8个到倒数第二个之间的字符
    	//为了正确调用toString(),间接调用function.call()方法
    	return Object.prototype.toString.call(o).slice(8, -1); 
    }

    //序列化对象
    //JSON.stringify()和JSON.parse()用来序列化和还原Javascript对象
    o = {x:1,y:{z:[false,null,""]}};
    s = JSON.stringify(o); //s是 '{"x":1,"y":{"z":false,null,""}}'
    p = JSON.parse(s); //p是o的深拷贝