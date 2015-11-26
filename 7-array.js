	//创建数组
	var empty = [];
	var primes =[2,3,4,5,6];
	var misc = [1.1,true,"a"];

	var base = 1024;
	var table = [base, base+1,base+2,base+3];

	var b = [[1,{x:1,y:2}],[2,{x:3,y:4}]];
	var count = [1,,2];//数组有3个元素，中间的那个元素为undefined
	var undefs =[,,];//2个元素，都是 undefined

	//调用构造函数Array()的三种方法
	var a  = new Array();
	var a = new Array(10);
	var a = new Array(5,4,3,2,1,"testing,testing");

	//数组元素的读和写，使用[]操作符来访问数组中的一个元素
	var a = ["world"];
	var value = a[0]; //读第0个元素
	a[1] = 3.14; //写第1个元素
	i = 2;
	a[i] = 3;//写
	a[i+1]="hello";
	a[a[i]] = a[0];//读第0个和第2个元素，写第三个元素

	//稀疏数组

