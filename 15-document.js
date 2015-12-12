	//选取文档元素
	//通过ID选取元素
	var section1 = document.getElementById("section1");
	//通过ID查找多个元素
	function getElements(/* ids*/){
		var elements = {};
		for(var i =0;i<arguments.length;i++){
			var id = arguments[i];
			var elt = document.getElementById(id);
			if(elt == null)
				throw new error("No element with id:"+id);
			element[id] = elt;
		}
		return elements;
	}
	//通过名字选取元素
	var radiobuttons = document.getElementsByName("favorite_color");

	//通过标签名选取元素
	var spans = document.getElementByTagName("span");
	var firstpara = document.getElementByTagName("p")[0];
	//查找文档中第一个<p>元素里面的所有span元素
	var firstpara = document.getElementsTagName("p")[0];
	var firstParaSpans = firstpara.getElementsTagName("span");

	//通过css类来选取元素
	var warning = document.getElementByClassName("warning");
	var log = document.getElementById("log");
	var fatal = log.getElementByClassName("fatal error");

	//通过css选择器来选择元素
	#nav div .warning p[lang="fr"]/*法语字段*/ *[name="x"]
	body>h1:first-child
	//querySelectorAll()是终极选取元素的方法
	//document.querySelector以及document.querySelectorAll的不同
	//querySelector该方法返回满足条件的单个元素。按照深度优先和先序遍历的原则使用参数提供的CSS选择器在DOM进行查找，返回第一个满足条件的元素。
	//querySelectorAll该方法返回所有满足条件的元素，结果是个nodeList集合。

	//文档结构和遍历
	//作为节点树的文档
	parentNode、childNodes、firstChild
	nodeType(9代表Document节点，1代表Element节点，3代表Text节点，8代表Comment节点，11代表DocumentFragment节点)

	//属性
	//HTML属性作为Element属性
	var image = docuemnt.getElementById("myimage");
	var imgurl = image.src;
	image.id === "myimage" 
	//为<form>元素设置表单提交的属性
	var f = document.forms[0];
	f.action = "http://www.XXXX.com/submit.php";
	f.method = "POST";

	//获取和设置非标准HTML属性
	var image = document.images[0];
	var width = parseInt(image.getAttribute("WIDTH"));
	image.setAttribute("class","thumbnail");
	//除了setAttraibute和getAttribute还有hasAttribute和removeAttribute用来检测命名属性是否存在和完全删除属性

	//数据集属性
	//在HTML5中，任意以data-为前缀的小写的属性名字都是合法的
	//火化线
	<span class="sparkline" data-ymin="0",data-ymax="10">
	1 1 1 2 2 3 4 5 6 7 7 4 2 1
	</span>
	var sparklines = document.getElementByClassName("sparkline");
	for(var i= 0;i<sparklines.length,i++){
		var dataset = sparklines[i].dataset;
		var ymin = parseFloat(dataset.ymin);
		var ymax = parseFloat(dataset.ymax);
		var data = sparklines[i].textContent.split(" ").map(parseFloat);
		drawSparkline(sparklines[i],ymin,ymax,data);
	}

	//作为Attr节点的属性
	document.body.attributes[0] //body元素的第一个属性
	document.body.attributes.bgcolor
	document.body.attributes["ONLOAD"] //onload属性

	//元素的内容
	//作为纯文本的元素内容
	var para = document.getElementsTagName("p")[0]; //文档中的第一个<p>
	var text = para.textContent;
	para.textContent = "Hello shenqiannan" //修改文档内容

	//textContext和innerText属性非常相似，要小心空元素和未定义的属性之间的区别
	function textContent(element,value){
		var content = element.textContent; //检查textContent是否定义
		if(value === undefined){ //没传递value，返回当前文本
			if(content ! == undefined) return content;
			else return element.innerText;
		}else{
			if(content !== undefined) 
				element.textContent = value;
			else 
				element.innerText = value;
		}
	}

	//作为Text节点的元素的内容
	//查找元素的后代中节点的所有Text节点
	function textContent(e){
		var child ,type, s="";//s保存所有子节点的文本
		for(child = e.firstChild;child != null;child = child.nextSibling){
			type = child.nodeType;
			if(type ===3||type ===4) //text节点和CDATASection节点
				s+=child.nodeValue;
			else if(type===1) //Element节点
				s+=textContent(child)l;
		}
		return s;
	}

	//创建、插入和删除节点
	//从指定的URL，异步加载和执行脚本
	function loadsync(url){
		var head = document.getElementsTagName("head")[0];
		var s = document.creatElement("script");
		s.src= url;
		head.appenChild(s);
	}
	//创建节点
	var newnode = document.createTextNode("text node content");
	//插入节点
	//将child节点插入到parent中，使其成为第n个子节点
	function insertAt(parent,child,n){
		if(n<0||n>parent.childNode.length) 
			throw new Error("invalid index");
		else if(n == parent.childNode.length)
			parent.appenChild(child);
		else
			parent.insertBefore(child,parent.childNode[n]);
	}

	//表格行排序
	function sortrows(table,n,comparator){
		var tbody = table.tBodies[0];
		var rows = tbody.getElementsTagName("tr");
		rows = Array.prototype.slice.call(rows,0);
		//基于第n个<td>元素的值进行排序
		rows.sort(function(row1,row2){
			var cell1 = row1.getElementsTagName("td")[n];
			var cell2 = row2.getElementsTagName("td")[n];
			var val2 = cell2.textContent ||cell2.innerText;
			var val1 = cell1.textContent ||cell1.innerText;
			if(comparator) return comparator(val1,val2);
			if(val1<val2) return -1;
			else if(val1>val2) return 1;
			else return 0;
		});
		for(var i =0li<rows.length,i++)
			tbody.appenChild(rows[i]);
	}

	//查找表格<th>元素，让他们可单击
	function makeSortable(table){
		var headers = table.getElementsTagName("th");
		for(var i = 0;i<headers.lenth,i++){
			(function(n){
				headers[i].onclick=function(){sortrows(table,n);};
			}(i)); //讲i的值赋给局部变量n
		}
	}

	//删除个替换节点
	n.parentNode.removeChild(n);

	//repalceChild(),用一个新的<b>元素替换n节点，并使其成为该元素的子节点
	function embolden(n){
		if(typeof n =="string") n = document.getElementById(n);
		var parent =n.parentNode;
		var b = document.creatElement("b");
		parent.replaceChild(b,n);
		b.appenChild(n); //使n元素成为<b>的子节点
	}

	//使用DocumentFragment,作为其他节点的一个临时容器，总是独立的，parentNode总是为null
	var frag = document.creatDocumentFragment();
	//倒序排列一个节点的子节点
	function reverse(n){
		var f = document.creatDocumentFragment();
		while(n.lastchild) f.appenChild(n.lastchild);
		n.appenChild(f);
	}

	//文档和元素的几何形状和滚动
	//文档坐标和视口坐标
	//查询窗口滚动条的位置
	function getScrollOffset(w){
		w = w||window;
		if(w.pageXOffset != null)
			return {
				x:pageXOffset,
				y:pageYOffset
			};
	}
	//查询元素的几何尺寸
	function getViewportSize(w){
		w = w||window;
		if(w.innerWidth != null)
			return{
				w:w.innerWidth,
				h:w.innerHeight
			};
	}

	//判断一个元素的尺寸和位置的最简单的方法是调用它的getBoundingClientRect()
	//返回left,right,top,bottom属性的对象

	//查询窗口滚动条的位置
	//每200毫秒向下滚动10像素，无法关闭
	javascript:void setInterval(function(){scrollBy(0,10)},200);

	//计算e的位置
	function getElementPos(e){
		var x =0,y=0;
		while(e != null){
			x += e.offsetLeft;
			y += e.offsetTop;
			e= e.offsetParent; //offsetParent属性指定这些属性相对的父元素
		}
	}
	//当文档包含可滚动的且有溢出内容的元素时，上述方法就不能正常工作，因为他没有把滚动条包含进去
	function getElementPos(elt){
		var x = 0,y=0;
		for(var e = elt;e!=null;e=e.offsetParent){
			x+=e.offsetLeft;
			y+=e.offsetTop;
		}//再次循环所有的祖先元素，减去滚动的偏移量
		for(var e = elt.parentNode;e!=null&&e.nodeType==1;e= e.parentNode){
			x-=e.scrollLeft;
			y-=e.scrollTop;
		}
		return (x:x,y:y);
	}

	//HTML表单
	//选取表单和表单元素
	var fields = focument.getElementById("address").getElementsTagName("input");

	document.querySelectorAll('#shipping input[type="radio"]');
	document.querySelectorAll('#shipping input[type="radio"][name="method"]');

	//选择框和选项元素
	//text,value,defaultSelect,selected
	var zaire = new Option("Zaire","zaire",false,false);
	var countries = document.address.country;
	countries.option[countries.option.lenth] = zaire; 

	//document.referrer
	if(document.referrer.indexOf("http://www.google.com/search?")==0){
		var args = document.referrer.substring(ref.indexOf("?")+1).split("&");
		for(var i =0;i<args.length,i++){
			if(args[i].substring(0,2) == "q="){
				document.write("<p> Welcome google user!");
				document.write("You search for :"+unescape(args[i].substring(2)).replace('+',' ');
				break;
			}
		}
	}

	//查询选取的文本
	function getSelectedText(){
		if(window.getSelection)
			return window.getSelection().toString();
	}
	//文档可编辑
	<iframe id= "editor" src="about:blank"></iframe>
	<script>
	onLoad(function(){
		var editor = document.getElementById("editor");
		editor.contentDocument.designMode = "on" ; //开启编辑
	});
	</script>