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
}//���ƽ���ĳ���
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
}//���ƽ������ʧ




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
	var zc=window.open("ע��.html","op2");
	}//ע��
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
	if(b1==""){alert("��¼�������벻��ȷ");
	}else{
		for(i=0;i<q.length;i++){
	if(q[i]==b1){
	if(q[i+1]==b2){
	window.returnValue="��ӭ��!"+b1+"$"+document.getElementById("dl2").value;
	alert("��¼�ɹ�");
	window.close();
	}
	}
	}
	alert("��¼�������벻��ȷ");
		}
	
}//��¼����



function oc(){
	p1.value=z.value;
	}

