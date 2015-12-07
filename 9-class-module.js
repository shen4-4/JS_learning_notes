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

	//判断值的类型的type()函数
	function type(o){
		var t,c,n;//type,class,name
		if(o===null)
			return "null";
		if(o!==o)
			return "nam";
		if((t=typeof o)!=="object")
			return t;
		if((c=classof(o))!=="Object")
			return c;
		//如果对象构造函数的名字存在的话，则返回他
		if(o.constructor&&type o.constructor ==="function"&&(n=o.constructor.getName()))
			return n;
		//其他类型无法判别，一律返回"Object"
		return "Onject";
	}

	//返回对象的类
	function classof(o){
		return Object.prototype.toString.call(0).slice(8,-1);
	}

	//js中的面向对象技术
	//集合类，集合是一种数据结构，集合的基础方法包括添加值，检测值是否在集合中，这种集合通常需要一种通用的实现
	function Set(){
		this.value={};
		this.n = o;
		this.add.apply(this,arguments);
	}
	Set.prototype.add = function(){
		for(var i=0;i<arguments.length;i++){
			var val= arguments[i];
			var str = Set._v2s(val);
			if(!this.value.hasOwnProperty(str)){
				this.value[str]=val;
				this.n++;
			}
		}
		return this;
	}

	//使用枚举类型来表示一副扑克牌
	function Card(suit,rank){
		this.suit = suit ; //花色
		this.rank = rank; //点数
	};
	//使用 枚举类型定义花色和点数
	Card.Suit = enumeration({Clubs:1,Diamond:2,Hearts:3,Spades:4});
	Card.Rank = enumeration({Two:2,Three:3,Four:4,Five:5,Six:6,Seven:7,Eight:8,Nine:9,Ten:10,Jack:11,Queen:12,King:13,Ace:14});
    //定义用于描述牌面的文本
    Card.prototype.toString = function(){
    	return this.rank.toString()+"of"+this.suit.toString();
    };	
    //比较两张牌的大小
    Card.prototype.compareTo = function(that){
    	if (this.rank<that.rank) return -1;
    	if (this.rank>that.rank) return 1;
    	return 0;
    };
    //以扑克牌的玩法规则对牌进行排序的函数
    Card.orderByRank = function(a,b){return a.compareTo(b);};
    //定义用以表示一副标准扑克牌的类
    function Deck(){
    	var cards = this.cards = [];
    	Card.suit.foreach(function(s){
    		Card.Rank.foreach(function(r){
    			card.push(new Card(s,r));
    		});
    	});
    }
    //洗牌的方法
    Deck.prototype.shuffle = function(){
    	var deck = this.cards,len= deck.length;
    	for(var i = len-1;i>0;i--){
    		var r=Math.floor(Math.random()*(i+1)),temp;
    		temp = deck[i],deck[i]= deck[r],deck[r] = temp; //交换
    	}
    	return this;
    };
    //发牌的方法，返回牌的数组
    Deck.prototype.deal = function(n){
    	if(this.cards.length<n)throw"Out of cards";
    	return this.cards.splice(this.cards.length -n,n);
    };
    var deck = (new Deck()).shuffle();
    var hand = deck.deal(13).sort(Card.orderBySuit);

    //比较方法
    //equal()
    Range.prototype.constructor = Range;
    Range.prototype.equals = function(that){
    	if(that == null) return false;
    	if(that.constructor !==Range) return false;
    	return this.form == that.form && this.to == that.to;
    }
    //compareTo()
    //只能接收一个参数，这个方法将这个参数和调用他的对象进行比较
    a<b  ==========> a.compareTo(b)<0

    //子类
    //js的对象可以从类的原型对象中继承属性 ，如果o是类B的实例，B是A的子类，那么o也一定从A中继承了属性
    //为此要确保B的原型继承来自A的原型继承
    B.prototype = inhert(A.prototype);
    B.prototype.constructor = B;
    //定义子类
    function defineSubClass(superclass,constructor,methods,statics){
    	constructor.prototype = inhert(superclass.prototype);
    	constructor.prototype.constructor = constructor;
    	//像对常规类一样复制方法和类属性
    	if(methods) extend(constructor.prototype,methods);
    	if(statics) extend(constructor,statics);
    	return constructor;	
    }
    //也可以通过父类构造函数的方法做到这一点
    Function.prototype.extend = function(superclass,constructor,methods,statics){
    	return defineSubClass(this,constructor,methods,statics);
    }

    





