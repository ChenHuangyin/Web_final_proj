var scrollTop,navbar,pos,timer,moveHeight,total_pos;

function header_float(){
    navbar = document.getElementById("navbar");
	total_nav = document.getElementById('total_nav');
	window.onscroll=scroll_ad;
    function scroll_ad(){
        scrollTop = document.documentElement.scrollTop+document.body.scrollTop;
        pos = scrollTop - navbar.offsetTop;
        pos = pos/10;
		total_pos = scrollTop - total_nav.offsetTop;
        moveHeight = pos>0?Math.ceil(pos):Math.floor(pos);
        if(moveHeight!=0){
            navbar.style.top = navbar.offsetTop+moveHeight+"px";
			setTimeout(scroll_ad,100);
        }
		
		if(scrollTop <=  total_nav.offsetTop+30){
			total_nav.style.position = 'static';	
			total_nav.style.margin = 'auto';
			total_nav.style.left = 0;
		}else{
			total_nav.style.position = 'fixed';
			total_nav.style.marginTop = '-300px';
			total_nav.style.left = '8%';
		}
    }
}
