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

	window.applicationCache.onnoupdate = function(){
		status("This version is up-to-date");
		return false;
	};

	window.applicationCache.ondownloading = function(){
		status("Downloading new version");
		window.progresscount = 0;
		return false;
	};

	window.applicationCache.onprogress = function(e){
		var progress = ""
		if(e && e.lengthComputable)
			progress=""+Math.round(100*e.loaded/e.total)+"%"
		else
			progress = "(" +progresscount +")"
		status("Downloading new version"+progress);
		return false;		
	};
	window.applicationCache.oncached = function(){
		status("This application is now cached locally");
		return false;
	};
	window.applicationCache.onupdateready= function(){
		status("A new version has been downloaded.reload to run it");
		return false;
	};
	window.applicationCache.onerror = function(){
		status("Couldn't load mainfest or cache application");
		return false;
	};
	window.applicationCache.onobsolete = function(){
		status("This application is no longer cached"+"Reload to get the latest version from verison the newwork");
		return false;
	};

	//离线web应用
	var editor statusline,savebutton,idletimer;
	window.onload = function(){
		if(localStorage.note == null) localStorage.note="";
		if(localStorage.lastModified == null) localStorage.lastModified = 0;
		if(localStorage.lastSaved == null) localStorage.lastSaved = 0；
		//查找编辑器UI元素，并初始化全局变量
		editor = document.getElementById("editor");
		statusline = document.getElementById("statusline");
		savebutton = document.getElementById("savebutton");
		//初始化编辑器，同步前禁止编辑
		editor.value = localStorage.note;
		editor.disabled = true;
		editor.addEventListener("input",
								function(e){
									localStorage.note = editor.note;
									localStorage.lastModified = Date.now();
									if(idletimer) clearTimeout(idletimer);
									idletimer = setTimeout(save,5000);
									savebutton.disabled = false;
								},
							   false);
		sync();
	};

	//离开页面前保存数据到服务器
	window.onbeforeunload = function(){
		if(localStorage.lastModified>localStorage.lastSaved)
			save();
	};
	window.onoffline = function(){
		status(Offline);
	};
	window.ononline = function(){
		sync(); //同步
	};
	window.applicationCache.onupdateready = function(){
		status("A new version blablabla");
	};

	function status(msg){
		statusline.innerHTML = msg;
	}
	//停止编辑后，自动保存上传到服务器
	function save(){
		if(idletimer) clearTimeout(idletimer);
		idletimer = null;
		if(navigator.onLine){
			var xhr = new XMLHttpRequest();
			xhr.open("PUT","/note");
			xhr.send(editor,value);
			xhr.onload = function(){
				localStorage.lastSaved = Date.now();
				savebutton.disabled = true;
			};
		}
	}

	//检查服务端是否有新版本的笔记
	function sync(){
		if(navigator.onLine){
			var xhr = new XMLHttpRequest();
			xhr.open("GET","/note");
			xhr.send();
			xhr.onload = function(){
				var remoteModTime = 0;
				if(xhr.status ===200){
					var remoteModTime = xhr.getResponseHeadler("Last_Modified");
					remoteModTime = new Date(remoteModTime).getTime();
				}
				if(remoteModTime>localStorage.lastModified){
					status("never note found on server");
					var useit = confirm("There is a newerblablaba");
					var now = Date.now();
					if(useit){
						editor.value= localStorage.note = xhr.responseText;
						localStorage.lastSaved = now;
						status("Newest version downloaded");
					}
					else{
						status("Ignoreing newer version of  the note");
						localStorage.lastModified = now;
					}
				}else{
					status("You are editing the current version of the note");
				if(localStorage.lastModified>localStorage.lastSaved){
					save();
				}
				editor.disabled= false;
				editor.focus();
				}
			}
			else{
				//离线状态，不能同步
				status("can't sync while Offline");
				editor.disabled= false;
				editor.focus();
			}
		}
	}