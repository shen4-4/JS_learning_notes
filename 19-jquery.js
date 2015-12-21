	//jquery基础
	//获取文档中所有div元素
	var divs = $("div");
	//jquery函数和jquery方法
	$.each(a,f) //对数组a中的每个元素都调用一次函数f
	$("a").each(f); //获取文档中所有<a>元素的jQuery对象，然后调用each()方法，对选中的每一个元素调用一次函数f

	//查询与查询结果
	$("body").length //=>1 文档中只有一个body元素
	$("body")[0]  //等于document.body

	//each（）方法和forEach()方法有一个显著区别,如果回调函数在任一一个元素上面返回false,遍历将在该元素后中止
	$("div").each(function(idx){
		$(this).prepend(idx+":");
		if(this.id==="last") return false;
	});

	//找到所有的标题元素，映射到它们的id,并转化为真是数组，然后牌组
	$(":header").map(function(){return this.id}).toArray().sort();

	//is()方法，接受一个选择器作为参数,如果选中元素至少有一个匹配该选择器时，则返回true
	$("div").each(function(){
		if($(this).is(":hidden")) return;
	});

	//获取和设置元素高度
	function page(n){
		var w= $(window) ; //将window封装成jQuery对象
		var pagesize = w.height();
		var current = w.scrollTop();
		w.scrollTop(current+n*pagesize); //设置新的滚动条位置
	}

	//获取和设置元素数据
	$("div").data("x",1);
	$("div.nodata").removeData('x');
	var x= $("mydiv").data("x");

	//修改文档结构
	//插入和替换元素
	$("#log").append("<br/>"+message);
	$("h1").prepend('Some text'); 
	$("h1").before('content');
	$("h1").after('Some text');
	$("h1").replaceWith("<br />");
	$("h2").each(function(){
		var h2 = $(this);
		h2.replaceWith("<h1>"+h2.html()+"</h1>");
	}) 
	
	//复制元素
	$(document.body).append("<div id='linklist'><h1>List of Links</h1></div>");
	$("a").clone().appendTo('#linklist');
	$("#linklist>a").after("<br/>");
	
	//包装元素
	$("h1").wrap(document.createElement("i"));
	$("h1").wrapInner('<i>');
	$("body>p:first").wrap("<a name='lead'><div class='first'></div></a>");
	$("body>p:not(:first)")	.wrapAll(<div class='rest'></div>);

	

