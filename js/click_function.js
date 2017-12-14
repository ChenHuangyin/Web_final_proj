function change_bg(obj){
    var a=document.getElementsByClassName("nav")[0].getElementsByTagName("a");
    for(var i=0;i<a.length;i++){
        a[i].className="";
    }
    obj.className="current";
}
function toTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
 }
function toShare(){
	var d=document.getElementById('Copy');
	var file=window.location.href ;
	d.value=file;
	d.select();
	document.execCommand('copy');
	alert("当前网址已被复制到剪切板");
}
function loadMore(){
	var more=document.getElementById('more');
	var cur=document.getElementById('bottom');
	cur.style.height=cur.offsetHeight+300+"px";
}