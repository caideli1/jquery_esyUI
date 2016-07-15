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
		if(n==3){
		if(value==""){
document.getElementById("f3").style.display="block";
document.getElementById("x3").style.display="none";
}
	}
		if(n==4){
		if(value==""){
document.getElementById("x4").style.display="none";
}
	}
	if(n==5){
		if(value==""){
document.getElementById("f5").style.display="block";
}
	}
		if(n==6){
		if(value==""){
document.getElementById("f6").style.display="block";
}
	}
		if(n==7){
		if(value==""){
document.getElementById("f7").style.display="block";
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
		if(n==3){
		if(value==""){
document.getElementById("x3").style.display="block";
}else{
document.getElementById("x3").style.display="none";
}
	}
	if(n==4){
		if(value==""){
document.getElementById("x4").style.display="block";
}else{
document.getElementById("x4").style.display="none";
}
	}

	document.getElementById("f1").style.display="none";
	document.getElementById("f2").style.display="none";
	document.getElementById("f3").style.display="none";
	document.getElementById("f5").style.display="none";
	document.getElementById("f6").style.display="none";
	document.getElementById("f7").style.display="none";
}//控制焦点的消失


function ge(){
	var a=window.dialogArguments.split("#");
	document.getElementById("zc1").value=a;
}
function bak(){
window.returnValue=document.getElementById("zc1").value+"$"+document.getElementById("p2").value+"$"+document.getElementById("p3").value;
window.close();
}



function check(a1,a2,a3,a4,a5,a6,a7){
	var regExp1=/^[-_A-Za-z0-9]+@([_A-Za-z0-9]+.)+[A-Za-z0-9]{2,3}$/gi;
if(regExp1.test(a1)==false){
	alert("邮箱填写不符合要求");
	return;
}
var regExp2=/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$/gi;
if(regExp2.test(a2)==false){
	alert("昵称填写不符合要求");
	return;
}
var regExp3=/^[a-z0-9][0-9a-z]{4,18}[0-9a-z]$/gi;
if(regExp3.test(a3)==false){
	alert("密码填写不符合要求");
	return;
}

if(a3!=a4){
	alert("两次密码不一致");
	return;
}
alert("注册成功");
bak();
}



var y=0;
function init1(){y=document.getElementById("x").style.pixelTop;}
function move(){
document.getElementById("x").style.pixelTop=document.body.scrollTop+y;
}
window.onscroll=move;
function closeme(){
document.getElementById("x").style.display="none";
}

