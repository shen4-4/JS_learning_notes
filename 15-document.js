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
	//