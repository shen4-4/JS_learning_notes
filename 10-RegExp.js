	//正则表达式


	//可以使用RegExp()构造函数来创建RegExp对象
	var pattern = RegExp("S$");  //'$'是一个具有特殊含义的元字符，用以匹配字符串的结束
	//可以通过引号包裹字符的方式来定义字符串直接量
	var pattern = /s$/;

	//在正则表达式中，许多标点符号具有特殊含义,如果想在正在表达式中使用这些字符的直接量进行匹配(查找本身)，则必须使用前缀\
	^ $ . * + ? ! | \ / () [] {}

	\\   \.  \*

	shenqn\.net //匹配shenqn.net 


	//字符类 将直接量字符单独放进方括号内就组成了字符类，一个字符类可以匹配它包含的任意字符
	/[abc]/ 

	//使用"^"来定义否定字符类
	/[^abc]/ 

	//匹配小写字母，匹配任何字母和数字
	/[a-z]/  
	/[a-zA-Z0-9]/  //等价于 \w
	/[^a-zA-Z0-9]/  //等价于 \W

	/[0-9]/ //等价于\d
	/[^0-9]/  //等价于\D
	\s  //匹配空白符符
	\S  //匹配非unicode空白符

	//010-123456789
	0\d\d-\d\d\d\d\d\d\d\d\d


	//重复
	{n,m} //匹配前一项n次，但不能超过m次
	{n,} //匹配前一项n次或者更多次
	{n} //匹配n次
	？ //等价于{0,1}
	+ //等价于{1,}
	* //等价于{0,}

	//010-123456789
	0\d{2}-\d{8}



	/\d{2,4}/ //匹配2~4个数字
	/\s+shenqiannan\s+/
	/[^(]*/


	//选择、分组、引用

	//"|"用于分隔供选择的字符,匹配次序是从左到右，直到发现了匹配项，如果左边的左边的选择项匹配，就忽略右边的匹配项
	/ab|cd|ef/ 
	/\d{3}|[a-z]{4}/

	/a|ab/ //匹配字符串"ab"时，只能匹配第一个字符串

	//圆括号的作用 1是把单独的项组合成子表达式，以便可以像处理一个独立的单元那样用"|" 对其处理,可以做到重复多个字符
	/java(script)?/
	/(ab|cd)+|ef/

	//简单IP地址匹配
	(\d{1,3}\.){3}\d{1.3}
	//完整匹配
	((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)

	//2.在完整的模式中定义子模式, 当一个正则表达式成功地和目标字符串相匹配时，可以直接从目标串中抽出和圆括号的子模式匹配的部分
	/[a-z]+\d+/  //假定我们关心的是每个匹配尾部的数字，把它放在括号中，就可以从检索到的匹配中抽取数字了

	//指定位置匹配
	^ //匹配开头
	$ //匹配结尾
	\b //匹配一个单词的边界 就是位于\w 和\W之间的位置
	\B //匹配非单词边界的位置
	(?=P) //零宽正向先行断言 要求接下来的字符和P匹配，但不能包括匹配P的那些字符
	(?!P) //----负--------- -----------------不与P匹配

	/\bhi\b/


	/Java(Scipt)?(?=\:)/  //可以匹配 JavaScript:blablabla   不能匹配Java is blabla
	/Java(?! Script)([A-Z]\w*)/  //可以匹配Java后面跟随一个大写字母和任意多个ASCII单词，但是不能跟Script 
								 //可以匹配JavaScript,但是不能匹配JavsScripter

	//修饰符
	i //不区分大小写
	g //执行一个全局匹配 
	m //多行匹配模式 

	//用于模式匹配的String 方法
	//search(),返回第一个与之匹配的子串的起始位置
	"JavaScript".search(/script/i);
	//replace()方法 第一个参数是一个正则表达式，第二个参数是要进行替换的字符串
	text(/javascript/gi,'JavaScript');
	//match()方法 返回的数组包含字符串中所有的匹配结果
	"1 plus 2 equals 3".match(/\d+/g) //返回["1","2","3"]

	//解析一个URL
	var url = /(w+):\/\/([\w.]+)\/(\S*)/;
	var text = "Boys go to the http://www.v2ex.com/?job named Coding Peasant." 
	var result = text.match(url);
	if(result!==null){
		var fullurl = result[0]; //http://www.v2ex.com/?job
		var protocol = result[1]; //包含http
		var host = result[2]; //包含www.v2ex.com
		var path = result[3]; //包含？job
	}

	//RegExp的方法
	//exec()方法对一个指定的字符串执行一个正则表达式，在一个字符串中执行匹配，没有就返回null,找到了一个匹配，它将返回一个数组
	//text()方法对于某个字符串进行检测，如果包含一个匹配结果，则返回true
	var pattern = /java/i;
	pattern.test("JavaScript"); //true

	var pattern = /Java/g;
	var text = "JavaScript is the second best language in the world.";
	var result;
	while(result = pattern.exec(text)!==null){
		alert("yohooooooo");
	}









