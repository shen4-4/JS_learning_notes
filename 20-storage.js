	//localStorage和sessionStorage
	//两者主要区别在于存储的有效期和作用域的不同
	var name = localStorage.username;
	name= localStorage["username"];
	if(!name){
		name = prompt("what is your name?");
		localStorage.username=name;
	}
	for(var name in localStorage){
		var value= localStorage[name];
	}

	//浏览器目前为止仅支持存储字符串类型，如果想要存储和获取其他类型的数据，手动编码和解码
	localStorage.x =10;
	var x = parseInt(localStorage.x);

	localStorage.lastRead = (new Date()).toUTCString();
	var lastRead = new Date(Date.parse(localStorage.lastRead));

	localStorage.data = JSON.stringify(data); //编码然后存储
	var data = JSON.parse(localStorage.data);

	//存储有效期和作用域
	//localStorage的作用域限定在文档源，文档源通过协议，主机名以及端口三者来确定
	//同源的文档间共享同样的localStorage数据
	//sessionStorage的作用域也是限定在文档源中，还限定在窗口中

	//存储API
	//调用setItem方法将对应的名字和值传递进去，可以实现数据存储，相应的getItem(),removeItem()
	localStorage.setItem("x",1);
	localStorage.getItem("x");
	for(vari =1;i<localStorage.length;i++){
		var name = localStorage.key(i);
		var value = localStorage.getItem(name);
	}
	localStorage.remove("x");
	localStorage.clear(); //全部删除

	//cookie
	//检测cookie是否启用
	navigator.cookieEnabled //true则为启用

	//保存cookie
	function secookie(name,value,daysToLive){
		var cookie = name+"="+encodeURIComponent(value);
		if(typeof daysToLive ==="number")
			cookie+=";max-age="+(daysToLive*60*60*24);\
		document.cookie = cookie;
	}
	//读取cookie,使用document.cookie获取cookie的值
	function getCookie(){
		var cookie = {};
		var all = document.cookie;
		if(all === ""){
			return cookie;
		var list = all.split(";");
		for(var i = 0; i<list.length;i++){
			var cookie = list[i];
			var p = cookie.indexOf("=");
			var name = cookie.substring(0,p);
			var value = cookie.substring(p+1);
			value = decodeURIComponent(value);
			cookie[name] = value;
		}
		return cookie;
		}
	}

	//处理应用缓存相关事件
	function status(msg){
		document.getElementById("statusline").innerHTML = msg;
		console.log(msg);
	}

	window.applicationCache.onchecking = function(){
		status("Checking for a new version");
		return false;
	};

	window.applicationCache.onnoupdate function(){
		status("This version is up-to-date");
		return false;
	};

	
