	//表达式语句
	//赋值语句
	greeting = "Hell0" + name;
	//递增运算符，递减运算符，delete运算符
	counter++;
	delete o.x;
	//函数调用
	alert(greeting);
	window.close();

	//复合语句和空语句
	//语句块 1.语句块结尾不需要分号，以分号结束 2.js没有块级作用域
	{
		x = Math.PI;
		cx = Math.cos(x);
		console.log("cos(PI) = " + cx);
	}
 	//空语句
 	;
 	//由空语句造成的bug很不起眼
 	if((a==0) || (b==0)); //这行什么也没做
 	o = null;

 	//声明语句
 	//var 语句用来声明一个或多个变量
 	var name_1[=value_1][,...,name_n[=value_n]]
 	//如果var语句出现在函数体内，那么它定义的就是一个局部变量，作用域是整个函数
 	//在顶层使用，声明的则是全局变量
 	//如果var语句中的变量没有指定初始化表达式，初始值则为undefined
 	//变量"提前"

 	//function 定义函数
 	var f = function(x){return x+1;}
 	function f(x){return x+1;}
 	//函数声明语句
 	function funcname([args1[,args2[...,argn]]]){
 		statements
 	}

 	//条件语句
 	//if语句是一种基本的控制语句有两种形式
 	if(expression)
 		statement

 	//if语句的第二种形式引入了else从句
 	if(expression)
 		statement1
 	else
 		statement2
 	//else总是和最近的if语句匹配，为了可读性更强，方便维护和调试，使用了花括号

 	//switch语句
 	switch(n){
 		case 1:
 			//执行代码块1
 		break;
 		case 2:
 			//执行代码块2
 		break;
 		case 3:
 			//执行代码块3
 		break;
 		default:
 			//执行代码块4
 		break;     //在这里停止执行switch语句
 	}

 	function convert(x){
 		switch(typeof x){
 			case 'number':
 				return x.toString(16);
 			case 'string':
 				return '"'+x+'"';
 			default：
 				return String(x);
 		}
 	}

 	//while语句
 	while (expression)
 		statement
 	//使用while循环输入0~9
 	var count = 0;
 	while(count<10){
 		console.log(count);
 		count++;
 	}

 	//do{while语句,与while循环非常类似，但是在循环的底部检测表达式，意味着循环体至少一次

 	do 
 		statement
 	while(expression);


 	function printArray(a){
 		var len = a.length,i=0;
 		if(len == 0)
 			console.log("Empty Array");
 		else{
 			do{
 				console.log(a[i]);
 			}while(++i < len);
 		}
 	}

 	//for语句,3个表达式分别用分号分隔，分别负责初始化操作、循环条件判断和计数器变量的更新
 	for(initialize;test;increment)
 		statement


 	//for/in语句，一般用来更方便地遍历对象属性成员，但并不会遍历对象的所有属性，只有“可枚举”的属性才会遍历到
 	//对象可以继承其他对象的属性，那些继承的自定义属性，也可以使用for/in循环遍历出来
 	for(var p in o)
 		console.log(o[p]);

 	//属性枚举的顺序
 	//1.对象继承了可枚举属性 2.对象具有整数数组索引的属性
 	//3.使用delete删除了对象已有属性 4.使用object.defineProperty()类似方法改变了对象的属性

    //跳转
    //标签语句友语句前的标识符和冒号组成
    identifier:statement

    mainloop:while(token!=null){
    	continue mainloop;
    }

    //break语句，单独使用是立即退出最内层的循环或switch语句
    break;
    //希望通过break来跳出非就近的循环体或者switch语句时，就会用到带标签的break语句
    var matrix = getData(); //得到一个二维数组，将矩阵中所有元素求和
    var sum = 0;success = false;
    compute_sum:if(matrix){
    	for(var x =0;x<matrix.length;x++){
    		var row = matrix[x];
    		if(!row) break compute_sum;
    		for(var y= 0;y<row.length;y++){
    			var cell= row[y];
    			if(isNaN(cell))break compute_sum;
    			sum += cell;
    		}
    	}
    	success = true;
    }

    //continue语句和break语句非常类似，但不是跳出循环，而是执行下一次循环
    //当产生一个错误的时候跳过当前循环的后续逻辑
    for(i=0;i<data.length;i++){
    	if (!data[i]) continue; //不能处理undefine数据
    	total += data[i];
    }

    //return语句 
    return expression;

    //return语句可以单独使用而不必带有expression，这样的话也会像调用程序返回undefined
    function display_object(o){
    	if(!o) return;
    }

    //throw语句，抛出异常，就是用信号通知发生了错误或异常情况
    function factorial(x){
    	if(x<0) throw new Error("x不能是负数");
    	for(var f=1;x>1;f*=x,x--)/*empty*/
    	return f;
    }

    //try/catch/finally语法和使用目的
    try{
    	//这里的代码一般不会出什么问题，有时会抛出一个异常，要么由throw语句抛出，要么调用一个方法间接抛出
    }
    catch(e){
    	//当try语句抛出了异常，才会执行这里的代码，可以通过局部变量e来获得对Error对象或者抛出的其他值的引用
    }
    finally{
    	//不管try语句是否抛出了异常，这里的语句总会执行，
    }
    //例子
    try {
    	var n = Number(prompt("请输入一个正整数",""));
    	var f = factorial(n);
    	alert(n+"!="+f);
    }
    catch(ex){
    	alert(ex);
    }

    //模拟for(initialize;test;increment)body;
    initialize;
    while(test){
    	try{body;}
    	finally{increment;}
    }

    //其他语句类型 with、debugger、use strict
    //with语句用于临时扩展作用域链,严格模式中禁止使用，非严格也不推荐，难于优化，运行更慢
    with(object)
    statement

    //debugger语句通常什么也不做，只是用于临时调试
    debugger;

    //"use strict" 严格模式和非严格模式的区别
    //1.禁止使用with语句
    //2.严格模式中，所有的变量都要先声明，否则，会抛出错误异常
    //3.严格模式中，调用的函数(不是方法)中的一个this值是undefined(在非严格模式中，调用函数的this值总是全局对象)
    var hasStrictMode = (function(){"use strict":return this == undefined}{});

    






