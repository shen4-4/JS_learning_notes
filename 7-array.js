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

	//稀疏数组就是包含从0开始的不连续索引的数组，可以用Array()构造函数
	a = new Array(5); //数组没有元素，但是a.length是5
	a = []; //创建一个空数组
	a[1000] = 0; //赋值添加一个元素，但是设置length为1001

	//省略的元素在数组中是存在的，值为undefined，可以用in操作符检验两者的区别
	var a1=[,,,]; //[undefined,undefined,undefined]
	var a2 = new Array(3);
	o in a1; //true a1在索引0出有一个元素
	o in a2; //false a2在索引0出没有元素

	//数组长度
	[].length //0,数组没有元素
	['a','b','c'].length //3,最大索引为2，length为3

	//如果为一个数组元素赋值，它的索引i大于或者等于现有长度，length属性的值为i+1
	//如果设置length的属性为一个小于当前长度的非负整数，，数组中那些索引值大于或等于n的元素将从中删除
	a = [1,2,3,4,5];
	a.length = 3; //a=[1,2,3];
	a.length = 0; //a为[]
	a.length = 5;//长度为5，但是没有元素，类似new Array(5)

	//用Object.defineProperty()可以让数组的length属性变为只读的
	a = [1,2,3];
	Object.defineProperty(a "length",{writable:false});
	a.leng = 0 ; //a不会改变

	//数组元素的添加和删除
	//添加：1.为新索引赋值 2.用push()的方法在数组末尾增加一个或多个元素
	a = []
	a[0] = "zero";
	a[1] = "one";

	a = [];
	a.push("zero") //a= ["zero"]
	a.push("one","two") //a= ["zero","one","two"]

	//数组遍历
	//使用for循环最常见
	var keys = Object.keys(0); //获得o对象属性名组成的数组
	var value = [];
	for(var i = 0; i< keys.length; i++){
		var keys = keys[i]; //获得索引处的值
		values[i] = o[key]; //在values数组中保存属性值
	}

	//使用数组之前应该先检查它们，如果想排除null、undefined、和不存在的元素
	for(var i=0; i<a.length;i++){
		if(!a[i]) continue;
		//循环体
	}

	for(var i = 0; i< a.length;i++){
		if(a[i] === undefined) continue; //跳过undefined+不存在的元素
		//循环体
	}

	for(var i =0; i<a.length;i++){
		if(!(i in a ))continue;
		//循环体
	}

	//for／in循环能够枚举继承的属性名，一般在数组中不使用，除非使用额外的检测方法来过滤不想要的属性
	for(var i = a){
		if(!a.hasOwnproperty(i)) continue; //跳过继承的属性
		//循环体
	}
	for(var i in a){
		if(String(Math.floor(Math.abs(Number(i))))!==i)continue; //跳过不是非负整数的i
	}

	//遍历数组的新方法 forEach();
	var data = [1,2,3,4,5];
	var sumOfSquares = 0; //得到数据的平方和
	data.forEach(function(x){
					sumOfSquares +=x*x;
				});
	sumOfSquares 

	//多维数组
	var table = new Array(10);
	for(var i =0; i< table.length;i++)
		table[i] = new Array(10);
	for(var row= 0; row<table.length;row++){
		for(col = 0;col<table[row].length;col++){
			table[row][col] = row*col;
		}
	}
	var product = table[5][7];

	//数组方法
	//Array.join()方法是将数组中所有元素都转化为字符串并连接在一起,是String.split()的逆向操作
	var a = [1,2,3];
	a.join();//"1,2,3"
	a.join(" ");//"1 2 3"
	a.join("");//"123"
	var b = new Array(10);
	b.join('-') //'---------'

	//Array.reverse方法是将数组中的元素颠倒顺序，返回逆序的数组
	var a = [1,2,3];
	a.reverse().join() //"3,2,1"

	//Array.sort()方法是将数组中的元素排序并返回排序后的数组
	var a = new Array("banana","cherry","apple");
	a.sort();
	var s = a.join(","); //"apple,banana,cherry"如果数组中包含undefined,会被排到数组的尾部

	var a = [33,4,1111,222];
	a.sort(); //字母表顺序 1111,222,33,4
	a.sort(function(a,b){
		return a-b; //根据顺序返回负数，0，正数
	});
	a.sort(function(a,b){return b-a});

	var a =["ant","Bug","cat","Dog"]
	a.sort(); //区分大小写的顺序["Bug","Dog","ant",'cat'];
	a.sort(function(s,t){
			var a = s.toLoweCase();
			var b = t.toLoweCase();
			if(a<b) return -1;
			if(a>b) return 1;
			return 0;
	});

	//Array.concat()方法创建并返回一个新数组
	var a = [1,2,3];
	a.concat(4,5) //返回 [1,2,3,4,5]
	a.concat([4,5]); //同上
	a.concat([4,5],[6,7]) //[1,2,3,4,5,6,7]
	a.concat(4,[5,[6,7]]) //[1,2,3,4,5,[6,7]]

	//Array.slice()方法返回指定数组的一个片段或子数组
	var a = [1,2,3,4,5];
	a.slice(0, 3);// [1,2,3]
	a.slice(3); //[4,5]
	a.slice(1, -1); //[2,3,4]
	a.slice(-3, -2); //[3]

	//Array.splice方法在数组中插入或删除元素的通用方法 能够从数组中删除元素、插入元素中或者同时完成这两项操作
	//第一个参数制定了插入和删除的起始位置，第二个指定了删除元素的个数
	var a =[1,2,3,4,5,6,7,8]
	a.splice(4); //返回[5,6,7,8],a是[1,2,3,4]
	a.splice(1,2); //返回[2,3];a是[1,4] //感觉不太对
	a.splice(1,1); //返回[4],a是[1]
	//splice()前两个参数指定了需要删除的元素，紧随其后的任意个数的参数制定了需要需要插入到数组中的元素
	var a = [1,2,3,4,5];
	a.splice(2,0,'a','b'); //返回[],a是[1,2,'a','b',3,4,5]

	//push()和pop()方法允许将数组当做栈来使用
	//unshift()和shift()方法类似push()和pop()方法,不一样的是在数组的头部而非尾部进行操作

	//toString()和toLacaleString()
	//toString()方法是将每个元素转化成字符串
	[1,2,3].toString(); //'1,2,3'
	["a","b","c"].toString(); //'a,b,c'
	[1,[2,'c']].toString(); //生成'1,2,c'

	//forEach()方法从头至尾遍历数组,但是无法在所有元素都传递给调用的函数之前终止遍历
	function foreach(a,f,t){
		try{a.forEach(f,t);
		catch(e){
			if(e=== foreach.break) return;
			else throw e;
		}
	}
	foreach.break = new Error ('StopInteration');

	//map()方法将调用数组的每个元素传递给指定的函数，并返回一个数组，包含改数组的返回值
	a = [1,2,3];
	b = a.map(function(x){return x*x}); //[1,4,9]

	//filter()方法返回的数组元素是调用的数组的一个子集
	a = [5,4,3,2,1];
	samllvalues = a.filter(function(x) {
		return x<3; //[2,1]
	});
	//filter()会跳过稀疏数组中缺少的元素，它的返回数组总是稠密的
	var dense = sparse.fillter(function(){return true;});
	//压缩空缺并删除undefined和null元素，可以这样使用
	a = a.filter(function(x){return x!==undefined&& x!==null;});

	//every()和some()方法是数组的逻辑判定，返回true,false
	a = [1,2,3,4,5]
	a.every(function(x){return x<10;}); //true
	a.some(function(x){return x%2 ===0;}); //true 
	//在空数组上调用时，every()返回true,some()返回false()

	//reduce()和renduceRight() 使用指定的函数将数组元素进行组合，生成单个值
	//reduce()需要两个参数，第一个是执行化简操作的函数，第二个(可选)是一个传递给函数的初始值
	var a = [1,2,3,4,5];
	var sum = a.reduce(function(x,y){return x+y},0); //数组求和
	var product = a.reduce(function(x,y){return x*y},1); //数组求积
	var max = a.reduce(function(x,y){return (x>y)?x:y;});//求最大值
	//reduceRight()和reduce()原理一样，不同的是它按照数组索引从高到低处理数组而不是从低到高
	var a = [1,3,4]; //计算2^(3^4)
	var big = a.reduceRight(fucntion(accumulator,value){
			return Math.pow(value,accumulator);
	});

	//indexOf()和lastIndexOf()搜索整个数组中具有定值的元素返回找到的一个元素的索引或者如果没有找到就返回-1
	a = [0,1,2,1,0];
	a.index(1) //1 ,a[1] =1
	a.lastIndexOf(1) //3,a[3] = 1;
	a.indexOf(3) //-1 没有这个值
	//如何运用indexOf()的第二个参数来查找除了第一个以外匹配的值
	function findall(a,x){
		var result = [],
		len = a.length,
		pos = 0;
	while(pos<len){
		pos=a.indexOf(x,pos);
		if(pos === -1)break;
		result.push(pos);
		pos= pos+1;
		}
		result results;
	}

	//数组类型
	//Array.isArray()
	Array.isArray([]); //true
	Array.isArray({}); //false

	//js 数组的特性
	//当有新的元素添加到列表中时，自动更新length属性
	//设置length为一个较小值将截断数组
	//从Array.prototype中继承一些有用的方法
	//其类属性为“Array”

	//作为数组的字符串 可以用charAt()方法来访问单个的字符，同样可以使用方括号
	var s = 'test';
	s.charAt(0); //'t'
	s[1] ;//'e'

	//通用的数组方法可以用到字符串上
	s = "JavaScript";
	Array.prototype.join.call(s," "); //"J a v a S c r i p t"
	Array.prototype.filter.call(s,funtion(x){
		return x.match(/[^aeiou]/);
	}).join(""); //"Jvscrpt"

	


	}






