window.onload = function(){

	/*导航栏功能*/
	locateBar();

	/*点击事件监听*/
	clickListening();

}

function clickListening(){
	/*点击阿里云图标跳转至阿里云*/
	document.getElementById("support-link").onclick = function(){window.open("https://www.aliyun.com/?spm=5176.8142029.388261.1.9qfViA");}
	/*进入github查看C语言项目*/
	document.getElementById("c").onclick = function(){window.open("https://github.com/BoboHezi/LIBRARY");}
	/*进入github查看Java项目*/
	document.getElementById("java").onclick = function(){window.open("https://github.com/BoboHezi/SignInService");}
	/*进入github查看Android项目*/
	document.getElementById("android").onclick = function(){window.open("https://github.com/BoboHezi/Custom2ProgressBar");}
	/*进入github查看HTML项目*/
	document.getElementById("html").onclick = function(){window.open("https://github.com/BoboHezi/HumitureServer");}
}

window.onscroll = function(){
	/*监听滚动条的变化*/
	ListenerscrollBar()
}

/*监听滚动条的变化*/
function ListenerscrollBar(){
	var scroll_top;

	if (document.documentElement && document.documentElement.scrollTop){
		scroll_top = document.documentElement.scrollTop;
	}
	else if(document.body){
		scroll_top = document.body.scrollTop;
	}

	var home = document.getElementById("section-home");
	var info = document.getElementById("section-info");
	var hobby = document.getElementById("section-hobby");
	var contact = document.getElementById("section-contact");

	var home_top = elementPosition(home).y;
	var info_top = elementPosition(info).y;
	var hobby_top = elementPosition(hobby).y;
	var contact_top = elementPosition(contact).y;

	if (scroll_top < info_top - 60) {
		document.getElementById("position-home").checked = true;
	}else if (scroll_top < hobby_top - 60) {
		document.getElementById("position-info").checked = true;
		document.getElementById("animation-home").checked = false;
		document.getElementById("animation-contact").checked = false;
	}else if (scroll_top < contact_top - 60) {
		document.getElementById("position-hobby").checked = true;
		document.getElementById("animation-home").checked = false;
		document.getElementById("animation-contact").checked = false;
	}else {
		document.getElementById("position-contact").checked = true;
	}

	if (scroll_top == home_top) {
		changeRadio("animation-home");
	}
	if (Math.abs(scroll_top - contact_top) < 60) {
		changeRadio("animation-contact");
	}
}

function locateBar(){
	var locate_home = document.getElementById("position-home");
	var locate_info = document.getElementById("position-info");
	var locate_hobby = document.getElementById("position-hobby");
	var locate_contact = document.getElementById("position-contact");

	locate_home.onclick = function(){scrollToContral("section-home");changeRadio("animation-home");};
	locate_info.onclick = function(){scrollToContral("section-info")};
	locate_hobby.onclick = function(){scrollToContral("section-hobby")};
	locate_contact.onclick = function(){scrollToContral("section-contact");changeRadio("animation-contact");};
}

/*移动*/
function scrollToContral(id){
	var elem = document.getElementById(id);
	var scrollPos = elementPosition(elem).y;

	var scroll_top;

	if (document.documentElement && document.documentElement.scrollTop){
		scroll_top = document.documentElement.scrollTop;
	}
	else if(document.body){
		scroll_top = document.body.scrollTop;
	}

	scrollPos = scrollPos - scroll_top;
	if (id != "section-contact") {
		scrollPos = scrollPos - 60;
	}
	
	window.scrollBy(0, scrollPos);
}

function elementPosition(elem){
	var curleft = 0;
	var curtop = 0;

	if(elem.offsetParent){
		curleft = elem.offsetLeft;
		curtop = elem.offsetTop;

		while(elem = elem.offsetParent){
			curleft += elem.offsetLeft;
			curtop += elem.offsetTop;
		}
	}
	return {x:curleft,y:curtop};
}

function changeRadio(id){
	document.getElementById(id).checked = true;
}


function detailme(){scrollToContral("section-info")}