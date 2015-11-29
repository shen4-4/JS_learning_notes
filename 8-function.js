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

	//间接调用,call()和apply()方法可用来间接调用函数，允许显示调用所需的this值，后面具体讨论

	//函数的形参和实参
	//可选形参 当调用的函数的时候传入的实参比函数生命时指定的形参要少，剩下的形参都将设置为undefined值
	//将对象o中可枚举的属性名追加至数组a中，并返回数组a
	function getPropertyNames(o,a){
		if(a==undefined)a=[];
		for(var property in o) a.push(property);
		return a;
	}

	//实参对象 当调用函数的时候传入的实参个数超过函数定义时的形参个数时，没有办法获得未命名值的引用
	//实参对象是一个类数组对象，这样可以通过数字下标线就能访问传入函数的实参值,标识符arguments指向实参对象的引用
	//在ES5中移除了实参对象这个特殊对象
	//检查实参个数
	function f(x,y,z){
		if(arguments.length != 3){
			throw new Error("function f called with"+arguments.length+'arguments,but it expects 3 arguments');
		}
	}
	
	//实参对象的好处，就是让函数可以操作任意数量的实参,下面的example就是接收任意数量的实参，并返回传入实参的最大值
	function max(/*...*/){
		var max = Number.NEGATIVE_INFINITY;
		for(var i =0; i< arguments.length;i++){
			if(arguments[i]>max) max= arguments[i];
		return max;
		}
	}
	var largest = max(1,10,....,);

	//callee和caller属性
	//callee属性指代当前正在执行的函数，caller非标准它也指代调用当前正在执行的函数
	//匿名函数中通过callee来递归调用自身
	var factorial = function(x){
		if(x<-1) return 1;
		return x * arguments.callee(x-1);
	};

	//实参类型
	//实参类型检查逻辑 isArrayLike()
	function sum(a){
		if(isArrayLike(a)){
			var total = 0;
			for(var i = 0;i<a.length;i++){
				var element = a[i];
				if(element == null) continue;
				if(isFinite(element)) total += element;
				else throw new Error('sum():element must be finite numbers');
			}
			return total;
		}
		else throw new Error('sum():arguments must be array-like');
	}


	//作为值的函数
	function  square(x){x*x;}
	//函数赋值给其他的变量
	var s= square;
	square(4);
	s(4);
	//函数赋值给对象的属性，当函数作为函数的属性调用时，函数就称为方法
	var o = {square:function(x){ return x*x}};
	var y = o.square(16);
	//不带名字直接赋值给数组元素
	var a = [function(x){return x*x;},20];
	a[0](a[1]); //400 好吧，这种写法头一次见

	//自定义函数属性   
	// 将自身当做数组对待。来缓存上一次的计算结果
	function factorial(n){
		if(isFinite(n) && n >0 && n = Math.round(n)){ //有限的正整数
			if(!(n in factorial))
				factorial[n] = n * factorial(n-1); //没有缓存结果就计算结果缓存之
			return factorial[n];
		}
		else return NaN;
	}
	factorial[i] = 1; //初始化缓存以保存这种基本情况

	//作为命名空间的函数
	//在js中无法声明只有一个代码块内可见的变量 我们常常简单定义了一个函数作为临时的命名空间
	//在这个命名空间定义的变量都不会污染到全局命名空间
	function mymodule(){
		//模块内所有的变量都是局部变量
	}
	mymodule();

	//更简单的方法，直接定义一个匿名函数，并在单个表达式中调用
	(function(){
		//代码
	}()); //结束函数定义并立即调用它

	//特定场景下返回带补丁的extend()版本
	var extend = (function(){
		for(var p in {toString:null}){
			return function extend(o){
				for(var i =1;i<arguments.length;i++){
					var souce = arguments[i];
					for(var prop in source) o[prop] = source[prop];
				}
				return o;
			};
		}
		return function patched_extend(o){
			for(var i =1;i<arguments.lenth;i++){
				var source = arguments[i];
				for(var prop in source) o[prop] = source[prop];

				for(var j=0;j<protoprops.length;j++){
					prop = protoprops[j];
					if(source.hasOwnProperty(prop)) o[prop] = source[prop];
				}
			}
			return o;
		};
		var protoprops =["soString",'valueOf','constructor','hasOwnProperty','isPrototypeOf','propertyIsEnumberable','toLocaleString'];
	}());


	//闭包
	//函数对象可以通过作用域链相互关联起来，函数体内部的变量都可以保存在函数作用域内，这种特性称为‘闭包’
	//理解闭包先了解嵌套函数的作用域规则
	var scope = "global scope";
	function checkscope(){
		var scope = 'local scope';
		function f(){return scope;}
		return f();
	}
	checkscope(); //local scope

	














