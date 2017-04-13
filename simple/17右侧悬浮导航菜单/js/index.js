var timer=null;

$('.box').hover(function(){
	clearTimeout(timer);
	timer=setTimeout(function(){
		$('.box').find('a').each(function(index,element){
			setTimeout(function(){
				$(element).stop().animate({'right':0},300);
			},50*index);
		})
	},200)
},function(){
	if(timer){
		clearTimeout(timer);
	}
	 $(this).find("a").each(function(index,element) {
	         setTimeout(function(){
	                $(element).stop().animate({"right":-110},300)
	         },50*index);
	  })
})