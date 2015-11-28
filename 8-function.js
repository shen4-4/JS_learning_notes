	//函数定义 使用function关键字来定义，由函数名称标识符，一堆圆括号，一堆花括号组成
	//定义js函数
	//输出o的每个属性的名称和值，返回undefined
	function printprops(o){
		for(var p in o)
			console.log(p+":"+o[p]+'\n');
	}
	//赋值给一个变量,递归
	var f = function fact(x){
		if(x<=1){
			return 1;
		}else{
			return x* fact(x-1);
		}
	};
	//作为参数传给其他函数
	data.sort(function(a,b){
		return a-b;
	});
	//定义后立即调用
	var tensquared = (function(x){return x*x;}(10));

	//函数命名
	//函数名称是动词或者以动词为前缀的词组，通常第一个字符为小写
	//函数名包含多个单词时，一种约定是以下划线进行分隔，like_this()
	//另一种是除了第一个单词的首字母使用大些字母likeThis()
	//有些函数用来做内部函数或者私有函数，通常以_为前缀_likeThis()

	//嵌套函数
	function hypotensu(a,b){
		function square(x){
			return x*x;
		}
		return Math.sqrt(square(a)+square(b));
	}

	//函数调用 1.作为函数 2，作为方法 3.作为构造函数 4.通过他们的call()和apply方法调用
	//函数调用表达式
	printprops({x:1});
	var total = distance(0,0,2,1)+distance(2,1,3,5);
	var probability = factorial(5)/factorial(13);
	//以函数形式调用的函数通常不使用this关键字，不过this可以用来判断当前是否是严格模式
	var strict = (function(){return !this;}());

	//方法调用
	//给对象o定义了方法m(),调用时就像这样
	o.m();
	//对方法调用的参数和返回值的处理，和普通函数调用完全一致，有一个重要的区别是：调用上下文
	//为调用上下文，函数体可以使用关键字this引用该对象
	var calculator={
		operand1 = 1;
		operand2 = 1;
		add:function(){
			this.result = this.operand1+this.operand2;
		}
	};
	calculator.add();
	calculator.result //2
	//任何函数作为方法调用实际上都会传入一个隐形的实参
	rect.setSize(width,height);
	rect.setSize(rect,width,height);

	//this是一个关键字，不是变量，也不是属性名，js不允许给this赋值
	//this没有作用域的限制，如果作为嵌套函数作为方法调用，this的值指向调用它的对象，如果作为函数调用，this值不是全局对象就是undefined
	var o = {
		m:function(){
			var self = this;
			console.log(this===o);//true
			f();
			function f(){
				console.log(this===o);//false this的值是全局对象或者undefined
				console.log(self === o); //true self指向外部函数的this值
			}
		}
	};
	o.m();

	//构造函数调用，暂时忽略，第9章具体再看

	//间接调用

	




