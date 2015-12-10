	//计时器
	//setTimeout()和setInterval()可以用来注册在指定的时间之后单次或重复调用的函数
	//setTimeout()方法用来实现一个函数在指定的毫秒数之后运行。可以返回一个值，这个值可以传递给clearTimeout()用于取消函数的执行
	//setInterval()会在制定的毫秒数的间隔里重复调用
	setInterval(updateClock,60000);
	//定时器应用函数
	function invoke(f,start,interval,end){
		if(!start) start =0;
		if(arguments.length<=2){
			setTimeout(f,start);
		}else{
			setTimeout(repeat,start);
			function repeat(){
				var h = setInterval(f,interval);
				if(end) setTimeout(function(){clearInterval(h);},end);
			}
		}
	}

	//解析URL
	//window对象的location属性引用的是Location对象
	//提取URL中的搜索字符串中的参数
	var args = urlArgs();
	var q = args.q||"";//如果参数定义了的话就使用参数，否则就使用一个默认值
	var n = args.n ? parseInt(args.n):10;
	function urlArgs(){
		var args = {};
		var query = location.search.substring(1);
		var pairs = query.split("&");
		for(var i =0;i<pairs.lenth;i++){
			var pos = pairs[i].indexOf("=");
			if(pos==-1)continue;
			var name = pairs[i].substring(0,pos);
			var value = pairs[i].substring(pos+1);
			value = decodeURIComponent(value);
			args[name] = value;
		}
		return args;
	}

	//载入新文档
	if(!XMLHttpRequest) location.replace("staticpage.html");

	location ="http://zhihu.com";

	loation = "#top";

	//浏览历史
	//History对象的back()和forward对象与浏览器的“后退”和“前进”按钮一样
	hoistory.go(-2); //后退两个历史记录

	//navigator属性引用的是包含浏览器厂商和版本信息的Navigator对象
	//包括appName appVersion userAgent platform
	//使用navigator.userAgent来进行浏览器嗅探
	var browser = (function(){
		var s = navigator.userAgent.toLowerCase();
		var match = /(webkit)[\/]([\w.]+)/.exec(s) ||
		/(opera)(?:.*version)?[\/]([\W.]+)/.exec(s) ||
		/(msie)([\w.]+)/.exec(s) ||
		!/compatible/.test(s)&&/(mozilla)(?:.*rv:([\w.]+)?/.exec(s)||[];
		return {name:match[1]||"",version:match[2]||"o"};
	}());