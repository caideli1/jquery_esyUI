function checkover(value,n){
	if(n==1){
		if(value==""){
document.getElementById("f1").style.display="block";
document.getElementById("zz").style.display="block";
document.getElementById("x1").style.display="none";
}
	}
		if(n==2){
		if(value==""){
document.getElementById("f2").style.display="block";
document.getElementById("x2").style.display="none";
}
	}
}//控制焦点的出现
function checkout(value,n){
	if(n==1){
		if(value==""){
document.getElementById("x1").style.display="block";
}else{
document.getElementById("x1").style.display="none";
}
	}
	if(n==2){
		if(value==""){
document.getElementById("x2").style.display="block";
}else{
document.getElementById("x2").style.display="none";
}
	}
	document.getElementById("f1").style.display="none";
	document.getElementById("f2").style.display="none";
	document.getElementById("zz").style.display="none";
}//控制焦点的消失




var y=0;
function init1(){y=document.getElementById("x").style.pixelTop;}
function move(){
document.getElementById("x").style.pixelTop=document.body.scrollTop+y;
}
window.onscroll=move;
function closeme(){
document.getElementById("x").style.display="none";
}

function op_zc(){
	var zc=window.open("注册.html","op2");
	}//注册
var q=new Array;	
	function getop(){
		var a=window.dialogArguments.split("$");
		q=a;
	    document.getElementById("dl1").value=a;
		for(i=2;i<a.length;i=i+3){
		var newoption=new Option(a[i],a[i]);
		z.options.add(newoption);
}
		}
	
	
function ge(b1,b2){
	if(b1==""){alert("登录名或密码不正确");
	}else{
		for(i=0;i<q.length;i++){
	if(q[i]==b1){
	if(q[i+1]==b2){
	window.returnValue="欢迎您!"+b1+"$"+document.getElementById("dl2").value;
	alert("登录成功");
	window.close();
	}
	}
	}
	alert("登录名或密码不正确");
		}
	
}//登录控制



function oc(){
	p1.value=z.value;
	}

