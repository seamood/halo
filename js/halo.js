var navigator_li_id=$('navigator_li_id').id;
var lis=navigator_li_id.children[0].children;
for(var i=0;i<lis.length;i++)
{
	lis[i].onclick=function ()
	{
		for(var j=0;j<lis.length;j++){lis[j].style.color="#9e5130";}
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
      var date_new=[];
		function fn(date)
		{
			date_new=date;
		}
         
		window.onload=function(){
			var imgs=date_new.source_img;
			var slider_main_block=document.getElementById('slider_main_block');
			var name=["C","B","W","D","E","F"];
			var c=260,temp=0;
			var img_div=[],spans=[],ps=[];
			for(i=0;i<imgs.length;i++){
				var a=document.createElement('a');
				a.href="#";
                a.style.backgroundImage="url("+imgs[i]+")";
				var div1=document.createElement('div');
                if(i==0){a.className="type1"};
                if(i==1){a.className="type2"}
				div1.className="slider-main-img"

				div1.appendChild(a);	
				slider_main_block.appendChild(div1);
				img_div.push(div1);
				var div2=document.createElement('div');
				div2.className="div2";
				var p=document.createElement('p');
				p.innerHTML=name[i];
				p.style.color="#fff";
                ps.push(p);
				div2.appendChild(p);
				var span1=document.createElement('span');
				span1.className="slider-ctrl-con";
				span1.style.backgroundColor="#fff";
				div2.appendChild(span1);
				div2.style.right =c+"px";
				c=c-50;
				slider_main_block.appendChild(div2);
				spans.push(span1);
			}
            for(i=1;i<spans.length;i++){
                img_div[i].style.left=img_div[0].offsetWidth+"px";}
            window.onresize=function(){
                for(i=1;i<spans.length;i++){
                	img_div[i].style.left=img_div[0].offsetWidth+"px";
                }
            }
            ps[0].style.color="#9e5130";
            spans[0].style.backgroundColor="#9e5130";
            for(i=0;i<img_div.length;i++){
            	spans[i].index=i;
            	var time=null,time1=null;
            	spans[i].onclick=function(){
            	       clearInterval(time);	
            	       clearInterval(time1);
            	        console.log("temp1="+temp);
            	        var step=1,width=0;
            	        var that=this;
                        for(j=0;j<img_div.length;j++){
                            ps[j].style.color="#fff";
                            spans[j].style.backgroundColor="#fff";
                        }
                        ps[this.index].style.color="#9e5130";
                        spans[this.index].style.backgroundColor="#9e5130";


                         if(temp!=this.index&&this.index>temp){
                            img_div[that.index].style.left =img_div[0].offsetWidth+"px";
                        }else if(temp!=this.index&&this.index<temp){
                            img_div[that.index].style.left =-img_div[0].offsetWidth+"px";
                        }    


            		    time1=setInterval(function(){
            					img_div[that.index].offsetLeft>0?w=-25:w=25;
            					var gap=img_div[that.index].offsetLeft;	
            					if(Math.abs(gap)<=25){
            						clearInterval(time1);
            						img_div[that.index].style.left=0+"px";
            					}else{
            					img_div[that.index].style.left =img_div[that.index].offsetLeft+w+"px";}    
            				},10);  
                             if(temp!=this.index&&img_div[that.index].offsetLeft>0)
                                {  
                                    time=setInterval(function(){
                                        width=width+25; 
                                        console.log("temp2="+temp);
                                        img_div[temp].style.left=-width+"px";
                                        if(width>=img_div[0].offsetWidth){
                                            clearInterval(time);
                                            img_div[temp].style.left=-img_div[0].offsetWidth+"px";
                                            temp=that.index;
                                        }    
                                    },10);
                                }
                                else if(temp!=this.index&&img_div[that.index].offsetLeft<0)
                                {
                                    time=setInterval(function(){
                                        width=width+25;
                                        img_div[temp].style.left=width+"px";
                                        if(width>=img_div[0].offsetWidth){
                                            clearInterval(time);
                                            console.log("temp3="+temp);
                                            img_div[temp].style.left=img_div[0].offsetWidth+"px";
                                            temp=that.index;
                                        }
                                    },10);
                                }          			
            	}
            }
		}















function $(name){
	return{
		id:document.getElementById(name),
		class:document.getElementsByClassName(name),
		tag:document.getElementsByTagName(name)
	}

}