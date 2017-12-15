var scrollTop,navbar,pos,timer,moveHeight,total_pos;

function header_float(){
    navbar = document.getElementById("navbar");
	window.onscroll=scroll_ad;
    function scroll_ad(){
        scrollTop = document.documentElement.scrollTop+document.body.scrollTop;
        pos = scrollTop - navbar.offsetTop;
        pos = pos/10;
        moveHeight = pos>0?Math.ceil(pos):Math.floor(pos);
        if(moveHeight!=0){
            navbar.style.top = navbar.offsetTop+moveHeight+"px";
			setTimeout(scroll_ad,100);
        }
		
    }
}

window.onload=header_float;

function toTop(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
 }
