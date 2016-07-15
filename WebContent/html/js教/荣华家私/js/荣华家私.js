var m1,m2,t,q;
function nowtime(){
var today=new Date();
m2=today.getMonth()+1;
m1=today.getSeconds()+1;
t=today.getFullYear()+'年'+m2+'月'+today.getDate()+'日'+"  "+today.getHours()+':'+today.getMinutes()+':'+m1+"  "+"星期"+today.getDay();
tim.value=t;
m2=today.getMonth();
q=window.setTimeout("nowtime()",1000);
}//时间的走动

function init(){
    time=window.setTimeout("change()",2000);
}
var time;//时间计数全局变量
var count=0;//表示当前需显示的div(值为1-4)

function change(x){//依时序不断调用，处理四张图片及按钮的状态
   count+=1;//累加图片div的序号，以便显示该序号对应的图片
   if(x!=undefined){
      count=x;//把超链接传进来的参数赋给当前需显示的图片变量
	  window.clearTimeout(time);   //终止计时器
   }
   
   for(i=1;i<=4;i++){//遍历四个按钮和图片 
       if(count==i){//如果是当前图片，则显示，同时对应的按扭为红色
	      document.getElementById('d'+i).style.display='block';
		  document.getElementById('a'+i).style.backgroundColor='#0042B4';
	   }else{//否则，隐藏图片，按钮背景还原
   	      document.getElementById('d'+i).style.display='none';
		  document.getElementById('a'+i).style.backgroundColor='#666666';	   
	   }   
   }
   if(count==4){//当为最后一张图片时中，对变量值初始化
      count=0;
   }
   time=window.setTimeout("change()",2000);//重新启动计时器
}
function ctr(b){
if(b==1){
document.getElementById("b1").style.display='block';
document.getElementById("b2").style.display='none';
document.getElementById("b3").style.display='none';
document.getElementById("b4").style.display='none';
document.getElementById("b5").style.display='none';
document.getElementById("b6").style.display='none';
}
if(b==2){
document.getElementById("b1").style.display='none';
document.getElementById("b2").style.display='block';
document.getElementById("b3").style.display='none';
document.getElementById("b4").style.display='none';
document.getElementById("b5").style.display='none';
document.getElementById("b6").style.display='none';
}
if(b==3){
document.getElementById("b1").style.display='none';
document.getElementById("b2").style.display='none';
document.getElementById("b3").style.display='block';
document.getElementById("b4").style.display='none';
document.getElementById("b5").style.display='none';
document.getElementById("b6").style.display='none';
}
if(b==4){
document.getElementById("b1").style.display='none';
document.getElementById("b2").style.display='none';
document.getElementById("b3").style.display='none';
document.getElementById("b4").style.display='block';
document.getElementById("b5").style.display='none';
document.getElementById("b6").style.display='none';
}
if(b==5){
document.getElementById("b1").style.display='none';
document.getElementById("b2").style.display='none';
document.getElementById("b3").style.display='none';
document.getElementById("b4").style.display='none';
document.getElementById("b5").style.display='block';
document.getElementById("b6").style.display='none';
}
if(b==6){
document.getElementById("b1").style.display='none';
document.getElementById("b2").style.display='none';
document.getElementById("b3").style.display='none';
document.getElementById("b4").style.display='none';
document.getElementById("b5").style.display='none';
document.getElementById("b6").style.display='block';
}
}//控制中间变换
var n=0;
function op_zc(){
	var x=document.getElementById("t3").value+"$";
	var y=window.showModalDialog("分页面/注册.html",x,"dialogwidth:1000px;dialogHeight:1000px;");
	var a=y.split("#");
	document.getElementById("t3").value=a;
	}//注册页面控制
function op_dl(){
	var x=document.getElementById("t3").value;
	var y=window.showModalDialog("分页面/登陆.html",x,"dialogwidth:1000px;dialogHeight:1000px;");
	var a=y.split("$");
	document.getElementById("sed").innerText=a[0];
	document.getElementById("t2").value=a[1];
	}//登陆页面控制
	
	function op_gw(){
		if(parseInt(document.getElementById('t2').value)>0){
			var qw=window.open("分页面/购物车.html","op3");
			}else{
				alert("请先登录");
				}//购物车页面
	}
	function op_j1(){
		if(parseInt(document.getElementById('t2').value)>0){
			var j1=window.open("分页面/家具一.html","op4");
			}else{
				alert("请先登录");
				}//家具一
	}
	function op_j2(){
		if(parseInt(document.getElementById('t2').value)>0){
			var j2=window.open("分页面/家具二.html","op5");
			}else{
				alert("请先登录");
				}//家具二
	}
	function op_j3(){
		if(parseInt(document.getElementById('t2').value)>0){
	var j3=window.open("分页面/家具三.html","op5");
			}else{
				alert("请先登录");
				}
	}//家具三