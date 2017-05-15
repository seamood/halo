var date=[];
function fn (da) {
	date=da;
	console.log(date)
}
window.onload =function(){
      // 导航开始
       // 字体改变颜色
		var ul = document.getElementById("menu");
		var lis = ul.getElementsByTagName("a");
		 lis[0].style.color = "white";
		 for (var i = 0; i < lis.length; i++) {
		 	lis[i].onmouseover = function () {
		 		for(var j=0;j<lis.length;j++){
		 			lis[j].style.color ="";
		 		}
		 		this.style.color = "white";
		 	}
		 }
		 ul.onmouseout=function(){
		 	for(var j=0;j<lis.length;j++){
		 			lis[j].style.color ="";
		 		}
		 	lis[0].style.color="white";
		 }

		 // 改变小图标
		var navigator_pic_ids=document.getElementById('function');
			var imgs= navigator_pic_ids.getElementsByTagName("img");
			for(var i=0;i<imgs.length;i++)
			{
				imgs[i].index=i;
				imgs[i].onmouseover=function () 
				{
					for(var j=0;j<imgs.length;j++)
						{imgs[j].src="../img/header_icon"+(j+1)+".png";
				}
					this.src="../img/header_icon"+(this.index+1)+"jiaohu.png";
				}
			}
            navigator_pic_ids.onmouseout=function(){
            	for(var j=0;j<imgs.length;j++){
            		imgs[j].src="../img/header_icon"+(j+1)+".png";	
		 		}
		 	    this.src="../img/header_icon"+(this.index+1)+"jiaohu.png";
            }
		 // 导航结束

		 // 内容换图开始
		  var huantu = document.getElementById("huantu");
          var huantulis = huantu.getElementsByTagName("li");
          var tu1=document.getElementById("tu1");
          var tu1child=tu1.getElementsByTagName("img")[0];
   	        fn(huantulis[0],"../img/zhifu 2.png"); // 实参  调用函数
            fn(huantulis[1],"../img/zhifu 3.png");
            fn(huantulis[2],"../img/zhifu 4.png");     
            function fn(lisa,bg)
            {  // 封装函数  参数的传递                             
                lisa.onmouseover = function()
                {
                  tu1child.src = bg;
                }
                lisa.onmouseout = function()
                {
                  tu1child.src="../img/shouye 18.png";
                }
            }//换图结束
            // pay页面加减
		    // function $(id){return document.getElementById(id)}
		     var sub=$("#sub");
		     var add=$("#add");
		     var amo=$("#amo")
		     var i=amo.value;
		    add.onclick = function(){
		        var i=amo.value;
		        i++;
		       amo.value=i;
		      }
		    sub.onclick = function(){
		       var i = amo.value;
		      i--;
		      if (i<=0) {
		        amo.value=0;
		        i = 0;
		           }
		       else
		       {
		        amo.value=i;
		       }
		    }//pay页面加减结束
           
          var aunt=document.getElementById("aunt");
          var TYlis=aunt.getElementsByTagName('button');
           // console.log(TYlis);
           TYlis[0].style.color="white";
           TYlis[0].style.backgroundColor="rgb(255,158,69)";
          for (var i = 0; i < TYlis.length; i++) {
          	TYlis[i].index=i;
          	TYlis[i].onclick=function () {
          		for (var b = 0; b < TYlis.length; b++) {
          		TYlis[b].style.backgroundColor="";
          	    TYlis[b].style.color=""; 
          		}
          		this.style.backgroundColor="rgb(255,158,69)";
          		this.style.color="white";
          	}
          	
          }
		  //pay页面结束

          //商家菜单
		  var cai_bar=document.getElementById('cai_bar');
		   var cai_li=cai_bar.children;
		   cai_li[0].style.color="rgb(255,158,69)";
		   for (var j = 0; j < cai_li.length; j++) {
          	cai_li[j].onclick=function () {
          		for (var i = 0; i < cai_li.length; i++) {
          			cai_li[i].style.color="";
          		}
          		this.style.color="rgb(255,158,69)";
          	}

          }

		    //评论页创建
 function tt(dd){
        //alert(dd);
    }
    var GG = {
        "kk":function(mm){
        	console.log(date)
           var pingjia=document.getElementById('pingjia');
           pingjia.innerHTML='';
      for(var j=(mm-1)*2; j<((mm-1)*2+2);j++)
      {
          var he=document.createElement('div');
          he.className="wtop";
          pingjia.appendChild(he);
                 var touxiang=document.createElement('div');
                 touxiang.className="zhifu9";
                touxiang.style.backgroundImage="url("+date.yonghu[j][0]+")";
                 touxiang.style.backgroundSize="cover";
                 he.appendChild(touxiang);
                 var pinlun=document.createElement('div');
                 pinlun.className="haopin";
                 pinlun.innerHTML=date.yonghu[j][1];
                 he.appendChild( pinlun);
                 if(date.yonghu[j][2].length!=0)
                 {
                    for(var k=0;k<date.yonghu[j][2].length;k++)
                    {
                      var img=document.createElement('img');
                      img.className="zhifu11"
                      img.src=date.yonghu[j][2][k];
                      he.appendChild( img);
                    }
                 }

           if(j%2==0){
            touxiang.style.float="left";
            pinlun.style.float="left";
           $('.wtop > img').css('float',"left");
          }else{
            touxiang.style.float="right";
            touxiang.style.marginLeft="30px";
            pinlun.style.float="right";
            console.log($('.wtop > img'))
        }

      }
      }
    }
    $("#page").initPage(date.yonghu.length,1,GG.kk);
      //  // 评论结束
           

           //跳转页面;


}

