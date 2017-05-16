var navigator_li_id=$('navigator_li_id');
var lis=navigator_li_id.children[0].children;
for(var i=0;i<lis.length;i++)
{
	lis[i].onclick=function ()
	{
		for(var j=0;j<lis.length;j++){lis[j].children[0].style.color="#9e5130";}
		this.children[0].style.color="#fff";
	}
}
var navigator_pic_ids=$('navigator_pic_id');
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
            var name=["C","B","W","D"];
            var c=260,iNow=0;
            var img_div=[],spans=[],ps=[];
            // 动态创建轮播图
            for(i=0;i<imgs.length;i++){
                var a=document.createElement('a');
                a.href="#";
                a.style.backgroundImage="url("+imgs[i]+")";
                if(i==0){a.className="type1"; }
                else if(i==1){a.className="type2"}
                var div1=document.createElement('div');
                div1.className="slider-main-img";
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

            var scrollWidth = js_slider.clientWidth;
          for(i=1;i<spans.length;i++)
               {
                img_div[i].style.left=scrollWidth+"px";
               }
             window.onresize=function()
             {
                scrollWidth = js_slider.clientWidth;
               for(i=0;i<spans.length;i++)
               {
                if(i!=iNow){
                img_div[i].style.left=scrollWidth+"px";}
               }

            }

            ps[0].style.color="#9e5130";
            spans[0].style.backgroundColor="#9e5130";
            var iNow=0; var that;
            for(i=0;i<img_div.length;i++){
                    spans[i].index=i;
                    spans[i].onclick=function()
                    { 
                             that=this;
                            if(that.index>iNow)
                            {
                                animate(img_div[iNow],{left:-scrollWidth});
                                img_div[that.index].style.left=scrollWidth+"px";
                            }
                            else if(that.index<iNow)
                            {
                                 animate(img_div[iNow],{left:scrollWidth});
                                 img_div[that.index].style.left=-scrollWidth+"px";
                            }
                            iNow=that.index;
                            animate(img_div[iNow],{left:0});
                            setSquare();            
                    }
            }


            function setSquare() 
            {
                        for(var j=0;j<spans.length;j++)
                        {  
                            spans[j].style.backgroundColor="#fff";
                            ps[j].style.color="#fff";
                        }
                         ps[iNow].style.color="#9e5130";
                         spans[iNow].style.backgroundColor="#ffbddf";
             }


            var timer = null;
            timer = setInterval(autoplay,2000);

            function autoplay() 
            {
             
                animate(img_div[iNow],{left: -scrollWidth});
                ++iNow > img_div.length -1 ?  iNow = 0 : iNow;
                img_div[iNow].style.left = scrollWidth + "px"; 
                animate(img_div[iNow],{left: 0}); 
                setSquare();  
            }

            js_slider.onmouseover = function(){clearInterval(timer);}

            js_slider.onmouseout = function() 
            {
                clearInterval(timer);  
                timer = setInterval(autoplay,3000);
            }
           shouye();
        }
         


function $(name)
{
	return document.getElementById(name)
}