var navigator_li_id=$('navigator_li_id').id;
var lis=navigator_li_id.children[0].children;
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function (){
		for(var j=0;j<lis.length;j++){
			lis[j].style.color="#9e5130";
		}
		this.style.color="#fff";
	}
}





var navigator_pic_ids=$('navigator_pic_id').id;
var imgs=navigator_pic_ids.children;
for(var i=0;i<imgs.length;i++)
{
	imgs[i].index=i;
	imgs[i].onmouseover=function () 
	{
		for(var j=0;j<imgs.length;j++){imgs[j].src="../img/header_icon"+(j+1)+".png";}
		this.src="../img/header_icon"+(this.index+1)+"jiaohu.png";
	}
}








function $(name){
	return{
		id:document.getElementById(name),
		class:document.getElementsByClassName(name),
		tag:document.getElementsByTagName(name)
	}

}