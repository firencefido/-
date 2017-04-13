window.onload=function(){
	var box=document.getElementById('box');
	var small=box.children[0];
	var big=box.children[1];
	var oImg1=small.children[0];
	var mark=small.children[1];
	var oImg2=big.children[0];
	small.onmouseover=function(){
		mark.style.display='block';
		big.style.display='block';
	}
	small.onmouseout=function(){
		mark.style.display='none';
		big.style.display='none';
	}

	small.onmousemove=function(ev){
		mark.style.display='block';
		var ev=ev||event;
		
		//console.log('距离左边:'+small.parentNode.offsetLeft);
		//console.log('鼠标坐标'+ev.clientX);
		x=ev.clientX-this.parentNode.offsetLeft-mark.offsetWidth/2;
		console.log('x:'+x);
		y=ev.clientY-this.parentNode.offsetTop-mark.offsetHeight/2;
		console.log('y:'+y);

		if(x<0){
			x=0;
		}else if(x>this.offsetWidth-mark.offsetWidth){
			x=this.offsetWidth-mark.offsetWidth;
		}
		if(y<0){
			y=0;
		}else if(y>this.offsetHeight-mark.offsetHeight){
			y=this.offsetHeight-mark.offsetHeight;
		}
		mark.style.left=x+'px';
		mark.style.top=y+'px';
		var n=oImg2.offsetWidth/oImg1.offsetWidth;

		oImg2.style.marginLeft=-x*n+'px';
		oImg2.style.marginTop=-y*n+'px';
		
	}
}

function getElementsByClassName(obj,tagName,className){
	var aTag=obj.getElementsByTagName(tagName);
	var arr=[];

	//支持查找标签中多个className
	for(var i=0;i<aTag.length;i++){
		var arrClassName=aTag[i].className.split(' ');
		for(var j=0;j<arrClassName.length;j++){
			if(arrClassName[j]==className){
				arr.push(aTag[i]);
				break;
			}
		}
	}
	return arr;
}