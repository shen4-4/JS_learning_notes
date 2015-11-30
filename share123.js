	//词法结构
	//字符集 
	//1.js区分大小写 关键字不能"while"必须写成"WHILE",'online','Online','onLine','ONLINE'是4个不同的变量名
	//2.js会忽略程序中标识之间的空格，也会忽略换行符，但可以识别普通的空格符(\u0020),还可以识别表示空格的字符
	//如水平制表符(\u0009),换页符(\uoooc)等，一些字符识别为行结束符，如换行符(\u000A),回车符(\u000D)
	//3.js支持Unicode转义"cafe" === "caf\u00e9" //true

	//单行注释
	/*
		133
		345 
		这里可以放多行注释
	*/

	//标识符和保留字，js标识符必须以字母、下划线、或美元开始，后续字符可以是字母、数字、下划线或美元符，数字不允许作为首字母出现
	_validName
	$std

	//js把自己的一些标识符拿来做关键字，在程序中不能把这些关键字用作标识符
	break、case、for、instanceOf、 while、 with and so on 

	//可选的分号
	//js使用分号来明确标记语句的结束，两种风格，1，在并不完全需要分号的地方也使用分号 2.任何能省略的地方都要省略
	a=3;//分号可以省略
	b=4;

	a=3;b=4;//不能省略

	return 
	true;  //js会解析成return; true;代码本意是return true;
	//在return break continue和随后的表达式之间不能有换行

	//数字 当一个数字直接出现在js程序中，我们称之为数字直接量
	//整型直接量 0,3,100000,
	//浮点型直接量 3.14,123.456, 1.3762E-10(1.3762*10^-32)

	//js中的运算符
	//+-*/%,一些复杂运算符通过Math对象的属性定义的函数和常量来实现
	Math.round(.6) //1.0 四舍五入
	Math.floor(.6) //0.0 向下求整
	Math.abs(-5) //5 求绝对值
	Math.random() //生成一个等于0，小于1.0的伪随机数 发散一下，获取0~10之间的随机数
	 ·Math.round(Math.random()*10);
	 ·(int)(Math.random()*10);
	 ·Math.floor((Math.random()*10+1);
	Math.sqrt(3) //3的立方根

	//js的非数字值Infinity NaN 和任何值都不相等，包括自身没有办法通过"x===NaN"来判断变量是否是NaN
	//isNaN() 参数是NaN或者一个非数字值(字符串，对象什么的) 返回true
	//isFinite() 参数不是NaN，Infinity或-Infinity的时候返回true

	//日期和时间 Date()函数，用来表示日期和时间的对象
	var now = new Date();
	var then = new Date(2015,0,1，13,10,30); //15年1月1日1:10:30
	var elapsed = now - then; //计算时间间隔
	then.getFullYear() //2011
	then.getMonth() //0 从0开始计数的月份
	then.getDate() //1 从1开始计数的天数
	then.getDay() //5 星期几，0代表星期日，5代表星期一
	then.getHours() //1:10

	//字符串直接量 由单引号或者双引号括起来的字符序列
	"" //空字符串 包含0个字符
	'spring'
    
    //转义字符
    // 因为撇号和单引号是同一个字符,反斜线可以使我们避免用常规方式解释单引号
    "You\'re right。"
	//允许一个多行字符串直接量的每行结束处使用反斜线拆分为数行，每行以反斜线结束。如果希望在字符串直接量中另起一行，可以使用转义字符\n
	"two\nlines"
	"one\
	two\
	three"

	//字符串的使用
	var s = "shenqiannan"
	s.charAt(0) //"s"
	s.charAt(s.length-1) //"n"
	s.substring(1,4) //"hen"
	s.slice(1,4) //"hen"
	s.indexOf('n') //3
	s.lastIndexOf('n') //10
	s.replace('s','S') //"Shenqiannan"
	s.toUpperCase() //"SHENQIANNAN"

	//布尔值，保留字true 和 false
	if(a==4){
		b=b+1;
	}else{
		a=a+1;
	}
	//任意js的值都会被转换为布尔值，下面这些值会被转换为false
	undefined
	null
	0
	-0
	NaN
	"" //空字符串

	if((x==0)&&(y==0)||!(z==0)){
		//x和y都是0,z是非0
	}

	//null和undefined
	//null是js的关键字，用来描述空值，对null执行typeOf运算，返回"object" ，就是说null是一个特殊的对象值，含义是“非对象”
	//undefined 也表示值的空缺，不过是未定义的值，表明变量没有初始化，如果查询对象属性或数组元素的值没有返回undefined表明这个属性或元素不存在
	//typeOf运算会得到undefined,表明这个值是这个类型的唯一成员
	//"=="认为两者相等，严格相等运算符"==="可以区分

	//全局对象


















