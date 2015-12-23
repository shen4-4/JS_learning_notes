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

	//使用jquery处理事件
	//单击任意<p>使其背景变灰
	$("p").click(function() {
		/* Act on the event */
		$(this).css("background-color",'gray');
	});

	//简单的调用单一的，更复杂的方法bind()来为命名的事件类型绑定处理程序
	$('p').bind('click',f);
	//从所有元素中移除所有jquery事件处理程序
	$('*').unbind();

	//.trigger()事件 调用trigger()时会传入事件类型字符串作为第一个参数，trigger事件会在jquery对象中所有的元素上触发该类型字符串作为第一个参数
	$("form").submit();

	$("form").trigger('submit');

	//在手动触发事件时，给trigger()传入第二个参数时，第二参数会成为每个触发事件处理程序的第二参数
	$("#button").trigger('click',true);
	$("#button").trigger('click',[x,y,z]); //传入三个额外参数

	//实时事件
	//使用bind()给元素绑定了事件处理程序，接着又创建了带有<a>元素的新文档内容，新元素和老元素不会拥有相同的事件处理程序
	//需要使用delegate()和undelegate()方法来代替和替代bind()和unbind()
	//调用的时候传入一个选择器字符串，一个jquery事件类型字符串，以及一个jQuery事件处理函数

	$(document).delegate("a","mousevoer",linkHandler);
	//live()方法同样也可以实时注册实时事件，实际中更普遍
	x.live('click', function(event) {
		/* Act on the event */
	});
	$(x.context).delegate('x.selector', 'eventType', function(event) {
		selector
	});
	//注销实时事件处理程序，使用die()和undelegate()
	$("a").die("mouseover"); //移除<a>元素上mouseover事件的所有实时处理程序
	$("a").die("mouseover",linkHandler); // 只移除一个指定的实时处理程序

	//jquery中的ajax
	//load()方法是所有工具最简单的，向它传入一个URL，它会异步加载该URL中的内容，然后将内容插入到每一个选中元素中
	setInterval(function(){$("status").load("status_report.html");},60000);
	//加载显示部分
	$("#temp").load("XXX.html" #selector);
	//除了必须的参数，load()方法还接受两个可选参数，第一个可选的参数可追加到URL后面，与请求一起发送
	//传入的是字符串，则会追加到URL后面，传入是对象则会被转化为一个用"&"分隔的名/值对后与请求一起发送
	$("#temp").load("xxxx.html","zipcode=721125");

	//jQuery.getScript()函数的第一个参数是JS代码的URL.异步加载和执行完成后，调用一次该回调函数
	$.getScript('path/to/file', function(data, textStatus) {
		/*optional stuff to do after getScript */ 
	});

	//jQuery.getJSON()函数与上个方法类似，它会获取文本，然后特殊处理一下，再调用指定的函数
	$.$.getJSON('/path/to/file', {param1: 'value1'}, function(json, textStatus) {
			/*optional stuff to do after success */
	});

	//.ajax()函数
	$.ajax({
		url: '/path/to/file',
		type: 'default GET (Other values: POST)',
		dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		data: {param1: 'value1'},
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	//.ajaxSetup()传入一个选项对象来设置任意选项的默认值
	$.ajaxSetup({
		timeout:2000, //两秒后取消所有请求
		cache:false //通过给URL添加时间戳来禁用浏览器缓存
	});

	//jquery选择器和选择方法
	//太多，又灵活又多，看书吧