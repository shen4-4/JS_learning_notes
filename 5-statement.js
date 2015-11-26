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
 	