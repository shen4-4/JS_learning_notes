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




