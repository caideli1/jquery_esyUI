function checkover(value,n){
	if(n==1){
		if(value==""){
document.getElementById("f1").style.display="block";
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
	
	
	
	
function ge(b1,b2){
	var a=window.dialogArguments.split("$");
	document.getElementById("dl1").value=a;
	var b3=b1+",";
	for(i=0;i<a.length;i++){
	if(a[i]==b3){
	if(a[i+1]==b2){
	window.returnValue=b1+"$"+document.getElementById("dl2").value;
	alert("登录成功");
	window.close();
	}
	}
	}
	alert("登录名或密码不正确");
}//登录控制
