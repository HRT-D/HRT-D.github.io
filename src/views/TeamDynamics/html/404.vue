<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
		<meta name="robots" content="noindex">
		<title>内容丢失</title>
	
		<link type="text/css" rel="stylesheet" href="Css/style.css">
	</head>
	<body>
	
		<div class="content list">
			<div class="error">
				<img src="Images/tHDHQl7.jpg"/>
				<h1>PAGE CAN’T BE FOUND</h1>
				<p>The page you requested does not exist or has been moved. Check out the latest posts below.</p>
			</div>
			<ul class="nt-list">
				<li>
					<a href="detial.html">
						<span><img src="Images/keira.jpg"/></span>
						<h3>内容简介</h3>
					</a>
				</li>
				<li>
					<a href="detial.html">
						<span><img src="Images/keira.jpg"/></span>
						<h3>内容简介</h3>
					</a>
				</li>
				<li>
					<a href="detial.html">
						<span><img src="Images/keira.jpg"/></span>
						<h3>内容简介</h3>
					</a>
				</li>
			
			</ul>
		</div>
	
		
	</body>
</html>
<script>
	//header menu btn click
	var menu_open = true;//打开菜单
	var opened = false;//判断是否点击过
	var ele_Menu = document.getElementById("hd-menu-btn");
	var menu_list = document.getElementById("hd-menu-list");
	ele_Menu.onclick = function(){
		if(menu_open){ //打开菜单
			if(opened){
				return false;
			}else{
				ele_Menu.className += " hd-menu-open";
				opened = true;
				setTimeout(function(){
					menu_list.className += " hd-mlist-open";
					menu_open = false;
					opened = false;
					
				},300)
			}
		}else{ //关闭菜单
			if(opened){
				return false;
			}else{
				ele_Menu.className = "hd-menu-btn";
				menu_list.className += " hd-mlist-closed";
				opened = true;
				setTimeout(function(){
					menu_list.className = "hd-menu-list";
					menu_open = true;
					opened = false;
				},800);
			}
		}
	}
</script>
<script>
window.onscroll = function(){
	
	//滚动条
	var scrollTop=document.body.scrollTop;
	var progressWidth = document.body.clientWidth*scrollTop/(document.body.clientHeight-document.documentElement.clientHeight+80);
	var progress = document.getElementsByTagName("progress")[0];
	progress.value = progressWidth;
	progress.max = document.body.clientWidth;
}
</script>