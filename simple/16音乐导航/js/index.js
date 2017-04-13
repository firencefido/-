$(function(){
	$('ul li:last').css('border',0);
	$('ul li').append('<ins></ins>');
	var arr=new Array('skyblue','pink','green','yellow','blue','deeppink','orange','purple');
	$('li ins').each(function(index,ele){
		$(this).css('background-color',arr[index]);
	});

	$('li').mouseenter(function(){
		$(this).children('ins').stop().animate({top:0},100);
		$('audio').get($(this).index()).load();
		$('audio').get($(this).index()).play();
	}).mouseleave(function(){
		$(this).children('ins').stop().animate({top:35},100);
	})

	$(window).keydown(function(event){
		var event=event||$(this).event;
		//alert(event.keyCode);
		var num=0;
		switch(event.keyCode){
			case 81:
				num=0;
				break;
			case 87:
				num=1;
				break;
			case 69:
				num=2;
				break;
			case 82:
				num=3;
				break;
			case 84:
				num=4;
				break;
			case 89:
				num=5;
				break;
			case 85:
				num=6;
				break;
			case 73:
				num=7;
				break;
			default:
		}
		$("nav li").eq(num).trigger("mouseenter");  // 事件触发
        setTimeout(function() {
            $("nav li").eq(num).trigger("mouseleave");  // 事件触发
        } ,300);
	})
})