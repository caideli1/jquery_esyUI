var m1,m2,t,q;
function nowtime(){
var today=new Date();
m2=today.getMonth()+1;
m1=today.getSeconds()+1;
t=today.getFullYear()+'��'+m2+'��'+today.getDate()+'��'+"  "+today.getHours()+':'+today.getMinutes()+':'+m1+"  "+"����"+today.getDay();
tim.value=t;
m2=today.getMonth();
q=window.setTimeout("nowtime()",1000);
}//ʱ����߶�

function init(){
    time=window.setTimeout("change()",2000);
}
var time;//ʱ�����ȫ�ֱ���
var count=0;//��ʾ��ǰ����ʾ��div(ֵΪ1-4)

function change(x){//��ʱ�򲻶ϵ��ã���������ͼƬ����ť��״̬
   count+=1;//�ۼ�ͼƬdiv����ţ��Ա���ʾ����Ŷ�Ӧ��ͼƬ
   if(x!=undefined){
      count=x;//�ѳ����Ӵ������Ĳ���������ǰ����ʾ��ͼƬ����
	  window.clearTimeout(time);   //��ֹ��ʱ��
   }
   
   for(i=1;i<=4;i++){//�����ĸ���ť��ͼƬ 
       if(count==i){//����ǵ�ǰͼƬ������ʾ��ͬʱ��Ӧ�İ�ŤΪ��ɫ
	      document.getElementById('d'+i).style.display='block';
		  document.getElementById('a'+i).style.backgroundColor='#0042B4';
	   }else{//��������ͼƬ����ť������ԭ
   	      document.getElementById('d'+i).style.display='none';
		  document.getElementById('a'+i).style.backgroundColor='#666666';	   
	   }   
   }
   if(count==4){//��Ϊ���һ��ͼƬʱ�У��Ա���ֵ��ʼ��
      count=0;
   }
   time=window.setTimeout("change()",2000);//����������ʱ��
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
}//�����м�任
var n=0;
function op_zc(){
	var x=document.getElementById("t3").value+"$";
	var y=window.showModalDialog("��ҳ��/ע��.html",x,"dialogwidth:1000px;dialogHeight:1000px;");
	var a=y.split("#");
	document.getElementById("t3").value=a;
	}//ע��ҳ�����
function op_dl(){
	var x=document.getElementById("t3").value;
	var y=window.showModalDialog("��ҳ��/��½.html",x,"dialogwidth:1000px;dialogHeight:1000px;");
	var a=y.split("$");
	document.getElementById("sed").innerText=a[0];
	document.getElementById("t2").value=a[1];
	}//��½ҳ�����
	
	function op_gw(){
		if(parseInt(document.getElementById('t2').value)>0){
			var qw=window.open("��ҳ��/���ﳵ.html","op3");
			}else{
				alert("���ȵ�¼");
				}//���ﳵҳ��
	}
	function op_j1(){
		if(parseInt(document.getElementById('t2').value)>0){
			var j1=window.open("��ҳ��/�Ҿ�һ.html","op4");
			}else{
				alert("���ȵ�¼");
				}//�Ҿ�һ
	}
	function op_j2(){
		if(parseInt(document.getElementById('t2').value)>0){
			var j2=window.open("��ҳ��/�Ҿ߶�.html","op5");
			}else{
				alert("���ȵ�¼");
				}//�Ҿ߶�
	}
	function op_j3(){
		if(parseInt(document.getElementById('t2').value)>0){
	var j3=window.open("��ҳ��/�Ҿ���.html","op5");
			}else{
				alert("���ȵ�¼");
				}
	}//�Ҿ���