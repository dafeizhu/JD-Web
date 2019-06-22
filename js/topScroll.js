//控制顶部搜索栏的显示与隐藏

window.onscroll = function() {
	console.log("页面滚动了")
	//获取到滚动条的距离
	var top = document.documentElement.scrollTop;
	//获取到div 类名为nav
	var nav = document.getElementsByClassName('nav')[0];
	//加入top为150时出现
	if (top >= 150) {
		nav.style.position = "fixed";
		nav.style.height = "50px";
		nav.style.top = "0";
		nav.style.display = "block";
		nav.style.zIndex = 9999;
	} else {
		nav.style.display = "none";
		nav.style.height = "0";
	}

}
