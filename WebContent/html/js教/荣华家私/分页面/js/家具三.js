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