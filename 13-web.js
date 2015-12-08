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

	//

