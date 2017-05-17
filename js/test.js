function Get(id){
	return document.getElementById(id);
};

 var date_new = [],all_data = new Array();
   function fun(data_all)//data相当于JSON
    {
    	date_new = data_all.data.list;//拿到JSON里的list
    	all_date = data_all.data.list;
    	console.log(date_new);
    }
    window.onload=function(){
 function Create(cE,Cl,Ele,aCl){
	var Ele=document.createElement(Ele);
	Ele.className=Cl;
	cE.appendChild(ELe);
	if(a.length>=23){
		a=/^.{23}/.exec(a)+'...';
	}
	if(Ele=='img'&&a)Ele.src=a;
	else Ele.innerHTML=a;
   }
   console.log(date_new[0][0]);
 var uls_a=document.getElementsByClassName("uls_a");
 console.log(uls_a);
  for(var i=0;i<date_new[0].length;i++){
  console.log(date_new[0].length)
  	for(var j=0;j<date_new[0][i].length;j++)
  	{
      // console.log(date_new[0][i][j]);
      var lis=document.createElement("li");
      lis.innerHTML=date_new[0][i][j];
      uls_a[i].appendChild(lis);
  		 	}
   }
   var each=4;
   var helpArry = date_new[1].slice(0,each);
   console.log(helpArry);
   creatshow(helpArry);
   function creatshow(ary){
   Get("show").innerHTML="";
   for (var i = 0; i < date_new[1].length; i++) 
   {
     var lis_b=document.createElement("li");
     
     if (i%2==0) {
     lis_b.className="lis_b_none";
     }
     else{
      lis_b.className="lis_b";
     }

     Get("show").appendChild(lis_b);

     var imgs=document.createElement("img");
     imgs.className="img";
     imgs.src=date_new[1][i].img_name;
     lis_b.appendChild(imgs);

     var merchant_name=document.createElement("span");
     merchant_name.className="merchant_name";
     merchant_name.innerHTML="商家："+date_new[1][i].merchant_name;
     lis_b.appendChild(merchant_name);

   
     var merchant_address=document.createElement("span");
     merchant_address.className="merchant_address";
     merchant_address.innerHTML="("+date_new[1][i].merchant_address+")";
     lis_b.appendChild(merchant_address);

     var good_type=document.createElement("p");
     good_type.className="good_type";
     good_type.innerHTML=date_new[1][i].good_type;
     lis_b.appendChild(good_type);

     var mark=document.createElement("span");
     mark.innerHTML="￥";
     mark.className="mark";
     lis_b.appendChild(mark);

     var price=document.createElement("span");
     price.className="price";
     price.innerHTML=date_new[1][i].price;
     lis_b.appendChild(price);

     var hot=document.createElement("span");
     hot.className="hot";
     hot.innerHTML=date_new[1][i].hot+" 人评价";
     lis_b.appendChild(hot);

   }
   }
  console.log(date_new[2]);
      for(var i=0;i<date_new[2].length;i++){

     var erweima_div=document.createElement("div");
     if (i%2==0) {
     erweima_div.className="erweima_div_none";
     }
     else{
      erweima_div.className="erweima_div";
     }
     
     Get("middle_right").appendChild(erweima_div);


     var erweima=document.createElement("img");
     erweima.src=date_new[2][i].erweima;
     erweima.className="erweima";
     erweima_div.appendChild(erweima);

     var erweima_address=document.createElement("p");
     erweima_address.className=erweima_address;
     erweima_address.innerHTML=date_new[2][i].erweima_address;
     erweima_div.appendChild(erweima_address);
    }    
  
    var eat=document.createElement("p");
    eat.className="eat";
    eat.innerHTML="最近想吃";
    middle_right.appendChild(eat);

    console.log(date_new[3]);
    for(var i=0;i<date_new[3].length;i++)
   {
   	var show_div=document.createElement("div");
   	show_div.className="show_div";
   	Get("middle_right").appendChild(show_div);

   	var show_img=document.createElement("img");
   	show_img.className="show_img";
   	show_img.src=date_new[3][i].imgs;
   	show_div.appendChild(show_img);

   	var goods_name=document.createElement("p");
   	goods_name.className="goods_name";
   	goods_name.innerHTML=date_new[3][i].goods_name;
   	show_div.appendChild(goods_name);

   	var mark_b=document.createElement("span");
   	mark_b.innerHTML="￥";
   	mark_b.className="mark_b";
   	show_div.appendChild(mark_b);

   	var show_price=document.createElement("span");
   	show_price.innerHTML=date_new[3][i].price;
   	show_price.className="show_price";
   	show_div.appendChild(show_price);

   



   }
  
  
  
  
   
   }