	//客户端的js
	//设置location属性，从而跳转到新的web页面
	window.location = "http://www.oreilly.com/";
	//一段时间后触发一个回调,比较一下两者的区别
	setTimeout(function(){alert("hello world");},2000);
	setInterval(function(){alert("hello world");},2000);
	//Window对象重要属性document getElementById(),基于元素id返回单一的文档元素
	var timestamp = document.getElementById("timestamp");
	//getElementById()返回的Element对象有其他重要属性和方法，允许脚本获取他的内容，设置属性值
	//如果元素为空，往里面插入当前的日期和时间
	if(timestamp.firstChild == null){
		timestamp.appendChild(document.createTextNode(new Date().toString()));
	}
	//设置CSS相关的属性会改变元素的呈现
	timestamp.backgroundColor = "yellow";
	timestamp.className = "highlight";
	//事件处理程序可以修改窗口，文档和文档的元素的行为
	timestamp.onClick= function(){this.innerHTML = new Date().toString();};
	//显示内容的onload程序
	<!DOCTYPE html>
	<head>
	<style>
	.reveal * {display:none;}
	.reveal * .handle {display:block;}
	<script type="text/script">
	window.onload = function(){
		var elements = document.getElementById("reveal");
		for(var i = 0;i<elements.length;i++){
			var elt = elements[i];
			var title = document.getElementByClassName("handle");
			addRevealHandle(title,elt){
				title.onClick = function(){
					if(elt.className = "reveal")
						elt.className = "revealed";
					else if(elt.className =="revealed")
						elt.className = "reveal";
				}
			}
		}
	};
	</script>
	</head>
	<body>
	<div class="reveal">
	<h1 class = "handle"> Click Here to reveal hidden Text</h1>
	<p>blablablabla</p>
	</div>
	</body>
	<html>

	//实现一个简单的js数字时钟程序
	<!DOCTYPE html>
	<html>
	<head>
	<script>
		function displayTime(){
			var elt = document.getElementById("clock");
			var now = new Date();
			elt.innerHTML = now.toLocaleTimeString();
			setTimeout(displayTime,1000);
		}
		window.onload = displayTime;
	</script>
	<style>
		#clock{
			font:bold 24pt sans;
			background:#ddf;
			padding:10px;
			border:solid black 2px;
			border-radius:10px;
		}
	</head>
	<body>
	<h1>Digital Clock</h1>
	<span id="clock"></span>
	</body>
	</html>

	//url中的js
	//在url后面跟一个javascript:协议限定符
	<a href="javascript:void window.open('about:blank')">打开一个窗口</a>

	//书签 js表达式计算器
	<a href='javascript:
		var e ="",r="";
		do{
			e = prompt("Expression:"+e+"\n"+r +"\n",e);
			try{r = "Result:"+eval(e);}
			catch(ex){r=ex;}
		}while(e);
		void 0; /*防止当前文档被覆盖*/
	'>
	javascript evaluator
	</a>

	//onLoad(),当文档载入完成时调用一个函数
	function onLoad(f){
		if(onLoad.loaded)
			window.setTimeout(f,o);
		else if(window.addEventListener)
			window.addEventListener("load",f,false);
		else if(window.attachEvent)
			window.attachEvent("onload",f);
	}
	onLoad.loaded = false; //给onload设置一个标志，用来演示文档是否载入完成
	onLoad(function(){onLoad.loaded= true;}); //注册一个函数，当文档载入完成时设置这个标志

	//跨站脚本
	//如果页面动态的产生文档内容，并且这些内容是基于用户提交的数据的，而并没有通过移除任何嵌入的HTML标签消毒的话，页面很容易遭受攻击
	<script>
	var name = decodeURIComponent(window.location.search.substring(1))||"";
	document.write("Hello"+name);
	</script>
	

		










