	//事件类型是一个用来说明什么类型事件的字符串
	//事件目标是发生的时间或与之相关的对象
	//事件处理程序是处理或响应事件的函数
	//事件对象是与特定事件相关且包含有关该事件详细信息的对象
	//事件传播(又称为事件捕获)是浏览器决定哪个对象触发其事件处理程序的过程

	//传统事件类型
	//表单事件、Window事件、鼠标事件、键盘事件

	//注册事件处理程序
	//设置Javascript对象属性为事件处理程序
	//处理程序注册示例
	window.onload= function(){
		var elt = document.getElementsById("shipping_address");
		elt.onsubmit = function(){
			return validate(this);
		}
	}


	//addEventListener(),接受三个参数，第一个是要处理程序事件的类型，这个事件类型（或名字）是字符串
	//第二是指定当前类型的事件发生的应该调用的函数
	//第三个参数是布尔值，通常情况下是false，如果相反传递了true，函数会在不同的调度阶段调用
	<button id="my button">Click me </button>
	<script>
	var b = document.getElementsById("my button");
	b.onclick = function(){alert("Thanks for clicking me");};
	b.addEventListener('click',function(){alert("Thanks again!");},false);
	</script>
	//相对的removeEventLiastener同样有三个参数

	//attachEvent() IE9之前
	var b = document.getElementsById("mybutton");
	var handler = function(){alert("Thanks");};
	if(b.addEventListener){
		b.addEventListener('click',handler,false);
	}else if(b.attachEvent){
		b.attachEvent('onclick',handler);
	}

	//事件处理程序的调用
	//事件处理的运行环境 aEl的时候，调用的处理程序使用事件目标作为它们的this值，但对于attachEvent()来说。它们的this值是全局对象
	function addEvent(target,type,handler){
		if(target.addEventListener){
			target.addEventListener(target,handler,false);
		}else{
			target.attachEvent('on'+type,function(event){
				return handler.call(target,event);
			});
		}
	}

	//事件取消
	function cancelHandler(event){
		var event = event||window.event;
		if(event.preventDefault) event.preventDefault(); //标准
		if(event.returnValue) event.returnValue = false; //IE
		return false;
	}

	//文档加载事件
	//load事件直到文档和所有图片加载完毕以后才发生
	//文档准备就绪时调用函数
	var whenReady = (function(){
		var funcs = [];
		var ready= false;
		function handler(e){
			if(ready) return;
			if(e.type ==="readystatechange" && document.readyState!=='complete')
				return;
			for(var i=0;i<funcs.length;i++)
				funcs[i].call(document);
			ready = true;
			funcs = null;
		}
		if(document.addEventListener){
			document.addEventListener('DOMContentLoaded',handler,false);
			document.addEventListener('readystatechange',handler,false);
			window.addEventListener('load',handler,false);
		}else if(document.attachEvent){
			document.attachEvent('onreadystatechange',handler);
			window.attachEvent('load',handler);
		}
		return function whenReady(f){
			if(ready) f.call(document);
			else funcs.push(f); //加入队列进行等待
		}
	});

	//鼠标事件
	//拖动文档元素
	function drag(elementToDrag,event){
		var scroll = getScrollOffsets();
		var startX = event.clientX+scrollX;
		var startY = event.clientY+scrollY;
		var origX = elementToDrag.offsetLeft;
		var origY = elementToDrag.offsetTop;
		var deltaX = startX-origX;
		var deltaY = startY-origY;
		if(document.addEventListener){
			document.addEventListener('mouseover',moveHandler,true);
			document.addEventListener('mouseup',uphandler,true);
		}
		if(event.stopPropgation) event.stopPropgation();
		if(enent.preventDefault) event.preventDefault();
	}

	function moveHandler(e){
		if(!e)e= e.window.event;
		var scroll = getScrollOffsets();
		elementToDrag.style.left= (e.clientX+scrollX-deltaX)+'px';
		elementToDrag.style.top = (e.clientY+scrollY-deltaY)+'px';
		if(e.stopPropgation) e.stopPropgation();
		else e.cancelBubble = true;
	}

	function upHandler(e){
		if(!e) e= e.window.event;
		if(document.removeEventListener){
			document.removeEventListener('mouseup',uphandler,true);
			document.removeEventListener('mousemove',moveHandler,true);
		}
		if(e.stopPropgation)e.stopPropgation();
		else e.cancelBubble = true;
	}


	//拖放事件
	//一个自定义拖放源
	<script src="whenReady.js"></script>
	<script>
	whenReady(function(){
		var clock = document.getElementsById('clock');
		var icon = new Image();
		icon.src = "clock-icon.png";

		function displayTime(){
			var now = new Date();
			var hrs = now.getHours(),mins = now.getMinutes();
			if(minx<10) mins="0"+mins;
			clock.innerHTML = hrs +":"+mins;
			setTimeout(displayTime,60000);
		}
		displayTime();

		clock.draggable = true;
		clock.ondragstart = function(event){
			var event = event || window.event;
			var dt = event.dataTransfer;
			dt.setData('Text',Date()+"\n")
			if(dt.setDragImage) dt.setDragImage(icon,0,0);
		};
	});
	</script>
	<span id="clock"></span>
	<textarea cols=60,rows=20></textarea>

	//文本事件，过滤用户输入
	whenReady(function(){
		var inputelts = document.getElementsByTagName('input');
		for(var i =0;i<inputelts.length;i++){
			var elt = inputelts[i];
			if(elt.type!='text'||!elt.getAttribute("data-allowed-chars"))
				continue;
			if(elt.addEventListener){
				elt.addEventListener("keypress",filter,false);
				elt.addEventListener("textInput",filter,false);
				elt.addEventListener("textinput",filter,false);
			}else{
				elt.addachEvent("onkeypress",filter);
			}
		}
		function filter(event){
			var e = event||window.event;
			var target = e.target || e.srcElement;
			var text = null;
		}
		if(e.type==="textinput"||e.type==="textInput") text = e.data;
		else{
			var code = e.charCode ||e.keyCode;
			if(code<32||e.charCode==0||e.ctrlKey||e.altKey)
				return;
			var text = String.formCharCode(code);
		}
		var allowed = target.getAttribute("data-allowed-chars");
		var messageid = target.getAttribute("data-messageid");
		if(messageid)
			var messageElement = document.getElementsById(messageid);
		for(var i =0;i<text.length;i++){
			var c = text.charAt(i);
			if(allowed.indexOf(c)==-1){
				if(messageElement) messageElement.style.visibility="visible";
				if(e.preventDefault) e.preventDefault();
				if(e.returnValue)e.returnValue= false;
				return false;
			}
		}
		if(messageElement)messageElement.style.visibility= "hidden";
	});

	




